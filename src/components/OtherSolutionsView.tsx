import React, { useState } from 'react';
import { otherSolutionsData } from '../pagesData';
import { translations } from '../translations';
import { 
  HeartHandshake, 
  MapPin, 
  Navigation, 
  Rss, 
  Compass, 
  CalendarCheck, 
  Clock, 
  Users, 
  CheckCircle, 
  Database,
  PhoneCall,
  Send,
  Sparkles,
  Award
} from 'lucide-react';

interface OtherSolutionsViewProps {
  currentLang: 'ar' | 'en';
}

export default function OtherSolutionsView({ currentLang }: OtherSolutionsViewProps) {
  const data = otherSolutionsData[currentLang];
  const t = translations[currentLang];
  const [activeItemId, setActiveItemId] = useState('tryhub');
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', notes: '' });
    }, 4500);
  };

  const getIconForItem = (id: string) => {
    switch(id) {
      case 'tryhub': return <Users className="w-5 h-5 text-indigo-500" />;
      case 'halapoints': return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'iot': return <Rss className="w-5 h-5 text-amber-500" />;
      case 'salamat': return <HeartHandshake className="w-5 h-5 text-pink-500" />;
      case 'mapit': return <Navigation className="w-5 h-5 text-blue-500" />;
      case 'jeel': return <CalendarCheck className="w-5 h-5 text-purple-500" />;
      case 'permit': return <Database className="w-5 h-5 text-zinc-600" />;
      case 'mosque2': return <Clock className="w-5 h-5 text-sky-500" />;
      case 'masjednalive': return <Rss className="w-5 h-5 text-emerald-600" />;
      case 'morshidna': return <Compass className="w-5 h-5 text-red-500" />;
      default: return <Sparkles className="w-5 h-5 text-sky-500" />;
    }
  };

  const activeItem = data.items.find(item => item.id === activeItemId) || data.items[0];

  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1 bg-[#1e293b] text-sky-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-pink-400" />
            {currentLang === 'ar' ? 'حلولنا البرمجية المعتمدة' : 'Proprietary Software Suite'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            {data.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Dashboard grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List/Sidebar of 10 items */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-4 shadow-sm space-y-1 max-h-[580px] overflow-y-auto">
            {data.items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItemId(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-right ${currentLang === 'en' ? 'text-left' : 'text-right'} transition-all text-sm font-semibold  ${
                  activeItemId === item.id 
                    ? 'bg-sky-800 text-white shadow-md scale-[1.01]' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className={`p-1.5 rounded-lg ${activeItemId === item.id ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-600'}`}>
                  {getIconForItem(item.id)}
                </span>
                <span className="truncate">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Active Item Details Pane + quick inquiry */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Active Display Details */}
            <div className="md:col-span-7 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6 min-h-[460px] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="p-3 bg-sky-50 rounded-2xl">
                    {getIconForItem(activeItem.id)}
                  </span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      {activeItem.name}
                    </h2>
                    <span className="text-xs font-bold text-sky-800 tracking-wider">
                      {currentLang === 'ar' ? 'حلول معمل الإسكّان ريفايين' : 'Innovation Lab Certified Outcome'}
                    </span>
                  </div>
                </div>

                <div className="h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500 w-full rounded" />

                <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100/40">
                  <p className="text-[#0c4a6e] font-extrabold text-sm sm:text-base leading-relaxed font-sans">
                     {activeItem.tagline}
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify font-sans">
                  {activeItem.description}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-pink-500" />
                <span className="text-slate-500 text-xs font-sans">
                  {currentLang === 'ar' ? 'جميع حقوق الملكية الفكرية والبرمجية لشركة سلالم الإبداع' : 'All copyright and source rights reserved by Innovation Ladders'}
                </span>
              </div>
            </div>

            {/* Quick Inquiry Context Card */}
            <div className="md:col-span-5 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between min-h-[460px]">
              <div>
                <div className="text-center pb-4 border-b border-slate-100 space-y-2">
                  <span className="inline-block px-2 py-0.5 bg-sky-50 text-sky-800 text-[10px] font-bold rounded-md">
                    Inquire Product
                  </span>
                  <h3 className="text-slate-900 font-bold text-sm">
                    {currentLang === 'ar' ? `استفسار عن ${activeItem.name}` : `Inquiry for ${activeItem.name}`}
                  </h3>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-50 text-emerald-800 rounded-xl text-center space-y-2 border border-emerald-100 animate-fade-in mt-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                    <p className="font-bold text-xs">{t.formSuccess}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 mt-4 font-sans">
                    <div>
                      <label className="block text-slate-700 text-[10px] font-bold mb-1">{t.formName}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.formName} 
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 outline-none transition" 
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 text-[10px] font-bold mb-1">{currentLang === 'ar' ? 'رقم الاتصال *' : 'Contact Phone *'}</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05xxxxxxxx" 
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 outline-none transition" 
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 text-[10px] font-bold mb-1">{currentLang === 'ar' ? 'الرسالة أو مكان التطبيق' : 'Message Details'}</label>
                      <textarea 
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder={currentLang === 'ar' ? 'اكتب لنا الغرض من النظام...' : 'Describe requirements...'}
                        className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:ring-2 focus:ring-sky-500 outline-none transition" 
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-1 py-2 bg-sky-800 hover:bg-sky-900 text-white font-bold text-xs rounded-xl transition shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{currentLang === 'ar' ? 'إرسال طلب استفسار' : 'Submit Inquiry'}</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Direct call options */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-sans text-slate-500">
                <span>{currentLang === 'ar' ? 'الاستفسار المباشر:' : 'Direct Helpline:'}</span>
                <a 
                  href="https://wa.me/966554344899"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 font-bold text-sky-700 hover:text-sky-900 transition"
                >
                  <PhoneCall className="w-3 h-3" />
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
