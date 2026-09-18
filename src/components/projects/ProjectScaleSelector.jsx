import React, { useState } from 'react';
import { Layers, ArrowRight, Compass, Check, ArrowUpRight } from 'lucide-react';
import { PROJECT_SCALES, PROJECTS_DATA } from '../../data/brandData';

export default function ProjectScaleSelector({
  theme = 'day',
  activeScale = 'neighbourhood',
  onSelectScale,
  onOpenReport
}) {
  const selectedScaleObj = PROJECT_SCALES.find(s => s.id === activeScale) || PROJECT_SCALES[2];

  // Helper to filter projects for any scale
  const getProjectsForScale = (scaleId) => {
    return PROJECTS_DATA.filter(p => {
      if (scaleId === 'home') return p.scale === 'home' || p.category === 'materials';
      if (scaleId === 'block') return p.scale === 'block' || p.id === 'proj-living-street';
      if (scaleId === 'neighbourhood') return p.scale === 'neighbourhood' || p.scale === 'community';
      if (scaleId === 'city') return p.scale === 'city';
      return true;
    });
  };

  const matchingProjects = getProjectsForScale(activeScale);

  return (
    <section id="scale-selector" className="relative py-24 md:py-32 bg-white dark:bg-[#06180F] border-b border-econest-forest/10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-econest-primary" />
            <span>SECTION 05 // MULTI-SCALAR TERRITORIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-econest-deep dark:text-white leading-tight">
            Explore Interventions by Spatial Scale
          </h2>
          <p className="mt-3 text-base text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
            Regenerative design must operate across nested spatial boundaries. A home cannot be truly sustainable if the street is an asphalt heat trap; a street cannot thrive if the regional watershed is depleted.
          </p>
        </div>

        {/* 4-Tier Interactive Scale Tab Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {PROJECT_SCALES.map((scale, idx) => {
            const isSelected = activeScale === scale.id;
            const count = getProjectsForScale(scale.id).length;

            return (
              <button
                key={scale.id}
                onClick={() => onSelectScale && onSelectScale(scale.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-econest-forest text-white border-econest-forest shadow-organic'
                    : 'bg-econest-lightest dark:bg-white/5 text-econest-deep dark:text-white border-econest-forest/15 hover:border-econest-forest/35 hover:bg-white dark:hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
                      isSelected ? 'text-econest-natural' : 'text-econest-forest/60 dark:text-econest-natural/60'
                    }`}>
                      0{idx + 1} // {scale.radius}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-econest-fresh' : 'bg-econest-forest/20 dark:bg-white/20'
                    }`} />
                  </div>

                  <div className="font-serif font-bold text-xl mb-1">
                    {scale.label}
                  </div>

                  <div className={`text-xs mb-3 ${
                    isSelected ? 'text-white/80' : 'text-econest-forest/70 dark:text-white/70'
                  }`}>
                    {scale.scope}
                  </div>
                </div>

                {/* Clear Active Communication Badge */}
                <div className="pt-2 border-t border-white/10 dark:border-white/5 flex items-center justify-between">
                  <span className={`text-[10px] font-mono ${
                    isSelected ? 'text-econest-natural font-medium' : 'text-econest-forest/50 dark:text-white/40'
                  }`}>
                    {count} {count === 1 ? 'Model' : 'Models'}
                  </span>
                  {isSelected && (
                    <span className="text-[9px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-white/15 text-white">
                      Selected
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Scale Blueprint & Matching Demonstration Projects */}
        <div className="p-8 sm:p-10 rounded-3xl bg-econest-soft/40 dark:bg-[#0A2417] border border-econest-forest/15 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Scale Characteristics */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-econest-forest dark:text-econest-natural bg-white/80 dark:bg-white/10 px-3 py-1 rounded-full border border-econest-forest/10">
                <Compass className="w-3.5 h-3.5 text-econest-fresh" />
                <span>Radius: {selectedScaleObj.radius} · {selectedScaleObj.scope}</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-econest-deep dark:text-white">
                {selectedScaleObj.label} Scale Dynamics
              </h3>

              <p className="text-sm text-econest-forest/85 dark:text-[#BFD8C2] leading-relaxed">
                {selectedScaleObj.description}
              </p>

              <div className="text-xs font-mono text-econest-forest/60 dark:text-econest-natural/60 border-t border-econest-forest/10 dark:border-white/10 pt-4">
                Projects operating in this tier share closed physical nutrient, energy, and transit loops without centralized municipal bureaucracy.
              </div>
            </div>

            {/* Right: Active Demonstration Models at this Scale */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 font-semibold">
                Active Demonstration Models at {selectedScaleObj.label} Scale ({matchingProjects.length})
              </div>

              <div className="space-y-3">
                {matchingProjects.map(proj => (
                  <div
                    key={proj.id}
                    className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-econest-forest/15 hover:border-econest-fresh/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-mono mb-1">
                        <span className="font-bold text-econest-forest dark:text-econest-natural">PROJ-{proj.number}</span>
                        <span className="text-econest-forest/40">·</span>
                        <span className="text-econest-forest/70 dark:text-white/70">{proj.categoryLabel}</span>
                      </div>
                      <div className="font-serif font-bold text-lg text-econest-deep dark:text-white group-hover:text-econest-forest dark:group-hover:text-econest-natural transition-colors">
                        {proj.title}
                      </div>
                      <div className="text-xs text-econest-forest/70 dark:text-white/60 line-clamp-1">
                        {proj.tagline}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 sm:flex-shrink-0">
                      <div className="text-right font-mono">
                        <div className="text-xs font-bold text-econest-fresh">{proj.primaryMetric.value}</div>
                        <div className="text-[9px] text-econest-forest/60 dark:text-white/50">{proj.primaryMetric.label}</div>
                      </div>
                      <button
                        onClick={() => onOpenReport && onOpenReport(proj)}
                        className="h-9 px-3.5 rounded-xl bg-econest-forest/5 dark:bg-white/10 hover:bg-econest-forest hover:text-white text-econest-deep dark:text-white transition-colors flex items-center space-x-1.5 text-xs font-mono"
                        title="View project field report"
                      >
                        <span>Blueprint</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
