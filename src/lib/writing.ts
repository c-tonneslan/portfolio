import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  html: string;
};

const dir = path.join(process.cwd(), "writing");

function fileToSlug(filename: string): string {
  return filename.replace(/^\d+-/, "").replace(/\.md$/, "");
}

let cache: Article[] | null = null;

export function getAllArticles(): Article[] {
  if (cache) return cache;

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    const stripped = content.replace(/^#\s+.+\n+/, "");
    const html = marked.parse(stripped, { async: false }) as string;
    const tagsRaw = (data.tags as string) ?? "";
    const dateRaw = data.pub_date ?? data.date;
    const date =
      dateRaw instanceof Date
        ? dateRaw.toISOString().slice(0, 10)
        : (dateRaw as string) ?? "";
    return {
      slug: fileToSlug(file),
      title: data.title as string,
      description: (data.description as string) ?? "",
      date,
      tags: tagsRaw
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      html,
    };
  });

  cache = articles.sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}

export function getArticle(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}
