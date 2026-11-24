// components/sections/About.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Eye, X, ArrowUpRight, Maximize2, Factory } from "lucide-react";

const policies = [
  { title: "Child Labour Policy", file: "/documents/child-labour-policy.pdf" },
  { title: "EHS Policy", file: "/documents/ehs-policy.pdf" },
  { title: "Employee Satisfaction", file: "/documents/employee-satisfaction-policy.pdf" },
  { title: "Quality Policy", file: "/documents/quality-policy.pdf" },
];

const sisterConcerns = [
  { name: "Aspire Industries", type: "Heavy Fabrication" },
  { name: "Metal Treat Ind.", type: "Heat Treatment" },
  { name: "Metal Heat Treaters", type: "NABL Testing" },
];

const sectors = [
  "Mining & Mineral Processing", "Sugar Plants", "Earth Moving Machinery", 
  "Cement Plants", "Power Plants", "Material Handling", 
  "Steel Plants", "Defense Machinery", "General Engineering"
];

const orgChartImage = "/images/about/org-chart.jpg";

export default function About() {
  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [chartOpen, setChartOpen] = useState(false);

  return (
    <section id="about" className="relative flex w-full flex-col justify-center overflow-hidden bg-[#05080F] py-24 text-white scroll-mt-24 lg:py-32">
      
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-96 w-96 rounded-full bg-[#42b4ff]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-16 flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#42b4ff]">01 / About Us</span>
              <div className="h-[1px] w-12 bg-[#42b4ff]" />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl lg:text-6xl">
              A Journey of <br className="hidden lg:block" />
              <span className="text-[#42b4ff]">Engineering Excellence.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 lg:text-base">
            Established in 2015, we have rapidly evolved into a premier fabrication unit, proving our commitment to quality for top OEMs globally.
          </p>
        </motion.div>

        {/* 50/50 Split Grid */}
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT: Main Text & Sectors */}
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-10">
            
            <div className="space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              <p>
                <span className="font-bold text-white">COSMOS INDUSTRIES</span> was established in 2015 as a dedicated fabrication unit. In a short period, we have proven our commitment to quality and excellence in heavy engineering.
              </p>
              <p>
                We cater to top Original Equipment Manufacturers (OEMs) across demanding sectors globally. Our capabilities span massive scale fabrication, precision machining, and complex assemblies.
              </p>
            </div>

            {/* Sectors List - Replaces Vision */}
            <div className="flex-1">
              <h4 className="mb-6 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                <Factory size={16} className="text-[#42b4ff]" /> Sectors We Serve
              </h4>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {sectors.map((sector, i) => (
                  <li key={i} className="flex items-center gap-3 border-b border-white/5 pb-3 text-sm text-slate-300 transition-colors hover:text-white">
                    <div className="h-1.5 w-1.5 bg-[#42b4ff] shrink-0" /> {sector}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT: Technical Data Grid */}
          <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-10">
            
            {/* Sister Concerns - Clean List */}
            <div>
              <h4 className="mb-4 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>Group Companies</span>
                <span className="text-[#42b4ff]">02</span>
              </h4>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {sisterConcerns.map((company, i) => (
                  <div key={i} className="group flex items-center justify-between py-5 transition-colors hover:bg-white/5">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-slate-600">0{i + 1}</span>
                      <div>
                        <div className="font-bold text-white transition-colors group-hover:text-[#42b4ff]">{company.name}</div>
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-500">{company.type}</div>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-slate-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#42b4ff]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Organization Chart Trigger */}
            <div className="border border-white/10 bg-[#0A101A] p-6">
               <div className="mb-4 flex items-center justify-between">
                 <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">Leadership Structure</h4>
               </div>
               
               <button 
                 onClick={() => setChartOpen(true)}
                 className="group relative flex h-16 w-full items-center justify-between border border-white/10 bg-[#05080F] px-6 transition-colors hover:border-[#42b4ff]/50 hover:bg-[#42b4ff]/5"
               >
                 <span className="font-bold uppercase tracking-widest text-white transition-colors group-hover:text-[#42b4ff]">View Organization Chart</span>
                 <Maximize2 size={18} className="text-[#42b4ff]" />
               </button>
            </div>

            {/* Company Policies - Technical Grid */}
            <div>
              <h4 className="mb-4 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>Company Policies</span>
                <span className="text-[#42b4ff]">04</span>
              </h4>
              <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                {policies.map((p, i) => (
                   <button 
                     key={i} 
                     onClick={() => setActivePdf(p.file)} 
                     className="group flex items-center justify-between bg-[#05080F] p-4 transition-colors hover:bg-[#0A101A]"
                   >
                     <div className="flex items-center gap-3">
                       <FileText size={16} className="text-slate-500 group-hover:text-[#42b4ff]" /> 
                       <span className="text-sm font-medium text-slate-300 group-hover:text-white">{p.title}</span>
                     </div>
                     <Eye size={16} className="text-slate-600 group-hover:text-[#42b4ff]" />
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
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/50 text-white transition-colors hover:border-red-500 hover:text-red-500"
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
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden border border-white/20 bg-[#05080F]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white">Document Viewer</h3>
                <button onClick={() => setActivePdf(null)} className="text-slate-400 hover:text-red-400"><X size={20} /></button>
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