import Link from "next/link";
import type { Metadata } from "next";
import { notes } from "@/data/notes";

export const metadata: Metadata = {
  title: "Notes | Charlie Tonneslan",
  description:
    "Short writeups on bugs I found and fixed in open source: pgx, wails, nats.go, and others.",
};

export default function NotesIndex() {
  const sorted = [...notes].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="font-mono text-sm text-muted hover:text-foreground"
        >
          &larr; back
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
          Notes
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Short writeups on bugs I found and fixed in open source. Each one
          links to the merged PR.
        </p>

        <ul className="mt-12 space-y-8">
          {sorted.map((note) => (
            <li
              key={note.slug}
              className="rounded-lg border border-[#1e1e1e] bg-[#0a0a0a]/50 p-6 transition-colors hover:border-[#333]"
            >
              <Link href={`/notes/${note.slug}`} className="block">
                <div className="flex items-center justify-between gap-4 text-xs font-mono text-muted">
                  <span>{note.repo}</span>
                  <time>{note.date}</time>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-foreground">
                  {note.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {note.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
