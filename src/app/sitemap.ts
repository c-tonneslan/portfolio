import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://c-tonneslan-portfolio.vercel.app", lastModified: new Date() },
  ];
}
