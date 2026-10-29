"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  { image: "/images/industries/energy.jpg", title: "Energy" },
  { image: "/images/industries/mining.jpg", title: "Mining" },
  { image: "/images/industries/hydraulics.jpg", title: "Hydraulics" },
  { image: "/images/industries/marine.jpg", title: "Marine" },
  { image: "/images/industries/oilgas.jpg", title: "Oil & Gas" },
  { image: "/images/industries/cement.jpg", title: "Cement Plant" },
  { image: "/images/industries/automobile.jpg", title: "Automobile" },
  { image: "/images/industries/construction.jpg", title: "Construction" },
  { image: "/images/industries/sugar.jpg", title: "Sugar Plant" },
  { image: "/images/industries/piping.jpg", title: "Piping Solutions" },
  { image: "/images/industries/gears.jpg", title: "Gears & Bearings" },
  { image: "/images/industries/earthmoving.jpg", title: "Earth Moving" },
];

export default function IndustriesExpand() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Split into 3 columns for desktop
  const columns = [
    industries.slice(0, 4),
    industries.slice(4, 8),
    industries.slice(8, 12),
  ];

  return (
    <section id="industries" className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#06101d] py-16 lg:py-10">
      
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-10">
        
        {/* Section Title - NOW WITH BADGE AND LEFT ALIGNED */}
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
              Industries
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            We <span className="text-[#42b4ff]">Serve</span>
          </h2>
        </motion.div>

        {/* 3 Column Layout */}
        <div className="grid h-[600px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex h-full flex-col gap-4">
              {column.map((industry) => {
                const globalIndex = industries.findIndex((i) => i.title === industry.title);
                const isHovered = hoveredIndex === globalIndex;
                
                return (
                  <motion.div
                    key={industry.title}
                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    // The core animation: flex-grow changes based on hover state
                    animate={{ flex: isHovered ? 2 : 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="group relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg"
                  >
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 transition-colors duration-500 ${isHovered ? "bg-black/20" : "bg-[#06101d]/60"}`} />
                    
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className={`font-bold text-white transition-all duration-300 ${isHovered ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                        {industry.title}
                      </h3>
                      {/* Description that fades in only on hover */}
                      <motion.p
                        initial={false}
                        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
                        className="mt-2 text-sm text-slate-300 overflow-hidden"
                      >
                        Explore our specialized engineering capabilities for the {industry.title} sector.
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}