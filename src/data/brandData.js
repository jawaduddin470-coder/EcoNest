/**
 * EcoNest Brand & Content Data Source
 */

export const BRAND = {
  name: "EcoNest",
  concept: "EcoNest — A Living Story",
  tagline: "Small choices. Bigger impact.",
  secondaryTagline: "Building a greener tomorrow, one choice at a time.",
  mission: "We harmonize ecological intelligence with living systems, pioneering circular technologies that turn everyday human actions into compounding planetary regeneration.",
  creator: {
    name: "Mohammed Meraj Uddin",
    role: "Digital Architect & Creative Engineer",
    linkedin: "https://www.linkedin.com/in/mohammed-meraj-uddin-0751a6396/",
    github: "https://github.com/jawaduddin470-coder"
  }
};

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "solutions", label: "Solutions", href: "#solutions" },
  { id: "impact", label: "Impact", href: "#impact" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "insights", label: "Insights", href: "#insights" }
];

export const INTRO_STAGES = [
  { stage: 1, title: "Emergence", subtitle: "A solitary seed awakens in the fertile quiet." },
  { stage: 2, title: "Germination", subtitle: "Roots anchor deep, drawing ancient planetary memory." },
  { stage: 3, title: "Ascent", subtitle: "A resilient stem ascends toward early sunlight." },
  { stage: 4, title: "Unfurling", subtitle: "Living leaves unfold in golden spiral harmony." },
  { stage: 5, title: "Ecosystem", subtitle: "Atmospheric spores breathe life into the canopy." },
  { stage: 6, title: "EcoNest", subtitle: "Small choices. Bigger impact." }
];

export const TELEMETRY_METRICS = [
  {
    value: "142,800+",
    unit: "Hectares",
    label: "Canopy Re-established",
    subtext: "Biodiverse native micro-forests restored across 14 biomes"
  },
  {
    value: "8.4M",
    unit: "Kilograms",
    label: "Ocean Waste Upcycled",
    subtext: "Diverted into durable structural biomaterials"
  },
  {
    value: "94.6%",
    unit: "Closed-Loop",
    label: "Material Circularity",
    subtext: "Zero-landfill lifecycle verified by independent audits"
  },
  {
    value: "320K+",
    unit: "Active Stewards",
    label: "Community Innovators",
    subtext: "Individuals taking verified regenerative actions daily"
  }
];

// --- CHAPTER 02: THE LIVING PLANET DATA ---

export const CHAPTER_TWO = {
  badge: "CHAPTER 02 // THE LIVING PLANET",
  headline: "The planet is not a backdrop. It is a living system.",
  subtext: "EcoNest explores the relationship between everyday human choices and the living systems that sustain us. Our purpose is to make sustainability understandable, measurable, and actionable.",
  introIdea: "Everything is connected."
};

// 4 Interconnected Ecological Systems
export const ECOLOGICAL_SYSTEMS = [
  {
    id: "forests",
    name: "Forests",
    symbol: "🌳",
    tagline: "The architecture of living landscapes.",
    description: "Ancient root networks and canopy density stabilize regional microclimates, acting as carbon reservoirs and biodiversity sanctuaries.",
    primaryMetric: { value: "3.2B", unit: "Tons CO₂e", label: "Annual Biome Sequestration" },
    secondaryMetric: { value: "78.4%", unit: "Density", label: "Intact Canopy Preservation" },
    coordinates: { lat: -3.4653, lon: -62.2159 }, // Amazon Basin
    regionLabel: "Equatorial Rainforest Belt"
  },
  {
    id: "water",
    name: "Water",
    symbol: "💧",
    tagline: "The bloodstream of terrestrial life.",
    description: "Glacial headwaters, meandering river basins, and coastal aquifers govern soil vitality and community food sovereignty.",
    primaryMetric: { value: "480M", unit: "Liters", label: "Watershed Daily Inflow" },
    secondaryMetric: { value: "96.2%", unit: "Purity Index", label: "Downstream Riparian Quality" },
    coordinates: { lat: 24.5, lon: 89.8 }, // Ganges-Brahmaputra Delta
    regionLabel: "Himalayan Watershed Basin"
  },
  {
    id: "energy",
    name: "Energy",
    symbol: "⚡",
    tagline: "Harmonizing with solar and kinetic flows.",
    description: "Decentralized microgrids draw power from radiant sunlight, ambient thermal currents, and wind corridors without depleting biosphere reserves.",
    primaryMetric: { value: "84.2%", unit: "Clean Mix", label: "Distributed Grid Ratio" },
    secondaryMetric: { value: "1.4 GW", unit: "Stored", label: "Passive Geothermal Storage" },
    coordinates: { lat: 64.9631, lon: -19.0208 }, // Iceland Geothermal Belt
    regionLabel: "Boreal Renewable Corridor"
  },
  {
    id: "circularity",
    name: "Circularity",
    symbol: "♻️",
    tagline: "Zero waste. Every output feeds the adjacent loop.",
    description: "Industrial processes redesigned into biological metabolisms, where organic byproducts return to the soil and technical polymers cycle indefinitely.",
    primaryMetric: { value: "98.1%", unit: "Recovery", label: "Closed-Loop Feedstock Rate" },
    secondaryMetric: { value: "0 kg", unit: "Landfill", label: "Residual Solid Fraction" },
    coordinates: { lat: 52.3676, lon: 4.9041 }, // Circular Northern European Hub
    regionLabel: "Circular Bio-Infrastructure Zone"
  }
];

// 6 Meaningful Planetary Ecological Markers
export const PLANETARY_MARKERS = [
  {
    id: "amazon",
    name: "Amazon Basin",
    systemId: "forests",
    systemName: "Forest Carbon Reservoir",
    coordinates: { lat: -3.5, lon: -62.2 },
    metric: "3.2B t CO₂e sequestered/yr",
    description: "Primary equatorial rainforest canopy and biodiversity buffer"
  },
  {
    id: "congo",
    name: "Congo Basin",
    systemId: "forests",
    systemName: "Equatorial Sanctuary",
    coordinates: { lat: -0.8, lon: 24.5 },
    metric: "94% primary canopy integrity",
    description: "Central African forest peatlands regulating regional precipitation"
  },
  {
    id: "himalaya",
    name: "Himalayan Watershed",
    systemId: "water",
    systemName: "Freshwater Headwaters",
    coordinates: { lat: 27.9, lon: 86.9 },
    metric: "1.4B people supported downstream",
    description: "Glacial headwaters feeding ten major Asian riparian corridors"
  },
  {
    id: "barrier-reef",
    name: "Great Barrier Reef",
    systemId: "water",
    systemName: "Marine Biosphere",
    coordinates: { lat: -18.2, lon: 147.7 },
    metric: "1,500+ marine species sustained",
    description: "Living coastal barrier buffering coastal storm surge energy"
  },
  {
    id: "nordic-energy",
    name: "Nordic Geothermal Belt",
    systemId: "energy",
    systemName: "Renewable Microgrid",
    coordinates: { lat: 64.9, lon: -19.0 },
    metric: "84.2% clean kinetic & thermal ratio",
    description: "Basalt-anchored geothermal and wind kinetic balancing loop"
  },
  {
    id: "north-sea",
    name: "North Sea Circular Hub",
    systemId: "circularity",
    systemName: "Closed-Loop Infrastructure",
    coordinates: { lat: 52.4, lon: 4.9 },
    metric: "98.1% industrial material recovery",
    description: "Zero-landfill closed-loop technical and biological cycles"
  }
];

// Five-Scene Narrative Journey
export const FIVE_SCENES = [
  {
    scene: 1,
    title: "Everything is connected.",
    subtext: "In the quiet of nature, no organism exists in isolation. A single mycelium thread whispers to an entire canopy.",
    accent: "Living Equilibrium",
    stageGraphic: "forest"
  },
  {
    scene: 2,
    title: "A forest influences water.",
    subtext: "Deep root architecture filters rain into pristine sub-surface aquifers, while transpiration generates rivers in the sky.",
    accent: "Hydrological Pulse",
    stageGraphic: "water"
  },
  {
    scene: 3,
    title: "Water shapes communities.",
    subtext: "Where clear currents flow, human settlements take root, cultivating food, culture, and communal harmony.",
    accent: "Civilization & Streams",
    stageGraphic: "community"
  },
  {
    scene: 4,
    title: "Consumption shapes ecosystems.",
    subtext: "Every energy watt chosen, every material discarded echoes upstream back into the wild soil and ocean depths.",
    accent: "Material Cycles",
    stageGraphic: "consumption"
  },
  {
    scene: 5,
    title: "Every choice becomes part of the system.",
    subtext: "Small human decisions compound across the biosphere. What we nurture locally regenerates globally.",
    accent: "Planetary Convergence",
    stageGraphic: "planet"
  }
];

// Mycelium Scaling Network Tiers
export const MYCELIUM_TIERS = [
  {
    id: "you",
    level: "01",
    name: "You (Individual)",
    shortName: "You",
    description: "A single conscious micro-decision: choosing refillable containers, active commute, or seasonal nutrition.",
    scaleMultiplier: "1x",
    nodeCount: 1
  },
  {
    id: "home",
    level: "02",
    name: "Household",
    shortName: "Household",
    description: "Domestic habits compound: solar water heating, organic composting, greywater reclamation.",
    scaleMultiplier: "4x",
    nodeCount: 4
  },
  {
    id: "community",
    level: "03",
    name: "Community",
    shortName: "Community",
    description: "Neighborhood micro-collectives: shared tool libraries, urban food forests, community microgrids.",
    scaleMultiplier: "45x",
    nodeCount: 12
  },
  {
    id: "city",
    level: "04",
    name: "City",
    shortName: "City",
    description: "Municipal infrastructure transformation: decentralized compost collection, permeable asphalt, electrified transit.",
    scaleMultiplier: "1,200x",
    nodeCount: 28
  },
  {
    id: "ecosystem",
    level: "05",
    name: "Ecosystem",
    shortName: "Ecosystem",
    description: "Regional watershed and wildlife corridor recovery: re-wilded riparian zones, restorative agricultural belts.",
    scaleMultiplier: "28,000x",
    nodeCount: 52
  },
  {
    id: "planet",
    level: "06",
    name: "The Living Planet",
    shortName: "The Living Planet",
    description: "Continental biome regeneration: stable global climate feedback loops and flourishing planetary biodiversity.",
    scaleMultiplier: "Compounding",
    nodeCount: 100
  }
];

// Philosophy 3 Principles
export const PHILOSOPHY_PRINCIPLES = [
  {
    number: "01",
    title: "MAKE IT UNDERSTANDABLE",
    subtitle: "Accessibility of Planetary Complexity",
    statement: "Environmental science should never be locked behind impenetrable academic jargon. We translate complex ecological feedback loops into clear, intuitive narratives that anyone can feel and understand."
  },
  {
    number: "02",
    title: "MAKE IT MEASURABLE",
    subtitle: "Visibility of Tangible Progress",
    statement: "Hope is ignited by verified progress. By measuring subtle shifts in soil health, carbon balance, and circular flows, we replace abstract climate anxiety with transparent, compounding proof."
  },
  {
    number: "03",
    title: "MAKE IT ACTIONABLE",
    subtitle: "Connecting Insight to Regenerative Action",
    statement: "Awareness without agency breeds paralysis. Every piece of intelligence on EcoNest maps directly to accessible, localized choices that trigger positive ripples across the entire ecosystem."
  }
];

// Compound Choice Models (Illustrative Platform Models)
export const COMPOUND_ACTIONS = [
  {
    id: "transit",
    name: "Active & Clean Transit",
    choice: "Shift 4 commutes/week to cycling, rail, or electric transit",
    you: "1.8 kg CO₂ avoided daily",
    household: "650 kg CO₂ avoided per year",
    community: "38 tons emissions removed + cleaner street air",
    city: "4.2 dB traffic noise reduction + dedicated green corridors",
    ecosystem: "Lower particulate deposition across watershed forests",
    disclaimer: "Illustrative EcoNest platform model"
  },
  {
    id: "circular-refill",
    name: "Closed-Loop Reusables",
    choice: "Eliminate single-use packaging with circular refill subscriptions",
    you: "48 containers diverted monthly",
    household: "120 kg non-biodegradable waste avoided/yr",
    community: "8.4 tons diverted from municipal incinerators",
    city: "18% reduction in street storm-drain clogs",
    ecosystem: "Micro-plastic contamination dropped by 24% in estuaries",
    disclaimer: "Illustrative EcoNest platform model"
  },
  {
    id: "energy-conservation",
    name: "Smart Renewable Micro-Usage",
    choice: "Equip household with dynamic energy shifting and green tariffs",
    you: "3.4 kWh peak power saved daily",
    household: "1.2 MWh renewable power displaced from fossil grid",
    community: "Peak brownout stress avoided across local substations",
    city: "Distributed neighborhood batteries balance solar intermittency",
    ecosystem: "Cooler thermal discharge into nearby cooling rivers",
    disclaimer: "Illustrative EcoNest platform model"
  }
];

// --- CHAPTER 03: SOLUTIONS DATA ---

export const CHAPTER_THREE = {
  badge: "CHAPTER 03 // SOLUTIONS",
  headline: "What can we actually do?",
  subtext: "EcoNest turns environmental understanding into practical, measurable choices. Explore foundational systems that convert everyday human decisions into compounding planetary regeneration.",
  transitionIdea: "From Understanding to Action",
  disclaimer: "Illustrative EcoNest platform model · All metrics represent verified demonstration models"
};

export const SOLUTIONS_CATEGORIES = [
  {
    id: "transport",
    name: "Clean Mobility",
    symbol: "🚲",
    accent: "#3D8B57",
    subtitle: "Decarbonizing Daily Transit",
    tagline: "Active, kinetic, and communal movement.",
    overview: "Shifting everyday short journeys from single-occupancy fossil vehicles to electric micro-mobility, cycleways, and connected electrified transit corridors.",
    actionModule: {
      systemTitle: "01 SYSTEM // Clean Mobility Corridors",
      statement: "Transport represents over 24% of direct fossil emissions in municipal centers.",
      action: "Shift 4 local trips per week to active cycling, rail, or electric micro-transit.",
      measure: "Track kg CO₂e avoided, particulate reduction, and urban noise decibel drop.",
      connection: "Lowers atmospheric particulate loading, keeping watershed forest canopies healthier."
    },
    systemFocus: "Mobility · Energy Demand · Airshed Purity",
    primaryMetric: { value: "-72%", label: "Local Commute Emissions", unit: "Reduction" },
    secondaryMetric: { value: "4.8 km", label: "Clean Air Corridor", unit: "Preserved/Person" },
    cascade: {
      you: "1.8 kg CO₂ avoided daily",
      household: "650 kg CO₂ avoided per year",
      community: "38 tons emissions removed + cleaner street air",
      city: "4.2 dB traffic noise reduction + green corridors",
      ecosystem: "Lower particulate deposition across watershed forests"
    }
  },
  {
    id: "energy",
    name: "Decentralized Energy",
    symbol: "⚡",
    accent: "#D4B038",
    subtitle: "Harvesting Kinetic & Solar Flows",
    tagline: "Dynamic microgrids without biosphere depletion.",
    overview: "Transforming passive consumers into active energy prosumers through rooftop solar, neighborhood micro-storage, and intelligent thermal load balancing.",
    actionModule: {
      systemTitle: "02 SYSTEM // Distributed Clean Microgrids",
      statement: "Centralized fossil grids lose up to 14% of energy purely in transmission line heat.",
      action: "Adopt dynamic time-of-use shifting and enroll in neighborhood renewable microgrid pools.",
      measure: "Peak grid displacement, kilowatt-hours generated, and substation stress mitigation.",
      connection: "Eliminates peaker-plant fossil emissions and reduces thermal pollution in cooling rivers."
    },
    systemFocus: "Solar Yield · Microgrid Resilience · Thermal Buffer",
    primaryMetric: { value: "84.2%", label: "Self-Sustaining Grid Share", unit: "Local Mix" },
    secondaryMetric: { value: "1.2 MWh", label: "Clean Kinetic Storage", unit: "Per Micro-cluster" },
    cascade: {
      you: "3.4 kWh saved daily",
      household: "1.2 MWh clean energy displaced from fossil grid",
      community: "Zero brownout peak stress across local substations",
      city: "Distributed neighborhood batteries balance solar intermittency",
      ecosystem: "Cooler thermal discharge into nearby rivers"
    }
  },
  {
    id: "water",
    name: "Water Stewardship",
    symbol: "💧",
    accent: "#4BAFA1",
    subtitle: "Closing Domestic & Municipal Hydrology Loops",
    tagline: "The living bloodstream of resilient communities.",
    overview: "Re-integrating urban habitats into native watersheds through rainwater harvesting, greywater bio-filtration, and permeable surface restoration.",
    actionModule: {
      systemTitle: "03 SYSTEM // Closed-Loop Urban Hydrology",
      statement: "More than 60% of treated municipal drinking water is wasted on non-potable uses.",
      action: "Install dual-loop greywater diversion and native riparian bioswale filtering at home.",
      measure: "Municipal potable water offset, storm runoff absorption, and aquifer recharge volume.",
      connection: "Maintains perennial aquifer levels and prevents storm surge scouring in downstream estuaries."
    },
    systemFocus: "Infiltration Rate · Riparian Buffers · Aquifer Health",
    primaryMetric: { value: "320 L", label: "Daily Potable Water Saved", unit: "Per Household" },
    secondaryMetric: { value: "94.6%", label: "Downstream Riparian Purity", unit: "Water Quality" },
    cascade: {
      you: "45 L water conserved daily",
      household: "16,400 L greywater reused per year",
      community: "1.2M L stormwater diverted from sewer overflows",
      city: "Permeable urban ground restores subsurface water table",
      ecosystem: "Perennial aquifer replenishment and healthier estuaries"
    }
  },
  {
    id: "circularity",
    name: "Circular Materials",
    symbol: "♻️",
    accent: "#38A169",
    subtitle: "Eliminating Waste as a Design Concept",
    tagline: "Industrial processes redesigned into biological metabolisms.",
    overview: "Transitioning from linear take-make-dispose models to closed-loop biological nutrients and endlessly reusable technical feedstock.",
    actionModule: {
      systemTitle: "04 SYSTEM // Closed-Loop Material Metabolism",
      statement: "Over 90% of raw materials extracted globally are discarded after a single use cycle.",
      action: "Participate in standardized deposit-return refill systems and neighborhood composting collectives.",
      measure: "Diverted landfill mass, single-use containers eliminated, and recovered compost yield.",
      connection: "Halts micro-plastic leaching into marine food chains and returns organic nitrogen to depleted soils."
    },
    systemFocus: "Feedstock Loop · Zero Landfill · Soil Carbon",
    primaryMetric: { value: "98.1%", label: "Material Circularity Index", unit: "Closed-Loop" },
    secondaryMetric: { value: "0 kg", label: "Residual Solid Waste", unit: "Landfill Total" },
    cascade: {
      you: "48 single-use items diverted monthly",
      household: "120 kg plastics diverted from incineration/yr",
      community: "8.4 tons recovered organic compost",
      city: "Zero-landfill closed-loop supply chain adoption",
      ecosystem: "Estuary microplastic contamination dropped by 24%"
    }
  },
  {
    id: "food",
    name: "Regenerative Food",
    symbol: "🌱",
    accent: "#68D391",
    subtitle: "Restoring Soil Microbiomes Through Local Diets",
    tagline: "Nourishing humanity while regenerating living topsoil.",
    overview: "Reconnecting regional human sustenance to regenerative agro-ecology, urban food forests, and hyper-local biodiversity corridors.",
    actionModule: {
      systemTitle: "05 SYSTEM // Regenerative Agro-Ecology",
      statement: "Industrial agriculture drives over 70% of global topsoil degradation and biodiversity loss.",
      action: "Source 80% of weekly produce from within 100km and support regenerative no-till farms.",
      measure: "Soil organic matter percentage, avoided refrigeration freight-miles, and pollinator density.",
      connection: "Restores mycorrhizal soil fungi, stabilizing continental topsoil and drawing down atmospheric carbon."
    },
    systemFocus: "Soil Microbiome · Food Miles · Pollinator Buffer",
    primaryMetric: { value: "6.2x", label: "Soil Microbial Biomass", unit: "Regenerative Lift" },
    secondaryMetric: { value: "-85%", label: "Freight Food Miles", unit: "Supply Chain" },
    cascade: {
      you: "0.8 kg synthetic pesticides avoided monthly",
      household: "420 kg soil organic carbon enriched",
      community: "Shared urban canopy and continuous pollinator highway",
      city: "Regional food sovereignty and seasonal resilience",
      ecosystem: "Continental topsoil erosion reversed and carbon locked"
    }
  }
];

export const ACTION_MAP_STEPS = [
  {
    id: "choice",
    step: "01",
    title: "Everyday Choice",
    scale: "Individual",
    description: "A conscious micro-decision made in daily life.",
    icon: "Sparkles"
  },
  {
    id: "household",
    step: "02",
    title: "Domestic Habit",
    scale: "Household",
    description: "Routines shared across living spaces.",
    icon: "Home"
  },
  {
    id: "community",
    step: "03",
    title: "Local Collective",
    scale: "Community",
    description: "Neighborhood micro-infrastructure & tool libraries.",
    icon: "Users"
  },
  {
    id: "city",
    step: "04",
    title: "Municipal Grid",
    scale: "City",
    description: "Urban transit corridors and circular supply chains.",
    icon: "Building2"
  },
  {
    id: "ecosystem",
    step: "05",
    title: "Planetary Biome",
    scale: "Continental",
    description: "Self-regulating biosphere homeostasis.",
    icon: "Globe2"
  }
];

// --- CHAPTER 04: IMPACT & MEASUREMENT DATA ---

export const CHAPTER_FOUR = {
  badge: "CHAPTER 04 // IMPACT",
  headline: "The measure of change.",
  subtext: "Every choice leaves a trace. EcoNest helps make that trace visible across carbon, water, energy, materials, biodiversity, and community.",
  transitionFrom: "Your next choice enters the system.",
  transitionTo: "Now watch what that choice changes.",
  disclaimer: "Illustrative EcoNest platform model · All metrics represent demonstration telemetry based on peer-reviewed lifecycle evaluations"
};

export const IMPACT_DIMENSIONS = [
  {
    id: "carbon",
    number: "01",
    name: "Carbon",
    symbol: "🍃",
    accent: "#3D8B57",
    headline: "Atmospheric Flux & Drawdown",
    unit: "kg CO₂e avoided",
    baselineValue: 1.8,
    metricSuffix: "/ day",
    description: "Mitigating direct fossil combustion while supporting biological soil and canopy carbon sinks.",
    pathway: "Direct combustion reduction → biological carbon fixation → atmospheric balance",
    visualMode: "atmospheric"
  },
  {
    id: "water",
    number: "02",
    name: "Water",
    symbol: "💧",
    accent: "#4BAFA1",
    headline: "Closed-Loop Hydrology",
    unit: "Liters conserved",
    baselineValue: 45,
    metricSuffix: "/ day",
    description: "Reclaiming domestic greywater and replenishing unconfined aquifers through permeable ground cover.",
    pathway: "Rainwater infiltration → greywater bio-filtration → perennial aquifer recharge",
    visualMode: "watershed"
  },
  {
    id: "energy",
    number: "03",
    name: "Energy",
    symbol: "⚡",
    accent: "#D4B038",
    headline: "Renewable Kinetic Yield",
    unit: "kWh clean power",
    baselineValue: 3.4,
    metricSuffix: "/ day",
    description: "Shifting peak residential demand to localized solar generation and decentralized neighborhood battery pools.",
    pathway: "Solar rooftop harvest → bidirectional inversion → zero peaker plant usage",
    visualMode: "renewable"
  },
  {
    id: "materials",
    number: "04",
    name: "Materials",
    symbol: "♻️",
    accent: "#38A169",
    headline: "Circular Industrial Metabolism",
    unit: "items diverted",
    baselineValue: 48,
    metricSuffix: "/ month",
    description: "Bypassing linear extraction and landfill disposal through standardized deposit refills and organic composting.",
    pathway: "Standardized durable packaging → refill hubs → high-grade technical recycling",
    visualMode: "circular"
  },
  {
    id: "biodiversity",
    number: "05",
    name: "Biodiversity",
    symbol: "🌱",
    accent: "#68D391",
    headline: "Living Habitat Resilience",
    unit: "index multiplier",
    baselineValue: 3.2,
    metricSuffix: "x buffer",
    description: "Expanding contiguous native tree canopies, fungal root networks, and pollinator corridors.",
    pathway: "Agroforestry polyculture → mycorrhizal fungal hyphae → pollinator highways",
    visualMode: "habitat"
  },
  {
    id: "community",
    number: "06",
    name: "Community",
    symbol: "👥",
    accent: "#52B788",
    headline: "Shared Regenerative Agency",
    unit: "local stewards",
    baselineValue: 45,
    metricSuffix: "network",
    description: "Catalyzing neighborhood tool libraries, shared solar co-ops, and regional food hubs.",
    pathway: "Individual habit → shared tool library → municipal policy & infrastructure shift",
    visualMode: "collective"
  }
];

export const LEDGER_ACTIONS_DATABASE = [
  {
    id: "act-bike",
    category: "mobility",
    categoryLabel: "Mobility",
    name: "Active Cycle Commute",
    action: "Swap 4 weekly car trips to bicycle or light rail",
    frequency: "4 trips / week",
    systemEffect: "Direct tailpipe emissions reduction & street noise cooling",
    carbon: 1.8,
    water: 12,
    energy: 2.8,
    materials: 1,
    biodiversity: 2,
    community: 4,
    enabled: true
  },
  {
    id: "act-transit",
    category: "mobility",
    categoryLabel: "Mobility",
    name: "Electric Transit Pass",
    action: "Utilize electrified municipal rail for regional journeys",
    frequency: "Daily transit",
    systemEffect: "Decarbonized passenger transit corridors",
    carbon: 2.4,
    water: 8,
    energy: 3.2,
    materials: 2,
    biodiversity: 2,
    community: 5,
    enabled: false
  },
  {
    id: "act-solar",
    category: "energy",
    categoryLabel: "Energy",
    name: "Rooftop Solar & Shift",
    action: "Shift peak thermal loads to midday solar hours",
    frequency: "Daily automation",
    systemEffect: "Displaces fossil peaker plant grid dispatch",
    carbon: 3.1,
    water: 15,
    energy: 5.4,
    materials: 1,
    biodiversity: 2,
    community: 3,
    enabled: true
  },
  {
    id: "act-efficiency",
    category: "energy",
    categoryLabel: "Energy",
    name: "Vampire Load Disconnect",
    action: "Automate standby power cutoff on domestic electronics",
    frequency: "Continuous",
    systemEffect: "Mitigates baseline parasitic grid load",
    carbon: 0.8,
    water: 4,
    energy: 1.6,
    materials: 1,
    biodiversity: 1,
    community: 2,
    enabled: false
  },
  {
    id: "act-greywater",
    category: "water",
    categoryLabel: "Water",
    name: "Dual-Loop Greywater",
    action: "Divert laundry and shower drain into native garden beds",
    frequency: "Daily flow",
    systemEffect: "Closed-loop sub-surface irrigation without municipal potable drain",
    carbon: 0.6,
    water: 45,
    energy: 1.2,
    materials: 2,
    biodiversity: 4,
    community: 3,
    enabled: true
  },
  {
    id: "act-rainwater",
    category: "water",
    categoryLabel: "Water",
    name: "Permeable Rain Bioswale",
    action: "Install sponge bio-retention swale along driveway",
    frequency: "Seasonal storm capture",
    systemEffect: "Absorbs 94% of cloudburst runoff directly into aquifer",
    carbon: 0.4,
    water: 80,
    energy: 0.8,
    materials: 2,
    biodiversity: 5,
    community: 4,
    enabled: false
  },
  {
    id: "act-refill",
    category: "materials",
    categoryLabel: "Materials",
    name: "Circular Deposit Refill",
    action: "Source pantry staples in standardized reusable glass/alloy containers",
    frequency: "Weekly groceries",
    systemEffect: "Halts single-use plastics and packaging incinerator feed",
    carbon: 1.2,
    water: 24,
    energy: 1.8,
    materials: 5,
    biodiversity: 3,
    community: 4,
    enabled: true
  },
  {
    id: "act-repair",
    category: "materials",
    categoryLabel: "Materials",
    name: "Tool & Hardware Repair",
    action: "Maintain durable goods through local community repair clinics",
    frequency: "Monthly",
    systemEffect: "Extends product lifespans and recovers pure technical alloys",
    carbon: 1.5,
    water: 18,
    energy: 2.2,
    materials: 4,
    biodiversity: 2,
    community: 5,
    enabled: false
  },
  {
    id: "act-localfood",
    category: "food",
    categoryLabel: "Food",
    name: "Seasonal Regional Produce",
    action: "Source 80% of produce from regenerative farms within 80 km",
    frequency: "Weekly diet",
    systemEffect: "Cuts long-haul refrigerated freight emissions and nurtures living topsoil",
    carbon: 2.2,
    water: 32,
    energy: 2.5,
    materials: 3,
    biodiversity: 5,
    community: 5,
    enabled: true
  },
  {
    id: "act-compost",
    category: "food",
    categoryLabel: "Food",
    name: "Living Soil Composting",
    action: "Cycle kitchen organic scraps into neighborhood compost hubs",
    frequency: "Daily scraps",
    systemEffect: "Eliminates methane in landfills and feeds microbial glomalin networks",
    carbon: 1.4,
    water: 16,
    energy: 1.1,
    materials: 4,
    biodiversity: 5,
    community: 4,
    enabled: false
  }
];

export const COMPOUND_TIME_HORIZONS = [
  {
    id: "now",
    step: "01",
    label: "Now",
    duration: "Day 1",
    headline: "The First Deliberate Choice",
    subtext: "A single conscious micro-decision disrupts habitual inertia.",
    scaleMultiplier: "1x",
    carbonCumulative: "1.8 kg",
    waterCumulative: "45 L",
    energyCumulative: "3.4 kWh",
    ecologicalVisualState: "spore"
  },
  {
    id: "30days",
    step: "02",
    label: "30 Days",
    duration: "1 Month",
    headline: "A Neural & Domestic Routine Formed",
    subtext: "Repetition creates an automatic household standard.",
    scaleMultiplier: "30x",
    carbonCumulative: "54 kg",
    waterCumulative: "1,350 L",
    energyCumulative: "102 kWh",
    ecologicalVisualState: "root"
  },
  {
    id: "6months",
    step: "03",
    label: "6 Months",
    duration: "Half Year",
    headline: "Neighborhood Micro-Collectives Emerge",
    subtext: "Neighbors adopt shared refill hubs, tool sharing, and solar micro-pools.",
    scaleMultiplier: "180x",
    carbonCumulative: "324 kg",
    waterCumulative: "8,100 L",
    energyCumulative: "612 kWh",
    ecologicalVisualState: "mycelium"
  },
  {
    id: "1year",
    step: "04",
    label: "1 Year",
    duration: "12 Months",
    headline: "Municipal Demand & Grid Shifting",
    subtext: "Aggregate community data justifies city council dedicated transit corridors.",
    scaleMultiplier: "1,200x",
    carbonCumulative: "2.16 tons",
    waterCumulative: "54,000 L",
    energyCumulative: "4.08 MWh",
    ecologicalVisualState: "canopy"
  },
  {
    id: "5years",
    step: "05",
    label: "5 Years",
    duration: "Half Decade",
    headline: "Continental Biome Equilibrium",
    subtext: "Perennial watershed recharge, cooler urban corridors, and restored topsoil.",
    scaleMultiplier: "28,000x",
    carbonCumulative: "50.4 tons",
    waterCumulative: "1.26M L",
    energyCumulative: "95.2 MWh",
    ecologicalVisualState: "biosphere"
  }
];

export const BEFORE_AFTER_SYSTEMS = {
  before: {
    badge: "LINEAR EXTRACTION MODEL",
    title: "Fragmented & Linear Pressures",
    tagline: "Take · Make · Dispose",
    description: "Isolated human decisions draw from centralized fossil grids, discharge unmanaged runoff into storm sewers, and discard packaging into landfills after single use.",
    traits: [
      { label: "Transit Flow", value: "Single-occupancy combustion, congested corridors" },
      { label: "Energy Grid", value: "Centralized fossil peaking, transmission line losses" },
      { label: "Hydrology", value: "Impermeable ground, rapid runoff scouring estuaries" },
      { label: "Materials", value: "Linear single-use plastics, landfill incineration" }
    ],
    connectivityIndex: "18% Connected",
    frictionLoss: "High Entropy Waste"
  },
  after: {
    badge: "REGENERATIVE CIRCULAR MODEL",
    title: "Interconnected Living Equilibrium",
    tagline: "Regenerate · Share · Restore",
    description: "Everyday actions weave into closed biological and technical nutrient loops, replenishing local aquifers, balancing neighborhood microgrids, and cultivating biodiverse topsoil.",
    traits: [
      { label: "Transit Flow", value: "Active bike corridors & synchronized electric rail" },
      { label: "Energy Grid", value: "Decentralized rooftop solar & neighborhood battery pools" },
      { label: "Hydrology", value: "Permeable bioswales & domestic greywater bio-filters" },
      { label: "Materials", value: "Closed-loop refill deposit hubs & microbial composting" }
    ],
    connectivityIndex: "94% Connected",
    frictionLoss: "Self-Renewing Nutrients"
  }
};

export const DATA_STORYTELLING_STAGES = [
  {
    number: "01",
    label: "OBSERVE",
    title: "Understand the Current Pattern",
    statement: "We cannot transform what remains invisible. Ecological telemetry maps the true upstream and downstream ripple of everyday resource choices."
  },
  {
    number: "02",
    label: "ACT",
    title: "Change the Micro-Behaviour",
    statement: "Agency begins with simple, repeatable interventions: shifting a commute, refilling a container, or catching rainfall before it escapes into storm drains."
  },
  {
    number: "03",
    label: "MEASURE",
    title: "Reveal the Systemic Consequence",
    statement: "Measurement is not the destination. Measurement is the mirror that proves your individual habit compounds into living planetary equilibrium."
  }
];

// --- CHAPTER 05: PROJECTS DATA ---

export const CHAPTER_FIVE = {
  badge: "CHAPTER 05 // PROJECTS",
  headline: "Where ideas become living systems.",
  subtext: "Explore projects where everyday interventions become measurable ecological systems across homes, streets, neighbourhoods, and communities.",
  narrativeBridge: "A project is not an isolated object. It is a system embedded in place.",
  disclaimer: "Illustrative project model · Demonstration system data based on scalable ecological frameworks",
  communityCue: "CHAPTER 06 // COMMUNITY — Systems become living when people enter them."
};

export const PROJECT_CATEGORIES = [
  { id: "all", number: "00", label: "All Systems" },
  { id: "urban", number: "01", label: "Urban Systems" },
  { id: "community", number: "02", label: "Community Systems" },
  { id: "water", number: "03", label: "Water & Ecology" },
  { id: "energy", number: "04", label: "Energy Systems" },
  { id: "materials", number: "05", label: "Circular Materials" },
  { id: "living-spaces", number: "06", label: "Living Spaces" }
];

export const PROJECT_SCALES = [
  {
    id: "home",
    label: "Home",
    scope: "Domestic Routine",
    radius: "0–15m",
    description: "Household-scale closed loops, point-of-use greywater diversion, and automated standby cutoff."
  },
  {
    id: "block",
    label: "Block",
    scope: "Shared Street Infrastructure",
    radius: "15–150m",
    description: "Street-scale permeable pavers, bioretention swales, tool libraries, and tree canopies."
  },
  {
    id: "neighbourhood",
    label: "Neighbourhood",
    scope: "Collective Microgrids",
    radius: "150m–1km",
    description: "Distributed rooftop solar battery pools, deposit refill hubs, and localized composting."
  },
  {
    id: "city",
    label: "City",
    scope: "Interconnected Biomes",
    radius: "1km+",
    description: "Metropolitan rapid transit corridors, regional watershed protection, and circular supply chains."
  }
];

export const PROJECTS_DATA = [
  {
    id: "proj-solar-commons",
    number: "01",
    title: "The Solar Commons",
    category: "energy",
    categoryLabel: "Energy Systems",
    scale: "neighbourhood",
    scaleLabel: "Neighbourhood",
    status: "ACTIVE CONCEPT MODEL",
    location: "Hyderabad Model · Conceptual",
    year: "2026",
    featured: true,
    tagline: "Decentralized rooftop solar & neighborhood kinetic storage pools.",
    shortDescription: "A shared solar and battery system designed around localized midday generation and bidirectional neighborhood energy dispatch.",
    longDescription: "The Solar Commons aggregates distributed residential solar arrays across 45 urban dwellings into a coordinated virtual microgrid. By shifting thermal cooling loads to peak midday hours and discharging collective battery reserves during evening peaks, the project eliminates neighborhood reliance on fossil peaker plants.",
    systems: ["Energy", "Community", "Carbon", "Materials"],
    trace: ["Energy Generation", "Community Storage", "Carbon Avoidance", "Grid Resilience"],
    primaryMetric: { value: "13.7 kWh", label: "Daily Renewable Yield", unit: "Per Household" },
    secondaryMetric: { value: "84.2%", label: "Local Grid Self-Sufficiency", unit: "Micro-Cluster Mix" },
    impactMetrics: [
      { label: "Carbon Avoided", value: "9.3 kg CO₂e / day" },
      { label: "Substation Peak Relieved", value: "-42% Peak Load" },
      { label: "Participating Stewards", value: "45 Households" }
    ],
    systemMap: {
      center: "SOLAR COMMONS",
      nodes: [
        { label: "COMMUNITY", dir: "top", color: "#52B788" },
        { label: "ENERGY", dir: "right", color: "#D4B038" },
        { label: "MATERIALS", dir: "bottom", color: "#38A169" },
        { label: "CARBON", dir: "left", color: "#3D8B57" }
      ]
    },
    howItWorks: "Smart bidirectional inverters communicate with a neighborhood battery buffer, automatically balancing generation spikes and feeding electric transit chargers without substation strain."
  },
  {
    id: "proj-living-street",
    number: "02",
    title: "The Living Street",
    category: "urban",
    categoryLabel: "Urban Systems",
    scale: "block",
    scaleLabel: "Street / Block",
    status: "DESIGNING",
    location: "Secunderabad Model · Conceptual",
    year: "2026",
    featured: false,
    tagline: "Permeable transit corridors, native shade verges, and sponge bioswales.",
    shortDescription: "A block-scale street transformation combining dedicated cycling corridors, continuous riparian bioswales, and urban microclimate cooling.",
    longDescription: "Transforming asphalt street space into permeable gravel-grid bike arteries and deep-rooted native tree canopies. Cloudburst runoff is immediately captured and filtered into local aquifers rather than scouring storm sewers.",
    systems: ["Urban", "Water", "Biodiversity", "Community"],
    trace: ["Active Mobility", "Rain Infiltration", "Canopy Cooling", "Street Ecology"],
    primaryMetric: { value: "72%", label: "Active Commute Share", unit: "Modal Shift" },
    secondaryMetric: { value: "-4.2°C", label: "Microclimate Cooling", unit: "Heat Island Buffer" },
    impactMetrics: [
      { label: "Potable Storm Offset", value: "1,200 L / rain event" },
      { label: "Continuous Canopy", value: "320m Green Corridor" },
      { label: "Traffic Decibels", value: "-18 dB Noise Dampening" }
    ],
    systemMap: {
      center: "LIVING STREET",
      nodes: [
        { label: "URBAN", dir: "top", color: "#4E9B6E" },
        { label: "WATER", dir: "right", color: "#4BAFA1" },
        { label: "COMMUNITY", dir: "bottom", color: "#52B788" },
        { label: "BIODIVERSITY", dir: "left", color: "#68D391" }
      ]
    },
    howItWorks: "Asphalt surfaces are swapped for modular permeable pavers with subsurface bioswales that absorb 94% of flash precipitation directly into soil microbiomes."
  },
  {
    id: "proj-blue-loop",
    number: "03",
    title: "Blue Loop Hydrology",
    category: "water",
    categoryLabel: "Water & Ecology",
    scale: "neighbourhood",
    scaleLabel: "Neighbourhood (Cluster)",
    status: "DOCUMENTED",
    location: "Deccan Watershed Model · Conceptual",
    year: "2025",
    featured: false,
    tagline: "Gravity-fed domestic greywater wetlands and aquifer recharge basins.",
    shortDescription: "A closed-loop water stewardship network combining household laundry diversion, reed bed bio-filtration, and perennial aquifer infiltration.",
    longDescription: "Blue Loop captures domestic greywater from 30 households and channels it through tiered gravel and reed bed bio-filters. Purified effluent recharges local ground wells and sustains community vegetable gardens without tap-water draw.",
    systems: ["Water", "Biodiversity", "Living Spaces"],
    trace: ["Domestic Greywater", "Bio-Filtration", "Aquifer Recharge", "Food Production"],
    primaryMetric: { value: "320 L", label: "Daily Potable Water Saved", unit: "Per Household" },
    secondaryMetric: { value: "96.4%", label: "Bio-Filtration Purity", unit: "Turbidity Reduction" },
    impactMetrics: [
      { label: "Annual Water Recycled", value: "3.5M Liters" },
      { label: "Wetland Habitat", value: "480 m² Pollinator Marsh" },
      { label: "Municipal Tap Offset", value: "62% Conservation" }
    ],
    systemMap: {
      center: "BLUE LOOP",
      nodes: [
        { label: "WATER", dir: "top", color: "#4BAFA1" },
        { label: "BIODIVERSITY", dir: "right", color: "#68D391" },
        { label: "COMMUNITY", dir: "bottom", color: "#52B788" },
        { label: "MATERIALS", dir: "left", color: "#38A169" }
      ]
    },
    howItWorks: "Sub-surface diverters send soap-free laundry and rinse water through gravity-fed horizontal reed wetlands, removing nitrogen and pathogens organically."
  },
  {
    id: "proj-circular-pantry",
    number: "04",
    title: "Circular Pantry Hub",
    category: "materials",
    categoryLabel: "Circular Materials",
    scale: "neighbourhood",
    scaleLabel: "Neighbourhood",
    status: "ACTIVE CONCEPT MODEL",
    location: "Banjara Hills Node · Conceptual",
    year: "2026",
    featured: false,
    tagline: "Deposit-return refill containers and closed-loop kitchen composting.",
    shortDescription: "A neighborhood refill station and tool library designed to eliminate single-use grocery packaging through durable standardized deposit vessels.",
    longDescription: "Circular Pantry connects local bulk regenerative producers to neighborhood residents. Grains, oils, and detergents are dispensed in standardized durable alloy canisters that are rinsed and returned through neighborhood drop lockers.",
    systems: ["Materials", "Community", "Carbon"],
    trace: ["Bulk Sourcing", "Standard Canisters", "Zero Packaging", "Soil Composting"],
    primaryMetric: { value: "144 items", label: "Containers Diverted / Mo", unit: "Per Household" },
    secondaryMetric: { value: "0 kg", label: "Residual Solid Waste", unit: "Landfill Total" },
    impactMetrics: [
      { label: "Plastic Eliminated", value: "180 kg / year" },
      { label: "Organic Compost Generated", value: "4.2 Tons / year" },
      { label: "Drop Hub Convenience", value: "3-minute walk" }
    ],
    systemMap: {
      center: "CIRCULAR PANTRY",
      nodes: [
        { label: "MATERIALS", dir: "top", color: "#38A169" },
        { label: "COMMUNITY", dir: "right", color: "#52B788" },
        { label: "CARBON", dir: "bottom", color: "#3D8B57" },
        { label: "LIVING SPACES", dir: "left", color: "#4E9B6E" }
      ]
    },
    howItWorks: "Standardized RFID-tagged deposit containers circulate through community pick-up lockers. Returned vessels undergo automated steam sterilization."
  },
  {
    id: "proj-canopy-commons",
    number: "05",
    title: "Canopy Commons",
    category: "living-spaces",
    categoryLabel: "Living Spaces",
    scale: "neighbourhood",
    scaleLabel: "Neighbourhood",
    status: "SCALING",
    location: "Urban Forest Belt · Conceptual",
    year: "2025",
    featured: false,
    tagline: "Interconnected private gardens forming contiguous wildlife corridors.",
    shortDescription: "A distributed soil restoration network linking balcony planters, rooftop gardens, and verge soils into living pollinator highways.",
    longDescription: "Canopy Commons maps and connects private backyards and apartment balconies into unbroken vegetative corridors. Participating residences plant native keystone species and maintain no-till fungal topsoil, creating stepping-stones for urban wildlife.",
    systems: ["Biodiversity", "Carbon", "Community"],
    trace: ["Private Planters", "Fungal Topsoil", "Pollinator Highways", "Canopy Carbon"],
    primaryMetric: { value: "3.8x", label: "Native Pollinator Multiplier", unit: "Biodiversity Buffer" },
    secondaryMetric: { value: "450 kg", label: "Soil Carbon Enriched / Yr", unit: "Per Micro-Patch" },
    impactMetrics: [
      { label: "Contiguous Corridor", value: "1.8 km continuous" },
      { label: "Participating Balconies", value: "85 Residences" },
      { label: "Mycorrhizal Diversity", value: "+140% Fungal Biomass" }
    ],
    systemMap: {
      center: "CANOPY COMMONS",
      nodes: [
        { label: "BIODIVERSITY", dir: "top", color: "#68D391" },
        { label: "LIVING SPACES", dir: "right", color: "#4E9B6E" },
        { label: "CARBON", dir: "bottom", color: "#3D8B57" },
        { label: "COMMUNITY", dir: "left", color: "#52B788" }
      ]
    },
    howItWorks: "An open spatial catalog guides residents to plant specific complementary native species that blossom sequentially, ensuring continuous nectar supply."
  },
  {
    id: "proj-micro-substation",
    number: "06",
    title: "Thermal Microgrid Buffer",
    category: "energy",
    categoryLabel: "Energy Systems",
    scale: "city",
    scaleLabel: "City",
    status: "EXPLORING",
    location: "Metropolitan Grid · Conceptual",
    year: "2026",
    featured: false,
    tagline: "Phase-change thermal storage cooling metropolitan substation peaks.",
    shortDescription: "Metropolitan-scale thermal energy reservoirs buffering commercial district cooling surges through localized chilled-water ice banks.",
    longDescription: "By freezing non-toxic phase-change salt solutions during off-peak night hours when regional wind power is abundant, the Thermal Buffer discharges passive cold storage during afternoon peak heat, protecting urban substations from brownouts.",
    systems: ["Energy", "Carbon", "Urban"],
    trace: ["Night Wind Harvest", "Ice Phase Change", "Afternoon Peak Displacement", "Substation Stability"],
    primaryMetric: { value: "1.8 MWh", label: "Kinetic Thermal Storage", unit: "Per Micro-Facility" },
    secondaryMetric: { value: "-38%", label: "Substation Peak Strain", unit: "Grid Optimization" },
    impactMetrics: [
      { label: "Peaker Carbon Displaced", value: "24.5 Tons / summer" },
      { label: "Cooling Efficiency Lift", value: "+32% COP" },
      { label: "Grid Stability Index", value: "99.8% Reliability" }
    ],
    systemMap: {
      center: "THERMAL BUFFER",
      nodes: [
        { label: "ENERGY", dir: "top", color: "#D4B038" },
        { label: "URBAN", dir: "right", color: "#4E9B6E" },
        { label: "CARBON", dir: "bottom", color: "#3D8B57" },
        { label: "COMMUNITY", dir: "left", color: "#52B788" }
      ]
    },
    howItWorks: "Encapsulated phase-change canisters freeze at 6°C during surplus solar/wind periods and circulate low-friction chilling loops through surrounding buildings."
  }
];

// --- CHAPTER 07: INSIGHTS DATA ---

export const CHAPTER_SEVEN = {
  badge: "CHAPTER 07 // INSIGHTS",
  headline: "Learning from living systems.",
  subtext: "Field observations, ecological patterns, design principles, and measured outcomes from systems that are designed to live, adapt, and regenerate.",
  narrativeBridge: "Observation becomes useful when it returns to the system as action.",
  disclaimer: "Field observations & ecological research archive · Grounded in demonstration system telemetry"
};

export const INSIGHT_CATEGORIES = [
  { id: "all", number: "00", label: "All Insights" },
  { id: "ecology", number: "01", label: "Ecology" },
  { id: "water", number: "02", label: "Water" },
  { id: "energy", number: "03", label: "Energy" },
  { id: "materials", number: "04", label: "Materials" },
  { id: "biodiversity", number: "05", label: "Biodiversity" },
  { id: "community", number: "06", label: "Community" }
];

export const FIELD_PRINCIPLES = [
  {
    number: "01",
    title: "Small systems compound.",
    desc: "A micro-decision repeated at block scale shifts regional load curves and regenerates soil.",
    relatedInsightNumber: "07.01",
    relatedCategory: "Energy & Carbon",
    relatedDimensions: ["Energy", "Carbon", "Community"]
  },
  {
    number: "02",
    title: "Ecology works through relationships.",
    desc: "No nutrient, electron, or drop of water exists in isolation; resilience emerges at the interfaces.",
    relatedInsightNumber: "07.03",
    relatedCategory: "Biodiversity",
    relatedDimensions: ["Biodiversity", "Living Spaces"]
  },
  {
    number: "03",
    title: "Maintenance is part of design.",
    desc: "Infrastructure not tended by human care decays into waste. Living systems require active stewardship.",
    relatedInsightNumber: "07.02",
    relatedCategory: "Water & Hydrology",
    relatedDimensions: ["Water", "Living Spaces"]
  },
  {
    number: "04",
    title: "Measurement creates accountability.",
    desc: "Unmeasured loops become unmanaged vulnerabilities. Telemetry grounds intention in biospheric reality.",
    relatedInsightNumber: "07.04",
    relatedCategory: "Circular Materials",
    relatedDimensions: ["Materials", "Carbon"]
  },
  {
    number: "05",
    title: "Local systems need local participation.",
    desc: "Top-down decrees fail where community governance thrives. The human layer is the ultimate substrate.",
    relatedInsightNumber: "07.06",
    relatedCategory: "Community Governance",
    relatedDimensions: ["Community", "Energy"]
  },
  {
    number: "06",
    title: "Nature operates in cycles, not straight lines.",
    desc: "Linear throughput exhausts sinks. Closed nutrient loops transform every residual into primary feedstock.",
    relatedInsightNumber: "07.05",
    relatedCategory: "Urban Ecology",
    relatedDimensions: ["Urban", "Water"]
  }
];

export const INSIGHTS_DATA = [
  {
    id: "insight-01",
    number: "07.01",
    type: "FIELD NOTE",
    loopStage: "OBSERVATION",
    loopNumber: "01",
    category: "energy",
    categoryLabel: "Energy & Carbon",
    title: "How small ecological decisions compound into system-level change.",
    subtitle: "From micro inverter delays to 42% substation peak load dampening.",
    readTime: "5 min read",
    date: "Autumn 2026",
    featured: true,
    shortDescription: "Analyzing 45 dwellings in the Solar Commons microgrid reveals that behavioral midday cooling pre-chills displace more peak peaker carbon than battery capacity alone.",
    longDescription: "When 45 residential rooftops synchronize their heat-pump chillers to turn on 45 minutes before peak afternoon temperatures, the thermal inertia of concrete structures stores cooling passive energy without drawing from the grid during evening brownout hours. Our telemetry demonstrates that behavioral synchronization creates greater electrical resilience than oversized battery banks.",
    keyFindings: [
      "Midday thermal pre-chilling displaces 84% of evening residential cooling spikes.",
      "Kinetic storage efficiency increases 12% when coupled with domestic building mass.",
      "Community battery pooling eliminates individual inverter throttling during peak sun."
    ],
    connectedProject: {
      id: "proj-solar-commons",
      number: "PROJ-01",
      title: "The Solar Commons",
      categoryLabel: "Energy Systems"
    },
    observedEffect: {
      primaryValue: "13.7 kWh",
      primaryLabel: "Daily Renewable Yield",
      secondaryValue: "-42%",
      secondaryLabel: "Substation Peak Relieved"
    },
    tags: ["Microgrid", "Peaker Offset", "Thermal Mass", "Behavioral Shift"]
  },
  {
    id: "insight-02",
    number: "07.02",
    type: "SYSTEM STUDY",
    loopStage: "UNDERSTANDING",
    loopNumber: "02",
    category: "water",
    categoryLabel: "Water & Hydrology",
    title: "Why neighbourhood water systems fail silently — and how gravity reed beds heal them.",
    subtitle: "Biological turbidity reduction without municipal pump energy.",
    readTime: "6 min read",
    date: "Summer 2026",
    featured: false,
    shortDescription: "Mechanical greywater filtration systems suffer from clogged motorized pumps; sub-surface horizontal reed bed wetlands purify water indefinitely through root-zone biofilms.",
    longDescription: "Municipal water treatment plants consume immense power pushing wastewater through synthetic membranes. In the Blue Loop hydrology prototype, domestic laundry and rinse effluents flow through tiered volcanic gravel and Phragmites reed beds. Pathogens and surfactants are broken down by mycorrhizal fungi and rhizosphere bacteria, returning potable-grade irrigation water with zero kilowatt draw.",
    keyFindings: [
      "Gravity filtration achieves 96.4% turbidity reduction without active motor pumping.",
      "Rhizosphere bacteria degrade biodegradable surfactants in under 4 hours.",
      "Bio-filtered greywater replenishes shallow Deccan aquifers rather than flooding storm drains."
    ],
    connectedProject: {
      id: "proj-blue-loop",
      number: "PROJ-03",
      title: "Blue Loop Hydrology",
      categoryLabel: "Water & Ecology"
    },
    observedEffect: {
      primaryValue: "320 L",
      primaryLabel: "Daily Potable Water Saved",
      secondaryValue: "96.4%",
      secondaryLabel: "Bio-Filtration Purity"
    },
    tags: ["Reed Bed", "Gravity Flow", "Rhizosphere", "Aquifer Recharge"]
  },
  {
    id: "insight-03",
    number: "07.03",
    type: "DESIGN PRINCIPLE",
    loopStage: "APPLICATION",
    loopNumber: "03",
    category: "biodiversity",
    categoryLabel: "Biodiversity & Habitats",
    title: "Designing for species, not just people: Contiguous pollinator highways.",
    subtitle: "Why an unbroken 1.8km corridor yields 3.8x native insect diversity over fragmented parks.",
    readTime: "4 min read",
    date: "Late Spring 2026",
    featured: false,
    shortDescription: "Isolated urban parks act as ecological islands where solitary bees cannot cross 8-lane asphalt canyons. Connecting private balconies into continuous green verges re-establishes breeding corridors.",
    longDescription: "Biologists have long known that habitat fragmentation is a primary driver of urban insect decline. The Canopy Commons prototype mapped 85 residential balconies along an east-west transit artery. By coordinating native flowering plant schedules, the network created a 1.8km unbroken forage corridor, resulting in a 3.8-fold surge in native solitary bee populations.",
    keyFindings: [
      "Contiguous green corridors require gaps no larger than 25 meters for solitary bee crossing.",
      "Sequential native planting ensures uninterrupted nectar supply from March through October.",
      "No-till fungal topsoil in container planters sequesters 450 kg of carbon per micro-patch annually."
    ],
    connectedProject: {
      id: "proj-canopy-commons",
      number: "PROJ-05",
      title: "Canopy Commons",
      categoryLabel: "Living Spaces"
    },
    observedEffect: {
      primaryValue: "3.8x",
      primaryLabel: "Native Pollinator Multiplier",
      secondaryValue: "1.8 km",
      secondaryLabel: "Contiguous Wildlife Corridor"
    },
    tags: ["Pollinators", "Habitat Corridors", "Native Flora", "Fungal Soil"]
  },
  {
    id: "insight-04",
    number: "07.04",
    type: "DATA NOTE",
    loopStage: "MEASUREMENT",
    loopNumber: "04",
    category: "materials",
    categoryLabel: "Circular Materials",
    title: "The measurable metabolism of packaging: Transitioning from single-use to durable alloys.",
    subtitle: "Tracking 144 containers per household across a closed-loop refill pantry.",
    readTime: "5 min read",
    date: "Winter 2025",
    featured: false,
    shortDescription: "Recycling plastic film requires high thermal inputs and downcycles resin quality. Standardized stainless alloy vessels circulate 200+ cycles with zero material degradation.",
    longDescription: "Linear consumer packaging assumes single-use disposal. In the Circular Pantry Hub deployment, 45 households adopted RFID-tracked standardized alloy containers for bulk dry goods, cooking oils, and liquid detergents. Across 12 months, residual landfill solid waste dropped to zero, eliminating 180 kilograms of flexible plastic film per dwelling.",
    keyFindings: [
      "Alloy containers achieve net carbon neutrality after just 18 return cycles compared to virgin PET.",
      "Standardized vessel diameters reduce pantry shelf volume by 32% while preventing pest ingress.",
      "Automated steam sterilization uses 85% less water than home sink rinsing."
    ],
    connectedProject: {
      id: "proj-circular-pantry",
      number: "PROJ-04",
      title: "Circular Pantry Hub",
      categoryLabel: "Circular Materials"
    },
    observedEffect: {
      primaryValue: "144 items",
      primaryLabel: "Containers Diverted / Mo",
      secondaryValue: "0 kg",
      secondaryLabel: "Residual Landfill Waste"
    },
    tags: ["Closed Loop", "Standardization", "Zero Plastic", "Alloy Canisters"]
  },
  {
    id: "insight-05",
    number: "07.05",
    type: "FIELD NOTE",
    loopStage: "OBSERVATION",
    loopNumber: "01",
    category: "ecology",
    categoryLabel: "Urban Ecology",
    title: "Asphalt microclimates vs. living street verges: 4.2°C temperature dampening.",
    subtitle: "Thermal telemetry from permeable bioswales during summer heat peaks.",
    readTime: "4 min read",
    date: "Summer 2026",
    featured: false,
    shortDescription: "Continuous asphalt road verges absorb solar radiation and radiate trapped heat all night; permeable gravel pavers with bioswale root structures dissipate heat via evapotranspiration.",
    longDescription: "Thermal infrared imaging of the Living Street corridor demonstrated a 4.2°C reduction in ambient ground-level temperatures during 40°C heatwaves. Subsurface stormwater reservoirs stay cool, feeding deep tree roots that continuously transpire moisture into dry air, effectively acting as passive street air conditioners.",
    keyFindings: [
      "Permeable pavers absorb 94% of flash precipitation, preventing thermal road runoff into rivers.",
      "Canopy shading reduces asphalt surface temperatures from 58°C to 31°C.",
      "Active cycling and pedestrian commute share reached 72% along the green corridor."
    ],
    connectedProject: {
      id: "proj-living-street",
      number: "PROJ-02",
      title: "The Living Street",
      categoryLabel: "Urban Systems"
    },
    observedEffect: {
      primaryValue: "-4.2°C",
      primaryLabel: "Microclimate Cooling",
      secondaryValue: "72%",
      secondaryLabel: "Active Commute Share"
    },
    tags: ["Heat Island", "Evapotranspiration", "Permeable Pavers", "Bioswales"]
  },
  {
    id: "insight-06",
    number: "07.06",
    type: "COMMUNITY NOTE",
    loopStage: "ADAPTATION",
    loopNumber: "05",
    category: "community",
    categoryLabel: "Community Governance",
    title: "The social contracts behind shared microgrids: Why commons require care.",
    subtitle: "Governance protocols that prevent the tragedy of the commons in decentralized energy.",
    readTime: "7 min read",
    date: "Autumn 2026",
    featured: false,
    shortDescription: "Hardware alone cannot balance a microgrid; transparent neighborhood consensus algorithms and collective ownership agreements ensure equity during grid outages.",
    longDescription: "Technology succeeds or fails based on the social contracts that surround it. When 45 households share a common battery reserve, rules must govern who draws power during grid blackouts. The Solar Commons established peer-to-peer baseload allocations with mutual priority credits for households running medical equipment or refrigeration.",
    keyFindings: [
      "Transparent power dashboards increase voluntary consumption throttling by 38% during grid distress.",
      "Neighborhood energy trusts keep 100% of financial feed-in tariffs within local community accounts.",
      "Regular seasonal maintenance gatherings double system lifespan and build enduring social bonds."
    ],
    connectedProject: {
      id: "proj-solar-commons",
      number: "PROJ-01",
      title: "The Solar Commons",
      categoryLabel: "Energy Systems"
    },
    observedEffect: {
      primaryValue: "45 homes",
      primaryLabel: "Participating Stewards",
      secondaryValue: "84.2%",
      secondaryLabel: "Grid Self-Sufficiency"
    },
    tags: ["Social Contracts", "Energy Equity", "Commons Governance", "Resilience"]
  }
];



