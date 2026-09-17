"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ServiceCard } from "@/components/services/ServiceCard";
import { pillars } from "@/content/services";
import { twoPillars } from "@/content/home";
import { BOOKING_URL } from "@/content/site";

/**
 * "Two Pillars, One Mission" — a tabbed section toggling between the Coaching
 * and Performance service sets. Client component for the tab interaction;
 * uses standard tab/tabpanel ARIA semantics.
 */
export function TwoPillars() {
  const [active, setActive] = useState<(typeof pillars)[number]["key"]>(
    pillars[0].key,
  );
  const activePillar = pillars.find((p) => p.key === active) ?? pillars[0];

  return (
    <section className="bg-midnight py-20 sm:py-28">
      <div className="container-content">
        {/* Header row */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            eyebrow={twoPillars.eyebrow}
            lines={twoPillars.headlineLines}
          />
          <p className="max-w-xl font-body leading-relaxed text-ivory/70 lg:justify-self-end">
            {twoPillars.intro}
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Service pillars"
          className="mt-12 flex gap-8 border-b border-charcoal"
        >
          {pillars.map((pillar) => {
            const selected = pillar.key === active;
            return (
              <button
                key={pillar.key}
                role="tab"
                id={`tab-${pillar.key}`}
                aria-selected={selected}
                aria-controls={`panel-${pillar.key}`}
                onClick={() => setActive(pillar.key)}
                className={[
                  "flex items-center gap-3 border-b-2 pb-4 font-headline text-xl font-bold uppercase tracking-tight transition-colors sm:text-2xl",
                  selected
                    ? "border-sand text-sand"
                    : "border-transparent text-ivory/50 hover:text-ivory",
                ].join(" ")}
              >
                <BrandIcon name={pillar.icon} className="h-6 w-6" />
                {pillar.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`panel-${activePillar.key}`}
          aria-labelledby={`tab-${activePillar.key}`}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activePillar.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              bookingUrl={
                service.id === "private-lessons" ? BOOKING_URL : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
