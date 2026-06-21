import React, { useState } from 'react';
import { pickupPageData } from '../pagesData';
import { translations } from '../translations';
import pickupImg from '../assets/images/pickup.svg';
import { ShieldCheck, Package, Award, ArrowRight, CornerDownLeft, Send, PhoneCall, HelpCircle } from 'lucide-react';

interface PickUpViewProps {
  currentLang: 'ar' | 'en';
}

export default function PickUpView({ currentLang }: PickUpViewProps) {
  const data = pickupPageData[currentLang];
  const t = translations[currentLang];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    addressDetails: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', city: '', addressDetails: '', notes: '' });
    }, 4500);
  };

  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner with clean design */}
        <div className="bg-gradient-to-tr from-sky-800 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle design elements */}
          <div className="absolute right-12 bottom-0 top-0 w-1/4 opacity-10 bg-contain bg-no-repeat bg-right-bottom" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/30 text-sky-200 tracking-widest uppercase">
              Patented SAIP No. 493122
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              {data.title}
            </h1>
            <p className="text-sky-100 text-base sm:text-lg leading-relaxed font-sans font-medium">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Content layout splitting into descriptions and order block */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main paragraphs */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-slate-700 text-lg leading-relaxed font-semibold">
              {data.intro}
            </p>

            {/* Smart Parcel Box Product Image representation */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg relative">
              <img 
                src={pickupImg} 
                alt="PickUp Smart Wall-Mounted Cargo Delivery Receiver Box" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-sky-800 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                Saudi Patent Approved
              </div>
            </div>

            <div className="space-y-6">
              {data.sections.map((sect, sIdx) => (
                <div key={sIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                  <h3 className="text-sky-900 text-lg font-extrabold flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-sky-500 rounded-full" />
                    <span>{sect.title}</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans text-justify">
                    {sect.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Bullet points benefits list */}
            {data.bulletsHeader && (
              <div className="bg-blue-50/70 rounded-2xl p-6 border border-blue-100/60 space-y-4">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-lg">
                  {data.bulletsHeader}
                </h4>
                <div className="grid grid-cols-1 gap-3.5">
                  {data.bullets?.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm font-sans lead-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right inquiry form */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white rounded-3xl border border-slate-100/90 shadow-xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2 text-center pb-4 border-b border-indigo-50">
                <Package className="w-8 h-8 text-sky-600 mx-auto animate-bounce" />
                <h3 className="text-slate-900 text-lg font-black">{currentLang === 'ar' ? 'اطلب جهاز PickUp الآن' : 'Order PickUp System'}</h3>
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
                      placeholder={currentLang === 'ar' ? 'الاسم الكامل' : 'Your name'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{currentLang === 'ar' ? 'رقم الجوال *' : 'Mobile Number *'}</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05xxxxxxxx" 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{currentLang === 'ar' ? 'المدينة *' : 'City *'}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'مثال: جدة، الرياض' : 'e.g., Jeddah'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      {currentLang === 'ar' ? 'تفاصيل السور أو الموقع' : 'Boundary wall type / Notes'}
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'اكتب لنا أي تفاصيل هندسية أو أمنية مطلوبة...' : 'Boundary dimensions, brick wall, gated villa etc.'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-sky-500 outline-none transition"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-sky-800 hover:bg-sky-900 text-white font-extrabold text-sm rounded-xl transition shadow hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.compSendBtn}</span>
                  </button>
                </form>
              )}

              {/* Instant WhatsApp link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-sans text-slate-500">
                <span>{currentLang === 'ar' ? 'الطلب الفوري عبر الجوال والواتساب:' : 'Instant order via Phone & WhatsApp:'}</span>
                <a 
                  href="https://wa.me/966554344899"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 font-bold text-sky-700 hover:text-sky-900 transition"
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
