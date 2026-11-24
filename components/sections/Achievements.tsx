"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Factory,
  Briefcase,
  Users,
  Wrench,
  ShieldCheck,
  Clock3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Medal,
  Image as ImageIcon,
} from "lucide-react";

const milestones = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Factory, value: "85,000+", label: "Sq.Ft Factory" },
  { icon: Briefcase, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "25+", label: "Satisfied Clients" },
  { icon: Wrench, value: "35+", label: "Skilled Experts" },
  { icon: ShieldCheck, value: "ISO", label: "9001:2015 Certified" },
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
  { src: "/images/achievements/e6.png" },
];

export default function Milestones() {
  const [activeImage, setActiveImage] = useState(0);
  const [failedSrcs, setFailedSrcs] = useState<Record<string, boolean>>({});

  const visibleImages = achievementImages.filter((img) => !failedSrcs[img.src]);
  const safeList = visibleImages.length > 0 ? visibleImages : achievementImages;
  const currentIndex = activeImage % safeList.length;

  const nextImage = useCallback(() => {
    setActiveImage((prev) => (prev + 1) % safeList.length);
  }, [safeList.length]);

  const prevImage = useCallback(() => {
    setActiveImage((prev) => (prev - 1 + safeList.length) % safeList.length);
  }, [safeList.length]);

  useEffect(() => {
    if (safeList.length <= 1) return;
    const timer = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextImage, safeList.length]);

  const handleImageError = useCallback((src: string) => {
    setFailedSrcs((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
  }, []);

  return (
    <section
      id="milestones"
      className="relative flex min-h-[calc(100dvh-76px)] w-full scroll-mt-[76px] flex-col overflow-hidden bg-[#f4f7fb] text-slate-900 lg:h-[calc(100dvh-76px)]"
    >
      {/* Header Bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-y border-slate-200 bg-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12">
        <div className="flex flex-col items-start gap-1">
          <div className="mb-0.5 flex items-center gap-2">
            <Award className="h-3.5 w-3.5 text-[#0284c7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              Engineering Milestones
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#0b192c] sm:text-3xl">
            Proven Track Record &amp;{" "}
            <span className="text-[#0284c7]">Industrial Recognition</span>
          </h2>
        </div>

        <span className="hidden rounded-md border border-slate-200 bg-[#f4f7fb] px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 sm:block">
          8 Core Performance Benchmarks
        </span>
      </div>

      {/* Edge-to-Edge 12-Column Split */}
      <div className="grid min-h-0 w-full flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-12 lg:overflow-hidden">
        {/* LEFT COLUMN: Full-Bleed Steel-Navy Award & Event Slider (7 Cols) */}
        <div className="flex flex-col bg-[#0b192c] text-white lg:col-span-7 lg:border-r lg:border-slate-200">
          <div className="group relative min-h-[340px] w-full flex-1 overflow-hidden bg-[#081322] sm:min-h-[380px] lg:h-full lg:min-h-0">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={safeList[currentIndex].src}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55 }}
                className="absolute inset-0"
              >
                <Image
                  src={safeList[currentIndex].src}
                  alt={`Achievement ${currentIndex + 1}`}
                  fill
                  priority={currentIndex === 0}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  onError={() => handleImageError(safeList[currentIndex].src)}
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#061120]/90 via-transparent to-[#061120]/40" />

            {/* Award Badge */}
            <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-md border border-amber-400/35 bg-[#081322]/85 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
              <Medal size={15} className="text-amber-400" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-amber-300">
                Award Winning
              </span>
            </div>

            {/* Counter */}
            <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 rounded-md border border-white/15 bg-[#081322]/85 px-3.5 py-1.5 backdrop-blur-md">
              <ImageIcon size={14} className="text-[#42b4ff]" />
              <span className="font-mono text-xs font-bold tracking-widest text-white">
                {String(currentIndex + 1).padStart(2, "0")}
                <span className="text-slate-400">
                  {" "}
                  / {String(safeList.length).padStart(2, "0")}
                </span>
              </span>
            </div>

            {/* Prev / Next Arrows */}
            {safeList.length > 1 && (
              <div className="absolute right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 opacity-95 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous achievement image"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-[#081322]/90 text-white backdrop-blur-md transition-all hover:border-[#42b4ff] hover:bg-[#42b4ff] hover:text-[#061220]"
                >
                  <ChevronLeft size={19} />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next achievement image"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-[#081322]/90 text-white backdrop-blur-md transition-all hover:border-[#42b4ff] hover:bg-[#42b4ff] hover:text-[#061220]"
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Crisp Light-Slate Milestone Grid (5 Cols) */}
        <div className="flex bg-[#f4f7fb] lg:col-span-5 lg:h-full">
          <div className="grid w-full grid-cols-1 bg-slate-200 gap-px sm:grid-cols-2">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group flex flex-col justify-between bg-white p-5 transition-colors hover:bg-sky-50/50 sm:p-6"
                >
                  <div className="mb-2 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-sky-200 bg-sky-50 text-[#0284c7] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={16} />
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      {item.label}
                    </p>
                  </div>

                  <h3 className="font-mono text-2xl font-black tracking-tight text-[#0b192c] sm:text-3xl">
                    {item.value}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}