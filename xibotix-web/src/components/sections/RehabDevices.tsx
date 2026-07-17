"use client";

import { motion } from "framer-motion";
import { HeartPulse, Crosshair, ActivitySquare } from "lucide-react";

export function RehabDevices() {
  const features = [
    { icon: <HeartPulse />, title: "Neural Interface", desc: "Direct brain-computer communication for seamless control." },
    { icon: <Crosshair />, title: "Adaptive Exoskeletons", desc: "Real-time structural adjustment based on biomechanics." }
  ];

  const applications = [
    "Spinal Cord Injury Recovery", "Motor Function Restoration", "Amputee Prosthetics", "Physical Therapy Augmentation"
  ];

  return (
    <section id="rehab" className="py-16 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Content Right */}
          <div className="flex-1 w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent mb-6 uppercase tracking-wider">
                <ActivitySquare size={14} />
                <span>Domain II: Rehabilitation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                Restoring <br /> Human Potential.
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Our rehabilitation devices leverage the same core AI and robotic technologies to overcome physical disabilities. By integrating neural interfaces with adaptive exoskeletons, we rebuild the connection between mind and body.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feat, idx) => (
                  <div key={idx} className="bg-surface/50 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                    <div className="text-accent mb-4">{feat.icon}</div>
                    <h3 className="font-medium text-foreground mb-2">{feat.title}</h3>
                    <p className="text-sm text-muted">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-medium tracking-wider uppercase text-muted mb-4">Core Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-foreground">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Left */}
          <div className="flex-1 w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-surface flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              {/* Abstract Representation of a Rehab Exoskeleton Leg/Joint */}
              <div className="relative z-10 w-24 h-72 flex flex-col items-center">
                <div className="w-16 h-24 bg-white/5 border border-white/10 rounded-t-3xl backdrop-blur-md relative overflow-hidden group-hover:border-accent/50 transition-colors duration-500">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-accent/30 rounded-full" />
                </div>
                {/* Joint */}
                <div className="w-20 h-20 bg-background border border-white/20 rounded-full my-1 z-20 shadow-2xl flex items-center justify-center group-hover:border-accent/50 transition-colors duration-500">
                  <div className="w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                </div>
                <div className="w-12 h-32 bg-white/5 border border-white/10 rounded-b-3xl backdrop-blur-md relative overflow-hidden group-hover:border-accent/50 transition-colors duration-500">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 border border-accent/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
