import React, { useState, useMemo } from 'react';
import { Search, ArrowUpRight, BookOpen, Filter, X } from 'lucide-react';
import { INSIGHTS_DATA, INSIGHT_CATEGORIES } from '../../data/brandData';

export default function InsightsArchive({
  selectedCategory = 'all',
  onSelectCategory,
  onOpenInsight,
  theme = 'day'
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArchive = useMemo(() => {
    return INSIGHTS_DATA.filter(item => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchTerm.trim() === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.loopStage && item.loopStage.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="insights-archive" className="relative py-20 md:py-28 bg-white dark:bg-[#06180F] border-b border-econest-forest/10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header & Search Toolbar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-econest-primary" />
              <span>SECTION 05 // RESEARCH REPOSITORY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-econest-deep dark:text-white leading-tight">
              The EcoNest Field Archive
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
              A cumulative record of field observations, structural studies, and ecological principles verified across living systems.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <Search className="w-3.5 h-3.5 text-econest-forest/45 dark:text-white/45 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search archive or loop..."
                aria-label="Search the field archive"
                className="pl-9 pr-8 py-2 rounded-xl text-xs font-mono bg-econest-lightest dark:bg-white/5 border border-econest-forest/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh text-econest-deep dark:text-white placeholder:text-econest-forest/40 w-full sm:w-60 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-econest-forest/40 hover:text-econest-forest dark:text-white/40 dark:hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => onSelectCategory && onSelectCategory(e.target.value)}
              aria-label="Filter archive by category"
              className="py-2 px-3 rounded-xl text-xs font-mono bg-econest-lightest dark:bg-white/5 border border-econest-forest/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh text-econest-deep dark:text-white transition-all cursor-pointer"
            >
              {INSIGHT_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id} className="dark:bg-[#071D12]">
                  {cat.number} {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop / Tablet: Curated Archive Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-econest-forest/15 dark:border-white/10 shadow-sm bg-white dark:bg-[#0A2417]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-econest-forest/15 dark:border-white/10 bg-econest-soft/40 dark:bg-black/30 text-[10px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70">
                <th className="py-3.5 px-5 w-24">Ref ID</th>
                <th className="py-3.5 px-4 w-28">Loop Stage</th>
                <th className="py-3.5 px-4 w-32">Type</th>
                <th className="py-3.5 px-4 w-36">Category</th>
                <th className="py-3.5 px-5">Field Report & Title</th>
                <th className="py-3.5 px-4 w-24">Read</th>
                <th className="py-3.5 px-5 text-right w-24">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-econest-forest/10 dark:divide-white/5 text-xs font-sans">
              {filteredArchive.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-14 text-center">
                    <div className="font-mono text-xs font-bold text-econest-deep dark:text-white mb-1 uppercase tracking-wider">
                      No matching field entries found
                    </div>
                    <div className="text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60 mb-3">
                      Try adjusting your search query or reset category filter.
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchTerm('');
                        if (onSelectCategory) onSelectCategory('all');
                      }}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-econest-forest/10 hover:bg-econest-forest text-econest-forest hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
                    >
                      Reset all filters
                    </button>
                  </td>
                </tr>
              ) : (
                filteredArchive.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-econest-soft/30 dark:hover:bg-white/5 transition-colors group cursor-pointer"
                    onClick={() => onOpenInsight && onOpenInsight(item)}
                  >
                    {/* Ref ID */}
                    <td className="py-4 px-5 font-mono text-xs font-bold text-econest-forest dark:text-econest-natural whitespace-nowrap">
                      {item.number}
                    </td>

                    {/* Loop Stage */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider bg-econest-forest/5 dark:bg-white/5 text-econest-forest dark:text-econest-fresh border border-econest-forest/10">
                        {item.loopNumber ? `${item.loopNumber} // ${item.loopStage}` : '01 // OBSERVE'}
                      </span>
                    </td>

                    {/* Type */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-wide bg-econest-forest/5 dark:bg-white/5 text-econest-forest/80 dark:text-econest-natural/80">
                        {item.type}
                      </span>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-4 font-mono text-[11px] text-econest-forest/80 dark:text-[#BFD8C2] whitespace-nowrap">
                      {item.categoryLabel}
                    </td>

                    {/* Title & Subtitle */}
                    <td className="py-4 px-5">
                      <div className="font-serif font-bold text-sm text-econest-deep dark:text-white group-hover:text-econest-forest dark:group-hover:text-econest-natural transition-colors leading-snug">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-econest-forest/60 dark:text-white/50 line-clamp-1 max-w-md font-sans mt-0.5 italic">
                        “{item.subtitle}”
                      </div>
                    </td>

                    {/* Read Time */}
                    <td className="py-4 px-4 font-mono text-[11px] text-econest-forest/60 dark:text-econest-natural/60 whitespace-nowrap">
                      {item.readTime}
                    </td>

                    {/* Action Button */}
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenInsight && onOpenInsight(item);
                        }}
                        className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-mono font-medium text-econest-forest dark:text-econest-natural hover:text-econest-deep dark:hover:text-white hover:bg-econest-forest/10 dark:hover:bg-white/10 transition-colors group/btn focus:outline-none focus-visible:ring-1 focus-visible:ring-econest-fresh"
                      >
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Table Footer */}
          <div className="p-3.5 bg-econest-soft/20 dark:bg-black/20 border-t border-econest-forest/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-econest-forest/60 dark:text-econest-natural/60">
            <div>
              Active filter: {filteredArchive.length} of {INSIGHTS_DATA.length} recorded entries
            </div>
            <div>
              PEER-OBSERVED RESEARCH DATA · GROUNDED IN ACTIVE DEMONSTRATION TELEMETRY
            </div>
          </div>
        </div>

        {/* Mobile: Intentional Stacked Archive Cards */}
        <div className="md:hidden space-y-3">
          {filteredArchive.length === 0 ? (
            <div className="p-7 text-center rounded-2xl bg-white dark:bg-[#0A2417] border border-econest-forest/10 space-y-3">
              <div className="font-mono text-xs font-bold text-econest-deep dark:text-white mb-1 uppercase tracking-wider">
                No matching field entries found
              </div>
              <div className="text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60">
                Try adjusting your search query or resetting filters.
              </div>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  if (onSelectCategory) onSelectCategory('all');
                }}
                className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-econest-forest text-white shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            filteredArchive.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenInsight && onOpenInsight(item)}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A2417] border border-econest-forest/15 space-y-2.5 shadow-2xs cursor-pointer active:scale-[0.99] transition-transform"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-econest-fresh">REF #{item.number}</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-econest-forest/5 dark:bg-white/10 text-econest-forest dark:text-econest-natural">
                      {item.loopStage || item.type}
                    </span>
                  </div>
                  <span className="text-[10px] text-econest-forest/60 dark:text-white/50">{item.readTime}</span>
                </div>


                <div>
                  <h4 className="font-serif font-bold text-base text-econest-deep dark:text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-econest-forest/70 dark:text-white/60 line-clamp-1 mt-0.5 italic">
                    “{item.subtitle}”
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-econest-forest/10 text-xs font-mono">
                  <span className="text-[10px] text-econest-forest/60 dark:text-econest-natural/60">{item.categoryLabel}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenInsight && onOpenInsight(item);
                    }}
                    className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-econest-forest/10 text-econest-forest dark:text-econest-natural"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
