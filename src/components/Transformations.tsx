"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowLeftRight } from "lucide-react";

interface ProgressBarProps {
  label: string;
  value: number;
  suffix: string;
  colorClass: string;
}

function MetricProgressBar({ label, value, suffix, colorClass }: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      setProgress(value);
    }, 200);
    return () => clearTimeout(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="mb-6 w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-xs sm:text-sm uppercase tracking-wider text-zinc-300 font-medium">
          {label}
        </span>
        <span className="font-heading text-lg font-bold text-white tracking-wide">
          {progress}
          {suffix}
        </span>
      </div>
      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full rounded-full ${colorClass}`}
        />
      </div>
    </div>
  );
}

export default function Transformations() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const activeTransformation = {
    name: "Vikram Sen",
    age: 28,
    profession: "Software Engineer",
    beforeWeight: "88 kg",
    afterWeight: "74 kg",
    duration: "16 Weeks",
    metrics: [
      { label: "Fat Percentage Loss", value: 14, suffix: "%", color: "bg-brand-primary" },
      { label: "Muscle Mass Gain", value: 8, suffix: "%", color: "bg-brand-success" },
      { label: "Core Endurance Boost", value: 45, suffix: "%", color: "bg-white" },
    ],
    story: "Balancing code deadlines and fitness seemed impossible. Under Fitcorp's structured guidance, I changed my nutrition, committed to a 4-day split, and shed 14kg of fat while gaining massive strength.",
  };

  return (
    <section id="results" className="relative bg-brand-bg py-32 sm:py-40 overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-success/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Real Results
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            TRANSFORMATION STORIES
          </h2>
          
          <p className="font-body text-zinc-400 text-xs sm:text-sm max-w-xl mt-4 leading-relaxed uppercase tracking-wider">
            No filters. No shortcuts. Just dedication, coaching, and consistency written in physical proof.
          </p>
        </div>

        {/* Story details & Slider container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Before/After Slider */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden select-none border border-white/5 shadow-2xl cursor-ew-resize group nike-image-hover"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* After State (Underneath) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop"
                  alt="After Fitcorp Transformation"
                  className="w-full h-full object-cover nike-image"
                  draggable="false"
                  loading="lazy"
                />
                <span className="absolute bottom-4 right-4 z-10 px-3 py-1 bg-brand-success text-black font-body text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-md">
                  After
                </span>
              </div>

              {/* Before State (Clipped On Top) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                {/* To prevent image squishing, enforce original container width */}
                <div className="absolute inset-0 w-[100vw] h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
                  <img
                    src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop"
                    alt="Before Fitcorp Transformation"
                    className="w-full h-full object-cover nike-image"
                    draggable="false"
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-zinc-800 text-white font-body text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-md border border-white/5">
                    Before
                  </span>
                </div>
              </div>

              {/* Separator Slider Bar */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-brand-primary z-20 cursor-ew-resize shadow-[0_0_15px_rgba(244,180,0,0.6)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-primary border-4 border-black text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300">
                  <ArrowLeftRight size={14} strokeWidth={3.5} />
                </div>
              </div>
            </div>

            <p className="mt-4 font-body text-[10px] text-zinc-500 uppercase tracking-[0.25em] flex items-center gap-2">
              <Sparkles size={10} className="text-brand-primary" /> Drag center slider to compare before & after
            </p>
          </div>

          {/* Right Column: Narrative and Progress Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {activeTransformation.name}
              </h3>
              <span className="h-[2px] w-6 bg-brand-primary" />
              <span className="font-body text-xs text-brand-primary uppercase tracking-[0.15em] font-semibold">
                {activeTransformation.duration}
              </span>
            </div>

            <p className="font-body text-xs text-zinc-500 uppercase tracking-widest leading-relaxed mb-6">
              {activeTransformation.profession} • Age {activeTransformation.age} • {activeTransformation.beforeWeight} to {activeTransformation.afterWeight}
            </p>

            <p className="font-body text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 uppercase tracking-wide">
              &quot;{activeTransformation.story}&quot;
            </p>

            <div className="h-[1px] bg-white/5 mb-8" />

            {/* Metrics */}
            <div className="w-full">
              {activeTransformation.metrics.map((metric) => (
                <MetricProgressBar
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  suffix={metric.suffix}
                  colorClass={metric.color}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
