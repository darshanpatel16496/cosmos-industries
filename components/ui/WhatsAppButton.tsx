"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "919825750158"; // Without +

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        group
      "
    >
      <div
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <MessageCircle className="text-white" size={30} />

        <span
          className="
            absolute
            right-20
            whitespace-nowrap
            rounded-full
            bg-black
            px-4
            py-2
            text-sm
            text-white
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          Chat on WhatsApp
        </span>
      </div>

      {/* Pulse Ring */}
      <span
        className="
          absolute
          inset-0
          animate-ping
          rounded-full
          bg-[#25D366]
          opacity-30
        "
      />
    </a>
  );
}