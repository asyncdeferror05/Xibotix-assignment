"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative pt-24">
      <div className="absolute inset-0 bg-background z-[-2]" />
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8"
            >
              Get in touch.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-foreground/70 mb-16 leading-relaxed text-balance"
            >
              Whether you are interested in our humanoid platforms, rehabilitation systems, or research partnerships, our engineering and clinical teams are ready to connect.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/[0.03] rounded-full">
                  <Mail className="w-6 h-6 text-foreground/80" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-1">Inquiries</h4>
                  <p className="text-lg font-medium">contact@hopelift.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/[0.03] rounded-full">
                  <MapPin className="w-6 h-6 text-foreground/80" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-1">Headquarters</h4>
                  <p className="text-lg font-medium text-balance">
                    VIT Vellore<br />
                    Vellore, Tamil Nadu 632014
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-12 bg-white border border-black/10 shadow-xl rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#fafafa] focus:bg-white focus:ring-2 focus:ring-black/5 outline-none transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#fafafa] focus:bg-white focus:ring-2 focus:ring-black/5 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Work Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#fafafa] focus:bg-white focus:ring-2 focus:ring-black/5 outline-none transition-all" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#fafafa] focus:bg-white focus:ring-2 focus:ring-black/5 outline-none transition-all appearance-none">
                  <option>Humanoid Robotics</option>
                  <option>Rehabilitation Systems</option>
                  <option>Research Partnership</option>
                  <option>Media Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#fafafa] focus:bg-white focus:ring-2 focus:ring-black/5 outline-none transition-all resize-none" placeholder="How can we help you?" />
              </div>

              <button className="w-full py-4 bg-foreground text-background font-medium rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Submit Inquiry
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
