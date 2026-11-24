"use client";

import Image from "next/image";
import {
  ArrowUp,
  ShieldCheck,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Capabilities", id: "infrastructure" },
  { label: "Projects", id: "projects" },
  { label: "Visitor Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("navigate-to-section", { detail: id }));
  };

  const scrollToTop = () => {
    window.dispatchEvent(
      new CustomEvent("navigate-to-section", { detail: "home" })
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#0b192c] text-white">
      {/* Main Content Grid: Edge-to-Edge */}
      <div className="grid w-full grid-cols-1 divide-y divide-white/10 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
        {/* 1. BRAND COLUMN (4 Cols) */}
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-10 lg:col-span-4 lg:px-10 lg:py-11">
          <div className="flex flex-col gap-4">
            <div className="w-fit">
              <Image
                src="/logo.png"
                alt="Cosmos Industries"
                width={220}
                height={80}
                className="h-auto w-[156px] object-contain sm:w-[172px]"
              />
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-slate-300 sm:text-sm">
              Leading the industry with precision heavy fabrication, CNC
              machining, and customized OEM production for the world&apos;s most
              rigorous industrial sectors.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cosmos Industries on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#42b4ff] hover:bg-[#42b4ff] hover:text-[#061220]"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cosmos Industries on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#42b4ff] hover:bg-[#42b4ff] hover:text-[#061220]"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="https://wa.me/919825750158"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Cosmos Industries on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-400 hover:text-[#061220]"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* 2. QUICK LINKS (2 Cols) */}
        <div className="flex flex-col gap-4 p-6 sm:p-10 lg:col-span-2 lg:px-8 lg:py-11">
          <h4 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#42b4ff]">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-200 transition-colors hover:text-[#42b4ff] sm:text-sm"
                >
                  <ArrowRight
                    size={13}
                    className="-ml-4 text-[#42b4ff] opacity-0 transition-all duration-200 group-hover:ml-0 group-hover:opacity-100"
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. CONTACT INFO (3 Cols) */}
        <div className="flex flex-col gap-4 p-6 sm:p-10 lg:col-span-3 lg:px-8 lg:py-11">
          <h4 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#42b4ff]">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3.5">
            <li className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-[#42b4ff]" />
              <span className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                Plot No. A2/440/1, Road No. B-18,
                <br />
                Opp. Ritul Engineering Company,
                <br />
                G.I.D.C, Vitthal Udyognagar - 388 121,
                <br />
                Dist. Anand, Gujarat.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={17} className="shrink-0 text-[#42b4ff]" />
              <a
                href="tel:+919825750158"
                className="text-xs font-medium text-slate-200 transition-colors hover:text-[#42b4ff] sm:text-sm"
              >
                +91 98257 50158
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={17} className="shrink-0 text-[#42b4ff]" />
              <a
                href="mailto:cosmosind2015@gmail.com"
                className="text-xs font-medium text-slate-200 transition-colors hover:text-[#42b4ff] sm:text-sm"
              >
                cosmosind2015@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* 4. ISO CERTIFICATE PANEL (3 Cols — Light Slate Accent) */}
        <div className="flex flex-col justify-between bg-[#f4f7fb] p-6 text-slate-900 sm:p-10 lg:col-span-3 lg:px-8 lg:py-11">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-white p-1 shadow-2xs">
                <Image
                  src="/images/certificates/iso-9001.jpg"
                  alt="ISO 9001:2015 Certificate"
                  width={100}
                  height={140}
                  className="w-full rounded object-cover"
                />
              </div>
              <div>
                <div className="mb-1 inline-flex items-center gap-1 rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  <ShieldCheck size={12} /> Certified
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-[#0b192c]">
                  ISO 9001:2015
                </h3>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              Committed to delivering high-quality manufacturing and fabrication
              services with strict quality assurance.
            </p>
          </div>

          <a
            href="/images/certificates/iso-9001.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0284c7] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#0b192c]"
          >
            <Award size={15} />
            View Certificate
          </a>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Scroll Top */}
      <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 bg-[#081322] px-6 py-4 sm:flex-row sm:px-10 lg:px-12">
        <p className="text-xs font-medium text-slate-300 sm:text-sm">
          © {new Date().getFullYear()} Cosmos Industries. All Rights Reserved.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-[#42b4ff] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#42b4ff] hover:bg-[#42b4ff] hover:text-[#061220]"
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={17}
            className="transition-transform group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </footer>
  );
}