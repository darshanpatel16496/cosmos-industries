"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ShieldCheck, Award } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#06101d] pt-16 border-t border-white/10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#098eed]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-5 sm:px-8 lg:px-14">
        
        {/* Main Content Grid */}
        <div className="grid gap-12 pb-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          
          {/* LEFT: Quick Links & Socials */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-base font-bold uppercase tracking-[0.15em] text-white mb-6">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={`#${link.id}`} 
                      // INCREASED FONT SIZE TO text-base
                      className="group flex items-center gap-3 text-base font-medium text-slate-300 transition-colors hover:text-[#42b4ff]"
                    >
                      <span className="h-[2px] w-0 bg-[#42b4ff] transition-all duration-300 group-hover:w-4" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-3">
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-1 hover:border-[#42b4ff]/50 hover:bg-[#098eed]/10 hover:text-[#42b4ff]"><FaFacebookF size={18} /></a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-1 hover:border-[#42b4ff]/50 hover:bg-[#098eed]/10 hover:text-[#42b4ff]"><FaLinkedinIn size={18} /></a>
              <a href="https://wa.me/919825750158" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-1 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-500"><FaWhatsapp size={20} /></a>
            </div>
          </div>

          {/* RIGHT: ISO Certificate Card */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-3xl border border-[#42b4ff]/20 bg-[#07111f] p-6 sm:p-8 shadow-2xl">
              
              {/* Certificate Image */}
              <div className="relative w-24 shrink-0 overflow-hidden rounded-xl border border-white/20 bg-white p-1 shadow-lg">
                <Image
                  src="/images/certificates/iso-9001.jpg"
                  alt="ISO 9001:2015 Certificate"
                  width={200}
                  height={280}
                  className="w-full object-cover"
                />
              </div>

              {/* Certificate Details */}
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-green-400">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Certified Quality</span>
                </div>
                
                {/* INCREASED TITLE SIZE */}
                <h3 className="text-2xl font-bold text-white">ISO 9001:2015</h3>
                
                {/* INCREASED DESCRIPTION SIZE */}
                <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-sm">
                  Committed to delivering high-quality manufacturing and fabrication services to our global clients.
                </p>
                
                {/* INCREASED BUTTON SIZE */}
                <a
                  href="/images/certificates/iso-9001.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#098eed] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#098eed]/30 transition-all hover:-translate-y-0.5 hover:bg-[#0877c7]"
                >
                  <Award size={16} /> View Certificate
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Cosmos Industries. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#098eed] text-white shadow-lg shadow-[#098eed]/20 transition-all hover:-translate-y-1 hover:bg-[#0877c7]"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
}