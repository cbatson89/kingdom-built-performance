/**
 * ─────────────────────────────────────────────────────────────────────────
 * BRAND ICON SET — STAND-INS
 *
 * These are simple line-style SVGs standing in for the custom brand icons:
 *   faith       -> cross
 *   strength    -> dumbbell
 *   growth      -> chevrons (upward)
 *   leadership  -> shield
 *   performance -> baseball
 *
 * TODO: Replace each <path>/<g> below with the final custom icon SVGs when
 * provided. Keep the same component API (name + className) so call sites don't
 * change. `currentColor` is used for stroke so color is controlled via Tailwind
 * text-* tokens at the call site.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type BrandIconName =
  | "faith"
  | "strength"
  | "growth"
  | "leadership"
  | "performance";

type Props = {
  name: BrandIconName;
  className?: string;
};

const paths: Record<BrandIconName, React.ReactNode> = {
  // Cross
  faith: <path d="M10 3h4v5h5v4h-5v9h-4v-9H5V8h5V3z" />,
  // Dumbbell
  strength: (
    <>
      <path d="M6.5 6.5v11" />
      <path d="M3.5 9v6" />
      <path d="M17.5 6.5v11" />
      <path d="M20.5 9v6" />
      <path d="M6.5 12h11" />
    </>
  ),
  // Upward chevrons (growth)
  growth: (
    <>
      <path d="M6 14l6-6 6 6" />
      <path d="M6 20l6-6 6 6" />
    </>
  ),
  // Shield (leadership)
  leadership: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />,
  // Baseball (performance)
  performance: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 4.5c1.8 2 2.8 4.6 2.8 7.5s-1 5.5-2.8 7.5" />
      <path d="M16.5 4.5c-1.8 2-2.8 4.6-2.8 7.5s1 5.5 2.8 7.5" />
    </>
  ),
};

export function BrandIcon({ name, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={name === "faith" || name === "leadership" ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
