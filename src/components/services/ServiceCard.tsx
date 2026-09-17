import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Cta } from "@/components/ui/Cta";
import type { Service } from "@/content/services";

/**
 * ServiceCard — image + title + description + tag pills.
 * Shared by the homepage "Two Pillars" tabs and the Coaching/Performance pages.
 * Pass `bookingUrl` to surface a "Book Now" CTA at the bottom of the card.
 */
export function ServiceCard({
  service,
  bookingUrl,
}: {
  service: Service;
  bookingUrl?: string;
}) {
  return (
    <article
      id={service.id}
      className="group flex scroll-mt-28 flex-col border border-charcoal/60 bg-navy"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <PlaceholderImage
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        {/* Dark gradient wash to match the reference treatment */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-ivory">
          {service.title}
        </h3>
        <p className="mt-4 font-body text-sm leading-relaxed text-ivory/70">
          {service.description}
        </p>

        {/* Tag pills */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="border border-sand/40 px-3 py-1.5 font-subhead text-[0.65rem] font-medium uppercase tracking-[0.15em] text-sand"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Booking CTA */}
        {bookingUrl && (
          <Cta href={bookingUrl} external variant="solid" className="mt-6 w-full">
            Book Now
          </Cta>
        )}
      </div>
    </article>
  );
}
