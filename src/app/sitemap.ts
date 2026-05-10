import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://portfolio-one-fawn-81.vercel.app", lastModified: new Date() },
    { url: "https://portfolio-one-fawn-81.vercel.app/demo/devflow", lastModified: new Date() },
    { url: "https://portfolio-one-fawn-81.vercel.app/demo/auth", lastModified: new Date() },
  ];
}
