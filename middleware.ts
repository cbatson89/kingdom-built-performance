import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * AUTH MIDDLEWARE — STUB (NOT YET IMPLEMENTED)
 *
 * This is where route protection for the members-only area will live. Right
 * now it is a pass-through: it does NOT check auth and does NOT block anything.
 *
 * The auth provider decision has NOT been made yet (candidates: Clerk,
 * NextAuth / Auth.js, Supabase Auth, ...). Once chosen, replace the body of
 * the guarded block below with a real session check and redirect
 * unauthenticated users to a sign-in route.
 *
 * No auth packages are installed. This file is structure only.
 * ─────────────────────────────────────────────────────────────────────────
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Members-only routes that will require auth once it's wired up.
  const isProtected = pathname.startsWith("/dashboard");

  if (isProtected) {
    // TODO: replace with a real auth/session check, e.g.:
    //   const session = await getSession(request);
    //   if (!session) {
    //     const signIn = new URL("/sign-in", request.url);
    //     signIn.searchParams.set("redirect", pathname);
    //     return NextResponse.redirect(signIn);
    //   }
    // For now, allow through so the placeholder page is viewable.
  }

  return NextResponse.next();
}

/**
 * Only run middleware on the routes that will eventually need protection.
 * Expand this matcher as the members area grows.
 */
export const config = {
  matcher: ["/dashboard/:path*"],
};
