import React, { useState } from 'react';
import { Lock, Mail, ArrowLeft, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useAdminAuth } from '../lib/submissions';

interface AdminLoginViewProps {
  onSuccess: () => void;
  onBack: () => void;
}

export default function AdminLoginView({ onSuccess, onBack }: AdminLoginViewProps) {
  const { signIn } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await signIn(email.trim(), password);
    setLoading(false);
    if (result.success) {
      onSuccess();
    } else {
      setError(result.error ?? 'فشل تسجيل الدخول');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12" dir="rtl">
      <div className="w-full max-w-md">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4 rotate-180" />
          العودة للموقع
        </button>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">
          <div className="mb-8 text-center space-y-3">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-black text-white">لوحة التحكم</h1>
            <p className="text-sm text-slate-400">تسجيل دخول المسؤول</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-300">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pr-10 pl-4 text-sm text-white placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-300">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pr-10 pl-10 text-sm text-white placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl border border-rose-800/50 bg-rose-950/40 px-4 py-3 text-sm text-rose-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-sky-600 py-3 text-sm font-bold text-white transition hover:bg-sky-700 disabled:opacity-50"
            >
              {loading ? 'جارٍ الدخول...' : 'دخول'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
