export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-card-border">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono text-muted uppercase tracking-widest mb-10">
          § about
        </p>

        <div className="space-y-5 text-muted leading-relaxed">
          <p>
            Most of what I&apos;ve learned has come from reading large
            codebases and trying to fix something small in them. The PRs in
            the open source section below are how I got my hands on Go and
            Rust beyond the toy-project level. It&apos;s also where I picked
            up most of what I know about race conditions, retries, and the
            shape of error handling people actually live with in production.
          </p>
          <p>
            The projects I build for myself tend to land near cities and
            transit. <span className="text-foreground">civic-philly</span> is
            5,000+ Philadelphia housing and zoning records joined against
            census tracts and council districts.{" "}
            <span className="text-foreground">septa-live</span> is a live map
            of every SEPTA line that publishes realtime data.{" "}
            <span className="text-foreground">groundwork</span> stitches
            6,500+ affordable-housing projects across six cities into one
            schema with rent-burden overlays. The civic stuff sits next to
            developer tooling like <span className="text-foreground">vouch</span>{" "}
            (a Go CLI for catching AI-code failure modes) and{" "}
            <span className="text-foreground">littledb</span> (a 1,500-line
            embedded KV store with a copy-on-write B+tree).
          </p>
          <p>
            Looking for software engineering work, particularly in civic tech,
            urban systems, or developer tooling.
          </p>
        </div>
      </div>
    </section>
  );
}
