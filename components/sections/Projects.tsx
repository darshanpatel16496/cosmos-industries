"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Maximize2, ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";

// --- DATA ARRAYS ---
const projects = [
  { 
    id: 1, 
    category: "AUTOMOBILE", 
    title: "Automobile Components", 
    desc: "",
    images: [
      "/images/projects/project1.png",
      "/images/projects/project1-b.png", 
      "/images/projects/project1-c.png",
      "/images/projects/project1-d.png",
      "/images/projects/project1-e.png"
    ] 
  },
  { 
    id: 2, 
    category: "CEMENT PLANT", 
    title: "Cement Plant Equipments", 
    desc: "",
    images: [
      "/images/projects/project2.png",
      "/images/projects/project2-b.png",
      "/images/projects/project2-c.png",
      "/images/projects/project2-d.png",
      "/images/projects/project2-e.png",
      "/images/projects/project2-f.png",
      "/images/projects/project2-g.png",
      "/images/projects/project2-h.png",
      "/images/projects/project2-i.png",
      "/images/projects/project2-j.png",
      "/images/projects/project2-k.png",
      "/images/projects/project2-l.png",
      "/images/projects/project2-m.png",
      "/images/projects/project2-n.png"
    ] 
  },
  { 
    id: 3, 
    category: "CRUSHING PLANT", 
    title: "Crushing Plant Equipments", 
    desc: "",
    images: [
      "/images/projects/project3.png",
      "/images/projects/project3-b.png",
      "/images/projects/project3-c.png",
      "/images/projects/project3-d.png",
      "/images/projects/project3-e.png",
      "/images/projects/project3-f.png",
      "/images/projects/project3-g.png",
      "/images/projects/project3-h.png",
      "/images/projects/project3-i.png",
      "/images/projects/project3-j.png",
      "/images/projects/project3-k.png",
      "/images/projects/project3-l.png",
      "/images/projects/project3-m.png",
      "/images/projects/project3-n.png",
      "/images/projects/project3-o.png"
    ] 
  },
  { 
    id: 4, 
    category: "MATERIAL HANDLING", 
    title: "Material Handling Equipments", 
    desc: "",
    images: [
      "/images/projects/project4.png",
      "/images/projects/project4-b.png",
      "/images/projects/project4-c.png",
      "/images/projects/project4-d.png",
      "/images/projects/project4-e.png",
      "/images/projects/project4-f.png",
      "/images/projects/project4-j.png",
      "/images/projects/project4-k.png",
    ] 
  },
  { 
    id: 5, 
    category: "MINING", 
    title: "Mining Equipments", 
    desc: "",
    images: [
      "/images/projects/project5.png",
      "/images/projects/project5-b.png",
      "/images/projects/project5-c.png",
      "/images/projects/project5-d.png",
      "/images/projects/project5-e.png"
    ] 
  },
  { 
    id: 6, 
    category: "SUGAR PLANT", 
    title: "Sugar Plant Equipments", 
    desc: "",
    images: [
      "/images/projects/project6.png",
      "/images/projects/project6-b.png",
      "/images/projects/project6-c.png",
      "/images/projects/project6-d.png",
      "/images/projects/project6-e.png",
      "/images/projects/project6-f.png",
      "/images/projects/project6-b.png",
      "/images/projects/project6-h.png",
      "/images/projects/project6-i.png"
    ] 
  },
];

export default function ProjectsBento() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  
  // Gallery Lightbox State
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  const activeProject = projects[selectedIdx];
  const currentImages = activeProject.images;

  // Gallery Controls
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section id="projects" className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#07111f] py-16 lg:py-20">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(9,142,237,0.08),transparent_45%)]" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading - LEFT ALIGNED WITH BADGE */}
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
              Our Projects
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineering <span className="text-[#42b4ff]">Achievements</span>
          </h2>
        </motion.div>

        {/* Main Layout Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          
          {/* LEFT: Big Featured Spotlight Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedIdx}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => { setGalleryImageIndex(0); setGalleryOpen(true); }}
                className="group relative flex h-[400px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-[#06101d] p-8 shadow-2xl sm:h-[500px] lg:h-full lg:min-h-[600px]"
              >
                <Image 
                  src={currentImages[0]} 
                  alt={activeProject.title} 
                  fill 
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/40 to-transparent z-10 pointer-events-none" />
                
                {/* Badge */}
                <div className="absolute left-6 top-6 z-20">
                  <span className="rounded-full bg-[#098eed] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-[#098eed]/30">
                    {activeProject.category}
                  </span>
                </div>

                {/* Expand Icon Overlay (On Hover) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                  <div className="flex items-center gap-2 rounded-full bg-black/60 px-5 py-3 text-sm font-bold text-white backdrop-blur-md">
                    <Maximize2 size={18} /> View Gallery
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative z-20">
                  <div className="flex items-center gap-2 mb-2">
                     <ImageIcon size={16} className="text-[#42b4ff]"/>
                     <span className="text-xs font-bold text-[#42b4ff]">{currentImages.length} Photos</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    {activeProject.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm text-slate-300 sm:text-base">
                    {activeProject.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: 6 Buttons */}
          <div className="flex flex-col justify-center gap-3">
            {projects.map((project, idx) => {
              const isSelected = selectedIdx === idx;
              
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                    isSelected
                      ? "border-[#42b4ff]/50 bg-[#0a1b2e] shadow-[0_0_20px_rgba(9,142,237,0.15)] transform scale-[1.02]"
                      : "border-white/10 bg-[#06101d]/90 hover:border-[#42b4ff]/30 hover:bg-[#0a1b2e]"
                  }`}
                >
                  <div>
                    <p className={`text-[10px] font-bold uppercase tracking-wider sm:text-xs ${
                      isSelected ? "text-[#42b4ff]" : "text-slate-500"
                    }`}>
                      {project.category}
                    </p>
                    <h4 className={`mt-1 text-sm font-bold transition-colors sm:text-base ${
                      isSelected ? "text-white" : "text-slate-300"
                    }`}>
                      {project.title}
                    </h4>
                  </div>

                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                    isSelected 
                      ? "border-[#42b4ff]/50 bg-[#098eed]/20 text-[#42b4ff]" 
                      : "border-white/10 text-slate-500 group-hover:text-white"
                  }`}>
                    <ArrowUpRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition-all hover:border-[#42b4ff]/50 hover:bg-[#098eed]/10"
          >
            Start Your Project <ArrowRight size={16} className="text-[#42b4ff]" />
          </a>
        </div>

      </div>

      {/* ========================================================= */}
      {/* FULL SCREEN GALLERY LIGHTBOX */}
      {/* ========================================================= */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-red-500/80"
            >
              <X size={24} />
            </button>

            <div className="relative flex h-full w-full max-w-6xl flex-col">
              {/* Image Container */}
              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <Image
                  src={currentImages[galleryImageIndex]}
                  alt="Project Gallery"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Navigation Arrows */}
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-[#098eed]"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-[#098eed]"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">
                  {activeProject.title} - Image {galleryImageIndex + 1} / {currentImages.length}
                </p>
              </div>
            </div>
            
            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={() => setGalleryOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}