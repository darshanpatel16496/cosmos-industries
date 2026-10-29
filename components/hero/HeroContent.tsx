"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        max-w-3xl
        rounded-3xl
        border border-white/10
        bg-black/40
        p-8
        shadow-2xl
        shadow-black/20
        backdrop-blur-xl
        md:p-12
      "
    >
      {/* Badge */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="
          inline-flex
          rounded-full
          border border-[var(--color-primary)]/30
          bg-[var(--color-primary)]/10
          px-5
          py-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.3em]
          text-[var(--color-primary)]
        "
      >
        Heavy Engineering Experts Since 1993
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="
          mt-6
          text-5xl
          font-black
          leading-[1.05]
          tracking-tight
          text-white
          md:text-6xl
          lg:text-7xl
        "
      >
        Precision
        <span className="block text-[var(--color-primary)]">
          Engineering
        </span>
        Excellence
      </motion.h1>

      {/* Accent Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "90px", opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="
          mt-7
          h-1
          rounded-full
          bg-[var(--color-primary)]
        "
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="
          mt-7
          max-w-2xl
          text-base
          leading-8
          text-gray-300
          md:text-lg
        "
      >
        Cosmos Industries delivers world-class Heavy Fabrication,
        CNC Machining, OEM Manufacturing and Industrial Engineering
        solutions trusted by Steel, Cement, Mining, Infrastructure,
        Power and Process Industries across India.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        {/* Primary CTA */}
        <a
          href="#contact"
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[var(--color-primary)]
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-[var(--color-primary)]/25
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-xl
            hover:shadow-[var(--color-primary)]/40
          "
        >
          Request Quote

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </a>

        {/* Secondary CTA */}
        <a
          href="#projects"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/5
            px-8
            py-4
            font-semibold
            text-white
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[var(--color-primary)]
            hover:bg-[var(--color-primary)]/10
            hover:text-[var(--color-primary)]
          "
        >
          View Projects
        </a>
      </motion.div>
    </motion.div>
  );
}