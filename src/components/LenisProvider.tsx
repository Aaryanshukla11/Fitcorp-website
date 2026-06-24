"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like smooth cubic easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Sync with GSAP ScrollTrigger if it is loaded
    // Since we'll use GSAP ScrollTrigger, we want Lenis to update GSAP on scroll.
    const resizeHandler = () => {
      // Re-calculate sizes
      lenis.resize();
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeHandler);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
