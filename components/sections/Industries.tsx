"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Layers, Pause, Play } from "lucide-react";

const industries = [
  {
    name: "Energy",
    image: "/images/industries/energy.jpg",
    desc: "High-efficiency power generation and turbine components.",
  },
  {
    name: "Mining",
    image: "/images/industries/mining.jpg",
    desc: "Heavy-duty crushing, screening, and excavation hardware.",
  },
  {
    name: "Hydraulics",
    image: "/images/industries/hydraulics.jpg",
    desc: "Precision fluid power cylinders, pumps, and valves.",
  },
  {
    name: "Marine",
    image: "/images/industries/marine.jpg",
    desc: "Corrosion-resistant propulsion and deck machinery.",
  },
  {
    name: "Oil & Gas",
    image: "/images/industries/oilgas.jpg",
    desc: "Rigorous high-pressure valves and pipeline solutions.",
  },
  {
    name: "Cement Plant",
    image: "/images/industries/cement.jpg",
    desc: "Kiln drives, wear parts, and heavy-duty gearboxes.",
  },
  {
    name: "Automobile",
    image: "/images/industries/automobile.jpg",
    desc: "Automated assembly line components and precision tooling.",
  },
  {
    name: "Construction",
    image: "/images/industries/construction.jpg",
    desc: "Robust structural elements and earth-moving attachments.",
  },
  {
    name: "Sugar Plant",
    image: "/images/industries/sugar.jpg",
    desc: "High-torque mill drives and processing machinery.",
  },
  {
    name: "Piping Solutions",
    image: "/images/industries/piping.jpg",
    desc: "Industrial-grade flanges, fittings, and seamless pipes.",
  },
  {
    name: "Gears & Bearings",
    image: "/images/industries/gears.jpg",
    desc: "Custom industrial gearboxes and ultra-load bearings.",
  },
  {
    name: "Earth Moving",
    image: "/images/industries/earthmoving.jpg",
    desc: "Undercarriage parts and high-durability hydraulic tracks.",
  },
];

const topTrack = industries.slice(0, 6);
const bottomTrack = industries.slice(6, 12);

function ConveyorRow({
  items,
  startIndex,
  speed,
  paused,
}: {
  items: typeof industries;
  startIndex: number;
  speed: number;
  paused: boolean;
}) {
  const offset = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (paused || !trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (halfWidth <= 0) return;

    const next = offset.get() - (delta * speed) / 1000;
    offset.set(Math.abs(next) >= halfWidth ? 0 : next);
  });

  const repeated = [...items, ...items];

  return (
    <div className="relative flex min-h-0 flex-1 w-full flex-col overflow-hidden border-b border-white/10 last:border-b-0">
      <motion.div
        ref={trackRef}
        style={{ x: offset }}
        className="flex h-full w-max"
      >
        {repeated.map((item, idx) => {
          const sectorNum = ((idx % items.length) + startIndex + 1)
            .toString()
            .padStart(2, "0");

          return (
            <div
              key={`${item.name}-${idx}`}
              className="group relative flex h-full min-h-[190px] w-[290px] shrink-0 flex-col justify-between overflow-hidden border-r border-white/10 bg-[#0b192c] p-6 transition-colors hover:bg-[#0f233d] sm:w-[340px] lg:w-[380px]"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="380px"
                className="object-cover opacity-45 transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061120] via-[#091a2c]/75 to-[#0b192c]/55" />

              {/* Top Calibration Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-[0.22em] text-[#42b4ff]">
                  SECTOR {sectorNum}
                </span>
                <span className="h-[2px] w-8 bg-[#42b4ff]/50 transition-all duration-500 group-hover:w-14 group-hover:bg-[#42b4ff]" />
              </div>

              {/* Bottom Sector Title & Summary */}
              <div className="relative z-10">
                <h3 className="text-lg font-black uppercase tracking-wider text-white sm:text-xl">
                  {item.name}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-200/90 sm:text-[13px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Industries() {
  const [hoverPaused, setHoverPaused] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);

  const isPaused = hoverPaused || manualPaused;

  return (
    <section
      id="industries"
      className="relative flex min-h-[calc(100dvh-76px)] w-full scroll-mt-[76px] flex-col overflow-hidden bg-[#f4f7fb] text-slate-900 sm:h-[calc(100dvh-76px)]"
    >
      {/* Header Bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-y border-slate-200 bg-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12">
        <div className="flex flex-col items-start gap-1">
          <div className="mb-0.5 flex items-center gap-2">
            <Layers className="h-3.5 w-3.5 text-[#0284c7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              Engineered for Extreme Environments
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#0b192c] sm:text-3xl">
            Industries We{" "}
            <span className="text-[#0284c7]">Serve Across India</span>
          </h2>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setManualPaused((prev) => !prev)}
            aria-pressed={manualPaused}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-slate-200 bg-[#f4f7fb] px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 transition hover:border-[#0284c7] hover:text-[#0284c7]"
          >
            {manualPaused ? <Play size={12} /> : <Pause size={12} />}
            <span>{manualPaused ? "Resume" : "Pause"}</span>
          </button>

          <span className="hidden rounded-md border border-slate-200 bg-[#f4f7fb] px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 sm:block">
            12 Core Industrial Sectors
          </span>
        </div>
      </div>

      {/* Full-Bleed Steel-Navy Dual Conveyor Stage */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        onMouseEnter={() => setHoverPaused(true)}
        onMouseLeave={() => setHoverPaused(false)}
        className="relative flex min-h-0 flex-1 w-full flex-col bg-[#0b192c] text-white"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#0b192c] to-transparent sm:w-14" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#0b192c] to-transparent sm:w-14" />

        <ConveyorRow
          items={topTrack}
          startIndex={0}
          speed={28}
          paused={isPaused}
        />
        <ConveyorRow
          items={bottomTrack}
          startIndex={6}
          speed={22}
          paused={isPaused}
        />
      </motion.div>
    </section>
  );
}