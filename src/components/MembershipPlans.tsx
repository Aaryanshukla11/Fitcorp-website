"use client";

import { motion } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function MembershipPlans() {
  const plans = [
    {
      name: "Basic Pass",
      price: "1,800",
      period: "Month",
      description: "Ideal for self-driven fitness seekers looking for premium core access.",
      features: [
        "Unlimited Gym Access",
        "Strength Zone Access",
        "Cardio Zone Access",
        "Locker & Shower Access",
      ],
      excluded: [
        "Trainer Guidance",
        "Monthly Fitness Assessment",
        "Custom Nutrition Plan",
        "Personal Trainer Sessions",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Elite Annual",
      price: "1,200",
      period: "Month",
      billing: "Billed annually at ₹14,400",
      description: "Our highly sought-after membership. Premium values at our most competitive rate.",
      features: [
        "Unlimited Gym Access",
        "Strength & Cardio Zones",
        "Functional Training Turf",
        "Trainer Guidance",
        "Monthly Fitness Assessment",
        "Access to Club Challenges",
      ],
      excluded: [
        "Custom Nutrition Plan",
        "Personal Trainer Sessions",
      ],
      popular: true,
      cta: "Book Free Trial",
    },
    {
      name: "VIP Premium",
      price: "2,500",
      period: "Month",
      description: "Maximize your transformation with tailored nutrition and direct monitoring.",
      features: [
        "Unlimited Gym Access",
        "Full Access to All Zones",
        "Trainer Guidance & Support",
        "Bi-Weekly Fitness Assessment",
        "Customized Nutrition Blueprint",
        "Towel & Premium Amenities",
        "1 Personal Trainer Session/mo",
      ],
      excluded: [],
      popular: false,
      cta: "Upgrade to VIP",
    },
  ];

  return (
    <section id="pricing" className="relative bg-brand-bg py-32 sm:py-40 overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-success/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Membership Tiers
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            STARTING FROM ₹1200/MONTH
          </h2>
          
          <p className="font-body text-zinc-400 text-xs sm:text-sm max-w-xl mt-4 leading-relaxed uppercase tracking-wider">
            Premium fitness shouldn&apos;t feel exclusive. Choose a transparent plan built to match your goals and commitment level.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-[24px] p-8 sm:p-10 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-2xl ${
                plan.popular
                  ? "bg-gradient-to-b from-brand-secondary/90 to-zinc-900/75 border-2 border-brand-primary shadow-[0_0_50px_rgba(244,180,0,0.12)] lg:scale-[1.03] z-10"
                  : "bg-brand-secondary/30 border border-white/5 hover:border-brand-primary/20"
              }`}
            >
              {/* Soft interior card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.03] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]" />

              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-primary text-black font-body text-[10px] font-extrabold uppercase tracking-[0.25em] shadow-md z-20">
                  Most Popular
                </span>
              )}

              {/* Top part: Info & Price */}
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-white mb-2">
                  {plan.name}
                </h3>
                <p className="font-body text-xs text-zinc-400 leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price tag */}
                <div className="flex items-baseline mb-2">
                  <span className="font-body text-2xl font-semibold text-zinc-400 mr-1">₹</span>
                  <span className="font-heading text-5xl sm:text-6xl font-bold text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="font-body text-xs text-zinc-400 uppercase tracking-wider ml-2">
                    / {plan.period}
                  </span>
                </div>

                {/* Billing info */}
                {plan.billing ? (
                  <p className="font-body text-[10px] text-brand-success uppercase tracking-widest font-semibold mb-8">
                    {plan.billing}
                  </p>
                ) : (
                  <div className="h-[15px] mb-8" /> /* spacing placeholder */
                )}

                {/* Divider */}
                <div className="h-[1px] bg-white/5 mb-8" />

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-zinc-300">
                      <span className="w-5 h-5 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-body text-xs sm:text-sm uppercase tracking-wide">
                        {feature}
                      </span>
                    </li>
                  ))}
                  
                  {plan.excluded?.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-zinc-600">
                      <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-zinc-700 shrink-0">
                        <Check size={12} strokeWidth={2} className="opacity-0" />
                      </span>
                      <span className="font-body text-xs sm:text-sm uppercase tracking-wide line-through decoration-zinc-800">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom part: CTA */}
              <div className="relative z-10">
                <MagneticButton strength={0.2} className="w-full block">
                  <button
                    className={`w-full py-4 rounded-full font-body text-xs uppercase font-bold tracking-[0.2em] transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer ${
                      plan.popular
                        ? "bg-brand-primary text-black hover:bg-white shadow-lg shadow-brand-primary/10"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
