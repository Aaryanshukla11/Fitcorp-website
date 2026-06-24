"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  decimals?: number;
  duration?: number;
  suffix?: string;
}

function Counter({ value, decimals = 0, duration = 1.8, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Cubic easing out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(easeProgress * value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsList = [
    {
      value: 500,
      decimals: 0,
      suffix: "+",
      label: "Active Members",
      description: "Dedicated fitness community",
    },
    {
      value: 20,
      decimals: 0,
      suffix: "+",
      label: "Modern Machines",
      description: "Strength & cardio equipment",
    },
    {
      value: 4.9,
      decimals: 1,
      suffix: "★",
      label: "Member Rating",
      description: "Google review satisfaction",
    },
    {
      value: 6,
      decimals: 0,
      suffix: " Days",
      label: "Open Weekly",
      description: "Flexible training schedules",
    },
  ];

  return (
    <section className="relative bg-brand-bg py-24 md:py-32 border-y border-white/5 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {statsList.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              key={index}
              className="glass-panel p-6 sm:p-8 rounded-[24px] flex flex-col justify-between items-center lg:items-start text-center lg:text-left group transition-all duration-500 hover:border-brand-primary/20 hover:scale-[1.03] relative overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Soft interior card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.03] to-brand-success/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Stat number counter - Silver to gold hover shift */}
              <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent tracking-wide mb-2 group-hover:from-brand-primary group-hover:to-yellow-500 transition-all duration-500">
                <Counter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>

              {/* Stat text info */}
              <div className="relative z-10">
                <p className="font-body text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold text-zinc-300 mb-1 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
                <p className="font-body text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
