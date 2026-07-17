"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function HelixCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop devices (non-touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Use springs for smooth following
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);
  
  // Secondary spring for trail effect
  const springConfig2 = { damping: 30, stiffness: 100, mass: 0.8 };
  const cursorX2 = useSpring(mousePosition.x, springConfig2);
  const cursorY2 = useSpring(mousePosition.y, springConfig2);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Helix element 1 */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      >
        <div className="w-1.5 h-1.5 bg-accent rounded-full absolute top-0 transform -translate-y-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
        <div className="w-1 h-1 bg-accent/60 rounded-full absolute bottom-0 transform translate-y-4" />
      </motion.div>

      {/* Helix element 2 (trailing and rotating opposite) */}
      <motion.div
        style={{
          x: cursorX2,
          y: cursorY2,
        }}
        className="absolute top-0 left-0 w-12 h-12 -ml-6 -mt-6 flex items-center justify-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      >
        <div className="w-1 h-1 bg-foreground/40 rounded-full absolute left-0 transform -translate-x-4" />
        <div className="w-1.5 h-1.5 bg-foreground/20 rounded-full absolute right-0 transform translate-x-4" />
      </motion.div>
    </div>
  );
}
