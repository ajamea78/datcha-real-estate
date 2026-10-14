"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
} from "lucide-react";

export default function DirectionTwoAtelier() {
  const [styleMode, setStyleMode] = useState<"A" | "B">("A"); // Option A: Cinematic Dramatic | Option B: Editorial Asymmetric Split
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync data-theme on html root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 font-sans selection:bg-[#C0673F] selection:text-white">
      {/* ─── SITE NAVIGATION BAR (CLEAN MODERN ATELIER) ─── */}
      <header className="sticky top-4 z-50 px-4 sm:px-8 py-2 transition-all duration-300">
        <nav
          className="max-w-7xl mx-auto px-6 sm:px-8 py-3.5 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-xl backdrop-blur-2xl"
          style={{
            backgroundColor: "var(--t-nav-bg)",
            border: "1px solid var(--t-border)",
            boxShadow: theme === "dark" ? "0 20px 40px -15px rgba(0,0,0,0.5)" : "0 20px 40px -15px rgba(192,103,63,0.08)",
          }}
        >
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-10 w-36 sm:w-44 transition-transform group-hover:scale-[1.02]">
              <Image
                src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
                alt="Datcha Real Estate Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--t-text-muted)" }}>
            <a href="#destinations" className="hover:text-[#C0673F] transition-colors">Destinations</a>
            <a href="#offerings" className="hover:text-[#C0673F] transition-colors">Portfolio</a>
            <a href="#why-us" className="hover:text-[#C0673F] transition-colors">Why Datcha</a>
            <a href="#testimonials" className="hover:text-[#C0673F] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#C0673F] transition-colors">Contact</a>
          </div>

          {/* Atelier Style & Theme Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center bg-black/30 p-1 rounded-full border border-white/10">
              <button
                onClick={() => setStyleMode("A")}
                className={`px-3 py-1 rounded-full transition-all text-[11px] font-semibold ${
                  styleMode === "A"
                    ? "bg-[#C0673F] text-white shadow-md shadow-[#C0673F]/20"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Cinematic
              </button>
              <button
                onClick={() => setStyleMode("B")}
                className={`px-3 py-1 rounded-full transition-all text-[11px] font-semibold ${
                  styleMode === "B"
                    ? "bg-[#C0673F] text-white shadow-md shadow-[#C0673F]/20"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Editorial
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 hover:border-[#C0673F] text-white/70 hover:text-white transition-all bg-white/5"
              title="Toggle Light/Dark"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-[#C0673F]" /> : <Moon className="w-3.5 h-3.5 text-[#C0673F]" />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#C0673F] hover:bg-[#A8552F] text-white transition-all rounded-full shadow-lg shadow-[#C0673F]/25 hover:scale-[1.02]"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-inherit rounded-full hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-2 max-w-7xl mx-auto px-6 py-6 rounded-2xl border flex flex-col gap-4 shadow-2xl backdrop-blur-2xl"
            style={{
              backgroundColor: "var(--t-nav-bg)",
              borderColor: "var(--t-border)",
            }}
          >
            <a
              href="#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider py-2 border-b border-white/5"
            >
              Destinations
            </a>
            <a
              href="#offerings"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider py-2 border-b border-white/5"
            >
              Portfolio
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider py-2 border-b border-white/5"
            >
              Why Datcha
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider py-2 border-b border-white/5"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider py-2"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 bg-[#C0673F] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md"
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION (ORGANIC ARCHITECTURAL SILHOUETTES)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative px-4 sm:px-8 pt-2 pb-8 transition-all duration-500">
        {styleMode === "A" ? (
          /* ── OPTION A: CINEMATIC DRAMATIC FULL-BLEED WITH SCULPTED RADIUS ── */
          <div className="relative min-h-[85vh] rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center overflow-hidden shadow-2xl border border-white/10">
            {/* Fallback high-res ocean photography */}
            <Image
              src="/img-hero-ocean.jpg"
              alt="Red Sea Coastline"
              fill
              priority
              className="object-cover scale-105 filter brightness-[0.55]"
            />
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen scale-105 transition-transform duration-1000"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-aerial-shot-of-blue-ocean-waves-1260-large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1F2A2E]/80 via-[#1F2A2E]/40 to-[#1F2A2E]/95 pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
              <span className="inline-flex items-center gap-2 text-[#C0673F] text-xs font-bold uppercase tracking-[0.25em] mb-6 px-5 py-2 rounded-full bg-[#1F2A2E]/60 border border-[#C0673F]/40 backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Red Sea, Egypt · Hurghada · El Gouna · Sahl Hasheesh · Soma Bay
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F7F3ED] tracking-tight leading-[1.08] mb-6 font-serif">
                More than properties. <br />
                <span className="italic font-light text-[#DCC7B1]">
                  A lifestyle by the Red Sea.
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#DCC7B1]/90 font-light mb-10 tracking-wide leading-relaxed">
                Homes. Investments. A Brighter Tomorrow. Prime coastal land, sea-view residences,
                and high-return commercial opportunities tailored to your life vision.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 bg-[#C0673F] hover:bg-[#A8552F] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-full shadow-xl shadow-[#C0673F]/30 flex items-center justify-center gap-3 group hover:scale-[1.02]"
                >
                  <span>Explore Offerings</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#why-us"
                  className="w-full sm:w-auto px-8 py-4 border border-[#DCC7B1]/40 hover:border-[#C0673F] text-[#F7F3ED] text-xs font-bold uppercase tracking-widest transition-all rounded-full backdrop-blur-md hover:bg-white/5"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8A8F93] text-[10px] tracking-widest uppercase">
              <span>Scroll</span>
              <div className="w-[1.5px] h-10 bg-gradient-to-b from-[#C0673F] to-transparent rounded-full animate-pulse" />
            </div>
          </div>
        ) : (
          /* ── OPTION B: EDITORIAL ASYMMETRIC SPLIT WITH SOFTENED PILL FRAMES ── */
          <div
            className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border shadow-2xl"
            style={{ borderColor: "var(--t-border)", backgroundColor: "var(--t-card-bg)" }}
          >
            <div className="lg:col-span-7 px-8 sm:px-16 py-16 sm:py-24 flex flex-col justify-center">
              <div className="max-w-2xl">
                <span className="text-[#C0673F] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                  High-End Architectural & Coastal Brokerage
                </span>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-6 font-serif" style={{ color: "var(--t-text)" }}>
                  MORE THAN <br />
                  <span className="text-[#C0673F]">PROPERTIES.</span> <br />
                  <span className="italic font-light" style={{ color: "var(--t-text-sub)" }}>
                    A Lifestyle by the Red Sea.
                  </span>
                </h1>
                <p className="text-sm sm:text-base leading-relaxed mb-8 border-l-2 border-[#C0673F] pl-4" style={{ color: "var(--t-text-muted)" }}>
                  Curating Egypt&apos;s most desirable coastal land parcels, waterfront residences, and bespoke commercial investments with absolute legal security and multi-lingual transparency.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-[#C0673F] hover:bg-[#A8552F] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-[#C0673F]/25 transition-all hover:scale-[1.02]"
                  >
                    Consult Our Advisors
                  </a>
                  <a
                    href="#destinations"
                    className="px-6 py-4 text-xs font-bold uppercase tracking-widest underline underline-offset-8 transition-colors"
                    style={{ color: "var(--t-text)" }}
                  >
                    View Destinations →
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-auto overflow-hidden p-6 sm:p-8 flex items-end">
              <Image
                src="/brand-hero-pool.jpg"
                alt="Datcha Red Sea Architecture"
                fill
                className="object-cover rounded-[1.5rem]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A2E]/85 via-black/20 to-transparent pointer-events-none" />
              <div className="relative z-10 w-full p-6 sm:p-8 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/15 text-white shadow-2xl">
                <p className="text-xs font-bold text-[#C0673F] uppercase tracking-wider mb-1">
                  Featured Coastal Corridor
                </p>
                <p className="text-xl font-serif font-bold">El Gouna & Sahl Hasheesh Coast</p>
                <p className="text-xs text-[#DCC7B1] mt-1 font-light">
                  5 Key Hotspots · 4 Global Languages · 100% Legal Certainty
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ─── PROOF & METRICS STRIP (FLOATING ROUNDED CAPSULE) ─── */}
      <section className="px-4 sm:px-8 py-4">
        <div
          className="max-w-7xl mx-auto py-8 sm:py-10 px-6 sm:px-12 rounded-3xl border shadow-lg"
          style={{
            backgroundColor: "var(--t-card-bg)",
            borderColor: "var(--t-border)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#C0673F] font-serif">500+</div>
              <div className="text-xs uppercase tracking-widest font-semibold mt-1" style={{ color: "var(--t-text-muted)" }}>
                Deals Closed
              </div>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#C0673F] font-serif">15+</div>
              <div className="text-xs uppercase tracking-widest font-semibold mt-1" style={{ color: "var(--t-text-muted)" }}>
                Years Experience
              </div>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#C0673F] font-serif">5</div>
              <div className="text-xs uppercase tracking-widest font-semibold mt-1" style={{ color: "var(--t-text-muted)" }}>
                Prime Destinations
              </div>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#C0673F] font-serif">4</div>
              <div className="text-xs uppercase tracking-widest font-semibold mt-1" style={{ color: "var(--t-text-muted)" }}>
                Languages Spoken
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5 PRIME DESTINATIONS SHOWCASE (SCULPTED CARDS) ─── */}
      <section id="destinations" className="py-20 px-4 sm:px-8" style={{ backgroundColor: "var(--t-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 px-2">
            <div>
              <span className="text-[#C0673F] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                Regional Footprint
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif" style={{ color: "var(--t-text)" }}>
                The Red Sea Coastline.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
              From urban commercial hubs to secluded lagoon sanctuaries, we represent premium assets across Egypt&apos;s most prestigious coastal districts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                name: "Hurghada",
                tagline: "Urban Energy & Coastal Commerce",
                desc: "The beating heart of the Red Sea. High-yield commercial assets, international schools, and premier marina residences.",
                img: "/img-hurghada.jpg",
              },
              {
                name: "El Gouna",
                tagline: "Venetian Lagoons & High Living",
                desc: "An eco-chic resort town renowned for international festivals, world-class golf, kite beaches, and private villas.",
                img: "/img-el-gouna.jpg",
              },
              {
                name: "Sahl Hasheesh",
                tagline: "Gated Bay & Pristine Beaches",
                desc: "12 km of golden beachfront. A prestigious master-planned community favored by European investors and wellness enthusiasts.",
                img: "/img-sahl-hasheesh.jpg",
              },
              {
                name: "Makadi Bay",
                tagline: "Family Retreat & Serene Waters",
                desc: "Tranquil coastal living with gentle bays, protected coral reefs, and tranquil gated residential developments.",
                img: "/img-makadi-bay.jpg",
              },
              {
                name: "Soma Bay",
                tagline: "Exclusive Peninsula Luxury",
                desc: "A breathtaking peninsula surrounded by azure sea. Championship golf, spa sanctuaries, and private sea-facing parcels.",
                img: "/img-soma-bay.jpg",
              },
            ].map((loc, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-lg hover:shadow-2xl border"
                style={{
                  backgroundColor: "var(--t-card-bg)",
                  borderColor: "var(--t-border)",
                }}
              >
                {/* Photo Thumbnail */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={loc.img}
                    alt={loc.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#D4AF37] border border-white/10">
                    0{idx + 1}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold font-serif mb-1" style={{ color: "var(--t-text)" }}>
                      {loc.name}
                    </h3>
                    <div className="text-xs font-medium text-[#C0673F] mb-3">
                      {loc.tagline}
                    </div>
                    <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "var(--t-text-muted)" }}>
                      {loc.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#C0673F]">
                    <span>Explore Assets</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5 KEY ASSET CLASSES (CORE OFFERINGS) ─── */}
      <section
        id="offerings"
        className="py-20 px-4 sm:px-8 border-t"
        style={{
          backgroundColor: "var(--t-bg-alt)",
          borderColor: "var(--t-border)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 px-2">
            <span className="text-[#C0673F] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Portfolio Representation
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif mb-4" style={{ color: "var(--t-text)" }}>
              Five Core Asset Classes.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
              Every asset is audited by our legal counsel for verified land tenure, clean ownership chains, and superior capital growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Landmark,
                title: "Prime Land Plots",
                tag: "Strategic Acquisition",
                badge: "Direct Freehold Title",
                desc: "Freehold and zoned plots in prime expansion corridors of Hurghada, Sahl Hasheesh, and Soma Bay with verified construction rights.",
                img: "/img-private-island.jpg",
              },
              {
                icon: HomeIcon,
                title: "Sea-View Apartments",
                tag: "High Rental Yield",
                badge: "Ready & 5-7 Yr 0% Plans",
                desc: "Curated 1- to 4-bedroom apartments offering panoramic sea views, 5-7 year developer installment plans @ 0% interest, and turnkey management.",
                img: "/img-hero-ocean.jpg",
              },
              {
                icon: Building,
                title: "Residential Villas",
                tag: "Signature Estates",
                badge: "Lagoon & Beachfront",
                desc: "Private luxury villas with swimming pools and lush landscaping across El Gouna lagoons and Sahl Hasheesh beachfronts.",
                img: "/img-luxury-villa.jpg",
              },
              {
                icon: ShoppingBag,
                title: "Commercial Shops",
                tag: "High Footfall Hubs",
                badge: "Up to 14% Net Yield",
                desc: "Prime retail outlets and showrooms in bustling tourism, marina, and hospitality promenades with secured tenancy.",
                img: "/img-hurghada.jpg",
              },
              {
                icon: Briefcase,
                title: "Business Offices",
                tag: "Corporate HQs",
                badge: "Grade-A Administrative",
                desc: "Modern administrative and corporate office suites catering to local firms, international consultancies, and remote executives.",
                img: "/img-penthouse-interior.jpg",
              },
            ].map((offering, idx) => {
              const Icon = offering.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border"
                  style={{
                    backgroundColor: "var(--t-card-bg)",
                    borderColor: "var(--t-border)",
                  }}
                >
                  {/* Photo Header */}
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={offering.img}
                      alt={offering.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#C0673F]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#C0673F]">
                          {offering.tag}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#DCC7B1] border border-white/10">
                          {offering.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold font-serif mb-2" style={{ color: "var(--t-text)" }}>
                        {offering.title}
                      </h3>
                      <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "var(--t-text-muted)" }}>
                        {offering.desc}
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="mt-6 pt-3 border-t border-white/5 inline-flex items-center justify-between text-xs font-bold text-[#C0673F] hover:text-[#A8552F]"
                    >
                      <span>Inquire Asset</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY US: 4 PILLARS & TRUST SIGNALS ─── */}
      <section id="why-us" className="py-20 px-4 sm:px-8">
        <div
          className="max-w-7xl mx-auto p-8 sm:p-16 rounded-[2.5rem] border shadow-2xl"
          style={{ backgroundColor: "var(--t-contrast-bg)", borderColor: "var(--t-border)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#C0673F] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                Institutional Confidence
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white mb-6">
                Built on Trust. <br />
                Driven by Results.
              </h2>
              <p className="text-sm text-[#DCC7B1] leading-relaxed mb-8">
                Operating in Egypt&apos;s luxury coastal market demands precision, deep local connections, and rigorous contractual protection. We safeguard your capital from initial consultation to final deed registry.
              </p>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-md">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C0673F] mb-1">
                  Multilingual Capability
                </div>
                <div className="text-sm font-light text-[#DCC7B1]">
                  Fluent advisory in <strong>English, Arabic, Russian, and German</strong>. No miscommunication, no surprises.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Compass,
                  num: "01",
                  title: "Local Mastery",
                  desc: "15+ years of daily immersion in Red Sea real estate. We know the developers, zoning shifts, and true market values.",
                },
                {
                  icon: Sliders,
                  num: "02",
                  title: "Transparent Terms",
                  desc: "Clear fee structures, realistic ROI expectations, and zero hidden costs. Complete visibility from first tour to closing.",
                },
                {
                  icon: Globe2,
                  num: "03",
                  title: "Multilingual Service",
                  desc: "Native-level support tailored to international investors and expat families across Europe, the Gulf, and North Africa.",
                },
                {
                  icon: ShieldCheck,
                  num: "04",
                  title: "Law 230/1996 & Title Vetting",
                  desc: "Comprehensive foreign freehold title vetting, municipal notary registration (Shahr El Akari), and court validity (Sehat W Nafaz) managed by senior attorneys.",
                },
              ].map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-[#C0673F]/50 transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#C0673F]/20 flex items-center justify-center text-[#C0673F]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#8A8F93]">{pillar.num}</span>
                    </div>
                    <h3 className="text-lg font-bold font-serif text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs text-[#8A8F93] leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENT TESTIMONIALS (MULTILINGUAL PROOF) ─── */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-8 border-t"
        style={{
          backgroundColor: "var(--t-bg)",
          borderColor: "var(--t-border)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 px-2">
            <span className="text-[#C0673F] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Client Experiences
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif" style={{ color: "var(--t-text)" }}>
              Trusted Globally.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working with Datcha was seamless. As an investor from Moscow, purchasing a sea-view apartment in El Gouna felt effortless. Their Russian-speaking legal advisor reviewed every clause.",
                client: "Mikhail & Elena V.",
                location: "Moscow, Russia",
                investment: "Lagoon Apartment, El Gouna",
              },
              {
                quote:
                  "Finding our retirement home in Sahl Hasheesh could have been daunting, but Datcha's clarity and patience stood out. They treated us like family and ensured clean title deeds.",
                client: "David Harrington",
                location: "Manchester, UK",
                investment: "Beachfront Villa, Sahl Hasheesh",
              },
              {
                quote:
                  "تجربتنا مع فريق داتشا كانت نموذجية في الأمانة والاحتراف. استثمرنا في أرض تجارية بالغردقة وكانت كل الإجراءات القانونية واضحة وموثقة بدقة تامة.",
                client: "م. طارق عبد العزيز",
                location: "Cairo, Egypt",
                investment: "Commercial Plot, Hurghada",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl flex flex-col justify-between shadow-lg"
                style={{
                  backgroundColor: "var(--t-card-bg)",
                  border: "1px solid var(--t-border)",
                }}
              >
                <div className="mb-6">
                  <div className="text-3xl font-serif text-[#C0673F] mb-4">“</div>
                  <p className="text-sm leading-relaxed italic" style={{ color: "var(--t-text)" }}>
                    {item.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <div className="font-bold text-sm" style={{ color: "var(--t-text)" }}>{item.client}</div>
                  <div className="text-xs text-[#C0673F] font-medium">{item.investment}</div>
                  <div className="text-[10px]" style={{ color: "var(--t-text-muted)" }}>{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD CAPTURE CONTACT SECTION (RESEND READY + WHATSAPP) ─── */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-8 border-t"
        style={{
          backgroundColor: "var(--t-bg-alt)",
          borderColor: "var(--t-border)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 px-2">
              <span className="text-[#C0673F] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                Initiate Conversation
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif mb-6" style={{ color: "var(--t-text)" }}>
                Begin Your Red Sea Acquisition.
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--t-text-muted)" }}>
                Whether you seek an executive plot, vacation penthouse, or corporate retail footprint, our senior brokers will curate tailored dossiers aligned with your financial horizons.
              </p>

              <div className="space-y-4 text-xs font-medium" style={{ color: "var(--t-text)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C0673F]/10 flex items-center justify-center text-[#C0673F] border border-[#C0673F]/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+20 123 456 7990 (Direct & WhatsApp)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C0673F]/10 flex items-center justify-center text-[#C0673F] border border-[#C0673F]/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>inquiries@datcharealestate.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C0673F]/10 flex items-center justify-center text-[#C0673F] border border-[#C0673F]/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Hurghada Marina Promenade, Red Sea, Egypt</span>
                </div>
              </div>

              {/* Hosted VIP Discovery Tour Touchpoint */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#C0673F]/20 via-black/30 to-black/50 border border-[#C0673F]/40 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DCC7B1] mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C0673F]" />
                  VIP Buyer Experience
                </div>
                <h4 className="font-serif text-lg text-white font-bold mb-2">
                  Complimentary 3-Day Red Sea Discovery Tour
                </h4>
                <p className="text-xs text-[#DCC7B1]/80 leading-relaxed mb-4">
                  For qualified international buyers & investors: private airport transfer, curated property inspections across El Gouna and Sahl Hasheesh, and 1-on-1 legal counsel on Law 230/1996.
                </p>
                <a
                  href="https://wa.me/201234567990?text=Hello%20Datcha%20Real%20Estate,%20I%20would%20like%20to%20inquire%20about%20the%20Complimentary%203-Day%20Discovery%20Tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA59] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Reserve Tour via WhatsApp</span>
                </a>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <a
                  href="https://wa.me/201234567990?text=Hello%20Datcha%20Real%20Estate,%20I%20am%20interested%20in%20Red%20Sea%20properties."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Direct Concierge Chat</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="p-8 sm:p-12 rounded-[2rem] shadow-2xl"
                style={{
                  backgroundColor: "var(--t-card-bg)",
                  border: "1px solid var(--t-border)",
                }}
              >
                {formSubmitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-[#C0673F] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold font-serif mb-2" style={{ color: "var(--t-text)" }}>
                      Inquiry Received
                    </h3>
                    <p className="text-sm max-w-md mx-auto" style={{ color: "var(--t-text-muted)" }}>
                      Thank you. A dedicated multilingual portfolio director will review your specifications and contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Lord / Lady / Mr / Ms..."
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all shadow-inner"
                          style={{
                            backgroundColor: "var(--t-input-bg)",
                            border: "1px solid var(--t-border)",
                            color: "var(--t-text)",
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="client@investments.com"
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all shadow-inner"
                          style={{
                            backgroundColor: "var(--t-input-bg)",
                            border: "1px solid var(--t-border)",
                            color: "var(--t-text)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>
                          Phone / WhatsApp *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+20 / +44 / +7 / +49..."
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all shadow-inner"
                          style={{
                            backgroundColor: "var(--t-input-bg)",
                            border: "1px solid var(--t-border)",
                            color: "var(--t-text)",
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>
                          Preferred Language
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            backgroundColor: "var(--t-input-bg)",
                            border: "1px solid var(--t-border)",
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>
                          Asset Class of Interest
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            backgroundColor: "var(--t-input-bg)",
                            border: "1px solid var(--t-border)",
                            color: "var(--t-text)",
                          }}
                        >
                          <option>Prime Land Plots</option>
                          <option>Sea-View Apartments</option>
                          <option>Residential Villas</option>
                          <option>Commercial Shops</option>
                          <option>Business Offices</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>
                          Target Destination
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            backgroundColor: "var(--t-input-bg)",
                            border: "1px solid var(--t-border)",
                            color: "var(--t-text)",
                          }}
                        >
                          <option>Hurghada</option>
                          <option>El Gouna</option>
                          <option>Sahl Hasheesh</option>
                          <option>Makadi Bay</option>
                          <option>Soma Bay</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>
                        Acquisition Horizon & Payment Model
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          backgroundColor: "var(--t-input-bg)",
                          border: "1px solid var(--t-border)",
                          color: "var(--t-text)",
                        }}
                      >
                        <option>Ready-to-Move / Immediate Handover (Cash or Resale)</option>
                        <option>Off-Plan / 5–7 Year Developer Installments @ 0% Interest</option>
                        <option>Strategic Land / Development Plot (Freehold Title)</option>
                        <option>Commercial Unit / Turnkey High-Yield Investment</option>
                        <option>Undecided / Request Advisory Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--t-text)" }}>
                        Message & Investment Requirements
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please specify desired timelines, space criteria, or specific requirements..."
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none shadow-inner"
                        style={{
                          backgroundColor: "var(--t-input-bg)",
                          border: "1px solid var(--t-border)",
                          color: "var(--t-text)",
                        }}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#C0673F] hover:bg-[#A8552F] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#C0673F]/30 hover:scale-[1.01]"
                    >
                      Submit Confidential Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SITE FOOTER ─── */}
      <footer
        className="py-16 px-6 sm:px-12 border-t mt-auto"
        style={{
          backgroundColor: "var(--t-footer-bg)",
          borderColor: "var(--t-border)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative h-12 w-48">
            <Image
              src="/logo-light.png"
              alt="Datcha Real Estate"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-[#8A8F93]">
            <a href="#destinations" className="hover:text-[#C0673F]">Destinations</a>
            <a href="#offerings" className="hover:text-[#C0673F]">Offerings</a>
            <a href="#why-us" className="hover:text-[#C0673F]">Why Us</a>
            <a href="#testimonials" className="hover:text-[#C0673F]">Testimonials</a>
            <a href="#contact" className="hover:text-[#C0673F]">Contact</a>
          </div>

          <div className="text-center md:text-right text-xs text-[#8A8F93]">
            <p>© 2026 Datcha Real Estate. All rights reserved.</p>
            <p className="mt-1 text-[11px] text-[#8A8F93]/70">
              datcharealestate.com · Red Sea Governorate, Egypt
            </p>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP BUTTON (SAFE FROM BOTTOM-RIGHT SWITCHER) ─── */}
      <a
        href="https://wa.me/201234567990?text=Hello%20Datcha%20Real%20Estate"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA59] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Contact"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
