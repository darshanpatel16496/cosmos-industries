"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Building2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

type Spec = { label: string; value: string };
type Card = { title: string; images: string[]; specs: Spec[] };

const NEW_CARDS: Card[] = [
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
      { label: "Plasma / Oxy Cutting", value: "High-precision automated cutting systems." },
      { label: "MIG, TIG & SAW", value: "Advanced multi-process welding setups." },
      { label: "Gauging & Drills", value: "Heavy-duty hole making capabilities." },
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
      { label: "VMC & HMC", value: "Vertical & horizontal machining centers." },
      { label: "VTL & Turning", value: "Large-diameter vertical turning lathes." },
      { label: "Floor Boring", value: "Heavy-duty boring for massive weldments." },
    ],
  },
  {
    title: "Heat Treatment & NDT",
    images: [
      "/images/infrastructure/treatment1.jpg",
      "/images/infrastructure/treatment2.jpg",
      "/images/infrastructure/treatment3.jpg",
      "/images/infrastructure/treatment4.jpg",
      "/images/infrastructure/treatment5.jpg",
      "/images/infrastructure/treatment6.jpg",
      "/images/infrastructure/treatment7.jpg",
      "/images/infrastructure/treatment8.jpg",
      "/images/infrastructure/treatment9.jpg",
      "/images/infrastructure/treatment10.jpg",
      "/images/infrastructure/treatment11.jpg",
      "/images/infrastructure/treatment12.jpg",
      "/images/infrastructure/treatment13.jpg",
      "/images/infrastructure/treatment14.jpg",
      "/images/infrastructure/treatment15.jpg",
      "/images/infrastructure/treatment16.jpg",
      "/images/infrastructure/treatment17.jpg",
      "/images/infrastructure/treatment18.jpg",
      "/images/infrastructure/treatment19.jpg",
      "/images/infrastructure/treatment20.jpg",
      "/images/infrastructure/treatment21.jpg",
      "/images/infrastructure/treatment22.jpg",
      "/images/infrastructure/treatment23.jpg",
    ],
    specs: [
      { label: "Heat Treatment", value: "Annealing, Normalizing, Quench Hardening" },
      { label: "Surface Hardening", value: "Induction & Flame Hardening" },
      { label: "NDT Facilities", value: "Ultrasonic, Magnetic Particle, Liquid Penetrant" },
    ],
  },
  {
    title: "Surface Prep & Painting",
    images: [
      "/images/infrastructure/painting.jpg",
      "/images/infrastructure/painting2.jpg",
    ],
    specs: [
      { label: "Copper Slag Blasting", value: "Superior surface profile preparation." },
      { label: "Shot Blasting", value: "Automated scale & rust removal." },
      { label: "Industrial Painting", value: "Multi-layer protective coating systems." },
    ],
  },
];

const LIST_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function InfrastructureSplit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const activeCard = NEW_CARDS[activeIndex] || NEW_CARDS[0];
  const currentImages = activeCard.images;

  const cardRef = useRef<HTMLDivElement>(null);
  const thumbStripRef = useRef<HTMLDivElement>(null);
  const hasMountedThumbs = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1.5deg", "-1.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    if (lightboxOpen || isHovering || currentImages.length <= 1) return;
    const timer = setInterval(() => {
      setImageIndex((p) => (p + 1) % currentImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [currentImages.length, lightboxOpen, isHovering]);

  // Horizontal-only thumbnail scroll after initial mount
  useEffect(() => {
    if (!hasMountedThumbs.current) {
      hasMountedThumbs.current = true;
      return;
    }
    const strip = thumbStripRef.current;
    if (!strip) return;
    const btn = strip.children[imageIndex] as HTMLElement | undefined;
    if (!btn) return;

    const scrollLeft =
      btn.getBoundingClientRect().left -
      strip.getBoundingClientRect().left +
      strip.scrollLeft -
      strip.clientWidth / 2 +
      btn.clientWidth / 2;

    strip.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
  }, [imageIndex]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight")
        setImageIndex((p) => (p + 1) % currentImages.length);
      if (e.key === "ArrowLeft")
        setImageIndex((p) => (p - 1 + currentImages.length) % currentImages.length);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxOpen, currentImages.length]);

  const handleTabChange = useCallback((idx: number) => {
    setActiveIndex(idx);
    setImageIndex(0);
  }, []);

  const goPrev = useCallback(
    () => setImageIndex((p) => (p - 1 + currentImages.length) % currentImages.length),
    [currentImages.length]
  );
  const goNext = useCallback(
    () => setImageIndex((p) => (p + 1) % currentImages.length),
    [currentImages.length]
  );

  const tiltStyle = useMemo(
    () => ({ rotateX, rotateY, transformStyle: "preserve-3d" as const }),
    [rotateX, rotateY]
  );

  return (
    <section
      id="infrastructure"
      className="relative flex w-full scroll-mt-[76px] flex-col overflow-hidden bg-[#f4f7fb] text-slate-900 lg:h-[calc(100dvh-76px)] lg:min-h-[600px]"
    >
      {/* Header Bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-y border-slate-200 bg-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12">
        <div className="flex flex-col items-start gap-1">
          <div className="mb-0.5 flex items-center gap-2">
            <Building2 className="h-3.5 w-3.5 text-[#0284c7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              Infrastructure Excellence
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#0b192c] sm:text-3xl">
            World-Class Manufacturing &amp;{" "}
            <span className="text-[#0284c7]">Heavy Engineering</span>
          </h2>
        </div>

        <div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-[#f4f7fb] px-4 py-1.5 font-mono text-xs font-semibold text-slate-700 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" />
          <span>65,000 Sq. Ft. Integrated Facility</span>
        </div>
      </div>

      {/* Edge-to-Edge 12-Column Split */}
      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-12">
        {/* LEFT: Full-Height Steel-Navy Image Viewer (7 Cols) */}
        <div
          className="flex min-h-[360px] w-full flex-col bg-[#0b192c] [perspective:1200px] lg:col-span-7 lg:h-full lg:border-r lg:border-slate-200"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
            onClick={() => setLightboxOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Open image gallery"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightboxOpen(true);
              }
            }}
            className="group relative flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden bg-[#0b192c] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42b4ff]"
          >
            {/* Autoplay Progress Indicator */}
            {currentImages.length > 1 && !isHovering && !lightboxOpen && (
              <motion.div
                key={`${activeIndex}-${imageIndex}-progress`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 4.5, ease: "linear" }}
                style={{ transformOrigin: "left" }}
                className="absolute left-0 right-0 top-0 z-30 h-[2px] bg-gradient-to-r from-[#0284c7] to-[#42b4ff]"
              />
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndex}-${imageIndex}`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentImages[imageIndex]}
                  alt={`${activeCard.title} - view ${imageIndex + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={activeIndex === 0 && imageIndex === 0}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061120] via-transparent to-[#061120]/50 opacity-95" />

            {/* Top Overlay Bar */}
            <div className="relative z-20 flex items-center justify-between p-4 sm:p-6">
              <div className="flex items-center gap-2 rounded-md border border-white/15 bg-[#081322]/85 px-3.5 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#42b4ff] shadow-[0_0_8px_#42b4ff]" />
                <span
                  aria-live="polite"
                  className="font-mono text-xs font-bold tracking-wider text-slate-100"
                >
                  {String(imageIndex + 1).padStart(2, "0")} /{" "}
                  {String(currentImages.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-1.5 rounded-md border border-white/15 bg-[#081322]/85 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition group-hover:border-[#42b4ff]/60 group-hover:bg-[#081322]">
                <Maximize2 size={13} className="text-[#42b4ff]" />
                <span>Full View</span>
              </div>
            </div>

            {/* Bottom Integrated Dock */}
            <div
              className="relative z-20 mt-auto flex items-end justify-between gap-3 p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {currentImages.length > 1 ? (
                <div
                  ref={thumbStripRef}
                  className="flex max-w-[calc(100%-92px)] gap-2 overflow-x-auto rounded-lg border border-white/15 bg-[#081322]/85 p-1.5 backdrop-blur-xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {currentImages.map((img, idx) => (
                    <button
                      key={`${img}-${idx}`}
                      type="button"
                      onClick={() => setImageIndex(idx)}
                      aria-label={`View image ${idx + 1}`}
                      aria-current={imageIndex === idx}
                      className={`relative h-11 w-16 shrink-0 cursor-pointer overflow-hidden rounded border-2 transition-all ${
                        imageIndex === idx
                          ? "border-[#42b4ff] shadow-[0_0_12px_rgba(66,180,255,0.55)]"
                          : "border-transparent opacity-55 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill sizes="64px" className="object-cover" />
                    </button>
                  ))}
                </div>
              ) : (
                <div />
              )}

              {currentImages.length > 1 && (
                <div className="flex shrink-0 gap-1.5">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-[#081322]/90 text-white backdrop-blur-md transition hover:border-[#42b4ff] hover:bg-[#42b4ff] hover:text-[#061220]"
                  >
                    <ChevronLeft size={17} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next image"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-[#081322]/90 text-white backdrop-blur-md transition hover:border-[#42b4ff] hover:bg-[#42b4ff] hover:text-[#061220]"
                  >
                    <ChevronRight size={17} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Light-Slate Spec Console (5 Cols) */}
        <div className="flex min-h-0 w-full flex-col bg-[#f4f7fb] lg:col-span-5 lg:h-full">
          {/* Structured 2x3 Tabs */}
          <div
            role="tablist"
            aria-label="Infrastructure categories"
            className="grid shrink-0 grid-cols-2 gap-2 border-b border-slate-200 bg-white p-4 sm:grid-cols-3 sm:p-5"
          >
            {NEW_CARDS.map((card, idx) => {
              const active = activeIndex === idx;
              return (
                <button
                  key={card.title}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleTabChange(idx)}
                  className={`relative flex min-h-[42px] cursor-pointer items-center justify-center overflow-hidden rounded-md border px-2.5 py-1.5 text-center text-xs font-bold leading-tight transition-all ${
                    active
                      ? "border-[#0284c7] bg-sky-50 text-[#0369a1] shadow-2xs"
                      : "border-slate-200 bg-[#f4f7fb] text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10">{card.title}</span>
                  {active && (
                    <motion.div
                      layoutId="activeTabLaser"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#0284c7]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Specs List */}
          <div className="flex min-h-0 flex-1 flex-col justify-center px-5 py-5 sm:px-7">
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b192c]">
                {activeCard.title}
              </span>
              <span className="rounded border border-sky-200 bg-sky-50 px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0284c7]">
                0{activeIndex + 1} / 0{NEW_CARDS.length}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard.title}
                variants={LIST_VARIANTS}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-3"
              >
                {activeCard.specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    variants={ITEM_VARIANTS}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3.5 shadow-2xs transition-all hover:border-[#0284c7]/50 hover:bg-sky-50/40"
                  >
                    <div className="flex flex-col gap-0.5 border-l-2 border-[#0284c7] pl-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        {spec.label}
                      </span>
                      {spec.value && (
                        <span className="text-xs font-medium text-slate-600 sm:text-[13px]">
                          {spec.value}
                        </span>
                      )}
                    </div>

                    <span className="shrink-0 font-mono text-xs font-bold text-slate-400 transition-colors group-hover:text-[#0284c7]">
                      0{i + 1}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
            className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-2xl"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              aria-label="Close gallery"
              className="absolute right-6 top-6 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition hover:bg-red-500/80"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-[85vh] w-full max-w-6xl flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={currentImages[imageIndex]}
                  alt={`${activeCard.title} preview ${imageIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {currentImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-black/75 text-white transition hover:bg-[#0284c7]"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-black/75 text-white transition hover:bg-[#0284c7]"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <p className="mt-4 font-mono text-xs font-medium text-slate-300">
                {activeCard.title} — Image {imageIndex + 1} of {currentImages.length} (Press Esc to close)
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}