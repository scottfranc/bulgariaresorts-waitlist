import {NextResponse} from "next/server";
import {getSupabaseAdmin} from "@/lib/supabase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MS = 8000;
const requestTracker = new Map<string, number>();

const getClientIp = (request: Request) =>
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
  request.headers.get("x-real-ip") ||
  "unknown";

const isRateLimited = (key: string) => {
  const now = Date.now();
  const previous = requestTracker.get(key);
  if (previous && now - previous < RATE_LIMIT_MS) return true;
  requestTracker.set(key, now);
  return false;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      firstName?: string;
      source?: string;
      website?: string;
    };

    const email = (body.email || "").trim().toLowerCase();
    const firstName = (body.firstName || "").trim();
    const source = (body.source || "coming-soon").trim();
    const honeypot = (body.website || "").trim();
    const ip = getClientIp(request);

    if (honeypot) {
      return NextResponse.json({ok: true});
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {ok: false, message: "Please enter a valid email address."},
        {status: 400}
      );
    }

    if (isRateLimited(`${ip}:${email}`)) {
      return NextResponse.json(
        {ok: false, message: "Too many attempts. Please wait a moment and try again."},
        {status: 429}
      );
    }

    const supabase = getSupabaseAdmin();
    const {error} = await supabase.from("waitlist_signups").insert({
      email,
      first_name: firstName || null,
      source,
    });

    if (error?.code === "23505") {
      return NextResponse.json(
        {ok: false, message: "You are already on the waitlist with this email."},
        {status: 409}
      );
    }

    if (error) {
      return NextResponse.json(
        {ok: false, message: "We could not save your signup right now. Please try again."},
        {status: 500}
      );
    }

    return NextResponse.json({
      ok: true,
      message: "You are on the waitlist. We will keep you updated.",
    });
  } catch {
    return NextResponse.json(
      {ok: false, message: "Unexpected error while processing your request."},
      {status: 500}
    );
  }
}
