"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Smooth springs to make the gradient follow the mouse smoothly
  const springConfig = { damping: 50, stiffness: 100, mass: 0.5 };
  const mouseX = useSpring(mousePosition.x, springConfig);
  const mouseY = useSpring(mousePosition.y, springConfig);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      {/* Background base (optional) */}
      
      {/* Interactive soft gradient blob */}
      <motion.div
        className="absolute rounded-full opacity-30 mix-blend-multiply blur-[100px]"
        style={{
          width: 600,
          height: 600,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
