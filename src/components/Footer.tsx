export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Charlie Tonneslan</p>
        <p className="font-mono text-xs">
          Built with Next.js + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
}
