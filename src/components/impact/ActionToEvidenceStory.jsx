import React from 'react';
import { DATA_STORYTELLING_STAGES } from '../../data/brandData';

/**
 * ActionToEvidenceStory
 * Three-stage philosophical narrative linking sensory observation, micro-action,
 * and scientific measurement into a unified cycle of ecological awareness.
 */
export default function ActionToEvidenceStory({ theme = 'day' }) {
  return (
    <section className="relative w-full py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
              10 // NARRATIVE SYNTHESIS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-900 dark:text-forest-50 tracking-tight leading-tight">
            From Observation to Evidence
          </h2>
          <p className="mt-4 text-sm sm:text-base text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans">
            Measurement is not an audit. It is an instrument of perception designed to prove
            that individual intention is continuously woven into planetary reality.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DATA_STORYTELLING_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="p-8 rounded-3xl bg-forest-900/[0.02] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10 flex flex-col justify-between hover:border-forest-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl text-forest-800/20 dark:text-forest-200/20 font-light">
                    {stage.number}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-forest-500/10 text-forest-700 dark:text-forest-300 border border-forest-500/20">
                    {stage.label}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-forest-900 dark:text-forest-50 tracking-tight mb-4">
                  {stage.title}
                </h3>

                <p className="text-sm text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans">
                  {stage.statement}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-forest-800/10 dark:border-forest-200/10 text-[11px] font-mono text-forest-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500" />
                <span>Feedback Continuum Stage {stage.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
