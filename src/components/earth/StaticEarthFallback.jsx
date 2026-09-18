import React, { useState } from 'react';
import { PLANETARY_MARKERS, ECOLOGICAL_SYSTEMS } from '../../data/brandData';
import { Globe2 } from 'lucide-react';

export default function StaticEarthFallback({
  activeSystemId = 'forests',
  onSelectSystem
}) {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const handleMarkerClick = (systemId) => {
    if (onSelectSystem) onSelectSystem(systemId);
  };

  return (
    <div className="relative w-full max-w-[620px] mx-auto h-[440px] sm:h-[500px] md:h-[560px] flex items-center justify-center select-none">
      {/* SVG Planetary Globe Fallback with Organic Gradients & Markers */}
      <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full flex items-center justify-center shadow-2xl overflow-hidden border border-econest-forest/20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="staticEarthGrad" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#4E9B6E" />
              <stop offset="30%" stopColor="#1F6B45" />
              <stop offset="65%" stopColor="#0B3D2E" />
              <stop offset="100%" stopColor="#061D16" />
            </radialGradient>
            <radialGradient id="staticAtmoGrad" cx="50%" cy="50%" r="50%">
              <stop offset="85%" stopColor="#74D0C0" stopOpacity="0" />
              <stop offset="100%" stopColor="#74D0C0" stopOpacity="0.38" />
            </radialGradient>
          </defs>

          {/* Planetary Sphere Body */}
          <circle cx="200" cy="200" r="195" fill="url(#staticEarthGrad)" />

          {/* Graticule Longitude & Latitude Curvature Rings */}
          <ellipse cx="200" cy="200" rx="190" ry="60" fill="none" stroke="#74D0C0" strokeWidth="0.75" strokeOpacity="0.25" />
          <ellipse cx="200" cy="200" rx="190" ry="120" fill="none" stroke="#74D0C0" strokeWidth="0.75" strokeOpacity="0.25" />
          <line x1="200" y1="5" x2="200" y2="395" stroke="#74D0C0" strokeWidth="0.75" strokeOpacity="0.25" />
          <line x1="5" y1="200" x2="395" y2="200" stroke="#74D0C0" strokeWidth="0.75" strokeOpacity="0.25" />

          {/* Stylized Continental Landmass Outlines */}
          {/* Americas Silhouette */}
          <path
            d="M 120 110 Q 130 140, 115 170 Q 110 190, 135 220 Q 150 250, 140 280 Q 120 270, 105 230 Q 95 190, 100 150 Z"
            fill="#4E9B6E"
            fillOpacity="0.35"
          />
          {/* Eurasia-Africa Silhouette */}
          <path
            d="M 190 90 Q 240 80, 280 110 Q 290 140, 260 160 Q 230 150, 210 170 Q 220 210, 230 250 Q 200 240, 190 200 Q 180 150, 185 110 Z"
            fill="#4E9B6E"
            fillOpacity="0.35"
          />

          {/* Subtle Atmosphere Rim */}
          <circle cx="200" cy="200" r="195" fill="url(#staticAtmoGrad)" />
        </svg>

        {/* Interactive Ecological Markers */}
        {PLANETARY_MARKERS.map((marker, idx) => {
          const offsets = [
            { x: 125, y: 220 }, // Amazon
            { x: 210, y: 205 }, // Congo
            { x: 265, y: 155 }, // Ganges
            { x: 285, y: 240 }, // Coral
            { x: 180, y: 100 }, // Taiga
            { x: 195, y: 110 }  // Iceland
          ];
          const pos = offsets[idx % offsets.length];
          const isSystemActive = marker.systemId === activeSystemId;

          return (
            <button
              key={marker.id}
              onClick={() => handleMarkerClick(marker.systemId)}
              onMouseEnter={() => setHoveredMarker(marker)}
              onMouseLeave={() => setHoveredMarker(null)}
              className="absolute w-7 h-7 -ml-3.5 -mt-3.5 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-125 focus:outline-none"
              style={{ left: `${(pos.x / 400) * 100}%`, top: `${(pos.y / 400) * 100}%` }}
              aria-label={marker.name}
            >
              {isSystemActive && (
                <span className="w-4 h-4 rounded-full bg-white shadow-md animate-ping absolute opacity-75" />
              )}
              <span className={`w-3 h-3 rounded-full border-2 border-white relative z-10 ${
                isSystemActive ? 'bg-[#74D0C0]' : 'bg-[#78B978]'
              }`} />
            </button>
          );
        })}
      </div>

      {/* Marker Telemetry Tooltip */}
      {hoveredMarker && (
        <div className="absolute z-20 top-6 bg-econest-deep/95 text-white backdrop-blur-md px-4 py-2.5 rounded-2xl border border-econest-natural/30 shadow-organic text-center pointer-events-none">
          <div className="text-[10px] uppercase font-bold tracking-brand text-econest-fresh">
            {hoveredMarker.systemName}
          </div>
          <div className="text-xs font-serif font-semibold text-white">
            {hoveredMarker.name}
          </div>
          <div className="text-[10px] text-econest-natural/80 pt-0.5">
            {hoveredMarker.metric}
          </div>
        </div>
      )}

      {/* Telemetry Status Footnote */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none text-[10px] uppercase tracking-brand font-medium text-econest-forest/70 dark:text-econest-natural/70 bg-white/60 dark:bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-econest-forest/10">
        Ecological Biosphere Active &middot; Planetary Telemetry Mode
      </div>
    </div>
  );
}
