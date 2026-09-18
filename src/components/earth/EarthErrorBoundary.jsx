import React from 'react';
import { Globe2 } from 'lucide-react';

export default class EarthErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("EarthErrorBoundary caught error in 3D scene:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="relative w-full max-w-[620px] mx-auto h-[440px] sm:h-[500px] flex flex-col items-center justify-center p-8 text-center bg-econest-soft/40 dark:bg-black/40 rounded-3xl border border-econest-forest/15 backdrop-blur-md">
          <div className="w-20 h-20 rounded-full bg-econest-forest/10 border border-econest-forest/20 flex items-center justify-center mb-4 text-econest-primary">
            <Globe2 className="w-10 h-10 animate-pulse" />
          </div>
          <div className="space-y-2 max-w-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-econest-primary font-bold">
              Ecological Biosphere Active
            </span>
            <h4 className="text-lg font-serif font-semibold text-econest-deep dark:text-white">
              Planetary System Model
            </h4>
            <p className="text-xs text-econest-forest/80 dark:text-econest-natural/80 font-light leading-relaxed">
              Displaying telemetry mode. Planetary cycles remain interactive and monitored below.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
