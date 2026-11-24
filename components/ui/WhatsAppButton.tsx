"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "919825750158"; // Without +

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Cosmos Industries on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42b4ff]"
    >
      {/* Subtle Pulse Ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366]/25"
      />

      {/* Button Surface */}
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/40 bg-[#25D366] text-white shadow-[0_10px_28px_rgba(7,21,37,0.35)] transition-all duration-300 hover:scale-105">
        <MessageCircle size={22} />
      </span>

      {/* Hover Tooltip */}
      <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg border border-white/15 bg-[#0e1f35] px-3.5 py-1.5 text-xs font-bold tracking-wide text-white opacity-0 shadow-xl transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}