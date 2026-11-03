/**
 * MEMBERSHIP CONTENT — plans, credit explainer, and the Founding 40 offer.
 * Source: the "Which one is right for my kid?" and "Founding 40" flyers.
 * Memberships start Nov 2, 2026. Edit pricing and copy here.
 */

export type MembershipPlan = {
  id: string; // anchor id
  name: string;
  /** The parent's "which one is right for my kid?" answer. */
  fit: string;
  price: number; // per month, USD
  /** RunSwift membership id — deep-links the plan's signup page. */
  swiftMembershipId: number;
  details: string[];
  /** Highlighted plan (gold treatment). */
  featured?: boolean;
  note?: string;
};

export const memberships = {
  eyebrow: "Memberships Start Nov 2",
  headlineLines: [
    { text: "Which One Is Right", emphasis: false },
    { text: "For My Kid?", emphasis: true },
  ],
  intro: "Answer one question. That's your membership.",

  plans: [
    {
      id: "foundations",
      swiftMembershipId: 8648,
      name: "Foundations",
      fit: "My kid wants baseball or softball skills (cage only)",
      price: 280,
      details: ["8 cage credits a month", "Ages 5–18"],
    },
    {
      id: "warrior",
      swiftMembershipId: 8093,
      name: "Warrior",
      fit: "My kid plays any sport and wants to be faster and stronger",
      price: 280,
      details: ["8 gym credits a month", "Ages 5–18"],
    },
    {
      id: "premier",
      swiftMembershipId: 8092,
      name: "Premier",
      fit: "My kid is 8–18 and serious about baseball or softball",
      price: 480,
      details: ["24 credits a month", "Cage + gym", "Ages 8–18"],
      featured: true,
      note: "Founding 40: $400/mo · 12-month commitment",
    },
  ] as MembershipPlan[],

  credits: {
    heading: "1 Credit = 1 Hour",
    body: "Book any class for your kid's age in the Swift app. Pick the days that fit your week.",
  },

  fineprint: [
    "Siblings save $100–$200/mo",
    "Military $50 off",
    "3-month commitment",
  ],

  evaluation: {
    heading: "Not Sure?",
    body: "Start with a $100 Evaluation. It goes toward your first month.",
  },

  founding: {
    eyebrow: "Only for our first 40 families",
    heading: "Founding 40",
    intro:
      "For families who are all in on our coaching, our development plan and our faith-driven approach.",
    plan: "Premier Membership",
    planDetails: "24 credits a month · cage + gym · 8–18",
    price: 400,
    regularPrice: 480,
    commitment: "12-month commitment",
    perks: [
      "Your name on our Founding Members Wall",
      "Exclusive Founding 40 merch",
      "Founding Member events",
      "20% off private lessons and cage rentals",
    ],
    claim: {
      heading: "Claim Your Spot: Reach Out to Coach Brody",
      body: "Founding pricing is only available through us. When 40 are gone, they're gone.",
    },
  },
} as const;

/** Homepage announcement band, directly beneath the header. */
export const membershipCallout = {
  eyebrow: "Now Enrolling · Memberships Start Nov 2",
  heading: "Memberships Are Here",
  body: "Cage, gym, or both — from $280/mo. Founding 40 Premier pricing for our first 40 families.",
} as const;
