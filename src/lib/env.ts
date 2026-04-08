const required = (value: string | undefined, key: string) => {
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
};

export const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  brevoApiKey: process.env.BREVO_API_KEY,
  brevoWaitlistListId: Number(process.env.BREVO_WAITLIST_LIST_ID || "12"),
  brevoSenderName: process.env.BREVO_SENDER_NAME ?? "Bulgaria Resorts",
  brevoSenderEmail: process.env.BREVO_SENDER_EMAIL ?? "hello@bulgariaresorts.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@bulgariaresorts.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://comingsoon.bulgariaresorts.com",
};

export const getServerSupabaseConfig = () => ({
  url: required(env.supabaseUrl, "NEXT_PUBLIC_SUPABASE_URL"),
  serviceRoleKey: required(env.supabaseServiceRoleKey, "SUPABASE_SERVICE_ROLE_KEY"),
});
