import type { Metadata } from "next";
import { PillarPage } from "@/components/services/PillarPage";
import { performance } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Baseball Performance — Speed, Strength & HitTrax",
  description:
    "Speed & agility, strength & conditioning, and HitTrax data-driven hitting analysis at Kingdom Built Performance in Santa Rosa Beach, FL. Baseball-specific programming.",
  path: "/performance",
});

export default function PerformancePage() {
  return (
    <PillarPage
      pillar={performance}
      eyebrow="The Performance Pillar"
      headlineLines={[
        { text: "Performance That", emphasis: false },
        { text: "Translates.", emphasis: true },
      ]}
      intro="Speed, strength, and data-driven hitting built specifically for baseball athletes. Our programming bridges the gap between the gym and the field so your work shows up on the diamond."
    />
  );
}
