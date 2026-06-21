import React, { useState } from 'react';
import { odooPageData } from '../pagesData';
import { translations } from '../translations';
import odooDashboardImg from '../assets/images/odoo.svg';
import { CheckCircle, ShieldAlert, Award, ArrowRight, CornerDownLeft, Send, PhoneCall, Clock } from 'lucide-react';

interface OdooViewProps {
  currentLang: 'ar' | 'en';
}

export default function OdooView({ currentLang }: OdooViewProps) {
  const data = odooPageData[currentLang];
  const t = translations[currentLang];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    volume: '1-10',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', volume: '1-10', message: '' });
    }, 4500);
  };

  return (
    <div className="py-12 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner representing Odoo suite */}
        <div className="bg-gradient-to-tr from-[#714b67] to-[#8f6284] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 bg-contain bg-no-repeat bg-right-bottom" 
               style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Odoo-logo-white.png')` }} />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white tracking-widest uppercase">
              Odoo Verified Agent KSA
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              {data.title}
            </h1>
            <p className="text-pink-100 text-base sm:text-lg leading-relaxed font-sans font-medium">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Content body layout split into two columns */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main detail text body */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-slate-700 text-lg leading-relaxed font-semibold">
              {data.intro}
            </p>

            {/* High-fidelity Dashboard graphic representing the system */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg relative">
              <img 
                src={odooDashboardImg} 
                alt="Odoo ERP Dashboard Integrated System" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#714b67] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                Interactive Modules
              </div>
            </div>

            <div className="space-y-6">
              {data.sections.map((sect, sIdx) => (
                <div key={sIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                  <h3 className="text-[#714b67] text-lg font-extrabold flex items-center gap-2">
                    <span className="w-2 h-6 bg-purple-500 rounded-full" />
                    <span>{sect.title}</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans text-justify">
                    {sect.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Bullets feature list */}
            {data.bulletsHeader && (
              <div className="bg-purple-50/50 rounded-2xl p-6 border border-purple-100/60 space-y-4">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-lg">
                  {data.bulletsHeader}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.bullets?.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-xs sm:text-sm font-sans lead-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right inquiry Form Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white rounded-3xl border border-slate-100/90 shadow-xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2 text-center pb-4 border-b border-slate-100">
                <Clock className="w-8 h-8 text-purple-500 mx-auto" />
                <h3 className="text-slate-900 text-lg font-black">{currentLang === 'ar' ? 'طلب استشارة Odoo' : 'Odoo Inquiry Form'}</h3>
                <p className="text-slate-500 text-xs">{data.ctaText}</p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl text-center space-y-3 border border-emerald-100 animate-fade-in">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
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
                      placeholder={currentLang === 'ar' ? 'الاسم بالكامل' : 'Your full name'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-purple-400 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{t.formEmail}</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com" 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-purple-400 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      {currentLang === 'ar' ? 'اسم المنشأة / المدرسة' : 'Company / School Name'}
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'مثال: مدرسة الإبداع الأهلية' : 'e.g., Creative Academy'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-purple-400 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      {currentLang === 'ar' ? 'العدد المتوقع للمستخدمين' : 'Estimated Users'}
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-purple-400 outline-none transition"
                    >
                      <option value="1-10">1 - 10 {currentLang === 'ar' ? 'مستخدم' : 'users'}</option>
                      <option value="11-50">11 - 50 {currentLang === 'ar' ? 'مستخدم' : 'users'}</option>
                      <option value="51-200">51 - 200 {currentLang === 'ar' ? 'مستخدم' : 'users'}</option>
                      <option value="200+">200+ {currentLang === 'ar' ? 'مستخدم' : 'users'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      {currentLang === 'ar' ? 'متطلبات معينة أو رسالة' : 'Additional requirements'}
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'اكتب لنا الأنظمة المتوقع أتمتتها...' : 'Briefly describe your systems need...'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-purple-400 outline-none transition"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#714b67] hover:bg-[#5a3a52] text-white font-extrabold text-sm rounded-xl transition shadow hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.compSendBtn}</span>
                  </button>
                </form>
              )}

              {/* Instant WhatsApp alternative call */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-sans text-slate-500">
                <span>{currentLang === 'ar' ? 'أو اتصل مباشرة بالوكيل:' : 'Or talk directly to our agent:'}</span>
                <a 
                  href="tel:+966554344899" 
                  className="flex items-center gap-1 font-bold text-purple-700 hover:text-purple-900 transition"
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
