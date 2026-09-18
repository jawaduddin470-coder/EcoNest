import React from 'react';
import { ECOLOGICAL_SYSTEMS } from '../../data/brandData';
import { MapPin, Info } from 'lucide-react';

export default function EcologicalSystemsPanel({ activeSystemId, onSelectSystem }) {
  const currentSystem = ECOLOGICAL_SYSTEMS.find(s => s.id === activeSystemId) || ECOLOGICAL_SYSTEMS[0];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-6">
      {/* 4 Ecological Systems Selector Dock */}
      <div
        role="tablist"
        aria-label="Ecological system selector"
        className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-econest-soft/60 border border-econest-forest/15 backdrop-blur-md shadow-sm"
      >
        {ECOLOGICAL_SYSTEMS.map((system) => {
          const isActive = system.id === currentSystem.id;
          return (
            <button
              key={system.id}
              role="tab"
              aria-selected={isActive}
              aria-label={`View ${system.name} ecological system`}
              onClick={() => onSelectSystem(system.id)}
              className={`min-h-[44px] px-5 py-2 rounded-xl text-xs uppercase font-medium tracking-wider transition-all duration-300 flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh focus-visible:ring-offset-1 ${
                isActive
                  ? 'bg-econest-forest text-white shadow-organic scale-[1.02] ring-2 ring-econest-forest/40'
                  : 'text-econest-forest/80 hover:text-econest-deep hover:bg-white/60 hover:scale-[1.01]'
              }`}
            >
              <span className="text-base" aria-hidden="true">{system.symbol}</span>
              <span className="font-semibold">{system.name}</span>
            </button>
          );
        })}
      </div>

      {/* Information Card — smooth cross-fade on system switch */}
      <div
        key={currentSystem.id}
        className="w-full editorial-card hover:transform-none rounded-3xl p-6 sm:p-8 transition-all duration-500 animate-fade-in"
      >

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          
          {/* Left Column: Title, Quote, Copy */}
          <div className="space-y-3 md:max-w-md">
            <div className="flex items-center space-x-2 text-[11px] uppercase font-semibold tracking-brand text-econest-primary">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentSystem.regionLabel}</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-econest-deep dark:text-white">
                {currentSystem.name}
              </h3>
              <p className="text-sm font-serif italic text-econest-forest dark:text-econest-natural">
                "{currentSystem.tagline}"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-econest-forest/80 dark:text-[#BFD8C2] font-light leading-relaxed pt-1">
              {currentSystem.description}
            </p>
          </div>

          {/* Right Column: 2 Metrics + Illustrative Disclosure */}
          <div className="flex flex-col space-y-4 md:min-w-[280px]">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-econest-soft/50 dark:bg-white/5 border border-econest-forest/10 text-center">
                <div className="text-xl sm:text-2xl font-serif font-bold text-econest-deep dark:text-white">
                  {currentSystem.primaryMetric.value}
                </div>
                <div className="text-[10px] text-econest-forest dark:text-econest-natural font-semibold uppercase tracking-wider pt-0.5">
                  {currentSystem.primaryMetric.unit}
                </div>
                <div className="text-[10px] text-econest-forest/70 dark:text-econest-natural/70 font-light pt-1">
                  {currentSystem.primaryMetric.label}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-econest-soft/50 dark:bg-white/5 border border-econest-forest/10 text-center">
                <div className="text-xl sm:text-2xl font-serif font-bold text-econest-deep dark:text-white">
                  {currentSystem.secondaryMetric.value}
                </div>
                <div className="text-[10px] text-econest-forest dark:text-econest-natural font-semibold uppercase tracking-wider pt-0.5">
                  {currentSystem.secondaryMetric.unit}
                </div>
                <div className="text-[10px] text-econest-forest/70 dark:text-econest-natural/70 font-light pt-1">
                  {currentSystem.secondaryMetric.label}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-[10px] text-econest-forest/60 dark:text-econest-natural/60 bg-econest-soft/30 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-econest-forest/10">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Illustrative EcoNest platform model &middot; Demonstration telemetry</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
