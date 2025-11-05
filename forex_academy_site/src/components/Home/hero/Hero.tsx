// src/components/Home/hero/Hero.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Globe from "react-globe.gl";
import { MapPin, Target, ArrowRight } from "lucide-react";

// ------------------------------------------------------
// COFFIEFX SLIDES — CLASSROOM FIRST + FULL CONTENT
// ------------------------------------------------------
const slides = [
  {
    id: 1,
    title: "Learn Forex In-Person with Big Coffie",
    subtitle: "East Legon Okponglo • Live Classes • VIP Signals • Real Results",
    icon: <MapPin size={26} className="text-[#00c896]" />,
    background: "image",
    imageUrl: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762240564/PHYSICAL_TEACH_ahfhc1.jpg",
  },
  {
    id: 2,
    title: "Master the Art of Consistency in Trading.",
    subtitle: "Strategy, psychology, and discipline — built for lasting success.",
    icon: <Target size={26} className="text-[#00c896]" />,
    background: "globe",
  },
  {
    id: 3,
    title: "Turn Knowledge into Profitable Trades.",
    subtitle: "Live trading, prop firm strategies, and 1:1 mentorship.",
    icon: <ArrowRight size={26} className="text-[#00c896]" />,
    background: "gradient",
  },
];

// ------------------------------------------------------
// HeroCarousel Component
// ------------------------------------------------------
const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const globeRef = useRef<any>(null);
  const touchStartX = useRef<number | null>(null);

  const bgClass = "bg-gradient-to-b  from-[#00c896]/10 via-[#00ffcc]/10 to-[#00c896]/10";

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 80) {
      if (diff > 0) handlePrev();
      else handleNext();
      touchStartX.current = null;
    }
  };

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Globe cleanup
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;
    const controls = globe.controls();

    if (slides[current].background === "globe" && controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
    } else if (controls) {
      controls.autoRotate = false;
    }

    return () => {
      try {
        const renderer = globe.renderer();
        if (renderer?.dispose) renderer.dispose();
      } catch (err) {
        console.warn("Globe cleanup skipped:", err);
      }
    };
  }, [current]);

  // Pause off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        const globe = globeRef.current;
        if (!globe) return;
        const controls = globe.controls();
        if (controls)
          controls.autoRotate = isVisible && slides[current].background === "globe";
        const renderer = globe.renderer();
        if (renderer?.setAnimationLoop)
          renderer.setAnimationLoop(isVisible ? undefined : null);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("hero");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [current]);

  return (
    <section
      id="hero"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`relative flex items-center justify-center h-screen overflow-hidden ${bgClass} font-montserrat`}
    >
      {/* Backgrounds */}
      <AnimatePresence mode="wait">
        {slides[current].background === "gradient" && (
          <motion.div
            key="gradient-bg"
            className="absolute inset-0 bg-gradient-to-r  from-[#00c896]/10 via-[#00ffcc]/10 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}

        {slides[current].background === "image" && (
          <motion.div
            key="image-bg"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].imageUrl})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        )}

        {slides[current].background === "globe" && (
          <motion.div
            key="globe-bg"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ pointerEvents: "none" }}
          >
            <Globe
              ref={globeRef}
              globeImageUrl="/assets/globe/dark.png"
              backgroundColor="rgba(0,0,0,0)"
              showAtmosphere
              atmosphereColor="#00c896"
              width={typeof window !== "undefined" ? window.innerWidth : 800}
              height={typeof window !== "undefined" ? window.innerHeight : 600}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center space-y-6"
          >
            {/* Academy Badge */}
            <div className="flex items-center justify-center gap-3 text-[#00c896]">
              {slides[current].icon}
              <span className="font-semibold tracking-wide uppercase text-sm md:text-base text-glow">
                THE COFFIEFX ACADEMY
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl mx-auto drop-shadow-lg text-glow">
              {slides[current].title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-lg neon-glow">
              {slides[current].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="/plans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-[#00c896] text-[#001F3F] font-bold text-lg shadow-xl hover:bg-[#FFD700] hover:text-[#001F3F] transition-all"
              >
                Join $50 Beginners Class
              </motion.a>
              <motion.a
                href="/plans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-[#001F3F] font-bold text-lg shadow-xl hover:bg-[#FFD700] hover:text-[#001F3F] transition-all"
              >
                View Advanced Class ($150)
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#00c896] drop-shadow">
                  500+
                </div>
                <p className="text-sm text-white/80">Students Trained</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FFD700] drop-shadow">
                  85%
                </div>
                <p className="text-sm text-white/80">Signal Win Rate</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#00c896] drop-shadow">
                  1:1
                </div>
                <p className="text-sm text-white/80">Mentor Support</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowRight className="w-6 h-6 text-white rotate-90 drop-shadow" />
      </motion.div>

      {/* Pagination Dots */}
      <div className="absolute bottom-20 flex gap-2 justify-center w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#00c896] w-6" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;