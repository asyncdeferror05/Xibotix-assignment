"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleOverlay } from "@/components/ui/ParticleOverlay";
import Image from "next/image";
import { ArrowRight, Activity, ChevronDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hand animations
  // Starts completely dark, fades in, scales down slightly from a close-up, and settles.
  const handOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 1, 1]);
  const handScale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);
  const handY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["-5%", "0%", "-20%", "-60%"]);
  
  // Hand UI / Stats overlay on the arm
  const interfaceOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.6], [0, 1, 0]);
  const interfaceScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.5]);

  // Main UI Content (Headline & CTAs) fade in when hand settles
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.7, 0.9], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.25], ["40px", "0px"]);

  // Overlay to transition to next section
  const overlayOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <ParticleOverlay />

        {/* The Robotic Hand */}
        <motion.div 
          style={{ opacity: handOpacity, scale: handScale, y: handY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-[150vw] h-[150vh] md:w-[100vw] lg:w-[80vw]">
            <Image 
              src="/images/hero-hand.png"
              alt="HopeLift Robotic Hand"
              fill
              className="object-contain object-center drop-shadow-2xl"
              priority
            />
            
            {/* Embedded OLED UI on the forearm */}
            <motion.div
              style={{ opacity: interfaceOpacity, scale: interfaceScale }}
              className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-48 h-64 glass-panel rounded-xl p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-[10px] text-emerald font-mono">
                <span>SYS_ON</span>
                <span>v3.0.4</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-cyan rounded-full"></div>
                </div>
                <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-emerald rounded-full"></div>
                </div>
                <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-black rounded-full"></div>
                </div>
              </div>
              <div className="text-[10px] text-foreground/50 text-center font-mono">
                ACTUATORS ALIGNED
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-32 md:mt-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-medium text-foreground/80 mb-8 border border-black/10 shadow-lg">
            <Activity size={14} className="text-emerald" />
            <span className="tracking-widest uppercase text-[10px]">System Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tighter leading-[0.9] mb-8 text-foreground">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40">Human Potential</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 text-balance leading-relaxed font-light">
            HOPELIFT develops intelligent humanoid robotics and advanced rehabilitation systems designed to restore, assist and elevate human capability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#robotics" className="w-full sm:w-auto px-10 py-5 bg-foreground text-background font-medium rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(0,0,0,0.2)]">
              Explore Robotics
              <ArrowRight size={18} />
            </a>
            <a href="#rehab" className="w-full sm:w-auto px-10 py-5 glass-panel text-foreground font-medium rounded-full flex items-center justify-center gap-2 hover:bg-black/5 transition-all border border-black/10">
              Explore Rehabilitation
            </a>
          </div>
        </motion.div>

        <motion.div 
          style={{ opacity: contentOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Initialize</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>

        {/* Black Overlay for seamless transition */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-background z-30 pointer-events-none"
        />
      </div>
    </section>
  );
}
