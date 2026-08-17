import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { business } from "@/content/site";
import { missionSnippet } from "@/content/home";

/**
 * "More Than a Training Facility" mission block — copy + feature badges on the
 * left, photo with an "Est." badge on the right.
 */
export function MissionSection() {
  return (
    <section className="bg-midnight py-20 sm:py-28">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: copy */}
        <div>
          <SectionHeading
            eyebrow={missionSnippet.eyebrow}
            lines={missionSnippet.headlineLines}
          />
          <div className="mt-8 space-y-6">
            {missionSnippet.paragraphs.map((p, i) => (
              <p key={i} className="font-body leading-relaxed text-ivory/70">
                {p}
              </p>
            ))}
          </div>

          {/* Feature badges */}
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {missionSnippet.features.map((f) => (
              <li key={f.label} className="flex items-center gap-3">
                {/* Brand icon stand-in — see components/ui/BrandIcon.tsx */}
                <BrandIcon name={f.icon} className="h-5 w-5 shrink-0 text-sand" />
                <span className="font-subhead text-sm font-medium uppercase tracking-[0.15em] text-ivory">
                  {f.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image with Est. badge */}
        <div className="relative">
          {/* Offset frame accent */}
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 hidden h-full w-full border border-charcoal lg:block"
          />
          <div className="relative aspect-square w-full overflow-hidden">
            <PlaceholderImage
              src={missionSnippet.image}
              alt={missionSnippet.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            {/* Est. badge */}
            <div className="absolute bottom-0 left-0 bg-sand px-6 py-4 text-midnight">
              <div className="font-headline text-2xl font-bold">
                Est. {business.established}
              </div>
              <div className="font-subhead text-[0.6rem] font-medium uppercase tracking-[0.2em]">
                {business.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
