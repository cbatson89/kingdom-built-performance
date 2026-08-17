"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Cta } from "@/components/ui/Cta";
import { primaryNav, BOOKING_URL } from "@/content/site";

/**
 * Site header — sticky nav bar with wordmark, primary nav, and Book Now CTA.
 * On mobile the horizontal nav collapses into a hamburger-toggled panel.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/60 bg-midnight/95 backdrop-blur supports-[backdrop-filter]:bg-midnight/80">
      <nav
        className="container-content flex items-center justify-between py-4"
        aria-label="Primary"
      >
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "font-subhead text-sm font-medium uppercase tracking-[0.15em] transition-colors",
                      active ? "text-sand" : "text-ivory hover:text-sand",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Cta href={BOOKING_URL} external>
            Book Now
          </Cta>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-charcoal/60 bg-midnight lg:hidden"
        >
          <ul className="container-content flex flex-col gap-1 py-4">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "block py-3 font-subhead text-base font-medium uppercase tracking-[0.15em]",
                      active ? "text-sand" : "text-ivory",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3">
              <Cta href={BOOKING_URL} external className="w-full">
                Book Now
              </Cta>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
