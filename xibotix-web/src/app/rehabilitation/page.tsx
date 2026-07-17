"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Zap, BarChart, Crosshair, Users, LineChart, Shield, Fingerprint } from "lucide-react";

export default function RehabilitationPage() {
  return (
    <main className="min-h-screen relative pt-24">
      {/* Medical/Premium Hero */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        {/* Subtle premium light flare background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-medium text-black mb-8 border border-emerald-200/50"
          >
            <Activity size={14} className="text-emerald-600" />
            <span className="tracking-widest uppercase text-[10px]">Clinical Solutions</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 text-foreground"
          >
            Rehabilitation <br /> Technologies.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-foreground/70 max-w-2xl mb-12 leading-relaxed font-light text-balance"
          >
            Intelligent rehabilitation systems that restore movement, improve recovery and empower clinicians with advanced assistive technologies.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-4xl font-medium tracking-tight leading-relaxed text-foreground/90 max-w-4xl mx-auto text-balance">
            HopeLift develops intelligent rehabilitation devices that combine robotics, biomechanics and AI to support patient recovery.
            Our solutions assist clinicians by providing precise, repeatable and measurable rehabilitation experiences.
          </p>
        </div>
      </section>

      {/* Core Technologies & Clinical Features */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-4">Architecture</h2>
            <h3 className="text-4xl font-bold tracking-tight text-foreground mb-12">Core Technologies</h3>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Zap className="text-emerald-500" />
                  Exoskeleton Systems
                </h4>
                <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">Upper Limb Assistance</div>
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">Lower Limb Assistance</div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Fingerprint className="text-emerald-500" />
                  Motion Tracking
                </h4>
                <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">Wearable Sensors</div>
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">Adaptive Therapy</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-4">Software</h2>
            <h3 className="text-4xl font-bold tracking-tight text-foreground mb-8">Clinical Features</h3>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Real-time progress monitoring", icon: <LineChart size={18} /> },
                { label: "Adaptive resistance", icon: <Crosshair size={18} /> },
                { label: "Patient analytics", icon: <BarChart size={18} /> },
                { label: "Remote monitoring", icon: <Activity size={18} /> },
                { label: "Therapy personalization", icon: <Users size={18} /> },
                { label: "Safety monitoring", icon: <Shield size={18} /> },
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 shadow-sm hover:bg-white/10 transition-all">
                  <div className="text-emerald-500">{feat.icon}</div>
                  <span className="font-medium text-sm text-foreground/80">{feat.label}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Rehabilitation Workflow (Flowchart) */}
      <section className="py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">Process</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-16">Rehabilitation Workflow</h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {["Assessment", "Therapy Planning", "Robot Assisted Training", "Performance Analysis", "Continuous Improvement"].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm font-medium text-sm text-center min-w-[140px]">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="hidden md:block text-emerald-400/50" />
                )}
                {idx < arr.length - 1 && (
                  <ArrowRight className="md:hidden text-emerald-400/50 rotate-90 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits (Split View) */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold tracking-tight text-center mb-16">Ecosystem Benefits</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Patients */}
            <div className="p-10 rounded-3xl bg-emerald-950/20 border border-emerald-500/20">
              <h4 className="text-2xl font-bold mb-8 text-emerald-400">For Patients</h4>
              <ul className="space-y-4">
                {["Faster recovery", "Greater independence", "Motivating therapy", "Personalized treatment"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-emerald-100/80">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinicians */}
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-2xl font-bold mb-8 text-foreground">For Clinicians</h4>
              <ul className="space-y-4">
                {["Objective measurements", "Reduced workload", "Patient analytics", "Treatment optimization"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas & Vision */}
      <section className="py-24 md:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-foreground/50 uppercase mb-6">Research Areas</h2>
            <div className="flex flex-wrap gap-3">
              {["Biomechanics", "Human Motor Control", "Medical Robotics", "Embedded Sensors", "Wearable AI", "Computer Vision"].map((area, i) => (
                <span key={i} className="px-6 py-3 border border-white/10 rounded-full text-sm font-medium bg-white/5 text-foreground">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="pl-0 lg:pl-12 lg:border-l border-black/10">
            <h2 className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-4">Vision Statement</h2>
            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-relaxed text-balance">
              Every patient deserves access to intelligent rehabilitation technology that adapts to their individual recovery journey.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
