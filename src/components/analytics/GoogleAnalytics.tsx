import Script from "next/script";

/**
 * Google Analytics 4 — stub / no-op until a measurement ID is provided.
 *
 * Reads NEXT_PUBLIC_GA_MEASUREMENT_ID from the environment. If it's unset, this
 * renders nothing (no scripts injected). Add a real `G-XXXXXXXXXX` id to
 * .env.local to activate. Uses next/script with afterInteractive strategy per
 * the standard Next.js GA4 integration pattern.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
