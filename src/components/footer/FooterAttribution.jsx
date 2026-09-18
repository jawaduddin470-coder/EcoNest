import React from 'react';
import { ExternalLink, Github, Linkedin, Leaf, ArrowUp } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../../data/brandData';

export default function FooterAttribution({ onNavigate, onOpenCalculator }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-econest-deep text-econest-lightest border-t border-econest-forest/30 py-12 px-6 sm:px-8 lg:px-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Main Footer Row: Brand, Navigation Chapters, & Author */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          
          {/* Brand Identity */}
          <div className="flex flex-col items-center lg:items-start space-y-2.5 text-center lg:text-left">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('home');
                handleScrollTop();
              }}
              className="flex items-center space-x-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh rounded-lg"
              aria-label="EcoNest Home"
            >
              <div className="w-8 h-8 rounded-xl bg-econest-forest text-econest-natural flex items-center justify-center shadow-xs">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                {BRAND.name}
              </span>
            </button>
            <p className="text-xs text-econest-natural/70 font-light max-w-sm leading-relaxed">
              {BRAND.tagline} &middot; A Living Story of ecological regeneration, scientific observation, and conscious innovation.
            </p>
          </div>

          {/* Chapter Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (onNavigate) onNavigate(link.id);
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-econest-natural/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
              >
                {link.label}
              </button>
            ))}
          </div>


          {/* Attribution & Author Links */}
          <div className="flex flex-col items-center lg:items-end space-y-3">
            <div className="text-xs text-econest-lightest/80 flex items-center space-x-1.5">
              <span>Crafted & Designed by</span>
              <strong className="text-white font-semibold">{BRAND.creator.name}</strong>
            </div>

            <div className="flex items-center space-x-2.5">
              <a
                href={BRAND.creator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-econest-natural/80 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-econest-natural/40 bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
                aria-label="Mohammed Meraj Uddin on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={BRAND.creator.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-econest-natural/80 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-econest-natural/40 bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
                aria-label="Mohammed Meraj Uddin on GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Back-to-Top Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-econest-lightest/50 gap-3">
          <span>&copy; {new Date().getFullYear()} EcoNest. All living systems reserved.</span>
          
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">EcoNest — A Living Story &middot; Planetary Intelligence & Regenerative Ecosystems</span>
            <button
              onClick={handleScrollTop}
              className="inline-flex items-center space-x-1 text-econest-natural/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-econest-fresh rounded px-1.5 py-0.5"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
