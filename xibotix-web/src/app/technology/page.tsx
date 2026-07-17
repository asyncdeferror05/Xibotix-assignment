"use client";

import { motion } from "framer-motion";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen relative pt-24 flex items-center justify-center">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold tracking-tighter mb-4"
        >
          Technology
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-foreground/70"
        >
          Detailed engineering documentation coming soon.
        </motion.p>
      </div>
    </main>
  );
}
