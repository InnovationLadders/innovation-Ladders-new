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
import VisualDisplaySolutionsView from './components/VisualDisplaySolutionsView';
import AdminLoginView from './components/AdminLoginView';
import AdminDashboardView from './components/AdminDashboardView';
import { useAdminAuth } from './lib/submissions';

function isAdminRoute(): boolean {
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  return hash === '#admin-login' || hash === '#/admin-login' || path === '/admin-login' || path === '/admin';
}

export default function App() {
  const [currentLang, setLang] = useState<'ar' | 'en'>('ar');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isAdminPage, setIsAdminPage] = useState<boolean>(isAdminRoute());
  const { isAuthenticated, loading: authLoading, signOut } = useAdminAuth();

  useEffect(() => {
    const onHashChange = () => setIsAdminPage(isAdminRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

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

  const handleBackToSite = () => {
    window.location.hash = '';
    setIsAdminPage(false);
  };

  const handleAdminLoginSuccess = () => {
    window.location.hash = '#admin-dashboard';
  };

  // Admin route rendering
  if (isAdminPage) {
    if (authLoading) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950">
          <div className="h-8 w-8 animate-spin rounded-full border-3 border-slate-700 border-t-sky-500" />
        </div>
      );
    }
    if (isAuthenticated) {
      return <AdminDashboardView onSignOut={signOut} />;
    }
    return <AdminLoginView onSuccess={handleAdminLoginSuccess} onBack={handleBackToSite} />;
  }

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
      case 'visual-display':
        return <VisualDisplaySolutionsView currentLang={currentLang} />;
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
