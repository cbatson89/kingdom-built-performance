import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { PillarCallout } from "@/components/services/PillarCallout";
import type { Pillar } from "@/content/services";

/**
 * Shared layout for the Coaching and Performance detail pages: page heading,
 * a three-up grid of ServiceCards, then the pillar callout band. Keeps the two
 * pages consistent and driven entirely by the Pillar data object.
 */
export function PillarPage({
  pillar,
  eyebrow,
  headlineLines,
  intro,
}: {
  pillar: Pillar;
  eyebrow: string;
  headlineLines: readonly { text: string; emphasis: boolean }[];
  intro: string;
}) {
  return (
    <>
      <section className="bg-midnight py-20 sm:py-28">
        <div className="container-content">
          <div className="max-w-3xl">
            <SectionHeading as="h1" eyebrow={eyebrow} lines={headlineLines} />
            <p className="mt-8 font-body text-lg leading-relaxed text-ivory/70">
              {intro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillar.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight pb-24">
        <div className="container-content">
          <PillarCallout callout={pillar.callout} />
        </div>
      </section>
    </>
  );
}
