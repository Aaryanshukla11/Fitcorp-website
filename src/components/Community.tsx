"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Community() {
  const containerRef = useRef(null);

  // Track scroll position of the community container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Layered vertical translation velocities
  const yCol1 = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  const col1Images = [
    {
      url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
      title: "Shared Energy",
      height: "h-[220px] sm:h-[240px]",
    },
    {
      url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
      title: "Collective Grit",
      height: "h-[220px] sm:h-[240px]",
    },
    {
      url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600&auto=format&fit=crop",
      title: "The Crucible",
      height: "h-[220px] sm:h-[240px]",
    },
  ];

  const col2Image = {
    url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    title: "Personalized Guidance",
    height: "h-[460px] sm:h-[500px]",
  };

  return (
    <section id="community" ref={containerRef} className="relative bg-brand-bg py-32 sm:py-40 overflow-hidden border-t border-white/5">
      {/* Background visual helpers */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-primary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Emotional Headline & Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-brand-primary" />
              <span className="font-body text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">
                The Fitcorp Tribe
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05] mb-6">
              MORE THAN A GYM.<br />
              <span className="text-brand-primary">A COMMUNITY.</span>
            </h2>

            <p className="font-body text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 uppercase tracking-wide">
              We sweat together, push boundaries together, and celebrate transformations together. At Fitcorp, you are never training in isolation.
            </p>

            <p className="font-body text-zinc-500 text-xs sm:text-sm leading-relaxed mb-6">
              Our culture is built on mutual respect and positive reinforcement. Beginners train alongside athletes, creating an ecosystem that feeds consistency.
            </p>

            <blockquote className="border-l-2 border-brand-success pl-4 italic text-zinc-300 font-body text-xs md:text-sm uppercase tracking-wider py-1 mb-8">
              &quot;The energy in this room is contagious. You show up tired, and you leave feeling like you can conquer the world.&quot;
              <cite className="block text-zinc-500 text-[10px] uppercase font-bold tracking-widest mt-2 not-italic">
                — Rohan M., Member since 2024
              </cite>
            </blockquote>
          </div>

          {/* Right: Asymmetrical Collage with Parallax columns */}
          <div className="lg:col-span-7 w-full overflow-hidden py-8">
            <div className="flex gap-4 sm:gap-6 items-start w-full">
              
              {/* Column 1 - Parallax tracked up */}
              <motion.div style={{ y: yCol1 }} className="flex flex-col gap-4 sm:gap-6 w-7/12">
                {col1Images.map((img, idx) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    key={idx}
                    className={`relative rounded-[24px] overflow-hidden group nike-image-hover border border-white/5 shadow-lg hover:shadow-2xl ${img.height}`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover nike-image"
                      loading="lazy"
                    />
                    {/* Subtle Title Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 p-2 z-10">
                      <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors duration-300">
                        {img.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Column 2 - Parallax tracked down */}
              <motion.div style={{ y: yCol2 }} className="w-5/12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative rounded-[24px] overflow-hidden group nike-image-hover border border-white/5 shadow-lg hover:shadow-2xl ${col2Image.height}`}
                >
                  <img
                    src={col2Image.url}
                    alt={col2Image.title}
                    className="w-full h-full object-cover nike-image"
                    loading="lazy"
                  />
                  {/* Subtle Title Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 p-2 z-10">
                    <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors duration-300">
                      {col2Image.title}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
