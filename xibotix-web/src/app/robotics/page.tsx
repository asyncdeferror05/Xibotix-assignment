"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Eye, Cpu, Crosshair, Network, Activity, Zap, Server } from "lucide-react";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

export default function RoboticsPage() {
  return (
    <main className="min-h-screen relative">
      {/* Cinematic Hero */}
      <section className="relative min-h-[85vh] text-white flex flex-col justify-center overflow-hidden pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-[#050505] z-[-2]" />
        {/* We can use the ambient background here but with a very low opacity or customized for dark mode, 
            or just keep it dark and cinematic. Since AmbientBackground has bg-background, it would be white. 
            We'll use a custom dark background effect instead for this specific dark cinematic hero. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-[#050505] to-[#020202]" />
        
        {/* Subtle grid pattern for engineering vibe */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03] bg-repeat" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/80 mb-8"
          >
            <Brain size={14} className="text-emerald-400" />
            <span className="tracking-widest uppercase text-[10px]">HopeLift Robotics Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white max-w-4xl"
          >
            Humanoid <br />
            Robotics.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed font-light"
          >
            Engineering intelligent humanoid systems designed to augment human capability through AI, perception, precision mechanics and adaptive control.
          </motion.p>

          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="#technologies" 
            className="px-8 py-4 bg-white text-black font-medium rounded-full flex items-center gap-2 hover:scale-105 transition-all text-sm md:text-base"
          >
            View Technologies
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>

      {/* Overview */}
      <section id="technologies" className="py-24 md:py-32 relative border-b border-black/5">
        <div className="absolute inset-0 bg-background z-[-2]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-foreground/90 max-w-5xl mb-24">
            HopeLift develops next-generation humanoid robotic platforms capable of operating safely alongside humans in industrial, healthcare and research environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Artificial Intelligence", "Computer Vision", "Embedded Systems", "Precision Motion Control", "Mechanical Design", "Human Machine Interaction"].map((item, idx) => (
              <div key={idx} className="p-8 border border-black/10 rounded-2xl bg-black/[0.02] hover:bg-black/5 transition-colors">
                <h3 className="text-xl font-medium text-foreground">{item}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 text-xl text-foreground/70 font-light">
            ...into one integrated platform.
          </div>
        </div>
      </section>

      {/* Core Capabilities (Bento) */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[#fafafa] z-[-2]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-foreground/50 uppercase mb-4">Architecture</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Core Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Autonomous Navigation */}
            <div className="lg:col-span-2 p-10 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <Network className="w-10 h-10 text-emerald-500 mb-6" />
              <h4 className="text-2xl font-bold mb-4">Autonomous Navigation</h4>
              <p className="text-foreground/70 mb-6 text-lg">Robots capable of understanding dynamic environments in real-time.</p>
              <ul className="space-y-3">
                {["Path planning", "Obstacle avoidance", "Dynamic mapping"].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Computer Vision */}
            <div className="p-10 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <Eye className="w-10 h-10 text-blue-500 mb-6" />
              <h4 className="text-2xl font-bold mb-4">Computer Vision</h4>
              <ul className="space-y-3 mt-8">
                {["Object detection", "Scene understanding", "Human tracking", "Gesture recognition"].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dexterous Manipulation */}
            <div className="p-10 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <Crosshair className="w-10 h-10 text-orange-500 mb-6" />
              <h4 className="text-2xl font-bold mb-4">Dexterous Manipulation</h4>
              <ul className="space-y-3 mt-8">
                {["Multi-axis robotic arms", "Force feedback", "Adaptive gripping", "Fine motion control"].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Human Interaction & AI */}
            <div className="lg:col-span-2 p-10 rounded-3xl bg-black text-white border border-white/10 shadow-lg">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <Brain className="w-10 h-10 text-indigo-400 mb-6" />
                  <h4 className="text-2xl font-bold mb-4">Human Interaction</h4>
                  <ul className="space-y-3">
                    {["Natural communication", "Voice interaction", "Context awareness", "Safety systems"].map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <Cpu className="w-10 h-10 text-pink-400 mb-6" />
                  <h4 className="text-2xl font-bold mb-4">AI Decision Making</h4>
                  <ul className="space-y-3">
                    {["Large Language Models", "Task Planning", "Learning Systems", "Edge AI"].map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32 relative border-t border-black/5">
        <div className="absolute inset-0 bg-background z-[-2]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="md:w-1/3">
              <h2 className="text-sm font-semibold tracking-widest text-foreground/50 uppercase mb-4">Engineering</h2>
              <h3 className="text-4xl font-bold tracking-tight text-foreground mb-6">Technology Stack</h3>
              <p className="text-foreground/70">Built on modern, high-performance computing frameworks designed for real-time robotic control and deep learning.</p>
            </div>
            <div className="md:w-2/3 flex flex-wrap gap-3">
              {["Python", "ROS2", "OpenCV", "YOLO", "CUDA", "TensorFlow", "PyTorch", "NVIDIA Jetson", "Embedded Linux", "Real-Time Systems"].map((tech, i) => (
                <div key={i} className="px-6 py-3 border border-black/10 rounded-full text-sm font-medium bg-black/[0.02]">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Philosophy */}
      <section className="py-24 md:py-32 text-background relative">
        <div className="absolute inset-0 bg-foreground z-[-2]" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-8">Industrial Integration</h3>
            <ul className="grid grid-cols-2 gap-4">
              {["Factory Automation", "Warehouse Robotics", "Research Platforms", "Inspection Systems", "Healthcare", "Defense", "Smart Infrastructure"].map((app, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-background/80">
                  <Activity size={16} className="text-background/40" />
                  {app}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-semibold tracking-widest text-background/50 uppercase mb-6">Product Philosophy</h2>
            <p className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-balance">
              Our robotics platform is designed around one principle: Technology should amplify human potential rather than replace it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
