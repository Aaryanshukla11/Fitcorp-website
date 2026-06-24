"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import DumbbellCanvas from "./DumbbellCanvas";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const headlineWords = [
    { text: "BUILD STRENGTH.", color: "text-white" },
    { text: "BUILD DISCIPLINE.", color: "text-brand-primary" },
    { text: "BUILD YOURSELF.", color: "text-white" },
  ];

  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-brand-bg pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Subtle Background Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-success/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1 pt-6 lg:pt-0">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-[1px] w-8 bg-brand-primary" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-brand-primary font-bold">
              Premium Fitness Experience
            </span>
          </motion.div>

          {/* Headline - Sora Premium Editorial Typography */}
          <div className="space-y-1 md:space-y-2 mb-6">
            {headlineWords.map((word, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 * index,
                  }}
                  className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight uppercase ${word.color}`}
                >
                  {word.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subheadline - Inter */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="font-body text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            Train with expert coaches, modern equipment, and a community dedicated to helping you become your strongest self.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            {/* Start Your Journey */}
            <MagneticButton strength={0.25}>
              <button
                onClick={() => handleScrollTo("#pricing")}
                className="group relative flex items-center justify-center px-8 py-4 rounded-full bg-brand-primary text-black font-body text-xs uppercase font-bold tracking-[0.2em] transition-all duration-300 hover:bg-white hover:scale-[1.05] active:scale-95 shadow-xl shadow-brand-primary/10 hover:shadow-brand-primary/20 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </MagneticButton>

            {/* Book Free Trial */}
            <MagneticButton strength={0.25}>
              <button
                onClick={() => handleScrollTo("#pricing")}
                className="group flex items-center justify-center px-8 py-4 rounded-full border border-white/10 hover:border-brand-primary text-white hover:text-brand-primary bg-white/[0.02] hover:bg-brand-primary/[0.04] font-body text-xs uppercase font-bold tracking-[0.2em] transition-all duration-300 hover:scale-[1.05] active:scale-95 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Book Free Trial
                  <Play size={12} fill="currentColor" className="text-zinc-400 group-hover:text-brand-primary" />
                </span>
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Side: Interactive 3D Dumbbell */}
        <div className="lg:col-span-5 h-[35vh] sm:h-[45vh] lg:h-[70vh] w-full order-1 lg:order-2 relative flex items-center justify-center">
          
          {/* Behind-dumbbell glow */}
          <div className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-brand-primary/10 blur-[80px] sm:blur-[100px] pointer-events-none z-0" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full h-full relative z-10"
          >
            <DumbbellCanvas scaleMultiplier={0.9} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
