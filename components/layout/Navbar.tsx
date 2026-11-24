"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, FileText, Menu, X } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";

interface GroupCompany {
  name: string;
  type: string;
}

interface NavLinkItem {
  name: string;
  id: string;
  hasDropdown?: boolean;
  companies?: GroupCompany[];
}

const links: NavLinkItem[] = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Capabilities", id: "infrastructure" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "milestones" },
  { name: "Visitors", id: "gallery" },
  { name: "Why Us", id: "whychoose" },
  { name: "Industries", id: "industries" },
  { name: "Contact", id: "contact" },
  {
    name: "Group Companies",
    id: "companies",
    hasDropdown: true,
    companies: [
      { name: "Aspire Industries", type: "HEAVY FABRICATION" },
      { name: "Metal Treat Ind.", type: "HEAT TREATMENT" },
      { name: "Metal Heat Treaters", type: "NABL TESTING" },
    ],
  },
];

const HEADER_OFFSET = -76;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    "companies"
  );
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const lenis = useLenis();
  const lockObserver = useRef(true);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }

    if (!hasMounted.current) {
      if (window.location.pathname === "/") {
        window.history.replaceState(null, "", window.location.pathname);
        setActive("home");
      }
      hasMounted.current = true;
    }

    const handleScrollGlass = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 120 && !lockObserver.current) {
        setActive("home");
      }
    };

    handleScrollGlass();
    window.addEventListener("scroll", handleScrollGlass, { passive: true });

    const timer = setTimeout(() => {
      lockObserver.current = false;
    }, 1600);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScrollGlass);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (window.scrollY < 120) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockObserver.current) return;

        if (window.scrollY < 120) {
          setActive("home");
          return;
        }

        const intersecting = entries.filter((e) => e.isIntersecting);

        if (intersecting.length > 0) {
          const viewportAnchor = window.innerHeight * 0.28;

          const closest = intersecting.reduce((prev, curr) => {
            const prevDist = Math.abs(
              prev.boundingClientRect.top - viewportAnchor
            );
            const currDist = Math.abs(
              curr.boundingClientRect.top - viewportAnchor
            );
            return prevDist < currDist ? prev : curr;
          });

          setActive(closest.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-12% 0px -25% 0px",
        threshold: 0,
      }
    );

    links.forEach((link) => {
      if (link.id === "companies") return;
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const scrollToSection = useCallback(
    (id: string, companyName?: string) => {
      setMenuOpen(false);

      if (companyName) {
        window.dispatchEvent(
          new CustomEvent("select-group-company", { detail: companyName })
        );
      }

      const targetId = id === "companies" ? "contact" : id;
      setActive(targetId);
      lockObserver.current = true;

      if (targetId === "home") {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.15 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.replaceState(null, "", window.location.pathname);
        setTimeout(() => {
          lockObserver.current = false;
        }, 1250);
        return;
      }

      const section = document.getElementById(targetId);
      if (!section) {
        lockObserver.current = false;
        return;
      }

      if (lenis) {
        lenis.scrollTo(section, { offset: HEADER_OFFSET, duration: 1.15 });
      } else {
        const top =
          section.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }

      window.history.replaceState(null, "", `#${targetId}`);

      setTimeout(() => {
        lockObserver.current = false;
      }, 1250);
    },
    [lenis]
  );

  useEffect(() => {
    const onNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        scrollToSection(customEvent.detail);
      }
    };
    window.addEventListener("navigate-to-section", onNavigate);
    return () => window.removeEventListener("navigate-to-section", onNavigate);
  }, [scrollToSection]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] w-full">
      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-800 bg-[#0b192c]/95 shadow-[0_12px_32px_rgba(4,10,20,0.45)] backdrop-blur-xl"
            : "border-white/10 bg-[#0b192c]/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-[1920px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
          {/* Brand Block */}
          <div className="flex shrink-0 items-center pr-2 lg:border-r lg:border-white/10 lg:pr-4">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="flex cursor-pointer items-center rounded-md outline-none transition duration-200 hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#42b4ff]"
            >
              <Image
                src="/logo.png"
                alt="Cosmos Industries"
                width={220}
                height={80}
                priority
                className="h-auto w-[118px] object-contain sm:w-[132px] 2xl:w-[144px]"
              />
            </button>
          </div>

          {/* Desktop Navigation Track */}
          <nav
            aria-label="Primary navigation"
            className="hidden flex-1 items-center justify-center gap-0.5 px-1 xl:flex 2xl:gap-1"
          >
            {links.map((item) => {
              const isActive = active === item.id;
              return (
                <div key={item.id} className="group relative">
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative inline-flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-[10.5px] font-bold uppercase tracking-[0.06em] transition-all duration-200 2xl:px-3 2xl:text-[11.5px] 2xl:tracking-[0.08em] ${
                      isActive
                        ? "bg-[#42b4ff]/15 text-[#42b4ff] ring-1 ring-[#42b4ff]/35"
                        : "text-slate-200 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={12}
                        className="text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#42b4ff]"
                      />
                    )}
                  </button>

                  {/* Desktop Dropdown */}
                  {item.hasDropdown && item.companies && (
                    <div className="invisible absolute right-0 top-full z-[100] translate-y-2 pt-2.5 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="w-[320px] rounded-lg border border-white/15 bg-[#0b192c] p-2 shadow-2xl shadow-black/60 backdrop-blur-2xl">
                        <div className="mb-1.5 flex items-center justify-between border-b border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#42b4ff]">
                          <span>Cosmos Group Entities</span>
                          <span className="text-slate-400">03 Units</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          {item.companies.map((company) => (
                            <button
                              key={company.name}
                              type="button"
                              onClick={() =>
                                scrollToSection("contact", company.name)
                              }
                              className="group/comp flex w-full cursor-pointer items-center justify-between rounded-md border border-transparent px-3.5 py-2.5 text-left transition-colors hover:border-[#42b4ff]/30 hover:bg-white/[0.06]"
                            >
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold text-slate-100 transition-colors group-hover/comp:text-[#42b4ff]">
                                  {company.name}
                                </span>
                                <span className="mt-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                                  {company.type}
                                </span>
                              </div>
                              <ArrowRight
                                size={14}
                                className="text-slate-500 transition-transform group-hover/comp:translate-x-1 group-hover/comp:text-[#42b4ff]"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Action Cluster */}
          <div className="hidden shrink-0 items-center justify-end gap-2 pl-2 xl:flex lg:border-l lg:border-white/10 lg:pl-3.5 2xl:gap-2.5 2xl:pl-5">
            <a
              href="/documents/cosmos-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-white/15 bg-white/[0.05] px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-100 transition-all duration-200 hover:border-[#42b4ff]/50 hover:bg-white/[0.1] hover:text-white 2xl:gap-2 2xl:px-4 2xl:text-xs"
            >
              <FileText
                size={13}
                className="text-[#42b4ff] transition-colors group-hover:text-white"
              />
              Brochure
            </a>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group inline-flex cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-[#42b4ff] px-3.5 py-2.5 text-[11px] font-extrabold uppercase tracking-wider text-[#061220] shadow-[0_6px_20px_rgba(66,180,255,0.25)] transition-all duration-200 hover:bg-white 2xl:px-5 2xl:text-xs"
            >
              <span>Request Quote</span>
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle Menu"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/[0.06] text-white transition-all duration-200 hover:border-[#42b4ff]/50 hover:bg-white/[0.12] xl:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="w-full border-b border-slate-800 bg-[#0b192c]/98 shadow-2xl backdrop-blur-2xl xl:hidden"
          >
            <div className="max-h-[calc(100dvh-76px)] overflow-y-auto">
              <nav aria-label="Mobile navigation">
                {links.map((item) => {
                  const isDropdownExpanded = mobileDropdownOpen === item.id;

                  return (
                    <div key={item.id} className="border-b border-white/10">
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => scrollToSection(item.id)}
                          className={`flex flex-1 cursor-pointer items-center justify-between px-6 py-3.5 text-left text-xs font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                            active === item.id
                              ? "bg-[#42b4ff]/15 text-[#42b4ff]"
                              : "text-slate-200 hover:bg-white/[0.05] hover:text-white"
                          }`}
                        >
                          <span>{item.name}</span>
                          <span
                            className={`text-sm transition-transform ${
                              active === item.id
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-2 opacity-0"
                            }`}
                          >
                            →
                          </span>
                        </button>

                        {item.hasDropdown && (
                          <button
                            type="button"
                            onClick={() =>
                              setMobileDropdownOpen(
                                isDropdownExpanded ? null : item.id
                              )
                            }
                            aria-expanded={isDropdownExpanded}
                            aria-label={`Toggle ${item.name}`}
                            className="flex h-11 w-12 cursor-pointer items-center justify-center border-l border-white/10 text-slate-300 transition hover:bg-white/[0.05] hover:text-[#42b4ff]"
                          >
                            <ChevronDown
                              size={15}
                              className={`transition-transform duration-200 ${
                                isDropdownExpanded
                                  ? "rotate-180 text-[#42b4ff]"
                                  : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {item.hasDropdown &&
                        item.companies &&
                        isDropdownExpanded && (
                          <div className="grid gap-1.5 bg-black/25 px-6 py-3 sm:grid-cols-3">
                            {item.companies.map((company) => (
                              <button
                                key={company.name}
                                type="button"
                                onClick={() =>
                                  scrollToSection("contact", company.name)
                                }
                                className="flex flex-col rounded-md border border-white/10 bg-white/[0.04] px-3.5 py-2 text-left transition hover:border-[#42b4ff]/40 hover:bg-white/10"
                              >
                                <span className="text-xs font-semibold text-slate-100">
                                  {company.name}
                                </span>
                                <span className="mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                                  {company.type}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                    </div>
                  );
                })}
              </nav>

              <div className="grid gap-3 p-5 sm:grid-cols-2">
                <a
                  href="/documents/cosmos-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-white/[0.12]"
                >
                  <FileText size={15} className="text-[#42b4ff]" />
                  Company Brochure
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md bg-[#42b4ff] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-[#061220] shadow-lg shadow-sky-500/20 transition-all duration-200 hover:bg-white"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}