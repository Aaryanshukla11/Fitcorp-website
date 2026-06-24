"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";

export default function Trainers() {
  const trainers = [
    {
      name: "Aryan Malhotra",
      role: "Head Strength Coach",
      specialty: "Powerlifting & Body Recomposition",
      certifications: ["NSCA-CSCS Certified", "Kinesiology Degree"],
      philosophy: "Discipline is the bridge between goals and accomplishment.",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Sarah Fernandes",
      role: "Athletic Conditioning Specialist",
      specialty: "High-Intensity Training & Agility",
      certifications: ["NASM-PES Certified", "Former National Sprinter"],
      philosophy: "Your body can stand almost anything. It's your mind that you have to convince.",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Rohan D&apos;Souza",
      role: "Functional Movement Specialist",
      specialty: "Mobility, Rehab & Kettlebell Training",
      certifications: ["FMS Level 2 Certified", "RKC Kettlebell Coach"],
      philosophy: "Move well, then move often. Strength is built on structural integrity.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section id="coaches" className="relative bg-brand-bg py-32 sm:py-40 overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-primary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Expert Coaches
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            MEET YOUR TRAINERS
          </h2>
          
          <p className="font-body text-zinc-400 text-xs sm:text-sm max-w-xl mt-4 leading-relaxed uppercase tracking-wider">
            Certified professionals committed to teaching core form, scheduling programs, and steering your progress.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={trainer.name}
              className="group nike-image-hover relative h-[450px] sm:h-[500px] rounded-[24px] overflow-hidden border border-white/5 bg-brand-secondary/20 cursor-pointer shadow-xl"
            >
              {/* Trainer Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover nike-image"
                loading="lazy"
              />

              {/* Gradient Shutter */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* Static Card Info (Bottom Aligned) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 group-hover:translate-y-[-120px] transition-transform duration-500 ease-[0.16,1,0.3,1]">
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-brand-primary font-bold mb-2 block">
                  {trainer.role}
                </span>
                <h3 className="font-heading text-3xl font-bold tracking-tight text-white">
                  {trainer.name}
                </h3>
              </div>

              {/* Hover Reveal Block (Slides up from bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 h-[210px] bg-black/90 border-t border-white/5 flex flex-col justify-between z-30 translate-y-[211px] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-b-[24px]">
                <div>
                  <p className="font-body text-xs text-brand-success uppercase tracking-widest font-bold mb-2">
                    {trainer.specialty}
                  </p>
                  
                  {/* Philosophy Quote */}
                  <p className="font-body text-zinc-400 text-xs italic mb-4 leading-relaxed">
                    &quot;{trainer.philosophy}&quot;
                  </p>

                  {/* Certifications tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {trainer.certifications.map((cert) => (
                      <span key={cert} className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 font-body text-[9px] uppercase tracking-wider font-semibold border border-white/5">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom row: Instagram contact */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-[10px] uppercase tracking-widest text-zinc-400 hover:text-brand-primary transition-colors"
                  >
                    <Instagram size={14} />
                    Follow Aryan
                  </a>
                  
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-brand-primary text-white group-hover:text-black flex items-center justify-center transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
