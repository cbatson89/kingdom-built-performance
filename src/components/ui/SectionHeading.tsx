import { createElement } from "react";

/**
 * SectionHeading — eyebrow label + multi-line display headline.
 * Lines flagged `emphasis` render in the sand/gold accent; others in ivory.
 * Used across hero and section intros to match the brand's stacked headline style.
 */

type HeadlineLine = { text: string; emphasis: boolean };

type Props = {
  eyebrow?: string;
  lines: readonly HeadlineLine[];
  /** Heading level for correct document outline (one h1 per page). */
  as?: "h1" | "h2" | "h3";
  className?: string;
  headingClassName?: string;
  /** Render each line as its own block (stacked) vs inline-wrapping. */
  stacked?: boolean;
};

export function SectionHeading({
  eyebrow,
  lines,
  as = "h2",
  className,
  headingClassName,
  stacked = true,
}: Props) {
  return (
    <div className={className}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      {createElement(
        as,
        {
          className: [
            "font-headline font-bold uppercase leading-[0.95] tracking-tight",
            headingClassName ?? "text-4xl sm:text-5xl lg:text-6xl",
          ].join(" "),
        },
        lines.map((line, i) => (
          <span
            key={i}
            className={[
              stacked ? "block" : "inline",
              line.emphasis ? "text-sand" : "text-ivory",
            ].join(" ")}
          >
            {line.text}
            {stacked ? null : " "}
          </span>
        )),
      )}
    </div>
  );
}
