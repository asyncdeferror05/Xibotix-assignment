"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative pt-24">
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
              <div className="flex gap-4 p-8 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-foreground" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <a href="mailto:contact@hopelift.ai" className="text-foreground/70 hover:text-foreground">contact@hopelift.ai</a>
                </div>
              </div>

              {/* Support */}
              <div className="flex gap-4 p-8 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-foreground" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Support</h4>
                  <a href="tel:+18005550199" className="text-foreground/70 hover:text-foreground">+1 (800) 555-0199</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-12 bg-white/5 border border-white/10 shadow-xl rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-white/10 outline-none transition-all text-foreground" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-white/10 outline-none transition-all text-foreground" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Work Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-white/10 outline-none transition-all text-foreground" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-white/10 outline-none transition-all appearance-none text-foreground">
                  <option className="bg-black text-foreground">Humanoid Robotics</option>
                  <option className="bg-black text-foreground">Rehabilitation Systems</option>
                  <option className="bg-black text-foreground">Research Partnership</option>
                  <option className="bg-black text-foreground">Media Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-white/10 outline-none transition-all resize-none text-foreground" placeholder="How can we help you?" />
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
