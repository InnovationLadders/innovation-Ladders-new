import React, { useState } from 'react';
import { gulfHatPageData } from '../pagesData';
import { translations } from '../translations';
import gulfHatImg from '../assets/images/gulfhat.svg';
import { ShieldCheck, Award, Trash2, Send, PhoneCall, Gift, Check, ShoppingBag } from 'lucide-react';

interface GulfHatViewProps {
  currentLang: 'ar' | 'en';
}

export default function GulfHatView({ currentLang }: GulfHatViewProps) {
  const data = gulfHatPageData[currentLang];
  const t = translations[currentLang];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '10',
    colorType: 'White Color',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', quantity: '10', colorType: 'White Color', notes: '' });
    }, 4500);
  };

  const productModels = [
    {
      title: currentLang === 'ar' ? 'الموديل الأبيض الكلاسيكي' : 'Classic White Model',
      tag: 'White Color',
      desc: currentLang === 'ar' ? 'يحاكي الغترة البيضاء زاهية البياض والعقال الأسود الأنيق بخفة تامة ومثالية.' : 'Traditional beautiful white model with elegant lightweight black Iqal borders.',
      img: gulfHatImg
    },
    {
      title: currentLang === 'ar' ? 'ألوان الأندية الرياضية المخصصة' : 'Custom Sports Club Colors',
      tag: 'Custom Club Model',
      desc: currentLang === 'ar' ? 'تصميم مخصص بالكامل يحمل ألوان وشعار الهلال، الاتحاد، الأهلي، النصر، أو أي نادٍ آخر.' : 'Can be fully customized for any sports club with coordinate colors & crest logos.',
      img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80'
    },
    {
      title: currentLang === 'ar' ? 'موديل الأطفال المدرسي والمناسباتي' : 'Children events special',
      tag: 'Kids Model',
      desc: currentLang === 'ar' ? 'مثالي للأطفال لخفته الفائقة وسهولة ارتداءه في ثانية واحدة دون فوضى وضياع.' : 'Ready to wear in one second. Fits kids perfectly for patriotic school dramas and national day events.',
      img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner */}
        <div className="bg-gradient-to-tr from-sky-950 via-[#1e293b] to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 tracking-widest uppercase">
              Original Saudi Product & Brand
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              {data.title}
            </h1>
            <p className="text-sky-100 text-base sm:text-lg leading-relaxed font-sans font-medium">
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

            {/* Models Highlight Cards */}
            <div className="space-y-4">
              <h3 className="text-slate-900 text-lg font-black">{currentLang === 'ar' ? 'المجموعات والموديلات المتوفرة:' : 'Available Branded Lines:'}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {productModels.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                    <div className="w-full h-36 bg-slate-50 overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                    <div className="p-4 space-y-2 flex-grow">
                      <span className="text-[10px] uppercase font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">{item.tag}</span>
                      <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs font-sans leading-relaxed">{item.desc}</p>
                    </div>
                    {/* Simplified status vector indicator */}
                    <div className="p-4 pt-0">
                      <div className="text-[10px] text-emerald-600 font-bold bg-emerald-50 w-fit px-2 py-0.5 rounded flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>Ready Stock</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {data.sections.map((sect, sIdx) => (
                <div key={sIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                  <h3 className="text-sky-950 text-lg font-extrabold flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
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
              <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100/60 space-y-4">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-lg">
                  {data.bulletsHeader}
                </h4>
                <div className="grid grid-cols-1 gap-3.5">
                  {data.bullets?.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Gift className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm font-sans lead-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right order sidebar form */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white rounded-3xl border border-slate-100/90 shadow-xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2 text-center pb-4 border-b border-amber-50">
                <ShoppingBag className="w-8 h-8 text-amber-500 mx-auto" />
                <h3 className="text-slate-900 text-lg font-black">{currentLang === 'ar' ? 'طلب كميات وجملة GulfHat' : 'GulfHat Bulk Order Request'}</h3>
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
                      placeholder={currentLang === 'ar' ? 'الاسم بالكامل' : 'Full Name'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition" 
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{currentLang === 'ar' ? 'نوع الموديل المطلوب' : 'Select Model'}</label>
                    <select
                      value={formData.colorType}
                      onChange={(e) => setFormData({ ...formData, colorType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition"
                    >
                      <option value="White Color">{currentLang === 'ar' ? 'اللون الأبيض الكلاسيكي' : 'Classic White'}</option>
                      <option value="Custom Club Design">{currentLang === 'ar' ? 'موديل الأندية الرياضية المخصصة' : 'Custom Sports Club design'}</option>
                      <option value="Kids Edition">{currentLang === 'ar' ? 'موديلات الأطفال والمواليد' : 'Kids & Youth Edition'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{currentLang === 'ar' ? 'الكمية المطلوبة *' : 'Quantity Needed *'}</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition"
                    >
                      <option value="10-50">10 - 50 {currentLang === 'ar' ? 'حبة' : 'units'}</option>
                      <option value="51-200">51 - 200 {currentLang === 'ar' ? 'حبة' : 'units'}</option>
                      <option value="200-1000">200 - 1000 {currentLang === 'ar' ? 'حبة' : 'units'}</option>
                      <option value="1000+">1000+ {currentLang === 'ar' ? 'حبة (سعر خاص)' : 'units (Wholesale Price)'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      {currentLang === 'ar' ? 'ملاحظات إضافية أو شعار النادي' : 'Additional Logo/Branding details'}
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'اكتب تفاصيل النادي المطلوب أو المناسبة الوطنية...' : 'Mention club name, custom embroidery, or target shipping address...'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm rounded-xl transition shadow hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.compSendBtn}</span>
                  </button>
                </form>
              )}

              {/* Direct call options */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-sans text-slate-500">
                <span>{currentLang === 'ar' ? 'لاستفسارات الشراء والبراند:' : 'For licensing and distribution queries:'}</span>
                <a 
                  href="https://wa.me/966554344899"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 font-bold text-amber-700 hover:text-amber-900 transition"
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
