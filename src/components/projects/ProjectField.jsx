import React from 'react';
import { Layers, ArrowUpRight, Compass, Activity, ExternalLink, Network } from 'lucide-react';
import { PROJECT_CATEGORIES, PROJECTS_DATA } from '../../data/brandData';

export default function ProjectField({
  theme = 'day',
  selectedCategory = 'all',
  onSelectCategory,
  onSelectProject,
  onInspectSystemMap
}) {
  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="project-field" className="relative py-24 md:py-32 bg-econest-lightest dark:bg-[#071D12] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-econest-forest/70 dark:text-econest-natural/70 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-econest-primary" />
              <span>SECTION 02 // LIVING PROJECT FIELD</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-econest-deep dark:text-white leading-tight">
              Spatial Field of Living Deployments
            </h2>
            <p className="mt-3 text-base text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
              Every project acts as a functional regenerative node. Explore the 6 interconnected demonstration models currently active in the EcoNest repository.
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono text-econest-forest/60 dark:text-econest-natural/60 bg-white/60 dark:bg-white/5 px-4 py-2 rounded-xl border border-econest-forest/10">
            <Network className="w-4 h-4 text-econest-fresh" />
            <span>6 ACTIVE DEMONSTRATION NODES</span>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {PROJECT_CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-300 border ${
                  isActive
                    ? 'bg-econest-deep text-white border-econest-deep shadow-sm'
                    : 'bg-white/80 dark:bg-white/5 text-econest-forest/80 dark:text-econest-natural/80 border-econest-forest/15 hover:border-econest-forest/35 hover:bg-white dark:hover:bg-white/10'
                }`}
              >
                <span className={`font-mono text-[10px] ${isActive ? 'text-econest-fresh' : 'text-econest-forest/50 dark:text-white/40'}`}>
                  {cat.number}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid Field */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PROJECTS_DATA.map((project) => {
            const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
            return (
              <div
                key={project.id}
                className={`relative flex flex-col justify-between p-7 rounded-2xl border transition-all duration-500 bg-white dark:bg-[#0A2417] group h-full ${
                  matchesCategory
                    ? 'border-econest-forest/15 dark:border-white/10 shadow-sm hover:shadow-organic hover:-translate-y-1 hover:border-econest-fresh/40'
                    : 'opacity-40 filter grayscale-[50%] border-econest-forest/10 dark:border-white/5 hover:opacity-90 hover:grayscale-0'
                }`}
              >
                {/* 1. PROJECT ID & STATUS */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-econest-forest dark:text-econest-natural">
                        PROJ-{project.number}
                      </span>
                      <span className="text-econest-forest/30 dark:text-white/20">/</span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60">
                        {project.scaleLabel}
                      </span>
                    </div>

                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider bg-econest-soft/80 dark:bg-white/10 text-econest-forest dark:text-econest-natural border border-econest-forest/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh animate-pulse" />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* 2. TITLE (Dominant element) */}
                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-econest-deep dark:text-white group-hover:text-econest-forest dark:group-hover:text-econest-natural transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>

                  {/* 3. TAGLINE */}
                  <p className="text-xs font-serif italic text-econest-forest/70 dark:text-econest-natural/70 mb-3 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* 4. DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Segment: Metrics, Tags, Actions */}
                <div>
                  {/* 5. METRICS (Numbers dominant, labels secondary without awkward clipping) */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-econest-soft/40 dark:bg-black/20 border border-econest-forest/10 mb-5">
                    <div className="flex flex-col justify-between min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-econest-forest/60 dark:text-econest-natural/60 leading-snug min-h-[28px]">
                        {project.primaryMetric.label}
                      </div>
                      <div className="font-mono text-lg font-bold text-econest-deep dark:text-white mt-1">
                        {project.primaryMetric.value}
                      </div>
                      <div className="text-[9px] font-mono text-econest-forest/50 dark:text-white/40 mt-0.5">
                        {project.primaryMetric.unit}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between min-w-0 border-l border-econest-forest/10 pl-3">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-econest-forest/60 dark:text-econest-natural/60 leading-snug min-h-[28px]">
                        {project.secondaryMetric.label}
                      </div>
                      <div className="font-mono text-lg font-bold text-econest-fresh mt-1">
                        {project.secondaryMetric.value}
                      </div>
                      <div className="text-[9px] font-mono text-econest-forest/50 dark:text-white/40 mt-0.5">
                        {project.secondaryMetric.unit}
                      </div>
                    </div>
                  </div>

                  {/* 6. CONNECTED SYSTEM TAGS */}
                  <div className="flex flex-wrap gap-1.5 mb-6 min-h-[26px]">
                    {project.systems.map(sys => (
                      <span
                        key={sys}
                        className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-econest-forest/5 dark:bg-white/5 text-econest-forest dark:text-econest-natural border border-econest-forest/10"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>

                  {/* 7. ACTIONS (Consistent height h-9, padding, alignment) */}
                  <div className="flex items-center justify-between pt-4 border-t border-econest-forest/10 dark:border-white/10">
                    <button
                      onClick={() => onInspectSystemMap && onInspectSystemMap(project)}
                      className="h-9 inline-flex items-center space-x-1.5 text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70 hover:text-econest-fresh transition-colors"
                      title="Inspect System Map for this project"
                    >
                      <Activity className="w-3.5 h-3.5 text-econest-fresh" />
                      <span>System Map</span>
                    </button>

                    <button
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="h-9 px-4 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-econest-forest dark:bg-white/10 text-white hover:bg-econest-deep dark:hover:bg-white/20 transition-all shadow-xs flex items-center space-x-1.5 group/btn"
                    >
                      <span>Field Report</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
