import {
  FACILITY_TIME_ZONE,
  getTodaySchedule,
  type Session,
  type SessionType,
} from "@/lib/swift";
import { BOOKING_URL, SERVICE_BOOKING_URLS } from "@/content/site";

/**
 * "Today at KBP" — today's sessions pulled from the RunSwift public calendar
 * feed and rendered in brand styling. Only group sessions (classes and camps)
 * are shown — private lessons and rentals are filtered out. Classes link to the
 * class booking page.
 * Falls back to the embedded Swift calendar if the feed is unavailable.
 */

const CALENDAR_URL = `${BOOKING_URL}/calendar`;

// Group sessions only; Swift hides titles for lessons and rentals anyway.
const TYPE_LABELS: Partial<Record<SessionType, string>> = {
  CLASS: "Group Class",
  CAMP: "Camp",
};

const time = new Intl.DateTimeFormat("en-US", {
  timeZone: FACILITY_TIME_ZONE,
  hour: "numeric",
  minute: "2-digit",
});

const day = new Intl.DateTimeFormat("en-US", {
  timeZone: FACILITY_TIME_ZONE,
  weekday: "long",
  month: "short",
  day: "numeric",
});

export async function TodaySchedule() {
  // Off unless explicitly enabled, so it can be tested locally before launch.
  if (process.env.SHOW_TODAY_SCHEDULE !== "true") return <CalendarEmbed />;

  const all = await getTodaySchedule();

  if (!all) return <CalendarEmbed />;

  const sessions = all.filter((s) => s.type in TYPE_LABELS);

  return (
    <div className="flex w-full flex-col border border-charcoal bg-navy shadow-2xl lg:max-h-[640px]">
      <div className="flex flex-col gap-3 border-b border-charcoal px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:px-6">
        <div>
          <p className="eyebrow mb-2">Today at KBP</p>
          <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-ivory sm:text-3xl">
            {day.format(new Date())}
          </h2>
        </div>
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-subhead text-xs font-medium uppercase tracking-[0.15em] text-sand hover:text-ivory"
        >
          Full Schedule &rarr;
        </a>
      </div>

      {sessions.length === 0 ? (
        <p className="px-6 py-10 font-body text-ivory/70">
          No group classes on the schedule today. See the full schedule for
          upcoming sessions.
        </p>
      ) : (
        <ul className="divide-y divide-charcoal overflow-y-auto">
          {sessions.map((s) => (
            <SessionRow key={s.id} session={s} />
          ))}
        </ul>
      )}
    </div>
  );
}

// On mobile the row wraps: time + Book share the top line and the details take
// the full width below. From sm up it's a single time | details | Book row.
function SessionRow({ session: s }: { session: Session }) {
  return (
    <li className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-4 sm:flex-nowrap sm:px-6">
      <div className="order-1 flex-1 font-subhead text-sm font-medium uppercase text-sand sm:w-20 sm:flex-none sm:shrink-0">
        {time.format(s.start)}
        <span className="ml-2 text-xs text-ivory/50 sm:ml-0 sm:block">
          to {time.format(s.end)}
        </span>
      </div>

      <div className="order-3 w-full min-w-0 sm:order-2 sm:w-auto sm:flex-1">
        <p className="font-subhead text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/50">
          {TYPE_LABELS[s.type]}
        </p>
        <p className="font-body leading-snug text-ivory">{s.title}</p>
        {s.instructors.length > 0 ? (
          <p className="mt-0.5 font-body text-sm text-ivory/50">
            with {s.instructors.join(", ")}
          </p>
        ) : null}
      </div>

      {s.type === "CLASS" ? (
        <a
          href={SERVICE_BOOKING_URLS["group-training"]}
          target="_blank"
          rel="noopener noreferrer"
          className="order-2 shrink-0 border border-sand px-3 sm:order-3 py-1.5 font-subhead text-xs font-medium uppercase tracking-[0.15em] text-sand transition-colors hover:bg-sand hover:text-midnight"
        >
          Book
        </a>
      ) : null}
    </li>
  );
}

function CalendarEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-charcoal bg-white shadow-2xl">
      <iframe
        src={CALENDAR_URL}
        title="Kingdom Built Performance booking calendar"
        loading="lazy"
        className="h-[560px] w-full lg:h-[640px]"
      />
    </div>
  );
}
