"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0e1f35] text-white"
        >
          {/* Steel-Navy & Precision Cyan Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[#42b4ff]/15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Brand Logo */}
            <div className="rounded-2xl border border-white/15 bg-[#0b192c]/90 px-6 py-4 shadow-2xl">
              <Image
                src="/logo.png"
                alt="Cosmos Industries"
                width={220}
                height={90}
                priority
                className="h-auto w-[170px] object-contain brightness-125 sm:w-[200px]"
              />
            </div>

            {/* Tagline */}
            <p className="mt-7 text-center text-xs font-bold uppercase tracking-[0.38em] text-[#42b4ff] sm:text-sm">
              Engineering Excellence Since 2015
            </p>

            {/* Industrial Gear & Hydraulic Assembly Animation */}
            <div className="relative mt-9 flex h-24 w-24 items-center justify-center">
              {/* Outer Dashed Steel-Cyan Ring */}
              <div className="absolute inset-0 animate-[spin_6s_linear_infinite] rounded-full border-2 border-dashed border-[#42b4ff]/45" />

              {/* Counter-Spinning Inner Ring */}
              <div className="absolute inset-3 animate-[spin_4s_linear_infinite_reverse] rounded-full border-2 border-[#42b4ff]/80 border-t-transparent" />

              {/* Pulsing Core */}
              <div className="absolute h-8 w-8 animate-ping rounded-full bg-[#42b4ff]/35" />
              <div className="relative h-6 w-6 rounded-full border border-white/50 bg-[#42b4ff] shadow-[0_0_16px_rgba(66,180,255,0.7)]" />
            </div>

            {/* Status Label */}
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
              Loading System...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}