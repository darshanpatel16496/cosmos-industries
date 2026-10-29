"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Infrastructure from "@/components/sections/Infrastructure";
import Projects from "@/components/sections/Projects";
import WhyChoose from "@/components/sections/WhyChoose";
import Achievements from "@/components/sections/Achievements";
import Clients from "@/components/sections/Clients";
import Policies from "@/components/sections/Policies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";


export default function Home() {
  console.log(WhatsAppButton);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Infrastructure />
      <Projects />
      <WhyChoose />
      <Achievements />
      <Clients />
      
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}