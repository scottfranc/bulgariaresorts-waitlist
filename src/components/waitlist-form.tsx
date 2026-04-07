"use client";

import {FormEvent, useState} from "react";
import {track} from "@vercel/analytics";

type WaitlistFormProps = {
  source: string;
};

export function WaitlistForm({source}: WaitlistFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          firstName,
          email,
          website,
          source,
        }),
      });

      const data = (await response.json()) as {ok: boolean; message?: string};

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message || "Could not submit the form. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "You have joined the waitlist.");
      setFirstName("");
      setEmail("");
      track("waitlist_signup_success", {source});
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again in a few moments.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass-card p-6 md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        Join the waitlist
      </p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f2742]">
        Get launch updates first
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        We will email you the moment we go live, plus early access opportunities and launch offers.
      </p>

      <div className="mt-5 grid gap-3">
        <label className="block text-sm font-medium text-slate-700">
          First name (optional)
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Alex"
            className="mt-1.5 h-11 w-full rounded-lg border border-[#d5deea] bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-[#113a63] focus:ring-2 focus:ring-[#113a63]/15"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Email address
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mt-1.5 h-11 w-full rounded-lg border border-[#d5deea] bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-[#113a63] focus:ring-2 focus:ring-[#113a63]/15"
          />
        </label>

        {/* Hidden honeypot field for bots. */}
        <label className="hidden">
          Website
          <input
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#113a63] px-4 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Joining..." : "Join waitlist"}
      </button>

      {message && (
        <p
          className={`mt-3 text-sm ${
            status === "success" ? "text-emerald-700" : "text-rose-700"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
