"use client";

import CountUp from "react-countup";

const stats = [
  { number: 33, suffix: "+", label: "Years Experience" },
  { number: 65000, suffix: "+", label: "Sq. Ft Facility" },
  { number: 500, suffix: "+", label: "Projects Delivered" },
  { number: 25, suffix: "+", label: "Skilled Experts" },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#42b4ff]/50 hover:bg-white/[0.08]"
        >
          {/* Subtle Hover Glow inside the card */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#42b4ff]/10 blur-2xl transition-all duration-500 group-hover:bg-[#42b4ff]/20" />

          <h3 className="relative z-10 text-3xl font-black text-[#42b4ff] sm:text-4xl">
            {/* 
              enableScrollSpy: Triggers the count when scrolled into view
              scrollSpyOnce: Ensures it only counts up once
              useEasing: Makes the animation smooth
            */}
            <CountUp
              end={item.number}
              duration={2.5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              useEasing={true}
              separator=","
            />
            {item.suffix}
          </h3>

          <p className="relative z-10 mt-2 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}