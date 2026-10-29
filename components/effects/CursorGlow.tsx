"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      document.querySelectorAll("a,button").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Glow */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-[#098eed]/20 blur-xl transition-all duration-200"
        style={{
          width: hover ? 70 : 45,
          height: hover ? 70 : 45,
          transform: `translate(${position.x - (hover ? 35 : 22)}px, ${
            position.y - (hover ? 35 : 22)
          }px)`,
        }}
      />

      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-[#098eed] transition-all duration-75"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      />
    </>
  );
}