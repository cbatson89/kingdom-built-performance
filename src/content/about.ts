/**
 * ABOUT PAGE CONTENT — purpose, mission, vision, values, verse, tagline.
 * Provided copy (use as-is). Values render as a grid with brand icons.
 */

import { verse } from "./site";

export const about = {
  purpose: {
    heading: "Our Purpose",
    body: "We exist to develop athletes with elite performance, strong character, and a Kingdom mindset. Athletic ability is a gift, development requires discipline, and success is about more than wins. We build athletes who pursue excellence without compromising character, compete with confidence, lead with humility, and keep the faith.",
  },
  mission: {
    heading: "Our Mission",
    body: "To build athletes who compete with excellence, lead with character, and live with purpose — developing their God-given abilities through intentional training, mentorship, and faith.",
  },
  vision: {
    heading: "Our Vision",
    body: "To raise a generation of athletes who are prepared for more than the game — strong in body, grounded in faith, and equipped to lead wherever God calls them.",
  },
  values: {
    heading: "Our Values",
    items: [
      {
        title: "Faith",
        description: "We put God first in everything we do.",
        icon: "faith" as const, // cross
      },
      {
        title: "Excellence",
        description: "We pursue elite standards in training, effort, and attitude.",
        icon: "performance" as const, // baseball
      },
      {
        title: "Discipline",
        description: "We embrace the process and do the hard things daily.",
        icon: "strength" as const, // dumbbell
      },
      {
        title: "Character",
        description: "We build integrity, humility, and accountability.",
        icon: "leadership" as const, // shield
      },
      {
        title: "Team",
        description: "We grow together and sharpen each other.",
        icon: "growth" as const, // chevrons
      },
      {
        title: "Leadership",
        description: "We lead ourselves first, then inspire others.",
        icon: "leadership" as const, // shield
      },
    ],
  },
  verse,
  tagline: "Built Different. Built With Purpose. Built For More.",
} as const;
