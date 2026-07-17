"use client";

import { ParticleOverlay } from "@/components/ui/ParticleOverlay";
import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      <ParticleOverlay />

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-medium text-black mb-8 md:mb-12 border border-white/10 shadow-sm mx-auto">
          <Activity size={14} className="text-emerald-600" />
          <span className="tracking-widest uppercase text-[10px]">System Online</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] mb-8 text-foreground text-balance">
          Engineering <br />
          Human Potential
        </h1>

        <p className="text-lg md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12 md:mb-16 text-balance leading-relaxed font-light">
          HOPELIFT develops intelligent humanoid robotics and advanced rehabilitation systems designed to restore, assist and elevate human capability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link href="/robotics" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-foreground text-background font-medium rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md text-sm md:text-base">
            Explore Robotics
            <ArrowRight size={18} />
          </Link>
          <Link href="/rehabilitation" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-foreground text-background font-medium rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md text-sm md:text-base">
            Explore Rehabilitation
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
