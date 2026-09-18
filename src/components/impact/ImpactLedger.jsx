import React, { useState } from 'react';
import { Sparkles, Check, Plus, ArrowRight } from 'lucide-react';
import { LEDGER_ACTIONS_DATABASE } from '../../data/brandData';

/**
 * ImpactLedger
 * Living action ledger — the engine of the Impact page.
 * Toggling an intervention visually propagates changes through the Living Impact Field,
 * the quantitative counters, and the persistent living trace.
 */
export default function ImpactLedger({
  selectedActionIds = [],
  onToggleAction = () => {},
  theme = 'day',
}) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [recentlyToggledId, setRecentlyToggledId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Interventions' },
    { id: 'mobility', label: 'Mobility' },
    { id: 'energy', label: 'Energy' },
    { id: 'water', label: 'Water' },
    { id: 'materials', label: 'Materials' },
    { id: 'food', label: 'Food' },
  ];

  const filteredActions =
    activeCategoryFilter === 'all'
      ? LEDGER_ACTIONS_DATABASE
      : LEDGER_ACTIONS_DATABASE.filter((a) => a.category === activeCategoryFilter);

  const activeCount = selectedActionIds.length;

  const handleActionClick = (id) => {
    onToggleAction(id);
    setRecentlyToggledId(id);
    setTimeout(() => {
      setRecentlyToggledId((prev) => (prev === id ? null : prev));
    }, 1500);
  };

  return (
    <section className="relative w-full py-16 px-6 sm:px-10 lg:px-16 bg-forest-900/[0.015] dark:bg-forest-100/[0.01] border-t border-b border-forest-800/10 dark:border-forest-200/10 text-left">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
                07 // LIVING INTERVENTION ENGINE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-900 dark:text-forest-50 tracking-tight leading-tight">
              Calibrate Everyday Interventions
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-forest-600 dark:text-forest-400">
              Living Baseline:
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{activeCount} Active</span>
              <span className="text-forest-400 font-normal">/ {LEDGER_ACTIONS_DATABASE.length}</span>
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-forest-800 text-cream-50 dark:bg-forest-200 dark:text-forest-950 font-semibold shadow-xs'
                    : 'bg-forest-800/[0.04] dark:bg-forest-100/[0.03] text-forest-700 dark:text-forest-300 hover:bg-forest-800/[0.08] dark:hover:bg-forest-100/[0.08]'
                }`}
                data-cursor="CLICK"
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Action Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredActions.map((act) => {
            const isActive = selectedActionIds.includes(act.id);
            const isRecent = recentlyToggledId === act.id;

            return (
              <div
                key={act.id}
                onClick={() => handleActionClick(act.id)}
                className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group select-none ${
                  isActive
                    ? 'bg-forest-800/[0.06] dark:bg-forest-100/[0.04] border-forest-600/50 dark:border-forest-400/50 shadow-sm ring-1 ring-forest-500/20'
                    : 'bg-cream-50/40 dark:bg-forest-900/20 border-forest-800/10 dark:border-forest-200/10 hover:border-forest-500/30 opacity-75 hover:opacity-100'
                }`}
                data-cursor="TOGGLE"
                role="checkbox"
                aria-checked={isActive}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleActionClick(act.id);
                  }
                }}
              >
                {/* Recent propagation pulse badge */}
                {isRecent && (
                  <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-cream-50 text-[9px] font-mono tracking-wider animate-bounce flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>FIELD PROPAGATED</span>
                  </div>
                )}

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-forest-500/10 text-forest-700 dark:text-forest-300 border border-forest-500/20 font-medium">
                        {act.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono text-forest-500">
                        {act.frequency}
                      </span>
                    </div>

                    {/* Active State Pill */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono tracking-wider uppercase font-semibold ${
                          isActive ? 'text-forest-800 dark:text-forest-200' : 'text-forest-400'
                        }`}
                      >
                        {isActive ? 'ACTIVE' : 'OFF'}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200 ${
                          isActive
                            ? 'bg-forest-800 border-forest-800 text-cream-50 dark:bg-forest-200 dark:border-forest-200 dark:text-forest-950'
                            : 'border-forest-800/30 dark:border-forest-200/30 group-hover:border-forest-500'
                        }`}
                      >
                        {isActive ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-forest-400 group-hover:text-forest-600" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Title & Action */}
                  <h3 className="font-serif text-lg sm:text-xl text-forest-900 dark:text-forest-50 tracking-tight mb-1">
                    {act.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-800/90 dark:text-forest-200/90 font-medium mb-1.5">
                    {act.action}
                  </p>
                  <p className="text-xs text-forest-600/80 dark:text-forest-400/80 leading-relaxed font-light">
                    {act.systemEffect}
                  </p>
                </div>

                {/* Bottom Impact Vector Badges */}
                <div className="mt-5 pt-3.5 border-t border-forest-800/10 dark:border-forest-200/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                  <div className="flex items-center gap-3 text-forest-600 dark:text-forest-400">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      +{act.carbon} kg CO₂e
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      +{act.water} L
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      +{act.energy} kWh
                    </span>
                  </div>

                  <span className="text-[10px] text-forest-500 italic">
                    {isActive ? 'Live in field' : 'Click to activate'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
