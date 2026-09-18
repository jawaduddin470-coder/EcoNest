import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, FastForward, Sparkles, Volume2, VolumeX } from 'lucide-react';
import Scene3D from './Scene3D';
import { INTRO_STAGES, BRAND } from '../../data/brandData';
import { isReducedMotionPreferred, isWebGLAvailable, setIntroSeenStatus } from '../../utils/accessibility';

export default function CinematicIntro({ onComplete }) {
  const [currentStage, setCurrentStage] = useState(1);
  const [isEntering, setIsEntering] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const containerRef = useRef(null);
  const stageTimeoutRef = useRef([]);
  const brandRevealRef = useRef(null);
  const stageTextRef = useRef(null);
  const audioCtxRef = useRef(null);

  const reducedMotion = isReducedMotionPreferred();

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());

    if (reducedMotion) {
      setCurrentStage(6);
      return;
    }

    // Calm, cinematic overlapping progression: ~6.1s total to brand reveal
    // Distributed naturally: seed breathing → root expansion → dramatic stem → leaf settle → spore reveal
    const stageDelays = [1100, 1200, 1400, 1300, 1100]; // Delays between stages 1->2, 2->3, 3->4, 4->5, 5->6
    let cumulativeDelay = 0;

    stageDelays.forEach((delay, idx) => {
      cumulativeDelay += delay;
      const timer = setTimeout(() => {
        setCurrentStage(idx + 2);
      }, cumulativeDelay);
      stageTimeoutRef.current.push(timer);
    });

    return () => {
      stageTimeoutRef.current.forEach(clearTimeout);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [reducedMotion]);

  // Stage text smooth organic cross-fade
  useEffect(() => {
    if (stageTextRef.current && currentStage < 6) {
      gsap.fromTo(
        stageTextRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentStage]);

  // Stage 6 brand reveal typography animation
  useEffect(() => {
    if (currentStage === 6 && brandRevealRef.current) {
      gsap.fromTo(
        brandRevealRef.current,
        { opacity: 0, y: 25, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }
      );
    }
  }, [currentStage]);

  // Ambient sound synthesizer using native Web Audio API
  const toggleAudio = () => {
    if (!audioEnabled) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 1.5);

        whiteNoise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        whiteNoise.start();

        setAudioEnabled(true);
      } catch (e) {
        console.warn('Web Audio synthesis error:', e);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setAudioEnabled(false);
    }
  };

  // Accelerated, seamless transition into the website
  const handleEnterExperience = () => {
    setIsEntering(true);
    setIntroSeenStatus(true);

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        filter: "blur(6px)",
        scale: 1.04,
        duration: 0.85,
        ease: "power2.inOut",
        onComplete: () => {
          if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
          onComplete();
        }
      });
    } else {
      onComplete();
    }
  };

  // Requirement 5: Instant Skip Intro (cleans animations and jumps into site without delay)
  const handleSkipIntro = () => {
    stageTimeoutRef.current.forEach(clearTimeout);
    setIntroSeenStatus(true);
    if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    gsap.killTweensOf(containerRef.current);
    onComplete();
  };

  const currentStageInfo = INTRO_STAGES.find(s => s.stage === currentStage) || INTRO_STAGES[0];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#091F15] via-[#0E3524] to-[#06180F] text-econest-lightest select-none"
    >
      {/* 3D WebGL Canvas Layer */}
      {webGLSupported ? (
        <Scene3D
          currentStage={currentStage}
          isEntering={isEntering}
          onReady={(ready) => {
            if (!ready) setWebGLSupported(false);
          }}
        />
      ) : (
        /* Graceful Fallback */
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className={`w-12 h-16 bg-gradient-to-t from-econest-forest to-econest-fresh rounded-full transition-all duration-700 ${currentStage >= 2 ? 'scale-125' : 'scale-100'}`} />
            {currentStage >= 3 && (
              <div className="absolute top-1/2 w-1.5 h-32 bg-econest-fresh origin-bottom -translate-y-full rounded-full" />
            )}
          </div>
        </div>
      )}

      {/* Atmospheric Radial Vignette */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(6,24,15,0.7)_100%] pointer-events-none" />

      {/* Top Header Controls */}
      <header className="relative z-10 w-full px-6 sm:px-12 pt-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2 h-2 rounded-full bg-econest-fresh animate-ping" />
          <span className="text-xs uppercase font-semibold tracking-brand text-econest-natural/80">
            A Living Story
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Soundscape Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            className="flex items-center space-x-1.5 text-xs text-econest-lightest/80 hover:text-white py-2 px-3 rounded-full border border-white/15 hover:border-white/35 backdrop-blur-md bg-white/5 transition-all"
            aria-label={audioEnabled ? "Disable ambient sound" : "Enable ambient nature soundscape"}
            title="Toggle synthesized atmospheric breeze"
          >
            {audioEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-econest-fresh" />
                <span className="hidden sm:inline text-[11px] tracking-wider uppercase">Sound On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-white/60" />
                <span className="hidden sm:inline text-[11px] tracking-wider uppercase">Sound Off</span>
              </>
            )}
          </button>

          {/* Instant Skip Intro Button */}
          <button
            onClick={handleSkipIntro}
            className="group flex items-center space-x-2 text-xs uppercase font-medium tracking-widest text-econest-lightest/90 hover:text-white transition-colors py-2 px-3.5 rounded-full border border-white/15 hover:border-white/35 backdrop-blur-md bg-white/5"
            aria-label="Skip introductory sequence immediately"
          >
            <span>Skip Intro</span>
            <FastForward className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </header>

      {/* Center Dynamic Stage & Brand Reveal */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto my-auto">
        {currentStage < 6 ? (
          <div ref={stageTextRef} className="space-y-3.5 max-w-lg">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-econest-fresh/35 bg-econest-forest/50 backdrop-blur-sm text-[11px] uppercase tracking-brand text-econest-natural">
              <Sparkles className="w-3 h-3 text-econest-fresh" />
              <span>Phase 0{currentStageInfo.stage} &middot; {currentStageInfo.title}</span>
            </div>
            <p className="text-base sm:text-lg text-econest-lightest/90 font-light tracking-wide italic leading-relaxed">
              “{currentStageInfo.subtitle}”
            </p>
          </div>
        ) : (
          /* Stage 6: The Grand EcoNest Reveal */
          <div
            ref={brandRevealRef}
            className="flex flex-col items-center space-y-6 sm:space-y-7"
          >
            {/* Seedling Emblem */}
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-econest-fresh/35 to-econest-forest/70 border border-econest-fresh/50 flex items-center justify-center shadow-organic-glow backdrop-blur-md">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-econest-natural animate-pulse-subtle"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12a10 10 0 0 1 10-10z"/>
                <path d="M12 22V12"/>
                <path d="M12 12C12 7 7 7 7 7"/>
                <path d="M12 8c4 0 5-3 5-3"/>
              </svg>
            </div>

            {/* Brand Wordmark & Tagline */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-semibold tracking-tight text-white leading-none">
                {BRAND.name.toUpperCase()}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-econest-natural tracking-wide">
                {BRAND.tagline}
              </p>
              <p className="text-xs sm:text-sm text-econest-lightest/70 max-w-md mx-auto font-light leading-relaxed pt-1">
                {BRAND.secondaryTagline}
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleEnterExperience}
                disabled={isEntering}
                className="group relative inline-flex items-center space-x-3 px-9 py-4 rounded-full bg-gradient-to-r from-econest-fresh via-econest-primary to-econest-forest text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-organic-glow hover:scale-[1.03] active:scale-[0.98] border border-econest-natural/40"
              >
                <span>Enter Experience</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Stage Progress Timeline */}
      <footer className="relative z-10 w-full px-6 sm:px-12 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          {INTRO_STAGES.map((s) => (
            <button
              key={s.stage}
              onClick={() => setCurrentStage(s.stage)}
              className="group py-2 px-1 focus:outline-none"
              aria-label={`Jump to stage ${s.stage}: ${s.title}`}
              title={`Stage ${s.stage}: ${s.title}`}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentStage === s.stage
                    ? 'w-9 bg-econest-fresh shadow-sm'
                    : currentStage > s.stage
                    ? 'w-3.5 bg-econest-natural/60'
                    : 'w-2 bg-white/20'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="text-[11px] text-econest-lightest/50 tracking-wider">
          <span>A Living Digital Ecosystem</span>
        </div>
      </footer>
    </div>
  );
}
