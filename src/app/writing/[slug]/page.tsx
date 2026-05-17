import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllArticles, getArticle } from "@/lib/writing";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not found" };
  return {
    title: `${article.title} | Charlie Tonneslan`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/writing"
          className="font-mono text-sm text-muted hover:text-foreground"
        >
          &larr; all writing
        </Link>

        <div className="mt-8 flex items-center gap-4 text-xs font-mono text-muted">
          <span>{article.tags.slice(0, 3).join(" / ")}</span>
          <span>&middot;</span>
          <time>{article.date}</time>
        </div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          {article.title}
        </h1>

        <article
          className="article-prose mt-10"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </div>
    </main>
  );
}
