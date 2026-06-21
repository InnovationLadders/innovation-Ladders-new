import React from 'react';
import proadsLogoImg from '../assets/images/logoproads-05.png';
import { translations } from '../translations';

import { ArrowUpRight, Lightbulb, Layers, Cpu, Award, Brush, ChartLine as LineChart, TrendingUp, Zap, Activity, DollarSign, MessageSquare, ShieldCheck, Package, Clock, ExternalLink, ChevronRight } from 'lucide-react';

interface HomeViewProps {
  currentLang: 'ar' | 'en';
  setCurrentPage: (page: string) => void;
}

export default function HomeView({ currentLang, setCurrentPage }: HomeViewProps) {
  const t = translations[currentLang];

  const handlePortfolioNav = (id: string, type: 'internal' | 'external', url?: string) => {
    if (type === 'external' && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setCurrentPage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: t.service1Title,
      desc: t.service1Desc,
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />
    },
    {
      title: t.service2Title,
      desc: t.service2Desc,
      icon: <Layers className="w-8 h-8 text-blue-500" />
    },
    {
      title: t.service3Title,
      desc: t.service3Desc,
      icon: <Cpu className="w-8 h-8 text-purple-500" />
    },
    {
      title: t.service4Title,
      desc: t.service4Desc,
      icon: <Award className="w-8 h-8 text-teal-500" />
    },
    {
      title: t.service5Title,
      desc: t.service5Desc,
      icon: <Brush className="w-8 h-8 text-pink-500" />
    },
    {
      title: t.service6Title,
      desc: t.service6Desc,
      icon: <LineChart className="w-8 h-8 text-emerald-500" />
    }
  ];

  const portfolioHighlights = [
    {
      id: 'myproject',
      name: currentLang === 'ar' ? 'منصة مشروعي' : 'MyProject Platform',
      tagline: currentLang === 'ar' ? 'أول منصة لإدارة المشاريع الطلابية وتطبيق استراتيجيات التعلم القائم على المشاريع وعناصر ستيم (STEAM).' : 'The leader student project management and STEAM strategies platform.',
      type: 'external',
      url: 'https://myprojectplatform.com/',
      badge: 'External',
      image: "/assets/images/myprojectplatform.png"
    },
    {
      id: 'mosque-clock',
      name: currentLang === 'ar' ? 'ساعة منارة للمساجد' : 'Manarah Smart Clock',
      tagline: currentLang === 'ar' ? 'ساعة المسجد الذكية الأكثر تطوراً وبثاً حياً لمواقيت الصلاة صوتاً وصورة للهواتف والشاشات.' : 'The most advanced smart mosque chronometer and live broadcaster for prayers.',
      type: 'external',
      url: 'https://manarahclock.net/',
      badge: 'External',
      image: "/assets/images/manarahclock.png"
    },
    {
      id: 'pickup',
      name: currentLang === 'ar' ? 'نظام PickUp استلام الطلبات' : 'PickUp Parcel Box',
      tagline: currentLang === 'ar' ? 'براءة اختراع معتمدة، جهاز مصعد سور الفيلا الذكي لاستلام طرود التوصيل والوجبات بخصوصية مطلقة.' : 'Patented wall parcel elevator for delivery and groceries without door open.',
      type: 'internal',
      badge: 'Patented',
      image: "/assets/images/pickup.png"
    },
    {
      id: 'graduation',
      name: currentLang === 'ar' ? 'براند زي التخرج' : 'Graduation Uniform',
      tagline: currentLang === 'ar' ? 'براند سعودي أصيل 100% لتصميم وتصنيع الملابس الأكاديمية والوطنية بتفاصيل تراثية وفخمة.' : '100% original Saudi designer graduation gowns and national uniforms.',
      type: 'internal',
      badge: 'Sovereign Brand',
      image: "/assets/images/Graduation_outfit.png"
    },
    {
      id: 'proads',
      name: currentLang === 'ar' ? 'ProAds' : 'ProAds & Dolphin Dolly',
      tagline: currentLang === 'ar' ? 'تقنيات العرض الضوئي التفاعلي والذكاء التسويقي المبتكر في المراكز التجارية.' : 'Patented laser 3D holographic projection and immersive character engine.',
      type: 'internal',
      badge: 'Proprietary',
      image: proadsLogoImg
    },
    {
      id: 'tech',
      name: currentLang === 'ar' ? 'باقة الحلول التقنية الذكية الأخرى' : 'Other Tech Solutions Hub',
      tagline: currentLang === 'ar' ? 'حلول TryHub, Hala Points, IoT, Salamat, MapIT, Jeel والأتمتة السحابية المتكاملة.' : 'Cloud automation platforms & Internet of Things smart networks.',
      type: 'internal',
      badge: 'Software Hub',
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section holding Jeddah HQ Sea Window Theme */}
      <section className="relative w-full min-h-[580px] lg:h-[72vh] flex items-center justify-center overflow-hidden">
        {/* Real life architectural image background of modern office with sea view */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1920&q=80" 
            alt="Innovation Ladders Headquarters - Jeddah" 
            className="w-full h-full object-cover brightness-[0.78]"
          />
          {/* Subtle animated ocean-blue gradient overlay for premium visual texture */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-sky-900/30" />
        </div>

        {/* Floating Glass container containing the hero branding */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="hero-glass rounded-3xl p-8 sm:p-12 md:px-16 md:py-14 shadow-2xl max-w-2xl mx-auto border-t border-white/60 animate-fade-in">
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-black text-sky-800 bg-sky-100/95 uppercase tracking-widest mb-4">
              <Zap className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
              {currentLang === 'ar' ? 'معمل الابتكار الأول بجدة' : 'The First Innovation Lab In Jeddah'}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 font-sans tracking-tight leading-tight">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium text-sky-950 leading-relaxed font-sans max-w-xl mx-auto">
              {t.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('services-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-sky-800 hover:bg-sky-900 text-white font-bold text-base shadow-lg transition-transform hover:-translate-y-0.5"
              >
                {t.learnMore}
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('about-us-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base shadow border border-sky-100 transition-transform hover:-translate-y-0.5"
              >
                {currentLang === 'ar' ? 'تعرف علينا' : 'About Us'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Us Section with detailed layout */}
      <section id="about-us-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black text-sky-800 tracking-widest uppercase block">
              {currentLang === 'ar' ? 'من نحن' : 'WHO WE ARE'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {t.aboutTitle}
            </h2>
            <div className="h-1 bg-gradient-to-r from-sky-500 to-purple-500 w-24 rounded-full" />
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-justify font-sans">
              {t.aboutContent}
            </p>

            {/* Minor values showcase box */}
            <div className="p-6 bg-sky-50/75 rounded-2xl border border-sky-100/90 space-y-2 mt-4">
              <h3 className="text-sky-900 font-black text-lg">
                {t.aboutIncorporateHeader}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.aboutIncorporateSub}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            {/* Elegant visual graphics frame matching the ocean high-rise feel */}
            <div className="relative w-full max-w-sm aspect-square bg-gradient-to-tr from-sky-400/20 to-purple-400/20 rounded-3xl p-4 shadow-inner">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80" 
                  alt="Innovation Lab workspace" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
              </div>
              {/* Absolutes decorative blobs */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-500 rounded-full mix-blend-multiply filter blur-sm opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sky-400 rounded-full mix-blend-multiply filter blur-sm opacity-25" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Values Connector Diagram */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black text-sky-400 tracking-widest uppercase">
              {currentLang === 'ar' ? 'استراتيجية عملنا' : 'OUR VALUE STRATEGY'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {currentLang === 'ar' ? 'مواءمة برامج الابتكار للمؤسسات' : 'Coordinating Innovation Outcomes'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {currentLang === 'ar' ? 'نصنع قيمة اقتصادية مستدامة ونمكّن المؤسسات من ريادة المستقبل باتباع نماذج عالمية مبرهنة.' : 'Creating sustainable economic values through globally recognized frameworks constraint-free.'}
            </p>
          </div>

          {/* Connected Grid on Desktop, simple lists on mobile */}
          <div className="hidden md:grid grid-cols-5 gap-4 items-center relative py-12">
            {/* SVG Connection Lines in Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
              <svg width="100%" height="100%" viewBox="0 0 1000 400" className="stroke-sky-400 fill-none stroke-2">
                {/* Lines from outer widgets to center (500, 200) */}
                <line x1="150" y1="80" x2="350" y2="150" strokeDasharray="5,5" />
                <line x1="850" y1="80" x2="650" y2="150" strokeDasharray="5,5" />
                <line x1="150" y1="320" x2="350" y2="250" strokeDasharray="5,5" />
                <line x1="850" y1="320" x2="650" y2="250" strokeDasharray="5,5" />
              </svg>
            </div>

            {/* Left Top Card */}
            <div className="col-span-2 bg-slate-800/80 p-6 rounded-2xl border border-sky-500/10 min-h-[140px] flex flex-col justify-center shadow-lg transition hover:border-sky-500/40 hover:scale-[1.02]">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold shrink-0">1</span>
                <div>
                  <h4 className="text-sky-300 font-bold text-sm uppercase tracking-wider mb-1">Process Efficiency</h4>
                  <p className="text-slate-300 text-xs sm:text-sm">{t.valueOptimize}</p>
                </div>
              </div>
            </div>

            <div className="col-span-1" /> {/* Spacer */}

            {/* Right Top Card */}
            <div className="col-span-2 bg-slate-800/80 p-6 rounded-2xl border border-indigo-500/10 min-h-[140px] flex flex-col justify-center shadow-lg transition hover:border-indigo-500/40 hover:scale-[1.02]">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">2</span>
                <div>
                  <h4 className="text-indigo-300 font-bold text-sm uppercase tracking-wider mb-1">Business Reinvention</h4>
                  <p className="text-slate-300 text-xs sm:text-sm">{t.valueReinvent}</p>
                </div>
              </div>
            </div>

            {/* Center Core Circle (Row 2) */}
            <div className="col-span-1" /> {/* Left gap */}
            <div className="col-span-3 py-6 relative z-10 flex justify-center">
              <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-sky-600 via-indigo-700 to-purple-800 p-1 shadow-2xl flex items-center justify-center text-center glow-animation relative">
                {/* Inner white-slate wall */}
                <div className="w-full h-full bg-slate-900 rounded-full p-6 flex flex-col justify-center items-center">
                  <Activity className="w-8 h-8 text-pink-500 mb-3 animate-pulse" />
                  <p className="text-white text-base font-extrabold leading-relaxed px-2 font-sans">
                    {t.valueCircleCenter}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1" /> {/* Right gap */}

            {/* Left Bottom Card */}
            <div className="col-span-2 bg-slate-800/80 p-6 rounded-2xl border border-emerald-500/10 min-h-[140px] flex flex-col justify-center shadow-lg transition hover:border-emerald-500/40 hover:scale-[1.02]">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold shrink-0">4</span>
                <div>
                  <h4 className="text-emerald-300 font-bold text-sm uppercase tracking-wider mb-1">Problem Focused UI/UX</h4>
                  <p className="text-slate-300 text-xs sm:text-sm">{t.valueProblemFocused}</p>
                </div>
              </div>
            </div>

            <div className="col-span-1" /> {/* Spacer */}

            {/* Right Bottom Card */}
            <div className="col-span-2 bg-slate-800/80 p-6 rounded-2xl border border-pink-500/10 min-h-[140px] flex flex-col justify-center shadow-lg transition hover:border-pink-500/40 hover:scale-[1.02]">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold shrink-0">3</span>
                <div>
                  <h4 className="text-pink-300 font-bold text-sm uppercase tracking-wider mb-1">Future Opportunities</h4>
                  <p className="text-slate-300 text-xs sm:text-sm">{t.valueOpportunity}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Simple Mobile Version */}
          <div className="md:hidden space-y-4 mt-8">
            <div className="bg-gradient-to-tr from-sky-800 to-indigo-900 p-8 rounded-3xl text-center mb-6">
              <p className="text-white text-lg font-extrabold leading-snug">{t.valueCircleCenter}</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-slate-800 p-5 rounded-2xl border-l-4 border-sky-400">
                <p className="text-slate-300 text-sm font-sans">{t.valueOptimize}</p>
              </div>
              <div className="bg-slate-800 p-5 rounded-2xl border-l-4 border-indigo-400">
                <p className="text-slate-300 text-sm font-sans">{t.valueReinvent}</p>
              </div>
              <div className="bg-slate-800 p-5 rounded-2xl border-l-4 border-pink-400">
                <p className="text-slate-300 text-sm font-sans">{t.valueOpportunity}</p>
              </div>
              <div className="bg-slate-800 p-5 rounded-2xl border-l-4 border-emerald-400">
                <p className="text-slate-300 text-sm font-sans">{t.valueProblemFocused}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Investor Call to Action Section with WhatsApp linkage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-sky-100/80 p-8 sm:p-12 md:p-14 text-center space-y-6 relative overflow-hidden">
          {/* Subtle background graphics */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-sky-200/50 rounded-full filter blur-xl" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-200/40 rounded-full filter blur-xl" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#714b67]/10 text-[#714b67]">
              <DollarSign className="w-3.5 h-3.5" />
              {currentLang === 'ar' ? 'للمستثمرين ورجال الأعمال' : 'For Investors & Angels'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-snug">
              {t.investorTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
              {t.investorContent}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/966554344899"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-base font-black rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.45 5.483 0 9.944-4.461 9.947-9.948.002-2.659-1.023-5.158-2.887-7.025C16.658 1.765 14.16 1.737 11.5 1.737c-5.485 0-9.946 4.462-9.948 9.95 0 1.83.5 3.609 1.448 5.148l-.95 3.473 3.56-.934z"/>
                </svg>
                <span>{t.investorButton}</span>
              </a>
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 9999, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl shadow transition"
              >
                {t.contactUs}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section Grid of 6 Bento-style Cards */}
      <section id="services-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black text-sky-800 tracking-widest uppercase">
            {currentLang === 'ar' ? 'خبراتنا المتراكمة' : 'OUR EXPERT SERVICES'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            {t.servicesTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t.servicesIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-sky-300 card-shadow transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-sky-50 transition duration-300">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-900 transition font-sans">
                  {srv.title}
                </h3>
                <div className="h-0.5 bg-sky-200 w-12 rounded" />
                <ul className="space-y-2 mt-2">
                  {srv.desc.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-slate-600 text-xs sm:text-sm leading-relaxed flex items-start gap-2 font-sans">
                      <span className="text-sky-500 font-bold mt-1 shrink-0">■</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Portfolio & Internal Products Showroom */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black text-[#714b67] tracking-widest uppercase block">
              {currentLang === 'ar' ? 'سجل نجاحاتنا' : 'OUR PORTFOLIO OUTCOMES'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-snug">
              {t.portfolioTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              {t.portfolioSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioHighlights.map((port) => (
              <div 
                key={port.id} 
                className="bg-white rounded-2xl border border-slate-100/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Brand Visual Cover Graphic */}
                <div className="w-full h-48 overflow-hidden relative bg-slate-100">
                  <img 
                    src={port.image} 
                    alt={port.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                    <span className="px-2.5 py-0.5 bg-white/90 backdrop-blur text-sky-900 text-[10px] font-black rounded-full uppercase tracking-wider shadow">
                      {port.badge}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-900/80 backdrop-blur text-white text-[9px] font-mono rounded uppercase shadow">
                      {port.type === 'external' ? 'External Redirect' : 'Interactive Detail'}
                    </span>
                  </div>
                </div>

                {/* Visual Header of Card representation */}
                <div className="p-6 pb-2 space-y-3">
                  <h3 className="text-lg sm:text-lg font-bold text-slate-900 flex items-center justify-between font-sans">
                    <span>{port.name}</span>
                  </h3>
                  
                  <p className="text-slate-500 text-xs sm:text-xs leading-relaxed min-h-[50px] font-sans">
                    {port.tagline}
                  </p>
                </div>

                {/* Simulated visual thumbnail block to capture high design feel */}
                <div className="px-6 py-2 bg-slate-50/50 flex items-center justify-center border-y border-slate-100/50 select-none">
                  <div className="w-full h-10 rounded bg-white flex items-center justify-between px-3 text-xs text-sky-900/60 font-mono tracking-wide border border-dashed border-sky-100">
                    <span className="flex items-center gap-1.5 text-[11px] font-sans font-semibold">
                      <Package className="w-4 h-4 text-sky-500" />
                      <span>{port.name}</span>
                    </span>
                    <span className="text-[10px] text-slate-400">active</span>
                  </div>
                </div>

                {/* Interactive Footer element */}
                <div className="p-6 pt-4 bg-slate-50/20 flex items-center justify-between">
                  <button
                    onClick={() => handlePortfolioNav(port.id, port.type as any, port.url)}
                    className={`w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-black rounded-lg transition-all ${
                      port.type === 'external'
                        ? 'bg-[#1e293b] hover:bg-slate-800 text-white'
                        : 'bg-sky-800 hover:bg-sky-900 text-white'
                    }`}
                  >
                    <span>{port.type === 'external' ? t.clickHere : t.internalLink}</span>
                    {port.type === 'external' ? (
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className={`w-3.5 h-3.5 ${currentLang === 'ar' ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
