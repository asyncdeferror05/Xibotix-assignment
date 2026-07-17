"use client";

import { motion } from "framer-motion";

export function TechnologyInnovation() {
  const stack = ["AI", "Machine Learning", "Computer Vision", "Embedded Systems", "Robotics Dynamics", "Healthcare Engineering"];
  
  const timeline = [
    { year: "Phase I", title: "Research & Prototyping", desc: "Core AI models and biomechanical data gathering." },
    { year: "Phase II", title: "Hardware Integration", desc: "Merging software intelligence with high-tensile materials." },
    { year: "Phase III", title: "Clinical Trials & Field Testing", desc: "Real-world environment mapping and human trials." },
    { year: "Phase IV", title: "Deployment", desc: "Global distribution of unified robotic systems." },
  ];

  return (
    <section id="technology" className="py-24 md:py-32 relative text-foreground">
      <div className="absolute inset-0 bg-background z-[-2]" />
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Unified Technology Stack.</h2>
          <p className="text-muted text-lg">
            Our dual domains are powered by a single, scalable architecture. Discover the foundational technologies and the innovation process that drives HopeLift.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-32">
          {stack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="px-6 py-3 bg-surface border border-black/10 rounded-full text-sm font-medium hover:bg-black/5 transition-colors cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative border-l border-black/10 ml-4 md:ml-1/2">
          {timeline.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-background border border-accent rounded-full" />
              <span className="text-accent text-sm font-bold tracking-wider uppercase mb-1 block">{step.year}</span>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
