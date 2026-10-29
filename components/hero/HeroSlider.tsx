"use client";

import { AnimatePresence, motion } from "framer-motion";

interface HeroSliderProps {
  slides: {
    image: string;
  }[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

export default function HeroSlider({
  slides,
  currentSlide,
  setCurrentSlide,
}: HeroSliderProps) {
  return (
    <>
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        />
      </AnimatePresence>

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-white/10">
        <motion.div
          key={`progress-${currentSlide}`}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
            ease: "linear",
          }}
          className="h-full bg-[var(--color-primary)]"
        />
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 right-8 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "scale-125 bg-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/40"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </>
  );
}