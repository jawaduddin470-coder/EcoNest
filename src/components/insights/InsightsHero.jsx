import React, { useState } from 'react';
import { ArrowDown, BookOpen, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CHAPTER_SEVEN } from '../../data/brandData';

export default function InsightsHero({
  theme = 'day',
  onExploreArchive,
  onExploreFeatured
}) {
  const [hoveredStage, setHoveredStage] = useState(null);

  // 5 stages of the ecological knowledge loop
  const cycleStages = [
    { stage: "01", label: "OBSERVE", angle: -90, color: "#52B788", desc: "Field sensors, resident tracking & living baseline" },
    { stage: "02", label: "UNDERSTAND", angle: -18, color: "#4BAFA1", desc: "Systemic correlation & biospheric feedback loops" },
    { stage: "03", label: "APPLY", angle: 54, color: "#38A169", desc: "Physical prototype interventions & living tests" },
    { stage: "04", label: "MEASURE", angle: 126, color: "#D4B038", desc: "Empirical deltas & longitudinal telemetry" },
    { stage: "05", label: "ADAPT", angle: 198, color: "#3D8B57", desc: "Collective resilience & iterative stewardship" }
  ];

  const activeStageInfo = cycleStages.find(s => s.label === hoveredStage);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-econest-soft/40 via-econest-lightest to-white dark:from-[#05180F] dark:via-[#071D12] dark:to-[#0A2618] border-b border-econest-forest/10 transition-colors duration-700">
      {/* Ambient Ecological Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="insights-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="24" cy="24" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#insights-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Narrative Breadcrumb / Chapter Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-econest-forest/5 dark:bg-white/10 border border-econest-forest/15 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-econest-fresh animate-pulse-subtle" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-econest-forest dark:text-econest-natural font-semibold">
              {CHAPTER_SEVEN.badge}
            </span>
          </div>

          <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-wider text-econest-forest/70 dark:text-econest-natural/70">
            <BookOpen className="w-3.5 h-3.5 text-econest-fresh" />
            <span>ECOLOGICAL RESEARCH ARCHIVE // FIELD JOURNAL</span>
          </div>
        </div>

        {/* Main Content Grid: Narrative Left, Knowledge Field Visualization Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Epigraph */}
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-econest-deep dark:text-white leading-[1.12] mb-5">
              Learning from <br />
              <span className="italic text-econest-forest dark:text-econest-natural font-light">
                living systems.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-econest-forest/85 dark:text-[#BFD8C2] leading-relaxed max-w-2xl mb-6">
              {CHAPTER_SEVEN.subtext}
            </p>

            {/* Epigraph / Narrative Bridge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-econest-forest/15 shadow-xs backdrop-blur-sm max-w-xl mb-7">
              <p className="font-serif italic text-sm sm:text-base text-econest-deep/90 dark:text-econest-natural leading-snug">
                “{CHAPTER_SEVEN.narrativeBridge}”
              </p>
              <div className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-econest-forest/60 dark:text-econest-natural/60">
                — EcoNest Research Manifesto // Epistemology 07
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={onExploreFeatured}
                className="h-10 px-5 rounded-full bg-econest-forest hover:bg-econest-deep text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center space-x-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              >
                <span>Read Featured Field Note</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreArchive}
                className="h-10 px-5 rounded-full bg-white/80 dark:bg-white/5 hover:bg-white text-econest-forest dark:text-econest-natural border border-econest-forest/15 font-mono text-xs uppercase tracking-widest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              >
                <span>Browse Field Archive</span>
              </button>
            </div>
          </div>

          {/* Right Column: Integrated Knowledge Field Visualization */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[400px] aspect-square relative p-6 rounded-3xl bg-white/85 dark:bg-[#071F14] border border-econest-forest/15 dark:border-white/10 shadow-organic flex flex-col items-center justify-between">
              {/* Header inside visualization card */}
              <div className="w-full flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-econest-forest/65 dark:text-econest-natural/65 border-b border-econest-forest/10 dark:border-white/10 pb-2.5">
                <span>THE KNOWLEDGE LOOP</span>
                <span className="font-bold text-econest-fresh">5 STAGES</span>
              </div>

              {/* Radial Topological Knowledge Web SVG */}
              <div className="w-full h-60 relative my-auto">
                <svg className="w-full h-full" viewBox="0 0 320 260" aria-label="Knowledge Loop Interactive Diagram">
                  {/* Outer and inner guide rings */}
                  <circle cx="160" cy="130" r="95" fill="none" stroke="#4E9B6E" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                  <circle cx="160" cy="130" r="55" fill="none" stroke="#4E9B6E" strokeWidth="0.75" opacity="0.2" />

                  {/* Radiating connecting lines from center hub */}
                  {cycleStages.map((stage) => {
                    const rad = (stage.angle * Math.PI) / 180;
                    const x = 160 + 95 * Math.cos(rad);
                    const y = 130 + 95 * Math.sin(rad);
                    const isHovered = hoveredStage === stage.label;

                    return (
                      <g
                        key={stage.label}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredStage(stage.label)}
                        onMouseLeave={() => setHoveredStage(null)}
                        onFocus={() => setHoveredStage(stage.label)}
                        onBlur={() => setHoveredStage(null)}
                        tabIndex={0}
                        role="button"
                        aria-label={`Stage ${stage.stage}: ${stage.label}. ${stage.desc}`}
                      >
                        <line
                          x1="160"
                          y1="130"
                          x2={x}
                          y2={y}
                          stroke={isHovered ? stage.color : "#4E9B6E"}
                          strokeWidth={isHovered ? "2" : "1.2"}
                          strokeDasharray={isHovered ? "none" : "3 2"}
                          opacity={isHovered ? 0.9 : 0.45}
                          className="transition-all duration-300"
                        />
                        {/* Outer stage node */}
                        <circle
                          cx={x}
                          cy={y}
                          r={isHovered ? 23 : 20}
                          fill={isHovered ? "#163E32" : "#0B2E24"}
                          stroke={stage.color}
                          strokeWidth={isHovered ? 2.5 : 1.5}
                          className="transition-all duration-300"
                        />
                        <text
                          x={x}
                          y={y + 3}
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize={isHovered ? "8" : "7"}
                          fontFamily="monospace"
                          fontWeight="bold"
                          className="pointer-events-none transition-all duration-300"
                        >
                          {stage.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Central Hub: ECONEST KNOWLEDGE FIELD */}
                  <g transform="translate(160, 130)" className="pointer-events-none">
                    <circle r="36" fill="#0B2E24" stroke="#52B788" strokeWidth="2" />
                    <text y="-5" textAnchor="middle" fill="#52B788" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                      KNOWLEDGE
                    </text>
                    <text y="7" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="serif" fontWeight="bold">
                      LOOP
                    </text>
                    <text y="17" textAnchor="middle" fill="#BFD8C2" fontSize="6.5" fontFamily="monospace">
                      {hoveredStage ? hoveredStage : "OBSERVE"}
                    </text>
                  </g>
                </svg>
              </div>

              {/* Dynamic stage caption below SVG */}
              <div className="w-full pt-2 border-t border-econest-forest/10 dark:border-white/10 min-h-[36px] flex items-center justify-center text-center">
                {activeStageInfo ? (
                  <p className="text-[11px] font-mono text-econest-deep dark:text-econest-natural transition-all duration-200">
                    <span className="font-bold text-econest-fresh">[{activeStageInfo.stage} // {activeStageInfo.label}]</span> {activeStageInfo.desc}
                  </p>
                ) : (
                  <p className="text-[10px] font-mono text-econest-forest/65 dark:text-econest-natural/65">
                    Observe → Understand → Apply → Measure → Adapt
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Footer */}
        <div className="mt-10 pt-5 border-t border-econest-forest/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60">
          <span>{CHAPTER_SEVEN.disclaimer}</span>
          <span className="hidden sm:inline">6 PEER-RECORDED FIELD ENTRIES</span>
        </div>
      </div>
    </section>
  );
}
