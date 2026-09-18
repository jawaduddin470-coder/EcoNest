import React from 'react';
import { IMPACT_DIMENSIONS } from '../../data/brandData';
import { Layers, Compass } from 'lucide-react';

/**
 * ImpactDimensionsSelector
 * Six Lenses of Tangible Change.
 * Each dimension possesses a unique, living visual language:
 * Carbon (atmospheric particles), Water (flowing pathways), Energy (kinetic movement),
 * Materials (circular loops), Biodiversity (organic growth), Community (connected nodes).
 */
export default function ImpactDimensionsSelector({
  activeDimensionId = 'carbon',
  onSelectDimension = () => {},
  totals = {},
  theme = 'day',
}) {
  const currentDim = IMPACT_DIMENSIONS.find((d) => d.id === activeDimensionId) || IMPACT_DIMENSIONS[0];
  const rawVal = totals[currentDim.id] !== undefined ? totals[currentDim.id] : currentDim.baselineValue;
  const dynamicVal = typeof rawVal === 'number' && rawVal % 1 !== 0 ? rawVal.toFixed(1) : rawVal;

  return (
    <section className="relative py-14 md:py-16 px-6 sm:px-10 lg:px-16 text-left">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-forest-800/10 dark:border-forest-200/10 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase font-mono tracking-widest text-forest-600 dark:text-forest-400">
              <Compass className="w-3.5 h-3.5 text-forest-500" />
              <span>03 // SYSTEMIC LENSES &middot; ENVIRONMENTAL PATHWAYS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-forest-900 dark:text-forest-50 tracking-tight">
              Six Lenses of <span className="italic font-normal text-forest-600 dark:text-forest-300">Tangible Change</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-forest-700/80 dark:text-forest-300/80 font-sans leading-relaxed max-w-md">
            Select a dimension to inspect its specific environmental pathway, measurable telemetry, and biological feedback loops.
          </p>
        </div>

        {/* Horizontal Radial Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
          {IMPACT_DIMENSIONS.map((dim) => {
            const isSelected = dim.id === currentDim.id;
            return (
              <button
                key={dim.id}
                onClick={() => onSelectDimension(dim.id)}
                data-cursor="SELECT"
                className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs uppercase font-mono tracking-wider transition-all duration-300 flex items-center space-x-2.5 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 shadow-md ring-2 ring-forest-500/30 font-semibold'
                    : 'bg-forest-800/[0.04] dark:bg-forest-100/[0.03] text-forest-700 dark:text-forest-300 border border-forest-800/10 dark:border-forest-200/10 hover:bg-forest-800/[0.08]'
                }`}
                aria-pressed={isSelected}
              >
                <span className="text-sm">{dim.symbol}</span>
                <span>{dim.name}</span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: isSelected ? '#FFFFFF' : dim.accent }}
                />
              </button>
            );
          })}
        </div>

        {/* Selected Dimension Spotlight Card & Dynamic SVG Visual Lens */}
        <div className="p-6 sm:p-10 rounded-3xl bg-forest-900/[0.02] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Narrative & Dimensional Insights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1.5 border-b border-forest-800/10 dark:border-forest-200/10 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-widest text-forest-500">
                  Dimension 0{currentDim.number} // Telemetry Lens
                </span>
                <span className="text-lg">{currentDim.symbol}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-forest-900 dark:text-forest-50">
                {currentDim.headline}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-forest-700/85 dark:text-forest-300/85 font-light leading-relaxed">
              {currentDim.description}
            </p>

            {/* Pathway Flow Diagram */}
            <div className="p-4 rounded-2xl bg-forest-800/[0.03] dark:bg-forest-100/[0.03] border border-forest-800/10 space-y-2">
              <div className="text-[10px] font-mono uppercase font-bold text-forest-600 dark:text-forest-400 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Environmental Feedback Pathway</span>
              </div>
              <p className="text-xs text-forest-900 dark:text-forest-100 font-medium leading-relaxed font-mono">
                {currentDim.pathway}
              </p>
            </div>

            {/* Current Dimension Value Card */}
            <div className="flex items-baseline justify-between p-4 rounded-2xl border border-forest-800/10 dark:border-forest-200/10 bg-cream-50/50 dark:bg-forest-900/30">
              <div>
                <span className="text-[10px] font-mono uppercase text-forest-500 block">
                  Modelled Output ({currentDim.name})
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-forest-900 dark:text-forest-50">
                  {dynamicVal}
                </span>
                <span className="text-xs text-forest-600 dark:text-forest-400 ml-1.5 font-mono">
                  {currentDim.unit}
                </span>
              </div>
              <span className="text-[10px] font-mono text-forest-500 italic">
                {currentDim.metricSuffix}
              </span>
            </div>
          </div>

          {/* Right: Bespoke Dimension SVG Visual Lens (7 cols) */}
          <div
            data-cursor="EXPLORE"
            className="lg:col-span-7 relative h-72 sm:h-88 w-full bg-forest-900/[0.02] dark:bg-forest-100/[0.02] rounded-2xl p-4 overflow-hidden border border-forest-800/10 dark:border-forest-200/10 flex items-center justify-center select-none"
          >
            {currentDim.id === 'carbon' && (
              <svg viewBox="0 0 500 240" className="w-full h-full" fill="none">
                <path d="M 40 180 C 140 180, 180 80, 260 80 C 340 80, 380 180, 460 180" stroke="#3D8B57" strokeWidth="2.5" strokeDasharray="4 6" opacity="0.6" />
                <path d="M 40 130 C 120 130, 200 40, 300 40 C 400 40, 440 130, 460 130" stroke="#489D63" strokeWidth="2" opacity="0.4" />
                <ellipse cx="250" cy="140" rx="140" ry="70" stroke="#78B978" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />

                <circle r="4" fill="#3D8B57">
                  <animateMotion path="M 40 180 C 140 180, 180 80, 260 80 C 340 80, 380 180, 460 180" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="#BFD8C2">
                  <animateMotion path="M 40 130 C 120 130, 200 40, 300 40 C 400 40, 440 130, 460 130" dur="5s" repeatCount="indefinite" />
                </circle>

                <circle cx="250" cy="80" r="28" fill="#0B3D2E" stroke="#3D8B57" strokeWidth="2" />
                <text x="250" y="85" textAnchor="middle" fontSize="16">🍃</text>
                <text x="250" y="125" textAnchor="middle" fill="#3D8B57" fontSize="10" fontWeight="bold" fontFamily="monospace">Atmospheric Drawdown</text>
              </svg>
            )}

            {currentDim.id === 'water' && (
              <svg viewBox="0 0 500 240" className="w-full h-full" fill="none">
                <path d="M 50 60 C 150 60, 180 140, 260 140 C 340 140, 380 80, 450 80" stroke="#4BAFA1" strokeWidth="3" opacity="0.7" />
                <path d="M 50 110 C 130 110, 210 190, 300 190 C 390 190, 420 120, 450 120" stroke="#74D0C0" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />

                <circle r="4" fill="#74D0C0">
                  <animateMotion path="M 50 60 C 150 60, 180 140, 260 140 C 340 140, 380 80, 450 80" dur="4.2s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="#E0F2FE">
                  <animateMotion path="M 50 110 C 130 110, 210 190, 300 190 C 390 190, 420 120, 450 120" dur="5s" repeatCount="indefinite" />
                </circle>

                <circle cx="260" cy="140" r="30" fill="#061D1A" stroke="#4BAFA1" strokeWidth="2" />
                <text x="260" y="145" textAnchor="middle" fontSize="16">💧</text>
                <text x="260" y="190" textAnchor="middle" fill="#4BAFA1" fontSize="10" fontWeight="bold" fontFamily="monospace">Perennial Aquifer Flow</text>
              </svg>
            )}

            {currentDim.id === 'energy' && (
              <svg viewBox="0 0 500 240" className="w-full h-full" fill="none">
                <line x1="100" y1="120" x2="400" y2="120" stroke="#D4B038" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.7" />
                <ellipse cx="250" cy="120" rx="130" ry="60" stroke="#E8DE82" strokeWidth="1" opacity="0.4" />

                <circle r="4.5" fill="#E8DE82">
                  <animateMotion path="M 100 120 L 400 120" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="4.5" fill="#FFF490">
                  <animateMotion path="M 400 120 L 100 120" dur="3.5s" repeatCount="indefinite" />
                </circle>

                <circle cx="250" cy="120" r="30" fill="#242105" stroke="#D4B038" strokeWidth="2" />
                <text x="250" y="125" textAnchor="middle" fontSize="16">⚡</text>
                <text x="250" y="170" textAnchor="middle" fill="#D4B038" fontSize="10" fontWeight="bold" fontFamily="monospace">Microgrid Kinetic Yield</text>
              </svg>
            )}

            {currentDim.id === 'materials' && (
              <svg viewBox="0 0 500 240" className="w-full h-full" fill="none">
                <circle cx="180" cy="120" r="60" stroke="#38A169" strokeWidth="2.5" strokeDasharray="5 5" opacity="0.7" />
                <circle cx="320" cy="120" r="60" stroke="#489D63" strokeWidth="2.5" opacity="0.7" />

                <circle r="4" fill="#A8E6CF">
                  <animateMotion path="M 180 60 A 60 60 0 1 1 179.9 60" dur="4.8s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="#FFFFFF">
                  <animateMotion path="M 320 60 A 60 60 0 1 1 319.9 60" dur="4.2s" repeatCount="indefinite" />
                </circle>

                <circle cx="250" cy="120" r="28" fill="#072013" stroke="#38A169" strokeWidth="2" />
                <text x="250" y="125" textAnchor="middle" fontSize="16">♻️</text>
                <text x="250" y="170" textAnchor="middle" fill="#38A169" fontSize="10" fontWeight="bold" fontFamily="monospace">Closed-Loop Recovery</text>
              </svg>
            )}

            {currentDim.id === 'biodiversity' && (
              <svg viewBox="0 0 500 240" className="w-full h-full" fill="none">
                <path d="M 60 160 Q 150 110, 250 120 T 440 80" stroke="#68D391" strokeWidth="2.5" opacity="0.7" />
                <path d="M 160 170 Q 250 70, 340 160" stroke="#489D63" strokeWidth="1.8" strokeDasharray="3 4" opacity="0.5" />

                <circle r="4" fill="#9AE6B4">
                  <animateMotion path="M 60 160 Q 150 110, 250 120 T 440 80" dur="4.5s" repeatCount="indefinite" />
                </circle>

                <circle cx="250" cy="120" r="30" fill="#092617" stroke="#68D391" strokeWidth="2" />
                <text x="250" y="125" textAnchor="middle" fontSize="16">🌱</text>
                <text x="250" y="170" textAnchor="middle" fill="#68D391" fontSize="10" fontWeight="bold" fontFamily="monospace">Habitat Network</text>
              </svg>
            )}

            {currentDim.id === 'community' && (
              <svg viewBox="0 0 500 240" className="w-full h-full" fill="none">
                <polygon points="150,80 350,80 400,160 250,200 100,160" stroke="#52B788" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                <circle cx="250" cy="140" r="32" fill="#0B3D2E" stroke="#52B788" strokeWidth="2.5" />
                <text x="250" y="145" textAnchor="middle" fontSize="16">👥</text>
                <text x="250" y="195" textAnchor="middle" fill="#52B788" fontSize="10" fontWeight="bold" fontFamily="monospace">Shared Stewardship</text>

                <circle cx="150" cy="80" r="14" fill="#0B2E24" stroke="#74D0C0" strokeWidth="1.5" />
                <circle cx="350" cy="80" r="14" fill="#0B2E24" stroke="#74D0C0" strokeWidth="1.5" />
                <circle cx="400" cy="160" r="14" fill="#0B2E24" stroke="#74D0C0" strokeWidth="1.5" />
                <circle cx="100" cy="160" r="14" fill="#0B2E24" stroke="#74D0C0" strokeWidth="1.5" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
