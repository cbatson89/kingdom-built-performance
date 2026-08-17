/**
 * ─────────────────────────────────────────────────────────────────────────
 * (members) ROUTE GROUP — auth-ready scaffolding (NOT YET IMPLEMENTED)
 *
 * This route group is intentionally separate from (public). It's where the
 * future members-only area lives — most importantly the performance-tracking
 * dashboard (athlete stats/progress over time, which needs real per-user
 * structured data, not just static gated content).
 *
 * When auth is added:
 *   - This layout is the natural place to render the authenticated app shell
 *     (member nav, sign-out, etc.).
 *   - Route protection is stubbed in middleware.ts at the repo root — see the
 *     comments there. The auth provider decision (Clerk / NextAuth (Auth.js) /
 *     Supabase Auth / ...) has NOT been made yet.
 *   - A database will be needed for the data models — see prisma/schema.prisma
 *     for a non-functional placeholder marker.
 *
 * No auth or DB packages are installed yet. This is structure only.
 * ─────────────────────────────────────────────────────────────────────────
 */
export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main id="main">{children}</main>;
}
