import { League_Spartan, Montserrat } from "next/font/google";

/**
 * Brand typefaces loaded via next/font (self-hosted, no layout shift).
 * Exposed as CSS variables consumed by the Tailwind fontFamily tokens
 * (see tailwind.config.ts). To swap a brand font, change it here only.
 *
 *   font-headline / font-subhead -> League Spartan (weights 500/700)
 *   font-body                    -> Montserrat (weight 400, plus 500/600)
 */
export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-league-spartan",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});
