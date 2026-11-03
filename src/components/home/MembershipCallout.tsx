import { Cta } from "@/components/ui/Cta";
import { membershipCallout } from "@/content/memberships";
import { business } from "@/content/site";

/**
 * Homepage membership announcement — a navy band directly beneath the header
 * with a gold left accent, pointing to /memberships or a call for info.
 */
export function MembershipCallout() {
  return (
    <section className="border-b border-charcoal/60 bg-navy">
      <div className="container-content py-8">
        <div className="flex flex-col gap-6 border-l-4 border-sand pl-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow mb-2">{membershipCallout.eyebrow}</p>
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-ivory sm:text-4xl">
              {membershipCallout.heading}
            </h2>
            <p className="mt-2 max-w-2xl font-body text-ivory/70">
              {membershipCallout.body}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Cta href="/memberships" variant="solid">
              View Memberships
            </Cta>
            <Cta href={business.phoneHref} variant="outline">
              Call for Info
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
