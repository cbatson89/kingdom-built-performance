import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cta } from "@/components/ui/Cta";
import { FoundingPopup } from "@/components/memberships/FoundingPopup";
import { memberships } from "@/content/memberships";
import { business, MEMBERSHIPS_URL } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Memberships — Foundations, Warrior & Premier",
  description:
    "Monthly youth training memberships at Kingdom Built Performance in Santa Rosa Beach, FL. Cage, gym, or both — from $280/mo. Founding 40 Premier pricing for our first 40 families.",
  path: "/memberships",
});

export default function MembershipsPage() {
  const { plans, credits, fineprint, evaluation, founding } = memberships;

  return (
    <>
      <section className="bg-midnight py-20 sm:py-28">
        <div className="container-content">
          <div className="max-w-3xl">
            <SectionHeading
              as="h1"
              eyebrow={memberships.eyebrow}
              lines={memberships.headlineLines}
            />
            <p className="mt-8 font-body text-lg leading-relaxed text-ivory/70">
              {memberships.intro}
            </p>
          </div>

          {/* Plan cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.id}
                id={plan.id}
                className={[
                  "flex scroll-mt-28 flex-col border p-7 sm:p-8",
                  plan.featured
                    ? "border-sand bg-sand text-midnight"
                    : "border-charcoal/60 bg-navy text-ivory",
                ].join(" ")}
              >
                <p
                  className={[
                    "font-body text-sm leading-relaxed",
                    plan.featured ? "text-midnight/80" : "text-ivory/70",
                  ].join(" ")}
                >
                  {plan.fit}
                </p>
                <h2 className="mt-4 font-headline text-4xl font-bold uppercase tracking-tight">
                  {plan.name}
                </h2>
                <p className="mt-4 font-headline font-bold leading-none">
                  <span className="text-5xl">${plan.price}</span>
                  <span className="ml-1 font-subhead text-base font-medium">
                    /mo
                  </span>
                </p>

                <ul className="mb-6 mt-6 flex flex-wrap gap-2">
                  {plan.details.map((detail) => (
                    <li
                      key={detail}
                      className={[
                        "border px-3 py-1.5 font-subhead text-[0.65rem] font-medium uppercase tracking-[0.15em]",
                        plan.featured
                          ? "border-midnight/40 text-midnight"
                          : "border-sand/40 text-sand",
                      ].join(" ")}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>

                {plan.note ? (
                  <p className="mb-6 font-subhead text-sm font-bold uppercase tracking-[0.1em]">
                    {plan.note}
                  </p>
                ) : null}

                <a
                  href={`${MEMBERSHIPS_URL}?membershipId=${plan.swiftMembershipId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "mt-auto inline-flex w-full items-center justify-center px-7 py-3.5 font-subhead text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200",
                    plan.featured
                      ? "bg-midnight text-ivory hover:bg-navy"
                      : "bg-sand text-midnight hover:bg-ivory",
                  ].join(" ")}
                >
                  Get Started
                </a>
              </article>
            ))}
          </div>

          {/* Credit explainer */}
          <div className="mt-10 border border-sand/40 p-8 text-center">
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-ivory sm:text-4xl">
              {credits.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-body leading-relaxed text-ivory/70">
              {credits.body}
            </p>
          </div>

          {/* Fine print + evaluation */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <ul className="flex flex-col gap-3">
              {fineprint.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-sand">
                    &#10022;
                  </span>
                  <span className="font-body text-ivory/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-l-4 border-sand bg-navy p-8">
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-sand">
                {evaluation.heading}
              </h2>
              <p className="mt-2 font-body leading-relaxed text-ivory/80">
                {evaluation.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding 40 */}
      <section
        id="founding-40"
        className="scroll-mt-28 border-t border-charcoal/60 bg-navy py-20 sm:py-28"
      >
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">{founding.eyebrow}</p>
            <h2 className="font-headline text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
              {founding.heading}
            </h2>
            <p className="mt-8 font-body text-lg leading-relaxed text-ivory/70">
              {founding.intro}
            </p>
          </div>

          <div className="mt-12 grid gap-8 bg-sand p-8 text-midnight sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                {founding.plan}
              </h3>
              <p className="mt-3 font-body font-semibold">
                {founding.planDetails}
              </p>
              <p className="mt-1 font-body text-midnight/80">
                Regular <s>${founding.regularPrice}/mo</s> ·{" "}
                {founding.commitment}
              </p>
            </div>
            <p className="font-headline font-bold leading-none">
              <span className="text-7xl sm:text-8xl">${founding.price}</span>
              <span className="ml-1 font-subhead text-xl font-medium uppercase">
                /mo
              </span>
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {founding.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 text-sand">
                  &#10003;
                </span>
                <span className="font-body text-lg text-ivory/80">{perk}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 border border-sand p-8 sm:p-12">
            <h3 className="font-headline text-3xl font-bold uppercase tracking-tight text-ivory sm:text-4xl">
              {founding.claim.heading}
            </h3>
            <p className="mt-4 max-w-2xl font-body leading-relaxed text-ivory/80">
              DM us or call/text{" "}
              <a
                href={business.phoneHref}
                className="font-semibold text-ivory hover:text-sand"
              >
                {business.phone}
              </a>
              . {founding.claim.body}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Cta href={business.phoneHref} variant="solid">
                Call / Text Coach Brody
              </Cta>
              <Cta href="/contact" variant="outline">
                Send a Message
              </Cta>
            </div>
          </div>
        </div>
      </section>

      <FoundingPopup />
    </>
  );
}
