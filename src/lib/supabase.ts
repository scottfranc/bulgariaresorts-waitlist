import {createClient} from "@supabase/supabase-js";
import {getServerSupabaseConfig} from "./env";

export type WaitlistSignupInsert = {
  email: string;
  first_name?: string | null;
  source?: string;
};

export const getSupabaseAdmin = () => {
  const {url, serviceRoleKey} = getServerSupabaseConfig();

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};
