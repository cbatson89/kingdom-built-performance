import {
  FACILITY_TIME_ZONE,
  getTodaySchedule,
  type Session,
  type SessionType,
} from "@/lib/swift";
import { BOOKING_URL, SERVICE_BOOKING_URLS } from "@/content/site";

/**
 * "Today at KBP" — today's sessions pulled from the RunSwift public calendar
 * feed and rendered in brand styling. Classes link to the class booking page;
 * private lessons and rentals show as "Booked" (Swift hides their titles).
 * Falls back to the embedded Swift calendar if the feed is unavailable.
 */

const CALENDAR_URL = `${BOOKING_URL}/calendar`;

const TYPE_LABELS: Record<SessionType, string> = {
  CLASS: "Group Class",
  CAMP: "Camp",
  LESSON: "Private Lesson",
  RENTAL: "Cage Rental",
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

  const sessions = await getTodaySchedule();

  if (!sessions) return <CalendarEmbed />;

  return (
    <div className="flex w-full flex-col border border-charcoal bg-navy shadow-2xl lg:max-h-[640px]">
      <div className="flex items-end justify-between gap-4 border-b border-charcoal px-6 py-5">
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
          Nothing on the schedule yet today. Grab a lesson or cage time below.
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

function SessionRow({ session: s }: { session: Session }) {
  const isPublic = s.type === "CLASS" || s.type === "CAMP";

  return (
    <li className="flex items-center gap-5 px-6 py-4">
      <div className="w-20 shrink-0 font-subhead text-sm font-medium uppercase text-sand">
        {time.format(s.start)}
        <span className="block text-xs text-ivory/50">
          to {time.format(s.end)}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-subhead text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/50">
          {TYPE_LABELS[s.type] ?? "Session"}
        </p>
        <p
          className={[
            "font-body leading-snug",
            isPublic ? "text-ivory" : "text-ivory/60",
          ].join(" ")}
        >
          {isPublic ? s.title : "Booked"}
        </p>
        {isPublic && s.instructors.length > 0 ? (
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
          className="shrink-0 border border-sand px-3 py-1.5 font-subhead text-xs font-medium uppercase tracking-[0.15em] text-sand transition-colors hover:bg-sand hover:text-midnight"
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
