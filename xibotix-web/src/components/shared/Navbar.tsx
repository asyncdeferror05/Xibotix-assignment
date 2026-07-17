"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/hopelift-logo.png" alt="HopeLift Logo" width={32} height={32} className="object-contain" />
          <span className="text-xl font-medium tracking-[0.2em] uppercase text-foreground/90">HopeLift</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/70">
          <Link href="/robotics" className="hover:text-foreground transition-colors">Robotics</Link>
          <Link href="/rehabilitation" className="hover:text-foreground transition-colors">Rehabilitation</Link>
          <Link href="/technology" className="hover:text-foreground transition-colors">Technology</Link>
          <Link href="/research" className="hover:text-foreground transition-colors">Research</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="px-6 py-2.5 bg-transparent hover:bg-black/5 border border-black/10 rounded-full text-sm font-medium transition-all text-foreground/90 hover:text-foreground">
            Contact
          </Link>
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-black/5 p-6 flex flex-col gap-6 h-screen">
          <Link href="/robotics" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">Robotics</Link>
          <Link href="/rehabilitation" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">Rehabilitation</Link>
          <Link href="/technology" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">Technology</Link>
          <Link href="/research" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">Research</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground">About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-foreground/80 hover:text-foreground mt-4 pt-4 border-t border-black/10">Contact</Link>
        </div>
      )}
    </header>
  );
}
