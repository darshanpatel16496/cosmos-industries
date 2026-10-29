"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Kem-Tron", logo: "/images/clients/kemtron.png" },
  { name: "Thermax", logo: "/images/clients/thermax.png" },
  { name: "GSFC", logo: "/images/clients/gsfc.png" },
  { name: "ISGEC", logo: "/images/clients/isgec.png" },
  { name: "TKIL", logo: "/images/clients/tkil.png" },
  { name: "Vulcan", logo: "/images/clients/vulcan.png" },
  { name: "EIMCO", logo: "/images/clients/eimco.png" },
  { name: "TAKRAF", logo: "/images/clients/takraf.png" },
  { name: "Northern", logo: "/images/clients/northern.png" },
  { name: "Welspun", logo: "/images/clients/welspun.png" },
  { name: "Gmm", logo: "/images/clients/Gmm.png" },
  { name: "Ratnamani", logo: "/images/clients/ratnamani.png" },
  { name: "ABB", logo: "/images/clients/abb.png" },
  { name: "Anupam", logo: "/images/clients/anupam.png" },
  { name: "Elecon", logo: "/images/clients/elecon.png" },
  { name: "L&T", logo: "/images/clients/lt.png" },
];

export default function ClientsDualMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  const row1 = clients.slice(0, 8);
  const row2 = clients.slice(8, 16);

  return (
    <section
      id="clients"
      className="relative flex min-h-[70svh] w-full flex-col justify-center overflow-hidden bg-[#06101d] py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(9,142,237,0.08),transparent_50%)]" />

      {/* Header - LEFT ALIGNED WITH BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mb-10 flex w-full max-w-[1920px] flex-col items-start justify-start gap-4 px-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6 lg:px-10"
      >
        {/* Badge */}
        <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#42b4ff]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            Our Clients
          </span>
        </div>
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Trusted By <span className="text-[#42b4ff]">Industry Leaders</span>
        </h2>
      </motion.div>

      <div 
        className="flex flex-col gap-6 overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Row 1 */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#06101d] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#06101d] to-transparent sm:w-32" />

          <motion.div
            className="flex w-max items-center gap-5"
            animate={{ x: isHovered ? "0%" : ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 45, repeat: isHovered ? 0 : Infinity }}
          >
            {[...row1, ...row1].map((client, index) => (
              <div 
                key={`row1-${index}`} 
                className="group flex h-32 w-48 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_30px_rgba(9,142,237,0.4)] sm:h-40 sm:w-64 sm:p-6"
              >
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  width={200} 
                  height={100} 
                  className="max-h-full w-full object-contain opacity-40 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" 
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#06101d] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#06101d] to-transparent sm:w-32" />

          <motion.div
            className="flex w-max items-center gap-5"
            animate={{ x: isHovered ? "-50%" : ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 45, repeat: isHovered ? 0 : Infinity }}
          >
            {[...row2, ...row2].map((client, index) => (
              <div 
                key={`row2-${index}`} 
                className="group flex h-32 w-48 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_30px_rgba(9,142,237,0.4)] sm:h-40 sm:w-64 sm:p-6"
              >
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  width={200} 
                  height={100} 
                  className="max-h-full w-full object-contain opacity-40 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" 
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}