"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/70 backdrop-blur-xl py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center text-background font-bold text-xl tracking-tighter">X</div>
          <span className="text-xl font-medium tracking-[0.2em] uppercase text-foreground/90">Xibotix</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/70">
          <a href="#robotics" className="hover:text-foreground transition-colors">Robotics</a>
          <a href="#rehab" className="hover:text-foreground transition-colors">Rehabilitation</a>
          <a href="#technology" className="hover:text-foreground transition-colors">Technology</a>
          <a href="#research" className="hover:text-foreground transition-colors">Research</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="px-6 py-2.5 bg-transparent hover:bg-white/5 border border-white/20 rounded-full text-sm font-medium transition-all text-foreground/90 hover:text-foreground">
            Contact
          </a>
        </div>

        <button 
          className="lg:hidden text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-6 h-screen">
          <a href="#robotics" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">Robotics</a>
          <a href="#rehab" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">Rehabilitation</a>
          <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">Technology</a>
          <a href="#research" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">Research</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground mt-4 pt-4 border-t border-white/10">Contact</a>
        </div>
      )}
    </header>
  );
}
