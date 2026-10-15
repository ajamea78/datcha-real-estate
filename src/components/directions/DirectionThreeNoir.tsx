"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  MapPin,
  Shield,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Sliders,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  Lock,
  Eye,
  Key,
  Maximize2,
  Anchor,
  Sun,
  Sunset,
  Moon,
  MessageCircle,
  FileText,
  Volume2,
  VolumeX,
} from "lucide-react";

interface ResidenceSpec {
  id: string;
  name: string;
  location: string;
  level: string;
  area: string;
  terrace: string;
  berth: string;
  price: string;
  orientation: string;
  delivery: string;
  paymentStructure: string;
  image: string;
  features: string[];
}

const RESIDENCES: ResidenceSpec[] = [
  {
    id: "sky-villa",
    name: "The Grand Sky Villa",
    location: "El Gouna · Marina Promenade",
    level: "Elevation 48m · Top Tier",
    area: "820 m² (8,826 sq.ft)",
    terrace: "310 m² Private Wrap Sky Deck",
    berth: "Direct 45m Superyacht Mooring",
    price: "€4,850,000",
    orientation: "South-West · Full Lagoon & Sea Arc",
    delivery: "Ready for Fit-Out · Immediate Handover",
    paymentStructure: "100% Cash / Freehold Resale (EUR/USD)",
    image: "/img-luxury-villa.jpg",
    features: [
      "Cantilevered 18m Glass-Bottom Infinity Pool",
      "Private High-Speed Keycard Elevator",
      "Sub-Zero & Gaggenau Architectural Kitchen",
      "Custom Italian Travertine & Fluted Bronze",
    ],
  },
  {
    id: "horizon-penthouse",
    name: "The Horizon Duplex Penthouse",
    location: "Sahl Hasheesh · Bay Crest",
    level: "Elevation 36m · Dual Level",
    area: "640 m² (6,888 sq.ft)",
    terrace: "195 m² Sea-Facing Solarium",
    berth: "Private Tender Berth & Pier Access",
    price: "€3,400,000",
    orientation: "East · Direct Red Sea Sunrise",
    delivery: "Q4 2026 Developer Handover",
    paymentStructure: "15% Down · 6-Year Developer Plan @ 0% Interest",
    image: "/img-penthouse-interior.jpg",
    features: [
      "Double-Height 6.4m Architectural Atrium",
      "Private Rooftop Wellness Spa & Sauna",
      "Acoustically Isolated Master Sanctuary",
      "Dedicated 3-Vehicle Subterranean Vault",
    ],
  },
  {
    id: "island-sanctuary",
    name: "The Coral Coastline Estate",
    location: "Somabay · Peninsula Edge",
    level: "Ground & Horizon Elevation",
    area: "1,150 m² (12,378 sq.ft)",
    terrace: "520 m² Private Beach Oasis",
    berth: "Deepwater Private Marina Pier",
    price: "€6,200,000",
    orientation: "360° Panoramic Reef & Open Sea",
    delivery: "Turnkey Ready-to-Move",
    paymentStructure: "Direct Seller Freehold · Law 230/1996 Deed",
    image: "/img-soma-bay.jpg",
    features: [
      "Direct Private Beach Shoreline Access",
      "Integrated Staff Quarters & Guest Pavilion",
      "Automated Solar Shading & Climate Envelope",
      "Private Helipad Landing Privilege",
    ],
  },
  {
    id: "atrium-residence",
    name: "The Atrium Garden Residence",
    location: "Makadi Heights · Ridge Crest",
    level: "Elevation 78m Above Sea Level",
    area: "490 m² (5,274 sq.ft)",
    terrace: "140 m² Perennial Courtyard",
    berth: "Golf Club & Beach Club Pass",
    price: "€2,150,000",
    orientation: "North-East · Bay & Mountain Ridge",
    delivery: "Q2 2027 Handover",
    paymentStructure: "10% Down · 7-Year Developer Plan @ 0% Interest",
    image: "/img-sahl-hasheesh.jpg",
    features: [
      "Internal Zen Palm Courtyard with Skylight",
      "Seamless Biophilic Indoor-Outdoor Glass Pocket Doors",
      "Thermal Insulation & Smart Energy Microgrid",
      "Wine Cellar & Private Tasting Lounge",
    ],
  },
];

export default function DirectionThreeNoir() {
  const [atmosphere, setAtmosphere] = useState<"dusk" | "midnight" | "golden">("dusk");
  const [activeResidence, setActiveResidence] = useState<ResidenceSpec>(RESIDENCES[0]);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [vaultUnlocked, setVaultUnlocked] = useState(false);
  const [dossierSubmitted, setDossierSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"specs" | "investment">("specs");

  // Direction 3 is the Noir Penthouse HUD — enforce dark theme on mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  // Dynamic atmosphere backgrounds matching lighting simulator
  const atmosphereBackgrounds = {
    golden: "/img-hero-ocean.jpg",
    dusk: "/img-infinity-dusk.jpg",
    midnight: "/img-penthouse-interior.jpg",
  };

  const atmosphereTelemetry = {
    golden: "SOLAR AZIMUTH: 165° · DIRECT SEA REFLECTION · VISIBILITY: 35M+",
    dusk: "SUNSET AZIMUTH: 284° · GOLDEN HOUR LUMINESCENCE · VISIBILITY: 30M+",
    midnight: "NOCTURNAL SKYLINE · 100% DISCRETION REPOSE · STARLIGHT ENVELOPE",
  };

  // Atmosphere color tokens
  const atmosphereGradients = {
    golden: "from-[#1a140e] via-[#0e1114] to-[#080a0c]",
    dusk: "from-[#1a1215] via-[#0e1217] to-[#07090b]",
    midnight: "from-[#080c10] via-[#050709] to-[#020304]",
  };

  const atmosphereAccents = {
    golden: {
      glow: "rgba(224, 168, 86, 0.16)",
      text: "#E0A856",
      border: "border-[#E0A856]/30",
      badge: "bg-[#E0A856]/10 text-[#E0A856]",
    },
    dusk: {
      glow: "rgba(192, 103, 63, 0.16)",
      text: "#C0673F",
      border: "border-[#C0673F]/30",
      badge: "bg-[#C0673F]/10 text-[#C0673F]",
    },
    midnight: {
      glow: "rgba(94, 137, 168, 0.16)",
      text: "#86B5D9",
      border: "border-[#86B5D9]/30",
      badge: "bg-[#86B5D9]/10 text-[#86B5D9]",
    },
  };

  const currentAccent = atmosphereAccents[atmosphere];

  return (
    <div
      className={`min-h-screen bg-[#07090b] text-[#E8E6E1] font-sans selection:bg-[#D4AF37] selection:text-black transition-colors duration-700 bg-gradient-to-b ${atmosphereGradients[atmosphere]}`}
    >
      {/* ─── TECHNICAL HUD STATUS BAR (AIR CENTER / VOLTA SKAI STYLE) ─── */}
      <aside aria-label="Technical Telemetry" className="border-b border-white/10 bg-black/60 backdrop-blur-md px-4 sm:px-8 py-2 text-[11px] font-mono tracking-widest uppercase flex flex-wrap items-center justify-between gap-3 text-white/50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            RED SEA COASTAL TELEMETRY
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="hidden sm:inline">27°15&apos;28&quot;N 33°48&apos;42&quot;E</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="hidden md:inline" style={{ color: currentAccent.text }}>
            {atmosphereTelemetry[atmosphere]}
          </span>
        </div>

        {/* Atmosphere Lighting Controller (Volta Skai) */}
        <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-full border border-white/10">
          <button
            onClick={() => setAtmosphere("golden")}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium transition-all flex items-center gap-1 ${
              atmosphere === "golden"
                ? "bg-[#E0A856] text-black font-semibold shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Sun className="w-3 h-3" />
            Golden Hour
          </button>
          <button
            onClick={() => setAtmosphere("dusk")}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium transition-all flex items-center gap-1 ${
              atmosphere === "dusk"
                ? "bg-[#C0673F] text-white font-semibold shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Sunset className="w-3 h-3" />
            Red Sea Dusk
          </button>
          <button
            onClick={() => setAtmosphere("midnight")}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium transition-all flex items-center gap-1 ${
              atmosphere === "midnight"
                ? "bg-[#86B5D9] text-black font-semibold shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Moon className="w-3 h-3" />
            Midnight
          </button>
        </div>
      </aside>

      {/* ─── VIP NAVIGATION (MR. C / LENVAL STYLE) ─── */}
      <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/10 px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo-dark.png"
              alt="Datcha Luxury Real Estate"
              width={140}
              height={38}
              className="h-8 w-auto object-contain brightness-125"
            />
            <span className="hidden sm:inline-block text-[9px] font-mono tracking-[0.3em] uppercase text-white/40 pl-3 border-l border-white/15">
              PRIVATE RESIDENTIAL ADVISORY
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-white/70">
            <a href="#horizon-selector" className="hover:text-white transition-colors">
              01 // Residences
            </a>
            <a href="#spatial-specs" className="hover:text-white transition-colors">
              02 // Engineering
            </a>
            <a href="#private-vault" className="hover:text-white transition-colors">
              03 // Off-Market Reserve
            </a>
            <a href="#concierge" className="hover:text-white transition-colors">
              04 // Commissioning
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
              title="Ambient Acoustic Immersion"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#D4AF37]" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <a
              href="#private-vault"
              className="px-4 py-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 hover:bg-[#D4AF37] hover:text-black transition-all text-xs font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5"
            >
              <Key className="w-3.5 h-3.5" />
              Off-Market Reserve
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO MONUMENT (VOLTA SKAI HIGH HORIZON) ─── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end px-6 sm:px-12 pb-16 pt-24 overflow-hidden border-b border-white/10">
        {/* Fullscreen Video / High-Res Photo Horizon */}
        <div className="absolute inset-0 z-0">
          <Image
            key={atmosphere}
            src={atmosphereBackgrounds[atmosphere]}
            alt="Horizon Red Sea Skyline"
            fill
            priority
            className="object-cover filter brightness-[0.5] contrast-[1.15] transition-opacity duration-700"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] contrast-[1.15] mix-blend-screen opacity-50"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-with-swimming-pool-42525-large.mp4"
              type="video/mp4"
            />
          </video>
          {/* Subtle Ambient Radial Lighting Glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-1000"
            style={{
              background: `radial-gradient(circle at 60% 40%, ${currentAccent.glow} 0%, transparent 70%), linear-gradient(to top, #07090b 10%, transparent 60%)`,
            }}
          />
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        </div>

        {/* Hero Narrative Overlay */}
        <div className="relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#D4AF37] mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            RESERVED FOR ULTRA-HIGH-NET-WORTH PATRONS · HURGHADA TO SOMABAY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-tight leading-[0.95] text-white uppercase"
          >
            Architectural <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F7F3ED] to-[#C0673F]">
              Skyline & Coastline
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl font-light text-white/75 max-w-2xl leading-relaxed"
          >
            A bespoke private brokerage handling Red Sea trophy penthouses, deepwater superyacht villas, and off-market institutional land parcels and private island estates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#horizon-selector"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#D4AF37] transition-all flex items-center gap-2 shadow-xl shadow-black/50"
            >
              Explore Horizon Residences
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#private-vault"
              className="px-8 py-4 rounded-full border border-white/30 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-xs font-mono tracking-widest uppercase backdrop-blur-sm"
            >
              Request Off-Market Dossier
            </a>
          </motion.div>
        </div>

        {/* Real-time HUD Metrics Bar (Bottom Edge of Hero) */}
        <div className="relative z-10 mt-16 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px]">Prime Concessions</div>
            <div className="text-white font-medium text-lg mt-0.5">€180M+ Closed</div>
          </div>
          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px]">Average Yield Target</div>
            <div className="text-[#D4AF37] font-medium text-lg mt-0.5">14.6% Net Cap</div>
          </div>
          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px]">Freehold Ownership</div>
            <div className="text-white font-medium text-lg mt-0.5">100% Repatriable</div>
          </div>
          <div>
            <div className="text-white/40 uppercase tracking-widest text-[10px]">Off-Market Ratio</div>
            <div className="text-white font-medium text-lg mt-0.5">68% Non-Public</div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE RESIDENCE SELECTOR (AIR CENTER / VOLTA SKAI STYLE) ─── */}
      <section id="horizon-selector" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">
              // SECTION 01: ARCHITECTURAL SELECTOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Select Your Coastal Horizon
            </h2>
          </div>
          <p className="text-sm font-light text-white/60 max-w-md">
            Click across tiers to inspect spatial telemetry, private yacht mooring capacity, and engineering footprints.
          </p>
        </div>

        {/* Tier Selector Navigation Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {RESIDENCES.map((res) => {
            const isSelected = activeResidence.id === res.id;
            return (
              <button
                key={res.id}
                onClick={() => setActiveResidence(res)}
                onMouseEnter={() => setActiveResidence(res)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white/10 border-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/10 scale-[1.01]"
                    : "bg-white/[0.02] border-white/10 text-white/50 hover:border-white/25 hover:text-white"
                }`}
              >
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] mb-1 flex items-center justify-between">
                  <span>{res.level}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />}
                </div>
                <div className="font-serif text-base font-medium truncate">{res.name}</div>
                <div className="text-xs text-white/50 truncate mt-1">{res.location}</div>
              </button>
            );
          })}
        </div>

        {/* Active Residence Telemetry & Perspective Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
          {/* Left: Dynamic Photography Stage */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] rounded-xl overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeResidence.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeResidence.image}
                  alt={activeResidence.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* In-Picture Perspective Badge */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#D4AF37] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              {activeResidence.orientation}
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-[#D4AF37]">{activeResidence.location}</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white">{activeResidence.name}</h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase text-white/50 block">Investment Guide</span>
                <span className="text-xl sm:text-2xl font-mono text-[#D4AF37] font-semibold">
                  {activeResidence.price}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Technical Blueprint & Spatial Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              {/* Interactive View Mode Selector */}
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <div className="text-xs font-mono tracking-widest uppercase text-white/40">
                  RESIDENCE INTELLIGENCE
                </div>
                <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-lg border border-white/10 text-[10px] font-mono">
                  <button
                    onClick={() => setActiveTab("specs")}
                    className={`px-2.5 py-1 rounded transition-all ${
                      activeTab === "specs"
                        ? "bg-[#D4AF37] text-black font-bold"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    Spatial Specs
                  </button>
                  <button
                    onClick={() => setActiveTab("investment")}
                    className={`px-2.5 py-1 rounded transition-all ${
                      activeTab === "investment"
                        ? "bg-[#D4AF37] text-black font-bold"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    Yield Analytics
                  </button>
                </div>
              </div>

              {activeTab === "specs" ? (
                <>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 font-mono">
                      <div className="text-[10px] text-white/40 uppercase">Internal Living Area</div>
                      <div className="text-sm font-semibold text-white mt-1">{activeResidence.area}</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 font-mono">
                      <div className="text-[10px] text-white/40 uppercase">Terrace & Sky Deck</div>
                      <div className="text-sm font-semibold text-white mt-1">{activeResidence.terrace}</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 font-mono">
                      <div className="text-[10px] text-white/40 uppercase">Marine Mooring</div>
                      <div className="text-sm font-semibold text-[#D4AF37] mt-1 flex items-center gap-1">
                        <Anchor className="w-3.5 h-3.5" />
                        {activeResidence.berth}
                      </div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 font-mono">
                      <div className="text-[10px] text-white/40 uppercase">Horizon Tier</div>
                      <div className="text-sm font-semibold text-white mt-1">{activeResidence.level}</div>
                    </div>
                  </div>

                  {/* Architectural Highlights */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                      Architectural Specifications
                    </div>
                    {activeResidence.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/80 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-4 py-2">
                  <div className="p-4 rounded-xl bg-black/40 border border-[#D4AF37]/30 font-mono">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Projected Net Rental Yield</span>
                      <span className="text-[#D4AF37] font-bold text-sm">13.8% – 16.2%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#D4AF37] h-full rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                      <span className="text-[10px] text-white/40 uppercase block">5-Yr Value Arc</span>
                      <span className="text-white font-bold text-sm mt-1 block">+84.2% Estimated</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                      <span className="text-[10px] text-white/40 uppercase block">Currency Shield</span>
                      <span className="text-white font-bold text-sm mt-1 block">EUR / USD Pegged</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                      <span className="text-[10px] text-white/40 uppercase block">Handover Timeline</span>
                      <span className="text-[#D4AF37] font-semibold text-xs mt-1 block">{activeResidence.delivery}</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                      <span className="text-[10px] text-white/40 uppercase block">Payment / Legal Model</span>
                      <span className="text-white font-semibold text-xs mt-1 block">{activeResidence.paymentStructure}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 text-xs text-white/70 font-light leading-relaxed">
                    Compliant with Egyptian Foreign Ownership Law No. 230/1996. Full concierge management, private key custody, and unrestricted repatriation of capital in foreign currency.
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <a
                href="#concierge"
                className="flex-1 py-3.5 rounded-full bg-[#D4AF37] text-black text-center text-xs font-mono uppercase tracking-widest font-semibold hover:bg-white transition-all"
              >
                Request Architectural Plans
              </a>
              <a
                href={`https://wa.me/201099999999?text=Inquiry%20regarding%20${encodeURIComponent(activeResidence.name)}`}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-emerald-400 hover:border-emerald-400/50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MR. C PRIVATE OFF-MARKET RESERVE SECTION ─── */}
      <section id="private-vault" className="py-24 px-6 sm:px-12 bg-black/50 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-xs font-mono text-[#D4AF37] mb-3">
              <Lock className="w-3 h-3" />
              STRICT CONFIDENTIALITY PROTOCOL
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              The Private Off-Market Reserve & Trophy Assets
            </h2>
            <p className="mt-4 text-sm sm:text-base font-light text-white/60 max-w-2xl mx-auto">
              Over 68% of ultra-luxury transactions in El Gouna and Soma Bay transpire off-market to preserve sovereign discretion. Access requires identity credentialing.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-white/[0.05] to-black/80 border border-[#D4AF37]/30 shadow-2xl relative">
            {!vaultUnlocked ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mx-auto flex items-center justify-center text-[#D4AF37] mb-6">
                  <Key className="w-8 h-8 animate-pulse" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Private Client Access Gate</h3>
                <p className="text-xs sm:text-sm font-mono text-white/50 max-w-md mx-auto mb-8">
                  Unlock access to 4 unlisted private coastal estates, master development parcels, and superyacht slips.
                </p>

                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter corporate or private email..."
                    className="flex-1 px-4 py-3 rounded-full bg-black/60 border border-white/20 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    onClick={() => setVaultUnlocked(true)}
                    className="px-6 py-3 rounded-full bg-[#D4AF37] text-black text-xs font-mono uppercase font-bold hover:bg-white transition-all whitespace-nowrap"
                  >
                    Unlock Reserve
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    RESERVE ACCESS GRANTED · SESSION ENCRYPTED
                  </div>
                  <button
                    onClick={() => setVaultUnlocked(false)}
                    className="text-xs font-mono text-white/40 hover:text-white"
                  >
                    Lock Reserve
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between">
                    <div className="relative h-36 w-full">
                      <Image
                        src="/img-private-island.jpg"
                        alt="El Gouna Private Island"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute top-2 left-2 text-[10px] font-mono text-[#D4AF37] px-2 py-0.5 rounded-full bg-black/70 border border-white/10">
                        OFF-MARKET LOT #09
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-serif text-lg text-white">El Gouna Private Island Reserve</h4>
                      <p className="text-xs text-white/60 mt-1">
                        14,200 m² standalone island plot with master zoning approval for 3 estate compounds.
                      </p>
                      <div className="mt-3 text-xs font-mono text-[#D4AF37]">€12,500,000 · Freehold Law 230/1996 Deed</div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between">
                    <div className="relative h-36 w-full">
                      <Image
                        src="/img-luxury-villa.jpg"
                        alt="Soma Bay Coral Crest"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute top-2 left-2 text-[10px] font-mono text-[#D4AF37] px-2 py-0.5 rounded-full bg-black/70 border border-white/10">
                        OFF-MARKET LOT #14
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-serif text-lg text-white">Soma Bay Coral Crest Trophy Villa</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Fully turnkey, furnished by Molteni&C with private 60m deepwater dock.
                      </p>
                      <div className="mt-3 text-xs font-mono text-[#D4AF37]">€7,800,000 · Direct Seller</div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <a
                    href="#concierge"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] hover:underline"
                  >
                    Initiate Private Advisory Dossier Call
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ─── PRIVATE COMMISSIONING FORM & CONCIERGE ─── */}
      <section id="concierge" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">
            // PRIVATE COMMISSIONING DESK
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Initiate An Advisory Commission
          </h2>
          <p className="mt-3 text-sm font-light text-white/60">
            Our Senior Partners respond within 3 hours during European and Gulf market hours.
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          {dossierSubmitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-white">Dossier Request Received</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto mt-2">
                A managing partner has received your private mandate. An encrypted portfolio dossier will be transmitted to your registered channel.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDossierSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2">
                    Client Legal Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Lord Alexander Wright / H.E. Ambassador..."
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2">
                    Direct Channel (WhatsApp or Mobile)
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+44 7700 900000 / +971 50 000 0000"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2">
                    Corporate / Private Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="client@familyoffice.com"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2">
                    Target Capital Allocation
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37]">
                    <option>€1,500,000 – €3,000,000 (Ready-to-Move Penthouse / Villa)</option>
                    <option>€3,000,000 – €6,000,000 (Off-Plan Waterfront · 5-7 Yr 0% Plan)</option>
                    <option>€6,000,000 – €15,000,000+ (Private Island / Trophy Reserve)</option>
                    <option>Institutional Master Parcel / Commercial Land Mandate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-2">
                  Specific Architectural Requirements & Privacy Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify desired marine draft, private helipad requirements, or off-market discretion constraints..."
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#D4AF37] text-black font-semibold text-xs font-mono uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-[#D4AF37]/10"
              >
                Transmit Commission Mandate
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER TELEMETRY ─── */}
      <footer className="border-t border-white/10 bg-black/80 px-6 sm:px-12 py-12 text-xs font-mono text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-dark.png"
              alt="Datcha Real Estate"
              width={120}
              height={32}
              className="h-6 w-auto object-contain brightness-125"
            />
            <span className="text-white/30">|</span>
            <span>Direction 03: Horizon Noir & Penthouse HUD</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Hurghada · El Gouna · Sahl Hasheesh · Somabay</span>
            <span>© 2026 Datcha Advisory</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
