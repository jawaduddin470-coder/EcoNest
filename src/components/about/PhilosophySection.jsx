import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../../data/brandData';
import { Eye, BarChart3, Zap } from 'lucide-react';

const PRINCIPLE_ICONS = {
  "01": Eye,
  "02": BarChart3,
  "03": Zap
};

export default function PhilosophySection() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-grain">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Introduction */}
        <div className="max-w-2xl space-y-4 mb-24 md:mb-32">
          <span className="text-xs uppercase font-semibold tracking-brand text-econest-primary">
            Our Triad of Principles
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-econest-deep leading-tight">
            How we translate global crisis into <br />
            <span className="italic font-normal text-econest-forest">compounding human agency.</span>
          </h2>
        </div>

        {/* Editorial Scroll Sequence (Deliberate Absence of Generic 3-Card Grid) */}
        <div className="space-y-28 md:space-y-40">
          {PHILOSOPHY_PRINCIPLES.map((principle) => {
            const Icon = PRINCIPLE_ICONS[principle.number];

            return (
              <div
                key={principle.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-econest-forest/15 pt-12"
              >
                {/* Massive Architectural Serif Numeral (4 Cols) */}
                <div className="md:col-span-4 flex md:flex-col items-baseline md:items-start justify-between">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-serif font-extralight text-econest-forest/30 leading-none">
                    {principle.number}
                  </div>
                  <div className="flex items-center space-x-2 text-xs uppercase font-semibold tracking-brand text-econest-forest/70 pt-2">
                    <Icon className="w-4 h-4 text-econest-primary" />
                    <span>Principle {principle.number}</span>
                  </div>
                </div>

                {/* Major Typography & Narrative Wing (8 Cols) */}
                <div className="md:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-medium text-econest-deep tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="text-sm uppercase tracking-wider font-semibold text-econest-primary">
                      {principle.subtitle}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-econest-forest/80 font-light leading-relaxed max-w-2xl">
                    {principle.statement}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
