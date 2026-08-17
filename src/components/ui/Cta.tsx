import Link from "next/link";

/**
 * Cta — brand button/link. Renders a Next <Link> for internal paths and a plain
 * <a target="_blank"> for external URLs (e.g. the RunSwift booking link).
 * Variants: `solid` (gold fill) and `outline`.
 */

type Variant = "solid" | "outline";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-subhead text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand";

const variants: Record<Variant, string> = {
  solid: "bg-sand text-midnight hover:bg-ivory",
  outline: "border border-ivory text-ivory hover:bg-ivory hover:text-midnight",
};

export function Cta({ href, children, variant = "solid", external, className }: Props) {
  const classes = [base, variants[variant], className].filter(Boolean).join(" ");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
