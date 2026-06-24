"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Coordinates for the instant tracking inner dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Coordinates for the spring-smoothed tracking outer ring
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  // Spring configuration for physical inertia lag
  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const ringXSpring = useSpring(ringX, springConfig);
  const ringYSpring = useSpring(ringY, springConfig);

  useEffect(() => {
    // Only execute on client environments with cursor devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      // Center the inner dot (w-2 h-2 => offset 4px)
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);

      // Center the outer ring (w-8 h-8 => offset 16px)
      ringX.set(e.clientX - 16);
      ringY.set(e.clientY - 16);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Interactive element check for hover state mapping
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-magnetic]")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [dotX, dotY, ringX, ringY, isVisible]);

  // Prevent server-side rendering issues
  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Inner Dot - mix-blend-difference turns black text white and vice-versa */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
      
      {/* Outer Ring - Gold/translucent spring following ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/20 pointer-events-none z-[9998] hidden md:block"
        style={{
          x: ringXSpring,
          y: ringYSpring,
        }}
        animate={{
          scale: isHovered ? 1.7 : 1,
          backgroundColor: isHovered ? "rgba(244, 180, 0, 0.06)" : "rgba(255, 255, 255, 0)",
          borderColor: isHovered ? "#F4B400" : "rgba(255, 255, 255, 0.2)",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      />
    </>
  );
}
