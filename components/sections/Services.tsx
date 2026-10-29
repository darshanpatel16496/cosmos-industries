"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { image: "/images/services/service1.png", title: "Proven Machining Components", desc: "Crushing Plant" },
  { image: "/images/services/service2.png", title: "Engineering Excellence in Fabrication", desc: "Cement Plant Equipments" },
  { image: "/images/services/service3.png", title: "Heavy Fabrication & Machining Components", desc: "Mining Equipments" },
  { image: "/images/services/service4.png", title: "Heavy Fabrication Projects", desc: "Cement Plant Equipments" },
  { image: "/images/services/service5.png", title: "Heavy Component Manufacturing Excellence", desc: "Wagon Tippler" },
  { image: "/images/services/service6.png", title: "Fabrication Expertise", desc: "Material Handling Equipment." },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(5);

  return (
    <section
      id="services"
      className="relative scroll-mt-32 overflow-hidden bg-[#07111f] py-16 sm:py-20"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#098eed]/5 blur-[120px]"
      />

      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-10">
        
        {/* Section Title - LEFT ALIGNED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex w-full flex-col items-start justify-start gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          {/* Badge */}
          <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#42b4ff]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              What We Do
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Our <span className="text-[#42b4ff]">Services</span>
          </h2>
        </motion.div>

        {/* Horizontal Accordion */}
        <div className="flex h-[450px] w-full flex-col gap-2 overflow-hidden rounded-3xl border border-white/10 sm:flex-row lg:h-[550px]">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive ? "flex-[6]" : "flex-[1]"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-700 ${isActive ? "scale-100" : "scale-110"}`}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/40" : "bg-black/75"}`} />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col p-6 sm:p-8">
                  
                  {/* Active State */}
                  {isActive ? (
                    <div className="flex h-full flex-col justify-end">
                      <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 max-w-2xl text-base font-medium text-[#42b4ff] sm:text-lg"
                      >
                        {service.desc}
                      </motion.p>
                    </div>
                  ) : (
                    /* Inactive State: Wrapped Vertical Text */
                    <div className="flex h-full w-full items-center justify-center">
                      <h3 className="rotate-[-90deg] whitespace-normal text-center text-sm font-bold uppercase tracking-widest text-white/80 transition-colors group-hover:text-white sm:text-base lg:text-lg max-h-[300px] leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}