import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function saveSubmission(data: {
  form_type: string;
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  subject?: string | null;
  message?: string | null;
  details?: Record<string, unknown> | null;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { error } = await supabase.from('submissions').insert({
      form_type: data.form_type,
      name: data.name ?? null,
      phone: data.phone ?? null,
      email: data.email ?? null,
      subject: data.subject ?? null,
      message: data.message ?? null,
      details: data.details ?? null,
    });
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}

interface AdminAuthState {
  isAuthenticated: boolean;
  loading: boolean;
}

export function useAdminAuth(): AdminAuthState & {
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
} {
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
  });
  const [state, setState] = useState<AdminAuthState>({ isAuthenticated: false, loading: true });

  React.useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setState({ isAuthenticated: !!data.session, loading: false });
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setState({ isAuthenticated: !!session, loading: false });
    });
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { success: false, error: error.message };
    return { success: true };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setState({ isAuthenticated: false, loading: false });
  };

  return { ...state, signIn, signOut };
}

export { supabaseUrl, supabaseAnonKey };
