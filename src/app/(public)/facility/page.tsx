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

            <div
              id="hours"
              className="scroll-mt-28 border-t border-charcoal pt-6"
            >
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.8846925458543!2d-86.23189842387079!3d30.382632002467393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8893e189c5d68b97%3A0x6c3a3a2ed2c5b94!2s605%20N%20County%20Hwy%20393%20Unit%20C-4%2C%20Santa%20Rosa%20Beach%2C%20FL%2032459!5e0!3m2!1sen!2sus!4v1788201330406!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
