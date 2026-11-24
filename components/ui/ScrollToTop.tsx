"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 500);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent("navigate-to-section", { detail: "home" })
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#42b4ff]/40 bg-[#0e1f35] text-[#42b4ff] shadow-[0_10px_28px_rgba(7,21,37,0.35)] transition-all duration-300 hover:scale-105 hover:border-[#42b4ff] hover:bg-[#42b4ff] hover:text-[#071525] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42b4ff] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <ChevronUp size={22} />
    </button>
  );
}