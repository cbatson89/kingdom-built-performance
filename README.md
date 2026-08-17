# Kingdom Built Performance

Marketing website for **Kingdom Built Performance**, a faith-driven baseball training facility in Santa Rosa Beach, FL (30A). Built with Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values (see below)
npm run dev                  # http://localhost:3000
```

Build / lint:

```bash
npm run build
npm run lint
```

## Tech stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS** — all brand values are design tokens (see below)
- **Resend** for contact-form email
- Deploy target: **Vercel**

## Design tokens (swap the brand in one place)

All colors, fonts, and key scales live as tokens — components never hardcode hex or font names.

- **Colors + spacing:** `tailwind.config.ts` (`midnight`, `navy`, `charcoal`, `sand`, `ivory`). Use as `bg-midnight`, `text-sand`, etc.
- **Fonts:** `src/lib/fonts.ts` loads League Spartan + Montserrat via `next/font` and exposes them as the Tailwind tokens `font-headline`, `font-subhead`, `font-body`.

To rebrand colors or type, edit those two files only.

## Editable content

Marketing copy lives in `src/content/` (not buried in JSX), so it's safe to edit:

- `site.ts` — business NAP, nav, socials, booking URL, verse
- `home.ts` — hero, values ticker, mission snippet, two-pillars intro, testimonials heading
- `services.ts` — Coaching + Performance service cards and pillar callouts
- `testimonials.ts` — the four testimonials (permanent local data, no CMS)
- `about.ts` — purpose, mission, vision, values, verse, tagline
- `contact.ts` — contact + facility page copy

## Environment variables

Copy `.env.example` → `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key for the contact form |
| `CONTACT_FORM_TO_EMAIL` | Where contact submissions are delivered |
| `CONTACT_FORM_FROM_EMAIL` | Verified Resend "from" sender (optional; defaults to Resend's test sender) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID (optional; analytics is a no-op until set) |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (defaults to `https://kingdombuiltperformance.com`) |

### ⚠️ Contact form is built but INERT until Resend is set up

The contact form (`/contact` → `/api/contact`) is fully wired but **will not send email until `RESEND_API_KEY` and `CONTACT_FORM_TO_EMAIL` are set**. Until then the API returns a clear "not connected yet" message and the UI shows an error state. Once you create a Resend account, add a key, and verify your sending domain, it works with no code changes.

## Booking / Membership

"Book Now" and any membership CTA link out (new tab) to the existing RunSwift booking system:
`https://book.runswiftapp.com/facilities/boomroom30a` (the `boomroom30a` slug predates the rebrand — intentional).

## Local SEO

- Per-page metadata via the Next.js Metadata API (`src/lib/seo.ts` → `buildMetadata`)
- `SportsActivityLocation` JSON-LD in `src/components/seo/LocalBusinessJsonLd.tsx` (geo coords are **approximate** — replace with exact values)
- `src/app/sitemap.ts` and `src/app/robots.ts`
- Canonical + Open Graph + Twitter tags per page
- Semantic HTML, one `h1` per page, descriptive `alt` text on all images

## Placeholders / swap-out points

Search the codebase for `TODO` to find every swap point. Key ones:

- **Photography:** local placeholder SVGs in `public/placeholders/` rendered via `next/image`. Drop real raster files in `public/` and update the `image` paths in `src/content/*`.
- **Logo:** text wordmark in `src/components/layout/Logo.tsx` and emblem in `src/app/icon.svg`.
- **Brand icons:** line-style stand-ins in `src/components/ui/BrandIcon.tsx` (Faith/Strength/Growth/Leadership/Performance).
- **OG image:** `public/placeholders/og-default.svg` — replace with a real **1200×630 PNG/JPG** (most social crawlers don't render SVG OG images).
- **Social links:** placeholder URLs in `src/content/site.ts`.

## Routing

- `src/app/(public)/` — all marketing pages (`/`, `/coaching`, `/performance`, `/facility`, `/about`, `/contact`)
- `src/app/(members)/` — auth-ready scaffolding with a placeholder `/dashboard`. **No auth or DB is implemented.** See `middleware.ts` (route-guard stub) and `prisma/schema.prisma.placeholder` (future data-model marker). Auth provider (Clerk / Auth.js / Supabase Auth / …) not yet chosen.
- `/blog` is intentionally not built, but the structure leaves room to add it cleanly.
