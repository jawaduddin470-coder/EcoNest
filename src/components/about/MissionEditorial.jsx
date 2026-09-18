import React from 'react';
import { ArrowUpRight, Leaf } from 'lucide-react';
import { BRAND } from '../../data/brandData';

export default function MissionEditorial({
  onOpenCalculator,
  onReturnHome,
  onNavigateSolutions
}) {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-grain">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-12">
        
        {/* Subtle Brand Emblem */}
        <div className="w-12 h-12 rounded-2xl bg-econest-forest/10 border border-econest-forest/20 text-econest-forest flex items-center justify-center mx-auto shadow-xs">
          <Leaf className="w-6 h-6 text-econest-primary" />
        </div>

        {/* High-Impact Editorial Manifesto */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-econest-deep leading-[1.08] tracking-tight">
            “We don’t need a perfect world. <br />
            <span className="italic font-normal text-econest-forest">
              We need millions of better choices.”
            </span>
          </h2>

          <p className="text-base sm:text-xl text-econest-forest/80 font-light leading-relaxed max-w-2xl mx-auto pt-4">
            EcoNest exists to dismantle the paralysis of overwhelming climate data. By weaving ecological intelligence directly into daily human habits, we build self-healing living systems from the ground up.
          </p>
        </div>

        {/* Intentional Actions */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onNavigateSolutions}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-econest-forest hover:bg-econest-deep text-white text-xs uppercase font-semibold tracking-widest transition-all duration-300 shadow-sm hover:shadow-organic hover:-translate-y-0.5"
          >
            <span>Explore Chapter 03: Solutions</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl border border-econest-forest/20 text-econest-deep hover:bg-white/80 dark:text-econest-natural text-xs uppercase font-semibold tracking-widest transition-all duration-300"
          >
            <span>Model Your Daily Impact</span>
          </button>

          <button
            onClick={onReturnHome}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl border border-transparent text-econest-forest/70 hover:text-econest-deep text-xs uppercase font-semibold tracking-widest transition-all duration-300"
          >
            <span>Return Home</span>
          </button>
        </div>

        {/* Quiet Subtext */}
        <div className="pt-8 text-xs text-econest-forest/60 font-light">
          {BRAND.concept} &middot; Phase 2: The Living Planet
        </div>

      </div>
    </section>
  );
}
