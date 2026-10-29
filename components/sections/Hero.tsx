// components/hero/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#07111f] text-white"
    >
      {/* 1. Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        poster="/images/hero/hero1.png"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* 2. Overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#06101d]/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#06101d] via-[#06101d]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#06101d] via-transparent to-[#06101d]/30" />

      {/* 3. Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-5 pt-32 pb-20 sm:px-8 lg:px-14 lg:pt-40">
        
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.05] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#42b4ff] shadow-[0_0_14px_#42b4ff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 sm:text-sm">
                Engineering Excellence Since 2015 
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[85px]">
              Precision That
              <br />
              <span className="text-[#42b4ff]">
                Powers Industry.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              From heavy fabrication and CNC machining to OEM manufacturing,
              Cosmos Industries delivers dependable engineering solutions
              built around your most demanding requirements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#098eed] px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/40 transition duration-300 hover:-translate-y-1 hover:bg-[#0877c7] hover:shadow-xl"
              >
                Discuss Your Project
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/10"
              >
                Explore Capabilities
                <ArrowDown size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Editorial Stats List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            // Changed from hidden lg:flex to flex so it shows on mobile. 
            // Added mobile-specific borders and spacing.
            className="flex flex-col justify-center gap-6 border-t border-white/30 pt-8 mt-4 sm:grid sm:grid-cols-2 lg:mt-0 lg:flex lg:flex-col lg:gap-8 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-10"
          >
            {[
              { value: 10, suffix: "+", label: "Years Experience" },
              { value: 85000, suffix: "+", label: "Sq.Ft Facility" },
              { value: 60000, suffix: "+", label: "Covered Area" },
              { value: 35, suffix: "+", label: "Skilled Professionals" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col group">
                <span className="text-4xl font-black text-white transition-colors group-hover:text-[#42b4ff] sm:text-5xl">
                  <CountUp end={stat.value} duration={2.5} separator="," />
                  {stat.suffix}
                </span>
                {/* Changed text color to a brighter blue for better visibility */}
                <span className="mt-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-200">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}