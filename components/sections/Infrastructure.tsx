"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, Maximize2, X } from "lucide-react";

// --- DATA ARRAYS ---
const newCards = [
  {
    title: "Facility & Land Area",
    images: [
      "/images/infrastructure/open-land.jpg",
      "/images/infrastructure/office.jpg",
      "/images/infrastructure/factory.jpg",
      "/images/infrastructure/shed-area.jpg",
    ],
    specs: [
      { label: "Total Land Area", value: "65,000 Sq. Ft." },
      { label: "Closed Shed Area", value: "40,000 Sq. Ft." },
      { label: "Open Land Area", value: "15,000 Sq. Ft." },
    ],
  },
  {
    title: "Man Power",
    images: ["/images/infrastructure/team.jpg"],
    specs: [
      { label: "Fabrication Team", value: "30+ Skilled Manpower" },
      { label: "Additional Load", value: "4 Contractors Available" },
      { label: "Support Staff", value: "Efficient Engineers" },
    ],
  },
  {
    title: "Fabrication Facilities",
    images: [
      "/images/infrastructure/welding1.jpg",
      "/images/infrastructure/welding2.jpg",
      "/images/infrastructure/welding3.jpg",
      "/images/infrastructure/welding4.jpg",
      "/images/infrastructure/welding5.jpg",
      "/images/infrastructure/welding6.jpg",
    ],
    specs: [
      { label: "Plasma / Oxy Cutting Machine", value: "" },
      { label: "MIG, TIG & SAW Machine", value: "" },
      { label: "Gauging, Radial Drill & Magnetic Drill Machine", value: "" },
    ],
  },
  {
    title: "Machining Facilities",
    images: [
      "/images/infrastructure/machining1.jpg",
      "/images/infrastructure/machining2.jpg",
      "/images/infrastructure/machining3.jpg",
      "/images/infrastructure/machining4.jpg",
      "/images/infrastructure/machining5.jpg",
      "/images/infrastructure/machining6.jpg",
      "/images/infrastructure/machining7.jpg",
      "/images/infrastructure/machining8.jpg",
      "/images/infrastructure/machining9.jpg",
      "/images/infrastructure/machining10.jpg",
    ],
    specs: [
      { label: "VMC & HMC", value: "" },
      { label: "VTL & Turning Machine", value: "" },
      { label: "Floor Boring Machine", value: "" },
    ],
  },
  {
    title: "Heat Treatement, Testing & NDT",
    images: [
      "/images/infrastructure/treatment1.jpg",
      // Add your 23 images here
      "/images/infrastructure/treatment23.jpg",
    ],
    specs: [
      { label: "Heat Treatment Process", value: "Annealing, Normalizing, Quench Hardening & Tempering" },
      { label: "Surface Hardening Process", value: "Induction Hardening, Flame Hardening" },
      { label: "NDT facilities", value: "Ultrasonic Testing, Magnetic Particle Testing, Liquid Penetrant Testing" },
    ],
  },
  {
    title: "Surface Preparation & Painting",
    images: ["/images/infrastructure/painting.jpg",
      "/images/infrastructure/painting2.jpg"
    ],
    specs: [
      { label: "Copper Slag Blasting", value: "" },
      { label: "Shot Blasting", value: "" },
      { label: "Painting", value: "" },
    ],
  },
];

const stats = [
  { value: "10+", label: "Years Exp." },
  { value: "35+", label: "Skilled Experts" },
  { value: "6+", label: "Capabilities" },
  { value: "2015", label: "Established" },
];

export default function InfrastructureSplit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  
  // State for Lightbox Modal
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  const activeCard = newCards[activeIndex];
  const currentImages = activeCard.images;

  // Auto-play images
  useEffect(() => {
    if (lightboxOpen) return;
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentImages.length, activeIndex, lightboxOpen]);

  return (
    <section id="infrastructure" className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#07111f] py-16 lg:py-20">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(9,142,237,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-10">
        
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
              Our Capabilities
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Our <span className="text-[#42b4ff]">Infrastructure</span>
          </h2>
        </motion.div>

        {/* Main Split Layout */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
          
          {/* LEFT: Large Image Slider (Clickable) */}
          <div 
            onClick={() => setLightboxOpen(true)}
            className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:aspect-auto lg:h-[500px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndex}-${imageIndex}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Added sizes prop to fix terminal warning */}
                <Image 
                  src={currentImages[imageIndex]} 
                  alt="Infrastructure" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101d] via-transparent to-transparent opacity-80" />
            
            {/* Expand Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2 rounded-full bg-black/60 px-5 py-3 text-sm font-bold text-white backdrop-blur-md">
                <Maximize2 size={18} /> Click to Expand
              </div>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-4 right-4 z-20 flex gap-2" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setImageIndex(p => (p - 1 + currentImages.length) % currentImages.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-[#098eed]"><ChevronLeft size={20}/></button>
              <button onClick={() => setImageIndex(p => (p + 1) % currentImages.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-[#098eed]"><ChevronRight size={20}/></button>
            </div>
          </div>

          {/* RIGHT: Tabs & Specs */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#06101d] p-6 sm:p-8">
            
            {/* Tabs Grid */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {newCards.map((card, idx) => (
                <button
                  key={idx}
                  onClick={() => { setActiveIndex(idx); setImageIndex(0); }}
                  className={`flex min-h-[50px] items-center justify-center rounded-xl px-2 py-3 text-center text-[11px] font-bold leading-tight transition-all sm:text-xs ${
                    activeIndex === idx 
                      ? "bg-[#098eed] text-white shadow-lg shadow-[#098eed]/30" 
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {card.title}
                </button>
              ))}
            </div>

            {/* Active Specs */}
            <div className="mt-8 flex-1">
              <h3 className="text-2xl font-bold text-[#42b4ff] sm:text-3xl">{activeCard.title}</h3>
              <div className="mt-6 space-y-4">
                {activeCard.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#42b4ff]" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{spec.label}</p>
                      {spec.value && <p className="text-base font-semibold text-white">{spec.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-xl bg-white/5 p-3 text-center">
                  <div className="text-xl font-black text-[#42b4ff]">{stat.value}</div>
                  <div className="text-[9px] font-bold uppercase text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-red-500/80"
            >
              <X size={24} />
            </button>

            <div className="relative flex h-full w-full max-w-6xl flex-col">
              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <Image
                  src={currentImages[imageIndex]}
                  alt="Full resolution"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={() => setImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)}
                    className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-[#098eed]"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={() => setImageIndex((prev) => (prev + 1) % currentImages.length)}
                    className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-[#098eed]"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}

              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">
                  {imageIndex + 1} / {currentImages.length}
                </p>
                <p className="text-xs text-slate-400">Click anywhere outside or press X to close</p>
              </div>
            </div>
            
            <div className="absolute inset-0 -z-10" onClick={() => setLightboxOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}