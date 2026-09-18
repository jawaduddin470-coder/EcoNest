import React from 'react';
import { Leaf } from 'lucide-react';

const PAGE_LABELS = {
  about: 'The Living Planet',
  solutions: 'Solutions & Systems',
  impact: 'The Measure of Change',
  projects: 'Where Ideas Become Living Systems',
  insights: 'Where Observation Becomes Understanding',
  home: 'Home Ecosystem',
};

export default function PageTransitionVeil({ isTransitioning, targetPage }) {
  if (!isTransitioning) return null;

  const label = PAGE_LABELS[targetPage] || 'Home Ecosystem';

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-econest-deep/40 backdrop-blur-md transition-opacity duration-500 animate-fade-in">
      <div className="flex flex-col items-center space-y-3 scale-100 transition-transform duration-500">
        <div className="w-12 h-12 rounded-2xl bg-econest-forest border border-econest-fresh/40 flex items-center justify-center shadow-organic-glow">
          <Leaf className="w-6 h-6 text-econest-natural animate-pulse-subtle" />
        </div>
        <span className="text-[11px] uppercase font-semibold tracking-brand text-econest-natural">
          Entering {label}
        </span>
      </div>
    </div>
  );
}

