"use client";

import { motion } from "framer-motion";

export default function BlueprintGear() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        right-0
        top-1/2
        hidden
        -translate-y-1/2
        lg:block
      "
    >
      <svg
        width="620"
        height="620"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70"
      >
        {/* Outer Blueprint Circle */}
        <circle
          cx="150"
          cy="150"
          r="120"
          stroke="#098eed"
          strokeWidth="1"
          strokeDasharray="6 8"
          opacity="0.18"
        />

        {/* Inner Blueprint Circle */}
        <circle
          cx="150"
          cy="150"
          r="90"
          stroke="#098eed"
          strokeWidth="1"
          strokeDasharray="3 6"
          opacity="0.25"
        />

        {/* Gear Body */}
        <circle
          cx="150"
          cy="150"
          r="55"
          stroke="#098eed"
          strokeWidth="3"
          opacity="0.35"
        />

        {/* Gear Teeth */}
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="150"
            y1="55"
            x2="150"
            y2="28"
            stroke="#098eed"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.35"
            transform={`rotate(${i * 15} 150 150)`}
          />
        ))}

        {/* Center Ring */}
        <circle
          cx="150"
          cy="150"
          r="28"
          stroke="#098eed"
          strokeWidth="3"
          opacity="0.5"
        />

        {/* Center */}
        <circle
          cx="150"
          cy="150"
          r="8"
          fill="#098eed"
          opacity="0.45"
        />

        {/* Technical Cross Lines */}
        <line
          x1="25"
          y1="150"
          x2="275"
          y2="150"
          stroke="#098eed"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.15"
        />

        <line
          x1="150"
          y1="25"
          x2="150"
          y2="275"
          stroke="#098eed"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.15"
        />

        {/* Technical Corner Marks */}
        <path
          d="M55 55H85M55 55V85"
          stroke="#098eed"
          strokeWidth="2"
          opacity="0.25"
        />

        <path
          d="M245 55H215M245 55V85"
          stroke="#098eed"
          strokeWidth="2"
          opacity="0.25"
        />

        <path
          d="M55 245H85M55 245V215"
          stroke="#098eed"
          strokeWidth="2"
          opacity="0.25"
        />

        <path
          d="M245 245H215M245 245V215"
          stroke="#098eed"
          strokeWidth="2"
          opacity="0.25"
        />
      </svg>
    </motion.div>
  );
}