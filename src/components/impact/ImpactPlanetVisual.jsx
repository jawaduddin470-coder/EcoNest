import React, { useState } from 'react';

/**
 * ImpactPlanetVisual
 * Lightweight, high-performance SVG planetary visualization illustrating
 * planetary biospheric response to selected ecological interventions.
 * Features an interactive legend that emphasizes specific biospheric pathways.
 */
export default function ImpactPlanetVisual({ selectedActionIds = [], totals = {}, theme = 'day' }) {
  const [activeLayer, setActiveLayer] = useState('all');

  const layers = [
    { id: 'all', label: 'Composite Biosphere', color: '#10B981', symbol: '🌍' },
    { id: 'water', label: 'Watershed Recharge', color: '#38BDF8', symbol: '💧' },
    { id: 'energy', label: 'Clean Microgrid', color: '#FBBF24', symbol: '⚡' },
    { id: 'canopy', label: 'Living Soil & Canopy Sinks', color: '#34D399', symbol: '🌱' },
  ];

  const isWater = activeLayer === 'all' || activeLayer === 'water';
  const isEnergy = activeLayer === 'all' || activeLayer === 'energy';
  const isCanopy = activeLayer === 'all' || activeLayer === 'canopy';

  return (
    <section className="relative w-full py-16 px-6 sm:px-10 lg:px-16 bg-forest-900/[0.015] dark:bg-forest-100/[0.01] border-t border-b border-forest-800/10 dark:border-forest-200/10 overflow-hidden text-left">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
                09 // PLANETARY SCALE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-900 dark:text-forest-50 tracking-tight leading-tight">
              The Biosphere at Scale
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans">
            Every aggregated cubic meter of soil enriched and liter of greywater recycled
            joins planetary hydrological and nutrient cycles. Select a lens to trace its pathway.
          </p>
        </div>

        {/* Interactive Layer Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {layers.map((l) => {
            const isSelected = activeLayer === l.id;
            return (
              <button
                key={l.id}
                onClick={() => setActiveLayer(l.id)}
                className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 font-semibold shadow-sm ring-2 ring-forest-500/30'
                    : 'bg-forest-800/[0.04] dark:bg-forest-100/[0.03] text-forest-700 dark:text-forest-300 hover:bg-forest-800/[0.08] dark:hover:bg-forest-100/[0.08]'
                }`}
                data-cursor="CLICK"
                aria-pressed={isSelected}
              >
                <span>{l.symbol}</span>
                <span>{l.label}</span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: l.color }}
                />
              </button>
            );
          })}
        </div>

        {/* Planet SVG Visual Canvas */}
        <div className="relative flex items-center justify-center my-4">
          <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px]">
            {/* Atmospheric outer glow */}
            <div className="absolute inset-0 rounded-full bg-forest-500/10 blur-2xl pointer-events-none" />

            <svg
              viewBox="0 0 360 360"
              className="w-full h-full drop-shadow-xl select-none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Planetary biospheric response diagram"
            >
              <defs>
                <radialGradient id="planetGlow2" cx="38%" cy="32%" r="65%">
                  <stop offset="0%" stopColor="#2E6F40" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#1B4D2E" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#0B2B18" stopOpacity="1" />
                </radialGradient>

                <linearGradient id="orbitalRingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4BAFA1" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#A3E635" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#4BAFA1" stopOpacity="0.8" />
                </linearGradient>

                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Atmospheric halo ring */}
              <circle cx="180" cy="180" r="128" stroke="#4E9B6E" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 6" />

              {/* Planetary Body Sphere */}
              <circle cx="180" cy="180" r="120" fill="url(#planetGlow2)" />

              {/* Continent Form Geometries */}
              <path
                d="M 130,105 Q 165,90 195,115 T 235,150 Q 255,190 220,215 T 175,250 Q 130,265 115,225 T 120,155 Z"
                fill="#3E885B"
                fillOpacity="0.45"
              />
              <path
                d="M 210,135 Q 240,125 270,145 T 280,190 Q 265,210 240,205 T 215,168 Z"
                fill="#4E9B6E"
                fillOpacity="0.4"
              />

              {/* Layer: Watershed Recharge Pathways */}
              <g className="transition-opacity duration-500" opacity={isWater ? (activeLayer === 'water' ? 1 : 0.85) : 0.15}>
                <path
                  d="M 150,120 Q 170,150 185,180 T 205,235"
                  stroke="#38BDF8"
                  strokeWidth={activeLayer === 'water' ? "3" : "2"}
                  strokeOpacity="0.85"
                  fill="none"
                  strokeDasharray="4 3"
                  filter={activeLayer === 'water' ? 'url(#softGlow)' : undefined}
                />
                <path
                  d="M 175,145 Q 200,155 235,178"
                  stroke="#38BDF8"
                  strokeWidth={activeLayer === 'water' ? "2.5" : "1.6"}
                  strokeOpacity="0.75"
                  fill="none"
                />
                <circle cx="185" cy="180" r="3.5" fill="#38BDF8" />
                <circle cx="205" cy="235" r="4.5" fill="#38BDF8" fillOpacity="0.7" />

                {/* Flowing water pulse */}
                {isWater && (
                  <circle r="3" fill="#E0F2FE">
                    <animateMotion path="M 150,120 Q 170,150 185,180 T 205,235" dur="4.5s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>

              {/* Layer: Microgrid Energy Arcs */}
              <g className="transition-opacity duration-500" opacity={isEnergy ? (activeLayer === 'energy' ? 1 : 0.85) : 0.15}>
                <path
                  d="M 105,155 Q 140,120 185,120 T 255,145"
                  stroke="#FBBF24"
                  strokeWidth={activeLayer === 'energy' ? "2.5" : "1.8"}
                  strokeOpacity="0.9"
                  fill="none"
                  strokeDasharray="3 3"
                  filter={activeLayer === 'energy' ? 'url(#softGlow)' : undefined}
                />
                <circle cx="105" cy="155" r="3.5" fill="#FBBF24" />
                <circle cx="185" cy="120" r="3.5" fill="#FBBF24" />
                <circle cx="255" cy="145" r="3.5" fill="#FBBF24" />

                {/* Flowing energy pulse */}
                {isEnergy && (
                  <circle r="3" fill="#FFFBEB">
                    <animateMotion path="M 105,155 Q 140,120 185,120 T 255,145" dur="3.8s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>

              {/* Layer: Forest & Soil Biological Sinks */}
              <g className="transition-opacity duration-500" opacity={isCanopy ? (activeLayer === 'canopy' ? 1 : 0.85) : 0.15}>
                <circle cx="155" cy="165" r="16" fill="#10B981" fillOpacity="0.25" stroke="#10B981" strokeWidth={activeLayer === 'canopy' ? "2" : "1"} />
                <circle cx="195" cy="205" r="20" fill="#10B981" fillOpacity="0.22" stroke="#10B981" strokeWidth={activeLayer === 'canopy' ? "2" : "1"} />
                <circle cx="235" cy="175" r="14" fill="#10B981" fillOpacity="0.25" stroke="#10B981" strokeWidth={activeLayer === 'canopy' ? "2" : "1"} />
                <text x="155" y="169" textAnchor="middle" fontSize="10">🌱</text>
                <text x="195" y="209" textAnchor="middle" fontSize="11">🍃</text>
              </g>

              {/* Equatorial Orbital Nutrient Ring */}
              <ellipse
                cx="180"
                cy="180"
                rx="155"
                ry="50"
                stroke="url(#orbitalRingGrad2)"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(-15 180 180)"
              />

              {/* Orbiting Telemetry Beacon */}
              <circle cx="315" cy="145" r="4.5" fill="#4BAFA1" className="animate-ping" />
              <circle cx="315" cy="145" r="3" fill="#A3E635" />
            </svg>
          </div>
        </div>

        {/* Interactive Legend Buttons */}
        <div className="max-w-2xl mx-auto mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-forest-600 dark:text-forest-400">
          <button
            onClick={() => setActiveLayer('water')}
            className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-2 ${
              activeLayer === 'water'
                ? 'bg-sky-500/10 border-sky-400 text-sky-700 dark:text-sky-300 font-semibold'
                : 'border-transparent hover:border-forest-500/30'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span>Watershed Recharge (Emphasis)</span>
          </button>

          <button
            onClick={() => setActiveLayer('energy')}
            className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-2 ${
              activeLayer === 'energy'
                ? 'bg-amber-500/10 border-amber-400 text-amber-700 dark:text-amber-300 font-semibold'
                : 'border-transparent hover:border-forest-500/30'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span>Clean Microgrid (Emphasis)</span>
          </button>

          <button
            onClick={() => setActiveLayer('canopy')}
            className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-2 ${
              activeLayer === 'canopy'
                ? 'bg-emerald-500/10 border-emerald-400 text-emerald-700 dark:text-emerald-300 font-semibold'
                : 'border-transparent hover:border-forest-500/30'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>Living Soil & Canopy Sinks</span>
          </button>
        </div>
      </div>
    </section>
  );
}
