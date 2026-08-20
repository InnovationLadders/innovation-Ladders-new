// Database temporarily disconnected.
// The public site runs without Supabase. Form submissions are accepted
// at the UI level (success message shown) but not persisted.
// Reconnect by restoring the Supabase client and the original insert logic.

import React, { useState, useEffect } from 'react';

export async function saveSubmission(_data: {
  form_type: string;
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  subject?: string | null;
  message?: string | null;
  details?: Record<string, unknown> | null;
}): Promise<{ success: boolean; error?: string }> {
  return { success: true };
}

interface AdminAuthState {
  isAuthenticated: boolean;
  loading: boolean;
}

export function useAdminAuth(): AdminAuthState & {
  signIn: (_email: string, _password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
} {
  const [state, setState] = useState<AdminAuthState>({ isAuthenticated: false, loading: false });

  useEffect(() => {
    setState({ isAuthenticated: false, loading: false });
  }, []);

  const signIn = async (_email: string, _password: string) => {
    return { success: false, error: 'لوحة التحكم غير مفعلة حالياً' };
  };

  const signOut = async () => {
    setState({ isAuthenticated: false, loading: false });
  };

  return { ...state, signIn, signOut };
}

export const supabaseUrl = '';
export const supabaseAnonKey = '';
