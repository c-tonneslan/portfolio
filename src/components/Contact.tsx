export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-card-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono text-muted uppercase tracking-widest mb-10">
          § contact
        </p>

        <div className="max-w-xl space-y-4 text-muted leading-relaxed">
          <p>
            Looking for software engineering roles, especially anywhere code
            meets cities, planning, or public infrastructure. If you&apos;re
            hiring or want to collaborate, drop a line.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-8 text-sm">
          <a
            href="mailto:cst0520@gmail.com"
            className="text-foreground border-b border-foreground/40 hover:border-foreground transition-colors pb-0.5"
          >
            cst0520@gmail.com
          </a>
          <a
            href="https://github.com/c-tonneslan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            github
          </a>
        </div>
      </div>
    </section>
  );
}
