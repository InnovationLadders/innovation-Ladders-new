import React, { useState, useEffect, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import { LogOut, Mail, Phone, User, Calendar, Search, Inbox, ChevronDown, ChevronUp, Trash2, RefreshCw } from 'lucide-react';
import { supabaseUrl, supabaseAnonKey } from '../lib/submissions';

interface Submission {
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

interface AdminDashboardViewProps {
  onSignOut: () => Promise<void>;
}

const formTypeLabels: Record<string, string> = {
  contact: 'رسالة تواصل',
  competition: 'مسابقة الأفكار',
  graduation: 'طلب زي تخرج',
  gulfhat: 'طلب قبعة خليجية',
  odoo: 'طلب أودو',
  pickup: 'طلب بيك أب',
  proads: 'طلب إعلانات احترافية',
  other: 'حلول أخرى',
  visual_display: 'شاشات عرض',
};

const formTypeColors: Record<string, string> = {
  contact: 'bg-sky-100 text-sky-800',
  competition: 'bg-indigo-100 text-indigo-800',
  graduation: 'bg-amber-100 text-amber-800',
  gulfhat: 'bg-emerald-100 text-emerald-800',
  odoo: 'bg-violet-100 text-violet-800',
  pickup: 'bg-rose-100 text-rose-800',
  proads: 'bg-teal-100 text-teal-800',
  other: 'bg-slate-100 text-slate-700',
  visual_display: 'bg-cyan-100 text-cyan-800',
};

export default function AdminDashboardView({ onSignOut }: AdminDashboardViewProps) {
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: true, autoRefreshToken: true },
  });

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: fetchError } = await supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false });
    if (fetchError) {
      setError(fetchError.message);
    } else {
      setSubmissions((data as Submission[]) ?? []);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذه الرسالة؟')) return;
    const { error: deleteError } = await supabase.from('submissions').delete().eq('id', id);
    if (deleteError) {
      setError(deleteError.message);
    } else {
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const filtered = submissions.filter((s) => {
    if (filter !== 'all' && s.form_type !== filter) return false;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      return (
        (s.name?.toLowerCase().includes(q) ?? false) ||
        (s.email?.toLowerCase().includes(q) ?? false) ||
        (s.phone?.toLowerCase().includes(q) ?? false) ||
        (s.subject?.toLowerCase().includes(q) ?? false) ||
        (s.message?.toLowerCase().includes(q) ?? false)
      );
    }
    return true;
  });

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString('ar-SA', { dateStyle: 'medium', timeStyle: 'short' });
  };

  const renderDetails = (details: Record<string, unknown> | null) => {
    if (!details || Object.keys(details).length === 0) return null;
    return (
      <div className="mt-4 space-y-2 rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-bold text-slate-500">تفاصيل إضافية:</p>
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-0.5 border-b border-slate-100 pb-2 last:border-0">
            <span className="text-xs font-semibold text-slate-500">{key}:</span>
            <span className="text-sm text-slate-800 break-words whitespace-pre-wrap">
              {typeof value === 'boolean' ? (value ? 'نعم' : 'لا') : String(value)}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const formTypes: string[] = Array.from(new Set(submissions.map((s) => s.form_type)));

  return (
    <div className="min-h-screen bg-slate-100" dir="rtl">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
              <Inbox className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900">لوحة التحكم</h1>
              <p className="text-xs text-slate-500">الرسائل والنماذج الواردة</p>
            </div>
          </div>
          <button
            onClick={onSignOut}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            <LogOut className="h-4 w-4" />
            خروج
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-bold text-slate-500">إجمالي الرسائل</p>
            <p className="mt-1 text-2xl font-black text-slate-900">{submissions.length}</p>
          </div>
          {formTypes.slice(0, 3).map((type) => (
            <div key={type} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold text-slate-500">{formTypeLabels[type] ?? type}</p>
              <p className="mt-1 text-2xl font-black text-slate-900">
                {submissions.filter((s) => s.form_type === type).length}
              </p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="بحث بالاسم، البريد، الهاتف، الموضوع..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-10 pl-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:border-sky-500"
          >
            <option value="all">جميع الأنواع</option>
            {formTypes.map((type) => (
              <option key={type} value={type}>
                {formTypeLabels[type] ?? type}
              </option>
            ))}
          </select>
          <button
            onClick={fetchSubmissions}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            <RefreshCw className="h-4 w-4" />
            تحديث
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </div>
        )}

        {/* List */}
        {loading ? (
          <div className="py-20 text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-3 border-slate-300 border-t-sky-600" />
            <p className="mt-3 text-sm text-slate-500">جارٍ تحميل الرسائل...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <Inbox className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-sm font-semibold text-slate-500">
              {submissions.length === 0 ? 'لا توجد رسائل واردة بعد' : 'لا توجد نتائج مطابقة'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((submission) => {
              const isExpanded = expandedId === submission.id;
              return (
                <div
                  key={submission.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : submission.id)}
                    className="flex w-full items-center justify-between gap-3 p-4 text-right"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                        <User className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-sm font-bold text-slate-900">
                            {submission.name ?? 'بدون اسم'}
                          </span>
                          <span
                            className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                              formTypeColors[submission.form_type] ?? 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {formTypeLabels[submission.form_type] ?? submission.form_type}
                          </span>
                        </div>
                        <p className="mt-0.5 truncate text-xs text-slate-500">
                          {submission.subject ?? submission.message ?? '—'}
                        </p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="border-t border-slate-100 p-4">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {submission.email && (
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                            <a href={`mailto:${submission.email}`} className="hover:text-sky-600" dir="ltr">
                              {submission.email}
                            </a>
                          </div>
                        )}
                        {submission.phone && (
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <Phone className="h-4 w-4 shrink-0 text-slate-400" />
                            <a href={`tel:${submission.phone}`} className="hover:text-sky-600" dir="ltr">
                              {submission.phone}
                            </a>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="h-4 w-4 shrink-0 text-slate-400" />
                          {formatDate(submission.created_at)}
                        </div>
                      </div>

                      {submission.message && (
                        <div className="mt-4 rounded-xl bg-slate-50 p-4">
                          <p className="text-xs font-bold text-slate-500">الرسالة:</p>
                          <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-800">
                            {submission.message}
                          </p>
                        </div>
                      )}

                      {renderDetails(submission.details)}

                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={() => handleDelete(submission.id)}
                          className="inline-flex items-center gap-2 rounded-xl border border-rose-200 px-3 py-2 text-xs font-bold text-rose-600 transition hover:bg-rose-50"
                        >
                          <Trash2 className="h-4 w-4" />
                          حذف
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
