import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { notes } from "@/data/notes";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return { title: "Not found" };
  return {
    title: `${note.title} | Charlie Tonneslan`,
    description: note.excerpt,
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/notes"
          className="font-mono text-sm text-muted hover:text-foreground"
        >
          &larr; all notes
        </Link>

        <div className="mt-8 flex items-center gap-4 text-xs font-mono text-muted">
          <span>{note.repo}</span>
          <span>&middot;</span>
          <time>{note.date}</time>
        </div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          {note.title}
        </h1>

        <article className="mt-10 text-base">{note.body}</article>

        <div className="mt-12 border-t border-[#1e1e1e] pt-6">
          <a
            href={note.prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover"
          >
            View merged PR &rarr;
          </a>
        </div>
      </div>
    </main>
  );
}
