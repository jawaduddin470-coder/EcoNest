import React from 'react';
import { ArrowRight, ArrowLeft, BookOpen, Calculator, ShieldCheck } from 'lucide-react';
import { CHAPTER_FIVE } from '../../data/brandData';

export default function ProjectsClosingCTA({
  theme = 'day',
  onOpenCalculator,
  onNavigateImpact,
  onNavigateInsights,
  onNavigateCommunity
}) {
  const handleNext = onNavigateInsights || onNavigateCommunity;

  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-gradient-to-b from-white via-econest-soft/30 to-[#F5F8F4] dark:from-[#06180F] dark:via-[#071D12] dark:to-[#05140C] border-t border-econest-forest/10 transition-colors duration-700 overflow-hidden">
      {/* Subtle ecological ambient texture with convergent soft radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-econest-fresh/[0.06] dark:bg-econest-fresh/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Small Label: 05 // THE HUMAN LAYER */}
        <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />
          <span>CHAPTER 05 // THE HUMAN LAYER</span>
        </div>

        {/* Main Editorial Statement */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-econest-deep dark:text-white leading-[1.15] mb-5">
          A project becomes a living system <br className="hidden sm:inline" />
          <span className="italic text-econest-forest dark:text-econest-natural font-light">
            when people care for it.
          </span>
        </h2>

        {/* Concise Supporting Copy */}
        <div className="space-y-2 mb-10">
          <p className="font-sans text-base sm:text-lg md:text-xl font-medium text-econest-deep/90 dark:text-white/90 leading-snug">
            Infrastructure creates the conditions. People create continuity.
          </p>
          <p className="font-sans text-xs sm:text-sm text-econest-forest/75 dark:text-[#BFD8C2] leading-relaxed max-w-xl mx-auto">
            A solar array needs tending. A wetland needs stewardship. A shared system needs participation.
          </p>
        </div>

        {/* Simple System Progression: BUILD → MAINTAIN → SHARE → ADAPT ↓ INSIGHTS */}
        <div className="max-w-xl mx-auto mb-10 p-5 sm:p-7 rounded-2xl bg-white/75 dark:bg-white/5 border border-econest-forest/10 dark:border-white/10 backdrop-blur-sm shadow-xs">
          <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 mb-3.5">
            THE LIVING CONTINUITY CYCLE
          </div>

          {/* Desktop/Tablet Horizontal Progression */}
          <div className="hidden sm:flex items-center justify-between gap-2 text-xs font-mono font-semibold text-econest-deep dark:text-white mb-3.5">
            <span className="px-3 py-1.5 rounded-lg bg-econest-soft/60 dark:bg-white/5 border border-econest-forest/10">
              BUILD
            </span>
            <span className="text-econest-forest/40 dark:text-white/30">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-econest-soft/60 dark:bg-white/5 border border-econest-forest/10">
              MAINTAIN
            </span>
            <span className="text-econest-forest/40 dark:text-white/30">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-econest-soft/60 dark:bg-white/5 border border-econest-forest/10">
              SHARE
            </span>
            <span className="text-econest-forest/40 dark:text-white/30">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-econest-soft/60 dark:bg-white/5 border border-econest-forest/10">
              ADAPT
            </span>
          </div>

          {/* Mobile Vertical Progression */}
          <div className="sm:hidden flex flex-col items-center space-y-2 text-xs font-mono font-semibold text-econest-deep dark:text-white mb-3.5">
            <span className="w-full py-1.5 rounded-lg bg-econest-soft/60 dark:bg-white/5 border border-econest-forest/10">
              BUILD
            </span>
            <span className="text-econest-forest/40 dark:text-white/30">↓</span>
            <span className="w-full py-1.5 rounded-lg bg-econest-soft/60 dark:bg-white/5 border border-econest-forest/10">
              MAINTAIN
            </span>
            <span className="text-econest-forest/40 dark:text-white/30">↓</span>
            <span className="w-full py-1.5 rounded-lg bg-econest-soft/60 dark:bg-white/5 border border-econest-forest/10">
              SHARE
            </span>
            <span className="text-econest-forest/40 dark:text-white/30">↓</span>
            <span className="w-full py-1.5 rounded-lg bg-econest-soft/60 dark:bg-white/5 border border-econest-forest/10">
              ADAPT
            </span>
          </div>

          {/* Convergence arrow to Insights */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-econest-fresh text-base leading-none mb-1.5">↓</span>
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-econest-forest text-white text-xs font-mono uppercase tracking-widest font-bold shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-econest-natural" />
              <span>INSIGHTS & LEARNING</span>
            </div>
          </div>
        </div>

        {/* Chapter 06 Transition Destination Card */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white/90 dark:bg-[#092216] border border-econest-forest/15 dark:border-white/10 shadow-sm max-w-xl mx-auto mb-8 text-center relative overflow-hidden">
          <div className="text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 font-semibold mb-2.5">
            CHAPTER 06 // INSIGHTS: RESEARCH & INTELLIGENCE
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-econest-deep dark:text-white leading-tight">
            What do we learn <br />
            when ideas become living systems?
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-econest-forest/75 dark:text-[#BFD8C2] font-sans max-w-md mx-auto leading-relaxed">
            From physical microgrids and shared seed corridors to the longitudinal knowledge derived from observing them across seasons.
          </p>
        </div>

        {/* Primary CTA (The ONLY dominant button) */}
        <div className="mb-7">
          <button
            onClick={handleNext}
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-econest-forest hover:bg-econest-deep text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-organic hover:scale-[1.02] active:scale-[0.98] font-bold group focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
          >
            <span>Explore Chapter 06: Insights</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Secondary Navigation Links (Understated, non-competing) */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70 mb-10">
          <button
            onClick={onNavigateImpact}
            className="inline-flex items-center space-x-1.5 hover:text-econest-deep dark:hover:text-white transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-econest-fresh rounded px-1"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="uppercase tracking-wider">Explore Impact</span>
          </button>

          <span className="text-econest-forest/30 dark:text-white/20">·</span>

          <button
            onClick={onOpenCalculator}
            className="inline-flex items-center space-x-1.5 hover:text-econest-deep dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-econest-fresh rounded px-1"
          >
            <Calculator className="w-3.5 h-3.5 text-econest-fresh" />
            <span className="uppercase tracking-wider">Calculate Contribution</span>
          </button>
        </div>

        {/* Honest Transparency Disclaimer */}
        <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-econest-forest/60 dark:text-econest-natural/60 tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-econest-fresh flex-shrink-0" />
          <span>{CHAPTER_FIVE.disclaimer}</span>
        </div>
      </div>
    </section>
  );
}
