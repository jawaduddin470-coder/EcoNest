import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Check, TreePine, Droplets, Wind, RotateCcw, PackageCheck } from 'lucide-react';

export default function ImpactCalculatorModal({ isOpen, onClose }) {
  const [diet, setDiet] = useState('plant-rich');
  const [energy, setEnergy] = useState('renewable');
  const [transit, setTransit] = useState('active');
  const [waste, setWaste] = useState('refill');
  const [isLocked, setIsLocked] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleReset = () => {
    setDiet('plant-rich');
    setEnergy('renewable');
    setTransit('active');
    setWaste('refill');
    setIsLocked(false);
  };

  const handleLockBaseline = () => {
    setIsLocked(true);
    setTimeout(() => {
      setIsLocked(false);
      onClose();
    }, 1200);
  };

  // Impact calculations
  let carbonReduction = 0;
  let treesPlanted = 0;
  let plasticSaved = 0;

  if (diet === 'plant-rich') { carbonReduction += 1.6; }
  else if (diet === 'flexitarian') { carbonReduction += 0.8; }

  if (energy === 'renewable') { carbonReduction += 2.4; treesPlanted += 80; }
  else if (energy === 'solar') { carbonReduction += 1.8; treesPlanted += 55; }

  if (transit === 'active') { carbonReduction += 2.1; }
  else if (transit === 'electric') { carbonReduction += 1.3; }

  if (waste === 'refill') { plasticSaved += 48; treesPlanted += 25; carbonReduction += 0.4; }
  else if (waste === 'conscious') { plasticSaved += 24; treesPlanted += 12; carbonReduction += 0.2; }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-econest-deep/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="calculator-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative z-[70] w-full max-w-2xl bg-econest-lightest rounded-3xl p-6 sm:p-8 border border-econest-forest/15 shadow-organic-lg max-h-[90vh] overflow-y-auto focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with 44x44 touch target */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full text-econest-forest/75 hover:text-econest-deep hover:bg-econest-soft transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-brand text-econest-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Biome Calculator</span>
          </div>
          <h2 id="calculator-title" className="text-2xl sm:text-3xl font-serif font-bold text-econest-deep">
            Calculate Your Compound Impact
          </h2>
          <p className="text-xs sm:text-sm text-econest-forest/75 font-light">
            Model how your lifestyle choices compound across global ecological restoration biomes.
          </p>
        </div>

        {/* Controls Grid */}
        <div className="mt-8 space-y-6">
          {/* Diet Selection */}
          <fieldset className="space-y-2 border-none p-0 m-0">
            <legend className="text-xs font-semibold uppercase tracking-wider text-econest-forest">
              Dietary System
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'plant-rich', label: '100% Plant-Rich' },
                { id: 'flexitarian', label: 'Flexitarian' },
                { id: 'conventional', label: 'Standard' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setDiet(opt.id)}
                  className={`min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-medium border transition-all flex items-center justify-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh ${
                    diet === opt.id
                      ? 'bg-econest-forest text-white border-econest-forest shadow-xs font-semibold'
                      : 'bg-white text-econest-forest/80 border-econest-forest/15 hover:bg-econest-soft/40'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Energy Selection */}
          <fieldset className="space-y-2 border-none p-0 m-0">
            <legend className="text-xs font-semibold uppercase tracking-wider text-econest-forest">
              Household Energy Grid
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'renewable', label: '100% Green Tariff' },
                { id: 'solar', label: 'Rooftop Solar' },
                { id: 'grid', label: 'Mixed Grid' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setEnergy(opt.id)}
                  className={`min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-medium border transition-all flex items-center justify-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh ${
                    energy === opt.id
                      ? 'bg-econest-forest text-white border-econest-forest shadow-xs font-semibold'
                      : 'bg-white text-econest-forest/80 border-econest-forest/15 hover:bg-econest-soft/40'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Mobility Selection */}
          <fieldset className="space-y-2 border-none p-0 m-0">
            <legend className="text-xs font-semibold uppercase tracking-wider text-econest-forest">
              Primary Commute
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'active', label: 'Bicycle & Transit' },
                { id: 'electric', label: 'Electric Vehicle' },
                { id: 'conventional', label: 'Combustion' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTransit(opt.id)}
                  className={`min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-medium border transition-all flex items-center justify-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh ${
                    transit === opt.id
                      ? 'bg-econest-forest text-white border-econest-forest shadow-xs font-semibold'
                      : 'bg-white text-econest-forest/80 border-econest-forest/15 hover:bg-econest-soft/40'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Waste & Circularity Selection (Phase 8 Restored) */}
          <fieldset className="space-y-2 border-none p-0 m-0">
            <legend className="text-xs font-semibold uppercase tracking-wider text-econest-forest">
              Circularity & Materials Loop
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'refill', label: 'Zero-Waste & Refill' },
                { id: 'conscious', label: 'Selective Recycling' },
                { id: 'linear', label: 'Standard Linear' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setWaste(opt.id)}
                  className={`min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-medium border transition-all flex items-center justify-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh ${
                    waste === opt.id
                      ? 'bg-econest-forest text-white border-econest-forest shadow-xs font-semibold'
                      : 'bg-white text-econest-forest/80 border-econest-forest/15 hover:bg-econest-soft/40'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Real-time Output Scoreboard */}
        <div className="mt-8 p-6 rounded-2xl bg-econest-forest text-white space-y-4 shadow-organic">
          <div className="text-xs uppercase font-semibold tracking-brand text-econest-natural">
            Projected Annual Environmental Yield
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-econest-natural text-xs">
                <Wind className="w-3.5 h-3.5" />
                <span>Carbon</span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {carbonReduction.toFixed(1)} <span className="text-sm font-sans font-normal text-econest-natural">t</span>
              </div>
              <div className="text-[10px] text-white/70">CO₂e avoided/yr</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-econest-natural text-xs">
                <TreePine className="w-3.5 h-3.5" />
                <span>Trees</span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {treesPlanted}
              </div>
              <div className="text-[10px] text-white/70">Canopy equivalent</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-econest-natural text-xs">
                <Droplets className="w-3.5 h-3.5" />
                <span>Plastic</span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {plasticSaved} <span className="text-sm font-sans font-normal text-econest-natural">kg</span>
              </div>
              <div className="text-[10px] text-white/70">Waste prevented</div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl border border-econest-forest/15 text-econest-forest/80 text-xs uppercase tracking-wider font-semibold hover:bg-econest-soft/40 transition-colors flex items-center justify-center space-x-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl border border-econest-forest/20 text-econest-forest text-xs uppercase tracking-widest font-semibold hover:bg-econest-soft transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleLockBaseline}
              disabled={isLocked}
              className={`w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl text-white text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center space-x-2 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh ${
                isLocked
                  ? 'bg-econest-forest scale-95'
                  : 'bg-econest-primary hover:bg-econest-forest'
              }`}
            >
              {isLocked ? (
                <>
                  <span>Baseline Recorded</span>
                  <PackageCheck className="w-4 h-4 text-econest-natural animate-pulse" />
                </>
              ) : (
                <>
                  <span>Lock My Baseline</span>
                  <Check className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

