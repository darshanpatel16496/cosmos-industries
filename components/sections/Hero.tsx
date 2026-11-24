"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Maximize2,
  FileText,
  Download,
  Target,
  X,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
  Compass,
} from "lucide-react";
import Image from "next/image";

export default function HeroArchitecturalSplit() {
  const [isOrgChartOpen, setIsOrgChartOpen] = useState(false);

  const reveal: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const policies = [
    { name: "Child Labour Policy", url: "/documents/child-labour-policy.pdf" },
    { name: "EHS Policy", url: "/documents/ehs-policy.pdf" },
    { name: "Employee Satisfaction", url: "/documents/employee-satisfaction-policy.pdf" },
    { name: "Quality Policy", url: "/documents/quality-policy.pdf" },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("navigate-to-section", { detail: id }));
  };

  return (
    <>
      <section
        id="home"
        className="relative isolate flex w-full flex-col overflow-hidden bg-[#0b192c] pt-20 text-slate-900 lg:h-dvh lg:min-h-[680px] lg:pt-[88px]"
      >
        <div className="grid min-h-0 flex-1 grid-cols-1 border-t border-white/10 bg-[#f4f7fb] lg:grid-cols-12">
          {/* LEFT: Steel-Navy Video Showcase */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="group relative flex flex-col justify-between overflow-hidden bg-[#0b192c] p-6 text-white sm:p-10 lg:col-span-7 lg:border-r lg:border-slate-800 lg:px-12 lg:py-9 xl:col-span-8"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-[1800ms] group-hover:scale-[1.02]"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>

            {/* Layered Industrial Vignette & Subtle Technical Grid */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#081322]/95 via-[#0b192c]/80 to-[#0e223b]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081322]/90 via-transparent to-[#081322]/50" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Top Status Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2.5 rounded-md border border-sky-400/30 bg-sky-500/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#42b4ff] shadow-[0_0_10px_#42b4ff]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-100">
                  Engineering Excellence Since 2015
                </span>
              </div>

              <span className="hidden items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300/80 xl:flex">
                <span className="h-px w-8 bg-[#42b4ff]" />
                OEM Heavy Manufacturing
              </span>
            </div>

            {/* Center Display Headline */}
            <div className="relative z-10 my-auto py-6">
              <h1 className="max-w-[900px] text-[clamp(2.5rem,4.8vw,5.25rem)] font-light leading-[1.03] tracking-[-0.04em] text-white">
                Heavy Fabrication <span className="font-normal text-sky-300/80">&amp;</span>
                <span className="mt-1.5 block font-semibold text-white">
                  Precision CNC Machining<span className="text-[#42b4ff]">.</span>
                </span>
              </h1>

              <p className="mt-5 max-w-[600px] text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
                Advanced OEM production and customized heavy engineering built
                for the world&apos;s most rigorous industrial sectors.
              </p>

              {/* Machined Rectangular CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="group/cta inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-[#42b4ff] px-7 py-3.5 text-sm font-bold tracking-wide text-[#061220] shadow-[0_8px_24px_rgba(66,180,255,0.25)] transition hover:-translate-y-0.5 hover:bg-white sm:text-[15px]"
                >
                  Start a Project
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  />
                </button>
                <button
                  onClick={(e) => handleNavClick(e, "infrastructure")}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-sky-300/50 hover:bg-white/10 sm:text-[15px]"
                >
                  Explore Capabilities
                  <ChevronRight size={17} className="text-[#42b4ff]" />
                </button>
              </div>
            </div>

            {/* Bottom Technical Spec Strip (Desktop) */}
            <div className="relative z-10 hidden items-center gap-8 border-t border-white/10 pt-4 text-xs text-slate-300/90 sm:flex">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#42b4ff]">
                  Core Focus
                </span>
                <span className="font-medium text-white">Custom OEM Assemblies</span>
              </div>
              <div className="h-6 w-px bg-white/15" />
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#42b4ff]">
                  Sectors Served
                </span>
                <span className="font-medium text-white">Mining, Defense, Power &amp; Steel</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: High-Contrast Light Profile & Compliance Rail */}
          <div className="flex min-h-0 flex-col divide-y divide-slate-200 bg-[#f4f7fb] lg:col-span-5 xl:col-span-4">
            {/* Top Card: Company Overview & Vision */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="flex flex-1 flex-col justify-between bg-white p-6 sm:p-7 lg:px-7 lg:py-6"
            >
              <div>
                <div className="mb-3 flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-[#0284c7]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
                      Company Profile
                    </span>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-[#0b192c] sm:text-2xl">
                    A Journey of <span className="text-[#0284c7]">Engineering Excellence</span>
                  </h2>
                </div>

                <p className="text-[13.5px] leading-[1.65] text-slate-600 xl:text-[14.5px]">
                  <strong className="font-semibold text-slate-900">
                    COSMOS INDUSTRIES
                  </strong>
                  , established in 2015, is a dedicated fabrication unit catering
                  to top OEMs across Mining &amp; Mineral Processing, Sugar,
                  Cement, Power, Material Handling, Steel, Defense Machinery,
                  and General Engineering.
                </p>
              </div>

              <div className="mt-4 rounded-lg border border-slate-200 border-l-4 border-l-[#0284c7] bg-slate-50/90 p-3.5 sm:p-4">
                <div className="mb-1.5 flex items-center gap-2">
                  <Target size={15} className="text-[#0284c7]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0b192c]">
                    Our Vision &amp; Mission
                  </span>
                </div>
                <p className="text-[12.5px] leading-[1.6] text-slate-600 xl:text-[13.5px]">
                  To deliver high-quality products with timely completion and
                  strict manufacturing specifications, building long-term OEM
                  partnerships by consistently exceeding expectations.
                </p>
              </div>
            </motion.div>

            {/* Bottom Card: Quality & Compliance */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="flex flex-1 flex-col justify-between bg-[#f4f7fb] p-6 sm:p-7 lg:px-7 lg:py-6"
            >
              <div>
                <div className="mb-3 flex flex-col items-start gap-1">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#0284c7]" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
                        Governance
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsOrgChartOpen(true)}
                      className="group inline-flex cursor-pointer items-center gap-1.5 rounded border border-sky-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0284c7] shadow-2xs transition hover:border-[#0284c7] hover:bg-[#0284c7] hover:text-white"
                    >
                      Org Chart
                      <Maximize2 size={11} />
                    </button>
                  </div>

                  <h2 className="text-xl font-bold tracking-tight text-[#0b192c] sm:text-2xl">
                    Quality &amp; <span className="text-[#0284c7]">Compliance</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {policies.map((policy) => (
                    <a
                      key={policy.name}
                      href={policy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 shadow-2xs transition hover:border-[#0284c7] hover:bg-sky-50/60"
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <FileText
                          size={15}
                          className="shrink-0 text-slate-400 transition-colors group-hover:text-[#0284c7]"
                        />
                        <span className="truncate text-[12.5px] font-medium text-slate-700 group-hover:text-slate-950 xl:text-[13px]">
                          {policy.name}
                        </span>
                      </span>
                      <Download
                        size={14}
                        className="shrink-0 text-slate-400 transition group-hover:translate-y-0.5 group-hover:text-[#0284c7]"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-slate-200/90 pt-2.5 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
                  <CheckCircle2 size={14} className="text-[#0284c7]" />
                  ISO 9001:2015 Certified Standards
                </span>
                <span className="hidden font-medium text-slate-400 sm:inline">
                  Verified Policies
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organization Chart Modal */}
      <AnimatePresence>
        {isOrgChartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-md sm:p-6"
            onClick={() => setIsOrgChartOpen(false)}
            role="presentation"
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="org-chart-title"
            >
              <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-200 bg-sky-50 text-[#0284c7]">
                    <Maximize2 size={18} />
                  </span>
                  <div>
                    <h3 id="org-chart-title" className="text-base font-semibold text-slate-900 sm:text-lg">
                      Organization Chart
                    </h3>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Cosmos Industries Hierarchy
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOrgChartOpen(false)}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                  aria-label="Close organization chart"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto bg-slate-100 p-3 sm:p-7">
                <div className="flex min-h-full items-center justify-center rounded-lg border border-slate-200 bg-white p-2 sm:p-4">
                  <Image
                    src="/images/about/org-chart.jpg"
                    alt="Cosmos Industries Organization Chart"
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}