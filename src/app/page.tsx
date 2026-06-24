"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import EquipmentShowcase from "@/components/EquipmentShowcase";
import MembershipPlans from "@/components/MembershipPlans";
import Community from "@/components/Community";
import Transformations from "@/components/Transformations";
import Trainers from "@/components/Trainers";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [isPreloaded, setIsPreloaded] = useState(true);

  return (
    <>
      {isPreloaded && (
        <Preloader onComplete={() => setIsPreloaded(false)} />
      )}
      
      {/* 
        Render the homepage once the preloader transitions out. 
        WebGL canvases will instantiate smoothly without blocking initial logo reveals.
      */}
      {!isPreloaded && (
        <div className="relative min-h-screen w-full bg-brand-bg overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <WhyChooseUs />
            <About />
            <EquipmentShowcase />
            <MembershipPlans />
            <Community />
            <Transformations />
            <Trainers />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
