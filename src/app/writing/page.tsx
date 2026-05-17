import Link from "next/link";
import type { Metadata } from "next";
import { getAllArticles } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing | Charlie Tonneslan",
  description:
    "Essays on building software, contributing to open source, and AI tooling in the developer workflow.",
};

export default function WritingIndex() {
  const articles = getAllArticles();

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
          Writing
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Longer pieces on building software, contributing to open source, and
          the developer workflow as it changes.
        </p>

        <ul className="mt-12 space-y-8">
          {articles.map((a) => (
            <li
              key={a.slug}
              className="rounded-lg border border-[#1e1e1e] bg-[#0a0a0a]/50 p-6 transition-colors hover:border-[#333]"
            >
              <Link href={`/writing/${a.slug}`} className="block">
                <div className="flex items-center justify-between gap-4 text-xs font-mono text-muted">
                  <span>{a.tags.slice(0, 3).join(" / ")}</span>
                  <time>{a.date}</time>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-foreground">
                  {a.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {a.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
