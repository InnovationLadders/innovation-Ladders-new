import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import OdooView from './components/OdooView';
import PickUpView from './components/PickUpView';
import GulfHatView from './components/GulfHatView';
import ProAdsView from './components/ProAdsView';
import OtherSolutionsView from './components/OtherSolutionsView';
import GraduationView from './components/GraduationView';
import CompetitionView from './components/CompetitionView';

export default function App() {
  const [currentLang, setLang] = useState<'ar' | 'en'>('ar');
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Trigger correct HTML direction upon launch
  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handlePageNavigation = (pageId: string) => {
    if (pageId === 'services') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('services-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (pageId === 'contact') {
      const el = document.getElementById('footer-contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderActiveView = () => {
    switch(currentPage) {
      case 'home':
        return <HomeView currentLang={currentLang} setCurrentPage={handlePageNavigation} />;
      case 'odoo':
        return <OdooView currentLang={currentLang} />;
      case 'pickup':
        return <PickUpView currentLang={currentLang} />;
      case 'gulfhat':
        return <GulfHatView currentLang={currentLang} />;
      case 'proads':
        return <ProAdsView currentLang={currentLang} />;
      case 'tech':
        return <OtherSolutionsView currentLang={currentLang} />;
      case 'graduation':
        return <GraduationView currentLang={currentLang} />;
      case 'competitions':
        return <CompetitionView currentLang={currentLang} />;
      default:
        return <HomeView currentLang={currentLang} setCurrentPage={handlePageNavigation} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Shared Nav Header across all views */}
      <Header 
        currentLang={currentLang} 
        setLang={setLang} 
        currentPage={currentPage} 
        setCurrentPage={handlePageNavigation} 
      />

      {/* Main active layout */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Shared Footer across all views */}
      <Footer currentLang={currentLang} />

    </div>
  );
}
