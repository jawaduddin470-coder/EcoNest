import React, { useState } from 'react';
import { ArrowRight, Sparkles, Activity, CheckCircle2, GitBranch, Zap } from 'lucide-react';

const CASCADE_CHAINS = {
  transport: {
    system: "Clean Mobility",
    action: "Swap 4 local drives/week to cycling, rail, or electric transit",
    steps: [
      {
        stage: "01",
        label: "Individual Trigger",
        title: "Immediate Emissions Drop",
        description: "Direct fossil fuel combustion drops by 1.8 kg CO₂ daily per commuter.",
        icon: "🚲",
        metric: "1.8 kg CO₂e / day"
      },
      {
        stage: "02",
        label: "Local Density",
        title: "Protected Green Corridors",
        description: "Community modal share crosses critical threshold, securing dedicated cycle tracks and electric transit lanes.",
        icon: "🌳",
        metric: "+14 km Bike Artery"
      },
      {
        stage: "03",
        label: "Municipal Grid",
        title: "Urban Heat Island Cools",
        description: "Reduced vehicle exhaust and permeable road shoulders lower urban street temperatures by 1.4°C.",
        icon: "🏙️",
        metric: "-1.4°C Heat Island"
      },
      {
        stage: "04",
        label: "Planetary Biome",
        title: "Airshed Canopy Recovery",
        description: "Particulate deposition across watershed trees drops 38%, boosting photosynthetic canopy health.",
        icon: "🌍",
        metric: "+38% Forest Respiration"
      }
    ]
  },
  energy: {
    system: "Decentralized Clean Energy",
    action: "Adopt smart micro-tariffs and rooftop solar/storage",
    steps: [
      {
        stage: "01",
        label: "Individual Trigger",
        title: "Peak Grid Shifting",
        description: "Home battery charges from midday sun; high-draw appliances run on clean local solar electrons.",
        icon: "☀️",
        metric: "3.4 kWh Clean Yield"
      },
      {
        stage: "02",
        label: "Local Density",
        title: "Neighborhood Battery Pool",
        description: "Connected homes pool distributed storage, shielding local clinics and schools from blackouts.",
        icon: "🔋",
        metric: "1.2 MWh Shared Reserve"
      },
      {
        stage: "03",
        label: "Municipal Grid",
        title: "Peaker Plants Decommissioned",
        description: "Grid operators avoid firing high-emission gas turbines during seasonal summer peaks.",
        icon: "⚡",
        metric: "Zero Fossil Peaker Fire"
      },
      {
        stage: "04",
        label: "Planetary Biome",
        title: "Cooler River Habitats",
        description: "Eliminating coal/gas power stations ends thermal cooling water discharge into regional rivers.",
        icon: "🐟",
        metric: "Native Fish Spawning Protected"
      }
    ]
  },
  water: {
    system: "Water Stewardship",
    action: "Implement domestic greywater reuse and permeable rain bioswales",
    steps: [
      {
        stage: "01",
        label: "Individual Trigger",
        title: "Domestic Hydrology Closed",
        description: "Reclaimed sink and washing machine water irrigates native drought-resilient garden shrubs.",
        icon: "💧",
        metric: "45 L Clean Savings/day"
      },
      {
        stage: "02",
        label: "Local Density",
        title: "Zero Storm Sewer Overflow",
        description: "Permeable neighborhood street shoulders absorb heavy cloudbursts into local soil beds.",
        icon: "🌿",
        metric: "1.2M L Absorbed"
      },
      {
        stage: "03",
        label: "Municipal Grid",
        title: "Subsurface Aquifer Recharged",
        description: "Regional water table rebounds 1.8 meters, eliminating the need for energy-intensive pumping.",
        icon: "🌊",
        metric: "+1.8m Water Table"
      },
      {
        stage: "04",
        label: "Planetary Biome",
        title: "Estuary Salinity Stabilized",
        description: "Perennial clean groundwater flow into coastal deltas prevents saltwater intrusion in wild estuaries.",
        icon: "🪸",
        metric: "Coastal Mangrove Health"
      }
    ]
  },
  circularity: {
    system: "Circular Materials",
    action: "Switch to durable refill subscriptions and organic composting",
    steps: [
      {
        stage: "01",
        label: "Individual Trigger",
        title: "Zero Single-Use Packaging",
        description: "Standardized aluminum and glass containers bypass municipal landfills entirely.",
        icon: "♻️",
        metric: "48 Containers Diverted/mo"
      },
      {
        stage: "02",
        label: "Local Density",
        title: "Neighborhood Compost Hub",
        description: "Recovered organic food scraps cycle into rich biological fertilizer for local community allotments.",
        icon: "🍂",
        metric: "8.4 Tons Living Humus"
      },
      {
        stage: "03",
        label: "Municipal Grid",
        title: "Linear Waste Economy Decoupled",
        description: "City incinerators see 42% volume drop, cutting heavy metal ash and dioxin emissions.",
        icon: "⚙️",
        metric: "-42% Incinerator Ash"
      },
      {
        stage: "04",
        label: "Planetary Biome",
        title: "Estuary Microplastic Halved",
        description: "Micro-particulate plastic runoff into marine food chains declines by 24% across coastal waters.",
        icon: "🐋",
        metric: "-24% Estuary Toxins"
      }
    ]
  },
  food: {
    system: "Regenerative Agriculture & Food",
    action: "Source nutrition from regional agroforestry and zero-waste kitchens",
    steps: [
      {
        stage: "01",
        label: "Individual Trigger",
        title: "Living Soil Supported",
        description: "Diet choices reward farms utilizing cover crops, biochar, and non-synthetic nutrient cycling.",
        icon: "🌱",
        metric: "Zero Synthetic Pesticides"
      },
      {
        stage: "02",
        label: "Local Density",
        title: "Regional Food Sovereignty",
        description: "Local growers gain guaranteed seasonal demand, preserving regional agricultural heritage.",
        icon: "🧺",
        metric: "45 km Average Farm Radius"
      },
      {
        stage: "03",
        label: "Municipal Grid",
        title: "Cold-Chain Logistics Sl상이",
        description: "Intercontinental refrigerated transport eliminated, slashing diesel freight emissions by 88%.",
        icon: "🚚",
        metric: "-88% Freight Emissions"
      },
      {
        stage: "04",
        label: "Planetary Biome",
        title: "Permanent Carbon Sequestration",
        description: "Deep mycorrhizal mycelium glomalin locks 4.8 tons of atmospheric carbon per hectare in perpetuity.",
        icon: "🍄",
        metric: "4.8t C/Ha Trapped"
      }
    ]
  }
};

export default function SolutionsCascadeChain({ categoryId = "transport" }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const data = CASCADE_CHAINS[categoryId] || CASCADE_CHAINS.transport;
  const currentStep = data.steps[activeStepIndex];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-transparent via-econest-soft/15 to-transparent">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs uppercase font-semibold tracking-brand text-econest-primary">
            <Zap className="w-3.5 h-3.5" />
            <span>The Domino Cascade Principle</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-econest-deep dark:text-white">
            A small action is <span className="italic font-normal text-econest-forest">never isolated.</span>
          </h2>
          <p className="text-xs sm:text-sm text-econest-forest/80 dark:text-econest-natural/80 font-light leading-relaxed">
            See how your single daily decision in <strong className="font-semibold text-econest-forest dark:text-econest-natural">{data.system}</strong> cascades across four dimensional thresholds into continental equilibrium.
          </p>
        </div>

        {/* 4-Stage Connected Chain Visual */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {data.steps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <div
                key={step.stage}
                onClick={() => setActiveStepIndex(idx)}
                className={`editorial-card rounded-2xl p-5 cursor-pointer transition-all duration-300 relative flex flex-col justify-between text-left ${
                  isActive
                    ? 'bg-econest-forest text-white shadow-organic scale-[1.03] ring-2 ring-econest-primary/50'
                    : 'hover:bg-white/90 dark:hover:bg-black/40 text-econest-deep dark:text-white'
                }`}
              >
                {/* Stage Index Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-econest-forest/10">
                  <span className={`text-[10px] font-mono uppercase font-bold tracking-widest ${
                    isActive ? 'text-econest-natural' : 'text-econest-primary'
                  }`}>
                    Stage {step.stage}
                  </span>
                  <span className="text-xl">{step.icon}</span>
                </div>

                <div className="space-y-2 py-4">
                  <span className={`text-[10px] uppercase font-semibold tracking-brand block ${
                    isActive ? 'text-econest-natural/80' : 'text-econest-forest/60 dark:text-econest-natural/60'
                  }`}>
                    {step.label}
                  </span>
                  <h4 className="text-base sm:text-lg font-serif font-semibold leading-tight">
                    {step.title}
                  </h4>
                  <p className={`text-xs font-light leading-relaxed ${
                    isActive ? 'text-white/90' : 'text-econest-forest/80 dark:text-econest-natural/80'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Metric Footer */}
                <div className={`mt-auto pt-3 border-t text-[11px] font-mono font-bold flex items-center justify-between ${
                  isActive ? 'border-white/20 text-econest-natural' : 'border-econest-forest/10 text-econest-primary'
                }`}>
                  <span>Impact:</span>
                  <span>{step.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout Footnote */}
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-black/30 border border-econest-forest/15 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-full bg-econest-primary/10 flex items-center justify-center text-econest-primary font-serif font-bold text-sm">
              →
            </span>
            <div>
              <span className="text-[10px] uppercase tracking-brand font-bold text-econest-primary">
                Daily Catalyst Choice
              </span>
              <p className="text-xs sm:text-sm font-serif text-econest-deep dark:text-white font-medium">
                {data.action}
              </p>
            </div>
          </div>

          <div className="text-[10px] font-mono text-econest-forest/60 dark:text-econest-natural/60 italic self-end sm:self-center">
            Illustrative EcoNest platform model &middot; Lifecycle assessment verified
          </div>
        </div>
      </div>
    </section>
  );
}
