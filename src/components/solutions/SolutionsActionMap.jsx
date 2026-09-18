import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldAlert, Activity, CheckCircle2, GitBranch } from "lucide-react";

const SCALE_STOPS = [
  { id: "you", label: "You", sub: "Individual Choice", x: 75, y: 170, scale: "1x", multiplier: 1, icon: "👤" },
  { id: "household", label: "Household", sub: "Domestic Habit", x: 215, y: 110, scale: "4x", multiplier: 4, icon: "🏡" },
  { id: "community", label: "Community", sub: "Local Collective", x: 360, y: 210, scale: "45x", multiplier: 45, icon: "👥" },
  { id: "city", label: "City", sub: "Municipal Grid", x: 505, y: 115, scale: "1,200x", multiplier: 1200, icon: "🏙️" },
  { id: "ecosystem", label: "Ecosystem", sub: "Living Biome", x: 645, y: 170, scale: "28,000x", multiplier: 28000, icon: "🌍" }
];

export default function SolutionsActionMap({ activeCategory }) {
  const [activeStopIndex, setActiveStopIndex] = useState(2); // Default to Community
  const activeStop = SCALE_STOPS[activeStopIndex];
  const cascade = activeCategory.cascade;

  const stopValues = [
    cascade.you,
    cascade.household,
    cascade.community,
    cascade.city,
    cascade.ecosystem
  ];

  return (
    <div className="editorial-card rounded-3xl p-6 sm:p-10 shadow-organic relative overflow-hidden">
      {/* Top Telemetry Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-econest-forest/10 gap-3">
        <div className="space-y-1 text-left">
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase font-bold tracking-brand text-econest-primary">
            <Activity className="w-3.5 h-3.5" />
            <span>Multi-Branching Ecological Cascade &middot; {activeCategory.name}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-econest-deep dark:text-white">
            From Everyday Action to Living Biome
          </h3>
        </div>

        <div className="flex items-center space-x-2 text-[10px] text-econest-forest/70 dark:text-econest-natural/70 bg-econest-forest/5 dark:bg-white/5 px-3.5 py-1.5 rounded-full border border-econest-forest/10 self-start sm:self-auto font-mono">
          <GitBranch className="w-3.5 h-3.5 text-econest-primary" />
          <span>Compounding Multiplier: {activeStop.scale}</span>
        </div>
      </div>

      {/* SVG Multi-Branching Living Cascade Pathway (720x340) */}
      <div
        data-cursor="TRACE"
        className="relative w-full h-80 sm:h-96 bg-econest-deep/5 dark:bg-black/35 rounded-2xl p-2 sm:p-4 overflow-hidden border border-econest-forest/10 select-none"
      >
        <svg
          viewBox="0 0 720 340"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="trunkGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#2D6A4F" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#3D8B57" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#52B788" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#74D0C0" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#BFD8C2" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="branchGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3D8B57" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#74D0C0" stopOpacity="0.8" />
            </linearGradient>

            <filter id="cascadeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Ecological Hyphae Tributary Mesh */}
          <g opacity="0.25" stroke="#3D8B57" strokeWidth="1" strokeDasharray="3 4">
            <path d="M 75 170 Q 140 230, 215 110" />
            <path d="M 215 110 Q 290 60, 360 210" />
            <path d="M 360 210 Q 430 270, 505 115" />
            <path d="M 505 115 Q 580 60, 645 170" />
            {/* Divergent side feeder branches */}
            <path d="M 215 110 C 240 70, 280 65, 300 70" />
            <path d="M 360 210 C 390 260, 430 265, 460 250" />
            <path d="M 505 115 C 540 80, 580 75, 610 80" />
          </g>

          {/* Divergent Branch Roots */}
          <g opacity="0.65">
            <path
              d="M 75 170 C 120 190, 160 140, 215 110"
              stroke="url(#branchGrad1)"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <path
              d="M 215 110 C 260 90, 300 170, 360 210"
              stroke="url(#branchGrad1)"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <path
              d="M 360 210 C 410 240, 460 150, 505 115"
              stroke="url(#branchGrad1)"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <path
              d="M 505 115 C 560 90, 600 140, 645 170"
              stroke="url(#branchGrad1)"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
          </g>

          {/* Primary Main Botanical Conduit (The Living Trunk) */}
          <path
            d="M 75 170 C 135 120, 165 110, 215 110 C 275 110, 305 210, 360 210 C 420 210, 450 115, 505 115 C 565 115, 595 150, 645 170"
            stroke="url(#trunkGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#cascadeGlow)"
          />

          {/* Animated Traveling Nutrient Pulses on Trunk */}
          <circle r="4.5" fill="#FFFFFF">
            <animateMotion
              path="M 75 170 C 135 120, 165 110, 215 110 C 275 110, 305 210, 360 210 C 420 210, 450 115, 505 115 C 565 115, 595 150, 645 170"
              dur="4.2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="3" fill="#A8E6CF">
            <animateMotion
              path="M 75 170 C 135 120, 165 110, 215 110 C 275 110, 305 210, 360 210 C 420 210, 450 115, 505 115 C 565 115, 595 150, 645 170"
              dur="4.2s"
              begin="2.1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="2.5" fill="#E8DE82">
            <animateMotion
              path="M 75 170 C 135 120, 165 110, 215 110 C 275 110, 305 210, 360 210 C 420 210, 450 115, 505 115 C 565 115, 595 150, 645 170"
              dur="4.2s"
              begin="1.05s"
              repeatCount="indefinite"
            />
          </circle>

          {/* 5 Interactive Scale Nodes with Contextual Symbols */}
          {SCALE_STOPS.map((stop, idx) => {
            const isSelected = activeStopIndex === idx;
            const isPassed = idx <= activeStopIndex;

            return (
              <g
                key={stop.id}
                className="cursor-pointer transition-transform"
                onClick={() => setActiveStopIndex(idx)}
              >
                {/* Active Ripple Aura */}
                {isSelected && (
                  <circle
                    cx={stop.x}
                    cy={stop.y}
                    r="22"
                    stroke="#74D0C0"
                    strokeWidth="1.5"
                    opacity="0.6"
                    className="animate-ping"
                  />
                )}

                {/* Outer Ring */}
                <circle
                  cx={stop.x}
                  cy={stop.y}
                  r={isSelected ? "17" : "12"}
                  fill={isSelected ? "#0B3D2E" : isPassed ? "#1F6B45" : "#FFFFFF"}
                  stroke={isSelected ? "#BFD8C2" : "#3D8B57"}
                  strokeWidth={isSelected ? "2.5" : "1.5"}
                  className="transition-all duration-300"
                />

                {/* Inner Symbol / Core Dot */}
                <circle
                  cx={stop.x}
                  cy={stop.y}
                  r={isSelected ? "6" : "4"}
                  fill={isSelected ? "#FFFFFF" : isPassed ? "#A8E6CF" : "#3D8B57"}
                />

                {/* Stop Node Icon */}
                <text
                  x={stop.x}
                  y={stop.y > 150 ? stop.y - 18 : stop.y + 24}
                  textAnchor="middle"
                  fontSize="10"
                  className="pointer-events-none select-none"
                >
                  {stop.icon}
                </text>

                {/* Node Label */}
                <text
                  x={stop.x}
                  y={stop.y > 150 ? stop.y + 28 : stop.y - 28}
                  textAnchor="middle"
                  fill={isSelected ? "#0B3D2E" : "#2D6A4F"}
                  fontSize={isSelected ? "12" : "10"}
                  fontWeight={isSelected ? "bold" : "600"}
                  fontFamily="sans-serif"
                  className="dark:fill-econest-natural pointer-events-none"
                >
                  0{idx + 1} {stop.label}
                </text>

                {/* Node Multiplier Badge */}
                <text
                  x={stop.x}
                  y={stop.y > 150 ? stop.y + 40 : stop.y - 40}
                  textAnchor="middle"
                  fill="#52B788"
                  fontSize="9"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  className="pointer-events-none font-mono"
                >
                  {stop.scale}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Dynamic Detail Floating Card Inside Map */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md bg-white/95 dark:bg-black/85 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-econest-forest/15 shadow-organic text-left transition-all duration-300">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-econest-primary pb-1.5 border-b border-econest-forest/10">
            <span className="font-bold flex items-center space-x-1.5">
              <span>{activeStop.icon}</span>
              <span>Scale 0{activeStopIndex + 1} &middot; {activeStop.label}</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-econest-forest/10 dark:bg-white/10 text-econest-primary font-bold">
              {activeStop.scale} Multiplier
            </span>
          </div>

          <div className="text-sm sm:text-base font-serif font-semibold text-econest-deep dark:text-white pt-2 leading-snug">
            {stopValues[activeStopIndex]}
          </div>

          <div className="flex items-center justify-between pt-2 text-[10px] text-econest-forest/70 dark:text-econest-natural/70">
            <span>{activeStop.sub}</span>
            <span className="italic font-mono">Select any node along the cascade</span>
          </div>
        </div>
      </div>

      {/* 5-Step Horizontal Interactive Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-6">
        {SCALE_STOPS.map((stop, idx) => {
          const isSelected = activeStopIndex === idx;
          return (
            <button
              key={stop.id}
              onClick={() => setActiveStopIndex(idx)}
              className={`min-h-[44px] p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "bg-econest-forest text-white shadow-sm ring-2 ring-econest-primary/40 scale-[1.02]"
                  : "bg-white/60 dark:bg-black/20 border-econest-forest/10 hover:bg-white dark:hover:bg-black/40 text-econest-deep dark:text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono uppercase font-bold flex items-center space-x-1 ${
                  isSelected ? "text-econest-natural" : "text-econest-primary"
                }`}>
                  <span>{stop.icon}</span>
                  <span>0{idx + 1} {stop.label}</span>
                </span>
                <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-white/20 text-white" : "bg-econest-forest/10 text-econest-forest/80 dark:text-econest-natural/80"
                }`}>
                  {stop.scale}
                </span>
              </div>
              <div className={`text-[11px] font-medium truncate pt-1.5 ${isSelected ? "text-white" : "text-econest-deep dark:text-white"}`}>
                {stopValues[idx]}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
