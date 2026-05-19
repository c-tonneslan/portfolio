---
title: A pagination bug that returned zero rows, and the saturating add that fixes it
pub_date: "2026-05-19"
published: false
canonical_url: https://c-tonneslan-portfolio.vercel.app/writing/saturating-adds-and-the-cosmos-bug
description: A live Cosmos RPC endpoint returned zero results for a query that obviously had rows. The cause was a uint64 overflow in the pagination loop. The fix is one of those tiny patterns that's easy to forget when you're working with user-supplied numbers.
tags: go, security, integer-overflow, cosmos-sdk, opensource
---

# A pagination bug that returned zero rows, and the saturating add that fixes it

Somebody filed a bug on cosmos-sdk a few months back ([#25006](https://github.com/cosmos/cosmos-sdk/issues/25006)) that's the kind of thing I love finding. It's reproducible against a public RPC endpoint, the symptom is unambiguous, and the cause is two lines of code that any of us could have written.

The repro is one URL:

    https://cosmos-rest.publicnode.com/cosmos/slashing/v1beta1/signing_infos?pagination.offset=12&pagination.limit=0xFFFFFFFFFFFFFFFF

That returns zero results. Change the limit to anything small, like `0x12`, and you get rows back. The offset is the same in both cases. The data is the same. The only thing that changed is asking for "give me a lot of rows starting at row 12" instead of "give me a few rows starting at row 12."

If you've been writing software long enough you can already smell what this is.

## The code

`Paginate` lives in `types/query/pagination.go`. It's the function that backs every paginated REST endpoint in the SDK, including `signing_infos`. The interesting part of the body:

```go
end := pageRequest.Offset + pageRequest.Limit

for ; iterator.Valid(); iterator.Next() {
    count++

    if count <= pageRequest.Offset {
        continue
    }
    if count <= end {
        err := onResult(iterator.Key(), iterator.Value())
        ...
    } else if count == end+1 {
        nextKey = iterator.Key()
        ...
    }
    ...
}
```

`Offset` and `Limit` are both `uint64` fields on the gRPC request type. They come from the user. So when somebody asks for offset=12 and limit=0xFFFFFFFFFFFFFFFF, the computation on line 1 is

    end = 12 + 0xFFFFFFFFFFFFFFFF
        = 0x1_0000_0000_0000_000B  (in real arithmetic)
        = 0x0000_0000_0000_000B    (after the high bit wraps)
        = 11

So `end` is now 11. The loop walks the iterator, increments `count` each step, and falls into one of three branches:

- `count <= 12`: skip (we're still inside the offset)
- `count <= 11`: emit (we're inside the page) — but this can never be true once `count > 12`, and `count > 12` happens immediately after the first branch lets you through
- `count == 12`: would set `nextKey` once — but that branch only fires after the second branch fires, and the second branch never fires

So you skip the first 12 rows, then on row 13 both inner conditions are false, and the loop just spins through the rest of the iterator doing nothing. The response is an empty array of rows and an empty next-key, and the user gets back zero results when they asked for everything past row 12.

The bug is not that the user did something silly. The bug is that integer overflow turned a sensible "give me everything past the offset" query into something the loop interprets as "give me nothing." There's no error, no warning, no rate limit hit. Just an empty list.

## The fix is small

Saturating addition. If the sum would overflow, clamp to the max value the type can hold:

```go
end := pageRequest.Offset + pageRequest.Limit
if end < pageRequest.Offset {
    end = math.MaxUint64
}
```

That's the entire fix. `a + b < a` is the standard Go test for unsigned overflow. If it's true, you've wrapped, so reset `end` to the largest possible value. The loop now treats "huge limit" the same way it would treat "asked for everything," which is exactly what the caller said they wanted.

The `else if count == end+1` branch has a small adjacent worry. If `end` is now `MaxUint64`, then `end+1` wraps to 0. But `count` starts at 0 and increments before any comparison, so `count == 0` can never fire. The branch silently never executes, which is fine — it just means we don't set `nextKey`, and the response has no next-page pointer. For a query that's asking for the entire tail of the dataset, no next page is the correct answer.

So one new branch, one stays a no-op, and we're done. The whole patch is six new lines plus a `math` import.

## The regression test

The existing test for `Paginate` uses a bank-store fixture with 235 entries. Adding the overflow case to it was the most useful place to put a regression test, because anyone reading the test file then sees the limit-0xFFFF... case sitting next to "verify paginate with offset and limit" and "verify paginate with offset greater than total results." It reads like a documented edge case rather than a one-off.

```go
s.T().Log("verify offset+limit overflow returns the page instead of nothing")
pageReq = &query.PageRequest{Offset: 12, Limit: 0xFFFFFFFFFFFFFFFF, CountTotal: false}
request = types.NewQueryAllBalancesRequest(addr1, pageReq, false)
res, err = queryClient.AllBalances(gocontext.Background(), request)
s.Require().NoError(err)
s.Require().Equal(res.Balances.Len(), numBalances-12)
```

`numBalances - 12` = 223. Before the fix this test fails with `res.Balances.Len() == 0`. After the fix it passes. Cheap to write, will catch any regression to this code path forever.

## What this generalizes to

The reason I'm writing about this is that I've seen the same shape of bug enough times that it's worth pulling out as a pattern.

Whenever you have

- a counter or position that you advance one step at a time, and
- a stopping point computed by adding two user-supplied numbers,

you have to think about overflow. The naive `a + b` works fine for the obvious "user picks a sane number" case. It also works fine for the obvious "user picks a number bigger than what's stored" case, because most stores have far fewer than `MaxUint64` rows. The case it doesn't handle is the one where the user picks a number large enough that `a + b` wraps inside the integer type.

The Cosmos endpoint had no incentive to defend against this because there's no public attacker payoff. The worst thing a bad actor can do here is "get zero results when they should have gotten lots." But if you're a third-party indexer that's paginating across a long tail and your client library passes through a huge limit hoping to grab everything at once, you might quietly miss thousands of rows on certain endpoints with no error. That's the kind of data-quality bug you find six months later via a discrepancy report, and by then you have to rebuild your indexes.

Three places I'd look for similar bugs:

1. Any RPC handler in any chain that takes `offset + limit`. Cosmos isn't the only one with this pattern, and the same fix applies wherever the math is done in `uint64`.
2. Anywhere a Go service computes `start + length` for byte-range reads. HTTP `Range:` headers do this constantly. Saturating arithmetic is the right answer there too, although in practice most HTTP servers reject silly ranges before they hit your code.
3. Any place that pre-computes the upper bound of a `for i = 0; i < end; i++` loop with `end := base + n`. If `base` and `n` come from anywhere a user can touch, you need to know what overflow does to the comparison.

The Go standard library has `math.MaxUint64`, and in 1.20+ there's `math/bits.Add64` if you want to detect the overflow explicitly. Both are fine. The check `if end < pageRequest.Offset` is the most common in the SDK style and was what I went with.

## What landed

The PR is [#26430](https://github.com/cosmos/cosmos-sdk/pull/26430). Six lines of code, one regression test, sat in the queue for a week, picked up by the cosmos-sdk team and merged into the main paginate path. The fix backports cleanly to v0.50 and v0.47 too, but those are separate PRs.

The thing I want anyone reading this to take away is the pattern, not the specific bug. Every gRPC paginate handler I've looked at since has the same shape, and the same one-line guard works on all of them. Worth pasting into your own code review checklist.
