import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export interface Submission {
  id: string;
  form_type: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  subject: string | null;
  message: string | null;
  details: Record<string, unknown> | null;
  created_at: string;
}
