"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "About", href: "#about" },
    { name: "Equipment", href: "#equipment" },
    { name: "Pricing", href: "#pricing" },
    { name: "Community", href: "#community" },
    { name: "Results", href: "#results" },
    { name: "Coaches", href: "#coaches" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/75 border-b border-white/5 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-2 group select-none"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center font-heading text-xl text-black font-bold group-hover:scale-105 transition-transform duration-300">
              F
            </div>
            <span className="font-heading text-2xl font-bold tracking-[0.15em] text-white transition-colors duration-300 group-hover:text-brand-primary">
              FITCORP
            </span>
          </a>

          {/* Desktop Nav Links - Apple-inspired minimal typography */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <MagneticButton key={link.name} strength={0.2}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-body text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors duration-300 px-2 py-1 block"
                >
                  {link.name}
                </a>
              </MagneticButton>
            ))}
          </div>

          {/* Premium CTA Button - Nike/Apple inspired */}
          <div className="hidden sm:flex items-center gap-4">
            <MagneticButton strength={0.35}>
              <a
                href="#pricing"
                onClick={(e) => handleScrollTo(e, "#pricing")}
                className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden rounded-full bg-brand-primary text-black font-body text-xs uppercase font-semibold tracking-[0.15em] hover:scale-[1.05] active:scale-95 transition-all duration-300 shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Free Trial
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop & Sheet */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-45 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center lg:hidden">
          <div className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="font-heading text-4xl font-bold tracking-[0.1em] text-zinc-300 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.5 }}
              href="#pricing"
              onClick={(e) => handleScrollTo(e, "#pricing")}
              className="mt-4 px-8 py-3 rounded-full bg-brand-primary text-black font-body text-xs uppercase font-semibold tracking-[0.2em] shadow-lg shadow-brand-primary/15"
            >
              Book Free Trial
            </motion.a>
          </div>
        </div>
      )}
    </>
  );
}
