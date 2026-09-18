import React from 'react';
import { ArrowRight, ArrowLeft, Layers, Calculator, Sparkles, ShieldCheck } from 'lucide-react';
import { CHAPTER_SEVEN } from '../../data/brandData';

export default function InsightsClosingCTA({
  theme = 'day',
  onNavigateSolutions,
  onNavigateProjects,
  onOpenCalculator
}) {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-gradient-to-b from-white via-econest-soft/30 to-[#F5F8F4] dark:from-[#06180F] dark:via-[#071D12] dark:to-[#05140C] border-t border-econest-forest/10 transition-colors duration-700 overflow-hidden">
      {/* Subtle ecological ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-econest-fresh/[0.06] dark:bg-econest-fresh/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Small Label: CHAPTER TRANSITION // NEXT HORIZON */}
        <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />
          <span>CHAPTER TRANSITION // NEXT HORIZON</span>
        </div>

        {/* Main Editorial Statement */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-econest-deep dark:text-white leading-[1.15] mb-5">
          Knowledge only matters <br className="hidden sm:inline" />
          <span className="italic text-econest-forest dark:text-econest-natural font-light">
            when it changes what we do.
          </span>
        </h2>

        {/* Concise Supporting Copy */}
        <div className="space-y-2 mb-10">
          <p className="font-sans text-base sm:text-lg md:text-xl font-medium text-econest-deep/90 dark:text-white/90 leading-snug">
            Observation becomes useful when it returns to the system as action.
          </p>
          <p className="font-sans text-xs sm:text-sm text-econest-forest/75 dark:text-[#BFD8C2] leading-relaxed max-w-xl mx-auto">
            Insights complete the closed loop: from discovering global imbalances, connecting biospheric systems, implementing local projects, to returning refined knowledge back into daily practice.
          </p>
        </div>

        {/* Primary Dominant Action: EXPLORE SOLUTIONS → */}
        <div className="mb-7">
          <button
            onClick={onNavigateSolutions}
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-econest-forest hover:bg-econest-deep text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-organic hover:scale-[1.02] active:scale-[0.98] font-bold group focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Secondary Navigation Links (Understated, non-competing) */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70 mb-10">
          <button
            onClick={onNavigateProjects}
            className="inline-flex items-center space-x-1.5 hover:text-econest-deep dark:hover:text-white transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-econest-fresh rounded px-1"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="uppercase tracking-wider">View Projects</span>
          </button>

          <span className="text-econest-forest/30 dark:text-white/20">·</span>

          <button
            onClick={onOpenCalculator}
            className="inline-flex items-center space-x-1.5 hover:text-econest-deep dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-econest-fresh rounded px-1"
          >
            <Calculator className="w-3.5 h-3.5 text-econest-fresh" />
            <span className="uppercase tracking-wider">Calculate Your Impact</span>
          </button>
        </div>

        {/* Disclaimer Watermark */}
        <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-econest-forest/60 dark:text-econest-natural/60 tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-econest-fresh flex-shrink-0" />
          <span>{CHAPTER_SEVEN.disclaimer}</span>
        </div>
      </div>
    </section>
  );
}
