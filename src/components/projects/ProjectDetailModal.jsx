import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Calendar, Layers, Activity, Sparkles } from 'lucide-react';

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onViewInsight,
  theme = 'day'
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-econest-deep/60 dark:bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#082015] border border-econest-forest/20 dark:border-white/10 shadow-2xl p-6 sm:p-8 md:p-10 text-econest-deep dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close field report"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-econest-forest/5 dark:bg-white/10 hover:bg-econest-forest hover:text-white dark:hover:bg-white/20 text-econest-forest dark:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Top Metadata */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70">
          <span className="font-bold text-econest-fresh">MODEL #{project.number}</span>
          <span>//</span>
          <span>{project.categoryLabel}</span>
          <span>//</span>
          <span className="flex items-center space-x-1">
            <MapPin className="w-3 h-3 text-econest-forest/50" />
            <span>{project.location}</span>
          </span>
          <span>//</span>
          <span className="flex items-center space-x-1">
            <Calendar className="w-3 h-3 text-econest-forest/50" />
            <span>{project.year}</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <h2 id="modal-project-title" className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          {project.title}
        </h2>

        <p className="font-serif italic text-base sm:text-lg text-econest-forest/80 dark:text-econest-natural/80 mb-6">
          “{project.tagline}”
        </p>

        {/* Scale & Status Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-econest-forest/10 dark:bg-white/10 text-econest-forest dark:text-econest-natural border border-econest-forest/15">
            Spatial Tier: {project.scaleLabel}
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono bg-econest-fresh/10 text-econest-fresh border border-econest-fresh/20 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh animate-pulse" />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Deep Narrative Description */}
        <div className="space-y-4 mb-8 text-sm sm:text-base text-econest-forest/85 dark:text-[#BFD8C2] leading-relaxed">
          <p>{project.longDescription}</p>
        </div>

        {/* "How the System Works" Architectural Breakdown */}
        <div className="p-6 rounded-2xl bg-econest-soft/40 dark:bg-black/30 border border-econest-forest/10 mb-8">
          <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 mb-2">
            Engineering & Ecological Architecture
          </div>
          <h4 className="font-serif font-bold text-lg mb-2">How the System Works</h4>
          <p className="text-xs sm:text-sm text-econest-forest/80 dark:text-[#BFD8C2] leading-relaxed">
            {project.howItWorks}
          </p>
        </div>

        {/* Trace Pathway Indicator */}
        <div className="mb-8">
          <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 mb-3">
            Closed-Loop Trace Sequence
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {project.trace.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-econest-lightest dark:bg-white/5 border border-econest-forest/15 font-medium text-econest-deep dark:text-econest-natural">
                  0{idx + 1}. {step}
                </span>
                {idx < project.trace.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-econest-forest/40 dark:text-white/40" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Quantitative Metrics Breakdown */}
        <div className="mb-8">
          <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 mb-3">
            Target Ecological Performance Ledger
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-econest-soft/30 dark:bg-white/5 border border-econest-forest/10">
              <div className="text-[10px] font-mono text-econest-forest/60 dark:text-white/50 uppercase">
                {project.primaryMetric.label}
              </div>
              <div className="font-mono text-xl font-bold text-econest-deep dark:text-white mt-1">
                {project.primaryMetric.value}
              </div>
              <div className="text-[10px] text-econest-forest/50 dark:text-white/40 mt-0.5">
                {project.primaryMetric.unit}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-econest-soft/30 dark:bg-white/5 border border-econest-forest/10">
              <div className="text-[10px] font-mono text-econest-forest/60 dark:text-white/50 uppercase">
                {project.secondaryMetric.label}
              </div>
              <div className="font-mono text-xl font-bold text-econest-fresh mt-1">
                {project.secondaryMetric.value}
              </div>
              <div className="text-[10px] text-econest-forest/50 dark:text-white/40 mt-0.5">
                {project.secondaryMetric.unit}
              </div>
            </div>

            {(project.impactMetrics || []).map(im => (
              <div key={im.label} className="p-4 rounded-xl bg-econest-soft/30 dark:bg-white/5 border border-econest-forest/10">
                <div className="text-[10px] font-mono text-econest-forest/60 dark:text-white/50 uppercase">
                  {im.label}
                </div>
                <div className="font-mono text-xl font-bold text-econest-deep dark:text-white mt-1">
                  {im.value}
                </div>
                <div className="text-[10px] text-econest-forest/50 dark:text-white/40 mt-0.5">
                  Demonstration Metric
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Connected Ecological Systems */}
        <div className="mb-8">
          <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 mb-2">
            Interconnected Dimensions
          </div>
          <div className="flex flex-wrap gap-2">
            {project.systems.map(sys => (
              <span
                key={sys}
                className="px-3 py-1 rounded-full text-xs font-mono bg-econest-forest/5 dark:bg-white/10 text-econest-forest dark:text-econest-natural border border-econest-forest/15"
              >
                {sys}
              </span>
            ))}
          </div>
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="p-4 rounded-xl bg-econest-forest/5 dark:bg-white/5 border border-econest-forest/10 text-[11px] font-mono text-econest-forest/70 dark:text-econest-natural/70 flex items-center space-x-3 mb-6">
          <ShieldCheck className="w-4 h-4 text-econest-fresh flex-shrink-0" />
          <span>
            ILLUSTRATIVE PROJECT MODEL · DEMONSTRATION SYSTEM DATA BASED ON SCALABLE ECOLOGICAL FRAMEWORKS.
          </span>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-econest-forest/10 dark:border-white/10">
          {onViewInsight && (
            <button
              onClick={() => {
                onClose();
                onViewInsight(project.id);
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-econest-forest/20 dark:border-white/15 bg-econest-forest/5 dark:bg-white/5 hover:bg-econest-forest/10 dark:hover:bg-white/10 text-econest-forest dark:text-econest-natural text-xs font-mono font-semibold transition-all group"
            >
              <span>Explore Research in Chapter 06: Insights</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest bg-econest-forest hover:bg-econest-deep text-white transition-colors ml-auto"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
}
