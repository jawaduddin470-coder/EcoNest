import React, { useState } from 'react';
import { BEFORE_AFTER_SYSTEMS } from '../../data/brandData';

/**
 * BeforeAfterSystemVisual
 * Interactive comparative system visual illustrating the structural difference
 * between linear extraction (take-make-waste) and regenerative circular ecosystems.
 */
export default function BeforeAfterSystemVisual({ theme = 'day' }) {
  const [activeMode, setActiveMode] = useState('after'); // Default to regenerative after

  const currentData = BEFORE_AFTER_SYSTEMS[activeMode];
  const isLinear = activeMode === 'before';

  return (
    <section className="relative w-full py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
              06 // SYSTEM METABOLISM
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-900 dark:text-forest-50 tracking-tight leading-tight">
            Linear Extraction vs. Regenerative Circularity
          </h2>
          <p className="mt-4 text-sm sm:text-base text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans">
            The difference between ecological degradation and flourishing is not human presence,
            but the geometry of our industrial systems.
          </p>

          {/* Interactive Toggle Switch */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-forest-800/[0.06] dark:bg-forest-100/[0.04] border border-forest-800/10 dark:border-forest-200/10">
            <button
              onClick={() => setActiveMode('before')}
              className={`min-h-[44px] px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isLinear
                  ? 'bg-amber-900/80 text-amber-50 shadow-sm font-semibold'
                  : 'text-forest-700 dark:text-forest-300 hover:text-forest-900 dark:hover:text-forest-100'
              }`}
              data-cursor="CLICK"
              aria-pressed={isLinear}
            >
              Linear Extraction
            </button>
            <button
              onClick={() => setActiveMode('after')}
              className={`min-h-[44px] px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                !isLinear
                  ? 'bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 shadow-sm font-semibold'
                  : 'text-forest-700 dark:text-forest-300 hover:text-forest-900 dark:hover:text-forest-100'
              }`}
              data-cursor="CLICK"
              aria-pressed={!isLinear}
            >
              Regenerative Circularity
            </button>
          </div>
        </div>

        {/* System Comparison Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive SVG System Schematic */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-forest-900/[0.02] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10 flex flex-col items-center justify-center relative min-h-[380px]">
            <svg
              className="w-full max-w-md h-72 sm:h-80"
              viewBox="0 0 400 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label={isLinear ? "Linear extraction diagram" : "Circular regenerative loop diagram"}
            >
              {isLinear ? (
                // LINEAR SYSTEM: Broken single-direction flow with leakages
                <g className="transition-opacity duration-500">
                  {/* Linear baseline path */}
                  <line
                    x1="60"
                    y1="160"
                    x2="340"
                    y2="160"
                    stroke="#D97706"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    strokeOpacity="0.7"
                  />

                  {/* Waste drop-off paths */}
                  <line x1="150" y1="160" x2="150" y2="250" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                  <line x1="250" y1="160" x2="250" y2="250" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />

                  {/* Extraction Node */}
                  <circle cx="60" cy="160" r="28" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="2" />
                  <text x="60" y="164" textAnchor="middle" fill="#92400E" fontSize="10" fontFamily="monospace" fontWeight="600">EXTRACT</text>

                  {/* Processing Node */}
                  <circle cx="150" cy="160" r="24" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="150" y="164" textAnchor="middle" fill="#92400E" fontSize="9" fontFamily="monospace">REFINE</text>

                  {/* Consumption Node */}
                  <circle cx="250" cy="160" r="24" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="250" y="164" textAnchor="middle" fill="#92400E" fontSize="9" fontFamily="monospace">CONSUME</text>

                  {/* Landfill Node */}
                  <circle cx="340" cy="160" r="28" fill="#EF4444" fillOpacity="0.15" stroke="#EF4444" strokeWidth="2" />
                  <text x="340" y="164" textAnchor="middle" fill="#991B1B" fontSize="10" fontFamily="monospace" fontWeight="600">DISCARD</text>

                  {/* Waste labels */}
                  <text x="150" y="270" textAnchor="middle" fill="#DC2626" fontSize="9" fontFamily="monospace">EMISSIONS</text>
                  <text x="250" y="270" textAnchor="middle" fill="#DC2626" fontSize="9" fontFamily="monospace">EFFLUENT</text>
                  <text x="200" y="70" textAnchor="middle" fill="#B45309" fontSize="11" fontFamily="sans-serif" fontStyle="italic">
                    Continuous Depletion & Landfill Accumulation
                  </text>
                </g>
              ) : (
                // REGENERATIVE SYSTEM: Closed loop circularity with living feeds
                <g className="transition-opacity duration-500">
                  {/* Outer continuous circular loops */}
                  <circle
                    cx="200"
                    cy="160"
                    r="90"
                    stroke="#10B981"
                    strokeWidth="2.5"
                    strokeOpacity="0.6"
                    fill="none"
                  />
                  <circle
                    cx="200"
                    cy="160"
                    r="60"
                    stroke="#34D399"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                    strokeOpacity="0.4"
                    fill="none"
                  />

                  {/* Central Biosphere Core */}
                  <circle cx="200" cy="160" r="32" fill="#047857" fillOpacity="0.15" stroke="#059669" strokeWidth="2" />
                  <text x="200" y="164" textAnchor="middle" fill="#065F46" fontSize="10" fontFamily="monospace" fontWeight="600">
                    BIOSPHERE
                  </text>

                  {/* Top Node: Harvest */}
                  <circle cx="200" cy="70" r="22" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5" />
                  <text x="200" y="74" textAnchor="middle" fill="#065F46" fontSize="8" fontFamily="monospace">SOLAR / RAIN</text>

                  {/* Right Node: Domestic Use */}
                  <circle cx="290" cy="160" r="22" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5" />
                  <text x="290" y="164" textAnchor="middle" fill="#065F46" fontSize="8" fontFamily="monospace">HABIT</text>

                  {/* Bottom Node: Compost & Soil */}
                  <circle cx="200" cy="250" r="22" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5" />
                  <text x="200" y="254" textAnchor="middle" fill="#065F46" fontSize="8" fontFamily="monospace">ORGANICS</text>

                  {/* Left Node: Technical Refill */}
                  <circle cx="110" cy="160" r="22" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5" />
                  <text x="110" y="164" textAnchor="middle" fill="#065F46" fontSize="8" fontFamily="monospace">REFILL</text>

                  {/* Top banner note */}
                  <text x="200" y="30" textAnchor="middle" fill="#047857" fontSize="11" fontFamily="sans-serif" fontStyle="italic">
                    Zero Waste · Endlessly Circulated Nutrients
                  </text>
                </g>
              )}
            </svg>

            {/* Metric pill */}
            <div className="mt-4 inline-flex items-center gap-4 text-xs font-mono px-4 py-2 rounded-full bg-forest-800/[0.04] dark:bg-forest-100/[0.04] border border-forest-800/10 dark:border-forest-200/10">
              <span className="text-forest-700 dark:text-forest-300 font-medium">
                System Cohesion: {currentData.connectivityIndex}
              </span>
              <span className="text-forest-400">·</span>
              <span className="text-forest-600 dark:text-forest-400">
                {currentData.frictionLoss}
              </span>
            </div>
          </div>

          {/* Right: Structural Traits Breakdown */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-forest-900/[0.02] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${
                    isLinear
                      ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20'
                      : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
                  }`}
                >
                  {currentData.badge}
                </span>
                <span className="text-xs font-mono text-forest-500">
                  {currentData.tagline}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 dark:text-forest-50 tracking-tight mb-3">
                {currentData.title}
              </h3>

              <p className="text-sm text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans mb-8">
                {currentData.description}
              </p>

              {/* Traits List */}
              <div className="space-y-3">
                {currentData.traits.map((trait, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-forest-800/[0.03] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="text-xs font-mono font-medium text-forest-800 dark:text-forest-200">
                      {trait.label}
                    </span>
                    <span className="text-xs text-forest-600 dark:text-forest-400">
                      {trait.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-forest-800/10 dark:border-forest-200/10 text-[11px] font-mono text-forest-500 flex items-center justify-between">
              <span>EcoNest Systemic Architecture</span>
              <span>Model Ver. 4.1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
