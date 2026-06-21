import React, { useState, useRef, useEffect } from 'react';
import { translations } from '../translations';
import { Menu, X, ChevronDown, Globe, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/images/logo.svg';

interface HeaderProps {
  currentLang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentLang, setLang, currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[currentLang];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
  };

  const portfolioItems = [
    { id: 'skyproperty', name: currentLang === 'ar' ? 'SkyProperty' : 'SkyProperty', type: 'external', url: 'https://skypropertyksa.com/' },
    { id: 'mosque-clock', name: currentLang === 'ar' ? 'ساعة منارة للمساجد' : 'Manarah Smart Clock', type: 'external', url: 'https://manarahclock.net/' },
    { id: 'myproject', name: currentLang === 'ar' ? 'منصة مشروعي' : 'MyProject Platform', type: 'external', url: 'https://myprojectplatform.com/' },
    { id: 'pickup', name: currentLang === 'ar' ? 'PickUp استلام الطلبات' : 'PickUp Delivery Receiver', type: 'internal' },
    { id: 'gulfhat', name: currentLang === 'ar' ? 'القبعة الخليجية GulfHat' : 'The GulfHat', type: 'internal' },
    { id: 'graduation', name: currentLang === 'ar' ? 'زي التخرج' : 'Graduation Uniform', type: 'internal' },
    { id: 'proads', name: currentLang === 'ar' ? 'الأنشطة الترويجية و ProAds' : 'ProAds & Dolphin Dolly', type: 'internal' },
    { id: 'tech', name: currentLang === 'ar' ? 'التقنيات والحلول الأخرى' : 'Other Tech Solutions', type: 'internal' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#cfe9f7] border-b border-sky-100 shadow-md">
      {/* Top micro-bar for quick contact */}
      <div className="hidden sm:block w-full bg-[#1e293b] text-sky-100 text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans tracking-wide">
          <div className="flex items-center gap-4">
            <a href="tel:+966554344899" className="flex items-center gap-1 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span dir="ltr">+966 55 434 4899</span>
            </a>
            <a href="mailto:sales@innovationladders.com" className="flex items-center gap-1 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>sales@innovationladders.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-sky-200">
            <MapPin className="w-3.5 h-3.5 text-pink-400" />
            <span>{t.addressValue}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand area */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            {/* Custom SVG logo representing spiral ladders */}
            <div className="relative flex items-center justify-center p-1 bg-white rounded-xl shadow-sm border border-sky-100 w-[54px] h-[54px]">
              <img 
                src={logoImg} 
                alt="Innovation Ladders Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className={`mx-3 flex flex-col ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="text-xl font-extrabold text-[#0f172a] font-sans tracking-tight leading-none">
                Innovation Ladders
              </span>
              <span className="text-xs font-bold text-sky-800 tracking-widest mt-1">
                سلالم الإبداع
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleNav('home')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                currentPage === 'home'
                  ? 'bg-sky-800 text-white shadow-md'
                  : 'text-slate-700 hover:bg-white/55 hover:text-sky-950'
              }`}
            >
              {t.home}
            </button>

            <button
              onClick={() => handleNav('odoo')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                currentPage === 'odoo'
                  ? 'bg-sky-800 text-white shadow-md'
                  : 'text-slate-700 hover:bg-white/55 hover:text-sky-950'
              }`}
            >
              {t.odoo}
            </button>

            <button
              onClick={() => handleNav('services')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                currentPage === 'services'
                  ? 'bg-sky-800 text-white shadow-md'
                  : 'text-slate-700 hover:bg-white/55 hover:text-sky-950'
              }`}
            >
              {t.services}
            </button>

            {/* Dropdown for Portfolio */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-1 transition-all duration-200 ${
                  ['pickup', 'graduation', 'proads', 'tech', 'portfolio-root'].includes(currentPage)
                    ? 'bg-sky-800 text-white shadow-md'
                    : 'text-slate-700 hover:bg-white/55 hover:text-sky-950'
                }`}
              >
                <span>{t.portfolio}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className={`absolute ${currentLang === 'ar' ? 'right-0' : 'left-0'} mt-2 w-72 bg-white rounded-xl shadow-xl border border-sky-100 py-2.5 z-50 animate-fade-in`}>
                  {portfolioItems.map((item) => (
                    <div key={item.id}>
                      {item.type === 'external' ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-between items-center px-4 py-2.5 text-slate-700 hover:bg-sky-50 hover:text-sky-900 transition text-sm font-medium"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span>{item.name}</span>
                          <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded" dir="ltr">↗ external</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => handleNav(item.id)}
                          className={`w-full text-right ${currentLang === 'en' ? 'text-left' : 'text-right'} px-4 py-2.5 text-slate-700 hover:bg-sky-50 hover:text-sky-900 transition text-sm font-medium`}
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('competitions')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                currentPage === 'competitions'
                  ? 'bg-sky-800 text-white shadow-md'
                  : 'text-slate-700 hover:bg-white/55 hover:text-sky-950'
              }`}
            >
              {t.competitions}
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                currentPage === 'contact'
                  ? 'bg-sky-800 text-white shadow-md'
                  : 'text-slate-700 hover:bg-white/55 hover:text-sky-950'
              }`}
            >
              {t.contactUs}
            </button>
          </nav>

          {/* Language Switcher and Action Buttons Area */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 bg-white/70 hover:bg-white rounded-lg border border-sky-200 font-bold text-sm text-sky-900 transition shadow-sm"
              title="Switch Language / تبديل اللغة"
            >
              <Globe className="w-4 h-4 text-sky-600" />
              <span>{t.langName}</span>
            </button>

            <a
              href="https://wa.me/966554344899"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition"
            >
              {/* WhatsApp logo styled via clean layout */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.45 5.483 0 9.944-4.461 9.947-9.948.002-2.659-1.023-5.158-2.887-7.025C16.658 1.765 14.16 1.737 11.5 1.737c-5.485 0-9.946 4.462-9.948 9.95 0 1.83.5 3.609 1.448 5.148l-.95 3.473 3.56-.934z"/>
              </svg>
              <span dir="ltr">055 434 4899</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 bg-white/70 rounded-md text-xs font-bold text-sky-950 border border-sky-200"
            >
              {t.langName}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-sky-900 bg-white/50 rounded-lg hover:bg-white border border-sky-100 transition shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#f0f9ff] border-t border-sky-200 py-4 px-4 shadow-inner space-y-2 animate-fade-in">
          <button
            onClick={() => handleNav('home')}
            className={`w-full text-right ${currentLang === 'en' ? 'text-left' : 'text-right'} px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
              currentPage === 'home' ? 'bg-sky-800 text-white' : 'text-slate-700 hover:bg-white/70'
            }`}
          >
            {t.home}
          </button>

          <button
            onClick={() => handleNav('odoo')}
            className={`w-full text-right ${currentLang === 'en' ? 'text-left' : 'text-right'} px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
              currentPage === 'odoo' ? 'bg-sky-800 text-white' : 'text-slate-700 hover:bg-white/70'
            }`}
          >
            {t.odoo}
          </button>

          <button
            onClick={() => handleNav('services')}
            className={`w-full text-right ${currentLang === 'en' ? 'text-left' : 'text-right'} px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
              currentPage === 'services' ? 'bg-sky-800 text-white' : 'text-slate-700 hover:bg-white/70'
            }`}
          >
            {t.services}
          </button>

          <div className="border-t border-sky-100 pt-2 my-2">
            <p className="px-4 text-xs font-bold text-sky-800 uppercase tracking-widest mb-1.5">{t.portfolio}</p>
            {portfolioItems.map((item) => (
              <div key={item.id}>
                {item.type === 'external' ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center px-6 py-2 text-slate-600 hover:bg-white/70 text-xs font-medium"
                  >
                    <span>{item.name}</span>
                    <span className="text-[9px] bg-slate-100 text-slate-500 px-1 py-0.5 rounded">↗ external</span>
                  </a>
                ) : (
                  <button
                    onClick={() => handleNav(item.id)}
                    className={`w-full text-right ${currentLang === 'en' ? 'text-left' : 'text-right'} px-6 py-2 rounded-md text-xs font-medium text-slate-600 hover:bg-white/70`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => handleNav('competitions')}
            className={`w-full text-right ${currentLang === 'en' ? 'text-left' : 'text-right'} px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
              currentPage === 'competitions' ? 'bg-sky-800 text-white' : 'text-slate-700 hover:bg-white/70'
            }`}
          >
            {t.competitions}
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`w-full text-right ${currentLang === 'en' ? 'text-left' : 'text-right'} px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
              currentPage === 'contact' ? 'bg-sky-800 text-white' : 'text-slate-700 hover:bg-white/70'
            }`}
          >
            {t.contactUs}
          </button>

          <div className="border-t border-sky-200 pt-3 flex flex-col items-center gap-2">
            <a
              href="https://wa.me/966554344899"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 rounded-lg font-bold text-sm shadow"
            >
              <span>واتساب: +966554344899</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
