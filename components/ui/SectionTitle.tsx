"use client";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  highlight: string;
}

export default function SectionTitle({
  subtitle,
  title,
  highlight,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">

      {/* Subtitle */}
      <p
        className="
          text-sm
          font-bold
          uppercase
          tracking-[0.4em]
          text-[#1296e8]
        "
      >
        {subtitle}
      </p>

      {/* Main Title */}
      <h2
        className="
          mt-5
          text-4xl
          font-black
          leading-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        {title}{" "}
        <span className="text-[#1296e8]">
          {highlight}
        </span>
      </h2>

      {/* Blue Line */}
      <div
        className="
          mx-auto
          mt-8
          h-1
          w-24
          rounded-full
          bg-[#1296e8]
          shadow-lg
          shadow-[#1296e8]/40
        "
      />

    </div>
  );
}