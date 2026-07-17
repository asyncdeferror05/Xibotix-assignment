"use client";

import { motion } from "framer-motion";

export function CompanyOverview() {
  return (
    <section id="innovation" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Redefining Physical Limits.</h2>
            <p className="text-muted text-lg leading-relaxed mb-8 text-balance">
              At HopeLift, our mission is to seamlessly integrate advanced robotics and state-of-the-art rehabilitation technologies. We envision a future where physical limitations are obsolete, empowered by intelligent machines that augment human capabilities and restore mobility.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-8 border-l border-black/10 pl-8 md:pl-16"
          >
            <div>
              <h3 className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Vision</h3>
              <p className="text-foreground text-xl">A world without physical boundaries.</p>
            </div>
            <div>
              <h3 className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Mission</h3>
              <p className="text-foreground text-xl">Building the ultimate synergy between man and machine.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
