import type { Metadata } from "next";
import { SITE_URL, business } from "@/content/site";

/**
 * Per-page metadata builder. Centralizes canonical URLs, Open Graph, and
 * Twitter cards so every page gets consistent, locally-relevant SEO with a
 * unique title/description. Uses the Next.js Metadata API (no manual <head>).
 */

// Default social-share image. Placeholder SVG for now.
// TODO: replace with a real 1200x630 PNG/JPG — most social crawlers do NOT
// render SVG OG images. A next/og ImageResponse route is a good future upgrade.
const DEFAULT_OG_IMAGE = "/placeholders/og-default.svg";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path portion only, e.g. "/coaching". Used for canonical + OG url. */
  path: string;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: business.name,
      title,
      description,
      url,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${business.name} — ${business.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
