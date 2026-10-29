"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award, Factory, Briefcase, Users, Wrench, ShieldCheck, Clock3, Settings,
  ChevronLeft, ChevronRight, Medal,
} from "lucide-react";

const milestones = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Factory, value: "85,000+", label: "Sq.Ft Factory" },
  { icon: Briefcase, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "25+", label: "Satisfied Clients" },
  { icon: Wrench, value: "35+", label: "Skilled Experts" },
  { icon: ShieldCheck, value: "100%", label: "Quality Focus" },
  { icon: Clock3, value: "24x7", label: "Customer Support" },
  { icon: Settings, value: "OEM", label: "Manufacturing" },
];

const achievementImages = [
  { src: "/images/achievements/vendor-award.png" }, 
  { src: "/images/achievements/team-award.png" },
  { src: "/images/achievements/ceremony.png" },
  { src: "/images/achievements/e7.png" },
  { src: "/images/achievements/ach.png" },
  { src: "/images/achievements/e1.png" },
  { src: "/images/achievements/e2.png" },
  { src: "/images/achievements/e3.png" },
  { src: "/images/achievements/e4.png" },
  { src: "/images/achievements/e5.png" },
  { src: "/images/achievements/e6.png" } 
];

export default function Milestones() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % achievementImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % achievementImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + achievementImages.length) % achievementImages.length);
  };

  return (
    <section
      id="milestones"
      className="relative flex min-h-[100svh] w-full flex-col justify-center scroll-mt-24 overflow-hidden bg-[#07111f] py-12 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(9,142,237,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:50px_50px]" />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-10">
        
        {/* Header - LEFT ALIGNED WITH BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex w-full flex-col items-start justify-start gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          {/* Badge */}
          <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#42b4ff]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              Our Achievements
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineering <span className="text-[#42b4ff]">Milestones</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          
          {/* LEFT COLUMN: Image Slider */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#06101d] shadow-2xl">
            <div className="group relative h-[300px] w-full sm:h-[350px] lg:h-full lg:min-h-[420px]">
              
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={achievementImages[activeImage].src}
                    alt={`Achievement ${activeImage + 1}`}
                    fill
                    priority={activeImage === 0}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                    // If an image is broken/missing, this skips it automatically
                    onError={() => {
                      console.error(`Failed to load: ${achievementImages[activeImage].src}. Moving to next image.`);
                      nextImage();
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#06101d] via-[#06101d]/40 to-transparent z-10" />

              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 rounded-full border border-[#42b4ff]/30 bg-[#098eed]/20 px-3 py-1.5 backdrop-blur-md">
                <Medal size={14} className="text-[#42b4ff]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#42b4ff]">
                  Award Winning
                </span>
              </div>

              <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-bold tracking-widest text-white">
                  {String(activeImage + 1).padStart(2, '0')} 
                  <span className="text-slate-400"> / {String(achievementImages.length).padStart(2, '0')}</span>
                </span>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button onClick={prevImage} className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-[#098eed]">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextImage} className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-[#098eed]">
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-1.5 max-w-[200px] sm:max-w-none">
                {achievementImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeImage === idx ? "bg-[#42b4ff] w-6" : "bg-white/30 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#06101d]/80 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#42b4ff]/50 hover:bg-[#0a1b2e] hover:shadow-[0_0_20px_rgba(9,142,237,0.1)]"
                >
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-[#42b4ff]/30 bg-[#098eed]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#098eed] sm:h-11 sm:w-11">
                    <Icon size={20} className="text-[#42b4ff] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-[#42b4ff] sm:text-3xl">
                    {item.value}
                  </h3>
                  <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[10px]">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}