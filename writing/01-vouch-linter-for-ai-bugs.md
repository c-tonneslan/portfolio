---
title: Building a linter for the bugs AI agents actually make
pub_date: "2026-05-17"
published: false
canonical_url: https://c-tonneslan-portfolio.vercel.app/writing/vouch-linter-for-ai-bugs
description: I lost an hour last Tuesday to a function that didn't exist. Then I noticed it had a shape, and so did most of the other bugs I'd been hitting. So I wrote a Go CLI that catches them.
tags: go, ai, opensource, devtools
---

# Building a linter for the bugs AI agents actually make

I lost an hour last Tuesday to a function that didn't exist. The agent had written what looked like fine Postgres code, `db.QueryRowContext` with a context and a query string and a couple of args. It compiled. Wouldn't run. Took me forty minutes to work out it had used `db.QueryRow` (no context, different signature) inside something it called `QueryRowContext`, and was handing five things to a function that wanted three. The build error was clear enough, in hindsight. What wasted my hour was that it looked like a hundred other build errors I'd seen, and I kept reading it as a typo I could fix in two seconds.

There's a number that keeps making the rounds, that a majority of developers now say they spend more time debugging code their AI assistant wrote than debugging code they wrote themselves. I'd argue with the methodology if I didn't feel it in my own week.

Sitting with the Tuesday bug, I started cataloging. It had a shape, and so did most of the bugs I'd been hitting. Hallucinated method names. Right name, wrong arity. Right arity, wrong types. A constant that got renamed three versions back and now exists only in the agent's training data. They cluster. They're not random. So I went looking for a Go linter that catches them, and when I couldn't find one I wrote it.

It's a Go CLI called vouch. The first thing it does, the thing that's working as of this week, is read the output of `go build` and tell you whether your failure looks like an AI hallucination or a normal-person bug. That distinction matters more than I'd expected, and the way I built the detector is dumber than I'd expected, so this is about both.

Go already has good linters. `staticcheck` is sharp, `golangci-lint` bundles two dozen analyzers and is the standard at every company I know. They catch real bugs. What they don't catch is "your AI assistant called `db.WithTimeout()` and that method doesn't exist." That's a build failure, not a lint failure, and by the time the linter runs the compiler has already given up. For a human writing Go, build failures are usually typos. You fix them in five seconds and barely register them as bugs. For AI-written Go, build failures are the most common bug class by a wide margin, and they cluster into the four shapes above. You can see all of them in a single `go build` output, sitting next to each other, indistinguishable from a missing import. What vouch does is pull them out and label them.

I wanted the first detector to be useful without being clever, so it isn't. It's a screen scraper. It shells out to `go build ./...`, captures stderr, parses each line against a small set of regular expressions, and bins the error into one of four categories: undefined-symbol, undefined-method, arity-mismatch, type-mismatch. No language server, no AST walking, no model in the loop. `go build` and regex. The regex was ninety minutes of work. Most of the day went into the test fixtures, which is the same proportion every tool I've built has settled into.

The piece that actually matters is the `--diff` flag. It narrows the report to lines you changed:

```
$ vouch check . --diff main
internal/store/user.go:42: arity-mismatch
  ctx.WithTimeout(5 * time.Second) called with 1 arg, expected 2
  func WithTimeout(parent Context, timeout Duration) (Context, CancelFunc)
```

That's what turns vouch from "tell me everything wrong with this codebase" into "tell me what my agent just broke." Without the diff scope, it's noise. With it, it's a five-second pre-PR check.

I want to head off the obvious counterargument. A lot of the AI-code-review tooling I've seen does the obvious thing, throws the diff at a model and asks the model what's wrong. Sometimes that works. It also costs money per invocation, takes a few seconds per file, and gives you a different answer every time you run it. Deterministic checks are free, instant, and reproducible. If you've called `ctx.WithTimeout(5 * time.Second)` with one argument I don't need a frontier model to tell me you forgot a parent context. I need `go build` and a regex. The plan from here is to layer gopls on top for the cases the compiler alone can't catch (wrong arg order on signatures that happen to type-check, deprecated APIs), and only reach for a model at the very end, narrowed to a region the cheap checks already flagged. That's the inverse of how most of this tooling is shaped today, and the inverse is right.

The bug that actually pushed me from thinking about building vouch to building it wasn't even in the four-bucket bin. I was helping an agent put together a small Go service, and it produced this:

```go
db, err := sql.Open("postgres", dsn)
if err != nil {
    return err
}
defer db.Close()

rows, err := db.QueryContext(ctx, "SELECT id FROM users")
if err != nil {
    return err
}
defer rows.Close()
```

Compiles. Runs. Wrong in a way I didn't catch for thirty minutes, because there's no `db.Ping()` after `sql.Open`. The first failure mode isn't a connection error at startup, it's a panic deep inside `QueryContext`. Classic. Mirrors a thousand Stack Overflow examples but skips the half they leave implicit. vouch doesn't catch this one yet. It's a pattern-incompleteness bug and it lives further up the difficulty curve. I started with the four-bucket detector because building real coverage on the easy class first is how you find out if the rest is worth chasing.

Which gets to the part nobody else is doing. If I tell you my AI linter catches AI bugs, you should ask me how often. Precision, recall, false positive rate against an off-the-shelf staticcheck pass on the same code. Every "I built an AI code reviewer" project I've come across skips that question. They show one screenshot of one bug. They don't tell you how often the tool cries wolf. The next thing I'm building isn't the next detector, it's a real eval harness, fifty-plus real-world AI-authored PRs pulled from public GitHub history (you can find them by searching for the `Co-Authored-By: Claude` trailer, Cursor's metadata, Devin's PR titles, or Sweep's signature), labeled for whether they introduced bugs, and a detection-rate number to put in the README.

I had a moment last week where I almost started the api-shape detector before I'd ever run vouch against a real codebase. Would have been a mistake. The thing that earns a tool the right to keep growing is showing that its first claim is actually true. Code's at github.com/c-tonneslan/vouch.
