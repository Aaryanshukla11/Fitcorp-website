"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ShowcaseCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

function ShowcaseCard({ title, category, image, index }: ShowcaseCardProps) {
  const containerRef = useRef(null);
  
  // Track scroll position of this specific card container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate parallax y-translation for the image
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[400px] sm:h-[500px] w-full rounded-[24px] overflow-hidden group nike-image-hover border border-white/5 cursor-pointer shadow-lg hover:shadow-2xl"
    >
      {/* Parallax Image Wrapper */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] overflow-hidden">
        <motion.img
          style={{ y: yParallax }}
          src={image}
          alt={title}
          className="w-full h-full object-cover nike-image"
          loading="lazy"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-85" />

      {/* Edge border hover accent */}
      <div className="absolute inset-0 border border-brand-primary/0 group-hover:border-brand-primary/30 rounded-[24px] transition-colors duration-500 pointer-events-none" />

      {/* Card Content (Nike style bottom alignment) */}
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 flex flex-col justify-end z-20">
        
        {/* Category Label */}
        <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.25em] text-brand-primary font-bold mb-2">
          {category}
        </span>
        
        {/* Title */}
        <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
          {title}
        </h3>
        
        {/* Subtle CTA Reveal on Hover */}
        <div className="h-[2px] w-12 bg-white/20 group-hover:w-24 group-hover:bg-brand-primary transition-all duration-300" />
      </div>
    </motion.div>
  );
}

export default function EquipmentShowcase() {
  const zones = [
    {
      title: "Strength Zone",
      category: "Heavy Machinery",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop", // Modern dark gym machine layout
    },
    {
      title: "Cardio Zone",
      category: "Endurance & Speed",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop", // Modern treadmills and bikes
    },
    {
      title: "Functional Training",
      category: "Agility & Core",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop", // Kettlebells and functional spaces
    },
    {
      title: "Free Weights",
      category: "Pure Strength",
      image: "https://images.unsplash.com/photo-1637666062717-1c6bcab4a4ed?q=80&w=1200&auto=format&fit=crop", // Premium dumbbell rack rows
    },
  ];

  return (
    <section id="equipment" className="relative bg-brand-bg py-32 sm:py-40 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-success/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              <span className="font-body text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">
                Elite Training Zones
              </span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
              EQUIPMENT SHOWCASE
            </h2>
          </div>
          
          <p className="font-body text-zinc-400 text-xs sm:text-sm max-w-sm mt-4 md:mt-0 leading-relaxed uppercase tracking-wider">
            Explore our state-of-the-art zones engineered to optimize every facet of your physical capability.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zones.map((zone, index) => (
            <ShowcaseCard
              key={zone.title}
              title={zone.title}
              category={zone.category}
              image={zone.image}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
