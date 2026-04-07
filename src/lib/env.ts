const required = (value: string | undefined, key: string) => {
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
};

export const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@bulgariaresorts.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://comingsoon.bulgariaresorts.com",
};

export const getServerSupabaseConfig = () => ({
  url: required(env.supabaseUrl, "NEXT_PUBLIC_SUPABASE_URL"),
  serviceRoleKey: required(env.supabaseServiceRoleKey, "SUPABASE_SERVICE_ROLE_KEY"),
});
