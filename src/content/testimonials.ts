/**
 * TESTIMONIALS — final/real content (transcribed from the brand reference).
 * Permanent local data (no CMS). Edit here if quotes are updated.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number; // out of 5
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kingdom Built is exactly what our son needed. The coaching is elite and the faith-based environment is something special. Best decision we made.",
    name: "Marcus T.",
    role: "Parent of 14U player",
    rating: 5,
  },
  {
    quote:
      "My exit velocity went from 78 to 91 in three months. The HitTrax data and performance programming are legit. This facility is the real deal.",
    name: "Jake Rivera",
    role: "High School Varsity",
    rating: 5,
  },
  {
    quote:
      "Clean facility, real coaches, real results. The kids leave every session better players and better people. That's what Kingdom Built is about.",
    name: "Coach Williams",
    role: "Travel Ball Coach",
    rating: 5,
  },
  {
    quote:
      "I've been to a lot of training facilities. This one is different. The intentionality behind every session — you can feel the mission in the room.",
    name: "Sarah M.",
    role: "Softball Player, 16U",
    rating: 5,
  },
];
