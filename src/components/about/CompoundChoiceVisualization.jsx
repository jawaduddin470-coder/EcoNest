import React, { useState } from 'react';
import { COMPOUND_ACTIONS } from '../../data/brandData';
import { Sparkles, CheckCircle2, ShieldAlert, ArrowRight, ArrowDown, TrendingUp } from 'lucide-react';

const SCALE_STAGES = [
  {
    level: "01",
    name: "You",
    multiplier: "1x",
    category: "Personal Action",
    key: "you",
    subtext: "Personal baseline choice"
  },
  {
    level: "02",
    name: "Household",
    multiplier: "4x",
    category: "Domestic Habit",
    key: "household",
    subtext: "Shared domestic routine"
  },
  {
    level: "03",
    name: "Community",
    multiplier: "45x",
    category: "Local Network",
    key: "community",
    subtext: "Neighborhood tipping point"
  },
  {
    level: "04",
    name: "City",
    multiplier: "1,200x",
    category: "Municipal Shift",
    key: "city",
    subtext: "Infrastructure transformation"
  },
  {
    level: "05",
    name: "Ecosystem",
    multiplier: "28,000x",
    category: "Planetary Biome",
    key: "ecosystem",
    subtext: "Continental biome stabilization",
    isTerminal: true
  }
];

export default function CompoundChoiceVisualization() {
  const [selectedActionId, setSelectedActionId] = useState('transit');
  const action = COMPOUND_ACTIONS.find(a => a.id === selectedActionId) || COMPOUND_ACTIONS[0];

  return (
    <section className="relative py-24 md:py-36 bg-econest-soft/40 border-y border-econest-forest/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase font-semibold tracking-brand text-econest-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Educational Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-econest-deep">
            One Choice <span className="italic font-normal text-econest-forest">Can Compound</span>
          </h2>
          <p className="text-xs sm:text-sm text-econest-forest/70 font-light max-w-lg mx-auto">
            Select an everyday sustainable decision to observe how micro-actions cascade through biological and social scales.
          </p>
        </div>

        {/* Action Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {COMPOUND_ACTIONS.map((act) => {
            const isSelected = selectedActionId === act.id;
            return (
              <button
                key={act.id}
                onClick={() => setSelectedActionId(act.id)}
                className={`min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-econest-forest text-white shadow-organic scale-[1.02] ring-2 ring-econest-primary/30'
                    : 'bg-white/80 dark:bg-black/30 text-econest-forest/80 dark:text-econest-natural/80 border border-econest-forest/15 hover:bg-white dark:hover:bg-black/50'
                }`}
                aria-label={`Select action ${act.name}`}
              >
                <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-econest-natural' : 'opacity-40'}`} />
                <span>{act.name}</span>
              </button>
            );
          })}
        </div>

        {/* Compound Cascade Container Card */}
        <div className="editorial-card rounded-3xl p-6 sm:p-10 shadow-organic relative">
          
          {/* Action Trigger Banner */}
          <div className="pb-6 mb-8 border-b border-econest-forest/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-semibold tracking-brand text-econest-forest/60 dark:text-econest-natural/60">
                Triggered Everyday Decision
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-econest-deep">
                {action.choice}
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-econest-forest/70 dark:text-econest-natural/70 bg-econest-forest/5 dark:bg-white/5 px-3.5 py-1.5 rounded-full border border-econest-forest/10 shrink-0 self-start md:self-auto">
              <ShieldAlert className="w-3.5 h-3.5 text-econest-primary" />
              <span>{action.disclaimer}</span>
            </div>
          </div>

          {/* Directional Cascade Vector Line (Desktop) */}
          <div className="hidden lg:flex items-center justify-between px-8 mb-4">
            <div className="flex items-center space-x-2 text-[11px] font-mono font-semibold uppercase tracking-wider text-econest-primary">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Micro-Action Origin</span>
            </div>
            <div className="flex-1 mx-4 h-px bg-gradient-to-r from-econest-primary via-econest-forest to-econest-natural opacity-30" />
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-econest-forest dark:text-econest-natural">
              Planetary Biome Convergence
            </div>
          </div>

          {/* 5-Scale Compound Progression Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {SCALE_STAGES.map((stage, idx) => {
              const value = action[stage.key];
              const isLast = stage.isTerminal;

              return (
                <div key={stage.key} className="relative flex flex-col justify-between">
                  {/* Card Content */}
                  <div
                    className={`h-full p-5 rounded-2xl border transition-all duration-500 flex flex-col justify-between space-y-4 ${
                      isLast
                        ? 'bg-econest-forest text-white shadow-organic border-econest-natural/40 ring-1 ring-econest-natural/20'
                        : 'bg-white/80 dark:bg-black/25 border-econest-forest/10 hover:border-econest-forest/25'
                    }`}
                  >
                    {/* Card Top: Scale Tag & Multiplier Badge */}
                    <div className="flex items-center justify-between border-b pb-2.5 border-current/10">
                      <span className={`text-[10px] uppercase font-bold tracking-brand ${
                        isLast ? 'text-econest-natural' : 'text-econest-primary'
                      }`}>
                        {stage.level} &middot; {stage.name}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isLast
                          ? 'bg-white/20 text-white font-bold'
                          : 'bg-econest-forest/10 text-econest-forest dark:text-econest-natural font-semibold'
                      }`}>
                        {stage.multiplier}
                      </span>
                    </div>

                    {/* Metric Outcome Value */}
                    <div className="space-y-1">
                      <div className={`text-sm sm:text-base font-semibold leading-snug transition-all duration-300 ${
                        isLast ? 'text-white' : 'text-econest-deep'
                      }`}>
                        {value}
                      </div>
                      <p className={`text-[11px] font-light leading-relaxed ${
                        isLast ? 'text-econest-natural/80' : 'text-econest-forest/70 dark:text-econest-natural/70'
                      }`}>
                        {stage.subtext}
                      </p>
                    </div>

                    {/* Category Footnote */}
                    <div className="pt-2 border-t border-current/10 text-[10px] font-mono uppercase tracking-wider opacity-60">
                      {stage.category}
                    </div>
                  </div>

                  {/* Flow Arrow Connector between Steps (Desktop & Mobile) */}
                  {idx < SCALE_STAGES.length - 1 && (
                    <>
                      {/* Desktop Horizontal Indicator Arrow */}
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white dark:bg-black border border-econest-forest/20 items-center justify-center text-econest-primary shadow-xs">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      {/* Mobile Vertical Indicator Arrow */}
                      <div className="flex sm:hidden justify-center py-1 text-econest-forest/40">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Narrative Synthesis */}
          <div className="mt-8 pt-6 border-t border-econest-forest/10 flex flex-col sm:flex-row items-center justify-between text-xs text-econest-forest/70 dark:text-econest-natural/70 gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-econest-primary" />
              <span>Compounding Feedback: Local choices reduce macro-strain across downstream biomes.</span>
            </div>
            <div className="font-mono text-[11px]">
              Cascade Efficacy: Verified Platform Metric
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
