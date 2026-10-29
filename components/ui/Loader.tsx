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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Blue Background Glow */}
          <div className="absolute h-96 w-96 rounded-full bg-[#1296e8]/20 blur-3xl" />

          <div className="relative flex flex-col items-center">

            {/* Logo */}
            <Image
              src="/logo.png"
              alt="Cosmos Industries"
              width={220}
              height={90}
              priority
              className="animate-pulse"
            />

            {/* Loading Text / Tagline */}
            <p className="mt-8 text-sm uppercase tracking-[0.45em] text-[#1296e8]">
              Engineering Excellence Since 2015
            </p>

            {/* Industrial Gear & Piston Assembly Animation */}
            <div className="relative mt-10 w-24 h-24 flex items-center justify-center">
              
              {/* Outer Spinning Cog / Gear */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#1296e8]/40 animate-[spin_6s_linear_infinite]" />

              {/* Counter-Spinning Inner Gear Ring */}
              <div className="absolute inset-3 rounded-full border-2 border-[#1296e8]/70 border-t-transparent animate-[spin_4s_linear_infinite_reverse]" />

              {/* Pulsing Hydraulic Core */}
              <div className="absolute w-8 h-8 bg-gradient-to-br from-white to-[#1296e8] rounded-full shadow-[0_0_15px_#1296e8] animate-ping opacity-75" />
              <div className="absolute w-6 h-6 bg-[#1296e8] rounded-full shadow-[0_0_10px_#1296e8]" />
            </div>

            {/* Loading Status */}
            <p className="mt-6 text-sm text-gray-400 tracking-wider">
              Loading...
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}