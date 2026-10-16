"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Sparkles, Layers, Check, ChevronDown, ChevronUp, Eye, EyeOff, Sun, Moon } from "lucide-react";

const DirectionSkeleton = () => (
  <div className="min-h-screen bg-[#0E1317] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-2 border-[#C0673F] border-t-transparent animate-spin" />
      <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#DCC7B1]/70">
        Loading Datcha Architecture...
      </span>
    </div>
  </div>
);

const DirectionOneQuinta = dynamic(
  () => import("@/components/directions/DirectionOneQuinta"),
  { loading: () => <DirectionSkeleton /> }
);
const DirectionTwoAtelier = dynamic(
  () => import("@/components/directions/DirectionTwoAtelier"),
  { loading: () => <DirectionSkeleton /> }
);
const DirectionThreeNoir = dynamic(
  () => import("@/components/directions/DirectionThreeNoir"),
  { loading: () => <DirectionSkeleton /> }
);

type DirectionId = "1" | "2" | "3";

interface DirectionMeta {
  id: DirectionId;
  badge: string;
  name: string;
  subtitle: string;
  inspiration: string;
  features: string[];
}

const DIRECTIONS: DirectionMeta[] = [
  {
    id: "1",
    badge: "DIRECTION 01",
    name: "Quinta Architectural & Editorial",
    subtitle: "Organic Arch Transitions & Horizontal Storytelling",
    inspiration: "Inspired by Quinta da Malia & Lenval Properties",
    features: [
      "Curved SVG Arch Geometry (Zero-Glitch)",
      "Horizontal Drifting Coastal Slider",
      "Law 230/1996 Freehold Governance",
      "3-Day VIP Discovery Tour Desk",
    ],
  },
  {
    id: "2",
    badge: "DIRECTION 02",
    name: "Modern Atelier & Clean Sculpted Cards",
    subtitle: "Balanced Modernism & Curated Search Matrix",
    inspiration: "Modern Coastal Editorial with Dual Option A/B",
    features: [
      "Soft Rounded Sculpted Cards",
      "Ready vs 5-7 Yr 0% Developer Plans",
      "VIP Discovery Tour Conversion Card",
      "Cinematic / Editorial Dual Toggle",
    ],
  },
  {
    id: "3",
    badge: "DIRECTION 03",
    name: "Horizon Noir & Penthouse Suite",
    subtitle: "Ultra-Luxury Dark Theme & Interactive Floor Plans",
    inspiration: "Inspired by Volta Skai & Mr. C Residences",
    features: [
      "Dynamic Golden / Dusk / Midnight Lighting",
      "Delivery Dates & Yield Analytics",
      "Exclusive Off-Market Listings",
      "Law 230/1996 & Freehold Deed Vetting",
    ],
  },
];

function DirectionSwitcherContent() {
  const searchParams = useSearchParams();
  const [activeDirection, setActiveDirection] = useState<DirectionId>("1");
  const [panelOpen, setPanelOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");

  // Initialize from URL or localStorage
  useEffect(() => {
    const param = searchParams.get("direction");
    if (param === "1" || param === "2" || param === "3") {
      setActiveDirection(param as DirectionId);
    } else {
      const saved = localStorage.getItem("datcha_active_direction");
      if (saved === "1" || saved === "2" || saved === "3") {
        setActiveDirection(saved as DirectionId);
      }
    }

    const savedTheme = localStorage.getItem("datcha_theme") as "dark" | "light" | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const docTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
      if (docTheme) setCurrentTheme(docTheme);
    }

    const handleSync = () => {
      const t = (localStorage.getItem("datcha_theme") as "dark" | "light" | null) || "dark";
      setCurrentTheme(t);
    };
    window.addEventListener("storage", handleSync);
    return () => window.removeEventListener("storage", handleSync);
  }, [searchParams]);

  const selectDirection = (id: DirectionId) => {
    setActiveDirection(id);
    localStorage.setItem("datcha_active_direction", id);
    const url = new URL(window.location.href);
    url.searchParams.set("direction", id);
    window.history.replaceState({}, "", url.toString());
  };

  const toggleGlobalTheme = () => {
    const next = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(next);
    localStorage.setItem("datcha_theme", next);
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event("storage"));
  };

  const currentMeta = DIRECTIONS.find((d) => d.id === activeDirection) || DIRECTIONS[0];

  return (
    <>
      {/* ─── FLOATING BOTTOM REVIEW SWITCHER (DOES NOT OBSTRUCT TOP NAVIGATION) ─── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-2xl transition-all duration-300">
        {isMinimized ? (
          /* Minimized Trigger Pill */
          <div className="flex justify-center">
            <button
              onClick={() => setIsMinimized(false)}
              className="bg-[#0b0f12]/95 hover:bg-[#141c21] text-white border border-[#C0673F]/40 shadow-2xl rounded-full px-4 py-2 text-xs font-mono tracking-wider flex items-center gap-2 backdrop-blur-xl"
            >
              <span className="w-2 h-2 rounded-full bg-[#C0673F] animate-ping" />
              <span>Theme Switcher: 0{activeDirection}</span>
              <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        ) : (
          /* Full Floating Capsule */
          <div className="bg-[#0b0f12]/95 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-2xl p-2.5 text-white font-sans">
            <div className="flex items-center justify-between gap-3">
              {/* Active Direction Label */}
              <div className="flex items-center gap-2 pl-2">
                <span className="w-2 h-2 rounded-full bg-[#C0673F] animate-ping" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold leading-none">
                    STAGING · {currentMeta.badge}
                  </span>
                  <span className="text-xs font-medium text-white/90 truncate max-w-[180px] sm:max-w-none mt-1">
                    {currentMeta.name}
                  </span>
                </div>
              </div>

              {/* 3 Pill Selector */}
              <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-xl">
                {DIRECTIONS.map((dir) => {
                  const isActive = dir.id === activeDirection;
                  return (
                    <button
                      key={dir.id}
                      onClick={() => selectDirection(dir.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
                        isActive
                          ? "bg-[#C0673F] text-white font-bold shadow-lg shadow-[#C0673F]/40"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>0{dir.id}</span>
                      <span className="hidden sm:inline font-sans font-normal text-[11px]">
                        {dir.id === "1" ? "Quinta" : dir.id === "2" ? "Atelier" : "Noir"}
                      </span>
                    </button>
                  );
                })}

                {/* Light / Dark Mode Toggle Button */}
                <button
                  onClick={toggleGlobalTheme}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center gap-1 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                  title={`Toggle Light / Dark Mode (Currently ${currentTheme.toUpperCase()})`}
                >
                  {currentTheme === "dark" ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-[#E0A856]" />
                      <span className="hidden sm:inline font-sans text-[11px]">Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-[#C0673F]" />
                      <span className="hidden sm:inline font-sans text-[11px]">Dark</span>
                    </>
                  )}
                </button>

                {/* Details Accordion */}
                <button
                  onClick={() => setPanelOpen(!panelOpen)}
                  className="px-2 py-1.5 text-white/50 hover:text-white transition-colors"
                  title="Toggle Feature Specs"
                >
                  {panelOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </button>

                {/* Minimize Pill */}
                <button
                  onClick={() => setIsMinimized(true)}
                  className="px-2 py-1.5 text-white/40 hover:text-white transition-colors"
                  title="Minimize Switcher"
                >
                  <EyeOff className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Expanded Drawer Details */}
            {panelOpen && (
              <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                {DIRECTIONS.map((dir) => {
                  const isActive = dir.id === activeDirection;
                  return (
                    <div
                      key={dir.id}
                      onClick={() => selectDirection(dir.id)}
                      className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                        isActive
                          ? "bg-[#C0673F]/20 border-[#C0673F] text-white"
                          : "bg-white/[0.03] border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[9px] text-[#D4AF37]">{dir.badge}</span>
                        {isActive && <Check className="w-3 h-3 text-[#C0673F]" />}
                      </div>
                      <div className="font-semibold text-white text-xs truncate">{dir.name}</div>
                      <div className="text-[10px] text-white/50 my-1 truncate">{dir.subtitle}</div>
                      <div className="text-[9px] text-white/40 italic truncate">{dir.inspiration}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ─── RENDER SELECTED DIRECTION ─── */}
      <main className="w-full pb-28">
        {activeDirection === "1" && <DirectionOneQuinta />}
        {activeDirection === "2" && <DirectionTwoAtelier />}
        {activeDirection === "3" && <DirectionThreeNoir />}
      </main>
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#1F2A2E] flex items-center justify-center text-white font-mono text-sm">
          Loading Datcha Luxury Experience...
        </div>
      }
    >
      <DirectionSwitcherContent />
    </Suspense>
  );
}
