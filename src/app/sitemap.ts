import type { MetadataRoute } from "next";
import { notes } from "@/data/notes";
import { getAllArticles } from "@/lib/writing";

const BASE = "https://c-tonneslan-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const articles = getAllArticles();
  return [
    { url: BASE, lastModified: now },
    { url: `${BASE}/notes`, lastModified: now },
    ...notes.map((n) => ({
      url: `${BASE}/notes/${n.slug}`,
      lastModified: new Date(n.date),
    })),
    { url: `${BASE}/writing`, lastModified: now },
    ...articles.map((a) => ({
      url: `${BASE}/writing/${a.slug}`,
      lastModified: new Date(a.date),
    })),
  ];
}
