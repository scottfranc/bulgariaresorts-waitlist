import {NextResponse} from "next/server";
import {env} from "@/lib/env";
import {getSupabaseAdmin} from "@/lib/supabase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MS = 8000;
const requestTracker = new Map<string, number>();

const getClientIp = (request: Request) =>
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";

const isRateLimited = (key: string) => {
  const now = Date.now();
  const previous = requestTracker.get(key);
  if (previous && now - previous < RATE_LIMIT_MS) return true;
  requestTracker.set(key, now);
  return false;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

async function notifyInternal(params: {name: string; email: string; subject: string; body: string}) {
  if (!env.brevoApiKey) {
    throw new Error("Missing BREVO_API_KEY");
  }

  const safeName = params.name ? escapeHtml(params.name) : "Not provided";
  const safeSubject = params.subject ? escapeHtml(params.subject) : "General inquiry";
  const safeBody = escapeHtml(params.body).replaceAll("\n", "<br/>");

  const htmlContent = `
    <html>
      <body style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
        <h2>New contact inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br/>${safeBody}</p>
      </body>
    </html>
  `;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": env.brevoApiKey,
    },
    body: JSON.stringify({
      sender: {name: env.brevoSenderName, email: env.brevoSenderEmail},
      to: [{email: env.contactEmail, name: "Bulgaria Resorts"}],
      replyTo: {email: params.email, name: params.name || params.email},
      subject: `New inquiry: ${params.subject || "General inquiry"}`,
      htmlContent,
    }),
  });

  if (!response.ok) {
    throw new Error("Brevo notification failed");
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: string;
      email?: string;
      subject?: string;
      body?: string;
      website?: string;
    };

    const name = (payload.name || "").trim();
    const email = (payload.email || "").trim().toLowerCase();
    const subject = (payload.subject || "").trim();
    const body = (payload.body || "").trim();
    const honeypot = (payload.website || "").trim();
    const ip = getClientIp(request);

    if (honeypot) {
      return NextResponse.json({ok: true});
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ok: false, message: "Please enter a valid email address."}, {status: 400});
    }
    if (!body) {
      return NextResponse.json({ok: false, message: "Please include your message."}, {status: 400});
    }
    if (isRateLimited(`${ip}:${email}`)) {
      return NextResponse.json({ok: false, message: "Too many attempts. Please wait a moment and try again."}, {status: 429});
    }

    const supabase = getSupabaseAdmin();
    const {error} = await supabase.from("contact_inquiries").insert({
      name: name || null,
      email,
      subject: subject || null,
      body,
      source: "contact-page",
    });

    if (error) {
      return NextResponse.json(
        {ok: false, message: "We could not save your message right now. Please try again."},
        {status: 500},
      );
    }

    await notifyInternal({name, email, subject, body});

    return NextResponse.json({
      ok: true,
      message: "Thanks. Your message is in with our team and we will reply shortly.",
    });
  } catch {
    return NextResponse.json(
      {ok: false, message: "Unexpected error while sending your message. Please try again."},
      {status: 500},
    );
  }
}
