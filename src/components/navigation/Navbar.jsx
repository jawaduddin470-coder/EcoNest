import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Leaf, Sun, Moon } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../../data/brandData';

export default function Navbar({
  currentPage = 'home',
  onNavigate,
  onReplayIntro,
  onCalculateImpact,
  theme = 'day',
  onToggleTheme
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, linkId) => {
    e.preventDefault();
    if (linkId === 'home' || linkId === 'about' || linkId === 'solutions' || linkId === 'impact' || linkId === 'projects' || linkId === 'insights') {
      if (onNavigate) onNavigate(linkId);
    } else {
      // For future or anchor links, navigate to Home and scroll to section
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(linkId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-econest-lightest/90 dark:bg-[#071D12]/90 backdrop-blur-md border-b border-econest-forest/10 shadow-organic'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo & Emblem */}
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="group flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh rounded-xl text-left"
            aria-label="EcoNest Home"
          >
            <div className="w-9 h-9 rounded-xl bg-econest-forest text-econest-lightest flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <Leaf className="w-5 h-5 text-econest-natural" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-tight text-econest-deep leading-none">
                {BRAND.name}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-brand text-econest-forest/70 pt-0.5">
                Living Ecosystem
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2 px-4 py-1.5 rounded-full bg-econest-soft/70 dark:bg-black/30 border border-econest-forest/10 backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;

              return (
                <button
                  key={link.id}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh ${
                    isActive
                      ? 'text-econest-deep font-semibold bg-white dark:bg-econest-forest/60 shadow-xs'
                      : 'text-econest-forest/80 hover:text-econest-deep hover:bg-white/50 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Day / Night Environmental Theme Toggle */}
            <button
              onClick={onToggleTheme}
              title={theme === 'day' ? "Switch to Night (Forest Mode)" : "Switch to Day (Earth Mode)"}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-econest-forest/15 hover:border-econest-forest/35 bg-white/40 dark:bg-white/10 text-econest-forest hover:text-econest-deep transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              aria-label={theme === 'day' ? "Switch to Night Mode" : "Switch to Day Mode"}
            >
              {theme === 'night' ? (
                <Sun className="w-4 h-4 text-econest-fresh transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-econest-primary transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Replay Intro Option */}
            <button
              onClick={onReplayIntro}
              title="Experience the 3D cinematic opening again"
              aria-label="Replay 3D cinematic opening experience"
              className="group flex items-center space-x-1.5 text-xs font-medium tracking-wider text-econest-forest/80 hover:text-econest-deep px-3 py-2 rounded-full border border-econest-forest/15 hover:border-econest-forest/30 bg-white/40 dark:bg-white/10 hover:bg-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
            >
              <Sparkles className="w-3.5 h-3.5 text-econest-fresh transition-transform group-hover:rotate-12" />
              <span>Replay Intro</span>
            </button>

            {/* Primary Action Button: Calculate Impact */}
            <button
              onClick={onCalculateImpact}
              className="group relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-econest-forest hover:bg-econest-deep text-white text-xs uppercase font-medium tracking-widest transition-all duration-300 shadow-sm hover:shadow-organic hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
            >
              <span>Calculate Impact</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl border border-econest-forest/15 bg-white/60 dark:bg-black/30 text-econest-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              aria-label={theme === 'day' ? "Switch to Night Mode" : "Switch to Day Mode"}
            >
              {theme === 'night' ? <Sun className="w-4 h-4 text-econest-fresh" /> : <Moon className="w-4 h-4 text-econest-primary" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-econest-forest/15 bg-white/60 dark:bg-black/30 text-econest-deep hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[45] bg-econest-deep/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-20 left-4 right-4 bg-econest-lightest dark:bg-[#081E13] rounded-3xl p-6 border border-econest-forest/15 shadow-organic-lg flex flex-col space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1.5 border-b border-econest-forest/10 pb-4">
              {NAV_LINKS.map((link) => {
                const isActive = currentPage === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleLinkClick(e, link.id);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`min-h-[44px] text-base font-medium py-2.5 px-3 rounded-xl transition-colors text-left flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh ${
                      isActive
                        ? 'text-econest-deep font-semibold bg-econest-soft dark:bg-econest-forest/40'
                        : 'text-econest-forest/80 hover:text-econest-deep hover:bg-econest-soft/40'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col space-y-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCalculateImpact();
                }}
                className="w-full min-h-[44px] py-3.5 rounded-2xl bg-econest-forest text-white font-medium text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              >
                <span>Calculate Impact</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-full min-h-[44px] py-3 rounded-2xl border border-econest-forest/20 text-econest-forest text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2 hover:bg-econest-soft/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              >
                <Sparkles className="w-4 h-4 text-econest-fresh" />
                <span>Replay Intro Experience</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
