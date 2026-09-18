import React from 'react';
import { FIVE_SCENES } from '../../data/brandData';
import { Trees, Droplet, Users, RefreshCw, Globe, Sparkles, Activity } from 'lucide-react';

const SCENE_ICONS = {
  1: Trees,
  2: Droplet,
  3: Users,
  4: RefreshCw,
  5: Globe
};

const MOVEMENT_DETAILS = {
  1: { context: "Biome Root Architecture", telemetry: "92.4% Mycelial Connectivity", cycle: "Carbon Fixation" },
  2: { context: "Transpiration Corridors", telemetry: "480M Liters Watershed Drift", cycle: "Hydrological Cycle" },
  3: { context: "Riparian Settlements", telemetry: "1.4B Downstream Stewards", cycle: "Human Habitat" },
  4: { context: "Industrial Metabolism", telemetry: "98.1% Closed-Loop Recovery", cycle: "Technical Nutrients" },
  5: { context: "Biosphere Homeostasis", telemetry: "Continental Equilibrium", cycle: "Planetary Equilibrium" }
};

export default function FiveSceneStory() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-grain">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-24">
          <div className="inline-flex items-center space-x-2 text-xs uppercase font-semibold tracking-brand text-econest-primary">
            <Activity className="w-3.5 h-3.5" />
            <span>Continuous Ecological Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-econest-deep">
            A Living System in <span className="italic font-normal text-econest-forest">Five Movements</span>
          </h2>
          <p className="text-xs sm:text-sm text-econest-forest/70 font-light max-w-lg mx-auto">
            Witness how localized biological phenomena compound into continental equilibrium.
          </p>
        </div>

        {/* Continuous Flowing Spine */}
        <div className="relative">
          {/* Central living conduit glow backdrop */}
          <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-econest-primary via-econest-forest to-econest-primary -translate-x-1/2 opacity-20 filter blur-xs pointer-events-none" />
          
          {/* Central living conduit line */}
          <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-econest-fresh via-econest-primary to-econest-forest -translate-x-1/2 opacity-40 pointer-events-none" />

          {/* 5 Storytelling Scenes */}
          <div className="space-y-28 md:space-y-36">
            {FIVE_SCENES.map((scene, idx) => {
              const Icon = SCENE_ICONS[scene.scene];
              const details = MOVEMENT_DETAILS[scene.scene];
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={scene.scene}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge with Glowing Aura */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-black/80 border border-econest-forest/20 shadow-organic text-econest-forest shrink-0 ml-0 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="absolute -inset-1 rounded-2xl bg-econest-primary/15 filter blur-xs pointer-events-none animate-pulse-subtle" />
                    <Icon className="w-5 h-5 text-econest-primary relative z-10" />
                  </div>

                  {/* Editorial Content Wing */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} space-y-3 pl-12 md:pl-0`}>
                    <div className="inline-flex items-center space-x-2 text-[11px] uppercase font-semibold tracking-brand text-econest-primary">
                      <span>Movement 0{scene.scene}</span>
                      <span>&middot;</span>
                      <span>{scene.accent}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-econest-deep leading-tight">
                      {scene.title}
                    </h3>

                    <p className="text-sm sm:text-base text-econest-forest/80 font-light leading-relaxed max-w-md">
                      {scene.subtext}
                    </p>

                    <div className={`pt-2 flex items-center gap-2 text-[10px] uppercase font-mono tracking-wider text-econest-forest/60 dark:text-econest-natural/60 ${
                      isEven ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <Sparkles className="w-3 h-3 text-econest-primary" />
                      <span>{details.context}</span>
                    </div>
                  </div>

                  {/* Balancing Editorial Telemetry Capsule on Opposite Wing */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="editorial-card rounded-2xl p-5 border border-econest-forest/10 space-y-2.5 max-w-sm">
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-econest-forest/60 border-b border-econest-forest/10 pb-2">
                        <span>Phase Metric</span>
                        <span className="text-econest-primary font-bold">{details.cycle}</span>
                      </div>
                      <div className="text-sm font-mono font-semibold text-econest-deep">
                        {details.telemetry}
                      </div>
                      <p className="text-[11px] text-econest-forest/70 font-light">
                        Biological feedback loop actively stabilizing regional microclimates.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
