import type { Metadata } from "next";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cta } from "@/components/ui/Cta";
import { facility } from "@/content/contact";
import { business, BOOKING_URL } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Visit Our Facility in Santa Rosa Beach, FL",
  description:
    "Visit Kingdom Built Performance at 605 N County Highway 393, Unit C-4, Santa Rosa Beach, FL 32459. Indoor baseball training on 30A, by appointment. Call (850) 809-7777.",
  path: "/facility",
});

export default function FacilityPage() {
  const { address } = business;

  return (
    <section className="bg-midnight py-20 sm:py-28">
      <div className="container-content grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: info */}
        <div>
          <SectionHeading
            as="h1"
            eyebrow={facility.eyebrow}
            lines={facility.headlineLines}
          />
          <p className="mt-8 font-body text-lg leading-relaxed text-ivory/70">
            {facility.intro}
          </p>

          <dl className="mt-12 space-y-8">
            <div className="border-t border-charcoal pt-6">
              <dt className="font-subhead text-xs font-medium uppercase tracking-[0.2em] text-sand">
                Address
              </dt>
              <dd className="mt-2 font-body text-ivory/80">
                {/* NAP text — matches footer + structured data */}
                <div>{address.street}</div>
                <div>
                  {address.city}, {address.region} {address.postalCode}
                </div>
              </dd>
            </div>

            <div id="hours" className="scroll-mt-28 border-t border-charcoal pt-6">
              <dt className="font-subhead text-xs font-medium uppercase tracking-[0.2em] text-sand">
                Hours
              </dt>
              <dd className="mt-2 font-body text-ivory/80">
                {business.hours} — reach out to schedule your session.
              </dd>
            </div>

            <div className="border-t border-charcoal pt-6">
              <dt className="font-subhead text-xs font-medium uppercase tracking-[0.2em] text-sand">
                Phone
              </dt>
              <dd className="mt-2 font-body text-ivory/80">
                <a href={business.phoneHref} className="hover:text-sand">
                  {business.phone}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Cta href={BOOKING_URL} external variant="solid">
              Book a Session
            </Cta>
            <Cta href="/contact" variant="outline">
              Contact Us
            </Cta>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <PlaceholderImage
            src={facility.image}
            alt={facility.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
