"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#05070b]">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow 1 */}
      <motion.div
        animate={{
          x: [0, 250, -100, 0],
          y: [0, 100, 250, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-[-10%] h-[650px] w-[650px] rounded-full bg-[#098eed]/20 blur-[150px]"
      />

      {/* Glow 2 */}
      <motion.div
        animate={{
          x: [0, -250, 120, 0],
          y: [0, -180, 150, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] bottom-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-400/15 blur-[150px]"
      />

      {/* Glow 3 */}
      <motion.div
        animate={{
          x: [0, 180, -180, 0],
          y: [0, -120, 120, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"
      />

    </div>
  );
}