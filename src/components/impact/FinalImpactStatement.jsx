import React from 'react';
import { ArrowUpRight, ArrowDown, RotateCcw } from 'lucide-react';

/**
 * FinalImpactStatement
 * Culminating editorial manifesto for Phase 4:
 * "Change is not a number. It is a pattern repeated often enough to become part of the system."
 * Features a closed-loop visual sequence (OBSERVE -> ACT -> MEASURE -> REPEAT) and seamless return navigation.
 */
export default function FinalImpactStatement({
  onScrollToLedger = () => {},
  onNavigateHome = () => {},
  onNavigateSolutions = () => {},
  onNavigateProjects = () => {},
  theme = 'day',
}) {
  const loopSequence = [
    { step: '01', title: 'OBSERVE', desc: 'Perceive the hidden resource metabolism' },
    { step: '02', title: 'ACT', desc: 'Disrupt habitual inertia with conscious micro-habits' },
    { step: '03', title: 'MEASURE', desc: 'Reveal how individual action compounds outward' },
    { step: '04', title: 'REPEAT', desc: 'Turn intention into permanent living culture' },
  ];

  return (
    <section className="relative w-full py-24 px-6 sm:px-10 lg:px-16 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
            11 // CULMINATING MANIFESTO
          </span>
        </div>

        {/* Large Editorial Manifesto */}
        <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl text-forest-900 dark:text-forest-50 tracking-tight leading-tight mb-8 font-light">
          “Change is not a number. <br />
          <span className="italic text-forest-600 dark:text-forest-300">
            It is a pattern repeated often enough
          </span>{' '}
          to become part of the system.”
        </blockquote>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-forest-700/85 dark:text-forest-300/85 leading-relaxed font-sans mb-14 font-light">
          Every living biome operates through cycles of gentle, perpetual return.
          When daily habits honor those cycles, you do not simply reduce damage—you
          participate in the regenerative metabolism of life.
        </p>

        {/* Closed-Loop Visual Sequence: OBSERVE -> ACT -> MEASURE -> REPEAT */}
        <div className="mb-14 p-6 sm:p-10 rounded-3xl bg-forest-900/[0.02] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10">
          <div className="text-[10px] font-mono uppercase tracking-widest text-forest-500 mb-6">
            The Closed-Loop Regenerative Cycle
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {loopSequence.map((item, idx) => (
              <div
                key={item.step}
                className="p-4 rounded-2xl bg-forest-800/[0.03] dark:bg-forest-100/[0.03] border border-forest-800/10 dark:border-forest-200/10 flex flex-col items-center justify-between text-center relative group hover:border-forest-500/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-forest-800/[0.04] text-forest-700 dark:text-forest-300 flex items-center justify-center font-mono text-xs font-bold mb-2">
                  {item.step}
                </div>
                <div className="font-mono text-sm uppercase tracking-wider font-bold text-forest-900 dark:text-forest-50 mb-1">
                  {item.title}
                </div>
                <div className="text-[11px] text-forest-600 dark:text-forest-400 leading-snug">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Loop Continues Banner */}
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-forest-700 dark:text-forest-300 px-4 py-1.5 rounded-full bg-forest-500/10 border border-forest-500/20">
            <RotateCcw className="w-3.5 h-3.5 text-forest-500 animate-spin-slow" />
            <span className="font-semibold tracking-wider uppercase">YOUR TRACE CONTINUES</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToLedger}
            className="w-full sm:w-auto min-h-[44px] px-8 py-4 rounded-full bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 text-xs sm:text-sm font-mono uppercase tracking-widest font-semibold hover:bg-forest-800 dark:hover:bg-cream-100 transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            data-cursor="CLICK"
          >
            <span>Recalibrate My Impact</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNavigateProjects}
            className="w-full sm:w-auto min-h-[44px] px-8 py-4 rounded-full bg-econest-forest hover:bg-econest-deep text-white text-xs sm:text-sm font-mono uppercase tracking-widest font-semibold transition-all duration-300 shadow-organic flex items-center justify-center gap-2 cursor-pointer"
            data-cursor="CLICK"
          >
            <span>Proceed to Chapter 05: Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNavigateSolutions}
            className="w-full sm:w-auto min-h-[44px] px-8 py-4 rounded-full bg-forest-800/[0.06] dark:bg-forest-100/[0.04] text-forest-800 dark:text-forest-200 border border-forest-800/20 dark:border-forest-200/20 text-xs sm:text-sm font-mono uppercase tracking-widest font-medium hover:bg-forest-800/[0.1] dark:hover:bg-forest-100/[0.08] transition-all duration-300 cursor-pointer"
            data-cursor="CLICK"
          >
            Revisit Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
