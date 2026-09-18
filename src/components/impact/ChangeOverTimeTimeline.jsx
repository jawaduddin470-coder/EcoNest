import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';

/**
 * ChangeOverTimeTimeline
 * Interactive chronological continuum illustrating the grounded trajectory of conscious habits:
 * NOW -> 30 DAYS -> 6 MONTHS -> 1 YEAR -> 5 YEARS.
 * Features grounded narrative descriptions without speculative future guarantees.
 */
export default function ChangeOverTimeTimeline({ theme = 'day' }) {
  const [activeHorizonId, setActiveHorizonId] = useState('30days');

  const horizons = [
    {
      id: 'now',
      step: '01',
      label: 'Now',
      duration: 'Day 1',
      headline: 'One intentional change begins.',
      subtext: 'A deliberate micro-decision disrupts habitual inertia. Personal vigilance replaces automatic default consumption.',
      multiplier: '1x baseline',
      carbonCumulative: '1.8 kg CO₂e',
      waterCumulative: '45 Liters',
      energyCumulative: '3.4 kWh',
      stateName: 'Germination Point',
      visualIcon: '🌱',
    },
    {
      id: '30days',
      step: '02',
      label: '30 Days',
      duration: '1 Month',
      headline: 'A repeated choice becomes routine.',
      subtext: 'Repetition establishes domestic automaticity. What began as conscious effort becomes the default standard of the household.',
      multiplier: '30x accumulation',
      carbonCumulative: '54 kg CO₂e',
      waterCumulative: '1,350 Liters',
      energyCumulative: '102 kWh',
      stateName: 'Domestic Habit',
      visualIcon: '🌿',
    },
    {
      id: '6months',
      step: '03',
      label: '6 Months',
      duration: 'Half Year',
      headline: 'Multiple habits begin interacting.',
      subtext: 'Diet, mobility, and energy choices synchronize. Neighbors observe routines and begin sharing tool libraries and compost hubs.',
      multiplier: '180x convergence',
      carbonCumulative: '324 kg CO₂e',
      waterCumulative: '8,100 Liters',
      energyCumulative: '612 kWh',
      stateName: 'Micro-Collective',
      visualIcon: '🌾',
    },
    {
      id: '1year',
      step: '04',
      label: '1 Year',
      duration: '12 Months',
      headline: 'Household behavior becomes systemic.',
      subtext: 'Aggregate neighborhood data justifies municipal attention: dedicated bicycle corridors and community solar battery dispatch.',
      multiplier: '365x institutional',
      carbonCumulative: '657 kg CO₂e',
      waterCumulative: '16,425 Liters',
      energyCumulative: '1,241 kWh',
      stateName: 'Municipal Corridor',
      visualIcon: '🌳',
    },
    {
      id: '5years',
      step: '05',
      label: '5 Years',
      duration: '5 Years',
      headline: 'Community-scale patterns become visible.',
      subtext: 'Over years of shared consistency, local aquifers record stabilized water tables, canopy shade reduces urban heat islands, and topsoil mycorrhizal networks deepen.',
      multiplier: '1,825x biospheric',
      carbonCumulative: '3.28 tons CO₂e',
      waterCumulative: '82,125 Liters',
      energyCumulative: '6.2 MWh',
      stateName: 'Ecological Return',
      visualIcon: '🌲',
    },
  ];

  const currentIndex = horizons.findIndex((h) => h.id === activeHorizonId);
  const activeHorizon = horizons[currentIndex >= 0 ? currentIndex : 0];

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && currentIndex < horizons.length - 1) {
      setActiveHorizonId(horizons[currentIndex + 1].id);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      setActiveHorizonId(horizons[currentIndex - 1].id);
    }
  };

  return (
    <section
      className="relative w-full py-16 px-6 sm:px-10 lg:px-16 bg-forest-900/[0.015] dark:bg-forest-100/[0.01] border-t border-b border-forest-800/10 dark:border-forest-200/10 text-left"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Impact timeline navigation. Use arrow keys to navigate time horizons."
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
                05 // TEMPORAL CONTINUUM
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-900 dark:text-forest-50 tracking-tight leading-tight">
              Change Over Time
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans">
            Ecology moves across rhythmic horizons. Explore how deliberate repetition shifts
            from isolated intention to visible community-scale biospheric patterns.
          </p>
        </div>

        {/* Horizontal Timeline Track */}
        <div className="relative mb-12 pt-4 pb-4">
          {/* Base Track Line */}
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-forest-800/10 dark:border-forest-200/10 -translate-y-1/2" />

          {/* Active Fill Line */}
          <div
            className="absolute top-1/2 left-6 h-0.5 bg-forest-600 dark:bg-forest-400 -translate-y-1/2 transition-all duration-500 ease-out"
            style={{
              width: `${(currentIndex / (horizons.length - 1)) * 90}%`,
            }}
          />

          {/* Timeline Clickable Nodes */}
          <div className="relative z-10 flex items-center justify-between">
            {horizons.map((horizon, index) => {
              const isActive = horizon.id === activeHorizonId;
              const isPassed = index <= currentIndex;

              return (
                <button
                  key={horizon.id}
                  onClick={() => setActiveHorizonId(horizon.id)}
                  className="group flex flex-col items-center focus:outline-none cursor-pointer min-h-[44px] justify-center"
                  data-cursor="CLICK"
                  aria-pressed={isActive}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
                      isActive
                        ? 'bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 border-forest-700 dark:border-forest-300 scale-110 shadow-md ring-2 ring-forest-500/30'
                        : isPassed
                        ? 'bg-forest-600 text-cream-50 dark:bg-forest-400 dark:text-forest-950 border-transparent'
                        : 'bg-cream-100 dark:bg-forest-900 text-forest-600 dark:text-forest-400 border-forest-800/20 dark:border-forest-200/20 group-hover:border-forest-500'
                    }`}
                  >
                    <span className="text-xs font-mono font-medium">
                      {horizon.visualIcon}
                    </span>
                  </div>

                  <span
                    className={`mt-2.5 text-xs sm:text-sm font-mono tracking-wider transition-colors ${
                      isActive
                        ? 'font-bold text-forest-900 dark:text-forest-50'
                        : 'text-forest-600/70 dark:text-forest-400/70 group-hover:text-forest-800 dark:group-hover:text-forest-200'
                    }`}
                  >
                    {horizon.label}
                  </span>

                  <span className="text-[10px] text-forest-500 font-mono hidden sm:block">
                    {horizon.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Horizon Detail Showcase */}
        <div className="p-6 sm:p-10 rounded-3xl bg-forest-900/[0.03] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Narrative Context */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-forest-500/10 text-forest-700 dark:text-forest-300 border border-forest-500/20">
                  Step {activeHorizon.step} &middot; {activeHorizon.duration}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-forest-500">
                  State: {activeHorizon.stateName}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 dark:text-forest-50 tracking-tight leading-snug">
                {activeHorizon.headline}
              </h3>

              <p className="text-sm sm:text-base text-forest-700/90 dark:text-forest-300/90 leading-relaxed font-sans">
                {activeHorizon.subtext}
              </p>

              <div className="pt-3 flex items-center gap-4 text-xs font-mono text-forest-500">
                <span>Multiplication Factor: {activeHorizon.multiplier}</span>
                <span>&middot;</span>
                <span>Non-speculative timeline model</span>
              </div>
            </div>

            {/* Cumulative Metrics Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-forest-800/[0.04] dark:bg-forest-100/[0.03] border border-forest-800/10 dark:border-forest-200/10 space-y-3.5">
              <div className="text-xs font-mono uppercase tracking-widest text-forest-500 border-b border-forest-800/10 dark:border-forest-200/10 pb-2 flex items-center justify-between">
                <span>Modelled Cumulative Offset</span>
                <span>{activeHorizon.duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-sans text-forest-700 dark:text-forest-300">
                  Atmospheric CO₂e Avoided
                </span>
                <span className="font-serif text-lg font-light text-forest-900 dark:text-forest-50 tabular-nums">
                  {activeHorizon.carbonCumulative}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-sans text-forest-700 dark:text-forest-300">
                  Hydrology Conserved
                </span>
                <span className="font-serif text-lg font-light text-forest-900 dark:text-forest-50 tabular-nums">
                  {activeHorizon.waterCumulative}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-sans text-forest-700 dark:text-forest-300">
                  Clean Renewable Yield
                </span>
                <span className="font-serif text-lg font-light text-forest-900 dark:text-forest-50 tabular-nums">
                  {activeHorizon.energyCumulative}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
