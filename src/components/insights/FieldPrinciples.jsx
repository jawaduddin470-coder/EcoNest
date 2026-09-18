import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FIELD_PRINCIPLES } from '../../data/brandData';

export default function FieldPrinciples({
  theme = 'day',
  onOpenInsightByNumber
}) {
  return (
    <section className="relative py-20 md:py-28 bg-econest-soft/30 dark:bg-[#071D12] border-b border-econest-forest/10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />
            <span>SECTION 06 // FOUNDATIONAL FIELD PRINCIPLES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-econest-deep dark:text-white leading-tight">
            Principles from the Field
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
            Distilled design truths gathered not in lecture halls, but across soil verges, microgrids, and communal reed beds.
          </p>
        </div>

        {/* 6 Principles Editorial Grid with Subtle Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {FIELD_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              tabIndex={0}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0A2417] border border-econest-forest/15 dark:border-white/10 shadow-2xs hover:shadow-organic hover:border-econest-forest/35 dark:hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh transition-all duration-300 flex flex-col justify-between"
              aria-label={`Principle ${principle.number}: ${principle.title}`}
            >
              <div>
                {/* Number & Indicator */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-xs font-bold text-econest-fresh">
                    PRINCIPLE // {principle.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-econest-forest/20 dark:bg-white/20 group-hover:bg-econest-fresh group-focus:bg-econest-fresh transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-econest-deep dark:text-white mb-2.5 leading-snug group-hover:text-econest-forest dark:group-hover:text-econest-natural transition-colors">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed mb-4">
                  {principle.desc}
                </p>
              </div>

              {/* Bottom: Subtle Connected Observation & Field Note */}
              <div className="pt-4 border-t border-econest-forest/10 dark:border-white/10 space-y-2.5">
                {/* Connected observations tag */}
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-econest-forest/60 dark:text-econest-natural/60">
                  <span>Connected Dimensions:</span>
                  <span className="font-semibold text-econest-forest/85 dark:text-econest-natural/85">
                    {principle.relatedDimensions ? principle.relatedDimensions.join(' · ') : principle.relatedCategory}
                  </span>
                </div>

                {/* Related Field Note Reference */}
                {principle.relatedInsightNumber && (
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-econest-forest/50 dark:text-white/40">
                      RELATED FIELD NOTE
                    </span>
                    <button
                      onClick={() => onOpenInsightByNumber && onOpenInsightByNumber(principle.relatedInsightNumber)}
                      className="inline-flex items-center space-x-1 text-[11px] font-mono font-bold text-econest-forest dark:text-econest-natural hover:text-econest-fresh transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-econest-fresh rounded px-1"
                    >
                      <span>REF #{principle.relatedInsightNumber}</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
