"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Eye, X, Building2, Network, Maximize2 } from "lucide-react";

const policies = [
  { title: "Child Labour Policy", file: "/documents/child-labour-policy.pdf" },
  { title: "EHS Policy", file: "/documents/ehs-policy.pdf" },
  { title: "Employee Satisfaction", file: "/documents/employee-satisfaction-policy.pdf" },
  { title: "Quality Policy", file: "/documents/quality-policy.pdf" },
];

const orgChartImage = "/images/about/org-chart.jpg";

export default function About() {
  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [chartOpen, setChartOpen] = useState(false);

  return (
    <section id="about" className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#07111f] py-16 text-white scroll-mt-24">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#098eed]/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1920px] px-5 sm:px-8 lg:px-14">
        
        {/* Header - Badge and Title in the same row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-10 flex w-full flex-col items-start justify-start gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="inline-flex shrink-0 items-center gap-3 rounded-full border border-white/20 bg-white/[0.05] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#42b4ff] shadow-[0_0_14px_#42b4ff]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 sm:text-sm">About Us</span>
          </div>
          
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:whitespace-nowrap lg:text-[46px] xl:text-5xl 2xl:text-6xl">
            A Journey of <span className="text-[#42b4ff]">Engineering Excellence</span>
          </h2>
        </motion.div>

        {/* 50/50 Split Grid */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
          
          {/* LEFT: Main Text & Vision */}
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-between gap-6">
            
            {/* Increased Main Paragraph Text */}
            <div className="space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              <p>
                <span className="font-bold text-[#42b4ff]">COSMOS INDUSTRIES</span>, was established in 2015 as a dedicated fabrication unit. In a short period, we have proven our commitment to quality and excellence.
              </p>
              <p>
                We cater to top Original Equipment Manufacturers (OEMs) across sectors including Mining & Mineral Processing, Sugar Plants, Earth Moving Machinery, Cement Plants, Power Plants, Material Handling, Steel Plants, Defense Machinery, and General Engineering.
              </p>
            </div>

            {/* Vision Box */}
            <div className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#06101d] p-6 shadow-2xl lg:p-8">
              <div className="absolute -top-4 right-4 text-[100px] font-serif leading-none text-[#098eed]/10">
                "
              </div>
              <h4 className="relative z-10 flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#42b4ff] sm:text-base">
                <span className="h-2 w-2 rounded-full bg-[#42b4ff] shadow-[0_0_10px_#42b4ff]" /> Our Vision & Mission
              </h4>
              {/* Increased Vision Text */}
              <p className="relative z-10 mt-4 text-base leading-relaxed text-slate-300">
                To provide high-quality products with personal service and timely completion, delivered with a high level of accuracy. We maintain strict manufacturing specifications at every stage. We believe in building long-term partnerships with our clients by consistently exceeding expectations.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Bento Grid */}
          <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-4">
            
            {/* Sister Concerns */}
            <div className="rounded-3xl border border-white/10 bg-[#06101d] p-5 lg:p-6">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-300">Sister Concern Companies</h4>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="group flex flex-col justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-center transition-all hover:border-[#42b4ff]/30 hover:bg-[#0a1b2e]">
                  <Building2 size={22} className="mx-auto mb-2 text-[#42b4ff] transition-transform group-hover:scale-110" />
                  {/* Increased Sister Concern Titles */}
                  <p className="text-sm font-bold text-white leading-tight">Aspire Industries</p>
                  <p className="text-[10px] text-slate-400 mt-1">Heavy Fabrication</p>
                </div>
                <div className="group flex flex-col justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-center transition-all hover:border-[#42b4ff]/30 hover:bg-[#0a1b2e]">
                  <Building2 size={22} className="mx-auto mb-2 text-[#42b4ff] transition-transform group-hover:scale-110" />
                  <p className="text-sm font-bold text-white leading-tight">Metal Treat Ind.</p>
                  <p className="text-[10px] text-slate-400 mt-1">Heat Treatment</p>
                </div>
                <div className="group flex flex-col justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-center transition-all hover:border-[#42b4ff]/30 hover:bg-[#0a1b2e]">
                  <Building2 size={22} className="mx-auto mb-2 text-[#42b4ff] transition-transform group-hover:scale-110" />
                  <p className="text-sm font-bold text-white leading-tight">Metal Heat Treaters</p>
                  <p className="text-[10px] text-slate-400 mt-1">NABL Testing</p>
                </div>
              </div>
            </div>

            {/* Organization Chart Card */}
            <div className="rounded-3xl border border-white/10 bg-[#06101d] p-5 shadow-xl lg:p-6">
               <div className="mb-4 flex items-center justify-between">
                 <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Leadership</h4>
                 <Network size={20} className="text-[#42b4ff]" />
               </div>
               
               <div className="group relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl border border-[#42b4ff]/20 bg-[#098eed]/5">
                 <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#42b4ff]/10 blur-2xl transition-all group-hover:bg-[#42b4ff]/20" />
                 
                 <div className="relative z-10 flex items-center gap-3">
                   <button 
                     onClick={() => setChartOpen(true)}
                     // Increased Button Size and Text
                     className="flex items-center gap-2 rounded-full bg-[#098eed] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#098eed]/30 transition-all hover:-translate-y-0.5 hover:bg-[#0877c7]"
                   >
                     <Maximize2 size={16} /> View Organization Chart
                   </button>
                 </div>
               </div>
            </div>

            {/* Company Policies Box */}
            <div className="flex-1 rounded-3xl border border-white/10 bg-[#06101d] p-5 lg:p-6">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#42b4ff]">Company Policies</h4>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {policies.map((p, i) => (
                   <button 
                     key={i} 
                     onClick={() => setActivePdf(p.file)} 
                     // Increased Policy Button Text and Icons
                     className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-[#42b4ff]/30 hover:bg-[#098eed] hover:text-white"
                   >
                     <div className="flex items-center gap-2">
                       <FileText size={16} className="opacity-70" /> {p.title}
                     </div>
                     <Eye size={16} className="opacity-50 group-hover:opacity-100" />
                   </button>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ORGANIZATION CHART LIGHTBOX */}
      <AnimatePresence>
        {chartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          >
            <button
              onClick={() => setChartOpen(false)}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-red-500/80"
            >
              <X size={24} />
            </button>

            <div className="relative h-full w-full max-w-7xl">
              <Image
                src={orgChartImage}
                alt="Organization Chart"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            
            <div className="absolute inset-0 -z-10" onClick={() => setChartOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* PDF MODAL VIEWER */}
      <AnimatePresence>
        {activePdf && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#07111f] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <h3 className="text-sm font-bold text-white">Document Viewer</h3>
                <button onClick={() => setActivePdf(null)} className="rounded-full bg-white/5 p-2 text-slate-400 hover:text-red-400"><X size={18} /></button>
              </div>
              <div className="relative flex-1 bg-[#525659]">
                <iframe src={activePdf} className="h-full w-full border-none" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}