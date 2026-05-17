export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted gap-4 flex-wrap">
        <p>&copy; {new Date().getFullYear()} Charlie Tonneslan</p>
        <div className="flex items-center gap-5 font-mono text-xs">
          <a
            href="mailto:cst0520@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            cst0520@gmail.com
          </a>
          <a
            href="https://github.com/c-tonneslan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            github.com/c-tonneslan
          </a>
        </div>
      </div>
    </footer>
  );
}
