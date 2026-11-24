"use client";

import { useEffect, useState, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Infrastructure from "@/components/sections/Infrastructure";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import ClientVisitsGallery from "@/components/sections/ClientVisitsGallery";
import WhyChoose from "@/components/sections/WhyChoose";
import Industries from "@/components/sections/Industries";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  const hasMounted = useRef(false);

  // 1. Clear the hash immediately so Lenis doesn't read it on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      if (!hasMounted.current && window.location.pathname === "/") {
        window.history.replaceState(null, "", window.location.pathname);
        hasMounted.current = true;
      }
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // 2. The moment the loader finishes, force Lenis to the very top
  useEffect(() => {
    if (!loading && lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [loading]);

  return (
    <ReactLenis root ref={lenisRef}>
      <Loader loading={loading} />

      <main className="relative min-h-screen w-full overflow-x-clip bg-[#f4f7fb] text-slate-900">
        <div className="relative z-10 w-full">
          <Navbar />
          <Hero />
          <Services />
          <Infrastructure />
          <Projects />
          <Achievements />
          <ClientVisitsGallery />
          <WhyChoose />
          <Industries />
          <Contact />
          <Footer />
        </div>
      </main>

      <WhatsAppButton />
      <ScrollToTop />
    </ReactLenis>
  );
}