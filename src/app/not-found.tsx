import Link from "next/link";

/** Global 404 page. */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-midnight px-6 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-ivory sm:text-6xl">
        Off The <span className="text-sand">Base Path</span>
      </h1>
      <p className="mt-6 max-w-md font-body text-ivory/70">
        We couldn&rsquo;t find that page. Let&rsquo;s get you back in the game.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-sand px-7 py-3.5 font-subhead text-sm font-medium uppercase tracking-[0.15em] text-midnight transition-colors hover:bg-ivory"
      >
        Back Home
      </Link>
    </div>
  );
}
