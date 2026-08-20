import React, { useState } from 'react';
import { ArrowUpRight, CircleCheck as CheckCircle2, MonitorPlay, PhoneCall, Play, Sparkles } from 'lucide-react';
import transparentLedImage from '../assets/images/Transparent_LED_Display.jpg';
import deliveryBoxImage from '../assets/images/LED_Delivery_Box_Display.jpg';
import interactiveFloorImage from '../assets/images/Interactive_LED_Floor.jpg';
import goboImage from '../assets/images/GOBO_Logo_Projector.jpg';
import projectionMappingImage from '../assets/images/Projection_Mapping.jpg';
import flyingLedImage from '../assets/images/Flying_LED_Display.jpg';

interface VisualDisplaySolutionsViewProps {
  currentLang: 'ar' | 'en';
}

interface DisplaySolution {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  videoId: string;
  accent: string;
}

const displaySolutions: DisplaySolution[] = [
  {
    id: 'transparent-led',
    nameAr: 'Transparent LED Display | الشاشة الشفافة',
    nameEn: 'Transparent LED Display',
    descriptionAr: 'حوّل واجهاتك الزجاجية إلى شاشة إعلانية مذهلة يعرض المحتوى عليها بوضوح مع الحفاظ على رؤية ما خلفها ودخول الضوء الطبيعي.',
    descriptionEn: 'Turn glass façades into stunning advertising screens while preserving the view behind them and allowing natural light to enter.',
    image: transparentLedImage,
    videoId: 'BjeI6DNE4hY',
    accent: 'sky',
  },
  {
    id: 'delivery-box',
    nameAr: 'LED Delivery Box Display | شاشة بوكس التوصيل',
    nameEn: 'LED Delivery Box Display',
    descriptionAr: 'حوّل أسطول الدراجات إلى لوحة إعلانية متحركة تجوب شوارع المدينة وتصل إلى آلاف العيون والعملاء يومياً.',
    descriptionEn: 'Turn delivery fleets into moving billboards that travel through the city and reach thousands of eyes and customers every day.',
    image: deliveryBoxImage,
    videoId: '3jYebACfzdA',
    accent: 'emerald',
  },
  {
    id: 'interactive-floor',
    nameAr: 'Interactive LED Floor | شاشات أرضية تفاعلية',
    nameEn: 'Interactive LED Floor',
    descriptionAr: 'دع جمهورك يدخل إلى الإعلان بنفسه! أرضية شديدة التحمل تعطي مؤثرات بصرية تتفاعل مع خطوات الحركة والأقدام.',
    descriptionEn: 'Invite your audience into the advertisement with a durable floor that creates visual effects responsive to movement and footsteps.',
    image: interactiveFloorImage,
    videoId: 'FGQCSP3EXok',
    accent: 'amber',
  },
  {
    id: 'gobo-projector',
    nameAr: 'GOBO Logo Projector | بروجكتر الشعار الضوئي',
    nameEn: 'GOBO Logo Projector',
    descriptionAr: 'اعرض شعار علامتك التجارية بوضوح على الأرصفة أمام متجرك أو الجدران والواجهات الخارجية كحل اقتصادي ومبهر ليلاً.',
    descriptionEn: 'Project your brand logo clearly onto pavements, walls, and exterior façades for an economical and striking nighttime display.',
    image: goboImage,
    videoId: 'YGdgX9wMBLc',
    accent: 'rose',
  },
  {
    id: 'projection-mapping',
    nameAr: 'Projection Mapping | الإسقاط الضوئي الضخم',
    nameEn: 'Projection Mapping',
    descriptionAr: 'باستخدام بروجكتورات ليزر عملاقة، حوّل مبناك بالكامل أو الجدران الكبيرة إلى شاشة سينمائية تعرض قصصاً وإعلانات مبهرة.',
    descriptionEn: 'Use powerful laser projectors to transform an entire building or large walls into a cinematic screen for captivating stories and campaigns.',
    image: projectionMappingImage,
    videoId: 'tZ6FueD4yiY',
    accent: 'blue',
  },
  {
    id: 'flying-led',
    nameAr: 'Flying LED Display | الشاشة الطائرة',
    nameEn: 'Flying LED Display',
    descriptionAr: 'شاشة LED خفيفة الوزن فائقة التقنية تحلق في السماء لتعرض رسالتك الإعلانية أمام آلاف الحضور في وقت واحد.',
    descriptionEn: 'A lightweight, high-tech LED display that takes your advertising message into the sky and in front of thousands of attendees at once.',
    image: flyingLedImage,
    videoId: 'hvQlsp-s0AM',
    accent: 'teal',
  },
];

const accentClasses: Record<string, { badge: string; border: string; button: string; icon: string }> = {
  sky: { badge: 'bg-sky-50 text-sky-800', border: 'border-sky-200', button: 'bg-sky-800 hover:bg-sky-900', icon: 'text-sky-600' },
  emerald: { badge: 'bg-emerald-50 text-emerald-800', border: 'border-emerald-200', button: 'bg-emerald-700 hover:bg-emerald-800', icon: 'text-emerald-600' },
  amber: { badge: 'bg-amber-50 text-amber-800', border: 'border-amber-200', button: 'bg-amber-600 hover:bg-amber-700', icon: 'text-amber-600' },
  rose: { badge: 'bg-rose-50 text-rose-800', border: 'border-rose-200', button: 'bg-rose-700 hover:bg-rose-800', icon: 'text-rose-600' },
  blue: { badge: 'bg-blue-50 text-blue-800', border: 'border-blue-200', button: 'bg-blue-700 hover:bg-blue-800', icon: 'text-blue-600' },
  teal: { badge: 'bg-teal-50 text-teal-800', border: 'border-teal-200', button: 'bg-teal-700 hover:bg-teal-800', icon: 'text-teal-600' },
};

export default function VisualDisplaySolutionsView({ currentLang }: VisualDisplaySolutionsViewProps) {
  const [activeId, setActiveId] = useState(displaySolutions[0].id);
  const activeSolution = displaySolutions.find((solution) => solution.id === activeId) ?? displaySolutions[0];
  const colors = accentClasses[activeSolution.accent];
  const isArabic = currentLang === 'ar';
  const activeName = isArabic ? activeSolution.nameAr : activeSolution.nameEn;
  const activeDescription = isArabic ? activeSolution.descriptionAr : activeSolution.descriptionEn;

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="relative mb-10 overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-xl sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-400/15 px-3 py-1 text-xs font-bold tracking-wider text-sky-200">
              <Sparkles className="h-3.5 w-3.5" />
              {isArabic ? 'حلول عرض مبتكرة' : 'INNOVATIVE DISPLAY SOLUTIONS'}
            </span>
            <h1 className="text-3xl font-black leading-tight sm:text-5xl">
              {isArabic ? 'جميع حلول شاشات الإعلانات والعرض المرئي' : 'Advertising Screens & Visual Display Solutions'}
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {isArabic ? 'حوّل المساحات والواجهات والفعاليات إلى تجارب بصرية لافتة تصل برسالتك إلى الجمهور في المكان والوقت المناسب.' : 'Transform spaces, façades, and events into memorable visual experiences that put your message in front of the right audience.'}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12">
          <aside className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm lg:col-span-4">
            <div className="px-3 pb-3 pt-2">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                {isArabic ? 'اختر الحل المناسب' : 'CHOOSE A SOLUTION'}
              </p>
            </div>
            <div className="space-y-1">
              {displaySolutions.map((solution) => {
                const solutionColors = accentClasses[solution.accent];
                const isActive = solution.id === activeId;
                return (
                  <button
                    key={solution.id}
                    type="button"
                    onClick={() => setActiveId(solution.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl p-3 text-right transition-all duration-200 ${isArabic ? 'text-right' : 'text-left'} ${isActive ? `${solutionColors.badge} shadow-sm` : 'text-slate-700 hover:bg-slate-50'}`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl ${isActive ? 'ring-2 ring-white' : 'bg-slate-100'}`}>
                      <img src={solution.image} alt="" className="h-full w-full object-cover" />
                    </span>
                    <span className="min-w-0 flex-1 text-xs font-bold leading-5 sm:text-sm">
                      {isArabic ? solution.nameAr : solution.nameEn}
                    </span>
                    {isActive && <CheckCircle2 className={`h-4 w-4 shrink-0 ${solutionColors.icon}`} />}
                  </button>
                );
              })}
            </div>
          </aside>

          <section className={`overflow-hidden rounded-3xl border bg-white shadow-lg ${colors.border} lg:col-span-8`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[280px] bg-slate-900 lg:min-h-[500px]">
                <img src={activeSolution.image} alt={activeName} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-2 text-xs font-bold backdrop-blur">
                    <MonitorPlay className="h-4 w-4" />
                    {isArabic ? 'حل بصري متكامل' : 'Complete visual solution'}
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur">{displaySolutions.indexOf(activeSolution) + 1} / {displaySolutions.length}</span>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-7 p-6 sm:p-8">
                <div className="space-y-5">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${colors.badge}`}>
                    {isArabic ? 'حلول شاشات وإعلانات' : 'Display & advertising technology'}
                  </span>
                  <h2 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{activeName}</h2>
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">{activeDescription}</p>
                  <div className="flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-500">
                    <Play className={`h-4 w-4 ${colors.icon}`} />
                    {isArabic ? 'شاهد الفيديو التوضيحي للحل' : 'Watch the solution overview'}
                  </div>
                  <div className="aspect-video overflow-hidden rounded-2xl bg-slate-950 shadow-inner">
                    <iframe
                      key={activeSolution.videoId}
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${activeSolution.videoId}`}
                      title={activeName}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row">
                  <a href="https://wa.me/966554344899" target="_blank" rel="noopener noreferrer" className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition ${colors.button}`}>
                    <PhoneCall className="h-4 w-4" />
                    {isArabic ? 'اطلب استشارة' : 'Request a consultation'}
                  </a>
                  <a href={`https://www.youtube.com/watch?v=${activeSolution.videoId}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                    <ArrowUpRight className="h-4 w-4" />
                    {isArabic ? 'فتح الفيديو' : 'Open video'}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
