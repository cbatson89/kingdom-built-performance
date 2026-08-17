import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";
import { testimonialsSection } from "@/content/home";

/** Five gold stars (filled up to `rating`). */
function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-1 text-sand"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true" className={i < rating ? "" : "opacity-25"}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

/**
 * "Built By The Athletes Who Train Here" — testimonial cards with gold top
 * border, star rating, quote, and attribution.
 */
export function Testimonials() {
  return (
    <section className="bg-midnight py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          lines={testimonialsSection.headlineLines}
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col border-t-2 border-sand bg-navy p-7"
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-5 flex-1 font-body text-sm italic leading-relaxed text-ivory/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="font-subhead text-sm font-medium uppercase tracking-[0.15em] text-sand">
                  {t.name}
                </div>
                <div className="mt-1 font-body text-xs text-ivory/60">{t.role}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
