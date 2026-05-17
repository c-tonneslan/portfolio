import type { ReactNode } from "react";

export type Note = {
  slug: string;
  title: string;
  repo: string;
  prUrl: string;
  date: string;
  excerpt: string;
  body: ReactNode;
};

const Code = ({ children }: { children: string }) => (
  <pre className="my-5 overflow-x-auto rounded-lg border border-[#1e1e1e] bg-[#0a0a0a] p-4 text-sm leading-relaxed">
    <code className="font-mono text-foreground/90">{children}</code>
  </pre>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="my-4 leading-relaxed text-foreground/80">{children}</p>
);

const Inline = ({ children }: { children: ReactNode }) => (
  <code className="rounded bg-[#1a1a1a] px-1.5 py-0.5 font-mono text-[0.9em] text-accent">
    {children}
  </code>
);

export const notes: Note[] = [
  {
    slug: "pgx-context-leak",
    title: "A stale context bug in pgx's connectPreferred",
    repo: "jackc/pgx",
    prUrl: "https://github.com/jackc/pgx/pull/2554",
    date: "2026-05-16",
    excerpt:
      "Reading pgconn's connection setup, I found a context variable leaking out of a for-loop and into the fallback path, where it would already be expired.",
    body: (
      <>
        <P>
          I was reading pgconn&apos;s connection setup code (just learning the
          codebase, no agenda) and got stuck on the fallback branch in{" "}
          <Inline>connectPreferred</Inline>. The function walks through every
          host the user passed with{" "}
          <Inline>target_session_attrs=prefer-standby</Inline> (or{" "}
          <Inline>prefer-primary</Inline>), and if none of them match the
          preference, it falls back to whichever host connects at all.
        </P>
        <P>
          The fallback loop reused a <Inline>ctx</Inline> variable from the
          preferred-pass loop above it. The preferred pass had been
          overwriting <Inline>ctx</Inline> with a per-host
          <Inline>ConnectTimeout</Inline>-bounded context each iteration. So
          by the time control fell through to the fallback, <Inline>ctx</Inline>{" "}
          held the deadline of whichever host the loop tried last, and that
          deadline had usually already burned.
        </P>
        <P>
          If you set <Inline>ConnectTimeout=3s</Inline> and handed it three
          preferred-standby hosts, the whole nine-second wall budget would
          tick away during the preferred pass, and the fallback would inherit
          a dead context. You&apos;d see{" "}
          <Inline>context deadline exceeded</Inline> even though{" "}
          <Inline>octx</Inline>, the caller&apos;s original context, still had
          plenty of time.
        </P>
        <P>
          Fix is one extra <Inline>context.WithTimeout(octx, c.ConnectTimeout)</Inline>{" "}
          so the fallback gets its own fresh budget, same pattern the loop uses
          per host:
        </P>
        <Code>{`ctx, cancel = context.WithTimeout(octx, c.ConnectTimeout)
defer cancel()
pgConn, err = connectOne(ctx, c, fc, true)`}</Code>
        <P>
          Five-line diff. Tagged <Inline>Fixes #2172</Inline>. Reviewed and
          merged by jackc.
        </P>
        <P>
          The thing that stuck with me is how easy it is to leak a context
          variable in Go without realizing. The loop variable problem
          (<Inline>for _, x := range xs</Inline> capturing the wrong{" "}
          <Inline>x</Inline> in a closure) gets a ton of attention. Loop-body
          assignments to an outer-scope context, much less.
        </P>
      </>
    ),
  },
  {
    slug: "wails-pre-run-panic",
    title: "A nil panic in Wails when you Quit before Run",
    repo: "wailsapp/wails",
    prUrl: "https://github.com/wailsapp/wails/pull/5468",
    date: "2026-05-16",
    excerpt:
      "Someone called Application.Quit on a wails app before Run had built the inner application. The framework punished it with a panic. Easy fix.",
    body: (
      <>
        <P>
          A wails user filed issue #5452: their app called{" "}
          <Inline>Application.Quit()</Inline> inside a startup-failure path,
          before <Inline>Run()</Inline> had a chance to set up the inner
          application. The result was a nil deref deep inside{" "}
          <Inline>Quit</Inline>, which took down the host process.
        </P>
        <P>
          The fix is the one the reporter suggested in the issue: guard{" "}
          <Inline>Shutdown()</Inline> on the inner app being non-nil.
        </P>
        <Code>{`func (a *App) Quit() {
    if a.application != nil {
        a.application.Shutdown()
    }
}`}</Code>
        <P>
          What I liked about this bug is that it&apos;s a totally reasonable
          user mistake. You&apos;d write that &ldquo;quit early on bootstrap
          failure&rdquo; code in five seconds and never think twice about it.
          But the framework was punishing it with a panic. Nil-guarding the
          public API turns a hard crash into a no-op, which is the right
          default for a method that runs before initialization completes.
        </P>
        <P>
          Added the changelog entry under <Inline>[Unreleased]</Inline> per the
          v2 contributor checklist, opened the PR with a tight description,
          and the wails team merged it the same day.
        </P>
      </>
    ),
  },
  {
    slug: "nats-kv-empty-token",
    title: "Empty tokens slipping past nats.go's KV key validator",
    repo: "nats-io/nats.go",
    prUrl: "https://github.com/nats-io/nats.go/pull/2076",
    date: "2026-05-15",
    excerpt:
      "Keys like foo..bar contain an empty token, which makes them invalid NATS subjects. The client validator missed them. The server then returned a misleading error.",
    body: (
      <>
        <P>
          NATS subjects are dot-separated tokens. JetStream&apos;s KV store
          layers on top of that and validates keys through{" "}
          <Inline>keyValid</Inline> in <Inline>kv.go</Inline> and{" "}
          <Inline>searchKeyValid</Inline> in <Inline>jetstream/kv.go</Inline>.
          Both reject keys with a leading or trailing dot.
        </P>
        <P>
          What they didn&apos;t reject was keys with consecutive dots in the
          middle. <Inline>foo..bar</Inline> has an empty token, which makes it
          an invalid NATS subject. The server bounces it, but by that point
          you&apos;re already on the wire, and the error coming back is the
          misleading <Inline>nats: jetstream not enabled</Inline> rather than
          something like <Inline>invalid key</Inline>.
        </P>
        <P>
          So this was really a UX bug. Two adjacent dots passed client
          validation, hit the server, and the server&apos;s error didn&apos;t
          tell you what was actually wrong.
        </P>
        <P>Fix is a one-liner in both validators:</P>
        <Code>{`if strings.Contains(key, "..") {
    return false
}`}</Code>
        <P>
          Added <Inline>Watch(&quot;foo..bar&quot;)</Inline> and{" "}
          <Inline>Watch(&quot;test..&quot;)</Inline> to the existing{" "}
          <Inline>invalid watchers</Inline> subtest in{" "}
          <Inline>jetstream/test/kv_test.go</Inline>. Both return{" "}
          <Inline>ErrInvalidKey</Inline> now before any network call.
        </P>
        <P>
          The kind of bug where the original author was clearly thinking about
          subjects ending in a dot (an empty last token) but missed that the
          same problem applies anywhere a token is empty. Easy to miss,
          satisfying to find.
        </P>
      </>
    ),
  },
];
