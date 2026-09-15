import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ValuesTicker } from "@/components/home/ValuesTicker";
import { MissionSection } from "@/components/home/MissionSection";
import { TwoPillars } from "@/components/home/TwoPillars";
import { Testimonials } from "@/components/home/Testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Faith-Driven Baseball Training in Santa Rosa Beach, FL",
  description:
    "Kingdom Built Performance is an elite, faith-driven baseball training facility in Santa Rosa Beach on 30A. Private coaching, group training, camps, speed & strength, and HitTrax analysis.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuesTicker />
      <MissionSection />
      <TwoPillars />
      <Testimonials />
    </>
  );
}
