import React, { useState } from 'react';
import { translations } from '../translations';
import { Send, CheckCircle, Shield, Award, HelpCircle, Lock, Cpu, DollarSign, Heart } from 'lucide-react';

interface CompetitionViewProps {
  currentLang: 'ar' | 'en';
}

export default function CompetitionView({ currentLang }: CompetitionViewProps) {
  const t = translations[currentLang];
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    country: '',
    mobile: '',
    email: '',
    ideaDesc: '',
    originalityCheck: false,
    securityDetails: '',
    privacyDetails: '',
    easeImplementation: '5Input',
    easeUse: '4Input',
    costDetails: '',
    termsAgreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.originalityCheck || !formData.termsAgreed) {
      alert(currentLang === 'ar' ? 'يرجى الموافقة على الأصالة والشروط والأحكام للاستمرار.' : 'Please agree to Originality and Terms to submit.');
      return;
    }
    setFormSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        city: '',
        country: '',
        mobile: '',
        email: '',
        ideaDesc: '',
        originalityCheck: false,
        securityDetails: '',
        privacyDetails: '',
        easeImplementation: '5Input',
        easeUse: '4Input',
        costDetails: '',
        termsAgreed: false
      });
    }, 6000);
  };

  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Banner Header */}
        <div className="bg-gradient-to-tr from-[#1e293b] via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center mb-10">
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 uppercase tracking-widest">
              National Security & Privacy Challenge
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug">
              {t.compTitle}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-sans font-medium">
              {t.compDescription}
            </p>
          </div>
        </div>

        {formSubmitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-slate-100 space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              {currentLang === 'ar' ? 'تم استلام الفكرة بنجاح!' : 'Idea Received Successfully!'}
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 w-24 mx-auto" />
            <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-sans">
              {currentLang === 'ar' 
                ? 'نشكرك على مشاركتك في مسابقة حلول استلام الطلبات الأمن. سيقوم فريق معمل الإسكّان واللجنة الهندسية بتقييم فكرتك بدقة والتزام تام بالسرية والحفاظ على الملكية الفكرية. سنتواصل معك فور نضوج نتائج الفرز.'
                : 'Thank you for participating. Our engineering review committee will analyze your concept with strict integrity & confidentiality. We will reach you through your contact credentials.'}
            </p>
            <p className="text-emerald-700 font-extrabold text-sm font-sans block pt-4 bg-emerald-50 max-w-md mx-auto py-2.5 rounded-xl">
              Ticket ID ID: IL-COMP-2025-{(Math.floor(Math.random() * 90000) + 10000)}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 sm:p-10 space-y-8 font-sans">
            
            {/* Section 1: Contact Detail inputs */}
            <div className="space-y-6">
              <h3 className="text-slate-900 font-black text-base sm:text-lg border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-indigo-500 rounded" />
                <span>{currentLang === 'ar' ? 'معلومات مقدم الطلب' : 'Applicant Contacts'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 text-xs font-bold mb-1.5">{t.compFullName}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={currentLang === 'ar' ? 'الاسم بالكامل كما في الهوية الوطنية' : 'Full Name'} 
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold mb-1.5">{t.compEmail}</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com" 
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold mb-1.5">{t.compMobile}</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="05xxxxxxxx" 
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{t.compCity}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'المدينة' : 'City'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">{t.compCountry}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'الدولة' : 'Country'} 
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Core Idea Description */}
            <div className="space-y-6">
              <h3 className="text-slate-900 font-black text-base sm:text-lg border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-indigo-500 rounded" />
                <span>{currentLang === 'ar' ? 'تفاصيل وحل الفكرة المقترحة' : 'Idea Concept & Solution details'}</span>
              </h3>

              <div>
                <label className="block text-slate-700 text-xs font-bold mb-1.5">{t.compIdeaDesc}</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.ideaDesc}
                  onChange={(e) => setFormData({ ...formData, ideaDesc: e.target.value })}
                  placeholder={currentLang === 'ar' ? 'اشرح لنا مبدأ عمل الفكرة المقترحة وكيف تغطي آليات استلام الطلبات...' : 'Write comprehensive summary of operating mechanism, sensors, layout or concept...'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>

              {/* Document upload field simulation */}
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-indigo-400 transition select-none">
                <input type="file" className="hidden" id="comp_upload_doc" />
                <label htmlFor="comp_upload_doc" className="cursor-pointer space-y-2 block">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-500">
                    ↗
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{t.compAttachFile}</p>
                  <p className="text-xs text-slate-400">PDF, PNG, JPEG, ZIP (Max 15MB)</p>
                </label>
              </div>
            </div>

            {/* Section 3: Criteria & Security levels */}
            <div className="space-y-6">
              <h3 className="text-slate-900 font-black text-base sm:text-lg border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-indigo-500 rounded" />
                <span>{currentLang === 'ar' ? 'تقييم المعايير الحساسة والأمنية' : 'Criteria & Integrity Evaluation'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-indigo-600 shrink-0" />
                    <h4 className="text-slate-800 font-bold text-xs sm:text-sm">{t.compSecurityLevel}</h4>
                  </div>
                  <p className="text-[#0ea5e9] text-[11px] leading-relaxed">{t.compSecurityValue}</p>
                  <textarea 
                    rows={2}
                    required
                    value={formData.securityDetails}
                    onChange={(e) => setFormData({ ...formData, securityDetails: e.target.value })}
                    placeholder={currentLang === 'ar' ? 'مثال: إقفال كهرومغناطيسي، مستشعر وزن...' : 'e.g., Electromagnetic lock codes...'}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  />
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-pink-600 shrink-0" />
                    <h4 className="text-slate-800 font-bold text-xs sm:text-sm">{t.compPrivacyLevel}</h4>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{t.compPrivacyValue}</p>
                  <textarea 
                    rows={2}
                    required
                    value={formData.privacyDetails}
                    onChange={(e) => setFormData({ ...formData, privacyDetails: e.target.value })}
                    placeholder={currentLang === 'ar' ? 'مثال: تمنع رؤية من بالمنزل، استبدال مباشر...' : 'e.g., Avoid courier vision inside...'}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  />
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-purple-600 shrink-0" />
                    <h4 className="text-slate-800 font-bold text-xs sm:text-sm">{t.compEaseImplementation}</h4>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{t.compEaseValue}</p>
                  <select
                    value={formData.easeImplementation}
                    onChange={(e) => setFormData({ ...formData, easeImplementation: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs outline-none focus:ring-1 focus:ring-indigo-500 transition"
                  >
                    <option value="5Input">{currentLang === 'ar' ? 'سهل جداً (بسيط ومباشر)' : 'Very simple engineering'}</option>
                    <option value="4Input">{currentLang === 'ar' ? 'متوسط (يتطلب تجميع قطع إلكترونية وميكانيكية)' : 'Medium integration'}</option>
                    <option value="3Input">{currentLang === 'ar' ? 'معقد (يتطلب مصنع وبرمجة بروتوكولات مخصصة)' : 'Complex embedded protocols'}</option>
                  </select>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h4 className="text-slate-800 font-bold text-xs sm:text-sm">{t.compCostImplementation}</h4>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{t.compCostValue}</p>
                  <input 
                    type="text" 
                    required
                    value={formData.costDetails}
                    onChange={(e) => setFormData({ ...formData, costDetails: e.target.value })}
                    placeholder={currentLang === 'ar' ? 'تفوق أو تقل قيم المكونات عن 500 ريال...' : 'Material costs description...'}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Accreditations, legality and Terms submit */}
            <div className="space-y-4 pt-4 border-t border-slate-100 text-slate-600">
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="originality_agree" 
                  required
                  checked={formData.originalityCheck}
                  onChange={(e) => setFormData({ ...formData, originalityCheck: e.target.checked })}
                  className="mt-1.5 w-4.5 h-4.5 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded" 
                />
                <label htmlFor="originality_agree" className="text-xs sm:text-sm leading-relaxed text-slate-700 font-semibold cursor-pointer select-none">
                  {t.compOriginalityCheck}
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="terms_agree" 
                  required
                  checked={formData.termsAgreed}
                  onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
                  className="mt-1.5 w-4.5 h-4.5 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded" 
                />
                <label htmlFor="terms_agree" className="text-xs sm:text-sm leading-relaxed text-slate-700 font-semibold cursor-pointer select-none">
                  {t.compTermsAgreed} {currentLang === 'ar' ? 'والمحافظة المتبادلة على الخصوصية والملكية الفكرية للأطراف المعنية.' : 'with strict idea protection.'}
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-end">
              <button 
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-900 hover:bg-slate-900 text-white font-extrabold text-sm sm:text-base rounded-xl transition shadow hover:shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>{t.compSendBtn}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
