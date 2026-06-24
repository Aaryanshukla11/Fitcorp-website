"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import DumbbellCanvas from "./DumbbellCanvas";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-brand-bg py-32 sm:py-40 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="glass-panel p-8 sm:p-12 md:p-16 rounded-[24px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Subtle inside background elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Left Column: Huge CTA Content */}
          <div className="lg:col-span-7 text-left z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-success animate-pulse" />
              <span className="font-body text-xs uppercase tracking-[0.25em] text-brand-success font-extrabold">
                Free Trial Slot Available
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6">
              YOUR TRANSFORMATION<br />
              <span className="text-brand-primary text-glow">STARTS TODAY.</span>
            </h2>

            <p className="font-body text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 uppercase tracking-wide max-w-lg">
              Take the first step. Book your complimentary personal training consultation and experience the Fitcorp difference.
            </p>

            {/* CTA action button */}
            <MagneticButton strength={0.25}>
              <button
                onClick={() => handleScrollTo("#pricing")}
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-primary text-black font-body text-xs uppercase font-extrabold tracking-[0.2em] transition-all duration-300 hover:bg-white hover:scale-[1.05] active:scale-95 shadow-xl shadow-brand-primary/15 cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  Book Free Trial
                  <Calendar size={14} className="group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </MagneticButton>
          </div>

          {/* Right Column: 3D Dumbbell */}
          <div className="lg:col-span-5 h-[30vh] sm:h-[40vh] w-full relative flex items-center justify-center">
            <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-primary/10 blur-[80px] pointer-events-none" />
            <div className="w-full h-full relative z-10">
              <DumbbellCanvas scaleMultiplier={0.8} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
