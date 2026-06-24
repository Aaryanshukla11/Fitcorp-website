"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  
  // Track scroll timeline of the About section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Opposite scroll translations for layered background depth
  const yGlow1 = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);
  const yGlow2 = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-[#050505] py-36 sm:py-44 border-t border-white/5 overflow-hidden"
    >
      {/* Cinematic grid lines and vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,#000000_90%)] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Floating abstract accent circles - parallax tracked */}
      <motion.div
        style={{ y: yGlow1 }}
        className="absolute top-[15%] left-[-5%] w-[450px] h-[450px] rounded-full bg-brand-primary/4 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: yGlow2 }}
        className="absolute bottom-[15%] right-[-5%] w-[450px] h-[450px] rounded-full bg-brand-success/2 blur-[120px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-8 justify-center sm:justify-start"
        >
          <span className="h-[1px] w-8 bg-brand-primary" />
          <span className="font-body text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold">
            Our Mission & Philosophy
          </span>
        </motion.div>

        {/* Story Paragraph with massive typography */}
        <div className="space-y-8 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.25] tracking-tight text-zinc-400 text-center sm:text-left select-none font-bold">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We believe that <span className="text-white text-glow">fitness</span> is not a temporary target, but a lifelong commitment. It is forged through <span className="text-brand-primary text-glow">discipline</span>, reinforced by <span className="text-brand-primary text-glow">consistency</span>, and declared by actions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            At Fitcorp Gym, we dismantle the barrier between <span className="text-white font-semibold">premium training</span> and <span className="text-brand-success text-glow">affordability</span>. We provide the athletic infrastructure, the expert coaching, and the crucible community.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-white"
          >
            Your goal is our roadmap. Show up, empower your progress, and <span className="text-brand-primary text-glow">build your transformation</span> today.
          </motion.p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/5">
          {[
            { title: "DISCIPLINE", desc: "No excuses, just work" },
            { title: "COMMUNITY", desc: "Succeeding together" },
            { title: "RESULTS", desc: "Evidence of effort" },
            { title: "INTEGRITY", desc: "True strength values" },
          ].map((pillar, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              key={pillar.title}
              className="text-center sm:text-left"
            >
              <h4 className="font-heading text-xl md:text-2xl font-bold tracking-widest text-brand-primary mb-1">
                {pillar.title}
              </h4>
              <p className="font-body text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
