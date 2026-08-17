"use client";

import { useState } from "react";

/**
 * ContactForm — four fields (Name, Email, Phone, Message) with client-side
 * validation, submitting to /api/contact (which emails via Resend).
 *
 * NOTE: the reference design also shows an optional "I'm interested in" select.
 * The brief specifies four fields, so it's omitted here — to add it, append a
 * <select name="interest"> below and include `interest` in the payload/schema.
 *
 * The form is fully wired but INERT until Resend env vars are set — in that
 * case the API returns a clear error and the UI shows the error state.
 */

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }): Errors {
    const next: Errors = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(data.email)) next.email = "Please enter a valid email.";
    if (!data.phone.trim()) next.phone = "Please enter your phone number.";
    if (!data.message.trim()) next.message = "Please enter a message.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-sand/40 bg-navy p-8 text-center"
      >
        <p className="font-headline text-2xl font-bold uppercase text-sand">
          Message Sent
        </p>
        <p className="mt-3 font-body text-ivory/70">
          Thanks for reaching out. We&rsquo;ll be in touch soon to help you take
          the first step.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-subhead text-sm font-medium uppercase tracking-[0.15em] text-sand hover:text-ivory"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-ivory">
        Get In Touch
      </h2>

      <Field label="Full Name" name="name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={inputClass(!!errors.name)}
        />
      </Field>

      <Field label="Email" name="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          className={inputClass(!!errors.email)}
        />
      </Field>

      <Field label="Phone" name="phone" error={errors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 000-0000"
          className={inputClass(!!errors.phone)}
        />
      </Field>

      <Field label="Message" name="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your player and goals..."
          className={inputClass(!!errors.message)}
        />
      </Field>

      {status === "error" && serverError ? (
        <p role="alert" className="font-body text-sm text-red-400">
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 bg-sand px-7 py-4 font-subhead text-sm font-medium uppercase tracking-[0.15em] text-midnight transition-colors hover:bg-ivory disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-subhead text-xs font-medium uppercase tracking-[0.2em] text-ivory/80"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 font-body text-xs text-red-400">{error}</p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full border bg-midnight px-4 py-3.5 font-body text-ivory placeholder:text-ivory/40",
    "focus:outline-none focus:ring-1 focus:ring-sand focus:border-sand",
    hasError ? "border-red-500/70" : "border-charcoal",
  ].join(" ");
}
