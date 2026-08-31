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
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">{hero.eyebrow}</p>

          {/* One h1 per page */}
          <h1 className="font-headline text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl flex flex-col">
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

          <div className="mt-12 max-w-md border-t border-charcoal pt-6">
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
