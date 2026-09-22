import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Cta } from "@/components/ui/Cta";
import { hero } from "@/content/home";
import { verse } from "@/content/site";

/**
 * Homepage hero — full-bleed background image, stacked display headline with
 * gold emphasis words, mission subhead, dual CTAs, and the brand verse.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-midnight">
      {/* Background image (behind content) */}
      {/* <div className="absolute inset-0">
        <PlaceholderImage
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/40"
        />
      </div> */}

      <div className="container-content relative py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-10">
          {/* Headline + CTAs (mobile order 1, desktop top-left) */}
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <p className="eyebrow mb-6">{hero.eyebrow}</p>

            {/* One h1 per page */}
            <h1 className="font-headline text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-7xl flex flex-col">
              <span>
                Built <span className="text-sand">Different</span>
              </span>
              <span>
                Built With <span className="text-sand">Purpose</span>
              </span>
              <span>
                Built For <span className="text-sand">More</span>
              </span>
            </h1>

            <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ivory/80">
              {hero.subhead}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Cta href={hero.primaryCta.href} variant="solid">
                {hero.primaryCta.label}
              </Cta>
              <Cta href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Cta>
            </div>
          </div>

          {/* Swift public booking calendar (mobile order 2, desktop right, spans both left rows) */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
            <div className="w-full overflow-hidden rounded-2xl border border-charcoal bg-white shadow-2xl">
              <iframe
                src="https://book.runswiftapp.com/facilities/boomroom30a/calendar"
                title="Kingdom Built Performance booking calendar"
                loading="lazy"
                className="h-[560px] w-full lg:h-[640px]"
              />
            </div>
          </div>

          {/* Brand verse (mobile order 3, desktop bottom-left) */}
          <div className="order-3 max-w-md border-t border-charcoal pt-6 lg:col-start-1 lg:row-start-2 lg:mt-0">
            <blockquote className="font-body text-sm italic text-ivory/60">
              &ldquo;{verse.text}&rdquo;
            </blockquote>
            <p className="mt-2 font-subhead text-xs font-medium uppercase tracking-[0.2em] text-sand">
              {verse.reference}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
