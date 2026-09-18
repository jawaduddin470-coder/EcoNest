import React from 'react';

export default class VisualErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("[VisualErrorBoundary] Error caught in visual tree:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="w-full max-w-[620px] mx-auto h-[440px] flex items-center justify-center p-6 text-center bg-econest-soft/30 rounded-3xl border border-econest-forest/15">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-econest-primary font-bold">
              Visualization Temporarily Unavailable
            </span>
            <p className="text-xs text-econest-forest/80 font-light max-w-sm mx-auto">
              The ecological model experienced a rendering issue. Other system modules remain fully interactive.
            </p>
          </div>
        </div>

      );
    }
    return this.props.children;
  }
}
