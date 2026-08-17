/**
 * SERVICE CONTENT — Coaching & Performance pillars.
 * Copy is final-structure / draft-wording. Edit freely here.
 *
 * `image` points at a local placeholder SVG (swap for real photography later).
 * `icon` is a brand-icon concept key (see components/ui/BrandIcon.tsx).
 */

export type Service = {
  id: string; // anchor id (used for footer deep-links)
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

export type Pillar = {
  key: "coaching" | "performance";
  label: string;
  icon: "performance" | "growth"; // baseball icon for coaching, chevrons for performance
  services: Service[];
  callout: {
    heading: string;
    body: string;
    bullets: string[];
  };
};

export const coaching: Pillar = {
  key: "coaching",
  label: "Coaching",
  icon: "performance", // baseball
  services: [
    {
      id: "private-lessons",
      title: "Private Lessons",
      description:
        "One-on-one instruction with certified coaches covering hitting mechanics, pitching, fielding, and catching. Tailored to your player's age, position, and goals.",
      tags: ["Hitting", "Pitching", "Fielding", "Catching"],
      image: "/placeholders/coaching-private-lessons.svg",
      imageAlt:
        "Youth baseball player receiving one-on-one batting instruction from a coach at Kingdom Built Performance in Santa Rosa Beach",
    },
    {
      id: "team-training",
      title: "Team Training",
      description:
        "Bring your team indoors for organized station work, cage time, and a reliable game-plan for focused collective improvement.",
      tags: ["Station Work", "Cage Time", "Game Planning"],
      image: "/placeholders/coaching-team-training.svg",
      imageAlt:
        "Youth baseball team running organized indoor station work during a team training session",
    },
    {
      id: "camps-clinics",
      title: "Camps & Clinics",
      description:
        "Intensive multi-day camps and position-specific clinics led by experienced coaches. High reps, high energy, high results.",
      tags: ["Multi-Day Camps", "Position Clinics", "All Levels"],
      image: "/placeholders/coaching-camps-clinics.svg",
      imageAlt:
        "Group of young baseball players fielding ground balls during a multi-day camp at Kingdom Built Performance",
    },
  ],
  callout: {
    heading: "The Coaching Pillar",
    body: "Our coaches are experienced players who have competed at high levels and are committed to intentional development. Every lesson is built around your player's specific needs — not a one-size-fits-all curriculum.",
    bullets: [
      "All ages and skill levels welcome",
      "Background-checked, certified coaches",
      "Indoor facility — weather never cancels",
      "Video analysis available on request",
    ],
  },
};

export const performance: Pillar = {
  key: "performance",
  label: "Performance",
  icon: "growth", // chevrons
  services: [
    {
      id: "speed-agility",
      title: "Speed & Agility",
      description:
        "Sport-specific movement training designed to improve first-step quickness, baserunning efficiency, and defensive range. Built for baseball athletes.",
      tags: ["First Step", "Baserunning", "Lateral Movement"],
      image: "/placeholders/performance-speed-agility.svg",
      imageAlt:
        "Baseball athlete performing agility ladder footwork drills during a speed and agility session",
    },
    {
      id: "strength-conditioning",
      title: "Strength & Conditioning",
      description:
        "Programming built around the demands of baseball — rotational power, arm care, durability, and explosive hip drive to maximize on-field output.",
      tags: ["Rotational Power", "Arm Care", "Explosive Training"],
      image: "/placeholders/performance-strength-conditioning.svg",
      imageAlt:
        "Athlete performing a strength and conditioning lift in the Kingdom Built Performance weight area",
    },
    {
      id: "hittrax-technology",
      title: "HitTrax Technology",
      description:
        "Data-driven hitting analysis using HitTrax launch angle, exit velocity, and batted ball tracking. Know your numbers. Improve your game.",
      tags: ["Exit Velocity", "Launch Angle", "Bat Path Data"],
      image: "/placeholders/performance-hittrax.svg",
      imageAlt:
        "Hitter taking a swing in a HitTrax-equipped batting cage that tracks exit velocity and launch angle",
    },
  ],
  callout: {
    heading: "The Performance Pillar",
    body: "Performance training bridges the gap between the gym and the field. Our programming is built specifically for baseball athletes — the movements, demands, and energy systems that matter on the diamond.",
    bullets: [
      "Baseball-specific S&C programming",
      "HitTrax data-driven hitting analysis",
      "Sport-specific speed & agility work",
      "Individual and group sessions available",
    ],
  },
};

export const pillars = [coaching, performance] as const;
