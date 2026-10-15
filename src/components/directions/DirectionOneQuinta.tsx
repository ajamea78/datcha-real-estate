"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Sliders,
  Landmark,
  Building,
  Home as HomeIcon,
  ShoppingBag,
  Briefcase,
  Compass,
  MessageCircle,
  Sparkles,
  Waves,
  Clock,
  Layers,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";

export default function DirectionOneQuinta() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [fullscreenMenuOpen, setFullscreenMenuOpen] = useState(false);
  const [activeStorySlide, setActiveStorySlide] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState<string>("Prime Land Plots");
  const [selectedHorizon, setSelectedHorizon] = useState<string>("Capital Growth (3-5 Years)");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  // Initialize and sync data-theme on html root
  useEffect(() => {
    const saved = localStorage.getItem("datcha_theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const current = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
      if (current) setTheme(current);
    }

    const handleSync = () => {
      const t = (localStorage.getItem("datcha_theme") as "dark" | "light" | null) || "dark";
      setTheme(t);
    };
    window.addEventListener("storage", handleSync);
    return () => window.removeEventListener("storage", handleSync);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("datcha_theme", next);
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event("storage"));
  };

  const scrollHorizontal = (direction: "left" | "right") => {
    if (horizontalScrollRef.current) {
      const offset = direction === "left" ? -460 : 460;
      horizontalScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 7000);
  };

  // 5 Destinations for the Quinta da Malia-style Horizontal Story Slider
  const destinations = [
    {
      id: "el-gouna",
      num: "01",
      name: "El Gouna",
      sub: "Venetian Lagoons & Private Moorings",
      image: "/img-el-gouna.jpg",
      coordinates: "27.3949° N, 33.6766° E",
      flight: "4h 15m from London / Frankfurt",
      temp: "29°C Lagoon Temperature",
      stat: "+18% Annual Appreciation",
      narrative:
        "An internationally master-planned archipelago where avant-garde villas open directly onto private marine channels. Home to global festival lifestyle and golf sanctuaries.",
    },
    {
      id: "sahl-hasheesh",
      num: "02",
      name: "Sahl Hasheesh",
      sub: "12-Kilometer Protected Beachfront",
      image: "/img-sahl-hasheesh.jpg",
      coordinates: "27.0506° N, 33.8828° E",
      flight: "15m from Hurghada Airport",
      temp: "28°C Calm Bay Waters",
      stat: "100% Freehold Land Tenure",
      narrative:
        "A private gated bay surrounded by the Red Sea mountains. Classical Mediterranean boulevards, sunken coral gardens, and ultra-luxury beachfront compounds.",
    },
    {
      id: "hurghada",
      num: "03",
      name: "Hurghada",
      sub: "Urban Waterfront & Capital Gateway",
      image: "/img-hurghada.jpg",
      coordinates: "27.2579° N, 33.8116° E",
      flight: "Direct European Aviation Hub",
      temp: "Year-Round Coastal Sun",
      stat: "High Tourism Footfall",
      narrative:
        "The cosmopolitan center of Egypt's Red Sea Riviera. Offers prime commercial retail, waterfront penthouses along the Marina Promenade, and institutional offices.",
    },
    {
      id: "soma-bay",
      num: "04",
      name: "Soma Bay",
      sub: "Exclusive 10M m² Peninsula",
      image: "/img-soma-bay.jpg",
      coordinates: "26.8488° N, 33.9892° E",
      flight: "35m Coastal Highway",
      temp: "Pure Coastal Waters",
      stat: "Low-Density Zoning",
      narrative:
        "A secluded natural peninsula embraced on three sides by crystalline sea. Championship golf, spa sanctuaries, and exceptionally rare first-row sea-view plots.",
    },
    {
      id: "makadi-bay",
      num: "05",
      name: "Makadi Bay",
      sub: "Gentle Waters & Coral Lagoons",
      image: "/img-makadi-bay.jpg",
      coordinates: "26.9892° N, 33.8986° E",
      flight: "25m from Airport",
      temp: "Sheltered Marine Life",
      stat: "Turnkey Lifestyle Yield",
      narrative:
        "Serene coastal living protected by living coral reefs. Ideal for multi-generational vacation residences, boutique hospitality plots, and quiet estates.",
    },
  ];

  // 5 Curated Property Types for the Split-Screen Scroll
  const offerings = [
    {
      num: "I",
      title: "Signature Beachfront & Lagoon Villas",
      tag: "READY-TO-MOVE & OFF-PLAN SANCTUARIES",
      desc: "Stand-alone villas and twin houses in private gated communities across El Gouna lagoons and Sahl Hasheesh beachfronts with private infinity pools and dedicated marine moorings.",
      meta: "Private Moorings · 100% Freehold · 3 to 6 Bedrooms",
      img: "/img-luxury-villa.jpg",
    },
    {
      num: "II",
      title: "Sea-View Penthouses & Duplexes",
      tag: "HIGH-TURNOVER WATERFRONT YIELD",
      desc: "Curated 1- to 4-bedroom residences boasting panoramic Red Sea horizons, rooftop solariums, and managed holiday rental programs yielding 12–16% net in EUR/USD.",
      meta: "Full Sea & Lagoon Views · Turnkey Furnished · Managed Rental Pools",
      img: "/img-hero-ocean.jpg",
    },
    {
      num: "III",
      title: "Primary Developer Off-Plan Enclaves",
      tag: "5–7 YEAR PAYMENT PLANS @ 0% INTEREST",
      desc: "Direct access to master-developer releases in El Gouna, Somabay, and ERC Sahl Hasheesh with 10–15% down payments and flexible 5- to 7-year quarterly installments.",
      meta: "0% Interest · Direct Developer Pricing · Capital Growth Buffer",
      img: "/img-penthouse-interior.jpg",
    },
    {
      num: "IV",
      title: "Prime Freehold Land Reserves",
      tag: "STRATEGIC CAPITAL & PRIVATE BUILD",
      desc: "Freehold and fully zoned plots in prime expansion corridors of Somabay, Sahl Hasheesh, and Hurghada Waterfront with verified municipal utility connections and approved build envelopes.",
      meta: "Verified Freehold · Zoned Residential/Boutique Hospitality · Clear Title Deeds",
      img: "/img-private-island.jpg",
    },
    {
      num: "V",
      title: "Commercial Promenade & Marina Retail",
      tag: "HIGH FOOTFALL TOURISM CORRIDORS",
      desc: "Prime retail showrooms, beach club footprints, and restaurant concessions along bustling marina promenades with blue-chip international and domestic tenant covenants.",
      meta: "Marina Promenade Locations · High Tourist Traffic · Commercial Leases",
      img: "/img-hurghada.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans relative bg-grain transition-colors duration-500">
      {/* Ambient Breathing Glow Orbs */}
      <div className="fixed top-1/4 -left-48 w-96 h-96 rounded-full bg-[#C0673F]/15 blur-[120px] pointer-events-none animate-ambient-glow" />
      <div className="fixed bottom-1/3 -right-48 w-[32rem] h-[32rem] rounded-full bg-[#DCC7B1]/10 blur-[150px] pointer-events-none animate-ambient-glow" />

      {/* ─── ULTRA-MINIMALIST FLOATING BAR (LENVAL + QUINTA DA MALIA STYLE) ─── */}
      <header className="fixed top-6 left-0 right-0 z-50 px-6 sm:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-11 w-40 sm:w-48 transition-transform group-hover:scale-105">
              <Image
                src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
                alt="Datcha Real Estate Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Minimal Controls Capsule */}
          <div
            className="flex items-center gap-3 backdrop-blur-2xl p-1.5 rounded-full border shadow-2xl transition-colors duration-300"
            style={{
              backgroundColor: "var(--t-nav-bg)",
              borderColor: "var(--t-border)",
            }}
          >
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{
                backgroundColor: "var(--t-surface)",
                color: "var(--t-text)",
              }}
              title="Toggle Light / Dark Mode"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-[#C0673F]" /> : <Moon className="w-4 h-4 text-[#C0673F]" />}
            </button>

            {/* Quick Consultation CTA */}
            <a
              href="#dossier"
              className="hidden sm:inline-flex px-5 py-2 rounded-full bg-[#C0673F] hover:bg-[#A8552F] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#C0673F]/30"
            >
              Contact Us
            </a>

            {/* Fullscreen Hidden Drawer Menu Trigger (Lenval Style) */}
            <button
              onClick={() => setFullscreenMenuOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:opacity-90"
              style={{
                backgroundColor: "var(--t-surface)",
                color: "var(--t-text)",
              }}
            >
              <Menu className="w-4 h-4" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          FULLSCREEN CURATED DRAWER MENU (LENVAL PROPERTIES STYLE)
      ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {fullscreenMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-[#0c1214]/98 backdrop-blur-3xl flex flex-col justify-between p-8 sm:p-20 text-[#F7F3ED]"
          >
            {/* Top Bar of Drawer */}
            <div className="flex items-center justify-between border-b border-white/10 pb-8">
              <div className="relative h-10 w-40">
                <Image src="/logo-light.png" alt="Datcha Logo" fill className="object-contain object-left" />
              </div>
              <button
                onClick={() => setFullscreenMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#C0673F] transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Massive Typographic Navigation Links */}
            <div className="my-auto max-w-4xl space-y-6 sm:space-y-8">
              {[
                { num: "01", name: "Home", sub: "Red Sea Coastline Overview", href: "#hero" },
                { num: "02", name: "Destinations", sub: "Hurghada · El Gouna · Sahl Hasheesh · Soma Bay · Makadi Bay", href: "#destinations" },
                { num: "03", name: "Properties for Sale", sub: "Villas · Apartments · Penthouses · Land · Off-Plan", href: "#portfolio" },
                { num: "04", name: "Why Datcha & Legal Guide", sub: "Foreign Ownership (Law 230/1996) & Freehold Title Deeds", href: "#philosophy" },
                { num: "05", name: "Contact & VIP Viewing Trip", sub: "Schedule a Consultation or 3-Day Hosted Tour", href: "#dossier" },
              ].map((link, idx) => (
                <div key={idx} className="group border-b border-white/5 pb-4">
                  <a
                    href={link.href}
                    onClick={() => setFullscreenMenuOpen(false)}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group-hover:translate-x-2 transition-transform"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[#C0673F] tracking-widest">{link.num}</span>
                      <span className="text-2xl sm:text-5xl font-serif font-light tracking-tight group-hover:text-[#C0673F] transition-colors">{link.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs sm:text-sm text-[#8A8F93] font-light">{link.sub}</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C0673F] hidden sm:block" />
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom Footer Info with Direct Contact */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-[#8A8F93] font-mono gap-4">
              <div className="flex flex-wrap items-center gap-6 text-[#DCC7B1]">
                <a href="tel:+201234567990" className="inline-flex items-center gap-2 hover:text-[#C0673F] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C0673F]" />
                  <span>+20 123 456 7990</span>
                </a>
                <a href="https://wa.me/201234567990" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#25D366] transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Concierge</span>
                </a>
                <a href="mailto:concierge@datcharealestate.com" className="inline-flex items-center gap-2 hover:text-[#C0673F] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#C0673F]" />
                  <span>concierge@datcharealestate.com</span>
                </a>
              </div>
              <span>HURGHADA · EL GOUNA · SAHL HASHEESH · SOMA BAY</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: FULLSCREEN MONUMENTAL HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden">
        {/* High-Res Fallback Architecture & Ocean Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img-hero-ocean.jpg"
            alt="Red Sea Coastal Architecture"
            fill
            priority
            className="object-cover scale-105 filter brightness-[0.55] contrast-[1.1]"
          />
          {/* Full-bleed Aerial Ocean Drone Video */}
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-shot-of-blue-ocean-waves-1260-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0c1214] pointer-events-none" />
        </div>

        {/* Hero Typography & Curated Overture */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-16 text-center my-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#C0673F] mb-6 px-5 py-2 rounded-full bg-black/70 border border-[#C0673F]/40 backdrop-blur-xl"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Red Sea Luxury Real Estate & Investments</span>
          </motion.div>

          <motion.h1
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F7F3ED] tracking-tight leading-[1.02] mb-6 font-serif"
          >
            More Than Properties. <br />
            <span className="italic font-light text-[#DCC7B1] block mt-1">
              A Lifestyle by the Red Sea.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="max-w-2xl mx-auto text-base sm:text-xl text-[#DCC7B1]/90 font-light mb-10 tracking-wide leading-relaxed"
          >
            Homes. Investments. A Brighter Tomorrow. Helping you find and secure premier waterfront villas, luxury apartments, and prime investment properties along Egypt&apos;s Red Sea coast.
          </motion.p>

          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#destinations"
              className="w-full sm:w-auto px-8 py-4 bg-[#C0673F] hover:bg-[#A8552F] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-2xl shadow-[#C0673F]/40 transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#dossier"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-[#C0673F] text-[#F7F3ED] text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md hover:bg-white/5 transition-all"
            >
              Contact Our Advisors
            </a>
          </motion.div>
        </div>

        {/* Ambient Scroll Cue (Elevated Safely Above Bottom Horizon) */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-[#8A8F93] text-[10px] tracking-[0.25em] uppercase font-mono pb-6 pointer-events-none">
          <span>Scroll to Explore</span>
          <div className="w-[1.5px] h-6 bg-gradient-to-b from-[#C0673F] to-transparent rounded-full animate-pulse" />
        </div>

        {/* ─── CONTINUOUS RUNNING MARQUEE TICKER (INTEGRATED SEAMLESSLY AT HERO BASE) ─── */}
        <div className="relative z-10 border-t border-white/10 bg-[#0c1214]/90 backdrop-blur-md py-3.5 overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 text-[11px] font-mono uppercase tracking-[0.25em] text-[#DCC7B1]/90">
            <span>✦ EL GOUNA WATERFRONT</span>
            <span>✦ SAHL HASHEESH 12KM BAY</span>
            <span>✦ SOMA BAY REEF PENINSULA</span>
            <span>✦ HURGHADA URBAN MARINA</span>
            <span>✦ MAKADI CORAL LAGOONS</span>
            <span>✦ 100% FOREIGN FREEHOLD (LAW 230/1996)</span>
            <span>✦ DEVELOPER PAYMENT PLANS UP TO 7 YRS @ 0%</span>
            <span>✦ MULTILINGUAL ADVISORY: EN · AR · RU · DE</span>
            <span>✦ EL GOUNA WATERFRONT</span>
            <span>✦ SAHL HASHEESH 12KM BAY</span>
            <span>✦ SOMA BAY REEF PENINSULA</span>
            <span>✦ HURGHADA URBAN MARINA</span>
            <span>✦ MAKADI CORAL LAGOONS</span>
            <span>✦ 100% FOREIGN FREEHOLD (LAW 230/1996)</span>
            <span>✦ DEVELOPER PAYMENT PLANS UP TO 7 YRS @ 0%</span>
          </div>
        </div>
      </section>

      {/* ─── QUINTA DA MALIA ARCHITECTURAL CURVED ARCH TRANSITION ─── */}
      <div className="relative w-full h-14 sm:h-20 pointer-events-none -mt-0.5 overflow-hidden" style={{ backgroundColor: "#0c1214" }}>
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full block">
          <path d="M0,0 Q50,22 100,0 L100,20 L0,20 Z" style={{ fill: "var(--t-bg)" }} />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: ABOUT DATCHA REAL ESTATE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="text-xs font-mono text-[#C0673F] uppercase tracking-[0.25em] mb-8 flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#C0673F]" />
          <span>About Datcha Real Estate</span>
        </div>

        <h2 className="text-3xl sm:text-6xl md:text-7xl font-light font-serif tracking-tight leading-[1.08] mb-12" style={{ color: "var(--t-text)" }}>
          We don&apos;t just sell property. We connect discerning buyers with <span className="italic text-[#C0673F]">exceptional coastal homes</span> and sound investments along the Red Sea.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t text-sm leading-relaxed" style={{ borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
          <div>
            <span className="text-2xl font-serif text-[#C0673F] block mb-3">01 / Prime Locations</span>
            <p className="font-light leading-relaxed">Direct access to prime beachfront and lagoon plots in El Gouna, Sahl Hasheesh, and Somabay with clear legal status and high appreciation potential.</p>
          </div>
          <div>
            <span className="text-2xl font-serif text-[#C0673F] block mb-3">02 / Quality Properties</span>
            <p className="font-light leading-relaxed">Every villa, apartment, and penthouse is carefully selected for build quality, unobstructed views, and strong rental return or resale value.</p>
          </div>
          <div>
            <span className="text-2xl font-serif text-[#C0673F] block mb-3">03 / Full Legal Support</span>
            <p className="font-light leading-relaxed">Our bilingual legal team assists with Egyptian Law 230/1996 compliance, title deed registration, and contract review for complete peace of mind.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: HORIZONTAL PINNED SLIDER (FEATURED DESTINATIONS)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="destinations" className="py-24 border-t" style={{ backgroundColor: "var(--t-bg-alt)", borderColor: "var(--t-border)" }}>
        <div className="px-6 sm:px-12 max-w-7xl mx-auto mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C0673F] block mb-2">Featured Destinations</span>
            <h2 className="text-3xl sm:text-6xl font-light font-serif" style={{ color: "var(--t-text)" }}>
              Explore Egypt&apos;s <em>Red Sea Riviera.</em>
            </h2>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollHorizontal("left")}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:bg-[#C0673F] hover:text-white hover:border-[#C0673F]"
              style={{
                borderColor: "var(--t-border)",
                color: "var(--t-text)",
                backgroundColor: "var(--t-card-bg)",
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollHorizontal("right")}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:bg-[#C0673F] hover:text-white hover:border-[#C0673F]"
              style={{
                borderColor: "var(--t-border)",
                color: "var(--t-text)",
                backgroundColor: "var(--t-card-bg)",
              }}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={horizontalScrollRef}
          className="flex gap-8 overflow-x-auto px-6 sm:px-12 pb-12 pt-4 no-scrollbar scroll-smooth"
        >
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="flex-shrink-0 w-[340px] sm:w-[480px] rounded-[2.5rem] overflow-hidden border group flex flex-col justify-between shadow-2xl transition-all duration-300"
              style={{
                borderColor: "var(--t-border)",
                backgroundColor: "var(--t-card-bg)",
              }}
            >
              {/* Image Frame */}
              <div className="relative h-[340px] sm:h-[400px] overflow-hidden">
                <Image src={dest.image} alt={dest.name} fill className="object-cover img-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
                
                {/* Coordinates Tag */}
                <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-[#DCC7B1] backdrop-blur-md">
                  {dest.coordinates}
                </div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-2xl font-serif text-[#C0673F]">
                  {dest.num}
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-serif font-light mb-1">{dest.name}</h3>
                  <p className="text-xs text-[#DCC7B1] font-light">{dest.sub}</p>
                </div>
              </div>

              {/* Data Strip */}
              <div className="p-8 flex flex-col justify-between flex-grow" style={{ backgroundColor: "var(--t-card-bg)" }}>
                <p className="text-xs leading-relaxed mb-6 font-light" style={{ color: "var(--t-text-muted)" }}>{dest.narrative}</p>
                
                <div className="pt-4 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: "var(--t-border)" }}>
                  <span className="text-[#C0673F] font-bold">{dest.stat}</span>
                  <a
                    href="#dossier"
                    className="inline-flex items-center gap-1.5 hover:text-[#C0673F] transition-colors font-sans uppercase font-bold text-[11px]"
                    style={{ color: "var(--t-text)" }}
                  >
                    <span>View Properties</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── QUINTA DA MALIA ORGANIC SVG CURVE (INVERSE ARCH) ─── */}
      <div className="relative w-full h-14 sm:h-20 pointer-events-none -mt-1 overflow-hidden" style={{ backgroundColor: "var(--t-bg-alt)" }}>
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full block">
          <path d="M0,20 Q50,0 100,20 L100,20 L0,20 Z" style={{ fill: "var(--t-bg)" }} />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: PROPERTIES BY CATEGORY
      ═══════════════════════════════════════════════════════════════ */}
      <section id="portfolio" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C0673F] block mb-3">Featured Properties</span>
          <h2 className="text-3xl sm:text-6xl font-light font-serif mb-4" style={{ color: "var(--t-text)" }}>
            Explore By Property <em>Type.</em>
          </h2>
          <p className="text-sm font-light leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
            Carefully vetted for legal ownership, building licenses, and strong investment value. From luxury waterfront villas to flexible developer payment plans.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Asset Classes Accordion / List */}
          <div className="lg:col-span-6 space-y-6">
            {offerings.map((item, idx) => {
              const isActive = activeStorySlide === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStorySlide(idx)}
                  onMouseEnter={() => setActiveStorySlide(idx)}
                  className={`p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#C0673F] shadow-2xl scale-[1.015] ring-1 ring-[#C0673F]/40"
                      : "hover:border-[#C0673F]/50"
                  }`}
                  style={{
                    backgroundColor: isActive ? "var(--t-card-hover)" : "var(--t-card-bg)",
                    borderColor: isActive ? "#C0673F" : "var(--t-border)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#C0673F] font-bold flex items-center gap-2">
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#C0673F] animate-ping" />}
                      {item.tag}
                    </span>
                    <span className="text-lg font-serif font-light" style={{ color: "var(--t-text-muted)" }}>CATEGORY {item.num}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-light mb-3" style={{ color: "var(--t-text)" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed font-light mb-4" style={{ color: "var(--t-text-muted)" }}>{item.desc}</p>
                  <div className="text-[11px] font-mono pt-3 border-t flex items-center justify-between" style={{ borderColor: "var(--t-border)", color: "var(--t-text-sub)" }}>
                    <span>{item.meta}</span>
                    <span className="text-xs text-[#C0673F] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Morphing Photography Plate */}
          <div
            className="lg:col-span-6 sticky top-28 h-[550px] sm:h-[680px] rounded-[3rem] overflow-hidden border shadow-2xl"
            style={{ borderColor: "var(--t-border)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStorySlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={offerings[activeStorySlide].img}
                  alt={offerings[activeStorySlide].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                <div className="absolute top-8 right-8 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-[#DCC7B1]">
                  FEATURED PROPERTY TYPE {offerings[activeStorySlide].num}
                </div>
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C0673F] block mb-1">
                    {offerings[activeStorySlide].tag}
                  </span>
                  <h4 className="text-3xl font-serif font-light mb-2">{offerings[activeStorySlide].title}</h4>
                  <a
                    href="#dossier"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DCC7B1] hover:text-[#C0673F] transition-colors mt-2"
                  >
                    <span>Inquire About This Property</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: WHY CHOOSE DATCHA & LEGAL CERTAINTY
      ═══════════════════════════════════════════════════════════════ */}
      <section id="philosophy" className="py-24 px-6 sm:px-12 border-t" style={{ backgroundColor: "var(--t-bg-alt)", borderColor: "var(--t-border)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C0673F] block mb-3">Why Choose Datcha</span>
              <h2 className="text-3xl sm:text-6xl font-light font-serif mb-6 leading-tight" style={{ color: "var(--t-text)" }}>
                Safe Investments. <br />
                <span className="italic text-[#C0673F]">Legal Certainty.</span>
              </h2>
              <p className="text-sm leading-relaxed font-light mb-8" style={{ color: "var(--t-text-muted)" }}>
                Purchasing luxury coastal property in Egypt requires absolute title clarity, statutory foreign ownership compliance, and trusted local escrow. We represent clients from contract vetting to final deed registration.
              </p>
              <div
                className="p-6 rounded-2xl border text-xs font-light leading-relaxed"
                style={{
                  backgroundColor: "var(--t-card-bg)",
                  borderColor: "var(--t-border)",
                  color: "var(--t-text-sub)",
                }}
              >
                Client advisory conducted natively in <strong>English, Arabic, Russian, and German</strong>. No misinterpretations, complete contractual transparency.
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { roman: "I", title: "15+ Years Regional Focus", desc: "Unmatched daily focus on El Gouna, Sahl Hasheesh, and Soma Bay. Direct access to developer allocations before public release." },
                { roman: "II", title: "Law 230/1996 Freehold", desc: "Statutory foreign ownership compliance guaranteeing full, unencumbered freehold title deeds without local sponsor requirements." },
                { roman: "III", title: "Shahr El Akari Notarization", desc: "Comprehensive registration at the Egyptian Notary Public, court validity proceedings (Sehat W Nafaz), and escrow oversight." },
                { roman: "IV", title: "Currency & Repatriation Security", desc: "Transparent purchase options in EUR, USD, GBP, or EGP installments with 100% unrestricted future capital repatriation." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-[2rem] border hover:border-[#C0673F]/60 transition-all"
                  style={{
                    backgroundColor: "var(--t-card-bg)",
                    borderColor: "var(--t-border)",
                  }}
                >
                  <span className="text-xs font-mono text-[#C0673F] font-bold block mb-3">PILLAR {item.roman}</span>
                  <h3 className="text-xl font-serif font-light mb-2" style={{ color: "var(--t-text)" }}>{item.title}</h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with Datcha was seamless. As an investor from Moscow, purchasing a sea-view apartment in El Gouna felt effortless. Their Russian-speaking legal advisor reviewed every clause.",
                client: "Mikhail & Elena V.",
                loc: "Moscow, Russia",
                deal: "Lagoon Penthouse, El Gouna",
              },
              {
                quote: "Finding our retirement home in Sahl Hasheesh could have been daunting, but Datcha's clarity and patience stood out. They treated us like family and ensured clean title deeds.",
                client: "David Harrington",
                loc: "London, UK",
                deal: "Beachfront Villa, Sahl Hasheesh",
              },
              {
                quote: "تجربتنا مع فريق داتشا كانت نموذجية في الأمانة والاحتراف. استثمرنا في أرض تجارية بالغردقة وكانت كل الإجراءات القانونية موثقة بدقة تامة.",
                client: "م. طارق عبد العزيز",
                loc: "Cairo, Egypt",
                deal: "Commercial Plot, Hurghada",
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2rem] border flex flex-col justify-between"
                style={{
                  backgroundColor: "var(--t-card-bg)",
                  borderColor: "var(--t-border)",
                }}
              >
                <div>
                  <div className="text-4xl font-serif text-[#C0673F] mb-4">“</div>
                  <p className="text-sm italic font-light leading-relaxed mb-6" style={{ color: "var(--t-text)" }}>{testi.quote}</p>
                </div>
                <div className="pt-4 border-t" style={{ borderColor: "var(--t-border)" }}>
                  <div className="text-sm font-serif font-bold" style={{ color: "var(--t-text)" }}>{testi.client}</div>
                  <div className="text-xs text-[#C0673F]">{testi.deal}</div>
                  <div className="text-[10px] font-mono" style={{ color: "var(--t-text-muted)" }}>{testi.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: CONTACT & VIP DISCOVERY TOUR
      ═══════════════════════════════════════════════════════════════ */}
      <section id="dossier" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C0673F] block mb-3">Get In Touch</span>
            <h2 className="text-3xl sm:text-6xl font-light font-serif mb-6 leading-tight" style={{ color: "var(--t-text)" }}>
              Find Your Dream <em>Property.</em>
            </h2>
            <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "var(--t-text-muted)" }}>
              Whether you are looking for a holiday home, a permanent residence, or a high-yield investment along the Red Sea, our team will guide you every step of the way.
            </p>

            {/* VIP Discovery Tour High-Intent Card */}
            <div
              className="p-6 rounded-3xl border mb-8 shadow-xl transition-all"
              style={{
                backgroundColor: "var(--t-card-bg)",
                borderColor: "var(--t-border-hi)",
              }}
            >
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase font-bold mb-2 text-[#C0673F]">
                <Sparkles className="w-3.5 h-3.5" />
                COMPLIMENTARY VIP SERVICE
              </div>
              <h4 className="font-serif text-lg mb-2" style={{ color: "var(--t-text)" }}>Complimentary 3-Day Property Viewing Trip</h4>
              <p className="text-xs leading-relaxed font-light mb-4" style={{ color: "var(--t-text-sub)" }}>
                Airport pick-up, private chauffeur, curated visits to top developments in El Gouna, Sahl Hasheesh, and Somabay, plus consultation with our legal advisor.
              </p>
              <a
                href="https://wa.me/201234567990?text=Hello%20Datcha,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20VIP%20Discovery%20Tour."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#C0673F] hover:underline uppercase tracking-wider font-semibold"
              >
                Book Your Viewing Trip →
              </a>
            </div>

            <div className="space-y-4 text-xs font-mono mb-10" style={{ color: "var(--t-text-sub)" }}>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C0673F]" />
                <span>+20 123 456 7990 (Direct & WhatsApp)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C0673F]" />
                <span>concierge@datcharealestate.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C0673F]" />
                <span>Hurghada Marina Promenade, Red Sea Governorate</span>
              </div>
            </div>

            <a
              href="https://wa.me/201234567990?text=Hello%20Datcha%20Real%20Estate,%20I%20am%20inquiring%20about%20Red%20Sea%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BA59] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>

          <div className="lg:col-span-7">
            <div
              className="p-8 sm:p-14 rounded-[3rem] border shadow-2xl"
              style={{
                backgroundColor: "var(--t-card-bg)",
                borderColor: "var(--t-border)",
              }}
            >
              {formSubmitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C0673F]/20 border border-[#C0673F] flex items-center justify-center text-[#C0673F] mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-light font-serif mb-3" style={{ color: "var(--t-text)" }}>Inquiry Received</h3>
                  <p className="text-sm max-w-md mx-auto font-light leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                    Thank you for reaching out. One of our property advisors will get in touch with you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Asset Selection Chips */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--t-text)" }}>
                      1. Property Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Beachfront & Lagoon Villas", "Sea-View Penthouses", "Primary Off-Plan (5-7 Yr Installments)", "Freehold Land Reserves", "Commercial Promenade"].map((asset) => (
                        <button
                          type="button"
                          key={asset}
                          onClick={() => setSelectedAsset(asset)}
                          className={`px-4 py-2 rounded-full text-xs transition-all font-medium border ${
                            selectedAsset === asset
                              ? "bg-[#C0673F] text-white border-[#C0673F] shadow-sm"
                              : "border-[var(--t-border)] text-[var(--t-text-muted)] hover:text-[var(--t-text)] hover:border-[#C0673F]/40 bg-[var(--t-surface)]"
                          }`}
                        >
                          {asset}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Horizon Selection Chips */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--t-text)" }}>
                      2. Purpose of Purchase
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Private Family Residence", "Capital Growth (3-5 Years)", "Immediate Rental Yield", "Commercial Enterprise"].map((hor) => (
                        <button
                          type="button"
                          key={hor}
                          onClick={() => setSelectedHorizon(hor)}
                          className={`px-4 py-2 rounded-full text-xs transition-all font-medium border ${
                            selectedHorizon === hor
                              ? "bg-[#C0673F] text-white border-[#C0673F] shadow-sm"
                              : "border-[var(--t-border)] text-[var(--t-text-muted)] hover:text-[var(--t-text)] hover:border-[#C0673F]/40 bg-[var(--t-surface)]"
                          }`}
                        >
                          {hor}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t" style={{ borderColor: "var(--t-border)" }}>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-5 py-3.5 rounded-2xl text-sm outline-none border focus:border-[#C0673F] transition-all"
                        style={{
                          backgroundColor: "var(--t-input-bg)",
                          borderColor: "var(--t-border)",
                          color: "var(--t-text)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="client@investments.com"
                        className="w-full px-5 py-3.5 rounded-2xl text-sm outline-none border focus:border-[#C0673F] transition-all"
                        style={{
                          backgroundColor: "var(--t-input-bg)",
                          borderColor: "var(--t-border)",
                          color: "var(--t-text)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>Phone / WhatsApp *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+20 / +44 / +7 / +49..."
                        className="w-full px-5 py-3.5 rounded-2xl text-sm outline-none border focus:border-[#C0673F] transition-all"
                        style={{
                          backgroundColor: "var(--t-input-bg)",
                          borderColor: "var(--t-border)",
                          color: "var(--t-text)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>Preferred Language</label>
                      <select
                        className="w-full px-5 py-3.5 rounded-2xl text-sm outline-none border focus:border-[#C0673F] transition-all"
                        style={{
                          backgroundColor: "var(--t-input-bg)",
                          borderColor: "var(--t-border)",
                          color: "var(--t-text)",
                        }}
                      >
                        <option>English</option>
                        <option>العربية (Arabic)</option>
                        <option>Русский (Russian)</option>
                        <option>Deutsch (German)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>Property Requirements & Budget</label>
                    <textarea
                      rows={3}
                      placeholder="Please specify target budget, preferred location (El Gouna, Sahl Hasheesh, etc.), or specific waterfront requirements..."
                      className="w-full px-5 py-3.5 rounded-2xl text-sm outline-none border focus:border-[#C0673F] transition-all resize-none"
                      style={{
                        backgroundColor: "var(--t-input-bg)",
                        borderColor: "var(--t-border)",
                        color: "var(--t-text)",
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C0673F] hover:bg-[#A8552F] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-xl shadow-[#C0673F]/35 hover:scale-[1.01]"
                  >
                    Send Inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SITE FOOTER ─── */}
      <footer className="py-16 px-6 sm:px-12 border-t mt-auto" style={{ backgroundColor: "var(--t-footer-bg)", borderColor: "var(--t-border)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative h-12 w-48">
            <Image src="/logo-light.png" alt="Datcha Real Estate" fill className="object-contain object-left" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.2em] text-[#8A8F93]">
            <a href="#hero" className="hover:text-[#C0673F] transition-colors">Home</a>
            <a href="#destinations" className="hover:text-[#C0673F] transition-colors">Destinations</a>
            <a href="#portfolio" className="hover:text-[#C0673F] transition-colors">Properties</a>
            <a href="#philosophy" className="hover:text-[#C0673F] transition-colors">Why Datcha</a>
            <a href="#dossier" className="hover:text-[#C0673F] transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right text-xs text-[#8A8F93] font-mono">
            <p>© 2026 Datcha Real Estate. All rights reserved.</p>
            <p className="mt-1 text-[11px] text-[#8A8F93]/70">datcharealestate.com · Red Sea Governorate, Egypt</p>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP ─── */}
      <a
        href="https://wa.me/201234567990?text=Hello%20Datcha%20Real%20Estate"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA59] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        title="Direct WhatsApp Concierge"
        aria-label="WhatsApp Contact"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
