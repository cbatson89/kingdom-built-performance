import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { contact } from "@/content/contact";
import { business, verse } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Start Your Journey",
  description:
    "Get in touch with Kingdom Built Performance in Santa Rosa Beach, FL. Book your first lesson, register for a camp, or inquire about group training. Call (850) 809-7777.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-midnight py-20 sm:py-28">
      <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: mission / quote */}
        <div>
          <SectionHeading
            as="h1"
            eyebrow={contact.eyebrow}
            lines={contact.headlineLines}
          />
          <p className="mt-8 font-body text-lg leading-relaxed text-ivory/70">
            {contact.body}
          </p>

          <div className="mt-10 border-t border-charcoal pt-6">
            <p className="font-body text-sm text-ivory/80">
              <a href={business.phoneHref} className="hover:text-sand">
                {business.phone}
              </a>
            </p>
            <p className="mt-1 font-body text-sm text-ivory/60">
              {business.address.street}, {business.address.city},{" "}
              {business.address.region} {business.address.postalCode}
            </p>
          </div>

          <blockquote className="mt-10 max-w-md font-body text-sm italic text-ivory/60">
            &ldquo;{verse.text}&rdquo;
          </blockquote>
          <p className="mt-2 font-subhead text-xs font-medium uppercase tracking-[0.2em] text-sand">
            {verse.reference}
          </p>
        </div>

        {/* Right: form */}
        <div className="border border-charcoal/60 bg-navy p-8 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
