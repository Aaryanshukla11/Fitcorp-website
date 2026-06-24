"use client";

import { motion } from "framer-motion";
import { Dumbbell, Award, Sparkles, Flame } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Dumbbell className="text-brand-primary" size={28} />,
      title: "Modern Equipment",
      description: "Train on standard strength machinery, Olympic weights, and tailored cardio spaces optimized for performance.",
    },
    {
      icon: <Award className="text-brand-primary" size={28} />,
      title: "Expert Guidance",
      description: "Our certified coaches design individual workout maps and correct form to ensure you train safely and effectively.",
    },
    {
      icon: <Sparkles className="text-brand-primary" size={28} />,
      title: "Affordable Excellence",
      description: "Premium fitness infrastructure shouldn't cost a fortune. Access top-tier facilities starting at just ₹1200/month.",
    },
    {
      icon: <Flame className="text-brand-primary" size={28} />,
      title: "Results Driven",
      description: "Join structured transformation routines and community challenges designed to push limits and build consistency.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative bg-brand-bg py-32 sm:py-40 overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-[50%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Why Choose Us
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            WHY CHOOSE FITCORP?
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-1 bg-brand-primary mt-4 rounded-full"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              key={index}
              className="glass-panel glass-panel-hover p-8 rounded-[24px] flex flex-col justify-between h-[320px] relative overflow-hidden group shadow-lg hover:shadow-2xl"
            >
              {/* Soft ambient inner card glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top part: Icon & Title */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-[16px] bg-brand-secondary/40 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {card.title}
                </h3>
              </div>

              {/* Bottom part: Description */}
              <p className="font-body text-zinc-400 text-xs sm:text-sm leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors duration-300">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
