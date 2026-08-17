import Link from "next/link";
import { Logo } from "./Logo";
import {
  business,
  footerNav,
  socials,
  verse,
  BOOKING_URL,
} from "@/content/site";

/**
 * Footer — brand column + Coaching/Performance/Facility link columns + a
 * copyright/tagline bar. The full NAP (name, address, phone) appears here as
 * real, crawlable text for local SEO / NAP consistency.
 */

const columns = [footerNav.coaching, footerNav.performance, footerNav.facility];

export function Footer() {
  const { address } = business;

  return (
    <footer className="border-t border-charcoal/60 bg-midnight">
      <div className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-ivory/70">
              {business.shortDescription}
            </p>

            {/* NAP — real text for local SEO consistency */}
            <address className="mt-6 not-italic font-body text-sm leading-relaxed text-ivory/70">
              <div>{business.name}</div>
              <div>{address.street}</div>
              <div>
                {address.city}, {address.region} {address.postalCode}
              </div>
              <div className="mt-2">
                <a href={business.phoneHref} className="hover:text-sand">
                  {business.phone}
                </a>
              </div>
              <div>Hours: {business.hours}</div>
            </address>

            <blockquote className="mt-6 max-w-xs font-body text-xs italic leading-relaxed text-ivory/50">
              &ldquo;{verse.text}&rdquo; &mdash; {verse.reference}
            </blockquote>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-3">
            {columns.map((col) => (
              <div key={col.heading}>
                <h2 className="font-subhead text-sm font-medium uppercase tracking-[0.2em] text-sand">
                  {col.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-sm text-ivory/70 transition-colors hover:text-sand"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="font-body text-sm text-ivory/70 transition-colors hover:text-sand"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="mt-12 flex flex-wrap gap-6 border-t border-charcoal/60 pt-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-subhead text-xs font-medium uppercase tracking-[0.2em] text-ivory/60 transition-colors hover:text-sand"
            >
              {s.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-subhead text-xs font-medium uppercase tracking-[0.2em] text-ivory/60 transition-colors hover:text-sand"
          >
            Book a Session
          </a>
        </div>
      </div>

      {/* Copyright + tagline bar */}
      <div className="border-t border-charcoal/60">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-ivory/50">
            &copy; {business.established} {business.name}. All rights reserved.
          </p>
          <p className="font-subhead text-xs font-medium uppercase tracking-[0.15em] text-sand">
            <span aria-hidden="true" className="mr-2">
              &#10013;
            </span>
            {business.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
