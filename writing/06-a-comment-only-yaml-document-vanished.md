---
title: A comment-only YAML document made the next document disappear
pub_date: "2026-05-19"
published: false
canonical_url: https://c-tonneslan-portfolio.vercel.app/writing/a-comment-only-yaml-document-vanished
description: A goccy/go-yaml user filed a bug where parsing a multi-doc YAML stream silently dropped one document. The cause was three lines in the token grouper that returned early when they should have recursed. The interesting part is the shape of the bug, not the fix.
tags: go, yaml, parsers, opensource, bug-hunt
---

# A comment-only YAML document made the next document disappear

Somebody on goccy/go-yaml filed [#870](https://github.com/goccy/go-yaml/issues/870): if you parse a multi-doc YAML stream that has a "comment-only document" in the middle, the document right after it silently disappears. No error. No warning. The parser just hands you back fewer documents than the source has.

Their repro is six lines:

```yaml
a: 1
---
# comment only
---
b: 2
```

Three documents in the source. Run it through `parser.ParseBytes`:

```go
file, err := parser.ParseBytes([]byte(src), 0)
fmt.Printf("docs: %d\n", len(file.Docs))
```

Output:

    docs: 2

That's the bug. The reporter checked the same input against `gopkg.in/yaml.v3` to make sure it wasn't them, and got 3 back. So it's specifically a goccy/go-yaml issue.

I want to write about this one because (a) it's the kind of bug that survives in a parser for years, since most YAML in the wild doesn't have comment-only documents and the test suite didn't either, and (b) the diagnosis is the satisfying part, not the patch.

## Where the documents are made

`parser.ParseBytes` runs the lexer, then groups the resulting tokens into per-document blocks, then parses each block. The grouping step is in `parser/token.go`, in a function called `createDocumentTokens`. It's about 80 lines of code that walks a flat token list, splits on `DocumentHeaderType` (the `---` marker) and `DocumentEndType` (the `...` marker), and returns one `TokenGroup{Type: TokenGroupDocument, Tokens: ...}` per source-level document.

The interesting branch is the one that runs when we hit `---`:

```go
case token.DocumentHeaderType:
    if i != 0 {
        ret = append(ret, &Token{
            Group: &TokenGroup{Tokens: tokens[:i]},
        })
    }
    if i+1 == len(tokens) {
        return append(ret, &Token{ /* a doc that's just --- */ }), nil
    }
    if tokens[i+1].Type() == token.DocumentHeaderType {
        return append(ret, &Token{
            Group: &TokenGroup{
                Type:   TokenGroupDocument,
                Tokens: []*Token{tk},
            },
        }), nil
    }
    ...
```

That third `if` is the bug.

Imagine the lexer hands `createDocumentTokens` these tokens for our six-line repro:

    a  :  1  ---  ---  b  :  2

(comments are stripped out of the token stream and attached to the surrounding tokens as metadata, so the comment-only "document" is just an empty span between two `---` markers.)

Walking through:

- `i=0`: not a marker, just a key. Continue.
- `i=1`: `:`. Continue.
- `i=2`: scalar `1`. Continue.
- `i=3`: first `---`. `i != 0`, so we close out `a: 1` as document 1. Buffer continues at `i=4`.
- `i=4`: the inner check fires. `tokens[i+1]` is the second `---`. So we hit the "current marker followed by another marker" branch.

That branch returns `append(ret, {one empty doc})` and stops. Three tokens after the second `---` (`b`, `:`, `2`) are just dropped on the floor.

The behavior the author intended was probably: "when we see two markers in a row, the document between them is empty, emit it and continue." The behavior they got was: "emit it and stop."

## The fix

Recurse on the rest:

```go
if tokens[i+1].Type() == token.DocumentHeaderType {
    // Empty document followed by another --- separator.
    // Emit the empty doc and continue parsing the rest of
    // the stream instead of dropping it.
    ret = append(ret, &Token{
        Group: &TokenGroup{
            Type:   TokenGroupDocument,
            Tokens: []*Token{tk},
        },
    })
    tks, err := createDocumentTokens(tokens[i+1:])
    if err != nil {
        return nil, err
    }
    return append(ret, tks...), nil
}
```

That's the patch. Append the empty doc, recurse on `tokens[i+1:]` for the rest of the stream, splice the results, done.

The other branches in the same function already use this recurse-on-the-tail pattern (the `DocumentEndType` branch, the trailing-EOF branch). The one branch that didn't was an oversight. Fixing it makes the three branches consistent.

## The thing I want to draw out

Bugs in parsers tend to have one of two shapes.

The first is "we mishandle an input we never thought about." Those are the panic-on-weird-input fuzzer finds, the off-by-one when a token sits exactly at a buffer boundary, the unicode-character-that-breaks-the-regex bugs. They're surface-level. You find them, you add a test, you move on.

The second shape is more subtle. The code does the right thing for one input pattern and the wrong thing for an adjacent pattern that the author didn't enumerate. The function in this case "knew about" three transitions:

- non-marker → marker (close the current doc, start a new one)
- marker at EOF (handle the trailing dangling marker)
- marker → marker (the bug)

The author handled the first two by recursing or continuing. They handled the third by returning. The shape of the bug isn't "we forgot a case." It's "we handled the case wrong, in a way that's visually similar to the cases above it." Reading that branch in isolation, returning looks reasonable: "we found a doc, emit it, done." But the function's contract is "process the whole token list," and one return early breaks that contract for the rest of the stream.

The way I find these is to read every branch of a function and ask: "if I were standing inside this branch, what state do I leave behind?" Most parser functions have an implicit invariant that they make progress until the input is exhausted. Any branch that returns without exhausting the input is suspect. Sometimes that's intentional (we found the answer, no need to keep going). Sometimes it's a bug.

In this case the `i+1 == len(tokens)` branch is fine because the input *is* exhausted. The `tokens[i+1].Type() == token.DocumentHeaderType` branch sat right next to it and looked like a sibling, but it isn't — there can still be input after the second marker.

## The regression test

```go
func TestCommentOnlyDocumentDoesNotDropFollowing(t *testing.T) {
    src := "a: 1\n---\n# comment only\n---\nb: 2\n"
    file, err := parser.ParseBytes([]byte(src), 0)
    if err != nil {
        t.Fatalf("parse error: %v", err)
    }
    if got, want := len(file.Docs), 3; got != want {
        t.Fatalf("got %d docs, want %d", got, want)
    }
    if file.Docs[0].Body == nil {
        t.Errorf("first doc body should not be nil")
    }
    if file.Docs[1].Body != nil {
        t.Errorf("middle (comment-only) doc body should be nil, got %T", file.Docs[1].Body)
    }
    if file.Docs[2].Body == nil {
        t.Errorf("third doc body should not be nil")
    }
}
```

Concrete on every dimension. Three docs. Middle one has a nil body (the comment-only case). Outer two have bodies. Anyone editing the grouper in the future who breaks this gets a test failure that points at exactly the contract.

## What landed

The PR is [#884](https://github.com/goccy/go-yaml/pull/884). Three lines of fix, twenty lines of test, no behavior change for any input that wasn't already broken. It's been sitting open for a few days; goccy's review queue is what it is.

The lesson from this one isn't about YAML. It's that when you're reading a parser, the most productive question to ask any branch is: "what happens to the tokens after this branch returns?" If the answer is "they get processed by the caller's outer loop," fine. If the answer is "they don't, this is a leaf," check whether the caller knows that. If the answer is "I don't know," you've probably found a bug.
