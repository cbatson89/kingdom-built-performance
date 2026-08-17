import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

/**
 * robots.txt (Next.js built-in convention). Allows indexing of the public site,
 * disallows the members area, and points crawlers at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
