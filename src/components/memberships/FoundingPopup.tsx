"use client";

import { useEffect, useRef } from "react";
import { Cta } from "@/components/ui/Cta";
import { memberships } from "@/content/memberships";
import { business } from "@/content/site";

const DELAY_MS = 2000;
// Show once per browser session so it doesn't reappear on every visit.
const SEEN_KEY = "kbp-founding-popup-seen";

/**
 * Founding 40 promo modal for /memberships. Opens after a short delay using a
 * native <dialog> (focus trap + Esc to close for free). Closes on the X, Esc,
 * or a backdrop click. CTAs mirror the Founding 40 section on the page.
 */
export function FoundingPopup() {
  const ref = useRef<HTMLDialogElement>(null);
  const { founding } = memberships;

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // Storage blocked — still show the popup.
    }
    const timer = setTimeout(() => {
      ref.current?.showModal();
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby="founding-popup-heading"
      onClick={(e) => {
        // Clicks on the dialog element itself are backdrop clicks.
        if (e.target === e.currentTarget) close();
      }}
      className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto border border-sand bg-navy p-0 text-ivory backdrop:bg-midnight/80 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-6 sm:p-10">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center text-ivory/70 outline-none hover:text-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-sand"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <p className="eyebrow mb-3 pr-10">{founding.eyebrow}</p>
        <h2
          id="founding-popup-heading"
          className="font-headline text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl"
        >
          {founding.heading}
        </h2>
        <p className="mt-4 font-body leading-relaxed text-ivory/70">
          {founding.intro}
        </p>

        <div className="mt-6 flex flex-col gap-4 bg-sand p-6 text-midnight sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-headline text-xl font-bold uppercase tracking-tight">
              {founding.plan}
            </h3>
            <p className="mt-2 font-body text-sm font-semibold">
              {founding.planDetails}
            </p>
            <p className="mt-1 font-body text-sm text-midnight/80">
              Regular <s>${founding.regularPrice}/mo</s> · {founding.commitment}
            </p>
          </div>
          <p className="shrink-0 font-headline font-bold leading-none">
            <span className="text-6xl">${founding.price}</span>
            <span className="ml-1 font-subhead text-lg font-medium uppercase">
              /mo
            </span>
          </p>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {founding.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-0.5 text-sand">
                &#10003;
              </span>
              <span className="font-body text-sm text-ivory/80">{perk}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 font-body text-sm leading-relaxed text-ivory/70">
          {founding.claim.body}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Cta href={business.phoneHref} variant="solid">
            Call / Text Coach Brody
          </Cta>
          <Cta href="/contact" variant="outline">
            Send a Message
          </Cta>
        </div>
      </div>
    </dialog>
  );
}
