import React, { useState } from 'react';
import { Sun, BatteryCharging, Zap, ArrowRight, ShieldCheck, Clock, Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/brandData';

export default function FeaturedProject({
  theme = 'day',
  onOpenReport
}) {
  const [simulationMode, setSimulationMode] = useState('midday'); // 'midday' | 'evening' | 'night'
  const solarProject = PROJECTS_DATA.find(p => p.id === 'proj-solar-commons') || PROJECTS_DATA[0];

  // Dynamic simulation parameters based on time of day
  const simData = {
    midday: {
      time: '13:30 IST',
      phase: 'Peak Solar Surplus & Thermal Storage',
      solarInput: '+18.4 kW',
      batteryStatus: 'Charging · 88%',
      gridDraw: '0.0 kW (100% Islanded)',
      carbonDampening: '14.2 kg/hr CO₂e',
      coolingLoad: 'Thermal Pre-chill Active',
      activePath: 'rooftop-to-storage',
      description: 'Dwellings harvest peak solar radiation, instantly routing surplus into localized kinetic buffers and pre-cooling thermal masses to offset afternoon peaker plants.'
    },
    evening: {
      time: '19:45 IST',
      phase: 'Community Peak Discharge & Peaker Offset',
      solarInput: '0.0 kW (Post-Sunset)',
      batteryStatus: 'Discharging · 64%',
      gridDraw: '0.4 kW (Micro-stabilized)',
      carbonDampening: '19.8 kg/hr CO₂e',
      coolingLoad: 'Passive Thermal Coasting',
      activePath: 'storage-to-homes',
      description: 'As city-wide grid demand surges, the neighborhood battery pool discharges accumulated midday clean power back to the 45 homes, preventing substation brownout.'
    },
    night: {
      time: '02:15 IST',
      phase: 'Baseload Balancing & Shared EV Top-Up',
      solarInput: '0.0 kW (Dark)',
      batteryStatus: 'Trickle Reserve · 42%',
      gridDraw: '1.2 kW (Off-Peak Wind Mix)',
      carbonDampening: '6.1 kg/hr CO₂e',
      coolingLoad: 'Natural Cross-Ventilation',
      activePath: 'storage-to-mobility',
      description: 'Low-priority overnight loads like shared electric transit and municipal water pumping are energized using residual buffer power and certified regional wind.'
    }
  }[simulationMode];

  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-[#06180F] border-y border-econest-forest/10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />
          <span>SECTION 03 // DEEP SYSTEM SPECIFICATION</span>
        </div>

        {/* Split Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative, Context, Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-econest-forest/5 dark:bg-white/10 text-econest-forest dark:text-econest-natural border border-econest-forest/15">
              <span>{solarProject.number}</span>
              <span>//</span>
              <span>{solarProject.location}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-econest-deep dark:text-white leading-[1.15]">
              {solarProject.title}
            </h2>

            <p className="font-serif italic text-lg text-econest-forest/80 dark:text-econest-natural/80">
              “{solarProject.tagline}”
            </p>

            <p className="text-sm sm:text-base text-econest-forest/85 dark:text-[#BFD8C2] leading-relaxed">
              {solarProject.longDescription}
            </p>

            {/* Trace Pathway Indicator */}
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 block mb-2">
                CLOSED-LOOP TRACE PATHWAY
              </span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {solarProject.trace.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="text-xs font-mono px-3 py-1 rounded-lg bg-econest-soft/70 dark:bg-white/10 text-econest-deep dark:text-econest-natural border border-econest-forest/10 font-medium">
                      {step}
                    </span>
                    {idx < solarProject.trace.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-econest-forest/40 dark:text-white/40" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Quantitative Metrics Cluster */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {solarProject.impactMetrics.map(metric => (
                <div
                  key={metric.label}
                  className="p-3.5 rounded-xl bg-econest-lightest dark:bg-white/5 border border-econest-forest/10"
                >
                  <div className="text-[10px] font-mono text-econest-forest/60 dark:text-econest-natural/60 uppercase leading-snug min-h-[28px]">
                    {metric.label}
                  </div>
                  <div className="font-mono text-base sm:text-lg font-bold text-econest-deep dark:text-white mt-1">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Trigger */}
            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={() => onOpenReport && onOpenReport(solarProject)}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-econest-forest hover:bg-econest-deep text-white font-mono text-xs uppercase tracking-widest transition-all shadow-organic hover:scale-[1.02]"
              >
                <span>Read Full Technical Blueprint</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60">
                Peer-reviewed conceptual model
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Microgrid Telemetry Visualizer */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-econest-lightest dark:bg-[#071F14] border border-econest-forest/15 dark:border-white/10 shadow-organic relative overflow-hidden">
              {/* Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-econest-forest/10 dark:border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-econest-fresh animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-wider text-econest-deep dark:text-white uppercase">
                    Microgrid Telemetry Simulator
                  </span>
                </div>
                <div className="text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70">
                  Time: <span className="font-bold text-econest-deep dark:text-white">{simData.time}</span>
                </div>
              </div>

              {/* Simulation Phase Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { id: 'midday', label: '12:00 Midday', sub: 'Solar Surge' },
                  { id: 'evening', label: '19:00 Evening', sub: 'Grid Peak' },
                  { id: 'night', label: '02:00 Night', sub: 'Baseload' }
                ].map(phase => {
                  const isActive = simulationMode === phase.id;
                  return (
                    <button
                      key={phase.id}
                      onClick={() => setSimulationMode(phase.id)}
                      className={`p-2.5 rounded-xl text-center border transition-all text-xs ${
                        isActive
                          ? 'bg-econest-deep text-white border-econest-deep shadow-sm font-semibold'
                          : 'bg-white/60 dark:bg-white/5 text-econest-forest/75 dark:text-econest-natural/75 border-econest-forest/10 hover:bg-white dark:hover:bg-white/10'
                      }`}
                    >
                      <div className="font-mono text-[11px]">{phase.label}</div>
                      <div className={`text-[10px] ${isActive ? 'text-econest-fresh' : 'opacity-60'}`}>
                        {phase.sub}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Telemetry Diagram SVG */}
              <div className="relative p-6 rounded-2xl bg-white dark:bg-black/30 border border-econest-forest/10 mb-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 mb-2">
                  System Phase: <span className="text-econest-deep dark:text-white font-semibold">{simData.phase}</span>
                </div>

                {/* SVG Visual Scheme */}
                <div className="w-full h-44 relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 160">
                    <defs>
                      <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#52B788" />
                        <stop offset="100%" stopColor="#1F6B45" />
                      </linearGradient>
                    </defs>

                    {/* Node 1: 45 Rooftops */}
                    <g transform="translate(60, 80)">
                      <circle r="34" fill={simulationMode === 'midday' ? '#1F6B45' : '#0B2E24'} stroke="#52B788" strokeWidth="2" />
                      <Sun className="w-5 h-5 text-econest-natural" x="-10" y="-18" />
                      <text y="10" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">
                        45 ROOFS
                      </text>
                      <text y="20" textAnchor="middle" fill="#BFD8C2" fontSize="7" fontFamily="monospace">
                        {simData.solarInput}
                      </text>
                    </g>

                    {/* Connective Link 1 to Center */}
                    <path
                      d="M 94 80 L 166 80"
                      stroke="#4E9B6E"
                      strokeWidth={simulationMode === 'midday' ? '3' : '1.5'}
                      strokeDasharray={simulationMode === 'midday' ? '4 2' : 'none'}
                      className={simulationMode === 'midday' ? 'animate-pulse' : ''}
                    />

                    {/* Node 2: Central Commons Buffer */}
                    <g transform="translate(200, 80)">
                      <circle r="36" fill="#0B2E24" stroke="#D4B038" strokeWidth="2.5" />
                      <BatteryCharging className="w-5 h-5 text-amber-300" x="-10" y="-18" />
                      <text y="10" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">
                        BATTERY POOL
                      </text>
                      <text y="20" textAnchor="middle" fill="#E2E8F0" fontSize="7" fontFamily="monospace">
                        {simData.batteryStatus.split(' · ')[1]}
                      </text>
                    </g>

                    {/* Connective Link 2 to Grid / Homes */}
                    <path
                      d="M 236 80 L 306 80"
                      stroke="#52B788"
                      strokeWidth={simulationMode === 'evening' ? '3' : '1.5'}
                      strokeDasharray={simulationMode === 'evening' ? '4 2' : 'none'}
                      className={simulationMode === 'evening' ? 'animate-pulse' : ''}
                    />

                    {/* Node 3: District Load */}
                    <g transform="translate(340, 80)">
                      <circle r="34" fill={simulationMode === 'evening' ? '#1F6B45' : '#0B2E24'} stroke="#52B788" strokeWidth="2" />
                      <Zap className="w-5 h-5 text-emerald-300" x="-10" y="-18" />
                      <text y="10" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">
                        DISTRICT LOAD
                      </text>
                      <text y="20" textAnchor="middle" fill="#BFD8C2" fontSize="7" fontFamily="monospace">
                        Peakers: 0%
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Status Telemetry Pills */}
                <div className="grid grid-cols-2 gap-2 mt-2 pt-3 border-t border-econest-forest/10 dark:border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-econest-forest/60 dark:text-econest-natural/60 text-[10px] uppercase block">
                      Grid Independence
                    </span>
                    <span className="font-bold text-econest-deep dark:text-white">{simData.gridDraw}</span>
                  </div>
                  <div>
                    <span className="text-econest-forest/60 dark:text-econest-natural/60 text-[10px] uppercase block">
                      Carbon Rate Dampened
                    </span>
                    <span className="font-bold text-econest-fresh">{simData.carbonDampening}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Narrative Explanation */}
              <p className="text-xs text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
                {simData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
