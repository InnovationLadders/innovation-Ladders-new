import React, { useState } from 'react';
import { graduationPageData } from '../pagesData';
import { translations } from '../translations';
const graduationImg = '/assets/images/Graduation_outfit.png';
import { ShieldCheck, Award, Flag, Send, PhoneCall, Heart, Star } from 'lucide-react';

interface GraduationViewProps {
  currentLang: 'ar' | 'en';
}

export default function GraduationView({ currentLang }: GraduationViewProps) {
  const data = graduationPageData[currentLang];
  const t = translations[currentLang];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    school: '',
    qty: '100',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', school: '', qty: '100', notes: '' });
    }, 4500);
  };

  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner with premium royal green color schema */}
        <div className="bg-gradient-to-tr from-[#14532d] via-emerald-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 tracking-widest uppercase">
              100% ORIGINAL SAUDI TRADEMARK
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              {data.title}
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed font-sans font-medium">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Content detail layout split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-8">
            <p className="text-[#101827] text-lg leading-relaxed font-semibold">
              {data.intro}
            </p>

            {/* National Graduation Uniform Brand Product Image representation */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg relative">
              <img 
                src={graduationImg}
                alt="Saudi National Academic Graduation Gowns Design"
                className="w-full h-auto object-contain bg-black"
              />
              <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                Authentic Craftsmanship
              </div>
            </div>

            <div className="space-y-6">
              {data.sections.map((sect, sIdx) => (
                <div key={sIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                  <h3 className="text-emerald-950 text-lg font-extrabold flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-emerald-600 rounded-full" />
                    <span>{sect.title}</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans text-justify">
                    {sect.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Bullets lists */}
            {data.bulletsHeader && (
              <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100/60 space-y-4">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-lg">
                  {data.bulletsHeader}
                </h4>
                <div className="grid grid-cols-1 gap-3.5">
                  {data.bullets?.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Star className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm font-sans lead-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right inquiry Form Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white rounded-3xl border border-slate-100/90 shadow-xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2 text-center pb-4 border-b border-emerald-50">
                <Flag className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="text-slate-900 text-lg font-black">{currentLang === 'ar' ? 'طلب تفصيل أروابة وجملة' : 'Custom Gown Request'}</h3>
                <p className="text-slate-500 text-xs">{data.ctaText}</p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl text-center space-y-3 border border-emerald-100 animate-fade-in">
                  <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto" />
                  <p className="font-extrabold text-base">{t.formSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{t.formName}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'الاسم بالكامل' : 'Your name'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{currentLang === 'ar' ? 'رقم الهاتف *' : 'Contact Mobile *'}</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05xxxxxxxx" 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      {currentLang === 'ar' ? 'اسم المنشأة التعليمية / المدرسة' : 'School / Institution Name'}
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'مثال: جامعة الملك عبدالعزيز، مدارس الأفق' : 'e.g., King Abdulaziz University'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{currentLang === 'ar' ? 'الكمية التقريبية المطلوبة' : 'Approximate Units'}</label>
                    <select
                      value={formData.qty}
                      onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition"
                    >
                      <option value="20-50">20 - 50 {currentLang === 'ar' ? 'روب / بشت' : 'units'}</option>
                      <option value="51-150">51 - 150 {currentLang === 'ar' ? 'روب / بشت' : 'units'}</option>
                      <option value="150-1000">151 - 1000 {currentLang === 'ar' ? 'روب / بشت' : 'units'}</option>
                      <option value="1000+">1000+ {currentLang === 'ar' ? 'أكثر من 1000 روب' : 'More than 1000 units'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      {currentLang === 'ar' ? 'تفاصيل الألوان، التطريز بالذهب أو المقاسات' : 'Custom motifs, colors, sizing options'}
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'اكتب تفاصيل الشعار أو الكود الوطني المطلوب على الأرواب...' : 'Describe school motto, custom gold-threaded linings or delivery schedule...'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-400 outline-none transition"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-sm rounded-xl transition shadow hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.compSendBtn}</span>
                  </button>
                </form>
              )}

              {/* Instant WhatsApp callback options */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-sans text-slate-500">
                <span>{currentLang === 'ar' ? 'لاستفسارات التفصيل والطلبات المباشرة:' : 'For licensing and direct orders:'}</span>
                <a 
                  href="https://wa.me/966554344899"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-900 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>0554344899</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
