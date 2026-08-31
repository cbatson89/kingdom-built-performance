import Link from "next/link";
import Image from "next/image";
import { business } from "@/content/site";

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "muted";
}) {
  return (
    <Link
      href="/"
      className={["group inline-flex flex-col leading-none", className].join(
        " ",
      )}
      aria-label={`${business.name} — home`}
    >
      {/* TODO: replace with final logo SVG */}
      <span
        className={[
          "font-headline text-xl font-bold uppercase tracking-wide sm:text-2xl",
          tone === "light" ? "text-ivory" : "text-ivory",
        ].join(" ")}
      >
        Kingdom Built
      </span>
      <span className="mt-1 flex items-center gap-2 font-subhead text-[0.6rem] font-medium uppercase tracking-[0.35em] text-sand">
        <span aria-hidden="true">—</span>
        Performance
        <span aria-hidden="true">—</span>
      </span>
    </Link>
  );
}
