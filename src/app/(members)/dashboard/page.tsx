import type { Metadata } from "next";
import Link from "next/link";

// Members area is not for public indexing yet.
export const metadata: Metadata = {
  title: "Members Dashboard",
  robots: { index: false, follow: false },
};

/**
 * Sample members-only page. Placeholder only — no auth, no data.
 * The real version will show athlete performance tracking (stats/progress
 * over time) once auth + a database are wired up.
 */
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-midnight px-6 text-center">
      <p className="eyebrow mb-4">Members</p>
      <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-ivory sm:text-5xl">
        Members Area — <span className="text-sand">Coming Soon</span>
      </h1>
      <p className="mt-6 max-w-md font-body text-ivory/70">
        Athlete performance tracking is on the way — your stats and progress
        over time, all in one place.
      </p>
      <Link
        href="/"
        className="mt-8 font-subhead text-sm font-medium uppercase tracking-[0.15em] text-sand hover:text-ivory"
      >
        ← Back to site
      </Link>
    </div>
  );
}
