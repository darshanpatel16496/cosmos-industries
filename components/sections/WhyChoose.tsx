"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Clock3,
  Users,
  CheckCircle2,
  Factory,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Modern Infrastructure",
    description:
      "85,000 sq.ft manufacturing facility equipped with advanced machinery.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description:
      "Trusted engineering partner serving heavy industries since 2015.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous inspection practices ensuring superior execution.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Efficient production planning ensures timely project completion.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Skilled engineers, welders, machinists and project professionals.",
  },
  {
    icon: CheckCircle2,
    title: "Customized Solutions",
    description:
      "Every solution is engineered to match customer requirements.",
  },
];

export default function WhyChoose() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("navigate-to-section", { detail: id }));
  };

  return (
    <section
      id="whychoose"
      className="relative flex min-h-[calc(100dvh-76px)] w-full scroll-mt-[76px] flex-col overflow-hidden bg-[#f4f7fb] text-slate-900 lg:h-[calc(100dvh-76px)]"
    >
      {/* Header Bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-y border-slate-200 bg-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12">
        <div className="flex flex-col items-start gap-1">
          <div className="mb-0.5 flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#0284c7]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#0b192c] sm:text-3xl">
            Engineering Excellence{" "}
            <span className="text-[#0284c7]">You Can Trust</span>
          </h2>
        </div>

        <span className="hidden rounded-md border border-slate-200 bg-[#f4f7fb] px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 sm:block">
          6 Core Advantages
        </span>
      </div>

      {/* Edge-to-Edge 12-Column Split */}
      <div className="grid min-h-0 w-full flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-12 lg:overflow-hidden">
        {/* LEFT: Full-Height Steel-Navy Factory Showcase (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col bg-[#0b192c] text-white lg:col-span-7 lg:h-full lg:border-r lg:border-slate-200"
        >
          <div className="group relative min-h-[300px] w-full flex-1 overflow-hidden bg-[#081322] sm:min-h-[380px] lg:h-full lg:min-h-0">
            <Image
              src="/images/whychoose/factory.jpg"
              alt="Cosmos Industries manufacturing facility"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#061120]/90 via-transparent to-[#061120]/35" />

            <div className="relative z-20 flex h-full flex-col justify-end p-6 sm:p-8 lg:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-md border border-[#42b4ff]/40 bg-[#081322]/90 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#42b4ff] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#42b4ff]" />
                Precision &amp; Reliability
              </span>
              <p className="mt-4 max-w-lg text-base font-semibold leading-relaxed text-white drop-shadow-md sm:text-lg">
                Engineered for heavy-duty duty cycles, strict dimensional
                tolerances, and dependable OEM schedules.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Light-Slate 6-Reason Grid + Action Footer (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="flex flex-col justify-between bg-[#f4f7fb] lg:col-span-5 lg:h-full"
        >
          {/* Grid of Reasons */}
          <div className="grid flex-1 grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2">
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col justify-center bg-white p-5 transition-colors hover:bg-sky-50/45 sm:p-6"
                >
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-sky-200 bg-sky-50 text-[#0284c7] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <h3 className="text-base font-bold text-[#0b192c] xl:text-[17px]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-600 sm:text-[13.5px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full-Width CTA Bar */}
          <div className="flex shrink-0 flex-col items-center justify-between gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:flex-row sm:px-6">
            <span className="text-center text-xs font-semibold text-slate-700 sm:text-left sm:text-[13px]">
              Ready to partner with a dedicated heavy fabrication &amp; CNC
              machining team?
            </span>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-[#0284c7] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#0b192c]"
            >
              <span>Request Quote</span>
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}