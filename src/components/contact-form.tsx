"use client";

import {FormEvent, useState} from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name,
          email,
          subject,
          body,
          website,
        }),
      });

      const data = (await response.json()) as {ok: boolean; message?: string};
      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message || "Could not send your message right now.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Message sent.");
      setName("");
      setEmail("");
      setSubject("");
      setBody("");
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again in a few moments.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="surface p-7 sm:p-9">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Contact</p>
      <h2 className="font-display mt-3 text-3xl tracking-tight text-neutral-900">Send an inquiry</h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        Share your travel goals, reservation needs, or itinerary questions. We typically respond within one business day.
      </p>

      <div className="mt-7 space-y-5">
        <label className="block">
          <span className="text-[13px] font-medium text-neutral-600">Name (optional)</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="input-clean mt-1" />
        </label>

        <label className="block">
          <span className="text-[13px] font-medium text-neutral-600">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="input-clean mt-1"
          />
        </label>

        <label className="block">
          <span className="text-[13px] font-medium text-neutral-600">Subject (optional)</span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Reservations, itinerary planning, destination advice..."
            className="input-clean mt-1"
          />
        </label>

        <label className="block">
          <span className="text-[13px] font-medium text-neutral-600">Message</span>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Tell us what you need help with."
            rows={6}
            className="input-clean mt-1 resize-y"
          />
        </label>

        <label className="hidden">
          Website
          <input value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary mt-8">
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {message ? (
        <p className={`mt-4 text-sm ${status === "success" ? "text-emerald-700" : "text-rose-600"}`}>{message}</p>
      ) : null}
    </form>
  );
}
