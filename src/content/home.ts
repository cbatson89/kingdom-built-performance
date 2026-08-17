/**
 * HOMEPAGE COPY — hero, values ticker, mission snippet, two-pillars intro.
 * Draft wording, final structure. Edit freely.
 */

export const hero = {
  eyebrow: "Elite Baseball Training Facility",
  // Headline is rendered in three lines; the middle emphasis words are gold.
  headlineLines: [
    { text: "Built", emphasis: false },
    { text: "Different.", emphasis: true },
    { text: "Built With", emphasis: false },
    { text: "Purpose.", emphasis: true },
    { text: "Built For", emphasis: false },
    { text: "More.", emphasis: true },
  ],
  subhead:
    "Developing athletes with elite performance, strong character, and a Kingdom mindset through intentional training, mentorship, and faith.",
  primaryCta: { label: "Explore Coaching", href: "/coaching" },
  secondaryCta: { label: "View Performance", href: "/performance" },
  image: "/placeholders/hero.svg",
  imageAlt:
    "Kingdom Built Performance athletes training under stadium lights on a baseball field",
} as const;

// Scrolling values ticker beneath the hero.
export const valuesTicker = [
  "Faith Over Everything",
  "Excellence In The Process",
  "Discipline Every Day",
  "Team Before Self",
  "Character In All Things",
] as const;

export const missionSnippet = {
  eyebrow: "Our Mission",
  headlineLines: [
    { text: "More Than", emphasis: false },
    { text: "A Training", emphasis: true },
    { text: "Facility.", emphasis: false },
  ],
  paragraphs: [
    "Kingdom Built Performance exists to develop athletes with elite performance, strong character, and a Kingdom mindset. Through intentional training, mentorship, and faith, we build players who compete at the highest level — on the field and in life.",
    "Every rep, every swing, every session is an opportunity to pursue excellence with purpose. We don't just train athletes — we develop leaders.",
  ],
  features: [
    { label: "Faith-Driven", icon: "faith" as const },
    { label: "Baseball Focused", icon: "performance" as const },
    { label: "Character Built", icon: "leadership" as const },
    { label: "Performance First", icon: "strength" as const },
  ],
  image: "/placeholders/mission.svg",
  imageAlt:
    "A baseball player standing on a freshly cut outfield at Kingdom Built Performance",
} as const;

export const twoPillars = {
  eyebrow: "What We Offer",
  headlineLines: [
    { text: "Two Pillars.", emphasis: false },
    { text: "One Mission.", emphasis: true },
  ],
  intro:
    "Every service at Kingdom Built Performance lives under one of two pillars: Coaching or Performance. Together, they build the complete baseball athlete.",
} as const;

export const testimonialsSection = {
  eyebrow: "Results Speak",
  headlineLines: [
    { text: "Built By The", emphasis: false },
    { text: "Athletes", emphasis: true },
    { text: "Who Train Here.", emphasis: false },
  ],
} as const;
