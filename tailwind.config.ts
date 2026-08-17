import type { Config } from "tailwindcss";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * DESIGN TOKENS — single source of truth for brand colors, fonts, spacing.
 *
 * Swap the brand palette or typefaces here and it propagates everywhere.
 * Components must reference these tokens (e.g. `bg-midnight`, `text-sand`,
 * `font-headline`) and never hardcode hex values or font names.
 * ─────────────────────────────────────────────────────────────────────────
 */
const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (from official style guide — exact hex values).
        midnight: "#0B1220", // primary dark background
        navy: "#0F1B2E", // secondary background / cards
        charcoal: "#2A3038", // borders, muted surfaces
        sand: "#D6C6A6", // gold/sand accent — headlines, CTAs, highlights
        ivory: "#F2EFE9", // primary text / off-white
      },
      fontFamily: {
        // All three map to CSS variables set by next/font in src/lib/fonts.ts.
        // headline + subhead intentionally share League Spartan (differ by weight);
        // body uses Montserrat. Swap a typeface in one place (fonts.ts) to rebrand.
        headline: ["var(--font-league-spartan)", "sans-serif"],
        subhead: ["var(--font-league-spartan)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      maxWidth: {
        // Consistent content container width used across sections.
        content: "80rem", // 1280px
      },
      keyframes: {
        // Marquee for the scrolling values ticker.
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
