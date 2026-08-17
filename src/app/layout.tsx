import type { Metadata, Viewport } from "next";
import "./globals.css";
import { leagueSpartan, montserrat } from "@/lib/fonts";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { SITE_URL, business } from "@/content/site";

/**
 * Root layout. Sets brand fonts (as CSS variables), site-wide metadata
 * defaults (metadataBase + title template), analytics stub, and the
 * LocalBusiness JSON-LD. Route-group layouts under (public)/(members) add
 * their own chrome (header/footer, etc.).
 */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} | Faith-Driven Baseball Training in Santa Rosa Beach, FL`,
    template: `%s | ${business.name}`,
  },
  description: business.shortDescription,
  applicationName: business.name,
  robots: { index: true, follow: true },
  // Favicon is provided by src/app/icon.svg (Next.js file convention).
  // TODO: replace icon.svg with the final brand emblem when available.
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${montserrat.variable}`}
    >
      <body>
        {children}
        <LocalBusinessJsonLd />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
