"use client";

import { motion } from "framer-motion";

export default function EngineeringBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#04070d]">

      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(9,142,237,.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(9,142,237,.25) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Technical Circles */}
      <div className="absolute left-20 top-20 h-80 w-80 rounded-full border border-[#098eed]/10" />
      <div className="absolute right-32 bottom-20 h-96 w-96 rounded-full border border-[#098eed]/10" />

      {/* Animated Glow (Hidden on mobile to save battery/performance) */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -100, 150, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="hidden sm:block absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#098eed]/15 blur-[150px]"
      />

      {/* Rotating Gear (Hidden on mobile) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
        className="hidden sm:block absolute right-24 top-32 opacity-[0.06]"
      >
        <svg
          width="220"
          height="220"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle
            cx="100"
            cy="100"
            r="70"
            stroke="#098eed"
            strokeWidth="2"
          />
          <circle
            cx="100"
            cy="100"
            r="35"
            stroke="#098eed"
            strokeWidth="2"
          />

          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="30"
              x2="100"
              y2="10"
              stroke="#098eed"
              strokeWidth="3"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}