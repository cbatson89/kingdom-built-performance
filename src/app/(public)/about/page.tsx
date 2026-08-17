import type { Metadata } from "next";
import { MissionSection } from "@/components/home/MissionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { about } from "@/content/about";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About — Our Purpose, Mission & Values",
  description:
    "Kingdom Built Performance develops athletes with elite performance, strong character, and a Kingdom mindset in Santa Rosa Beach, FL. Our purpose, mission, vision, and values.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Page h1 (visually-styled intro) */}
      <section className="bg-midnight pt-20 sm:pt-28">
        <div className="container-content max-w-3xl">
          <SectionHeading
            as="h1"
            eyebrow="About Kingdom Built Performance"
            lines={[
              { text: "We Build", emphasis: false },
              { text: "More Than Athletes.", emphasis: true },
            ]}
          />
        </div>
      </section>

      {/* "More Than a Training Facility" mission block (shared with home) */}
      <MissionSection />

      {/* Purpose / Mission / Vision */}
      <section className="bg-midnight pb-20 sm:pb-28">
        <div className="container-content grid gap-12 lg:grid-cols-3">
          {[about.purpose, about.mission, about.vision].map((block) => (
            <div key={block.heading} className="border-t-2 border-sand pt-6">
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-ivory">
                {block.heading}
              </h2>
              <p className="mt-4 font-body leading-relaxed text-ivory/70">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="What We Stand For"
            lines={[
              { text: "Our", emphasis: false },
              { text: "Values.", emphasis: true },
            ]}
            stacked={false}
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.items.map((value) => (
              <li
                key={value.title}
                className="border border-charcoal/60 bg-midnight p-8"
              >
                {/* Brand icon stand-in — see components/ui/BrandIcon.tsx */}
                <BrandIcon name={value.icon} className="h-8 w-8 text-sand" />
                <h3 className="mt-5 font-headline text-xl font-bold uppercase tracking-tight text-ivory">
                  {value.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ivory/70">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Verse + tagline */}
      <section className="bg-midnight py-20 sm:py-28">
        <div className="container-content max-w-3xl text-center">
          <blockquote className="font-headline text-2xl font-bold uppercase leading-tight tracking-tight text-ivory sm:text-4xl">
            &ldquo;{about.verse.text}&rdquo;
          </blockquote>
          <p className="mt-6 font-subhead text-sm font-medium uppercase tracking-[0.2em] text-sand">
            {about.verse.reference}
          </p>
          <p className="mt-12 font-headline text-xl font-bold uppercase tracking-tight text-sand sm:text-2xl">
            {about.tagline}
          </p>
        </div>
      </section>
    </>
  );
}
