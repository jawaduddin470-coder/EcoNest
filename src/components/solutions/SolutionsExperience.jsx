import React, { useState } from "react";
import {
  CHAPTER_THREE,
  SOLUTIONS_CATEGORIES,
  BRAND
} from "../../data/brandData";
import SolutionsActionMap from "./SolutionsActionMap";
import SystemDiagram from "./SystemDiagram";
import SolutionsCascadeChain from "./SolutionsCascadeChain";
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  GitBranch,
  Layers,
  Activity,
  Leaf,
  Globe2,
  Compass
} from "lucide-react";

export default function SolutionsExperience({
  theme,
  onOpenCalculator,
  onNavigate
}) {
  const [selectedCategoryId, setSelectedCategoryId] = useState("transport");
  const activeCategory =
    SOLUTIONS_CATEGORIES.find((c) => c.id === selectedCategoryId) ||
    SOLUTIONS_CATEGORIES[0];

  return (
    <div id="solutions" className="relative w-full overflow-hidden transition-colors duration-700">
      
      {/* 1. Chapter 03 Hero & Organic Downward Flow */}
      <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden bg-grain">
        {/* Soft atmospheric ambient aura */}
        <div className="absolute top-1/4 -left-36 w-[32rem] h-[32rem] rounded-full bg-econest-soft/60 filter blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-econest-natural/30 filter blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          {/* Chapter Badge */}
          <div className="inline-flex items-center space-x-2.5 py-1.5 px-3.5 rounded-full border border-econest-forest/15 bg-white/80 dark:bg-black/40 backdrop-blur-sm text-econest-forest dark:text-econest-natural text-xs font-semibold uppercase tracking-brand shadow-xs mx-auto">
            <span className="w-2 h-2 rounded-full bg-econest-primary animate-pulse" />
            <span>{CHAPTER_THREE.badge}</span>
          </div>

          {/* Opening Statement */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-econest-deep dark:text-white leading-[1.1] tracking-tight max-w-3xl mx-auto">
              “What can we <br />
              <span className="italic font-normal text-econest-forest">
                actually do?”
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-econest-forest/80 dark:text-econest-natural/80 font-light leading-relaxed max-w-2xl mx-auto">
              {CHAPTER_THREE.subtext}
            </p>
          </div>

          {/* Visual Motif: Earth -> Pathways -> Choices -> Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-wider text-econest-forest/70 dark:text-econest-natural/70">
            <span className="px-2.5 py-1 rounded-md bg-econest-forest/10 border border-econest-forest/15">01 Planet</span>
            <ArrowRight className="w-3 h-3 text-econest-primary" />
            <span className="px-2.5 py-1 rounded-md bg-econest-forest/10 border border-econest-forest/15">02 Pathways</span>
            <ArrowRight className="w-3 h-3 text-econest-primary" />
            <span className="px-2.5 py-1 rounded-md bg-econest-forest/10 border border-econest-forest/15">03 Choices</span>
            <ArrowRight className="w-3 h-3 text-econest-primary" />
            <span className="px-2.5 py-1 rounded-md bg-econest-forest text-white font-bold">04 Practical Action</span>
          </div>

          {/* Flowing animated conduit into the selector below */}
          <div className="pt-6 flex flex-col items-center justify-center space-y-1 select-none pointer-events-none">
            <svg width="24" height="48" viewBox="0 0 24 48" fill="none" className="overflow-visible">
              <path d="M 12 0 L 12 48" stroke="#3D8B57" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <circle r="3" fill="#3D8B57">
                <animateMotion path="M 12 0 L 12 48" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span className="text-[9px] font-mono uppercase tracking-widest text-econest-primary/70">
              Select Interventions Below
            </span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Solutions System Explorer */}
      <section className="relative py-8 md:py-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
          
          {/* Solutions Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {SOLUTIONS_CATEGORIES.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  data-cursor="SELECT"
                  className={`min-h-[44px] px-4 py-2.5 rounded-2xl text-xs uppercase font-medium tracking-wider transition-all duration-300 flex items-center space-x-2.5 ${
                    isSelected
                      ? "bg-econest-forest text-white shadow-organic scale-[1.03] ring-2 ring-econest-primary/50"
                      : "bg-white/80 dark:bg-black/30 text-econest-forest/80 dark:text-econest-natural/80 border border-econest-forest/15 hover:bg-white dark:hover:bg-black/50 hover:scale-[1.01]"
                  }`}
                  aria-label={`Select solution category ${cat.name}`}
                  aria-pressed={isSelected}
                >
                  <span className="text-sm">{cat.symbol}</span>
                  <span className="font-semibold">{cat.name}</span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: isSelected ? '#FFFFFF' : cat.accent }}
                  />
                </button>
              );
            })}
          </div>

          {/* 3. Major Visual Centerpiece: Interactive Multi-Branching Action Map */}
          <SolutionsActionMap activeCategory={activeCategory} />

          {/* 4. Dedicated System-Specific Ecological Diagram Component */}
          <SystemDiagram categoryId={selectedCategoryId} accent={activeCategory.accent} />

          {/* 5. Editorial Solution Module (SYSTEM, ACTION, MEASURE, CONNECTION) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            
            {/* Left: Deep Editorial Narrative Wing (7 cols) */}
            <div className="lg:col-span-7 editorial-card rounded-3xl p-6 sm:p-10 shadow-organic space-y-6 text-left">
              <div className="space-y-1.5 border-b border-econest-forest/10 pb-4">
                <span className="text-[10px] uppercase font-bold tracking-brand text-econest-primary">
                  {activeCategory.actionModule.systemTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-econest-deep dark:text-white">
                  {activeCategory.subtitle}
                </h3>
                <p className="text-xs text-econest-forest/70 dark:text-econest-natural/70 italic font-serif">
                  “{activeCategory.tagline}”
                </p>
              </div>

              {/* 4 Architectural Pillars */}
              <div className="space-y-5">
                {/* 01 System Insight */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase font-bold text-econest-forest/60 dark:text-econest-natural/60">
                    Systemic Challenge
                  </div>
                  <p className="text-xs sm:text-sm text-econest-deep dark:text-white font-medium leading-relaxed">
                    {activeCategory.actionModule.statement}
                  </p>
                </div>

                {/* 02 Practical Action */}
                <div className="space-y-1 p-4 rounded-2xl bg-econest-soft/50 dark:bg-white/5 border border-econest-forest/15">
                  <div className="text-[10px] font-mono uppercase font-bold text-econest-primary flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Everyday Regenerative Action</span>
                  </div>
                  <p className="text-xs sm:text-sm text-econest-deep dark:text-white font-semibold leading-relaxed pt-0.5">
                    {activeCategory.actionModule.action}
                  </p>
                </div>

                {/* 03 Measure */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase font-bold text-econest-forest/60 dark:text-econest-natural/60">
                    Measurable Indicator
                  </div>
                  <p className="text-xs sm:text-sm text-econest-forest/80 dark:text-econest-natural/80 font-light leading-relaxed">
                    {activeCategory.actionModule.measure}
                  </p>
                </div>

                {/* 04 Connection */}
                <div className="space-y-1 pt-2 border-t border-econest-forest/10">
                  <div className="text-[10px] font-mono uppercase font-bold text-econest-primary flex items-center space-x-1.5">
                    <GitBranch className="w-3 h-3" />
                    <span>Planetary Biome Connection</span>
                  </div>
                  <p className="text-xs sm:text-sm text-econest-forest/80 dark:text-econest-natural/80 font-light leading-relaxed">
                    {activeCategory.actionModule.connection}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Telemetry & Impact Stats Wing (5 cols) with Circular Gauges */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Metric Card with Radial Gauge */}
              <div className="editorial-card rounded-3xl p-6 sm:p-8 shadow-organic border-l-4 border-l-econest-primary text-left flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-brand text-econest-forest/60 dark:text-econest-natural/60">
                    Primary Measured Yield
                  </span>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-econest-forest dark:text-econest-fresh">
                    {activeCategory.primaryMetric.value}
                  </div>
                  <div className="text-xs font-semibold text-econest-deep dark:text-white">
                    {activeCategory.primaryMetric.label}
                  </div>
                  <div className="text-[10px] font-mono text-econest-forest/60 dark:text-econest-natural/60">
                    Dimension: {activeCategory.primaryMetric.unit}
                  </div>
                </div>

                {/* Radial visual arc gauge */}
                <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" className="text-econest-forest/10" fill="none" />
                    <circle cx="50" cy="50" r="40" stroke={activeCategory.accent} strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="62" strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="absolute text-[10px] font-bold font-mono text-econest-deep dark:text-white">
                    {activeCategory.primaryMetric.value}
                  </span>
                </div>
              </div>

              {/* Secondary Metric Card */}
              <div className="editorial-card rounded-3xl p-6 sm:p-8 shadow-organic border-l-4 border-l-econest-natural text-left flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-brand text-econest-forest/60 dark:text-econest-natural/60">
                    Secondary Systemic Lift
                  </span>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-econest-deep dark:text-white">
                    {activeCategory.secondaryMetric.value}
                  </div>
                  <div className="text-xs font-semibold text-econest-deep dark:text-white">
                    {activeCategory.secondaryMetric.label}
                  </div>
                  <div className="text-[10px] font-mono text-econest-forest/60 dark:text-econest-natural/60">
                    Dimension: {activeCategory.secondaryMetric.unit}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-econest-forest/5 dark:bg-white/5 border border-econest-forest/10 flex items-center justify-center text-xl shrink-0">
                  {activeCategory.symbol}
                </div>
              </div>

              {/* Verified Honest Model Badge */}
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-black/20 border border-econest-forest/10 space-y-1.5 text-left">
                <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-brand text-econest-primary">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Platform Modeling</span>
                </div>
                <p className="text-[11px] text-econest-forest/70 dark:text-econest-natural/70 font-light leading-relaxed">
                  EcoNest models are calibrated against regional watershed telemetry and municipal closed-loop indices.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Domino Cascade Principle: A Small Action Is Never Isolated */}
      <SolutionsCascadeChain categoryId={selectedCategoryId} />

      {/* 7. Chapter 03 CTA Transitioning into Personal Model & Living Planet */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-grain">
        {/* Atmospheric planetary seal backdrop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-econest-forest/10 opacity-30 pointer-events-none -z-10 animate-spin" style={{ animationDuration: '60s' }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-econest-forest/15 opacity-20 pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-10">
          
          <div className="w-14 h-14 rounded-2xl bg-econest-forest/10 border border-econest-forest/20 text-econest-forest flex items-center justify-center mx-auto shadow-xs">
            <Leaf className="w-7 h-7 text-econest-primary" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-econest-deep dark:text-white leading-tight">
              “Your next choice <br />
              <span className="italic font-normal text-econest-forest">
                enters the system.”
              </span>
            </h2>
            <p className="text-sm sm:text-base text-econest-forest/80 dark:text-econest-natural/80 font-light leading-relaxed">
              Model your personal compound footprint in real time, or explore the living planetary feedback loops behind every choice.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate && onNavigate("impact")}
              data-cursor="EXPLORE"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-econest-forest hover:bg-econest-deep text-white text-xs uppercase font-semibold tracking-widest transition-all duration-300 shadow-sm hover:shadow-organic hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Chapter 04: The Measure of Change</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCalculator}
              data-cursor="SELECT"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl border border-econest-forest/20 text-econest-deep hover:bg-white/80 dark:text-econest-natural dark:hover:bg-white/10 text-xs uppercase font-semibold tracking-widest transition-all duration-300 cursor-pointer"
            >
              <span>Quick Impact Calculator</span>
            </button>

            <button
              onClick={() => onNavigate && onNavigate("about")}
              data-cursor="EXPLORE"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl border border-econest-forest/20 text-econest-deep hover:bg-white/80 dark:text-econest-natural dark:hover:bg-white/10 text-xs uppercase font-semibold tracking-widest transition-all duration-300 cursor-pointer"
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>Return to Chapter 02: Planet</span>
            </button>
          </div>

          <div className="pt-6 text-xs text-econest-forest/60 dark:text-econest-natural/60 font-light font-mono">
            {BRAND.concept} &middot; Phase 3: Solutions Ecosystem
          </div>

        </div>
      </section>

    </div>
  );
}
