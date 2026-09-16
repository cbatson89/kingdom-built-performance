/**
 * ─────────────────────────────────────────────────────────────────────────
 * SITE-WIDE CONTENT & CONFIG
 *
 * Business info (NAP), navigation, social links, and the external booking URL.
 * Edit copy here — it is intentionally kept out of JSX so non-devs can update
 * it safely. NAP values below are the canonical source used by the footer and
 * the LocalBusiness structured data, so keep them consistent.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://kingdombuiltperformance.com";

export const business = {
  name: "Kingdom Built Performance",
  legalName: "Kingdom Built Performance",
  tagline: "Built Different. Built With Purpose. Built For More.",
  shortDescription:
    "Developing athletes with elite performance, strong character, and a Kingdom mindset.",
  phone: "(850) 809-7777",
  phoneHref: "tel:+18508097777",
  email: "info@kingdombuiltperformance.com", // TODO: confirm public-facing email
  address: {
    street: "605 N County Highway 393, Unit C-4",
    city: "Santa Rosa Beach",
    region: "FL",
    regionName: "Florida",
    postalCode: "32459",
    country: "US",
  },
  // Approximate coordinates derived from the street address (Santa Rosa Beach /
  // 30A area). Marked approximate — replace with exact lat/lng from Google
  // Business Profile when available.
  geo: {
    latitude: 30.3841, // ~approximate
    longitude: -86.2497, // ~approximate
    approximate: true,
  },
  hours: "By appointment",
  established: "2026",
  areaServed: ["Santa Rosa Beach", "30A", "Walton County", "Florida Panhandle"],
} as const;

// External booking system (RunSwift). The facility/booking backend predates the
// rebrand, hence the "boomroom30a" slug — this is intentional, not a typo.
export const BOOKING_URL =
  "https://book.runswiftapp.com/facilities/boomroom30a";

// Social handles — placeholder URLs until real profile links are provided.
export const socials = [
  {
    label: "Instagram",
    handle: "@kingdombuiltperformance",
    // TODO: replace with real profile URL
    href: "https://instagram.com/kingdombuiltperformance",
  },
  {
    label: "TikTok",
    handle: "@kingdombuiltperformance",
    // TODO: replace with real profile URL
    href: "https://tiktok.com/@kingdombuiltperformance",
  },
  {
    label: "YouTube",
    handle: "@kingdombuiltperformance",
    // TODO: replace with real profile URL
    href: "https://youtube.com/@kingdombuiltperformance",
  },
] as const;

// Primary navigation (header). `/blog` is intentionally omitted for now but the
// routing structure leaves room to add it later without refactoring.
export const primaryNav = [
  { label: "Coaching", href: "/coaching" },
  { label: "Performance", href: "/performance" },
  { label: "Facility", href: "/facility" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer link columns.
export const footerNav = {
  coaching: {
    heading: "Coaching",
    links: [
      { label: "Private Lessons", href: "/coaching#private-lessons" },
      { label: "Group Training", href: "/coaching#group-training" },
      { label: "Camps & Clinics", href: "/coaching#camps-clinics" },
      { label: "Find a Coach", href: "/contact" },
    ],
  },
  performance: {
    heading: "Performance",
    links: [
      { label: "Speed & Agility", href: "/performance#speed-agility" },
      {
        label: "Strength Training",
        href: "/performance#strength-conditioning",
      },
      { label: "HitTrax Sessions", href: "/performance#hittrax-technology" },
      { label: "Assessments", href: "/contact" },
    ],
  },
  facility: {
    heading: "Facility",
    links: [
      { label: "Visit Us", href: "/facility" },
      { label: "Hours", href: "/facility#hours" },
      { label: "Booking", href: BOOKING_URL, external: true },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;

export const verse = {
  text: "I have fought the good fight, I have finished the race, I have kept the faith.",
  reference: "2 Timothy 4:7",
} as const;
