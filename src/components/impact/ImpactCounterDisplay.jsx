import React, { useEffect, useState } from 'react';
import { HelpCircle, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { CHAPTER_FOUR } from '../../data/brandData';

/**
 * ImpactCounterDisplay
 * Editorial large numerical measurement showcase that translates aggregated action selections
 * into tangible, transparent ecological metrics with explicit methodology disclosures.
 */
export default function ImpactCounterDisplay({ totals = {}, theme = 'day' }) {
  // Smoothly interpolate display value
  const [animatedCarbon, setAnimatedCarbon] = useState(totals.carbon || 0);
  const [animatedWater, setAnimatedWater] = useState(totals.water || 0);
  const [animatedEnergy, setAnimatedEnergy] = useState(totals.energy || 0);
  const [animatedItems, setAnimatedItems] = useState(totals.materials || 0);

  // Methodology modal visibility
  const [showMethodology, setShowMethodology] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowMethodology(false);
    };
    if (showMethodology) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showMethodology]);

  useEffect(() => {
    const duration = 600;
    const start = performance.now();
    const startCarbon = animatedCarbon;
    const startWater = animatedWater;
    const startEnergy = animatedEnergy;
    const startItems = animatedItems;

    const targetCarbon = totals.carbon || 0;
    const targetWater = totals.water || 0;
    const targetEnergy = totals.energy || 0;
    const targetItems = totals.materials || 0;

    let frameId;
    const step = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setAnimatedCarbon(startCarbon + (targetCarbon - startCarbon) * ease);
      setAnimatedWater(startWater + (targetWater - startWater) * ease);
      setAnimatedEnergy(startEnergy + (targetEnergy - startEnergy) * ease);
      setAnimatedItems(startItems + (targetItems - startItems) * ease);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [totals.carbon, totals.water, totals.energy, totals.materials]);

  const metrics = [
    {
      id: 'carbon',
      label: 'Carbon Avoided',
      badge: 'Modelled Estimate',
      value: animatedCarbon.toFixed(1),
      unit: 'kg CO₂e',
      period: 'per day',
      detail: 'Avoided fossil combustion & tailpipe exhaust',
      assumption: 'Based on 4 cycle commutes & thermal peak shifting',
      color: '#3D8B57',
    },
    {
      id: 'water',
      label: 'Hydrology Conserved',
      badge: 'Illustrative Daily Scenario',
      value: Math.round(animatedWater),
      unit: 'Liters',
      period: 'per day',
      detail: 'Greywater recycled & aquifer recharge',
      assumption: 'Based on dual-loop domestic laundry & bioswale',
      color: '#4BAFA1',
    },
    {
      id: 'energy',
      label: 'Clean Kinetic Yield',
      badge: 'Modelled Estimate',
      value: animatedEnergy.toFixed(1),
      unit: 'kWh',
      period: 'per day',
      detail: 'Solar displacement of peaker plants',
      assumption: 'Midday solar generation & standby cutoff',
      color: '#D4B038',
    },
    {
      id: 'materials',
      label: 'Circular Flow',
      badge: 'Scenario Model',
      value: Math.round(animatedItems * 12),
      unit: 'items / mo',
      period: 'diverted',
      detail: 'Zero landfill through reusable refills',
      assumption: 'Standardized pantry refill & tool clinic repair',
      color: '#38A169',
    },
  ];

  return (
    <section className="relative w-full py-16 px-6 sm:px-10 lg:px-16 border-t border-b border-forest-800/10 dark:border-forest-200/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
                03 // QUANTITATIVE TELEMETRY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-900 dark:text-forest-50 tracking-tight leading-tight">
              Change becomes visible <br />
              <span className="italic font-light text-forest-600 dark:text-forest-300">
                when we measure it.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans">
              Telemetry models the compounding capacity of ordinary choices.
              All metrics distinguish between personal active inputs and illustrative systemic assumptions.
            </p>
            <button
              onClick={() => setShowMethodology(true)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-forest-100 underline decoration-forest-500/40 hover:decoration-forest-500 transition-colors cursor-pointer"
              data-cursor="CLICK"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>How is this calculated? (Methodology & Limitations)</span>
            </button>
          </div>
        </div>

        {/* Primary Hero Metric Callout */}
        <div className="relative mb-10 p-8 sm:p-12 rounded-3xl bg-forest-800/[0.03] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10 overflow-hidden text-left">
          {/* Subtle decorative contour rings */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-96 h-96 rounded-full border border-forest-500/10 pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-64 h-64 rounded-full border border-forest-500/15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono tracking-wider uppercase text-forest-500">
                  User-Calculated Impact
                </span>
                <span className="text-forest-400">·</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-forest-500/10 text-forest-700 dark:text-forest-300 border border-forest-500/20">
                  Illustrative Daily Scenario
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-serif text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-forest-900 dark:text-forest-50 tabular-nums font-light">
                  {animatedCarbon.toFixed(1)}
                </span>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-lg sm:text-xl text-forest-700 dark:text-forest-300">
                    kg CO₂e
                  </span>
                  <span className="text-xs text-forest-600/70 dark:text-forest-400/70 uppercase tracking-wider font-mono">
                    daily offset
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm sm:text-base text-forest-800/80 dark:text-forest-200/80 max-w-xl leading-relaxed">
                Direct emissions avoided across your active lifestyle choices. Scaled over 365 days,
                this single routine prevents approximately{' '}
                <span className="font-medium text-forest-900 dark:text-forest-100">
                  {(animatedCarbon * 365).toFixed(0)} kg
                </span>{' '}
                of atmospheric heating flux based on selected assumptions.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-forest-800/10 dark:border-forest-200/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-xs font-mono uppercase tracking-widest text-forest-500 mb-2">
                Credibility Disclosure
              </div>
              <p className="text-xs leading-relaxed text-forest-600 dark:text-forest-400">
                EcoNest models represent demonstration telemetry derived from peer-reviewed lifecycle evaluations
                (ISO 14040/44) and EPA eGRID subregion factors. They are comparative scenario estimates,
                not legal carbon certificates.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-mono text-forest-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Active Interventions Calibrated: {totals.carbon ? 'Synchronized' : 'Calibrating'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Multi-Metric Cards with Explicit Scenarios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {metrics.map((m) => (
            <div
              key={m.id}
              className="p-6 rounded-2xl bg-forest-900/[0.02] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10 hover:border-forest-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-forest-600 dark:text-forest-400">
                    {m.label}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: m.color }} />
                </div>

                <div className="flex items-baseline gap-1.5 mb-0.5">
                  <span className="font-serif text-3xl sm:text-4xl text-forest-900 dark:text-forest-50 font-light tabular-nums">
                    {m.value}
                  </span>
                  <span className="text-xs font-sans font-medium text-forest-700 dark:text-forest-300">
                    {m.unit}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-forest-500 uppercase tracking-wide mb-3">
                  {m.period}
                </div>

                <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-forest-500/10 text-forest-700 dark:text-forest-300 border border-forest-500/15">
                  {m.badge}
                </span>
              </div>

              <div className="mt-5 pt-3.5 border-t border-forest-800/10 dark:border-forest-200/10 text-xs text-forest-600/80 dark:text-forest-400/80 leading-snug">
                {m.detail}
                <div className="mt-1 text-[10px] font-mono text-forest-500">
                  {m.assumption}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-[11px] font-mono text-forest-600/70 dark:text-forest-400/70 tracking-wide">
            {CHAPTER_FOUR.disclaimer}
          </p>
        </div>
      </div>

      {/* Methodology & Calculation Basis Slide-Over Modal */}
      {showMethodology && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/60 backdrop-blur-sm animate-fade-in text-left"
          onClick={() => setShowMethodology(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="methodology-modal-title"
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-cream-50 dark:bg-[#071D12] rounded-3xl p-6 sm:p-8 border border-forest-800/20 dark:border-forest-200/20 shadow-xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-forest-800/10 dark:border-forest-200/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-forest-500">
                  Transparency & Calculation Basis
                </span>
                <h3 id="methodology-modal-title" className="font-serif text-2xl text-forest-900 dark:text-forest-50 font-semibold">
                  How Is This Impact Calculated?
                </h3>
              </div>
              <button
                onClick={() => setShowMethodology(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-forest-800/20 text-forest-600 dark:text-forest-300 hover:bg-forest-500/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
                aria-label="Close methodology modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Sections */}
            <div className="space-y-4 text-xs sm:text-sm text-forest-800/90 dark:text-forest-200/90 font-sans leading-relaxed">
              <div className="p-4 rounded-2xl bg-forest-800/[0.03] dark:bg-forest-100/[0.03] border border-forest-800/10 space-y-2">
                <div className="font-mono text-xs uppercase font-bold text-forest-700 dark:text-forest-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>1. Input Assumptions</span>
                </div>
                <p>
                  Calculations assume a standard baseline household (2–3 occupants, temperate climate zone) with average
                  commuting distances (15 km return), standard municipal utility rates, and typical dietary profiles.
                  When you activate or deactivate an action in the ledger, the model applies predetermined marginal avoidance coefficients.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-forest-800/[0.03] dark:bg-forest-100/[0.03] border border-forest-800/10 space-y-2">
                <div className="font-mono text-xs uppercase font-bold text-forest-700 dark:text-forest-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>2. Calculation Basis & Standards</span>
                </div>
                <p>
                  Data points reference published lifecycle assessment (LCA) standards aligned with ISO 14040/44,
                  EPA eGRID regional marginal emission rates, and municipal greywater diversion empirical studies.
                  Avoided emissions represent scope 1 (direct combustion) and scope 2 (grid electricity displacement).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-forest-800/[0.03] dark:bg-forest-100/[0.03] border border-forest-800/10 space-y-2">
                <div className="font-mono text-xs uppercase font-bold text-forest-700 dark:text-forest-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>3. What These Numbers Represent</span>
                </div>
                <p>
                  These numbers quantify <em>relative systemic avoidance</em>. They illustrate how much energy, water,
                  or fossil combustion is diverted from centralized linear infrastructure compared to business-as-usual routines.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/[0.08] dark:bg-amber-500/[0.05] border border-amber-500/20 space-y-2">
                <div className="font-mono text-xs uppercase font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>4. Scientific Limitations</span>
                </div>
                <p className="text-amber-950 dark:text-amber-200">
                  Regional grid carbon intensity fluctuates hourly. Seasonal drought or precipitation affects domestic rainwater yield.
                  Supply chain decarbonization varies by supplier. These figures provide directional guidance and systemic perspective
                  rather than certified environmental audits.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-forest-800/10 dark:border-forest-200/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-forest-500">
                EcoNest Telemetry Methodology v4.2
              </span>
              <button
                onClick={() => setShowMethodology(false)}
                className="px-5 py-2 rounded-full bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer"
              >
                Close Panel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
