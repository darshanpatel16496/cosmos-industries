// components/hero/HeroStats.tsx

export default function HeroStats() {
  const stats = [
    { value: "33+", label: "YEARS EXPERIENCE" },
    { value: "65,000+", label: "SQ.FT FACILITY" },
    { value: "40,000+", label: "COVERED AREA" },
    { value: "25+", label: "SKILLED PROFESSIONALS" },
  ];

  return (
    <div className="flex flex-col gap-3">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06]"
        >
          <span className="text-3xl font-bold text-[#42b4ff] lg:text-4xl">
            {stat.value}
          </span>
          <span className="text-right text-[11px] font-bold tracking-[0.15em] text-slate-300 sm:text-xs">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}