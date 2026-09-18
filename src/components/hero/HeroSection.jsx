import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Globe2, Activity, Sliders, ShieldCheck, Compass, Trees, Sprout, Wind } from 'lucide-react';
import { BRAND, TELEMETRY_METRICS } from '../../data/brandData';

const BIOME_OBSERVATORIES = [
  {
    id: 'valdivian',
    name: 'Valdivian Rainforest',
    location: 'Southern Andes, Chile',
    coordinates: '39.8° S, 73.2° W',
    canopyDensity: '89.4%',
    speciesCount: '420+',
    carbonFlux: '+14.2 t/ha/yr',
    description: 'Autonomous micro-sensor network monitoring temperate ancient rainforest canopy recovery and endemic biodiversity recovery.'
  },
  {
    id: 'sundarbans',
    name: 'Sundarbans Biosphere',
    location: 'Bay of Bengal',
    coordinates: '21.9° N, 89.2° E',
    canopyDensity: '92.1%',
    speciesCount: '315+',
    carbonFlux: '+22.6 t/ha/yr',
    description: 'Tidal mangrove barrier restoration stabilizing coastal delta communities against extreme tropical weather patterns.'
  },
  {
    id: 'caledonian',
    name: 'Caledonian Pinewood',
    location: 'Scottish Highlands',
    coordinates: '57.3° N, 4.7° W',
    canopyDensity: '78.6%',
    speciesCount: '185+',
    carbonFlux: '+9.8 t/ha/yr',
    description: 'Old-growth Scots pine corridor regeneration connecting fragmented glacial valley ecosystems into contiguous wildlife pathways.'
  }
];

export default function HeroSection({ onOpenCalculator, onNavigate }) {
  const [activeMetricTab, setActiveMetricTab] = useState(0);
  const [activeBiome, setActiveBiome] = useState(0);
  const [simulationValue, setSimulationValue] = useState(28);

  const calculatedTrees = Math.round(simulationValue * 14.8);
  const calculatedCarbon = (simulationValue * 0.42).toFixed(1);
  const calculatedWater = Math.round(simulationValue * 185);

  const currentBiome = BIOME_OBSERVATORIES[activeBiome];

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-grain">
      {/* Background Soft Organic Radiance */}
      <div className="absolute top-24 -left-40 w-[32rem] h-[32rem] rounded-full bg-econest-soft/70 filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-econest-natural/35 filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Asymmetric Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Editorial Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-3 w-fit py-1.5 px-3.5 rounded-full border border-econest-forest/15 bg-white/80 backdrop-blur-sm text-econest-forest text-xs font-semibold uppercase tracking-brand shadow-xs">
              <span className="w-2 h-2 rounded-full bg-econest-primary animate-pulse" />
              <span>Initiative 01 &middot; Planetary Regeneration</span>
            </div>

            {/* Impact Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-serif font-light text-econest-deep leading-[1.1] tracking-tight max-w-2xl" style={{ textWrap: 'balance' }}>
                Where nature’s ancient memory{' '}
                <span className="italic font-normal text-econest-forest">
                  meets living intelligence.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-econest-forest/80 font-light leading-relaxed max-w-2xl pt-2">
                {BRAND.mission}
              </p>
            </div>


            {/* Primary & Secondary Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center space-x-3 px-7 py-4 rounded-xl bg-econest-forest hover:bg-econest-deep text-white text-xs uppercase font-semibold tracking-widest transition-all duration-300 shadow-sm hover:shadow-organic hover:-translate-y-0.5"
              >
                <span>Calculate Your Footprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#observatory"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl border border-econest-forest/20 text-econest-deep hover:bg-white/80 text-xs uppercase font-semibold tracking-widest transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-econest-primary" />
                <span>Explore Biome Network</span>
              </a>
            </div>

            {/* Status Strip */}
            <div className="pt-4 border-t border-econest-forest/10 flex flex-wrap items-center gap-6 text-xs text-econest-forest/75">
              <div className="flex items-center space-x-2">
                <Globe2 className="w-3.5 h-3.5 text-econest-primary" />
                <span>Global Deployment: <strong>38 Monitored Biomes</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-econest-forest" />
                <span>Verified by Multi-Spectral Satellite Telemetry</span>
              </div>
            </div>
          </div>

          {/* Feature Telemetry & Simulation Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Live Telemetry Display */}
            <div className="editorial-card rounded-2xl p-6 sm:p-7 shadow-organic">
              <div className="flex items-center justify-between pb-4 border-b border-econest-forest/10">
                <div className="flex items-center space-x-2.5">
                  <Activity className="w-4 h-4 text-econest-primary animate-pulse" />
                  <span className="text-xs uppercase font-semibold tracking-brand text-econest-forest">
                    Ecosystem Telemetry
                  </span>
                </div>
                <span className="text-[10px] font-mono text-econest-forest bg-econest-soft px-2.5 py-0.5 rounded-full font-medium">
                  LIVE SATELLITE FEED
                </span>
              </div>

              {/* Metric Carousel Display */}
              <div className="mt-5 space-y-4">
                <div className="p-4 rounded-xl bg-econest-soft/60 border border-econest-forest/10">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-econest-deep tracking-tight">
                    {TELEMETRY_METRICS[activeMetricTab].value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-econest-forest pt-1">
                    {TELEMETRY_METRICS[activeMetricTab].label} ({TELEMETRY_METRICS[activeMetricTab].unit})
                  </div>
                  <div className="text-xs text-econest-forest/75 font-light pt-1.5 leading-relaxed">
                    {TELEMETRY_METRICS[activeMetricTab].subtext}
                  </div>
                </div>

                {/* Metric Selectors */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {TELEMETRY_METRICS.map((m, idx) => (
                    <button
                      key={m.label}
                      onClick={() => setActiveMetricTab(idx)}
                      className={`py-2 px-1 text-[10px] font-medium tracking-tight rounded-lg border transition-all ${
                        activeMetricTab === idx
                          ? 'bg-econest-forest text-white border-econest-forest shadow-xs'
                          : 'bg-white/60 text-econest-forest/80 border-econest-forest/15 hover:bg-white'
                      }`}
                    >
                      {m.unit}
                    </button>
                  ))}
                </div>
              </div>

              {/* Individual Action Simulation Slider */}
              <div className="mt-6 pt-5 border-t border-econest-forest/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-econest-deep flex items-center space-x-1.5">
                    <Sliders className="w-3.5 h-3.5 text-econest-primary" />
                    <span>Micro-Action Compounder</span>
                  </span>
                  <span className="font-mono font-semibold text-econest-forest bg-white px-2 py-0.5 rounded border border-econest-forest/10">
                    {simulationValue} choices / mo
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="100"
                  value={simulationValue}
                  onChange={(e) => setSimulationValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-econest-natural/50 rounded-lg appearance-none cursor-pointer accent-econest-forest"
                  aria-label="Monthly sustainable choices slider"
                />

                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/80 border border-econest-forest/10">
                    <div className="text-base font-serif font-bold text-econest-forest">{calculatedTrees}</div>
                    <div className="text-[10px] text-econest-forest/70 uppercase font-medium">Trees Equivalent</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/80 border border-econest-forest/10">
                    <div className="text-base font-serif font-bold text-econest-forest">{calculatedCarbon} t</div>
                    <div className="text-[10px] text-econest-forest/70 uppercase font-medium">CO₂ Sequestered</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/80 border border-econest-forest/10">
                    <div className="text-base font-serif font-bold text-econest-forest">{calculatedWater} L</div>
                    <div className="text-[10px] text-econest-forest/70 uppercase font-medium">Water Preserved</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Philosophy Statement */}
            <div className="p-5 rounded-2xl bg-econest-soft/40 border border-econest-forest/15 text-xs text-econest-forest/80 italic leading-relaxed">
              “Ecology is not an isolated problem to be solved; it is the living web we belong to. Every small choice compounds into continental regeneration.”
            </div>

          </div>

        </div>

        {/* Real-world Biome Observatory Strip */}
        <div id="observatory" className="mt-20 pt-12 border-t border-econest-forest/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase font-semibold tracking-brand text-econest-primary">
                Active Ecological Corridors
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-econest-deep pt-1">
                Live Biome Observatories
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              {BIOME_OBSERVATORIES.map((biome, idx) => (
                <button
                  key={biome.id}
                  onClick={() => setActiveBiome(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    activeBiome === idx
                      ? 'bg-econest-forest text-white border-econest-forest shadow-xs'
                      : 'bg-white/80 text-econest-forest/80 border-econest-forest/15 hover:bg-white'
                  }`}
                >
                  {biome.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Biome Detailed Telemetry */}
          <div className="editorial-card rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center space-x-3 text-xs text-econest-forest/70 font-mono">
                  <span>{currentBiome.location}</span>
                  <span>&middot;</span>
                  <span>{currentBiome.coordinates}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-econest-deep">
                  {currentBiome.name}
                </h3>
                <p className="text-sm text-econest-forest/80 font-light leading-relaxed">
                  {currentBiome.description}
                </p>
              </div>

              <div className="md:col-span-5 grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-econest-soft/60 border border-econest-forest/10 text-center">
                  <Trees className="w-4 h-4 text-econest-primary mx-auto mb-1" />
                  <div className="text-lg font-serif font-bold text-econest-deep">{currentBiome.canopyDensity}</div>
                  <div className="text-[10px] text-econest-forest/70 uppercase font-medium">Canopy Density</div>
                </div>

                <div className="p-3.5 rounded-xl bg-econest-soft/60 border border-econest-forest/10 text-center">
                  <Sprout className="w-4 h-4 text-econest-primary mx-auto mb-1" />
                  <div className="text-lg font-serif font-bold text-econest-deep">{currentBiome.speciesCount}</div>
                  <div className="text-[10px] text-econest-forest/70 uppercase font-medium">Native Taxa</div>
                </div>

                <div className="p-3.5 rounded-xl bg-econest-soft/60 border border-econest-forest/10 text-center">
                  <Wind className="w-4 h-4 text-econest-primary mx-auto mb-1" />
                  <div className="text-lg font-serif font-bold text-econest-deep">{currentBiome.carbonFlux}</div>
                  <div className="text-[10px] text-econest-forest/70 uppercase font-medium">Carbon Flux</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Chapter 02 Transition Card */}
        <div className="mt-20 pt-12 border-t border-econest-forest/15 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70">
              <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />
              <span>CHAPTER TRANSITION // NEXT CHAPTER</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-econest-deep dark:text-white leading-tight">
              Before we can heal the planet, <br className="hidden sm:inline" />
              <span className="italic text-econest-forest dark:text-econest-natural font-light">
                we must understand how it breathes.
              </span>
            </h3>

            <p className="text-sm sm:text-base text-econest-forest/80 dark:text-[#BFD8C2] font-light leading-relaxed max-w-xl mx-auto">
              Explore the biospheric philosophy, mycorrhizal networks, and living planetary feedback loops behind EcoNest.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate && onNavigate('about')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 rounded-full bg-econest-forest hover:bg-econest-deep text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-organic hover:scale-[1.02] active:scale-[0.98] font-bold group focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              >
                <span>Explore Chapter 02: About</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-econest-forest/20 text-econest-forest dark:text-econest-natural hover:bg-white dark:hover:bg-white/10 font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              >
                <span>Calculate Your Footprint</span>
              </button>
            </div>

            <div className="pt-4 text-[10px] font-mono text-econest-forest/50 dark:text-white/40 tracking-wider">
              EcoNest Living Ecosystem &middot; Chapter 01 to Chapter 02 Bridge
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
