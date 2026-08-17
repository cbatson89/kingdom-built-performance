import { SITE_URL, business, socials } from "@/content/site";

/**
 * LocalBusiness structured data (JSON-LD).
 *
 * Uses schema.org type `SportsActivityLocation` (a subtype of LocalBusiness) —
 * the most accurate type for a training facility. Rendered once, site-wide, in
 * the root layout.
 *
 * Hours are "by appointment only": rather than fabricate openingHours, we omit
 * them and signal availability via `openingHoursSpecification`-free markup plus
 * a human-readable note. Geo coordinates are approximate (derived from address).
 */
export function LocalBusinessJsonLd() {
  const { address, geo } = business;

  const data = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${SITE_URL}/#facility`,
    name: business.name,
    description: business.shortDescription,
    url: SITE_URL,
    telephone: business.phone,
    email: business.email,
    image: `${SITE_URL}/placeholders/og-default.svg`, // TODO: real image URL
    priceRange: "$$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      // NOTE: approximate coordinates derived from the street address.
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: business.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    // By-appointment-only: no fixed openingHours. Signal via a description.
    // (Per schema.org conventions, omitting openingHours is preferable to
    // asserting hours that don't exist.)
    sameAs: socials.map((s) => s.href),
    sport: "Baseball",
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
