"use client";

import { Instagram, MessageSquare, MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black pt-20 pb-12 overflow-hidden border-t border-white/5">
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-brand-primary/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center font-heading text-xl text-black font-bold">
                  F
                </div>
                <span className="font-heading text-2xl font-bold tracking-[0.15em] text-white">
                  FITCORP
                </span>
              </div>
              <p className="font-body text-zinc-500 text-xs sm:text-sm uppercase tracking-wider max-w-sm leading-relaxed mb-6">
                We design premium training ecosystems. From heavy-duty machinery to customized program schedules, our mission is to build sustainable strength.
              </p>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              <MagneticButton strength={0.3}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-brand-primary hover:border-brand-primary/20 transition-all duration-300 block"
                  aria-label="Instagram Link"
                >
                  <Instagram size={16} />
                </a>
              </MagneticButton>
              
              <MagneticButton strength={0.3}>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-brand-primary hover:border-brand-primary/20 transition-all duration-300 block"
                  aria-label="WhatsApp Link"
                >
                  <MessageSquare size={16} />
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xl font-bold tracking-widest text-white mb-6 uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                <span className="font-body text-xs sm:text-sm uppercase tracking-wide leading-relaxed">
                  Fitcorp Gym, 3rd Floor, Apex Towers, Bandra West, Mumbai, MH 400050
                </span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone size={16} className="text-brand-primary shrink-0" />
                <span className="font-body text-xs sm:text-sm uppercase tracking-wide">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail size={16} className="text-brand-primary shrink-0" />
                <span className="font-body text-xs sm:text-sm uppercase tracking-wide">
                  support@fitcorpgym.com
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-xl font-bold tracking-widest text-white mb-6 uppercase">
              Club Hours
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <Clock size={16} className="text-brand-primary shrink-0 mt-0.5" />
                <div className="font-body text-xs sm:text-sm uppercase tracking-wide">
                  <p className="font-bold text-zinc-300">Monday — Saturday</p>
                  <p className="text-zinc-500">6:00 AM — 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <Clock size={16} className="text-zinc-700 shrink-0 mt-0.5" />
                <div className="font-body text-xs sm:text-sm uppercase tracking-wide">
                  <p className="font-bold text-zinc-600">Sunday</p>
                  <p className="text-zinc-700">Closed (6 Days Open Weekly)</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 text-center sm:text-left gap-6">
          <p className="font-body text-[10px] text-zinc-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Fitcorp Gym. All Rights Reserved. Built with precision.
          </p>
          
          <MagneticButton strength={0.15}>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2 font-body text-[10px] uppercase tracking-widest text-zinc-500 hover:text-brand-primary transition-colors cursor-pointer"
            >
              Back to Top
              <span className="w-6 h-6 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center">
                <ArrowUp size={10} />
              </span>
            </button>
          </MagneticButton>
        </div>

      </div>
    </footer>
  );
}
