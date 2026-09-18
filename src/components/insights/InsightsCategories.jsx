import React from 'react';
import { INSIGHT_CATEGORIES, INSIGHTS_DATA } from '../../data/brandData';

export default function InsightsCategories({
  selectedCategory = 'all',
  onSelectCategory,
  theme = 'day'
}) {
  return (
    <div
      className="py-3.5 border-b border-econest-forest/10 dark:border-white/10 bg-white/85 dark:bg-[#071D12]/85 backdrop-blur-md sticky top-[72px] z-30 transition-colors duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
      aria-label="Filter research field notes by category"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Category Pills Container */}
        <div
          role="tablist"
          aria-label="Insight categories"
          className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full max-w-full touch-pan-x"
        >
          {INSIGHT_CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            const count = cat.id === 'all'
              ? INSIGHTS_DATA.length
              : INSIGHTS_DATA.filter(i => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className={`flex-shrink-0 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh ${
                  isActive
                    ? 'bg-econest-deep text-white border-econest-deep shadow-xs font-semibold'
                    : 'bg-white/80 dark:bg-white/5 text-econest-forest/80 dark:text-econest-natural/80 border-econest-forest/15 hover:border-econest-forest/35 hover:bg-white dark:hover:bg-white/10'
                }`}
              >
                <span className={`font-mono text-[10px] ${isActive ? 'text-econest-fresh' : 'text-econest-forest/50 dark:text-white/40'}`}>
                  {cat.number}
                </span>
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-econest-forest/10 dark:bg-white/10 text-econest-forest/70 dark:text-white/70'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
