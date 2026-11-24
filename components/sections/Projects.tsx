"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import {
  ArrowRight,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon,
  Layers,
} from "lucide-react";

type Project = {
  id: number;
  category: string;
  title: string;
  desc: string;
  images: string[];
};

const projects: Project[] = [
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
      "/images/projects/project1-e.png",
    ],
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
      "/images/projects/project2-n.png",
    ],
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
      "/images/projects/project3-o.png",
    ],
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
    ],
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
      "/images/projects/project5-e.png",
    ],
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
      "/images/projects/project6-g.png",
      "/images/projects/project6-h.png",
      "/images/projects/project6-i.png",
    ],
  },
];

const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 28 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 28 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotlightBg = useMotionTemplate`radial-gradient(480px circle at ${spotX}px ${spotY}px, rgba(66, 180, 255, 0.2), transparent 45%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      x.set(mouseX / rect.width - 0.5);
      y.set(mouseY / rect.height - 0.5);
      spotX.set(mouseX);
      spotY.set(mouseY);
    },
    [x, y, spotX, spotY]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const cellBorders =
    "border-b border-white/10 " +
    (index % 2 === 0 ? "sm:border-r " : "sm:border-r-0 ") +
    (index % 3 !== 2 ? "lg:border-r " : "lg:border-r-0 ") +
    (index >= 3 ? "lg:border-b-0 " : "") +
    (index >= 4 ? "sm:border-b-0" : "");

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} gallery`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className={`group relative flex h-[280px] w-full cursor-pointer flex-col justify-end overflow-hidden bg-[#0b192c] p-6 text-white transition-colors hover:bg-[#10243e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#42b4ff] sm:h-[310px] lg:h-[340px] lg:p-8 ${cellBorders}`}
    >
      {/* GPU-Accelerated Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlightBg }}
      />

      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#061120]/95 via-[#0b192c]/55 to-[#081322]/40 transition-opacity duration-300" />

      {/* Top Row: Category Badge & Index */}
      <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between lg:left-8 lg:right-8 lg:top-7">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/30 bg-[#081322]/85 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-sky-100 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#42b4ff]" />
          {project.category}
        </span>

        <span className="font-mono text-xs font-bold tracking-wider text-slate-300/85">
          0{index + 1}
        </span>
      </div>

      {/* Center Hover Gallery Pill */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex items-center gap-2 rounded-md border border-[#42b4ff]/50 bg-[#081322]/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-lg">
          <Maximize2 size={14} className="text-[#42b4ff]" />
          <span>View Gallery</span>
        </div>
      </div>

      {/* Bottom Title & Photo Count */}
      <div className="relative z-20 flex items-end justify-between gap-4 transition-transform duration-300 group-hover:-translate-y-0.5">
        <div>
          <div className="mb-1.5 flex items-center gap-2">
            <ImageIcon size={14} className="text-[#42b4ff]" />
            <span className="font-mono text-xs font-bold text-[#42b4ff]">
              {project.images.length} Photos
            </span>
          </div>
          <h3 className="text-xl font-bold leading-snug text-white drop-shadow-md sm:text-2xl">
            {project.title}
          </h3>
        </div>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition group-hover:border-[#42b4ff] group-hover:bg-[#42b4ff] group-hover:text-[#061220]">
          <ArrowRight size={15} />
        </span>
      </div>
    </motion.div>
  );
};

export default function ProjectsGrid() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  const activeProject = projects[activeProjectIdx];
  const currentImages = activeProject.images;

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setGalleryImageIndex((prev) => (prev + 1) % currentImages.length);
    },
    [currentImages.length]
  );

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setGalleryImageIndex(
        (prev) => (prev - 1 + currentImages.length) % currentImages.length
      );
    },
    [currentImages.length]
  );

  const openGallery = useCallback((idx: number) => {
    setActiveProjectIdx(idx);
    setGalleryImageIndex(0);
    setGalleryOpen(true);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("navigate-to-section", { detail: id }));
  };

  useEffect(() => {
    if (!galleryOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGalleryOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [galleryOpen, nextImage, prevImage]);

  return (
    <section
      id="projects"
      style={{ overflowAnchor: "none" }}
      className="relative flex w-full scroll-mt-[76px] flex-col overflow-hidden bg-[#f4f7fb] text-slate-900"
    >
      {/* Header Bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-y border-slate-200 bg-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12">
        <div className="flex flex-col items-start gap-1">
          <div className="mb-0.5 flex items-center gap-2">
            <Layers className="h-3.5 w-3.5 text-[#0284c7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              Engineering Achievements
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#0b192c] sm:text-3xl">
            Delivered Sector{" "}
            <span className="text-[#0284c7]">Project Galleries</span>
          </h2>
        </div>

        <span className="hidden rounded-md border border-slate-200 bg-[#f4f7fb] px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 sm:block">
          6 Core Industrial Segments
        </span>
      </div>

      {/* Edge-to-Edge 3x2 Grid */}
      <div
        className="grid w-full grid-cols-1 bg-[#0b192c] sm:grid-cols-2 lg:grid-cols-3"
        style={{ perspective: "1500px" }}
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onClick={() => openGallery(idx)}
          />
        ))}
      </div>

      {/* Full-Width Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 bg-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12">
        <p className="text-xs font-medium text-slate-600 sm:text-sm">
          Need custom fabrication or precision machining for your OEM line?
        </p>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="group inline-flex items-center gap-2.5 rounded-md bg-[#0b192c] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#0284c7] sm:text-sm"
        >
          <span>Start Your Project</span>
          <ArrowRight
            size={16}
            className="text-[#42b4ff] transition-transform group-hover:translate-x-1 group-hover:text-white"
          />
        </a>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} gallery`}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl"
            onClick={() => setGalleryOpen(false)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setGalleryOpen(false);
              }}
              aria-label="Close gallery"
              className="absolute right-6 top-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition-colors hover:bg-red-500/80"
            >
              <X size={20} />
            </button>

            <div
              className="relative flex h-full w-full max-w-6xl flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1 overflow-hidden rounded-lg border border-white/10 bg-[#081322]">
                <Image
                  src={currentImages[galleryImageIndex]}
                  alt={`${activeProject.title} - Image ${galleryImageIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {currentImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-[#0284c7]"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-[#0284c7]"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              {/* Thumbnail Strip */}
              {currentImages.length > 1 && (
                <div className="mx-auto mt-3 flex max-w-full gap-1.5 overflow-x-auto rounded-lg border border-white/10 bg-[#081322]/90 p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {currentImages.map((img, idx) => (
                    <button
                      key={`${img}-${idx}`}
                      type="button"
                      onClick={() => setGalleryImageIndex(idx)}
                      aria-label={`Select photo ${idx + 1}`}
                      className={`relative h-10 w-14 shrink-0 cursor-pointer overflow-hidden rounded border-2 transition ${
                        galleryImageIndex === idx
                          ? "border-[#42b4ff]"
                          : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-2.5 text-center">
                <p className="font-mono text-xs font-semibold text-slate-300">
                  {activeProject.title} — Image {galleryImageIndex + 1} /{" "}
                  {currentImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}