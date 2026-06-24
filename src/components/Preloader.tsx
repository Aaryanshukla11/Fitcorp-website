"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2800); // 2.8 seconds animation sequence

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleAnimationComplete = () => {
    document.body.style.overflow = "";
    onComplete();
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleAnimationComplete}>
      {!isLoaded && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }, // Apple-like smooth slide out
          }}
        >
          {/* Subtle Ambient Light Grid behind logo */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(244,180,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(244,180,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Dumbbell Silhouette Animation */}
          <div className="relative flex flex-col items-center select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.4, 0.8, 0.3, 0.8], scale: [0.85, 1, 0.95, 1.05, 1] }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
              }}
              className="mb-8"
            >
              {/* Premium Dumbbell SVG Silhouette */}
              <svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-brand-primary"
              >
                {/* Left outer plate */}
                <motion.rect
                  x="10"
                  y="5"
                  width="8"
                  height="50"
                  rx="3"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                />
                {/* Left inner plate */}
                <motion.rect
                  x="22"
                  y="10"
                  width="8"
                  height="40"
                  rx="2"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
                {/* Center bar */}
                <motion.rect
                  x="30"
                  y="26"
                  width="60"
                  height="8"
                  rx="4"
                  fill="currentColor"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="origin-center"
                  transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
                />
                {/* Right inner plate */}
                <motion.rect
                  x="90"
                  y="10"
                  width="8"
                  height="40"
                  rx="2"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
                {/* Right outer plate */}
                <motion.rect
                  x="102"
                  y="5"
                  width="8"
                  height="50"
                  rx="3"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                />
                {/* Collar rings */}
                <circle cx="20" cy="30" r="3" fill="#ffffff" opacity="0.8" />
                <circle cx="100" cy="30" r="3" fill="#ffffff" opacity="0.8" />
              </svg>
            </motion.div>

            {/* Logo Text Reveal */}
            <div className="overflow-hidden relative h-20 flex flex-col items-center">
              <motion.h1
                initial={{ y: 80, letterSpacing: "0.1em" }}
                animate={{ y: 0, letterSpacing: "0.25em" }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5,
                }}
                className="font-heading text-5xl md:text-6xl font-bold text-white"
              >
                FITCORP
              </motion.h1>
            </div>

            {/* Loading text/status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-4 flex items-center gap-3 text-zinc-500 font-body text-xs uppercase tracking-[0.25em]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-success active-dot"></span>
              </span>
              Establishing Connection
            </motion.div>

            {/* Premium Gold Progress Bar */}
            <div className="w-48 h-[1px] bg-zinc-800 mt-8 relative overflow-hidden">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  duration: 2.2,
                  repeat: 0,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-brand-primary to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
