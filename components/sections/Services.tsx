"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench } from "lucide-react";

const services = [
  {
    image: "/images/services/service1.png",
    title: "Proven Machining Components",
    desc: "Crushing Plant",
  },
  {
    image: "/images/services/service2.png",
    title: "Engineering Excellence in Fabrication",
    desc: "Cement Plant Equipments",
  },
  {
    image: "/images/services/service3.png",
    title: "Heavy Fabrication & Machining Components",
    desc: "Mining Equipments",
  },
  {
    image: "/images/services/service4.png",
    title: "Heavy Fabrication Projects",
    desc: "Cement Plant Equipments",
  },
  {
    image: "/images/services/service5.png",
    title: "Heavy Component Manufacturing Excellence",
    desc: "Wagon Tippler",
  },
  {
    image: "/images/services/service6.png",
    title: "Fabrication Expertise",
    desc: "Material Handling Equipment",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section
      id="services"
      className="relative flex min-h-[calc(100dvh-76px)] w-full scroll-mt-[76px] flex-col overflow-hidden bg-[#0b192c] text-white sm:h-[calc(100dvh-76px)]"
    >
      {/* Header Bar */}
      <div className="flex shrink-0 flex-col justify-center border-b border-slate-200 bg-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12">
        <div className="flex flex-col items-start gap-1">
          <div className="mb-0.5 flex items-center gap-2">
            <Wrench className="h-3.5 w-3.5 text-[#0284c7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              What We Do
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#0b192c] sm:text-3xl">
            Precision &amp;{" "}
            <span className="text-[#0284c7]">Heavy Industrial Solutions</span>
          </h2>
        </div>
      </div>

      {/* Accordion Strip */}
      <div className="flex min-h-0 flex-1 flex-col divide-y divide-white/10 sm:flex-row sm:divide-x sm:divide-y-0">
        {services.map((service, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={service.title}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
              aria-expanded={isActive}
              className={`relative cursor-pointer overflow-hidden outline-none transition-all duration-700 ease-in-out focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#42b4ff] ${
                isActive ? "min-h-[300px] flex-[6] sm:min-h-0" : "flex-[1] bg-[#081322]"
              }`}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.03 : 1,
                  filter: isActive
                    ? "grayscale(0%) brightness(1)"
                    : "grayscale(100%) brightness(0.32)",
                }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  className="object-cover"
                />
              </motion.div>

              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-[#061120]/95 via-[#061120]/45 to-transparent opacity-100"
                    : "bg-[#061120]/70 opacity-100"
                }`}
              />

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.14, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.45 }}
                    className="pointer-events-none absolute right-6 top-5 font-mono text-[100px] font-black leading-none text-white sm:text-[128px]"
                  >
                    0{index + 1}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10 flex h-full w-full flex-col p-5 sm:p-8 lg:p-10">
                {isActive ? (
                  <div className="mt-auto max-w-3xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-[#42b4ff]/40 bg-[#081322]/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-100 backdrop-blur-md">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#42b4ff]" />
                          {service.desc}
                        </div>
                        <h3 className="text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-[2.75rem]">
                          {service.title}
                        </h3>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-between py-2 sm:flex-col sm:items-center sm:justify-between sm:py-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#42b4ff]">
                      0{index + 1}
                    </span>

                    <span className="truncate text-xs font-bold uppercase tracking-[0.14em] text-slate-200 sm:hidden">
                      {service.title}
                    </span>

                    <span className="hidden max-h-[65%] overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300/85 transition-colors hover:text-white [writing-mode:vertical-rl] sm:block lg:text-xs">
                      {service.title}
                    </span>

                    <span className="hidden h-1.5 w-1.5 rounded-full bg-white/30 sm:block" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}