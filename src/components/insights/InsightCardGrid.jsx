import React from 'react';
import { ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import { INSIGHTS_DATA } from '../../data/brandData';

export default function InsightCardGrid({
  selectedCategory = 'all',
  onOpenInsight,
  onViewProject,
  theme = 'day'
}) {
  const filteredInsights = selectedCategory === 'all'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter(i => i.category === selectedCategory);

  // Type badge styling with refined palette
  const typeBadgeColors = {
    "FIELD NOTE": "bg-emerald-800/10 text-emerald-800 dark:text-emerald-300 border-emerald-800/20",
    "SYSTEM STUDY": "bg-teal-800/10 text-teal-800 dark:text-teal-300 border-teal-800/20",
    "DESIGN PRINCIPLE": "bg-green-800/10 text-green-800 dark:text-green-300 border-green-800/20",
    "DATA NOTE": "bg-amber-800/10 text-amber-800 dark:text-amber-300 border-amber-800/20",
    "COMMUNITY NOTE": "bg-emerald-900/10 text-emerald-900 dark:text-emerald-200 border-emerald-900/20"
  };

  return (
    <section id="insights-grid" className="relative py-20 md:py-28 bg-econest-lightest dark:bg-[#071D12] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-econest-primary" />
              <span>SECTION 04 // FIELD OBSERVATIONS & SYSTEM STUDIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-econest-deep dark:text-white leading-tight">
              Living Knowledge Archetypes
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
              Empirical field notes, structural system studies, and ecological design principles gathered across active demonstration systems.
            </p>
          </div>

          <div className="text-xs font-mono text-econest-forest/60 dark:text-econest-natural/60 bg-white/70 dark:bg-white/5 px-4 py-2 rounded-xl border border-econest-forest/10 self-start md:self-auto">
            SHOWING {filteredInsights.length} FIELD ENTRIES
          </div>
        </div>

        {/* Structured Grid Container with Subtle Editorial Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {filteredInsights.map((insight, idx) => {
            const badgeClass = typeBadgeColors[insight.type] || "bg-econest-forest/10 text-econest-forest border-econest-forest/20";
            const isFirstRow = selectedCategory === 'all' && idx < 3;

            return (
              <div
                key={insight.id}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 group h-full ${
                  isFirstRow
                    ? 'border-econest-forest/20 dark:border-white/15 bg-white dark:bg-[#0A2619] shadow-sm hover:shadow-organic hover:-translate-y-1'
                    : 'border-econest-forest/12 dark:border-white/10 bg-white/90 dark:bg-[#081F15] shadow-2xs hover:shadow-sm hover:-translate-y-0.5'
                }`}
              >
                {/* Top: Metadata, Loop Stage, Titles & Narrative */}
                <div>
                  {/* Type, Loop Stage & Read Time Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider border ${badgeClass}`}>
                        {insight.type}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wider bg-econest-forest/5 dark:bg-white/10 text-econest-forest/80 dark:text-econest-natural/80 border border-econest-forest/10">
                        {insight.loopNumber ? `LOOP ${insight.loopNumber}` : 'LOOP 01'}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-econest-forest/60 dark:text-econest-natural/60">
                      {insight.readTime}
                    </span>
                  </div>

                  {/* ID & Category */}
                  <div className="flex items-center space-x-2 text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70 mb-2">
                    <span className="font-bold text-econest-fresh">REF #{insight.number}</span>
                    <span>//</span>
                    <span>{insight.categoryLabel}</span>
                  </div>

                  {/* Title (Dominant element with controlled min-height for rhythm) */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-econest-deep dark:text-white group-hover:text-econest-forest dark:group-hover:text-econest-natural transition-colors leading-snug mb-2 min-h-[3rem]">
                    {insight.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs font-serif italic text-econest-forest/75 dark:text-econest-natural/75 mb-3 line-clamp-2 min-h-[2.25rem] leading-relaxed">
                    “{insight.subtitle}”
                  </p>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed mb-6 line-clamp-3">
                    {insight.shortDescription}
                  </p>
                </div>

                {/* Bottom Segment: Telemetry & Aligned Action Buttons */}
                <div>
                  {/* Coupled System & Observed Delta Pill */}
                  <div className="p-3 rounded-xl bg-econest-soft/40 dark:bg-black/20 border border-econest-forest/10 mb-5 text-xs font-mono">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-econest-forest/60 dark:text-econest-natural/60 mb-1">
                      <span>Coupled System</span>
                      <span className="font-bold text-econest-deep dark:text-white">{insight.connectedProject.number}</span>
                    </div>
                    <div className="font-medium text-econest-deep dark:text-white truncate">
                      {insight.connectedProject.title}
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-econest-forest/70 dark:text-econest-natural/70 pt-2 mt-2 border-t border-econest-forest/10">
                      <span>Observed Delta:</span>
                      <span className="font-bold text-econest-fresh">{insight.observedEffect.primaryValue}</span>
                    </div>
                  </div>

                  {/* Actions: Perfectly Aligned Bottom */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-econest-forest/10 dark:border-white/10">
                    <button
                      onClick={() => onViewProject && onViewProject(insight.connectedProject.id)}
                      className="h-9 inline-flex items-center space-x-1.5 text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70 hover:text-econest-fresh transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-econest-fresh"
                      title="Inspect coupled demonstration project"
                    >
                      <span>View System</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => onOpenInsight && onOpenInsight(insight)}
                      className="h-9 px-4 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-econest-forest dark:bg-white/10 text-white hover:bg-econest-deep dark:hover:bg-white/20 transition-all shadow-2xs flex items-center space-x-1.5 group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
                    >
                      <span>Read Insight</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
