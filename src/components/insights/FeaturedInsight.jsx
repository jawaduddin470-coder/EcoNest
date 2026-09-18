import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { INSIGHTS_DATA } from '../../data/brandData';

export default function FeaturedInsight({
  theme = 'day',
  onOpenInsight,
  onViewProject
}) {
  const featured = INSIGHTS_DATA.find(i => i.featured) || INSIGHTS_DATA[0];

  return (
    <section id="featured-insight" className="relative py-16 md:py-24 bg-white dark:bg-[#06180F] border-b border-econest-forest/10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />
          <span>SECTION 03 // FEATURED FIELD NOTE</span>
        </div>

        {/* Large Editorial Card Container */}
        <div className="p-7 sm:p-10 lg:p-14 rounded-3xl bg-econest-lightest dark:bg-[#082216] border border-econest-forest/15 dark:border-white/10 shadow-organic relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Dominant Editorial Content */}
            <div className="lg:col-span-7 space-y-5">
              {/* 1. Field Note Metadata & Knowledge Loop Stage */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-econest-forest text-white shadow-2xs">
                  {featured.type} // {featured.number}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-econest-fresh/15 text-econest-forest dark:text-econest-fresh border border-econest-fresh/30">
                  STAGE 01 // OBSERVATION
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-econest-forest/10 dark:bg-white/10 text-econest-forest dark:text-econest-natural border border-econest-forest/15">
                  {featured.categoryLabel}
                </span>
                <span className="text-xs font-mono text-econest-forest/60 dark:text-econest-natural/60">
                  {featured.readTime} · {featured.date}
                </span>
              </div>

              {/* 2. Main Headline (Dominant) */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-econest-deep dark:text-white leading-[1.14]">
                {featured.title}
              </h2>

              {/* 3. Key Ecological Statement */}
              <p className="font-serif italic text-base sm:text-lg lg:text-xl text-econest-forest/85 dark:text-econest-natural/90 leading-snug">
                “{featured.subtitle}”
              </p>

              {/* 4. Supporting Explanation */}
              <p className="text-sm sm:text-base text-econest-forest/85 dark:text-[#BFD8C2] leading-relaxed max-w-2xl">
                {featured.shortDescription}
              </p>

              {/* 5. Verified Field Findings */}
              <div className="pt-2 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 font-semibold">
                  VERIFIED FIELD FINDINGS
                </div>
                {featured.keyFindings.map((finding, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-econest-forest/90 dark:text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh mt-1.5 flex-shrink-0" />
                    <span>{finding}</span>
                  </div>
                ))}
              </div>

              {/* 7. Action CTA */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInsight && onOpenInsight(featured)}
                  className="h-10 px-6 rounded-full bg-econest-forest hover:bg-econest-deep text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-organic hover:scale-[1.02] active:scale-[0.98] font-bold flex items-center space-x-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
                >
                  <span>Read Field Note</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60">
                  Telemetry from Deccan Bioregion
                </span>
              </div>
            </div>

            {/* Right Column: Connected System & Observed Telemetry (Supporting Evidence) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Connected System Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-black/25 border border-econest-forest/12 dark:border-white/10 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60">
                    CONNECTED LIVING SYSTEM
                  </span>
                  <span className="font-mono text-xs font-bold text-econest-fresh">
                    {featured.connectedProject.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-econest-deep dark:text-white mb-1">
                  {featured.connectedProject.title}
                </h3>
                <div className="text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70 mb-3">
                  {featured.connectedProject.categoryLabel}
                </div>

                <p className="text-xs text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed mb-4">
                  Field observations from this report derive directly from the active rooftop solar battery pool in Hyderabad.
                </p>

                <button
                  onClick={() => onViewProject && onViewProject(featured.connectedProject.id)}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-econest-deep dark:text-econest-natural hover:text-econest-fresh transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-econest-fresh"
                >
                  <span>View Demonstration System</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Observed System Effect Metrics */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-black/25 border border-econest-forest/12 dark:border-white/10 shadow-xs">
                <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 mb-2.5">
                  OBSERVED SYSTEM EFFECT
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-2xl font-bold text-econest-deep dark:text-white">
                      {featured.observedEffect.primaryValue}
                    </div>
                    <div className="text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60 mt-0.5 leading-snug">
                      {featured.observedEffect.primaryLabel}
                    </div>
                  </div>

                  <div className="border-l border-econest-forest/10 dark:border-white/10 pl-4">
                    <div className="font-mono text-2xl font-bold text-econest-fresh">
                      {featured.observedEffect.secondaryValue}
                    </div>
                    <div className="text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60 mt-0.5 leading-snug">
                      {featured.observedEffect.secondaryLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
