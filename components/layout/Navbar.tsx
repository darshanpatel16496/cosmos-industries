"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Industries", id: "industries" },
  { name: "Infrastructure", id: "infrastructure" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "milestones" },
  { name: "Why Us", id: "whychoose" },
  { name: "Clients", id: "clients" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 30);

      const scrollPosition = scrollY + 150;
      let currentSection = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = link.id;
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) {
      console.warn(`Section #${id} not found`);
      return;
    }

    setMenuOpen(false);
    setActive(id);

    const navbarOffset = window.innerWidth < 640 ? 120 : 140;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(0, sectionPosition),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        px-3
        pt-3
        sm:px-4
        sm:pt-4
      "
    >
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div
        className={`
          mx-auto
          w-full
          max-w-[1920px]
          rounded-2xl
          transition-all
          duration-500
          sm:rounded-[22px]
          xl:rounded-[26px]
          ${
            scrolled
              ? `
                bg-black/60
                border border-white/10
                shadow-lg
                shadow-black/30
                backdrop-blur-xl
              `
              : `
                bg-transparent
                border border-transparent
              `
          }
        `}
      >
        <div
          className="
            flex
            min-h-[68px]
            items-center
            justify-between
            gap-3
            px-4
            py-2.5
            sm:min-h-[74px]
            sm:px-5
            sm:py-3
            lg:px-6
            xl:min-h-[78px]
            xl:px-7
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="
              flex
              shrink-0
              items-center
              rounded-xl
              bg-black/40
              p-1.5
              backdrop-blur-md
              border border-white/10
              outline-none
              transition
              duration-300
              hover:bg-black/60
              hover:border-white/20
              focus-visible:ring-2
              focus-visible:ring-sky-500
            "
            aria-label="Go to homepage"
          >
            <Image
              src="/logo.png"
              alt="Cosmos Industries"
              width={170}
              height={60}
              priority
              className="
                h-9
                w-auto
                object-contain
                transition
                duration-300
                hover:scale-105
                sm:h-10
                xl:h-11
              "
              /* If your logo is dark and needs to be white, uncomment the line below */
              /* style={{ filter: 'brightness(0) invert(1)' }} */
            />
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="
              hidden
              flex-1
              items-center
              justify-center
              gap-5
              xl:flex
              2xl:gap-8
            "
            aria-label="Main navigation"
          >
            {links.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`
                  group
                  relative
                  whitespace-nowrap
                  px-1
                  py-2
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  transition-colors
                  duration-300
                  2xl:text-[12px]
                  2xl:tracking-[0.14em]
                  ${
                    active === item.id
                      ? "text-sky-400"
                      : "text-white/90 hover:text-sky-400"
                  }
                `}
              >
                {item.name}

                {/* Active underline */}
                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    rounded-full
                    bg-sky-500
                    transition-all
                    duration-300
                    ${
                      active === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </button>
            ))}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
            {/* Company Brochure */}
            <a
              href="/documents/cosmos-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                rounded-full
                border border-sky-500/30
                bg-sky-500/10
                px-5
                py-2.5
                text-[11px]
                font-semibold
                text-sky-400
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-sky-500
                hover:text-white
                hover:shadow-lg
                hover:shadow-sky-500/20
                2xl:px-6
                2xl:text-xs
              "
            >
              Brochure
            </a>

            {/* Request Quote */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                rounded-full
                bg-sky-500
                px-5
                py-2.5
                text-[11px]
                font-semibold
                text-white
                shadow-lg
                shadow-sky-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-sky-400
                hover:shadow-sky-500/40
                2xl:px-6
                2xl:text-xs
              "
            >
              Request Quote
            </button>
          </div>

          {/* =================================================
              TABLET / MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-black/40
              text-xl
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-sky-500/60
              hover:bg-sky-500/20
              hover:text-sky-400
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-sky-500
              xl:hidden
              sm:h-11
              sm:w-11
            "
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <span className="leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================
          TABLET / MOBILE MENU
      ====================================================== */}

      <div
        className={`
          mx-auto
          w-full
          max-w-[1920px]
          overflow-hidden
          transition-all
          duration-300
          xl:hidden
          ${
            menuOpen
              ? "mt-2 max-h-[800px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black/95
            shadow-2xl
            shadow-black/50
            backdrop-blur-2xl
          "
        >
          {/* Navigation Links */}
          <nav aria-label="Mobile navigation">
            {links.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  px-5
                  py-3.5
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  transition-all
                  duration-200
                  sm:px-6
                  sm:py-4
                  sm:text-sm
                  ${
                    active === item.id
                      ? "bg-sky-500 text-white"
                      : "text-white/90 hover:bg-white/5 hover:text-sky-400"
                  }
                `}
              >
                <span>{item.name}</span>

                <span
                  className={`
                    text-lg
                    transition-transform
                    ${
                      active === item.id
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-1 opacity-0"
                    }
                  `}
                >
                  →
                </span>
              </button>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
            <a
              href="/documents/cosmos-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border border-sky-500/30
                bg-sky-500/10
                px-5
                py-3
                text-sm
                font-semibold
                text-sky-400
                transition-all
                duration-300
                hover:bg-sky-500
                hover:text-white
              "
            >
              Company Brochure
            </a>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-sky-500
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-sky-500/20
                transition-all
                duration-300
                hover:bg-sky-400
              "
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}