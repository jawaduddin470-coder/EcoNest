import React, { useState, useMemo, useRef } from 'react';
import { ArrowUpRight, Activity, Sparkles, Layers } from 'lucide-react';
import { CHAPTER_FOUR, LEDGER_ACTIONS_DATABASE } from '../../data/brandData';
import LivingImpactField from './LivingImpactField';
import ImpactDimensionsSelector from './ImpactDimensionsSelector';
import ImpactCounterDisplay from './ImpactCounterDisplay';
import TheCompoundEffect from './TheCompoundEffect';
import ChangeOverTimeTimeline from './ChangeOverTimeTimeline';
import BeforeAfterSystemVisual from './BeforeAfterSystemVisual';
import ImpactLedger from './ImpactLedger';
import ImpactBuilderProfile from './ImpactBuilderProfile';
import ImpactPlanetVisual from './ImpactPlanetVisual';
import ActionToEvidenceStory from './ActionToEvidenceStory';
import FinalImpactStatement from './FinalImpactStatement';

/**
 * ImpactExperience
 * Master orchestrator for Phase 4: Chapter 04 // THE MEASURE OF CHANGE.
 * Upgraded to feel like a breathing, interconnected living system where choices
 * visibly propagate through biospheric telemetry, compound scale, and grounded time.
 */
export default function ImpactExperience({
  theme = 'day',
  onNavigateHome = () => {},
  onNavigateAbout = () => {},
  onNavigateSolutions = () => {},
  onNavigate = () => {},
}) {
  // Shared interactive state
  const [selectedActionIds, setSelectedActionIds] = useState([
    'act-bike',
    'act-solar',
    'act-greywater',
    'act-refill',
    'act-localfood',
  ]);

  const [activeDimensionId, setActiveDimensionId] = useState('carbon');

  const ledgerRef = useRef(null);

  // Dynamic calculation of composite impact totals
  const totals = useMemo(() => {
    const defaultTotals = {
      carbon: 0,
      water: 0,
      energy: 0,
      materials: 0,
      biodiversity: 0,
      community: 0,
    };

    if (!selectedActionIds || selectedActionIds.length === 0) {
      return {
        carbon: 0.4,
        water: 10,
        energy: 0.8,
        materials: 1,
        biodiversity: 1,
        community: 1,
      };
    }

    return selectedActionIds.reduce((acc, id) => {
      const act = LEDGER_ACTIONS_DATABASE.find((a) => a.id === id);
      if (act) {
        acc.carbon = +(acc.carbon + (act.carbon || 0)).toFixed(1);
        acc.water = +(acc.water + (act.water || 0)).toFixed(0);
        acc.energy = +(acc.energy + (act.energy || 0)).toFixed(1);
        acc.materials = +(acc.materials + (act.materials || 0)).toFixed(0);
        acc.biodiversity = +(acc.biodiversity + (act.biodiversity || 0)).toFixed(1);
        acc.community = +(acc.community + (act.community || 0)).toFixed(0);
      }
      return acc;
    }, defaultTotals);
  }, [selectedActionIds]);

  const handleToggleAction = (id) => {
    setSelectedActionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApplyPreset = (actionIds) => {
    setSelectedActionIds(actionIds);
  };

  const scrollToLedger = () => {
    if (ledgerRef.current) {
      ledgerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen text-forest-900 dark:text-forest-50 transition-colors duration-500 overflow-x-hidden">
      {/* 1. IMPACT HERO — THE SYSTEM FEELS ALIVE */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center px-6 sm:px-10 lg:px-16 pt-28 pb-16 text-center overflow-hidden">
        {/* Living Breathing Ambient System Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 dark:opacity-20 overflow-hidden">
          {/* Breathing Ecological Concentric Rings */}
          <div className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full border border-forest-500/20 animate-pulse-subtle" />
          <div
            className="absolute w-[520px] h-[520px] sm:w-[800px] sm:h-[800px] rounded-full border border-forest-500/15"
            style={{ animation: 'pulse 8s ease-in-out infinite alternate' }}
          />
          <div className="absolute w-[740px] h-[740px] sm:w-[1100px] sm:h-[1100px] rounded-full border border-forest-500/10" />

          {/* Slow Orbital Telemetry Ring & Node */}
          <div className="absolute w-[440px] h-[440px] sm:w-[680px] sm:h-[680px] rounded-full border border-forest-500/15 animate-spin-slow">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-forest-500/60 shadow-xs" />
          </div>

          {/* Subtle slow floating spores */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20%" cy="30%" r="2" fill="#4E9B6E" opacity="0.4">
              <animate attributeName="cy" values="30%;26%;30%" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="80%" cy="25%" r="2.5" fill="#3D8B57" opacity="0.35">
              <animate attributeName="cy" values="25%;21%;25%" dur="10s" repeatCount="indefinite" />
            </circle>
            <circle cx="45%" cy="80%" r="2" fill="#BFD8C2" opacity="0.5">
              <animate attributeName="cy" values="80%;75%;80%" dur="9s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="70%" r="1.8" fill="#4BAFA1" opacity="0.4">
              <animate attributeName="cy" values="70%;66%;70%" dur="11s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Transition Bridge Pill from Phase 3 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800/[0.04] dark:bg-forest-100/[0.03] border border-forest-800/10 dark:border-forest-200/10 mb-6">
            <span className="text-[11px] font-mono text-forest-500 italic">
              {CHAPTER_FOUR.transitionFrom}
            </span>
            <span className="text-forest-400">→</span>
            <span className="text-[11px] font-mono font-medium text-forest-800 dark:text-forest-200">
              {CHAPTER_FOUR.transitionTo}
            </span>
          </div>

          {/* Chapter Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
              {CHAPTER_FOUR.badge}
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-forest-900 dark:text-forest-50 leading-[1.05] mb-6 font-light">
            The measure <br />
            <span className="italic text-forest-600 dark:text-forest-300">
              of change.
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg text-forest-700/85 dark:text-forest-300/85 font-sans leading-relaxed mb-10 font-light">
            {CHAPTER_FOUR.subtext}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToLedger}
              className="min-h-[44px] px-8 py-3.5 rounded-full bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold hover:bg-forest-800 dark:hover:bg-cream-100 transition-all duration-300 shadow-md cursor-pointer"
              data-cursor="CLICK"
            >
              Calibrate Interventions
            </button>
            <a
              href="#living-field"
              className="min-h-[44px] px-8 py-3.5 rounded-full bg-forest-800/[0.04] dark:bg-forest-100/[0.03] text-forest-800 dark:text-forest-200 border border-forest-800/10 dark:border-forest-200/10 text-xs sm:text-sm font-mono uppercase tracking-wider font-medium hover:bg-forest-800/[0.08] dark:hover:bg-forest-100/[0.08] transition-all duration-300 inline-flex items-center justify-center"
              data-cursor="CLICK"
            >
              Explore Living Field ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. LIVING IMPACT FIELD (SIGNATURE CENTERPIECE VISUALIZATION) */}
      <div id="living-field">
        <LivingImpactField
          activeDimensionId={activeDimensionId}
          onSelectDimension={setActiveDimensionId}
          selectedActionCount={selectedActionIds.length}
          totals={totals}
          theme={theme}
        />
      </div>

      {/* 3. SIX DIMENSIONS NAVIGATOR & SCIENTIFIC LENSES */}
      <ImpactDimensionsSelector
        activeDimensionId={activeDimensionId}
        onSelectDimension={setActiveDimensionId}
        totals={totals}
        theme={theme}
      />

      {/* 4. QUANTITATIVE TELEMETRY COUNTER SHOWCASE WITH METHODOLOGY MODAL */}
      <ImpactCounterDisplay totals={totals} theme={theme} />

      {/* 5. THE COMPOUND EFFECT (SCALE PROPAGATION SIMULATION) */}
      <TheCompoundEffect totals={totals} theme={theme} />

      {/* 6. CHANGE OVER TIME TIMELINE (GROUNDED NARRATIVE) */}
      <ChangeOverTimeTimeline theme={theme} />

      {/* 7. LINEAR EXTRACTION VS REGENERATIVE CIRCULARITY */}
      <BeforeAfterSystemVisual theme={theme} />

      {/* 8. THE LIVING IMPACT LEDGER (INTERACTIVE ENGINE) */}
      <div ref={ledgerRef}>
        <ImpactLedger
          selectedActionIds={selectedActionIds}
          onToggleAction={handleToggleAction}
          theme={theme}
        />
      </div>

      {/* 9. MULTIDIMENSIONAL PROFILE MATRIX (NO GAMIFICATION) */}
      <ImpactBuilderProfile
        totals={totals}
        selectedActionIds={selectedActionIds}
        onApplyPreset={handleApplyPreset}
        theme={theme}
      />

      {/* 10. PLANETARY BIOSPHERIC SCALE VISUAL */}
      <ImpactPlanetVisual
        selectedActionIds={selectedActionIds}
        totals={totals}
        theme={theme}
      />

      {/* 11. ACTION TO EVIDENCE NARRATIVE */}
      <ActionToEvidenceStory theme={theme} />

      {/* 12. CULMINATING MANIFESTO & CLOSED-LOOP RETURN */}
      <FinalImpactStatement
        onScrollToLedger={scrollToLedger}
        onNavigateHome={onNavigateHome}
        onNavigateSolutions={onNavigateSolutions}
        onNavigateProjects={() => onNavigate && onNavigate('projects')}
        theme={theme}
      />

      {/* 13. PERSISTENT LIVING TRACE DOCK (SECTION 8) */}
      <aside
        className="fixed bottom-4 right-4 z-40 max-w-[92vw] sm:max-w-md transition-all duration-300"
        aria-label="Persistent Living Trace status"
      >
        <div
          onClick={scrollToLedger}
          className="p-3 sm:px-4 sm:py-2.5 rounded-full bg-cream-50/95 dark:bg-forest-950/90 backdrop-blur-md border border-forest-800/15 dark:border-forest-200/15 shadow-organic flex items-center justify-between gap-3 cursor-pointer hover:border-forest-500/40 transition-all group"
          data-cursor="CLICK"
          title="Click to recalibrate action interventions in the ledger"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-forest-700 dark:text-forest-300 font-bold hidden xs:inline">
              YOUR LIVING TRACE
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono text-forest-600 dark:text-forest-300">
            <span className="px-2 py-0.5 rounded-md bg-forest-500/10 font-bold text-forest-800 dark:text-forest-200">
              {selectedActionIds.length} Active
            </span>
            <span className="font-semibold text-forest-900 dark:text-forest-50">
              {totals.carbon || 1.8} kg CO₂e
            </span>
            <span className="hidden sm:inline text-forest-400">·</span>
            <span className="hidden sm:inline">
              {Math.round(totals.water || 45)} L H₂O
            </span>
          </div>

          <div className="w-6 h-6 rounded-full bg-forest-800/[0.05] dark:bg-forest-100/[0.05] flex items-center justify-center text-forest-600 group-hover:text-forest-900 dark:group-hover:text-forest-100 transition-transform group-hover:-translate-y-0.5">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </aside>
    </div>
  );
}
