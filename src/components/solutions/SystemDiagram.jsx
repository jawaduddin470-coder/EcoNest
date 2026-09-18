import React, { useState } from 'react';
import { Sparkles, Layers, Activity, Info, CheckCircle2 } from 'lucide-react';

const DIAGRAM_METRICS = {
  transport: {
    title: "Multi-Modal Active Transit Corridor",
    flowLabel: "Bi-directional kinetic flow & electrified transit spine",
    nodes: [
      { id: "active", label: "Active Cycle Spine", metric: "-72% Commute CO₂e", detail: "Dedicated protected corridors prioritize non-motorized kinetic velocity." },
      { id: "transit", label: "Electric Rail Transit", metric: "3.8x Passenger Efficiency", detail: "Zero direct tailpipe emissions synchronized to renewable grid schedules." },
      { id: "airshed", label: "Airshed Purity Shield", metric: "4.2 dB Noise Reduction", detail: "Tree-canopied green buffers absorb particulate matter (PM2.5) at street level." }
    ]
  },
  energy: {
    title: "Decentralized Microgrid & Storage Network",
    flowLabel: "Bidirectional generation & neighborhood battery balancing",
    nodes: [
      { id: "generation", label: "Rooftop Solar Harvest", metric: "84.2% Self-Sufficiency", detail: "Distributed photovoltaic generation converting sunlight into localized clean voltage." },
      { id: "inverter", label: "Smart Bidirectional Hub", metric: "0.2ms Load Response", detail: "Autonomous grid balancing algorithms shift peak thermal demands to renewable hours." },
      { id: "storage", label: "Neighborhood Storage Bank", metric: "1.2 MWh Kinetic Buffer", detail: "Solid-state storage pools smooth intermittency without burning peaker fossil fuel." }
    ]
  },
  water: {
    title: "Closed-Loop Urban Hydrology Cycle",
    flowLabel: "Infiltration, bio-filtration, and perennial aquifer recharge",
    nodes: [
      { id: "harvest", label: "Permeable Bioswales", metric: "94% Runoff Retained", detail: "Rain gardens and sponge surfaces absorb stormwater, preventing sewer scouring." },
      { id: "reedbed", label: "Greywater Bio-Filter", metric: "16,400 L Reclaimed/yr", detail: "Root microbial filtration purifies domestic drain water for landscaping and re-use." },
      { id: "aquifer", label: "Aquifer Infiltration", metric: "+1.8m Subsurface Table", detail: "Perennial groundwater recharge stabilizes downstream estuaries during seasonal droughts." }
    ]
  },
  circularity: {
    title: "Cradle-to-Cradle Circular Metabolism",
    flowLabel: "Continuous technical refill and biological humus return",
    nodes: [
      { id: "biological", label: "Biological Nutrients", metric: "100% Biodegradable", detail: "Organic materials cycle into nutrient-rich compost, rebuilding agricultural topsoil." },
      { id: "deposit", label: "Closed-Loop Refill Hub", metric: "48 Items Diverted/mo", detail: "Standardized durable containers bypass the single-use packaging cycle entirely." },
      { id: "technical", label: "Technical Recovery", metric: "98.1% Upcycled Feedstock", detail: "Precision disassembly returns pure alloys and technical polymers to manufacturing." }
    ]
  },
  food: {
    title: "Soil-to-Table Living Carbon Cycle",
    flowLabel: "Deep mycorrhizal carbon fixation & hyper-local harvest",
    nodes: [
      { id: "canopy", label: "Agroforestry Canopy", metric: "3.2x Biodiversity Index", detail: "Multi-layered fruit and nut trees simulate natural forest polycultures." },
      { id: "mycelial", label: "Fungal Root Network", metric: "4.8t Carbon Locked/Ha", detail: "Mycorrhizal fungi synthesize glomalin, permanently binding carbon in living topsoil." },
      { id: "localhub", label: "Hyper-Local Food Hub", metric: "88% Food Miles Cut", detail: "Seasonal nutrition harvested within 40 km, connecting regional growers with neighbors." }
    ]
  }
};

export default function SystemDiagram({ categoryId, accent = "#3D8B57" }) {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const data = DIAGRAM_METRICS[categoryId] || DIAGRAM_METRICS.transport;
  const activeNode = data.nodes.find(n => n.id === selectedNodeId) || data.nodes[0];

  return (
    <div className="editorial-card rounded-3xl p-6 sm:p-8 shadow-organic space-y-6 relative overflow-hidden text-left">
      {/* Header telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-econest-forest/10 gap-2">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase font-bold tracking-brand text-econest-primary">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Living Architecture</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-serif font-semibold text-econest-deep dark:text-white">
            {data.title}
          </h4>
        </div>

        <div className="text-[11px] font-mono text-econest-forest/70 dark:text-econest-natural/70 bg-econest-forest/5 dark:bg-white/5 px-3 py-1 rounded-full border border-econest-forest/10 self-start sm:self-auto">
          {data.flowLabel}
        </div>
      </div>

      {/* Dynamic SVG System Visual Diagram */}
      <div
        data-cursor="EXPLORE"
        className="relative w-full h-64 sm:h-72 bg-econest-deep/5 dark:bg-black/30 rounded-2xl p-4 overflow-hidden border border-econest-forest/10 flex items-center justify-center select-none"
      >
        {categoryId === 'transport' && (
          <svg viewBox="0 0 600 240" className="w-full h-full" fill="none">
            {/* Background Corridor Tracks */}
            <path d="M 40 180 C 180 180, 240 120, 360 120 C 460 120, 500 60, 560 60" stroke="#3D8B57" strokeWidth="2" strokeDasharray="4 6" opacity="0.4" />
            <path d="M 40 140 C 160 140, 260 200, 380 200 C 480 200, 520 140, 560 140" stroke="#489D63" strokeWidth="2.5" opacity="0.6" />
            <path d="M 40 90 C 150 90, 220 50, 320 50 C 420 50, 480 100, 560 100" stroke="#78B978" strokeWidth="3" opacity="0.8" />

            {/* Traveling Kinetic Particles along pathways */}
            <circle r="4" fill="#3D8B57">
              <animateMotion path="M 40 180 C 180 180, 240 120, 360 120 C 460 120, 500 60, 560 60" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="#78B978">
              <animateMotion path="M 40 140 C 160 140, 260 200, 380 200 C 480 200, 520 140, 560 140" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="#FFFFFF">
              <animateMotion path="M 40 90 C 150 90, 220 50, 320 50 C 420 50, 480 100, 560 100" dur="5s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: Active Cycle Hub */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('active')}>
              <circle cx="100" cy="155" r="26" fill="#0B3D2E" fillOpacity="0.8" stroke="#78B978" strokeWidth="2" />
              <text x="100" y="159" textAnchor="middle" fill="#FFFFFF" fontSize="14">🚲</text>
              <text x="100" y="195" textAnchor="middle" fill="#2A7244" fontSize="10" fontWeight="bold">Active Spine</text>
            </g>

            {/* Node 2: Electric Rail Spine */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('transit')}>
              <circle cx="310" cy="115" r="30" fill="#0B3D2E" fillOpacity="0.85" stroke="#BFD8C2" strokeWidth="2" />
              <text x="310" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="16">⚡🚆</text>
              <text x="310" y="160" textAnchor="middle" fill="#2A7244" fontSize="10" fontWeight="bold">Electric Rail</text>
            </g>

            {/* Node 3: Airshed Buffer */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('airshed')}>
              <circle cx="490" cy="95" r="26" fill="#0B3D2E" fillOpacity="0.8" stroke="#78B978" strokeWidth="2" />
              <text x="490" y="99" textAnchor="middle" fill="#FFFFFF" fontSize="14">🌳</text>
              <text x="490" y="135" textAnchor="middle" fill="#2A7244" fontSize="10" fontWeight="bold">Airshed Canopy</text>
            </g>
          </svg>
        )}

        {categoryId === 'energy' && (
          <svg viewBox="0 0 600 240" className="w-full h-full" fill="none">
            {/* Microgrid Power Web */}
            <line x1="120" y1="120" x2="300" y2="120" stroke="#D4B038" strokeWidth="2.5" opacity="0.6" strokeDasharray="3 4" />
            <line x1="300" y1="120" x2="480" y2="120" stroke="#D4B038" strokeWidth="2.5" opacity="0.6" strokeDasharray="3 4" />
            <ellipse cx="300" cy="120" rx="190" ry="60" stroke="#E8DE82" strokeWidth="1" opacity="0.3" />

            {/* Traveling Energy Pulses */}
            <circle r="4.5" fill="#FFF490">
              <animateMotion path="M 120 120 L 300 120 L 480 120" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle r="4.5" fill="#E8DE82">
              <animateMotion path="M 480 120 L 300 120 L 120 120" dur="3.4s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: Solar Canopy */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('generation')}>
              <circle cx="120" cy="120" r="28" fill="#242105" stroke="#E8DE82" strokeWidth="2" />
              <text x="120" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="15">☀️</text>
              <text x="120" y="165" textAnchor="middle" fill="#D4B038" fontSize="10" fontWeight="bold">Solar Array</text>
            </g>

            {/* Node 2: Bidirectional Inverter Hub */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('inverter')}>
              <circle cx="300" cy="120" r="32" fill="#242105" stroke="#FFFFFF" strokeWidth="2.5" />
              <text x="300" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="16">⚡</text>
              <text x="300" y="170" textAnchor="middle" fill="#D4B038" fontSize="10" fontWeight="bold">Smart Grid Hub</text>
            </g>

            {/* Node 3: Kinetic Storage Bank */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('storage')}>
              <circle cx="480" cy="120" r="28" fill="#242105" stroke="#E8DE82" strokeWidth="2" />
              <text x="480" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="15">🔋</text>
              <text x="480" y="165" textAnchor="middle" fill="#D4B038" fontSize="10" fontWeight="bold">Battery Storage</text>
            </g>
          </svg>
        )}

        {categoryId === 'water' && (
          <svg viewBox="0 0 600 240" className="w-full h-full" fill="none">
            {/* Water Flow Cascades */}
            <path d="M 60 70 C 160 70, 180 120, 240 120 C 300 120, 320 170, 420 170 C 500 170, 520 120, 560 120" stroke="#4BAFA1" strokeWidth="3" opacity="0.7" />
            <path d="M 60 110 C 140 110, 220 160, 300 160 C 380 160, 440 80, 560 80" stroke="#74D0C0" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />

            {/* Animated Water Droplet Pulses */}
            <circle r="4" fill="#E0F7F6">
              <animateMotion path="M 60 70 C 160 70, 180 120, 240 120 C 300 120, 320 170, 420 170 C 500 170, 520 120, 560 120" dur="4.2s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: Bioswale */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('harvest')}>
              <circle cx="130" cy="90" r="26" fill="#061D1A" stroke="#4BAFA1" strokeWidth="2" />
              <text x="130" y="94" textAnchor="middle" fontSize="14">🌧️</text>
              <text x="130" y="130" textAnchor="middle" fill="#4BAFA1" fontSize="10" fontWeight="bold">Rain Bioswale</text>
            </g>

            {/* Node 2: Reedbed Filtration */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('reedbed')}>
              <circle cx="310" cy="140" r="30" fill="#061D1A" stroke="#74D0C0" strokeWidth="2.5" />
              <text x="310" y="145" textAnchor="middle" fontSize="16">🌿💧</text>
              <text x="310" y="185" textAnchor="middle" fill="#4BAFA1" fontSize="10" fontWeight="bold">Bio-Filtration</text>
            </g>

            {/* Node 3: Aquifer Infiltration */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('aquifer')}>
              <circle cx="480" cy="130" r="26" fill="#061D1A" stroke="#4BAFA1" strokeWidth="2" />
              <text x="480" y="134" textAnchor="middle" fontSize="14">🌊</text>
              <text x="480" y="170" textAnchor="middle" fill="#4BAFA1" fontSize="10" fontWeight="bold">Aquifer Recharge</text>
            </g>
          </svg>
        )}

        {categoryId === 'circularity' && (
          <svg viewBox="0 0 600 240" className="w-full h-full" fill="none">
            {/* Figure-8 Dual Circular Metabolism Loops */}
            {/* Left Biological Loop */}
            <circle cx="210" cy="120" r="65" stroke="#38A169" strokeWidth="2.5" strokeDasharray="5 5" opacity="0.6" />
            {/* Right Technical Loop */}
            <circle cx="390" cy="120" r="65" stroke="#489D63" strokeWidth="2.5" opacity="0.6" />

            {/* Circulating Nutrient Pulses */}
            <circle r="4" fill="#A8E6CF">
              <animateMotion path="M 210 55 A 65 65 0 1 1 209.9 55" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle r="4" fill="#FFFFFF">
              <animateMotion path="M 390 55 A 65 65 0 1 1 389.9 55" dur="4.2s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: Biological Nutrient Loop */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('biological')}>
              <circle cx="150" cy="120" r="26" fill="#072013" stroke="#38A169" strokeWidth="2" />
              <text x="150" y="124" textAnchor="middle" fontSize="14">🍂</text>
              <text x="150" y="160" textAnchor="middle" fill="#38A169" fontSize="10" fontWeight="bold">Biological Loop</text>
            </g>

            {/* Node 2: Central Refill Spine */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('deposit')}>
              <circle cx="300" cy="120" r="30" fill="#072013" stroke="#BFD8C2" strokeWidth="2.5" />
              <text x="300" y="125" textAnchor="middle" fontSize="16">♻️</text>
              <text x="300" y="165" textAnchor="middle" fill="#38A169" fontSize="10" fontWeight="bold">Refill Nexus</text>
            </g>

            {/* Node 3: Technical Upcycling Loop */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('technical')}>
              <circle cx="450" cy="120" r="26" fill="#072013" stroke="#489D63" strokeWidth="2" />
              <text x="450" y="124" textAnchor="middle" fontSize="14">⚙️</text>
              <text x="450" y="160" textAnchor="middle" fill="#38A169" fontSize="10" fontWeight="bold">Technical Loop</text>
            </g>
          </svg>
        )}

        {categoryId === 'food' && (
          <svg viewBox="0 0 600 240" className="w-full h-full" fill="none">
            {/* Underground Mycelial Hyphae Web & Soil Horizons */}
            <path d="M 60 80 Q 200 40, 300 80 T 540 80" stroke="#68D391" strokeWidth="2" opacity="0.6" />
            <path d="M 120 140 C 220 180, 280 110, 360 170 C 440 210, 480 140, 520 160" stroke="#489D63" strokeWidth="2" strokeDasharray="3 4" opacity="0.5" />
            <line x1="30" y1="80" x2="570" y2="80" stroke="#2D3748" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />

            {/* Carbon Nutrient Transfer Pulses */}
            <circle r="4" fill="#9AE6B4">
              <animateMotion path="M 120 140 C 220 180, 280 110, 360 170 C 440 210, 480 140, 520 160" dur="4.6s" repeatCount="indefinite" />
            </circle>

            {/* Node 1: Agroforestry Canopy */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('canopy')}>
              <circle cx="140" cy="70" r="26" fill="#092617" stroke="#68D391" strokeWidth="2" />
              <text x="140" y="74" textAnchor="middle" fontSize="14">🌳</text>
              <text x="140" y="110" textAnchor="middle" fill="#68D391" fontSize="10" fontWeight="bold">Food Forest</text>
            </g>

            {/* Node 2: Mycelial Carbon Root Web */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('mycelial')}>
              <circle cx="300" cy="130" r="30" fill="#092617" stroke="#BFD8C2" strokeWidth="2.5" />
              <text x="300" y="135" textAnchor="middle" fontSize="16">🍄</text>
              <text x="300" y="175" textAnchor="middle" fill="#68D391" fontSize="10" fontWeight="bold">Living Mycelium</text>
            </g>

            {/* Node 3: Local Food Hub */}
            <g className="cursor-pointer" onClick={() => setSelectedNodeId('localhub')}>
              <circle cx="470" cy="80" r="26" fill="#092617" stroke="#68D391" strokeWidth="2" />
              <text x="470" y="84" textAnchor="middle" fontSize="14">🧺</text>
              <text x="470" y="120" textAnchor="middle" fill="#68D391" fontSize="10" fontWeight="bold">Local Table</text>
            </g>
          </svg>
        )}
      </div>

      {/* Interactive Node Telemetry Inspector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {data.nodes.map((node) => {
          const isCurrent = node.id === activeNode.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isCurrent
                  ? 'bg-econest-forest text-white border-econest-primary shadow-organic scale-[1.02]'
                  : 'bg-white/60 dark:bg-black/20 border-econest-forest/10 hover:bg-white dark:hover:bg-black/40 text-econest-deep dark:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-semibold">{node.label}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                  isCurrent ? 'bg-white/20 text-econest-natural' : 'bg-econest-forest/10 text-econest-primary'
                }`}>
                  {node.metric}
                </span>
              </div>
              <p className={`text-[11px] font-light leading-snug pt-2 ${
                isCurrent ? 'text-econest-natural/90' : 'text-econest-forest/70 dark:text-econest-natural/70'
              }`}>
                {node.detail}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
