"use client";

import {FormEvent, useState} from "react";
import {track} from "@vercel/analytics";

type WaitlistFormProps = {
  source: string;
  variant?: "default" | "compact";
};

export function WaitlistForm({source, variant = "default"}: WaitlistFormProps) {
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
      setMessage(data.message || "You are subscribed.");
      setFirstName("");
      setEmail("");
      track("subscribe_success", {source});
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again in a few moments.");
    }
  };

  const pad = variant === "compact" ? "p-6 sm:p-7" : "p-8 sm:p-10";

  return (
    <form onSubmit={onSubmit} className={`surface ${pad}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
        Subscribe
      </p>
      <h3 className="font-display mt-3 text-2xl font-medium tracking-tight text-neutral-900 sm:text-[1.65rem]">
        Stay in the loop
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
        Get launch updates and curated resort insights. No spam, unsubscribe anytime.
      </p>

      <div className="mt-8 space-y-6">
        <label className="block">
          <span className="text-[13px] font-medium text-neutral-600">Name (optional)</span>
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Your first name"
            className="input-clean mt-1"
          />
        </label>

        <label className="block">
          <span className="text-[13px] font-medium text-neutral-600">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="input-clean mt-1"
          />
        </label>

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

      <button type="submit" disabled={status === "loading"} className="btn-primary mt-8">
        {status === "loading" ? "Sending…" : "Subscribe"}
      </button>

      {message && (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-700" : "text-rose-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
