"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        left-0
        top-0
        z-[9999]
        h-1
        origin-left
        bg-[#1296e8]
        shadow-lg
        shadow-[#1296e8]/40
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}