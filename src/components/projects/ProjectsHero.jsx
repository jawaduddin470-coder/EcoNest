import React from 'react';
import { Layers, ArrowDown, Compass, Sparkles, MapPin } from 'lucide-react';
import { CHAPTER_FIVE, PROJECT_SCALES } from '../../data/brandData';

export default function ProjectsHero({
  theme = 'day',
  activeScale,
  onSelectScale,
  onExploreField
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-econest-soft/40 via-econest-lightest to-white dark:from-[#05180F] dark:via-[#071D12] dark:to-[#0A2618] border-b border-econest-forest/10 transition-colors duration-700">
      {/* Ambient Ecological Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projects-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="24" cy="24" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projects-grid)" />
        </svg>
      </div>

      {/* Radiant concentric orbital rings symbolizing expansion across spatial scales */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20 dark:opacity-25">
        <div className="absolute inset-0 rounded-full border border-dashed border-econest-fresh/40 animate-spin-very-slow" />
        <div className="absolute inset-16 rounded-full border border-econest-primary/30" />
        <div className="absolute inset-36 rounded-full border border-dashed border-econest-natural/50 animate-spin-reverse-slow" />
        <div className="absolute inset-56 rounded-full border border-econest-fresh/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Narrative Breadcrumb / Chapter Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-econest-forest/5 dark:bg-white/10 border border-econest-forest/15 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-econest-fresh animate-pulse-subtle" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-econest-forest dark:text-econest-natural font-semibold">
              {CHAPTER_FIVE.badge}
            </span>
          </div>

          <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-wider text-econest-forest/70 dark:text-econest-natural/70">
            <MapPin className="w-3.5 h-3.5 text-econest-fresh" />
            <span>HYDERABAD & DECCAN WATERSHED PROTOTYPES</span>
          </div>
        </div>

        {/* Main Headline & Lead Text */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-econest-deep dark:text-white leading-[1.12] mb-6">
            {CHAPTER_FIVE.headline}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-econest-forest/85 dark:text-[#BFD8C2] leading-relaxed max-w-3xl mb-8">
            {CHAPTER_FIVE.subtext}
          </p>

          {/* Epigraph / Narrative Bridge */}
          <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-econest-forest/15 shadow-sm backdrop-blur-sm max-w-2xl mb-10">
            <p className="font-serif italic text-base sm:text-lg text-econest-deep/90 dark:text-econest-natural leading-snug">
              “{CHAPTER_FIVE.narrativeBridge}”
            </p>
            <div className="mt-2 text-[11px] font-mono uppercase tracking-wider text-econest-forest/60 dark:text-econest-natural/60">
              — EcoNest Architecture Manifesto // Principle 05
            </div>
          </div>
        </div>

        {/* Interactive Scale Hierarchy Strip */}
        <div className="mt-8 pt-8 border-t border-econest-forest/10 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 block">
                SPATIAL EXPANSION MODEL
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-econest-deep dark:text-white">
                How Micro Interventions Scale to Living Territories
              </h3>
            </div>
            <span className="text-xs font-mono text-econest-fresh bg-econest-forest/5 dark:bg-white/10 px-3 py-1 rounded-full border border-econest-forest/10">
              0 to 1,000+ Meters Radii
            </span>
          </div>

          {/* Scale progression cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {PROJECT_SCALES.map((scale, idx) => {
              const isSelected = activeScale === scale.id;
              return (
                <button
                  key={scale.id}
                  onClick={() => onSelectScale && onSelectScale(scale.id)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 border relative overflow-hidden group ${
                    isSelected
                      ? 'bg-econest-forest text-white border-econest-forest shadow-organic'
                      : 'bg-white/60 dark:bg-white/5 text-econest-deep dark:text-white border-econest-forest/15 hover:border-econest-forest/40 hover:bg-white dark:hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${
                      isSelected ? 'text-econest-natural' : 'text-econest-forest/60 dark:text-econest-natural/60'
                    }`}>
                      Tier 0{idx + 1} // {scale.radius}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-econest-fresh' : 'bg-econest-forest/20 dark:bg-white/20'
                    }`} />
                  </div>
                  <div className="font-serif font-bold text-lg leading-tight mb-1">
                    {scale.label}
                  </div>
                  <div className={`text-xs ${
                    isSelected ? 'text-white/80' : 'text-econest-forest/75 dark:text-white/70'
                  }`}>
                    {scale.scope}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Jump & Disclaimer Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-econest-forest/10 dark:border-white/10">
          <button
            onClick={onExploreField}
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-econest-deep dark:text-econest-natural hover:text-econest-fresh transition-colors font-semibold group"
          >
            <span>Explore Living Project Field</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <div className="text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60 tracking-wider">
            {CHAPTER_FIVE.disclaimer}
          </div>
        </div>
      </div>
    </section>
  );
}
