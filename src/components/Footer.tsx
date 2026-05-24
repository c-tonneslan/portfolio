export default function Footer() {
  return (
    <footer className="border-t border-white/6 px-6 lg:px-8 py-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-6 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-medium mb-3">
            <span className="w-5 h-5 rounded-[5px] bg-gradient-to-br from-[#6bd1ff] to-[#3b82f6]" />
            Charlie Tonneslan
          </div>
          <p className="text-xs text-muted leading-relaxed max-w-xs">
            Software engineer in Philadelphia, working on civic, urban, and
            developer tooling.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-3">
            Site
          </p>
          <ul className="space-y-2 text-foreground/85">
            <li><a href="/#about" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="/#work" className="hover:text-accent transition-colors">Work</a></li>
            <li><a href="/#open-source" className="hover:text-accent transition-colors">Open source</a></li>
            <li><a href="/#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-3">
            Elsewhere
          </p>
          <ul className="space-y-2 text-foreground/85">
            <li><a href="/writing" className="hover:text-accent transition-colors">Writing</a></li>
            <li><a href="/notes" className="hover:text-accent transition-colors">Notes</a></li>
            <li><a href="/lab" className="hover:text-accent transition-colors">Lab</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted mb-3">
            Reach
          </p>
          <ul className="space-y-2 text-foreground/85">
            <li>
              <a href="mailto:cst0520@gmail.com" className="hover:text-accent transition-colors">
                cst0520@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/c-tonneslan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                github.com/c-tonneslan
              </a>
            </li>
          </ul>
        </div>
        <div className="md:text-right">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">
            Status
          </p>
          <p className="inline-flex items-center gap-2 text-foreground/85">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            Open for work
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <p>© {new Date().getFullYear()} Charlie Tonneslan</p>
        <p>charlietonneslan.dev</p>
      </div>
    </footer>
  );
}
