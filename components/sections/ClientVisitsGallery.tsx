"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
  ArrowRight,
  Handshake,
  LayoutGrid,
} from "lucide-react";

interface VisitorRecord {
  id: string;
  code: string;
  src: string;
  alt: string;
  featuredOnPage?: boolean;
}

const TOTAL_PHOTOS = 13;
const PAGE_SPOTLIGHT_LIMIT = 8;
const EASE_PRECISION = [0.22, 1, 0.36, 1] as const;

const VISITOR_ARCHIVE: VisitorRecord[] = Array.from(
  { length: TOTAL_PHOTOS },
  (_, idx) => {
    const n = idx + 1;
    return {
      id: `visitor-${n}`,
      code: String(n).padStart(2, "0"),
      src: encodeURI(`/images/visitors/V (${n}).jpeg`),
      alt: `Cosmos Industries visitor photo ${n}`,
      featuredOnPage: n <= PAGE_SPOTLIGHT_LIMIT,
    };
  }
);

export default function ClientVisitsGallery() {
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);
  const [lightboxSource, setLightboxSource] = useState<"spotlight" | "all">(
    "spotlight"
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const spotlightItems = useMemo(
    () => VISITOR_ARCHIVE.filter((item) => item.featuredOnPage),
    []
  );

  const activeList =
    lightboxSource === "all" ? VISITOR_ARCHIVE : spotlightItems;

  const isLightboxOpen = lightboxIndex !== null && activeList.length > 0;
  const currentItem =
    lightboxIndex !== null ? activeList[lightboxIndex] ?? null : null;

  const openFromSpotlight = (idx: number) => {
    setLightboxSource("spotlight");
    setLightboxIndex(idx);
  };

  const openFromAll = (idx: number) => {
    setLightboxSource("all");
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % activeList.length
    );
  }, [activeList.length]);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + activeList.length) % activeList.length
    );
  }, [activeList.length]);

  useEffect(() => {
    if (!isLightboxOpen && !archiveModalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          closeLightbox();
        } else {
          setArchiveModalOpen(false);
        }
      }
      if (isLightboxOpen) {
        if (e.key === "ArrowRight") nextPhoto();
        if (e.key === "ArrowLeft") prevPhoto();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isLightboxOpen, archiveModalOpen, closeLightbox, nextPhoto, prevPhoto]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("navigate-to-section", { detail: id }));
  };

  return (
    <section
      id="gallery"
      className="relative flex w-full scroll-mt-[76px] flex-col overflow-hidden bg-[#f4f7fb] text-slate-900"
    >
      {/* Header Bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-y border-slate-200 bg-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: EASE_PRECISION }}
          className="flex flex-col items-start gap-1"
        >
          <div className="mb-0.5 flex items-center gap-2">
            <Handshake className="h-3.5 w-3.5 text-[#0284c7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              Client &amp; Industry Delegations
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#0b192c] sm:text-3xl">
            Visitor Archive &amp;{" "}
            <span className="text-[#0284c7]">Plant Walkthroughs</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.08, ease: EASE_PRECISION }}
          className="flex items-center gap-2.5"
        >
          <span className="hidden rounded-md border border-slate-200 bg-[#f4f7fb] px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 sm:inline-flex">
            {String(VISITOR_ARCHIVE.length).padStart(2, "0")} TOTAL FRAMES
          </span>

          <button
            type="button"
            onClick={() => setArchiveModalOpen(true)}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-md border border-[#0b192c] bg-[#0b192c] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:border-[#0284c7] hover:bg-[#0284c7] active:scale-[0.98]"
          >
            <LayoutGrid
              size={14}
              className="text-[#42b4ff] transition-transform duration-200 group-hover:scale-105 group-hover:text-white"
            />
            <span>Full Archive</span>
          </button>
        </motion.div>
      </div>

      {/* Spotlight Grid */}
      <div className="grid w-full grid-cols-1 gap-px bg-slate-800/80 sm:grid-cols-2 lg:grid-cols-4">
        {spotlightItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.5,
              delay: Math.min(idx * 0.045, 0.32),
              ease: EASE_PRECISION,
            }}
            onClick={() => openFromSpotlight(idx)}
            role="button"
            tabIndex={0}
            aria-label={`Open visitor photo ${item.code}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openFromSpotlight(idx);
              }
            }}
            className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#0b192c] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#42b4ff]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050d18]/45 via-transparent to-[#050d18]/20 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="pointer-events-none absolute inset-x-3.5 top-3.5 z-10 flex items-center justify-between">
              <span className="rounded bg-[#061120]/80 px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.18em] text-[#42b4ff] backdrop-blur-xs transition-colors duration-200 group-hover:bg-[#061120]">
                {item.code}
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded bg-[#061120]/80 text-white opacity-0 backdrop-blur-xs transition-all duration-300 group-hover:bg-[#42b4ff] group-hover:text-[#061220] group-hover:opacity-100">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 bg-white px-6 py-4 sm:px-10 lg:px-12">
        <button
          type="button"
          onClick={() => setArchiveModalOpen(true)}
          className="group inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#0284c7] transition-colors hover:text-[#0b192c]"
        >
          <span>View all {VISITOR_ARCHIVE.length} visitor photos in archive</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="group inline-flex items-center gap-2 rounded-md bg-[#0b192c] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#0284c7] active:scale-[0.98]"
        >
          <span>Schedule Visit</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>
      </div>

      {/* Full Archive Modal */}
      <AnimatePresence>
        {archiveModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE_PRECISION }}
            role="dialog"
            aria-modal="true"
            aria-label="Full visitor photo archive"
            className="fixed inset-0 z-[115] flex items-center justify-center bg-[#040a14]/90 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setArchiveModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.28, ease: EASE_PRECISION }}
              className="flex max-h-[88dvh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#0b192c] text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#42b4ff]">
                    Complete Visitor Roll
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                    All {VISITOR_ARCHIVE.length} Delegation &amp; Plant Visit
                    Frames
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setArchiveModalOpen(false)}
                  aria-label="Close full archive"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/5 text-slate-200 transition hover:border-red-400/50 hover:bg-red-500/20 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto p-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:p-7">
                {VISITOR_ARCHIVE.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => openFromAll(idx)}
                    className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-[#081322] text-left outline-none transition-colors duration-200 hover:border-[#42b4ff]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-2 top-2 rounded bg-[#061120]/80 px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#42b4ff]">
                      {item.code}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {isLightboxOpen && currentItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_PRECISION }}
            role="dialog"
            aria-modal="true"
            aria-label={currentItem.alt}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[#040a14]/95 p-4 backdrop-blur-xl sm:p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.25, ease: EASE_PRECISION }}
              className="relative flex h-full w-full max-w-6xl flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#42b4ff]">
                  FRAME {currentItem.code} · {lightboxIndex + 1} /{" "}
                  {activeList.length}
                </span>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close viewer"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/5 text-slate-200 transition hover:border-red-400/50 hover:bg-red-500/20 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg border border-white/10 bg-[#081322]">
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />

                {activeList.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevPhoto}
                      aria-label="Previous photo"
                      className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-[#061120]/80 text-white backdrop-blur-xs transition hover:border-[#42b4ff] hover:text-[#42b4ff]"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={nextPhoto}
                      aria-label="Next photo"
                      className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-[#061120]/80 text-white backdrop-blur-xs transition hover:border-[#42b4ff] hover:text-[#42b4ff]"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div className="mt-3 flex gap-1.5 overflow-x-auto py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {activeList.map((thumb, idx) => (
                  <button
                    key={thumb.id}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`Select frame ${thumb.code}`}
                    className={`relative h-9 w-12 shrink-0 cursor-pointer overflow-hidden rounded border transition ${
                      lightboxIndex === idx
                        ? "border-[#42b4ff] ring-1 ring-[#42b4ff]"
                        : "border-white/10 opacity-45 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={thumb.src}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}