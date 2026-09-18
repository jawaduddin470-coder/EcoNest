import React, { useState } from 'react';
import { Activity, Sparkles, Layers, ShieldCheck, ArrowUpRight, Zap, Droplets, Wind, RefreshCw, Trees, Users } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/brandData';

export default function ProjectSystemMap({
  theme = 'day',
  activeProjectId = 'proj-solar-commons',
  onSelectProject,
  onOpenReport
}) {
  const [selectedId, setSelectedId] = useState(activeProjectId);
  const [activeNode, setActiveNode] = useState(null);

  const currentProject = PROJECTS_DATA.find(p => p.id === selectedId) || PROJECTS_DATA[0];

  // Map systemic dimensions with restrained scientific metadata
  const dimensionDetails = {
    "ENERGY": { icon: Zap, color: "#D4B038", desc: "Decentralized harvest, kinetic buffering, and peak load shifting." },
    "WATER": { icon: Droplets, color: "#4BAFA1", desc: "Catchment infiltration, reed bed polishing, and aquifer replenishment." },
    "CARBON": { icon: Wind, color: "#3D8B57", desc: "Peaker plant avoidance, photosynthetic sink creation, and soil enrichment." },
    "MATERIALS": { icon: RefreshCw, color: "#38A169", desc: "Non-toxic standardized deposit containers and closed-loop circularity." },
    "BIODIVERSITY": { icon: Trees, color: "#68D391", desc: "Continuous canopy corridors, fungal topsoils, and pollinator habitats." },
    "COMMUNITY": { icon: Users, color: "#52B788", desc: "Shared stewardship, transparent governance, and localized resilience." },
    "URBAN": { icon: Layers, color: "#4E9B6E", desc: "Active transit corridors, permeable streetscapes, and microclimate buffers." },
    "LIVING SPACES": { icon: Layers, color: "#4E9B6E", desc: "Balcony gardens, residential micro-sanctuaries, and biophilic homes." }
  };

  // Node spatial positions around center (cx=250, cy=180, radius=125)
  const nodes = currentProject.systemMap.nodes.map((node, i, arr) => {
    const angle = (i * (360 / arr.length) - 90) * (Math.PI / 180);
    const radius = 125;
    const x = 250 + radius * Math.cos(angle);
    const y = 180 + radius * Math.sin(angle);
    return {
      ...node,
      x,
      y,
      dimMeta: dimensionDetails[node.label.toUpperCase()] || { icon: Activity, color: node.color, desc: "Connected ecological dimension" }
    };
  });

  return (
    <section id="system-map" className="relative py-24 md:py-32 bg-econest-lightest dark:bg-[#071D12] border-b border-econest-forest/10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />
              <span>SECTION 06 // SYSTEM CONNECTIVITY MATRIX</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-econest-deep dark:text-white leading-tight">
              Project System Map
            </h2>
            <p className="mt-3 text-base text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
              Every project is an anchor node in a multi-system feedback web. Select a demonstration project to visualize its direct vectors into ecological and social dimensions.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-econest-forest/60 dark:text-econest-natural/60 bg-white/70 dark:bg-white/5 px-4 py-2 rounded-xl border border-econest-forest/10">
            <Activity className="w-4 h-4 text-econest-fresh" />
            <span>TOPOLOGICAL VECTOR MATRIX</span>
          </div>
        </div>

        {/* Project Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {PROJECTS_DATA.map(p => {
            const isSelected = p.id === currentProject.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedId(p.id);
                  setActiveNode(null);
                  if (onSelectProject) onSelectProject(p);
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                  isSelected
                    ? 'bg-econest-forest text-white border-econest-forest shadow-organic font-bold'
                    : 'bg-white/80 dark:bg-white/5 text-econest-forest/80 dark:text-econest-natural/80 border-econest-forest/15 hover:border-econest-forest/35 hover:bg-white'
                }`}
              >
                <span>{p.number} // {p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Map Visualization & Detail Canvas */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0A2417] border border-econest-forest/15 dark:border-white/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Scientific Topological System Diagram */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
              <div className="w-full max-w-[500px] aspect-[5/4] relative">
                <svg className="w-full h-full" viewBox="0 0 500 360">
                  {/* Subtle, restrained concentric guide rings */}
                  <circle cx="250" cy="180" r="125" fill="none" stroke="#4E9B6E" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
                  <circle cx="250" cy="180" r="75" fill="none" stroke="#4E9B6E" strokeWidth="0.75" opacity="0.15" />

                  {/* Clean, subtle connective lines */}
                  {nodes.map(n => {
                    const isNodeActive = activeNode === n.label;
                    return (
                      <g key={n.label}>
                        <line
                          x1="250"
                          y1="180"
                          x2={n.x}
                          y2={n.y}
                          stroke={isNodeActive ? '#1F6B45' : n.color}
                          strokeWidth={isNodeActive ? '2.5' : '1.25'}
                          strokeDasharray={isNodeActive ? 'none' : '4 3'}
                          opacity={isNodeActive ? '0.9' : '0.4'}
                        />
                      </g>
                    );
                  })}

                  {/* 1. PRIMARY: Center Project Hub (Clearly Dominant) */}
                  <g transform="translate(250, 180)">
                    <circle r="52" fill="#0B2E24" stroke="#4E9B6E" strokeWidth="2.5" />
                    <text y="-12" textAnchor="middle" fill="#52B788" fontSize="8" fontFamily="monospace" fontWeight="bold">
                      PROJ-{currentProject.number}
                    </text>
                    <text y="5" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="serif" fontWeight="bold">
                      {currentProject.systemMap.center}
                    </text>
                    <text y="19" textAnchor="middle" fill="#BFD8C2" fontSize="7.5" fontFamily="monospace">
                      {currentProject.scaleLabel}
                    </text>
                  </g>

                  {/* 2. SECONDARY: Peripheral Connected Dimension Nodes */}
                  {nodes.map(n => {
                    const isNodeActive = activeNode === n.label;
                    return (
                      <g
                        key={n.label}
                        transform={`translate(${n.x}, ${n.y})`}
                        onClick={() => setActiveNode(n.label)}
                        className="cursor-pointer transition-transform duration-200 hover:scale-105"
                      >
                        <circle
                          r={isNodeActive ? '30' : '25'}
                          fill={isNodeActive ? '#1F6B45' : '#0B2E24'}
                          stroke={n.color}
                          strokeWidth={isNodeActive ? '2' : '1.5'}
                        />
                        <text
                          y="3.5"
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="8"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {n.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* 3. TERTIARY: Supporting navigation label */}
              <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 text-center mt-2">
                Click outer dimensions to inspect ecological couplings
              </div>
            </div>

            {/* Right: Dimension Breakdown & Architectural Context */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 rounded-2xl bg-econest-soft/40 dark:bg-black/20 border border-econest-forest/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60">
                    Selected Dimension Vector
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-econest-fresh/10 text-econest-fresh font-bold">
                    {activeNode || "INTEGRATED COUPLINGS"}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-econest-deep dark:text-white mb-2">
                  {activeNode ? `${activeNode} Dimension Activation` : `${currentProject.title} Systems`}
                </h3>

                <p className="text-xs sm:text-sm text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed mb-4">
                  {activeNode
                    ? (dimensionDetails[activeNode] ? dimensionDetails[activeNode].desc : "Direct ecological vector engaged by this demonstration model.")
                    : currentProject.howItWorks}
                </p>

                <div className="space-y-2 pt-2 border-t border-econest-forest/10 dark:border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-econest-forest/60 dark:text-econest-natural/60">
                    Active Systemic Vectors ({currentProject.systems.length})
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.systems.map(s => (
                      <button
                        key={s}
                        onClick={() => setActiveNode(s.toUpperCase())}
                        className={`px-2.5 py-1 rounded text-xs font-mono border transition-all ${
                          activeNode === s.toUpperCase()
                            ? 'bg-econest-forest text-white border-econest-forest font-bold shadow-xs'
                            : 'bg-white dark:bg-white/5 text-econest-deep dark:text-white border-econest-forest/10 hover:border-econest-forest/30'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => onOpenReport && onOpenReport(currentProject)}
                  className="h-10 inline-flex items-center space-x-2 px-5 rounded-full bg-econest-forest hover:bg-econest-deep text-white font-mono text-xs uppercase tracking-widest transition-all shadow-sm group"
                >
                  <span>Field Report</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <span className="text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60">
                  Model Ref: #{currentProject.number}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
