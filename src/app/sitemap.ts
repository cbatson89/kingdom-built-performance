import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

/**
 * sitemap.xml (Next.js built-in convention). Lists all public routes.
 * Add new public routes here as they ship (e.g. /blog once built).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/coaching", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/performance", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/facility", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
