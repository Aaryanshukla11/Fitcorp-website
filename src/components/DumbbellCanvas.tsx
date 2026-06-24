"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { motion } from "framer-motion";
import DumbbellModel from "./DumbbellModel";

interface DumbbellCanvasProps {
  scaleMultiplier?: number;
}

export default function DumbbellCanvas({ scaleMultiplier = 1 }: DumbbellCanvasProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        {/* Sleek placeholder spinner */}
        <div className="w-10 h-10 border-2 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          className="w-full h-full canvas-container"
          gl={{ antialias: true, alpha: true }}
        >
          {/* 1. SOFT AMBIENT FILL LIGHT (To keep shadow details soft) */}
          <ambientLight intensity={0.6} />

          {/* 2. GENERAL STUDIO KEY LIGHT (White light from top-front-right) */}
          <directionalLight position={[4, 5, 4]} intensity={1.5} />

          {/* 3. KEY METALLIC FILL LIGHT (Soft cool light from front-left) */}
          <directionalLight position={[-4, 2, 3]} intensity={0.8} color="#e2e8f0" />

          {/* 4. GOLDEN RIM LIGHTING 1 (High intensity from top-back-left) */}
          <directionalLight position={[-6, 4, -4]} intensity={5.0} color="#F4B400" />

          {/* 5. GOLDEN RIM LIGHTING 2 (High intensity from bottom-back-right) */}
          <directionalLight position={[6, -4, -4]} intensity={5.0} color="#F4B400" />

          {/* 6. SOFT CENTER GOLD FILL POINT LIGHT (Behind the dumbbell) */}
          <pointLight position={[0, 0, -2]} intensity={2.0} color="#F4B400" distance={8} />

          <Center scale={[1 * scaleMultiplier, 1 * scaleMultiplier, 1 * scaleMultiplier]}>
            <DumbbellModel />
          </Center>
        </Canvas>
      </Suspense>
    </div>
  );
}
