"use client";

import { motion } from "framer-motion";
import { Cpu, BrainCircuit, Zap } from "lucide-react";

export function HumanoidRobotics() {
  const features = [
    { icon: <Cpu />, title: "Neuromorphic Processing", desc: "Advanced AI compute for real-time decision making." },
    { icon: <Zap />, title: "High-Torque Actuators", desc: "Precision movement and unparalleled physical strength." }
  ];

  const applications = [
    "Industrial Automation", "Hazardous Environment Navigation", "Search and Rescue Operations", "Space Exploration"
  ];

  return (
    <section id="robotics" className="py-16 md:py-32 bg-transparent border-t border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Left */}
          <div className="flex-1 w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-accent mb-6 uppercase tracking-wider">
                <BrainCircuit size={14} />
                <span>Domain I: Robotics</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                Sentient <br /> Architecture.
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Our humanoid robotics platform is engineered to navigate and interact with the physical world identically to humans. Built with cutting-edge biomimetic systems, they learn, adapt, and execute complex tasks with extreme precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feat, idx) => (
                  <div key={idx} className="bg-surface/50 border border-black/5 p-6 rounded-2xl hover:border-black/10 transition-colors">
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
                    <span key={idx} className="px-3 py-1.5 bg-black/5 border border-black/10 rounded-md text-xs text-foreground">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Right */}
          <div className="flex-1 w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-black/10 bg-surface flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              {/* Abstract Representation of a Robot */}
              <div className="relative z-10 w-48 h-64 border border-black/20 bg-background/50 backdrop-blur-md rounded-t-[4rem] rounded-b-2xl shadow-2xl flex flex-col items-center pt-8 overflow-hidden group-hover:border-accent/50 transition-colors duration-500">
                <div className="w-16 h-8 bg-black rounded-full mb-8 relative border border-black/10 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.2s"}} />
                </div>
                <div className="w-24 h-full bg-black/5 border-t border-black/10 rounded-t-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
