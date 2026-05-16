export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Charlie Tonneslan</p>
        <a
          href="https://github.com/c-tonneslan"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs hover:text-foreground transition-colors"
        >
          github.com/c-tonneslan
        </a>
      </div>
    </footer>
  );
}
