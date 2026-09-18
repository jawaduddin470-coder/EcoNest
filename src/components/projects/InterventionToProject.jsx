import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Layers, Users, Zap, Home, Building2 } from 'lucide-react';

export default function InterventionToProject({ theme = 'day' }) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      number: "01",
      phase: "PHASE 03 // ACTION",
      title: "Micro Habit",
      scale: "Individual Dwellings · Point of Use",
      icon: Zap,
      lead: "A single conscious micro-decision made inside the home.",
      example: "Turning off standby electronic vampires; separating vegetable trimmings into an airtight counter bin.",
      mechanism: "Requires zero municipal permission; builds personal ecological agency within seconds.",
      systemYield: "-0.4 kg CO₂e / day domestic offset"
    },
    {
      number: "02",
      phase: "PHASE 03 // ACTION",
      title: "Repeated Action",
      scale: "Household Rhythm · 30-Day Continuity",
      icon: Home,
      lead: "Repetition transforms an occasional thought into unconscious habit.",
      example: "Household routines stabilize: cold-water wash cycles, zero-plastic grocery runs, balcony composting.",
      mechanism: "Habits become part of the household culture, eliminating recurring friction and normalizing thrift.",
      systemYield: "12.5 kg organic waste diverted / month"
    },
    {
      number: "03",
      phase: "PHASE 04 // MEASUREMENT",
      title: "Shared Practice",
      scale: "Floor / Corridor / Neighboring Homes",
      icon: Users,
      lead: "When neighbors notice and harmonize their practices.",
      example: "Five adjacent apartment dwellers combine kitchen scraps for a shared vermicompost bin in the courtyard.",
      mechanism: "Reduces duplicate equipment; social verification and camaraderie prevent relapse into old habits.",
      systemYield: "85 kg rich worm castings produced / quarter"
    },
    {
      number: "04",
      phase: "PHASE 05 // PROJECTS",
      title: "Local System",
      scale: "Street / Block Infrastructure",
      icon: Layers,
      lead: "Physical shared infrastructure replaces ad-hoc efforts.",
      example: "The street installs a permeable gravel verge, communal rainwater cistern, and bidirectional solar inverters.",
      mechanism: "Infrastructure operates passively in the background, benefiting even residents who don't actively participate.",
      systemYield: "1,200 L storm runoff filtered per cloudburst"
    },
    {
      number: "05",
      phase: "PHASE 05 // LIVING PROJECTS",
      title: "Living Project",
      scale: "Ecological Commons · Embedded in Place",
      icon: Building2,
      lead: "A permanent, self-sustaining socio-ecological organism.",
      example: "The Solar Commons or Blue Loop: institutionalized, municipally recognized, regenerating soil and power perpetually.",
      mechanism: "Resilient against political or market shifts; provides true regenerative abundance to future generations.",
      systemYield: "84.2% community self-sufficiency"
    }
  ];

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section className="relative py-24 md:py-32 bg-econest-soft/40 dark:bg-[#071D12] border-b border-econest-forest/10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />
            <span>SECTION 04 // THE EMERGENCE ARCHITECTURE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-econest-deep dark:text-white leading-tight">
            How a Daily Habit Becomes a Living Project
          </h2>
          <p className="mt-3 text-base text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
            Living projects do not descend from top-down decrees. They emerge when micro-habits compound, synchronize across neighbors, and crystallize into permanent local infrastructure.
          </p>
        </div>

        {/* 5-Stage Stepper Progress Bar */}
        <div className="flex overflow-x-auto gap-2 sm:grid sm:grid-cols-5 scrollbar-none pb-2 sm:pb-0 mb-10">
          {stages.map((st, idx) => {
            const isSelected = activeStage === idx;
            const isPast = activeStage > idx;
            return (
              <button
                key={st.number}
                onClick={() => setActiveStage(idx)}
                className={`flex-shrink-0 min-w-[130px] sm:min-w-0 text-left p-3.5 sm:p-4 rounded-xl transition-all duration-300 border relative ${
                  isSelected
                    ? 'bg-econest-forest text-white border-econest-forest shadow-organic'
                    : isPast
                    ? 'bg-white dark:bg-white/10 text-econest-deep dark:text-white border-econest-forest/20'
                    : 'bg-white/50 dark:bg-white/5 text-econest-forest/70 dark:text-white/60 border-econest-forest/10 hover:bg-white dark:hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-bold ${
                    isSelected ? 'text-econest-natural' : 'text-econest-forest/60 dark:text-econest-natural/60'
                  }`}>
                    STAGE 0{idx + 1}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />}
                </div>
                <div className="font-serif font-bold text-xs sm:text-sm truncate">
                  {st.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0A2417] border border-econest-forest/15 dark:border-white/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stage Metadata & Core Mechanics */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-widest bg-econest-forest/10 dark:bg-white/10 text-econest-forest dark:text-econest-natural border border-econest-forest/15">
                  {current.phase}
                </span>
                <span className="text-xs font-mono text-econest-forest/60 dark:text-econest-natural/60">
                  {current.scale}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-econest-deep dark:text-white flex items-center space-x-3">
                <span>{current.number}.</span>
                <span>{current.title}</span>
              </h3>

              <p className="font-serif italic text-lg text-econest-forest/85 dark:text-econest-natural">
                “{current.lead}”
              </p>

              <div className="pt-2 space-y-3 text-sm text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
                <div>
                  <strong className="text-econest-deep dark:text-white font-semibold">Living Example: </strong>
                  {current.example}
                </div>
                <div>
                  <strong className="text-econest-deep dark:text-white font-semibold">Systemic Driver: </strong>
                  {current.mechanism}
                </div>
              </div>
            </div>

            {/* Right Column: Measurable System Yield & Navigation */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-econest-soft/50 dark:bg-black/20 border border-econest-forest/10 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-econest-forest text-white flex items-center justify-center">
                  <CurrentIcon className="w-5 h-5 text-econest-fresh" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60">
                    Systemic Output
                  </div>
                  <div className="text-xs font-bold font-mono text-econest-deep dark:text-white">
                    Measurable Ecological Delta
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-econest-forest/10 font-mono text-sm font-semibold text-econest-forest dark:text-econest-natural">
                {current.systemYield}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-econest-forest dark:text-econest-natural disabled:opacity-30 disabled:pointer-events-none hover:bg-econest-forest/5"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStage === stages.length - 1}
                  onClick={() => setActiveStage(prev => Math.min(stages.length - 1, prev + 1))}
                  className="px-4 py-1.5 rounded-lg text-xs font-mono font-bold bg-econest-forest text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-econest-deep transition-all"
                >
                  Next Evolution →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
