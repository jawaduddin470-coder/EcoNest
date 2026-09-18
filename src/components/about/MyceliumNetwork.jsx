import React, { useState } from 'react';
import { MYCELIUM_TIERS } from '../../data/brandData';
import { Sparkles, GitBranch, ShieldAlert } from 'lucide-react';

// Procedurally generate 100 deterministic organic nodes & branching hyphae connections
const CX = 320;
const CY = 190;

const NODES = (() => {
  const list = [];
  // 0: You (Center Nucleus)
  list.push({ id: 0, x: CX, y: CY, parent: null, tier: 0, label: 'YOU' });

  // 1..3: Household (3 nodes, total 4)
  const a1 = [-45, 75, 195];
  for (let i = 0; i < 3; i++) {
    const rad = (a1[i] * Math.PI) / 180;
    list.push({
      id: i + 1,
      x: Math.round(CX + 62 * Math.cos(rad)),
      y: Math.round(CY + 50 * Math.sin(rad)),
      parent: 0,
      tier: 1,
      label: `Home 0${i + 1}`
    });
  }

  // 4..11: Community (8 nodes, total 12)
  for (let i = 0; i < 8; i++) {
    const angle = ((i * 45 - 20) * Math.PI) / 180;
    const p = (i % 3) + 1;
    list.push({
      id: i + 4,
      x: Math.round(CX + 118 * Math.cos(angle)),
      y: Math.round(CY + 88 * Math.sin(angle)),
      parent: p,
      tier: 2,
      label: `Local 0${i + 1}`
    });
  }

  // 12..27: City (16 nodes, total 28)
  for (let i = 0; i < 16; i++) {
    const angle = ((i * 22.5 - 10) * Math.PI) / 180;
    const p = (i % 8) + 4;
    list.push({
      id: i + 12,
      x: Math.round(CX + 176 * Math.cos(angle)),
      y: Math.round(CY + 126 * Math.sin(angle)),
      parent: p,
      tier: 3,
      label: `Metro ${i + 1}`
    });
  }

  // 28..51: Ecosystem (24 nodes, total 52)
  for (let i = 0; i < 24; i++) {
    const angle = ((i * 15 - 5) * Math.PI) / 180;
    const p = (i % 16) + 12;
    list.push({
      id: i + 28,
      x: Math.round(CX + 236 * Math.cos(angle)),
      y: Math.round(CY + 154 * Math.sin(angle)),
      parent: p,
      tier: 4,
      label: `Biome ${i + 1}`
    });
  }

  // 52..99: Planetary (48 nodes, total 100)
  for (let i = 0; i < 48; i++) {
    const angle = ((i * 7.5) * Math.PI) / 180;
    const p = (i % 24) + 28;
    list.push({
      id: i + 52,
      x: Math.round(CX + 286 * Math.cos(angle)),
      y: Math.round(CY + 172 * Math.sin(angle)),
      parent: p,
      tier: 5,
      label: `Node ${i + 52}`
    });
  }

  return list;
})();

// Cross-links between sibling hyphae (biological anastomosis)
const ANASTOMOSIS_EDGES = [
  // Community cross-links (Tier 2)
  { from: 4, to: 5, tier: 2 },
  { from: 6, to: 7, tier: 2 },
  { from: 8, to: 9, tier: 2 },
  { from: 10, to: 11, tier: 2 },
  // City cross-links (Tier 3)
  { from: 12, to: 13, tier: 3 },
  { from: 15, to: 16, tier: 3 },
  { from: 19, to: 20, tier: 3 },
  { from: 23, to: 24, tier: 3 },
  // Ecosystem cross-links (Tier 4)
  { from: 28, to: 29, tier: 4 },
  { from: 34, to: 35, tier: 4 },
  { from: 40, to: 41, tier: 4 },
  { from: 46, to: 47, tier: 4 }
];

export default function MyceliumNetwork() {
  const [activeTierIndex, setActiveTierIndex] = useState(2); // Defaults to Community (Tier 03)
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeTier = MYCELIUM_TIERS[activeTierIndex];
  const activeNodeCount = activeTier.nodeCount;

  return (
    <section className="relative py-24 md:py-36 bg-econest-soft/30 border-y border-econest-forest/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase font-semibold tracking-brand text-econest-primary">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Organic Rhizosphere Scaling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-econest-deep">
            The Mycelium Principle: <br />
            <span className="italic font-normal text-econest-forest">
              From Single Spore to Planetary Canopy
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-econest-forest/70 font-light max-w-xl mx-auto">
            Like fungal mycelium threading beneath forest floors, localized human choices compound along living pathways to nourish the planetary biosphere.
          </p>
        </div>

        {/* 6-Stage Scrub Controller with Full Labels */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {MYCELIUM_TIERS.map((tier, idx) => {
            const isActive = activeTierIndex === idx;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTierIndex(idx)}
                className={`min-h-[44px] px-3.5 sm:px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? 'bg-econest-forest text-white shadow-organic scale-[1.03] ring-2 ring-econest-primary/40'
                    : 'bg-white/80 dark:bg-black/30 text-econest-forest/80 dark:text-econest-natural/80 border border-econest-forest/15 hover:bg-white dark:hover:bg-black/50'
                }`}
                aria-label={`Select scale ${tier.name}`}
              >
                <span className="font-mono text-[10px] opacity-70">0{tier.level}</span>
                <span className="font-semibold">{tier.shortName || tier.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Branching Rhizosphere Visualization Card */}
        <div className="editorial-card rounded-3xl p-6 sm:p-10 shadow-organic relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Procedural SVG Mycelium Branching Tree (640x380) */}
            <div className="lg:col-span-7 relative h-80 sm:h-96 w-full flex items-center justify-center bg-econest-deep/5 dark:bg-black/25 rounded-2xl p-2 sm:p-4 overflow-hidden border border-econest-forest/10">
              <svg
                viewBox="0 0 640 380"
                className="w-full h-full select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Radial soil aura */}
                  <radialGradient id="soilAura" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#78B978" stopOpacity="0.25" />
                    <stop offset="60%" stopColor="#3D8B57" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#0B2E24" stopOpacity="0" />
                  </radialGradient>

                  {/* Node Glow */}
                  <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background Ambient Soil Glow */}
                <ellipse
                  cx={CX}
                  cy={CY}
                  rx={70 + activeTierIndex * 42}
                  ry={45 + activeTierIndex * 26}
                  fill="url(#soilAura)"
                  className="transition-all duration-700"
                />

                {/* Stage 06 Planetary Envelope Rings */}
                {activeTierIndex >= 5 && (
                  <g className="transition-opacity duration-700">
                    <ellipse cx={CX} cy={CY} rx="286" ry="172" stroke="#78B978" strokeWidth="1" strokeDasharray="4 6" opacity="0.45" />
                    <ellipse cx={CX} cy={CY} rx="200" ry="120" stroke="#78B978" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.35" />
                    <ellipse cx={CX} cy={CY} rx="120" ry="72" stroke="#489D63" strokeWidth="0.8" opacity="0.3" />
                    {/* Atmospheric meridian arc */}
                    <path d={`M ${CX - 286} ${CY} Q ${CX} ${CY - 90} ${CX + 286} ${CY}`} stroke="#96DC9E" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" />
                    <path d={`M ${CX - 286} ${CY} Q ${CX} ${CY + 90} ${CX + 286} ${CY}`} stroke="#96DC9E" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" />
                  </g>
                )}

                {/* Hyphae Branches (Parent-Child Curves) */}
                {NODES.slice(1, activeNodeCount).map((node) => {
                  const parent = NODES[node.parent];
                  if (!parent) return null;

                  // Organic curved midpoint
                  const midX = (parent.x + node.x) / 2 + ((node.id % 2 === 0 ? 8 : -8));
                  const midY = (parent.y + node.y) / 2 + ((node.id % 3 === 0 ? 6 : -6));

                  const strokeWidth = node.tier === 1 ? 2.5 : node.tier === 2 ? 1.8 : node.tier === 3 ? 1.4 : node.tier === 4 ? 1.0 : 0.8;
                  const strokeColor = node.tier === 1 ? '#3D8B57' : node.tier === 2 ? '#489D63' : node.tier === 3 ? '#62AF78' : node.tier === 4 ? '#78B978' : '#96DC9E';
                  const opacity = node.tier <= activeTierIndex ? (0.85 - node.tier * 0.08) : 0;

                  return (
                    <path
                      key={`edge-${node.id}`}
                      d={`M ${parent.x} ${parent.y} Q ${midX} ${midY} ${node.x} ${node.y}`}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinecap="round"
                      opacity={opacity}
                      className="transition-opacity duration-500"
                    />
                  );
                })}

                {/* Lateral Anastomosis Hyphae (Cross-links between clusters) */}
                {ANASTOMOSIS_EDGES.filter(e => e.tier <= activeTierIndex).map((edge, idx) => {
                  const n1 = NODES[edge.from];
                  const n2 = NODES[edge.to];
                  if (!n1 || !n2) return null;
                  return (
                    <path
                      key={`anast-${idx}`}
                      d={`M ${n1.x} ${n1.y} Q ${(n1.x + n2.x) / 2} ${(n1.y + n2.y) / 2 - 8} ${n2.x} ${n2.y}`}
                      stroke="#85CE85"
                      strokeWidth="0.9"
                      strokeDasharray="2 3"
                      opacity="0.6"
                      className="transition-opacity duration-500"
                    />
                  );
                })}

                {/* Active Nodes */}
                {NODES.slice(0, activeNodeCount).map((node) => {
                  const isOrigin = node.id === 0;
                  const radius = isOrigin ? 7 : node.tier === 1 ? 4.5 : node.tier === 2 ? 3.5 : node.tier === 3 ? 2.8 : node.tier === 4 ? 2.2 : 1.8;
                  const fillColor = isOrigin ? '#1F5C3A' : node.tier === 1 ? '#3D8B57' : node.tier === 2 ? '#489D63' : node.tier === 3 ? '#78B978' : node.tier === 4 ? '#96DC9E' : '#B9E8B6';

                  return (
                    <g
                      key={`node-${node.id}`}
                      className="cursor-pointer transition-transform hover:scale-125"
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={radius}
                        fill={fillColor}
                        filter={isOrigin || node.tier <= 2 ? "url(#nodeGlow)" : undefined}
                      />
                      {isOrigin && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={radius + 4}
                          stroke="#78B978"
                          strokeWidth="1.2"
                          opacity="0.8"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Origin Nucleus Label */}
                <text
                  x={CX}
                  y={CY - 14}
                  textAnchor="middle"
                  fill="#1F5C3A"
                  fontSize="10"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  letterSpacing="1"
                  className="dark:fill-econest-natural pointer-events-none"
                >
                  YOU
                </text>
              </svg>

              {/* Hovered Node Tooltip */}
              {hoveredNode && (
                <div
                  className="absolute z-10 pointer-events-none bg-econest-deep/90 text-white text-[10px] px-2.5 py-1 rounded-md border border-econest-forest/20 shadow-sm"
                  style={{
                    left: `${(hoveredNode.x / 640) * 100}%`,
                    top: `${(hoveredNode.y / 380) * 100}%`,
                    transform: 'translate(-50%, -130%)'
                  }}
                >
                  {hoveredNode.label} &middot; Tier 0{hoveredNode.tier + 1}
                </div>
              )}

              {/* Active Network Density Status Badge */}
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-econest-forest/80 dark:text-econest-natural/80 bg-white/80 dark:bg-black/60 px-3 py-1.5 rounded-lg border border-econest-forest/10 flex items-center space-x-2 backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-econest-primary animate-pulse" />
                <span>Active Nodes: {activeNodeCount}</span>
                <span className="opacity-40">|</span>
                <span>Reach: {activeTier.scaleMultiplier}</span>
              </div>
            </div>

            {/* Right: Tier Detail & Compound Mechanics */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-brand text-econest-primary">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tier 0{activeTier.level} &middot; Reach Multiplier</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-econest-deep">
                  {activeTier.name}
                </h3>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-econest-forest">
                  {activeTier.scaleMultiplier}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-econest-forest/80 font-light leading-relaxed">
                {activeTier.description}
              </p>

              {/* Honest Model Disclaimer */}
              <div className="flex items-center space-x-2 text-[10px] text-econest-forest/70 dark:text-econest-natural/70 bg-econest-forest/5 dark:bg-white/5 px-3 py-2 rounded-xl border border-econest-forest/10">
                <ShieldAlert className="w-3.5 h-3.5 text-econest-primary shrink-0" />
                <span>Illustrative EcoNest platform model &middot; Biological scaling simulation</span>
              </div>

              <div className="pt-3 border-t border-econest-forest/10 flex items-center justify-between text-[11px] text-econest-forest/70">
                <span>Active Entities: <strong className="font-mono text-econest-forest">{activeNodeCount} Nodes</strong></span>
                <span className="font-mono">Rhizome Index: {(88 + activeTierIndex * 2.3).toFixed(1)}%</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
