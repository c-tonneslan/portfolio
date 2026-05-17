---
title: What I learned opening my first sixty open source pull requests
pub_date: "2026-05-17"
published: false
canonical_url: https://c-tonneslan-portfolio.vercel.app/writing/first-sixty-prs
description: Twelve days ago my GitHub account had zero contributions on it. Today there are about sixty PRs across twenty-something repos. Here's what I got wrong, in the actual order I got it wrong.
tags: opensource, beginners, career, github
---

# What I learned opening my first sixty open source pull requests

Twelve days ago my GitHub account had zero contributions on it. Not zero this year, zero ever, because I'd deleted my old account in a fit of housekeeping and started fresh from a new email. Today there are about sixty pull requests open or merged across twenty-something repos in Go, Rust, Python, and TypeScript. About half are merged. A few got rejected (one for reasons I'll get to). The rest are in review.

The version of this I want to write is the version I wish I'd read at the start. Not "fork the repo, read CONTRIBUTING.md, be respectful," you already know that. The version where I tell you about the things I got wrong, often, in the order they happened.

The first thing I got wrong was assuming the "good first issue" tab was a green field. It isn't. Day one, I opened the Tailscale repo, filtered "good first issue" to oldest first, picked the first one with a clean repro, and had a fix in an hour. Went to push the PR, ran `gh pr list`, and found there was already an open PR for it dated six weeks earlier, sitting in review. This kept happening. A third of the issues I picked off that tab had a draft PR somewhere. The ones that didn't have a PR often had a maintainer comment buried in the thread saying "actually we don't want to fix this" or "blocked on another redesign, don't bother."

What saved me was a single command I now run before touching anything:

```
gh pr list --repo OWNER/REPO --state all --search "<keyword from issue>"
```

If there's already a PR you'll see it. If there's a closed PR with maintainer comments you'll learn the project's actual opinion on the issue, which is usually more useful than reading the issue itself. I skipped this once on a chi PR and ate a "duplicate of #1085, which was submitted first and merged today" comment within an hour. Annoying. Avoidable.

## Read CONTRIBUTING.md before writing a line

The first PR I rushed without reading CONTRIBUTING.md was to a project with a mandatory PR template I hadn't filled out. Their `github-actions` bot auto-closes any PR that leaves required fields blank. It auto-closed mine in five minutes. I wasn't even on the page when it happened.

Same week, I got a PR rejected from rs/zerolog for a more subtle reason. I'd added a method that accepted a Go `context.Context` and made it available on subsequent log events from that logger chain. It looked like the obvious convenience; every other modern Go logging library has something similar. The owner replied within a few hours: this is semantically incorrect, the method name implies the receiver context is being decorated, your change actually modifies the receiver, that can break code that depends on the immutability of the chain. Closed. The code was correct. The test passed. The change lived inside a single function. None of that mattered, because I'd altered the contract of a public method in a stable library that other people depend on.

Two lessons from that week. Read CONTRIBUTING.md and the PR template before writing a line. Templates exist to save the maintainer's time, fill them out completely. And don't change the semantic contract of a public method in a stable library just because the change feels internally consistent. If you think a public API needs to evolve, file an issue first and let the maintainers decide. The cost of asking is small. The cost of having your refactor closed because nobody asked you to is bigger than just the time you spent.

The zerolog rejection is the one that really changed how I think about API stability. I now check whether a small refactor actually changes user-observable behavior, even if it doesn't break the test suite.

## Reading code with no agenda finds better bugs than the issue tracker

There's an obvious play. Open the issue tracker, pick a labeled issue, fix it. That works, and it's what I did the first few days. It's also competitive, and limits you to bugs the maintainers have already triaged.

The PRs I'm most proud of came from reading code with no agenda. Two examples. The first was a stale-context bug in pgx, the Postgres driver for Go. I was reading the connection-fallback path because I wanted to understand how `target_session_attrs=prefer-standby` actually worked. Halfway through I noticed a `ctx` variable being shadowed inside a for-loop and then reused in a fallback branch where its deadline had already burned. Nobody had filed an issue. The maintainer merged the fix in a few hours. The second was a nil panic in Wails, the Go-to-frontend desktop framework. I was reading their app-startup path, saw that `Application.Quit` dereferenced an inner pointer that didn't get assigned until `Run`, wrote a five-line program that triggered the panic, and shipped a one-line fix.

Both were hard to find from the issue tracker because nobody knew they existed. They came from reading. That's the angle I'd push to anyone starting out. Pick a project whose code you actually use. Read one of its packages end to end without trying to fix anything. Take notes on everything that surprises you. Some of those will be bugs.

The other thing I had to retrain myself on was tests. Three early PRs sat untouched for days, and in every case the reviewer's first comment was "can you add a test?" So I started doing it by default. Even for a one-line fix, mirror the existing test pattern in the package and add a case that fails before the fix and passes after. Don't introduce a new test framework or assertion library to a file that's been using `t.Errorf` for years; that's an instant flag. And a regression test on its own is sometimes acceptable even when the fix needs more thought. I had a sqlx PR where the maintainer asked me to split the test out as a separate commit, and that landed first.

## Commit messages in the project's voice

I read a hundred-ish commits from golang/go, tailscale, and a couple of Charm repos before writing my first PR, just to internalize the rhythm. Go projects almost always use `package/path: short verb-first description`, lowercase after the colon, no trailing period, around fifty characters. The body, when there is one, explains why rather than what, in plain prose paragraphs (not bullets), wrapped at seventy-two characters. First-person is normal. Opinions are normal.

Here's a real Tailscale commit body I think reads well:

> The Engine watchdog wrapped every wgengine.Engine method call in a goroutine with a 45s timeout and crashed the process on timeout. It was added years ago to surface deadlocks during development, but the underlying deadlocks have long since been fixed, and even when it did fire it produced obscure stack traces (from inside the watchdog goroutine, not the original caller) without buying much.

Notice the personal history ("added years ago"), the opinion ("without buying much"), no bullet list even though it has multiple reasons. None of those things are hard on their own. Getting all of them in the same paragraph reliably is the part that takes practice.

Twenty PRs in, I noticed the quality of attention I was getting was uneven. Some maintainers reviewed within an hour. Some sat on PRs for a week. A few projects auto-closed mine before a human ever saw it. So I started keeping a list per-repo of "is this worth the next PR." A repo earns its way on by responding within a few days, having maintainers who comment substantively rather than just merging or closing, and having an issue tracker that isn't a graveyard. The names that consistently delivered fast useful review for me: Tailscale, the Charm projects (`huh`, `log`, `bubbles`, `lipgloss`), `pgx`. A handful of others I quietly stopped trying after a closure or two; enough of a pattern for me, not worth the activation energy to push back. Your list will look different. The point is to have one.

After fifty-something PRs, the ones that merged in under a day had basically the same shape. One logical change, not "fixed this and also cleaned up some imports while I was there." A diff under fifty lines, ideally under twenty. A test that proves the bug. A commit message that explains the why in a paragraph of plain prose. A PR body that references the issue number and adds a sentence or two about how I found the bug. No reformatting of surrounding code. The PRs that sat for a week missed at least two of those. The ones that got rejected missed all of them.

If you're sitting at zero contributions and feeling like the gap is too wide, the thing I'd say is what I wish someone had said to me. Pick one or two projects whose code you already use. Read one package end to end without trying to fix anything. Take notes. When you find something that's actually wrong, file an issue first if the project asks for one, then write the smallest possible fix with a test, then write a commit message that sounds like you've worked on the project for years. Do that ten times before you let yourself think about volume. Almost every shortcut version of this (find good-first-issues, fix typos in docs, run a script that opens fifty drive-by PRs) has either been done by someone else or is the kind of thing that doesn't teach you anything. The thing that teaches you and the thing that catches a maintainer's attention are the same thing: showing that you read the code.
