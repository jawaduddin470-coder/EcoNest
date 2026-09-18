import React, { useState } from 'react';
import { Activity, ShieldAlert, Layers, ArrowRight, Compass } from 'lucide-react';
import { IMPACT_DIMENSIONS } from '../../data/brandData';

/**
 * LivingImpactField (Phase 4.1 Refinement)
 * Clean, spatial, premium 4-layer ecological propagation visualization:
 * Layer 1: Background System (subtle concentric rings & orbital tracks)
 * Layer 2: Connection System (thin non-competing lines + single active trace)
 * Layer 3: Dimension Nodes (mathematically spaced radial nodes with clear outside labels)
 * Layer 4: Active Information (dedicated Selected Dimension Panel cleanly separated BELOW the graph)
 * Followed by the synchronized 6-card Metric Dock.
 */
export default function LivingImpactField({
  activeDimensionId = 'carbon',
  onSelectDimension = () => {},
  selectedActionCount = 5,
  totals = { carbon: 9.3, water: 128, energy: 13.5, materials: 16, biodiversity: 4, community: 19 },
  theme = 'day',
}) {
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Geometric Anchor & Constants for SVG viewBox="0 0 840 520"
  const CX = 420;
  const CY = 260;
  const R = 175;

  const currentActiveId = hoveredNodeId || activeDimensionId;

  // 3-Stage Causal Propagation Pathways: Your Action -> Consequence -> Biospheric Sink
  const causalPathways = {
    carbon: [
      { step: '01 / ACTION', label: 'Commute & Thermal Choice' },
      { step: '02 / CONSEQUENCE', label: 'Reduced Combustion Flux' },
      { step: '03 / BIOSPHERIC SINK', label: 'Atmospheric Drawdown & Canopy Fixation' },
    ],
    water: [
      { step: '01 / ACTION', label: 'Domestic Greywater Diversion' },
      { step: '02 / CONSEQUENCE', label: 'Eliminated Storm Runoff Scour' },
      { step: '03 / BIOSPHERIC SINK', label: 'Perennial Aquifer Recharge' },
    ],
    energy: [
      { step: '01 / ACTION', label: 'Midday Solar Load Shifting' },
      { step: '02 / CONSEQUENCE', label: 'Peaker Plant Displacement' },
      { step: '03 / BIOSPHERIC SINK', label: 'Zero-Carbon Distributed Grid' },
    ],
    materials: [
      { step: '01 / ACTION', label: 'Standardized Deposit Refill' },
      { step: '02 / CONSEQUENCE', label: 'Zero Single-Use Packaging' },
      { step: '03 / BIOSPHERIC SINK', label: 'Closed-Loop Circular Feedstock' },
    ],
    biodiversity: [
      { step: '01 / ACTION', label: 'Regenerative Regional Diet' },
      { step: '02 / CONSEQUENCE', label: 'Living Topsoil Mycelial Network' },
      { step: '03 / BIOSPHERIC SINK', label: 'Contiguous Pollinator Buffer' },
    ],
    community: [
      { step: '01 / ACTION', label: 'Tool Library & Shared Microgrid' },
      { step: '02 / CONSEQUENCE', label: 'Decentralized Mutual Support' },
      { step: '03 / BIOSPHERIC SINK', label: 'Regional Climate Sovereignty' },
    ],
  };

  /**
   * Radial Angular Distribution (Clockwise from top):
   * 0: CARBON      (Angle: -90° / Top)
   * 1: WATER       (Angle: -30° / Top-Right)
   * 2: ENERGY      (Angle: +30° / Bottom-Right)
   * 3: MATERIALS   (Angle: +90° / Bottom)
   * 4: BIODIVERSITY (Angle: +150° / Bottom-Left)
   * 5: COMMUNITY   (Angle: +210° / Top-Left)
   */
  const nodeLayoutConfig = [
    { id: 'carbon', angleDeg: -90, labelAlign: 'top' },
    { id: 'water', angleDeg: -30, labelAlign: 'right-top' },
    { id: 'energy', angleDeg: 30, labelAlign: 'right-bottom' },
    { id: 'materials', angleDeg: 90, labelAlign: 'bottom' },
    { id: 'biodiversity', angleDeg: 150, labelAlign: 'left-bottom' },
    { id: 'community', angleDeg: 210, labelAlign: 'left-top' },
  ];

  const NODES = nodeLayoutConfig.map((cfg) => {
    const dim = IMPACT_DIMENSIONS.find((d) => d.id === cfg.id) || IMPACT_DIMENSIONS[0];
    const angleRad = (cfg.angleDeg * Math.PI) / 180;
    const x = Math.round(CX + R * Math.cos(angleRad));
    const y = Math.round(CY + R * Math.sin(angleRad));
    const isSelected = dim.id === activeDimensionId;
    const isHovered = dim.id === hoveredNodeId;
    const isTarget = dim.id === currentActiveId;

    let dynamicValue = totals[dim.id] !== undefined ? totals[dim.id] : dim.baselineValue;
    if (typeof dynamicValue === 'number' && dynamicValue % 1 !== 0) {
      dynamicValue = dynamicValue.toFixed(1);
    }

    return {
      ...dim,
      x,
      y,
      angleDeg: cfg.angleDeg,
      labelAlign: cfg.labelAlign,
      isSelected,
      isHovered,
      isTarget,
      dynamicValue,
    };
  });

  const activeDimObj = NODES.find((n) => n.id === currentActiveId) || NODES[0];
  const activePathway = causalPathways[activeDimObj.id] || causalPathways.carbon;

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 lg:px-12 text-left select-none">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Header: Clean Hierarchy (Eyebrow -> Headline -> Subtext) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-forest-800/10 dark:border-forest-200/10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase font-mono tracking-widest text-forest-600 dark:text-forest-400">
              <Activity className="w-3.5 h-3.5 text-forest-500 animate-pulse" />
              <span>02 // THE LIVING IMPACT FIELD &middot; SYSTEMIC PROPAGATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-forest-900 dark:text-forest-50 tracking-tight">
              How One Choice Propagates Across Six Living Systems
            </h2>
            <p className="text-xs sm:text-sm text-forest-700/80 dark:text-forest-300/80 font-sans leading-relaxed max-w-xl font-light">
              Your intentional micro-decisions do not stay isolated. Select any living dimension to trace its downstream biospheric feedback loop.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-forest-700 dark:text-forest-300 bg-forest-800/[0.04] dark:bg-forest-100/[0.04] px-4 py-2 rounded-full border border-forest-800/10 dark:border-forest-200/10 self-start md:self-auto shrink-0">
            <ShieldAlert className="w-3.5 h-3.5 text-forest-500" />
            <span>Active Interventions: {selectedActionCount}</span>
          </div>
        </div>

        {/* CONTAINER: The Living Impact Instrument */}
        <div className="rounded-3xl bg-forest-900/[0.02] dark:bg-forest-100/[0.015] border border-forest-800/10 dark:border-forest-200/10 p-4 sm:p-8 space-y-8 shadow-xs">
          
          {/* 1. RADIAL GRAPH CONTAINER (Dedicated visual space without card overlaps) */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[520px] flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 840 520"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Six-dimensional radial living impact field"
            >
              <defs>
                {/* Subtle Central Ambient Aura */}
                <radialGradient id="fieldCoreAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4E9B6E" stopOpacity="0.18" />
                  <stop offset="50%" stopColor="#1F6B45" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#0B2E24" stopOpacity="0" />
                </radialGradient>

                {/* Soft Halo for Active Target Node */}
                <filter id="nodeHaloGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* LAYER 1: BACKGROUND SYSTEM */}
              {/* Inner ambient soft gradient */}
              <circle cx={CX} cy={CY} r="180" fill="url(#fieldCoreAura)" className="pointer-events-none" />

              {/* Subtle Concentric Orbital Guides */}
              <circle cx={CX} cy={CY} r="75" stroke="#3D8B57" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="3 4" className="pointer-events-none" />
              <circle cx={CX} cy={CY} r={R} stroke="#3D8B57" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 6" className="pointer-events-none" />
              <circle cx={CX} cy={CY} r="230" stroke="#3D8B57" strokeWidth="1" strokeOpacity="0.06" className="pointer-events-none" />

              {/* Secondary Dotted Hexagonal Web connecting adjacent dimensions */}
              <polygon
                points={NODES.map((n) => `${n.x},${n.y}`).join(' ')}
                stroke="#3D8B57"
                strokeWidth="1"
                strokeDasharray="4 5"
                opacity="0.18"
                className="pointer-events-none"
              />

              {/* Cross-hyphae subtle links between opposite dimensions */}
              <g opacity="0.08" stroke="#489D63" strokeWidth="0.8" strokeDasharray="3 5" className="pointer-events-none">
                <line x1={NODES[0].x} y1={NODES[0].y} x2={NODES[3].x} y2={NODES[3].y} />
                <line x1={NODES[1].x} y1={NODES[1].y} x2={NODES[4].x} y2={NODES[4].y} />
                <line x1={NODES[2].x} y1={NODES[2].y} x2={NODES[5].x} y2={NODES[5].y} />
              </g>

              {/* LAYER 2: CONNECTION SYSTEM (Thin non-competing lines) */}
              {NODES.map((node) => {
                const isTarget = node.isTarget;
                const hasFocus = !!currentActiveId;
                const lineOpacity = isTarget ? 0.95 : hasFocus ? 0.2 : 0.4;
                const lineWidth = isTarget ? 2.5 : 1.2;

                return (
                  <g key={`connection-${node.id}`} className="transition-opacity duration-300">
                    {/* Primary Radial Line */}
                    <line
                      x1={CX}
                      y1={CY}
                      x2={node.x}
                      y2={node.y}
                      stroke={node.accent}
                      strokeWidth={lineWidth}
                      strokeLinecap="round"
                      opacity={lineOpacity}
                      className="transition-all duration-300"
                    />

                    {/* Animated Traveling Trace: Active Connection Only */}
                    {isTarget && (
                      <>
                        {/* Primary pulse circle moving outward */}
                        <circle r="4.5" fill={node.accent}>
                          <animateMotion
                            path={`M ${CX} ${CY} L ${node.x} ${node.y}`}
                            dur="2.4s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        {/* Secondary echo pulse */}
                        <circle r="3" fill="#FFFFFF" opacity="0.8">
                          <animateMotion
                            path={`M ${CX} ${CY} L ${node.x} ${node.y}`}
                            dur="2.4s"
                            begin="1.2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </>
                    )}
                  </g>
                );
              })}

              {/* LAYER 3A: CENTRAL ANCHOR NODE (YOUR ACTION) */}
              <g className="select-none pointer-events-none">
                {/* Decorative slow spin outer dashed ring */}
                <circle
                  cx={CX}
                  cy={CY}
                  r="44"
                  stroke="#BFD8C2"
                  strokeWidth="1"
                  opacity="0.35"
                  strokeDasharray="4 4"
                  className="animate-spin-slow"
                />
                {/* Core Anchor Circle */}
                <circle
                  cx={CX}
                  cy={CY}
                  r="34"
                  fill="#0B2E24"
                  stroke="#4E9B6E"
                  strokeWidth="2"
                />
                {/* Clean Typography Anchor */}
                <text
                  x={CX}
                  y={CY - 6}
                  textAnchor="middle"
                  fill="#BFD8C2"
                  fontSize="9"
                  fontWeight="bold"
                  fontFamily="monospace"
                  letterSpacing="0.1em"
                >
                  YOUR
                </text>
                <text
                  x={CX}
                  y={CY + 8}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="serif"
                >
                  ACTION
                </text>
                <text
                  x={CX}
                  y={CY + 20}
                  textAnchor="middle"
                  fill="#74D0C0"
                  fontSize="7.5"
                  fontFamily="monospace"
                >
                  Catalyst Hub
                </text>
              </g>

              {/* LAYER 3B: SIX PERIPHERAL DIMENSION NODES & NON-OVERLAPPING LABELS */}
              {NODES.map((node) => {
                const isTarget = node.isTarget;
                const hasFocus = !!currentActiveId;
                const nodeOpacity = isTarget ? 1 : hasFocus ? 0.6 : 1;

                // Dedicated outside label coordinate offsets based on radial direction
                let labelX = node.x;
                let labelY = node.y;
                let textAnchor = 'middle';

                if (node.labelAlign === 'top') {
                  // Carbon (Top): text sits 40px above node
                  labelY = node.y - 36;
                  textAnchor = 'middle';
                } else if (node.labelAlign === 'bottom') {
                  // Materials (Bottom): text sits 40px below node
                  labelY = node.y + 40;
                  textAnchor = 'middle';
                } else if (node.labelAlign === 'right-top') {
                  // Water (Top-Right): text sits to the right, slightly elevated
                  labelX = node.x + 36;
                  labelY = node.y - 4;
                  textAnchor = 'start';
                } else if (node.labelAlign === 'right-bottom') {
                  // Energy (Bottom-Right): text sits to the right, slightly lower
                  labelX = node.x + 36;
                  labelY = node.y + 8;
                  textAnchor = 'start';
                } else if (node.labelAlign === 'left-bottom') {
                  // Biodiversity (Bottom-Left): text sits to the left, slightly lower
                  labelX = node.x - 36;
                  labelY = node.y + 8;
                  textAnchor = 'end';
                } else if (node.labelAlign === 'left-top') {
                  // Community (Top-Left): text sits to the left, slightly elevated
                  labelX = node.x - 36;
                  labelY = node.y - 4;
                  textAnchor = 'end';
                }

                return (
                  <g
                    key={`node-${node.id}`}
                    className="cursor-pointer transition-all duration-300"
                    style={{ opacity: nodeOpacity }}
                    onClick={() => onSelectDimension(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    data-cursor="SELECT"
                    role="button"
                    tabIndex={0}
                    aria-label={`Select dimension 0${node.number} ${node.name}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectDimension(node.id);
                      }
                    }}
                  >
                    {/* Active Soft Halo */}
                    {isTarget && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="32"
                        stroke={node.accent}
                        strokeWidth="1.5"
                        opacity="0.4"
                        filter="url(#nodeHaloGlow)"
                      />
                    )}

                    {/* Node Circle Geometry */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isTarget ? '25' : '20'}
                      fill={isTarget ? '#0B2E24' : '#FFFFFF'}
                      stroke={node.accent}
                      strokeWidth={isTarget ? '2.5' : '1.8'}
                      className="transition-all duration-300"
                    />

                    {/* Symbol / Icon Inside Node */}
                    <text
                      x={node.x}
                      y={node.y + 5}
                      textAnchor="middle"
                      fontSize={isTarget ? '14' : '12'}
                      className="select-none pointer-events-none"
                    >
                      {node.symbol}
                    </text>

                    {/* Non-Overlapping Radial Label: Dimension Number & Name */}
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor={textAnchor}
                      fill={isTarget ? node.accent : '#1F6B45'}
                      fontSize={isTarget ? '11' : '10'}
                      fontWeight="bold"
                      fontFamily="monospace"
                      letterSpacing="0.08em"
                      className="pointer-events-none transition-colors duration-300"
                    >
                      00{node.number} / {node.name.toUpperCase()}
                    </text>

                    {/* Non-Overlapping Radial Label: Dynamic Metric Output */}
                    <text
                      x={labelX}
                      y={labelY + 14}
                      textAnchor={textAnchor}
                      fill="#555555"
                      fontSize="9.5"
                      fontFamily="monospace"
                      className="pointer-events-none"
                    >
                      {node.dynamicValue} {node.unit.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* LAYER 4: DEDICATED SELECTED DIMENSION PANEL (Positioned cleanly BELOW the graph) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-cream-50/90 dark:bg-forest-950/70 border border-forest-800/15 dark:border-forest-200/15 shadow-sm transition-all duration-300 space-y-6">
            
            {/* Top Bar: Dimension Header & Primary Output */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-forest-800/10 dark:border-forest-200/10">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{activeDimObj.symbol}</span>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest" style={{ color: activeDimObj.accent }}>
                    00{activeDimObj.number} / {activeDimObj.name}
                  </span>
                  <span className="text-forest-400">&middot;</span>
                  <span className="text-[10px] font-mono text-forest-500 uppercase tracking-wider">
                    Selected Dimension
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-forest-900 dark:text-forest-50">
                  {activeDimObj.headline}
                </h3>
              </div>

              <div className="flex items-baseline space-x-2 px-4 py-2 rounded-xl bg-forest-800/[0.04] dark:bg-forest-100/[0.04] border border-forest-800/10 self-start sm:self-auto">
                <span className="font-serif text-2xl font-bold text-forest-900 dark:text-forest-50 tabular-nums">
                  {activeDimObj.dynamicValue}
                </span>
                <span className="text-xs font-mono text-forest-700 dark:text-forest-300">
                  {activeDimObj.unit}
                </span>
                <span className="text-[10px] font-mono text-forest-500">
                  {activeDimObj.metricSuffix}
                </span>
              </div>
            </div>

            {/* Description Narrative */}
            <p className="text-xs sm:text-sm text-forest-700/85 dark:text-forest-300/85 font-sans leading-relaxed font-light max-w-3xl">
              {activeDimObj.description}
            </p>

            {/* Causal Propagation Pathway (Your Action -> Consequence -> Biospheric Sink) */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-forest-500">
                <Layers className="w-3.5 h-3.5" />
                <span>Propagating Causal Pathway</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {activePathway.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-forest-800/[0.03] dark:bg-forest-100/[0.03] border border-forest-800/10 dark:border-forest-200/10 flex flex-col justify-between"
                  >
                    <span className="text-[9px] font-mono font-bold text-forest-500 uppercase">
                      {stage.step}
                    </span>
                    <span className="text-xs font-mono font-semibold text-forest-900 dark:text-forest-100 mt-1 leading-snug">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6 DIMENSION METRIC DOCK (Visually linked to graph & panel) */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-forest-500 px-1">
              <span>Select Dimension Lens</span>
              <span className="italic">Synchronized with telemetry</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {NODES.map((node) => {
                const isSelected = node.id === activeDimensionId;
                return (
                  <button
                    key={node.id}
                    onClick={() => onSelectDimension(node.id)}
                    data-cursor="SELECT"
                    className={`min-h-[48px] p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-forest-900 text-cream-50 dark:bg-forest-100 dark:text-forest-950 shadow-sm ring-2 ring-forest-500/40 scale-[1.02]'
                        : 'bg-cream-50/60 dark:bg-forest-900/40 border-forest-800/10 dark:border-forest-200/10 hover:bg-cream-100 dark:hover:bg-forest-900/60 text-forest-900 dark:text-forest-50'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono uppercase font-bold flex items-center space-x-1 ${
                        isSelected ? 'text-forest-200 dark:text-forest-900' : 'text-forest-700 dark:text-forest-300'
                      }`}>
                        <span>{node.symbol}</span>
                        <span>{node.name}</span>
                      </span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: isSelected ? '#FFFFFF' : node.accent }}
                      />
                    </div>
                    <div className={`text-xs font-mono font-semibold truncate pt-1.5 ${isSelected ? 'text-cream-50 dark:text-forest-950' : 'text-forest-900 dark:text-forest-50'}`}>
                      {node.dynamicValue} <span className="text-[9px] opacity-75 font-normal">{node.metricSuffix}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
