import { business, verse } from "@/content/site";

/**
 * Top announcement bar — gold strip with the brand tagline + verse reference.
 * Static, non-dismissable (matches the reference design).
 */
export function AnnouncementBar() {
  return (
    <div className="bg-sand text-midnight">
      <div className="container-content flex items-center justify-center py-2 text-center">
        <p className="font-subhead text-[0.65rem] font-medium uppercase tracking-[0.2em] sm:text-xs">
          {business.tagline}
          <span aria-hidden="true" className="mx-2 sm:mx-3">
            &middot;
          </span>
          <span className="whitespace-nowrap">{verse.reference}</span>
        </p>
      </div>
    </div>
  );
}
