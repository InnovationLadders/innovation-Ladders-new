import React, { useState } from 'react';
import { proadsPageData } from '../pagesData';
import { translations } from '../translations';
import proadsImg from '../assets/images/logoproads-05.png';
import { Play, Sparkles, Tv, CircleCheck as CheckCircle, Smartphone, Send, PhoneCall } from 'lucide-react';

interface ProAdsViewProps {
  currentLang: 'ar' | 'en';
}

export default function ProAdsView({ currentLang }: ProAdsViewProps) {
  const data = proadsPageData[currentLang];
  const t = translations[currentLang];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    venue: 'Mall Entrance',
    duration: '1 Month',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', venue: 'Mall Entrance', duration: '1 Month', notes: '' });
    }, 4500);
  };

  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner */}
        <div className="bg-gradient-to-tr from-pink-900 via-purple-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 bg-[radial-gradient(#ec4899_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-500/20 text-pink-300 tracking-widest uppercase">
              Next-Gen Experiential Marketing
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              {data.title}
            </h1>
            <p className="text-pink-100 text-base sm:text-lg leading-relaxed font-sans font-medium">
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

            {/* Virtual Holographic preview screen */}
            <div className="bg-slate-950 aspect-video rounded-3xl overflow-hidden border border-purple-500/20 relative shadow-2xl flex flex-col justify-end p-6">
              <img 
                src={proadsImg} 
                alt="ProAds Interactive Holographic Dolphin Experience in Mall" 
                className="absolute inset-0 w-full h-full object-contain p-8 opacity-95"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlaid status footer bar */}
              <div className="relative z-20 flex justify-between items-center text-xs text-slate-200 font-mono bg-black/65 backdrop-blur px-4 py-2.5 rounded-xl border border-white/5 shadow-lg">
                <span className="flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Dolly Dolphin Projector: Active</span>
                </span>
                <span className="text-pink-400 font-bold">● Live Hologram Feed</span>
              </div>
            </div>

            <div className="space-y-6">
              {data.sections.map((sect, sIdx) => (
                <div key={sIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                  <h3 className="text-purple-950 text-lg font-extrabold flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-pink-500 rounded-full" />
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
              <div className="bg-pink-50/50 rounded-2xl p-6 border border-pink-100/60 space-y-4">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-lg">
                  {data.bulletsHeader}
                </h4>
                <div className="grid grid-cols-1 gap-3.5">
                  {data.bullets?.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Sparkles className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm font-sans lead-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right inquiry Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white rounded-3xl border border-slate-100/90 shadow-xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2 text-center pb-4 border-b border-pink-50">
                <Tv className="w-8 h-8 text-pink-500 mx-auto" />
                <h3 className="text-slate-900 text-lg font-black">{currentLang === 'ar' ? 'استأجر أو اطلب ProAds في موقعك' : 'Book a ProAds Projection'}</h3>
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
                      placeholder={currentLang === 'ar' ? 'الاسم بالكامل' : 'Full Name'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-pink-400 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{currentLang === 'ar' ? 'رقم الاتصال *' : 'Contact Phone *'}</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05xxxxxxxx" 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-pink-400 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{currentLang === 'ar' ? 'نوع المكان التجاري أو الفعالية' : 'Venue Type'}</label>
                    <select
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-pink-400 outline-none transition"
                    >
                      <option value="Mall Entrance">{currentLang === 'ar' ? 'مساحة مركز تجاري مفتوح (Mall central area)' : 'Mall open walkway'}</option>
                      <option value="Retail Store Entrance">{currentLang === 'ar' ? 'بوابة معرض أو ماركة فاخرة (Store entrance)' : 'Luxury retail shop entrance'}</option>
                      <option value="Event Gala">{currentLang === 'ar' ? 'تنظيم فعالية أو حفل خاص (Special corporate gala)' : 'Corporate launches / Festivals'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{currentLang === 'ar' ? 'المدة المطلوبة لحملة ProAds' : 'Requested Duration'}</label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-pink-400 outline-none transition"
                    >
                      <option value="1 Week">1 {currentLang === 'ar' ? 'أسبوع' : 'week'}</option>
                      <option value="2-4 Weeks">2 - 4 {currentLang === 'ar' ? 'أسابيع' : 'weeks'}</option>
                      <option value="1-3 Months">1 - 3 {currentLang === 'ar' ? 'أشهر' : 'months'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      {currentLang === 'ar' ? 'متطلبات معينة أو تفاصيل الشوط ثلاثي الأبعاد' : 'Additional details & interactive options'}
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'تفوت بمستوى التفاعل المطلوب، الرموز والمطبوعات...' : 'Describe special Interactive needs or custom QR code links...'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-pink-400 outline-none transition"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-pink-600 hover:bg-pink-700 text-white font-extrabold text-sm rounded-xl transition shadow hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.compSendBtn}</span>
                  </button>
                </form>
              )}

              {/* Instant WhatsApp connection option */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-sans text-slate-500">
                <span>{currentLang === 'ar' ? 'للاستفسارات التسويقية والحجز:' : 'For experiential marketing inquiries:'}</span>
                <a 
                  href="https://wa.me/966554344899"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 font-bold text-pink-700 hover:text-pink-900 transition"
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
