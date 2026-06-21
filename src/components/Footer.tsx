import React, { useState } from 'react';
import { translations } from '../translations';
import { Phone, Mail, MapPin, Send, CheckCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  currentLang: 'ar' | 'en';
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <footer id="footer-contact" className="bg-slate-900 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact form and maps section */}
        <div id="contact-bar-view" className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-slate-800 pb-16">
          
          {/* Column 1: Contact Details & Map Embed */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black text-sky-400 tracking-widest uppercase">
                {currentLang === 'ar' ? 'تواصل معنا' : 'CONTACT US'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {currentLang === 'ar' ? 'العنوان وبيانات الاتصال' : 'Address & Helpline'}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs">{t.addressLabel}</p>
                  <p className="text-white text-sm sm:text-base font-medium">{t.addressValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs">{t.phoneLabel}</p>
                  <a href="tel:+966554344899" className="text-white text-sm sm:text-base font-bold hover:text-sky-300 transition" dir="ltr">
                    +966 55 434 4899
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-450 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs">{t.emailLabel}</p>
                  <a href="mailto:sales@innovationladders.com" className="text-white text-sm sm:text-base font-semibold hover:text-sky-300 transition">
                    sales@innovationladders.com
                  </a>
                </div>
              </div>
            </div>

            {/* Live OpenStreetMap Iframe mapping the Jeddah Waterfront Headquarters Tower location */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 h-56 relative bg-slate-950">
              <iframe 
                title="Innovation Ladders Office Location - Headquarters Tower Jeddah"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://www.openstreetmap.org/export/embed.html?bbox=39.10825700759888%2C21.61111623886561%2C39.11625700759888%2C21.61911623886561&amp;layer=mapnik&amp;marker=21.61511623886561%2C39.11225700759888"
                style={{ filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
              />
              {/* Absolutes Overlay indicator */}
              <div className="absolute top-3 left-3 bg-slate-900/90 text-[10px] text-sky-200 px-2 py-1 rounded font-mono border border-slate-800 pointer-events-none">
                Jeddah Corniche Waterfront - HQ Tower
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Send Form */}
          <div className="lg:col-span-6 bg-slate-850/40 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-sky-500 rounded" />
              <span>{currentLang === 'ar' ? 'أرسل لنا رسالة فورية' : 'Submit Direct Messages'}</span>
            </h3>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-950/45 text-emerald-300 rounded-2xl text-center space-y-3 border border-emerald-900/50 animate-fade-in my-12">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <p className="font-extrabold text-base">{t.formSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-semibold mb-1.5">{t.formName}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'الاسم بالكامل' : 'Full Name'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:bg-slate-700/50 focus:ring-1 focus:ring-sky-500 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-semibold mb-1.5">{t.formEmail}</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com" 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:bg-slate-700/50 focus:ring-1 focus:ring-sky-500 outline-none transition" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold mb-1.5">{t.formSubject}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={currentLang === 'ar' ? 'موضوع الاستفسار...' : 'Inquiry subject...'} 
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:bg-slate-700/50 focus:ring-1 focus:ring-sky-500 outline-none transition" 
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-semibold mb-1.5">{t.formMessage}</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={currentLang === 'ar' ? 'اكتب رسالتك وتفاصيل منشأتك هنا...' : 'Write your details and corporate needs here...'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:bg-slate-700/50 focus:ring-1 focus:ring-sky-500 outline-none transition" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-sky-800 hover:bg-sky-900 text-white font-extrabold text-sm rounded-xl transition shadow hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.formSubmit}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom footer credit panel */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-sans">
          <p className="text-center md:text-right">{t.footerRights}</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-xs text-slate-600">
            <span>Jeddah Corniche Waterfront</span>
            <span>•</span>
            <span> 2025</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
