import React, { useState } from 'react';
import { CHAPTER_TWO } from '../../data/brandData';
import EarthScene3D from '../earth/EarthScene3D';
import EarthErrorBoundary from '../earth/EarthErrorBoundary';
import StaticEarthFallback from '../earth/StaticEarthFallback';
import EcologicalSystemsPanel from '../earth/EcologicalSystemsPanel';
import FiveSceneStory from './FiveSceneStory';
import MyceliumNetwork from './MyceliumNetwork';
import PhilosophySection from './PhilosophySection';
import CompoundChoiceVisualization from './CompoundChoiceVisualization';
import MissionEditorial from './MissionEditorial';
import { Globe2 } from 'lucide-react';

export default function AboutLivingPlanet({
  theme,
  onOpenCalculator,
  onReturnHome,
  onNavigateSolutions
}) {
  const [activeSystemId, setActiveSystemId] = useState('forests');

  return (
    <div id="about" className="relative w-full overflow-hidden transition-colors duration-700">
      
      {/* 1. Calm Editorial Chapter Introduction & Seamless Bridge */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-grain">
        {/* Soft atmospheric ambient glow */}
        <div className="absolute top-1/4 -left-36 w-[32rem] h-[32rem] rounded-full bg-econest-soft/60 filter blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-econest-natural/30 filter blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          {/* Chapter Badge */}
          <div className="inline-flex items-center space-x-2.5 py-1.5 px-3.5 rounded-full border border-econest-forest/15 bg-white/80 dark:bg-black/40 backdrop-blur-sm text-econest-forest dark:text-econest-natural text-xs font-semibold uppercase tracking-brand shadow-xs mx-auto">
            <span className="w-2 h-2 rounded-full bg-econest-primary animate-pulse" />
            <span>{CHAPTER_TWO.badge}</span>
          </div>

          {/* Opening Statement */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-econest-deep leading-[1.15] tracking-tight max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>
              “The planet is not a backdrop.{' '}
              <span className="italic font-normal text-econest-forest">
                It is a living system.”
              </span>
            </h1>


            <p className="text-sm sm:text-base md:text-lg text-econest-forest/80 font-light leading-relaxed max-w-2xl mx-auto">
              {CHAPTER_TWO.subtext}
            </p>
          </div>

          {/* Intentional Transition Anchor into Earth */}
          <div className="pt-4 flex flex-col items-center space-y-2">
            <div className="w-px h-8 bg-gradient-to-b from-econest-forest/30 to-transparent" />
            <p className="text-xs uppercase font-semibold tracking-brand text-econest-primary">
              {CHAPTER_TWO.introIdea}
            </p>
          </div>
        </div>
      </section>

      {/* 2. The 3D Earth Centerpiece & Ecological Biosphere (Controlled 540-620px Composition) */}
      <section className="relative pt-6 pb-20 md:pb-28 bg-gradient-to-b from-transparent via-econest-soft/20 to-transparent">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center space-y-8">
          
          {/* Biosphere Section Header */}
          <div className="text-center space-y-1.5 max-w-lg">
            <div className="inline-flex items-center space-x-2 text-xs uppercase font-semibold tracking-brand text-econest-primary">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Interactive Planetary Model</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-econest-deep">
              The Ecological Biosphere
            </h2>
            <p className="text-xs text-econest-forest/70 font-light">
              Explore four foundational planetary cycles in real time. Drag the Earth or select a system below.
            </p>
          </div>

          {/* 3D Earth Scene (Controlled Sizing: 540-620px) */}
          <div className="w-full flex justify-center">
            <EarthErrorBoundary
              fallback={
                <StaticEarthFallback
                  activeSystemId={activeSystemId}
                  onSelectSystem={setActiveSystemId}
                />
              }
            >
              <EarthScene3D
                activeSystemId={activeSystemId}
                onSelectSystem={setActiveSystemId}
                theme={theme}
              />
            </EarthErrorBoundary>
          </div>

          {/* Integrated Ecological Systems Dock & Information Card */}
          <EcologicalSystemsPanel
            activeSystemId={activeSystemId}
            onSelectSystem={setActiveSystemId}
          />
        </div>
      </section>

      {/* 3. Five-Scene Continuous Scroll Story */}
      <FiveSceneStory />

      {/* 4. Organic Mycelium Scaling Network */}
      <MyceliumNetwork />

      {/* 5. Editorial Philosophy Journey */}
      <PhilosophySection />

      {/* 6. Compound Choice Educational Visualization */}
      <CompoundChoiceVisualization />

      {/* 7. Major Editorial Mission Manifesto */}
      <MissionEditorial
        onOpenCalculator={onOpenCalculator}
        onReturnHome={onReturnHome}
        onNavigateSolutions={onNavigateSolutions}
      />

    </div>
  );
}
