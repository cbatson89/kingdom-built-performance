/**
 * Today's schedule from RunSwift's public calendar feed — the same data that
 * powers the embedded /calendar page. The feed is undocumented; Swift approved
 * our use of it but doesn't officially support it, so every failure returns
 * null and callers fall back to the calendar iframe.
 */

const API = "https://book.runswiftapp.com/api/public";
const FACILITY_ID = 227; // kingdombuiltperformance
export const FACILITY_TIME_ZONE = "America/Chicago";

// Swift caches nothing for us, so keep request volume low.
const ROOMS_REVALIDATE = 60 * 60 * 24;
const BOOKINGS_REVALIDATE = 60 * 5;

export type SessionType = "CLASS" | "LESSON" | "RENTAL" | "CAMP";

export type Session = {
  id: number;
  type: SessionType;
  /** Public title for classes/camps; "Booked" for lessons and rentals. */
  title: string;
  start: Date;
  end: Date;
  instructors: string[];
};

type RawBooking = {
  bookingId?: number;
  title: string;
  start: string;
  end: string;
  bookingType?: string;
  serviceBookingType?: string;
  instructors?: { name: string }[];
};

/** Midnight-to-midnight bounds of today in the facility's time zone. */
function todayBounds(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: FACILITY_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZoneName: "longOffset",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const date = `${get("year")}-${get("month")}-${get("day")}`;
  const offset = get("timeZoneName").replace("GMT", "") || "Z";
  return {
    start: new Date(`${date}T00:00:00${offset}`),
    end: new Date(`${date}T23:59:59.999${offset}`),
  };
}

async function getJson<T>(url: string, revalidate: number): Promise<T> {
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`Swift ${res.status}: ${url}`);
  return res.json() as Promise<T>;
}

export async function getTodaySchedule(): Promise<Session[] | null> {
  try {
    const { publicCalendarRoomIds } = await getJson<{
      publicCalendarRoomIds: number[];
    }>(`${API}/facility/rooms?facilityId=${FACILITY_ID}`, ROOMS_REVALIDATE);

    const { start, end } = todayBounds();
    const params = new URLSearchParams({
      roomIds: publicCalendarRoomIds.join(","),
      startDate: start.toISOString(),
      endDate: end.toISOString(),
      facilityId: String(FACILITY_ID),
    });
    const raw = await getJson<RawBooking[]>(
      `${API}/calendar/bookings?${params}`,
      BOOKINGS_REVALIDATE,
    );

    // The feed returns one entry per room, so multi-room bookings repeat.
    // Only SERVICE bookings are sessions; "Closed" schedule blocks and
    // UNAVAILABLE (staff-blocked) time are dropped.
    const sessions = new Map<number, Session>();
    for (const b of raw) {
      if (!b.bookingId || b.bookingType !== "SERVICE") continue;
      if (sessions.has(b.bookingId)) continue;
      sessions.set(b.bookingId, {
        id: b.bookingId,
        type: b.serviceBookingType as SessionType,
        title: b.title,
        start: new Date(b.start),
        end: new Date(b.end),
        instructors: (b.instructors ?? []).map((i) => i.name),
      });
    }

    return [...sessions.values()].sort(
      (a, b) => a.start.getTime() - b.start.getTime(),
    );
  } catch (err) {
    console.error("[swift] today's schedule unavailable", err);
    return null;
  }
}
