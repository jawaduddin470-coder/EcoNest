import React from 'react';
import { IMPACT_DIMENSIONS } from '../../data/brandData';

/**
 * ImpactBuilderProfile
 * Multidimensional ecological profile matrix.
 * Explicitly rejects gamified scores, leaderboard badges, and arbitrary "tier" ratings
 * in favor of qualitative biospheric states that reflect true ecological complexity.
 */
export default function ImpactBuilderProfile({
  totals = {},
  selectedActionIds = [],
  onApplyPreset = () => {},
  theme = 'day',
}) {
  const count = selectedActionIds.length;

  // Derive meaningful ecological states instead of game scores
  const getEcologicalState = (dimId) => {
    switch (dimId) {
      case 'carbon':
        return {
          stateName: count >= 4 ? 'Active Drawdown' : count >= 2 ? 'Mitigation Steady' : 'Baseline Trace',
          statusColor: '#3D8B57',
          displayValue: `${(totals.carbon || 1.8).toFixed(1)} kg CO₂e / day`,
          description: 'Mitigating fossil combustion while expanding biological canopy carbon fixation.',
        };
      case 'water':
        return {
          stateName: count >= 3 ? 'Closed-Loop Hydrology' : 'Partial Greywater Flow',
          statusColor: '#4BAFA1',
          displayValue: `${Math.round(totals.water || 45)} Liters / day`,
          description: 'Recycling domestic drainage into native sub-surface aquifer infiltration.',
        };
      case 'energy':
        return {
          stateName: count >= 4 ? 'Solar Microgrid Surplus' : count >= 2 ? 'Peak Displaced' : 'Standard Grid',
          statusColor: '#D4B038',
          displayValue: `${(totals.energy || 3.4).toFixed(1)} kWh / day`,
          description: 'Midday solar generation eliminating thermal peaker plant requirements.',
        };
      case 'materials':
        return {
          stateName: count >= 3 ? 'Zero-Landfill Circularity' : 'Recycling Diverted',
          statusColor: '#38A169',
          displayValue: `${Math.round((totals.materials || 2) * 12)} items / mo`,
          description: 'Closed-loop refill deposit loops bypassing linear packaging incineration.',
        };
      case 'biodiversity':
        return {
          stateName: count >= 4 ? 'Canopy & Fungal Buffer' : 'Pollinator Safe',
          statusColor: '#68D391',
          displayValue: `${Math.min(5, (2.2 + count * 0.4)).toFixed(1)}x Habitat Multiplier`,
          description: 'Nurturing no-till topsoil mycorrhizae and contiguous floral corridors.',
        };
      case 'community':
        return {
          stateName: count >= 5 ? 'Regional Co-op Active' : count >= 2 ? 'Neighborhood Node' : 'Emerging Link',
          statusColor: '#52B788',
          displayValue: `${count * 9 || 18} Connected Stewards`,
          description: 'Shared tool libraries, decentralized battery co-ops, and local food networks.',
        };
      default:
        return {
          stateName: 'Equilibrium Baseline',
          statusColor: '#4E9B6E',
          displayValue: 'Synchronized',
          description: 'Active biospheric feedback loop.',
        };
    }
  };

  const presets = [
    {
      id: 'urban',
      label: 'Urban Transit & Microgrid',
      actionIds: ['act-bike', 'act-transit', 'act-efficiency', 'act-refill'],
    },
    {
      id: 'household',
      label: 'Closed-Loop Domestic',
      actionIds: ['act-solar', 'act-greywater', 'act-refill', 'act-localfood'],
    },
    {
      id: 'steward',
      label: 'Full Regenerative Steward',
      actionIds: [
        'act-bike',
        'act-transit',
        'act-solar',
        'act-efficiency',
        'act-greywater',
        'act-rainwater',
        'act-refill',
        'act-repair',
        'act-localfood',
        'act-compost',
      ],
    },
  ];

  return (
    <section className="relative w-full py-16 px-6 sm:px-10 lg:px-16 overflow-hidden text-left">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
                08 // MULTIDIMENSIONAL MATRIX
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-900 dark:text-forest-50 tracking-tight leading-tight">
              An Ecological Matrix, <br />
              <span className="italic font-light text-forest-600 dark:text-forest-300">
                Not a Gamified Score.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans">
            Nature does not produce an abstract "score". An ecosystem can achieve zero carbon
            while still depleting its watershed or destabilizing pollinators. EcoNest models
            all six interdependent dimensions simultaneously.
          </p>
        </div>

        {/* Preset Archetypes Bar */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-forest-500 mr-2">
            Load Archetype Profile:
          </span>
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onApplyPreset(preset.actionIds)}
              className="min-h-[44px] px-4 py-2 rounded-full text-xs font-mono bg-forest-800/[0.04] dark:bg-forest-100/[0.03] text-forest-800 dark:text-forest-200 border border-forest-800/10 dark:border-forest-200/10 hover:border-forest-500 hover:bg-forest-500/10 transition-all duration-200 cursor-pointer"
              data-cursor="CLICK"
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* 6-Dimensional Ecological State Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {IMPACT_DIMENSIONS.map((dim) => {
            const state = getEcologicalState(dim.id);

            return (
              <div
                key={dim.id}
                className="p-6 rounded-2xl bg-forest-900/[0.02] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10 flex flex-col justify-between hover:border-forest-500/30 transition-all duration-300"
              >
                <div>
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{dim.symbol}</span>
                      <span className="font-serif text-lg text-forest-900 dark:text-forest-50 font-medium">
                        {dim.name}
                      </span>
                    </div>

                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wide uppercase font-semibold border"
                      style={{
                        backgroundColor: `${state.statusColor}15`,
                        borderColor: `${state.statusColor}30`,
                        color: state.statusColor,
                      }}
                    >
                      {state.stateName}
                    </span>
                  </div>

                  {/* Dimension Headline */}
                  <div className="font-mono text-sm font-semibold text-forest-800 dark:text-forest-200 mb-2">
                    {state.displayValue}
                  </div>

                  <p className="text-xs text-forest-600/90 dark:text-forest-400/90 leading-relaxed font-light">
                    {state.description}
                  </p>
                </div>

                {/* Ecological Indicator Bottom Row */}
                <div className="mt-5 pt-3 border-t border-forest-800/10 dark:border-forest-200/10 flex items-center justify-between text-[11px] font-mono text-forest-500">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: state.statusColor }}
                    />
                    <span>Living Biospheric State</span>
                  </span>
                  <span>{dim.headline.split('&')[0].trim()}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Profile Non-Commodified Disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-forest-800/[0.03] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-forest-700 dark:text-forest-300 font-semibold">
              ILLUSTRATIVE ECOLOGICAL PROFILE &middot; NON-COMMODIFIED INSTRUMENT
            </span>
          </div>
          <span className="text-xs font-mono text-forest-500">
            Active Baseline: {selectedActionIds.length} Patterns Evaluated
          </span>
        </div>
      </div>
    </section>
  );
}
