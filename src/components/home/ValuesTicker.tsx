import { valuesTicker } from "@/content/home";

/**
 * Scrolling values ticker — gold marquee band. The list is duplicated so the
 * CSS marquee (translateX -50%) loops seamlessly. Motion is disabled for users
 * who prefer reduced motion (see globals.css).
 */
export function ValuesTicker() {
  // Duplicate the sequence for a seamless loop.
  const items = [...valuesTicker, ...valuesTicker];

  return (
    <div className="overflow-hidden bg-sand py-3.5 text-midnight">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((value, i) => (
          <span
            key={i}
            className="flex items-center font-subhead text-xs font-medium uppercase tracking-[0.2em] sm:text-sm"
          >
            {value}
            <span aria-hidden="true" className="mx-6 text-midnight/60">
              &#10022;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
