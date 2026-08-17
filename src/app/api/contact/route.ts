import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/content/site";

/**
 * POST /api/contact
 * Receives the contact form (name, email, phone, message), validates it
 * server-side, and emails the submission via Resend.
 *
 * Env-driven (never hardcoded):
 *   RESEND_API_KEY          — Resend API key
 *   CONTACT_FORM_TO_EMAIL   — where submissions are delivered
 *   CONTACT_FORM_FROM_EMAIL — verified "from" sender (defaults to Resend's test sender)
 *
 * Until RESEND_API_KEY + CONTACT_FORM_TO_EMAIL are set, this returns a clear
 * 503 "not configured" error and no email is sent (the form is inert by design).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  // Server-side validation (mirrors client-side checks).
  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FORM_FROM_EMAIL || "onboarding@resend.dev";

  // Not configured yet — fully wired but inert until env values exist.
  if (!apiKey || !toEmail) {
    return NextResponse.json(
      {
        error:
          "The contact form isn't connected yet. Please call or email us in the meantime.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${business.name} Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again." },
      { status: 500 },
    );
  }
}
