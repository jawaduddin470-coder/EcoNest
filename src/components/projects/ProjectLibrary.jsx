import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpRight, Check, SlidersHorizontal, BookOpen } from 'lucide-react';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../../data/brandData';

export default function ProjectLibrary({
  theme = 'day',
  onSelectProject
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter(p => {
      const matchesCat = categoryFilter === 'all' || p.category === categoryFilter;
      const matchesSearch = searchTerm.trim() === '' ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.scaleLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.systems.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [searchTerm, categoryFilter]);

  return (
    <section id="project-library" className="relative py-24 md:py-32 bg-white dark:bg-[#06180F] border-b border-econest-forest/10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-econest-primary" />
              <span>SECTION 07 // TECHNICAL REGISTRY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-econest-deep dark:text-white leading-tight">
              Project Specification Library
            </h2>
            <p className="mt-3 text-base text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
              Curated architectural ledger of active demonstration models, specifications, and empirical target yields across the bioregion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-econest-forest/40 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search registry..."
                aria-label="Search project registry"
                className="pl-9 pr-4 py-2 rounded-xl text-xs font-mono bg-econest-lightest dark:bg-white/5 border border-econest-forest/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh text-econest-deep dark:text-white placeholder:text-econest-forest/40 w-full sm:w-56 transition-all"
              />
            </div>

            {/* Category Filter Dropdown */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              aria-label="Filter projects by category"
              className="py-2 px-3 rounded-xl text-xs font-mono bg-econest-lightest dark:bg-white/5 border border-econest-forest/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh text-econest-deep dark:text-white transition-all cursor-pointer"
            >
              {PROJECT_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id} className="dark:bg-[#071D12]">
                  {cat.number} {cat.label}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Desktop / Tablet: Editorial Table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-econest-forest/15 dark:border-white/10 shadow-sm bg-white dark:bg-[#0A2417]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-econest-forest/15 dark:border-white/10 bg-econest-soft/40 dark:bg-black/30 text-[10px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70">
                <th className="py-4 px-6 w-24">Model ID</th>
                <th className="py-4 px-6">Project Name & Scope</th>
                <th className="py-4 px-6 w-36">Category</th>
                <th className="py-4 px-6 w-32">Spatial Scale</th>
                <th className="py-4 px-6 w-44">Target Yield</th>
                <th className="py-4 px-6 w-32">Status</th>
                <th className="py-4 px-6 text-right w-28">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-econest-forest/10 dark:divide-white/5 text-xs font-sans">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-14 text-center">
                    <div className="text-xs font-mono font-semibold text-econest-deep dark:text-white mb-1">
                      No matching demonstration models found in this filter view.
                    </div>
                    <div className="text-[11px] font-mono text-econest-forest/60 dark:text-econest-natural/60 mb-3">
                      Try adjusting your keywords or clearing category filters.
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchTerm('');
                        setCategoryFilter('all');
                      }}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-econest-forest/10 hover:bg-econest-forest text-econest-forest hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
                    >
                      Reset all filters
                    </button>
                  </td>
                </tr>
              ) : (

                filteredProjects.map((p) => (
                  <tr
                    key={p.id}
                    className="hover:bg-econest-soft/30 dark:hover:bg-white/5 transition-colors group"
                  >
                    {/* Model ID */}
                    <td className="py-4 px-6 font-mono text-xs font-bold text-econest-forest dark:text-econest-natural whitespace-nowrap">
                      PROJ-{p.number}
                    </td>

                    {/* Project Name & Scope */}
                    <td className="py-4 px-6">
                      <div className="font-serif font-bold text-sm text-econest-deep dark:text-white group-hover:text-econest-forest dark:group-hover:text-econest-natural transition-colors leading-snug">
                        {p.title}
                      </div>
                      <div className="text-[11px] text-econest-forest/60 dark:text-white/50 line-clamp-1 max-w-sm font-sans mt-0.5">
                        {p.tagline}
                      </div>
                    </td>

                    {/* Domain / Category */}
                    <td className="py-4 px-6 font-mono text-[11px] text-econest-forest/80 dark:text-[#BFD8C2] whitespace-nowrap">
                      {p.categoryLabel}
                    </td>

                    {/* Spatial Scale */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-econest-forest/5 dark:bg-white/5 text-econest-forest dark:text-econest-natural border border-econest-forest/10">
                        {p.scaleLabel}
                      </span>
                    </td>

                    {/* Primary Target Yield */}
                    <td className="py-4 px-6">
                      <div className="font-mono text-xs font-bold text-econest-deep dark:text-white">
                        {p.primaryMetric.value}
                      </div>
                      <div className="text-[10px] font-mono text-econest-forest/50 dark:text-white/40 leading-snug">
                        {p.primaryMetric.label}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-econest-fresh font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh" />
                        <span>{p.status}</span>
                      </span>
                    </td>

                    {/* Understated Action */}
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <button
                        onClick={() => onSelectProject && onSelectProject(p)}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-econest-forest dark:text-econest-natural hover:text-econest-deep dark:hover:text-white hover:bg-econest-forest/10 dark:hover:bg-white/10 transition-colors group/btn"
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
          <div className="p-4 bg-econest-soft/20 dark:bg-black/20 border-t border-econest-forest/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-econest-forest/60 dark:text-econest-natural/60">
            <div>
              Active registry entries: {filteredProjects.length} of {PROJECTS_DATA.length}
            </div>
            <div>
              DEMONSTRATION SYSTEM DATA · BASED ON SCALABLE ECOLOGICAL FRAMEWORKS
            </div>
          </div>
        </div>

        {/* Mobile: Intentional Card Presentation */}
        <div className="md:hidden space-y-4">
          {filteredProjects.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono rounded-2xl bg-white dark:bg-[#0A2417] border border-econest-forest/10 space-y-3">
              <div className="font-semibold text-econest-deep dark:text-white">
                No matching demonstration models found.
              </div>
              <div className="text-[11px] text-econest-forest/60 dark:text-econest-natural/60">
                Try adjusting your search criteria or resetting filters.
              </div>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                }}
                className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-mono font-medium bg-econest-forest text-white shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              >
                Reset all filters
              </button>
            </div>
          ) : (

            filteredProjects.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-2xl bg-white dark:bg-[#0A2417] border border-econest-forest/15 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-econest-forest dark:text-econest-natural">PROJ-{p.number}</span>
                  <span className="text-[10px] text-econest-fresh font-medium">{p.status}</span>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-lg text-econest-deep dark:text-white">
                    {p.title}
                  </h4>
                  <p className="text-xs text-econest-forest/70 dark:text-white/60 line-clamp-1">
                    {p.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-econest-forest/10 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-econest-forest/50 uppercase block">{p.primaryMetric.label}</span>
                    <span className="font-bold text-econest-deep dark:text-white">{p.primaryMetric.value}</span>
                  </div>
                  <button
                    onClick={() => onSelectProject && onSelectProject(p)}
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-econest-forest/10 text-econest-forest dark:text-econest-natural"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="text-[10px] font-mono text-center text-econest-forest/60 dark:text-econest-natural/60 pt-2">
            DEMONSTRATION SYSTEM DATA · BASED ON SCALABLE ECOLOGICAL FRAMEWORKS
          </div>
        </div>
      </div>
    </section>
  );
}
