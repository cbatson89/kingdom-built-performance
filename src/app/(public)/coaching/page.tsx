import type { Metadata } from "next";
import { PillarPage } from "@/components/services/PillarPage";
import { coaching } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Baseball Coaching — Private Lessons, Team Training & Camps",
  description:
    "Private lessons, team training, and camps & clinics with certified coaches at Kingdom Built Performance in Santa Rosa Beach, FL. Development built around your player.",
  path: "/coaching",
});

export default function CoachingPage() {
  return (
    <PillarPage
      pillar={coaching}
      eyebrow="The Coaching Pillar"
      headlineLines={[
        { text: "Coaching That", emphasis: false },
        { text: "Develops.", emphasis: true },
      ]}
      intro="One-on-one instruction, team training, and camps built around intentional development. Our certified coaches meet your player where they are and build from there — on the field and in character."
    />
  );
}
