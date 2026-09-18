import React, { useState } from 'react';
import { Users, Network, ArrowRight } from 'lucide-react';

/**
 * TheCompoundEffect
 * Interactive propagation simulation demonstrating how individual micro-habits compound
 * into community and biospheric transformations through social multiplication.
 * Features an interactive network where nodes multiply and pathways expand as scale increases.
 */
export default function TheCompoundEffect({ totals = {}, theme = 'day' }) {
  const [activeScaleIndex, setActiveScaleIndex] = useState(2); // Default to 100 people

  const scales = [
    {
      id: 'scale-1',
      population: 1,
      label: '1 Person',
      multiplier: 1,
      factor: '1x',
      scope: 'Conscious Individual',
      headline: 'The Catalyst: Disrupting Inertia',
      description: 'Your conscious daily choice breaks through legacy habits and establishes an intentional baseline.',
      nodeCount: 1,
      networkTier: 'seed',
    },
    {
      id: 'scale-10',
      population: 10,
      label: '10 People',
      multiplier: 10,
      factor: '10x',
      scope: 'Domestic Cluster',
      headline: 'The Routine: Shared Living Norms',
      description: 'Shared habits across households convert individual vigilance into an automatic cultural standard.',
      nodeCount: 10,
      networkTier: 'cluster',
    },
    {
      id: 'scale-100',
      population: 100,
      label: '100 People',
      multiplier: 100,
      factor: '100x',
      scope: 'Neighborhood Block',
      headline: 'The Collective: Micro-Infrastructure',
      description: 'A neighborhood block pools renewable microgrids, shared tool libraries, and local compost hubs.',
      nodeCount: 28,
      networkTier: 'mesh',
    },
    {
      id: 'scale-1000',
      population: 1000,
      label: '1,000 People',
      multiplier: 1000,
      factor: '1,000x',
      scope: 'Municipal Corridor',
      headline: 'The Corridor: Urban Shift',
      description: 'Aggregate regional adoption justifies dedicated bike transit corridors and circular supply chains.',
      nodeCount: 52,
      networkTier: 'corridor',
    },
    {
      id: 'scale-10000',
      population: 10000,
      label: '10,000 People',
      multiplier: 10000,
      factor: '10,000x',
      scope: 'Regional Biosphere',
      headline: 'The Biome: Self-Regulating Equilibrium',
      description: 'Continental biomes re-stabilize: groundwater aquifers recharge and regional topsoil carbon sinks restore.',
      nodeCount: 84,
      networkTier: 'biosphere',
    },
  ];

  const currentScale = scales[activeScaleIndex];
  const mult = currentScale.multiplier;

  // Scaled values for 30 days of collective action
  const scaledCarbon = Math.round((totals.carbon || 1.8) * mult * 30).toLocaleString();
  const scaledWater = Math.round((totals.water || 45) * mult * 30).toLocaleString();
  const scaledEnergy = Math.round((totals.energy || 3.4) * mult * 30).toLocaleString();

  // Generate SVG network coordinates based on scale
  const renderNetworkVisual = () => {
    const CX = 280;
    const CY = 175;
    const nodeCount = currentScale.nodeCount;

    if (nodeCount === 1) {
      return (
        <g className="transition-all duration-500">
          <circle cx={CX} cy={CY} r="65" fill="#4E9B6E" fillOpacity="0.1" />
          <circle cx={CX} cy={CY} r="45" stroke="#4E9B6E" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" className="animate-spin-slow" />
          <circle cx={CX} cy={CY} r="18" fill="#0B2E24" stroke="#4E9B6E" strokeWidth="2.5" />
          <circle cx={CX} cy={CY} r="6" fill="#A3E635" />
          <text x={CX} y={CY + 38} textAnchor="middle" fill="#4E9B6E" fontSize="10" fontFamily="monospace" fontWeight="600">
            CATALYST SEED
          </text>
        </g>
      );
    }

    // Generate deterministic constellation points around center
    const nodes = [];
    const lines = [];
    const radiusRings = [45, 85, 125, 155];

    for (let i = 0; i < nodeCount; i++) {
      const ringIdx = i % radiusRings.length;
      const r = radiusRings[ringIdx];
      const angle = (i * (360 / nodeCount) + (i * 17)) * (Math.PI / 180);
      const x = Math.round(CX + r * Math.cos(angle));
      const y = Math.round(CY + r * Math.sin(angle));
      nodes.push({ x, y, ringIdx, id: i });
    }

    // Create interconnected conduit lines to adjacent and central nodes
    for (let i = 0; i < nodes.length; i++) {
      // Connect to center if within inner ring
      if (nodes[i].ringIdx === 0) {
        lines.push({ x1: CX, y1: CY, x2: nodes[i].x, y2: nodes[i].y, key: `center-${i}` });
      }
      // Connect to neighbor
      const neighbor = nodes[(i + 1) % nodes.length];
      lines.push({ x1: nodes[i].x, y1: nodes[i].y, x2: neighbor.x, y2: neighbor.y, key: `adj-${i}` });

      // Cross links for denser networks
      if (nodeCount >= 28 && i % 3 === 0) {
        const cross = nodes[(i + 5) % nodes.length];
        lines.push({ x1: nodes[i].x, y1: nodes[i].y, x2: cross.x, y2: cross.y, key: `cross-${i}` });
      }
    }

    return (
      <g className="transition-all duration-700">
        {/* Central Core */}
        <circle cx={CX} cy={CY} r="14" fill="#0B2E24" stroke="#4E9B6E" strokeWidth="2" />
        <circle cx={CX} cy={CY} r="4" fill="#BFD8C2" />

        {/* Ambient expansion aura */}
        <circle cx={CX} cy={CY} r={radiusRings[Math.min(radiusRings.length - 1, Math.floor(nodeCount / 20))]} fill="#4E9B6E" fillOpacity="0.05" />

        {/* Interconnected Conduits */}
        {lines.map((l) => (
          <line
            key={l.key}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#3D8B57"
            strokeWidth={nodeCount >= 52 ? "0.8" : "1.2"}
            strokeOpacity={nodeCount >= 52 ? "0.35" : "0.5"}
          />
        ))}

        {/* Network Nodes */}
        {nodes.map((n) => (
          <g key={`node-${n.id}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r={nodeCount > 50 ? "2.5" : "3.5"}
              fill="#0B3D2E"
              stroke="#68D391"
              strokeWidth={nodeCount > 50 ? "1" : "1.5"}
            />
            {n.id % 7 === 0 && (
              <circle cx={n.x} cy={n.y} r={nodeCount > 50 ? "5" : "7"} stroke="#4BAFA1" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
            )}
          </g>
        ))}
      </g>
    );
  };

  return (
    <section className="relative w-full py-16 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-forest-600 dark:text-forest-400">
                04 // SYSTEMIC MULTIPLICATION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-900 dark:text-forest-50 tracking-tight leading-tight">
              The Compound Propagation
            </h2>
          </div>

          <div className="space-y-2 max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono uppercase tracking-widest text-amber-800 dark:text-amber-300 font-bold">
              SCENARIO MODEL — NOT A PREDICTION
            </div>
            <p className="text-xs sm:text-sm text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans">
              Systems heal when isolated micro-habits replicate across human networks.
              Explore how network density accelerates ecological return.
            </p>
          </div>
        </div>

        {/* Interactive Scale Selector Scrub Bar */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {scales.map((s, idx) => {
            const isSelected = activeScaleIndex === idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveScaleIndex(idx)}
                className={`min-h-[44px] px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 shadow-md scale-105 ring-2 ring-forest-500/30'
                    : 'bg-forest-800/[0.04] dark:bg-forest-100/[0.03] text-forest-700 dark:text-forest-300 hover:bg-forest-800/[0.08] dark:hover:bg-forest-100/[0.08]'
                }`}
                data-cursor="CLICK"
                aria-pressed={isSelected}
              >
                <Users className="w-3.5 h-3.5" />
                <span>{s.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isSelected
                      ? 'bg-forest-700 text-forest-200 dark:bg-forest-200 dark:text-forest-900 font-bold'
                      : 'bg-forest-800/10 dark:bg-forest-100/10 text-forest-600 dark:text-forest-400'
                  }`}
                >
                  {s.factor}
                </span>
              </button>
            );
          })}
        </div>

        {/* Network Simulation Canvas & Telemetry Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-forest-900/[0.02] dark:bg-forest-100/[0.02] border border-forest-800/10 dark:border-forest-200/10">
          {/* Left: Dynamic SVG Propagation Network (7 cols) */}
          <div className="lg:col-span-7 relative h-[320px] sm:h-[360px] bg-forest-900/[0.02] dark:bg-forest-100/[0.02] rounded-2xl border border-forest-800/10 dark:border-forest-200/10 flex items-center justify-center p-4 overflow-hidden">
            <svg
              viewBox="0 0 560 350"
              className="w-full h-full drop-shadow-sm select-none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label={`Compound propagation network visual at scale ${currentScale.label}`}
            >
              {renderNetworkVisual()}
            </svg>

            {/* Network Tier Pill */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50/90 dark:bg-forest-950/90 border border-forest-800/15 text-[10px] font-mono uppercase tracking-wider text-forest-700 dark:text-forest-300 backdrop-blur-xs">
              <Network className="w-3 h-3 text-forest-500" />
              <span>Network Scale: {currentScale.scope}</span>
            </div>

            {/* Node count telemetry */}
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-forest-500 bg-cream-50/80 dark:bg-forest-950/80 px-2.5 py-1 rounded-full border border-forest-800/10">
              Active Nodes: {currentScale.nodeCount} | Density: {currentScale.factor}
            </div>
          </div>

          {/* Right: Narrative Context & Supporting Metrics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-forest-500 block mb-1">
                Social Multiplier Tier {activeScaleIndex + 1} of 5
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 dark:text-forest-50 tracking-tight leading-snug">
                {currentScale.headline}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-forest-700/80 dark:text-forest-300/80 leading-relaxed font-sans">
                {currentScale.description}
              </p>
            </div>

            {/* Supporting Metrics Panel */}
            <div className="space-y-3 pt-3 border-t border-forest-800/10 dark:border-forest-200/10">
              <div className="text-[10px] font-mono uppercase tracking-widest text-forest-500">
                Modelled 30-Day Network Yield
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-forest-800/[0.03] dark:bg-forest-100/[0.03] border border-forest-800/10">
                <span className="text-xs font-sans text-forest-700 dark:text-forest-300">
                  Carbon Avoided
                </span>
                <span className="font-serif text-lg text-forest-900 dark:text-forest-50 font-light tabular-nums">
                  {scaledCarbon} <span className="text-xs font-mono font-normal">kg CO₂e</span>
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-forest-800/[0.03] dark:bg-forest-100/[0.03] border border-forest-800/10">
                <span className="text-xs font-sans text-forest-700 dark:text-forest-300">
                  Hydrology Conserved
                </span>
                <span className="font-serif text-lg text-forest-900 dark:text-forest-50 font-light tabular-nums">
                  {scaledWater} <span className="text-xs font-mono font-normal">Liters</span>
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-forest-800/[0.03] dark:bg-forest-100/[0.03] border border-forest-800/10">
                <span className="text-xs font-sans text-forest-700 dark:text-forest-300">
                  Clean Microgrid Yield
                </span>
                <span className="font-serif text-lg text-forest-900 dark:text-forest-50 font-light tabular-nums">
                  {scaledEnergy} <span className="text-xs font-mono font-normal">kWh</span>
                </span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-forest-500 italic">
              Illustrative scenario model. Actual community yield depends on local infrastructure participation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
