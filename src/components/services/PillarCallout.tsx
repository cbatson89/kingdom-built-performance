import type { Pillar } from "@/content/services";

/**
 * PillarCallout — the "The Coaching/Performance Pillar" band: heading + intro
 * on the left, a gold-bulleted list on the right. Gold left border accent.
 */
export function PillarCallout({ callout }: { callout: Pillar["callout"] }) {
  return (
    <section className="border-l-4 border-sand bg-navy">
      <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-ivory sm:text-4xl">
            {callout.heading}
          </h2>
          <p className="mt-6 max-w-xl font-body leading-relaxed text-ivory/70">
            {callout.body}
          </p>
        </div>
        <ul className="flex flex-col justify-center gap-5">
          {callout.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-1 text-sand">
                &#10022;
              </span>
              <span className="font-body text-ivory/80">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
