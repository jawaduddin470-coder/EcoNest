import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowUpRight, ShieldCheck, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function InsightDetailModal({
  insight,
  isOpen,
  onClose,
  onViewProject,
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

  if (!isOpen || !insight) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-insight-title"
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
          aria-label="Close insight field report"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-econest-forest/5 dark:bg-white/10 hover:bg-econest-forest hover:text-white dark:hover:bg-white/20 text-econest-forest dark:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Top Metadata */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-4 text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70">
          <span className="font-bold text-econest-fresh">REF #{insight.number}</span>
          <span>//</span>
          {insight.loopStage && (
            <>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-econest-fresh/15 text-econest-forest dark:text-econest-fresh border border-econest-fresh/30">
                LOOP {insight.loopNumber} // {insight.loopStage}
              </span>
              <span>//</span>
            </>
          )}
          <span className="px-2 py-0.5 rounded bg-econest-forest/10 dark:bg-white/10 text-econest-forest dark:text-econest-natural font-semibold">
            {insight.type}
          </span>
          <span>//</span>
          <span>{insight.categoryLabel}</span>
          <span>//</span>
          <span>{insight.readTime} · {insight.date}</span>
        </div>

        {/* Title & Subtitle */}
        <h2 id="modal-insight-title" className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2 leading-tight">
          {insight.title}
        </h2>

        <p className="font-serif italic text-base sm:text-lg text-econest-forest/80 dark:text-econest-natural/80 mb-6 leading-snug">
          “{insight.subtitle}”
        </p>

        {/* Detailed Narrative Body */}
        <div className="space-y-4 mb-8 text-sm sm:text-base text-econest-forest/85 dark:text-[#BFD8C2] leading-relaxed">
          <p>{insight.shortDescription}</p>
          <p>{insight.longDescription}</p>
        </div>

        {/* Key Empirical Findings */}
        <div className="p-6 rounded-2xl bg-econest-soft/40 dark:bg-black/30 border border-econest-forest/10 mb-8">
          <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 mb-3 font-semibold">
            VERIFIED FIELD FINDINGS
          </div>
          <div className="space-y-2.5">
            {insight.keyFindings.map((finding, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-econest-deep dark:text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-econest-fresh mt-2 flex-shrink-0" />
                <span>{finding}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Connected System / Project Bridge */}
        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-econest-forest/15 dark:border-white/10 mb-8 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60">
              CONNECTED LIVING PROTOTYPE
            </span>
            <span className="font-mono text-xs font-bold text-econest-fresh">
              {insight.connectedProject.number}
            </span>
          </div>

          <h4 className="font-serif font-bold text-xl mb-1">
            {insight.connectedProject.title}
          </h4>
          <div className="text-xs font-mono text-econest-forest/70 dark:text-econest-natural/70 mb-4">
            Domain: {insight.connectedProject.categoryLabel}
          </div>

          <button
            onClick={() => {
              onClose();
              if (onViewProject) onViewProject(insight.connectedProject.id);
            }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-econest-forest hover:bg-econest-deep text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-xs"
          >
            <span>View Project in Chapter 05</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Observed System Effect Metrics */}
        <div className="mb-8">
          <div className="text-[10px] font-mono uppercase tracking-widest text-econest-forest/60 dark:text-econest-natural/60 mb-3">
            OBSERVED SYSTEM EFFECT
          </div>
          <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-econest-soft/30 dark:bg-white/5 border border-econest-forest/10">
            <div>
              <div className="font-mono text-2xl font-bold text-econest-deep dark:text-white">
                {insight.observedEffect.primaryValue}
              </div>
              <div className="text-xs font-mono text-econest-forest/60 dark:text-white/50 mt-1">
                {insight.observedEffect.primaryLabel}
              </div>
            </div>
            <div className="border-l border-econest-forest/10 pl-4">
              <div className="font-mono text-2xl font-bold text-econest-fresh">
                {insight.observedEffect.secondaryValue}
              </div>
              <div className="text-xs font-mono text-econest-forest/60 dark:text-white/50 mt-1">
                {insight.observedEffect.secondaryLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {insight.tags.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 rounded text-xs font-mono bg-econest-forest/5 dark:bg-white/5 text-econest-forest dark:text-econest-natural border border-econest-forest/10"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Disclaimer Watermark */}
        <div className="p-4 rounded-xl bg-econest-forest/5 dark:bg-white/5 border border-econest-forest/10 text-[11px] font-mono text-econest-forest/70 dark:text-econest-natural/70 flex items-center space-x-3 mb-6">
          <ShieldCheck className="w-4 h-4 text-econest-fresh flex-shrink-0" />
          <span>
            PEER-OBSERVED RESEARCH DATA · GROUNDED IN ACTIVE DEMONSTRATION TELEMETRY.
          </span>
        </div>

        {/* Footer Close Action */}
        <div className="flex items-center justify-end pt-4 border-t border-econest-forest/10 dark:border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest bg-econest-forest hover:bg-econest-deep text-white transition-colors"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
}
