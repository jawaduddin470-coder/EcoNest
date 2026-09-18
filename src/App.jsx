import React, { useState, useEffect, useRef } from 'react';
import CinematicIntro from './components/intro/CinematicIntro';
import Navbar from './components/navigation/Navbar';
import HeroSection from './components/hero/HeroSection';
import AboutLivingPlanet from './components/about/AboutLivingPlanet';
import SolutionsExperience from './components/solutions/SolutionsExperience';
import ImpactExperience from './components/impact/ImpactExperience';
import ProjectsExperience from './components/projects/ProjectsExperience';
import InsightsExperience from './components/insights/InsightsExperience';
import ImpactCalculatorModal from './components/calculator/ImpactCalculatorModal';
import FooterAttribution from './components/footer/FooterAttribution';
import CustomCursor from './components/ui/CustomCursor';
import PageTransitionVeil from './components/ui/PageTransitionVeil';
import { getIntroSeenStatus } from './utils/accessibility';

const getInitialRoute = () => {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'about' || hash === 'solutions' || hash === 'impact' || hash === 'projects' || hash === 'insights' || hash === 'home') {
    return hash;
  }
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  if (path === 'about' || path === 'solutions' || path === 'impact' || path === 'projects' || path === 'insights') {
    return path;
  }
  return 'home';
};

export default function App() {
  const initialRoute = getInitialRoute();
  const [currentPage, setCurrentPage] = useState(initialRoute);
  const [targetPage, setTargetPage] = useState(initialRoute);
  const [showIntro, setShowIntro] = useState(() => {
    // If opening directly to about, solutions, impact, projects, or insights, bypass intro
    if (initialRoute === 'about' || initialRoute === 'solutions' || initialRoute === 'impact' || initialRoute === 'projects' || initialRoute === 'insights') return false;
    return !getIntroSeenStatus();
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('econest_theme');
      if (saved === 'night' || saved === 'day') return saved;
    }
    return 'day';
  });
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const transitionTimeoutRef = useRef(null);
  const finishTimeoutRef = useRef(null);

  useEffect(() => {
    if (theme === 'night') {
      document.body.classList.add('theme-night');
    } else {
      document.body.classList.remove('theme-night');
    }
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const route = getInitialRoute();
      setCurrentPage(route);
      setTargetPage(route);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
    };
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  // Organic Page Transition handler between Home, About, and Solutions
  const handleNavigate = (target) => {
    if (target === currentPage) return;
    setIsTransitioning(true);
    setTargetPage(target);

    // Sync hash with browser history for direct URL and refresh stability
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${target}`);
    }

    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);

    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentPage(target);
      window.scrollTo({ top: 0, behavior: 'instant' });
      finishTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 350);
    }, 350);
  };

  // Environmental Day / Night Theme Switcher
  const handleToggleTheme = () => {
    const nextTheme = theme === 'day' ? 'night' : 'day';
    setTheme(nextTheme);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('econest_theme', nextTheme);
      } catch (_) {}
    }
  };


  return (
    <div className="relative min-h-screen bg-econest-lightest dark:bg-[#071D12] text-econest-deep dark:text-[#EAF5E9] selection:bg-econest-natural selection:text-econest-deep flex flex-col justify-between transition-colors duration-700">
      {/* Custom Precision Cursor on Desktop */}
      <CustomCursor />

      {/* Organic Page Transition Veil */}
      <PageTransitionVeil
        isTransitioning={isTransitioning}
        targetPage={targetPage}
      />

      {/* Cinematic 3D Opening Experience Overlay */}
      {showIntro && (
        <CinematicIntro
          onComplete={handleIntroComplete}
        />
      )}

      {/* Main Website Structure */}
      <div className={`transition-opacity duration-700 ${showIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Sticky Editorial Navigation */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onReplayIntro={handleReplayIntro}
          onCalculateImpact={() => setCalculatorOpen(true)}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />

        {/* Dynamic Page Views: Home (Phase 1), About (Phase 2), Solutions (Phase 3) */}
        <main>
          {currentPage === 'home' && (
            <HeroSection
              onOpenCalculator={() => setCalculatorOpen(true)}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'about' && (
            <AboutLivingPlanet
              theme={theme}
              onOpenCalculator={() => setCalculatorOpen(true)}
              onReturnHome={() => handleNavigate('home')}
              onNavigateSolutions={() => handleNavigate('solutions')}
            />
          )}
          {currentPage === 'solutions' && (
            <SolutionsExperience
              theme={theme}
              onOpenCalculator={() => setCalculatorOpen(true)}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'impact' && (
            <ImpactExperience
              theme={theme}
              onNavigateHome={() => handleNavigate('home')}
              onNavigateAbout={() => handleNavigate('about')}
              onNavigateSolutions={() => handleNavigate('solutions')}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'projects' && (
            <ProjectsExperience
              theme={theme}
              onOpenCalculator={() => setCalculatorOpen(true)}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'insights' && (
            <InsightsExperience
              theme={theme}
              onOpenCalculator={() => setCalculatorOpen(true)}
              onNavigate={handleNavigate}
            />
          )}
        </main>

        {/* Footer Attribution */}
        <FooterAttribution
          onNavigate={handleNavigate}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />
      </div>

      {/* Interactive Personal Impact Modal */}
      <ImpactCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
      />
    </div>
  );
}
