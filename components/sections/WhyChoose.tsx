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
    description: "85,000 sq.ft manufacturing facility equipped with advanced machinery.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Trusted engineering partner serving heavy industries since 2015.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous inspection practices ensuring superior execution.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description: "Efficient production planning ensures timely project completion.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled engineers, welders, machinists and project professionals.",
  },
  {
    icon: CheckCircle2,
    title: "Customized Solutions",
    description: "Every solution is engineered to match customer requirements.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="whychoose"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#06101d] py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#098eed]/10 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:50px_50px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-10">

        {/* SECTION TITLE - LEFT ALIGNED WITH BADGE */}
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
              Why Choose Us
            </span>
          </div>
          
          {/* Heading - Forces to one line on desktop */}
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:whitespace-nowrap lg:text-[42px] xl:text-5xl">
            Why Customers Trust <span className="text-[#42b4ff]">Cosmos Industries</span>
          </h2>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ================= LEFT IMAGE & TEXT ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Image Container */}
            <div className="group relative w-full flex-1 min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-[#07111f] shadow-2xl sm:min-h-[400px]">
              <Image
                src="/images/whychoose/factory.jpg"
                alt="Cosmos Industries"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101d] via-[#06101d]/20 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Text Block Below Image */}
            <div>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Engineering Excellence  You Can Trust
                
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Cosmos Industries combines decades of engineering expertise,
                advanced manufacturing infrastructure and a commitment to quality to deliver reliable solutions for heavy engineering industries across India.
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT REASONS GRID ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            {/* 6 Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex flex-col rounded-2xl border border-white/10 bg-[#07111f]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#42b4ff]/50 hover:bg-[#0a1b2e] hover:shadow-lg"
                  >
                    {/* Icon Box */}
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#42b4ff]/30 bg-[#098eed]/10 transition-colors duration-300 group-hover:bg-[#098eed] group-hover:border-[#098eed]">
                      <Icon
                        size={20}
                        className="text-[#42b4ff] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    {/* Text */}
                    <h4 className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#42b4ff] sm:text-base">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button (Pushed to bottom) */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#098eed] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#098eed]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0877c7]"
              >
                Request a Quote
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}