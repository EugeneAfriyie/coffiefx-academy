// src/components/Home/Hero/CoffieFXHero.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Users, Shield } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Flip Small Accounts Into Big Wins",
    text: "Master **The CoffieFX Strategy** — turn $100 into $1000 with live mentorship, flipping sessions, and elite signals.",
    ctaText: "Start Flipping Now",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20Flipping%20Sessions%20%28%24150%29",
    icon: <Zap className="w-8 h-8" />,
    bgImage: "https://res.cloudinary.com/djeorsh5d/image/upload/v1762078888/cac6b0e2-0021-4a14-a6d7-f6cb93ab9201.png", // Flipping chart
  },
  {
    id: 2,
    title: "Live Mentorship with Big Coffie",
    text: "Join **weekly Zoom + in-person classes** in East Legon. Get 1-on-1 reviews, custom strategies, and lifetime access.",
    ctaText: "Book Your Seat",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20book%20a%20mentorship%20seat",
    icon: <Users className="w-8 h-8" />,
    bgImage: "https://res.cloudinary.com/djeorsh5d/image/upload/v1761140148/photo_2023-12-11_14-10-41_z3atio.jpg", // Big Coffie teaching
  },
  {
    id: 3,
    title: "VIP Signals That Actually Work",
    text: "Get **5–10 high-probability signals/week** with entry, SL, TP, and chart analysis. No guesswork — just results.",
    ctaText: "Join VIP Signals",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20VIP%20Signals%20%28%2455%29",
    icon: <TrendingUp className="w-8 h-8" />,
    bgGradient: "from-[#00cc66]/20 to-[#00ff88]/10",
  },
  {
    id: 4,
    title: "Protected by Elite Risk Rules",
    text: "Never blow an account again. Learn **risk management for small accounts** — the secret to long-term success.",
    ctaText: "Master Risk Now",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20learn%20risk%20management",
    icon: <Shield className="w-8 h-8" />,
    bgGradient: "from-[#FFD700]/15 to-[#00ff88]/15",
  },
];

const CoffieFXHero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(1);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) =>
      dir === 1
        ? prev === slides.length - 1
          ? 0
          : prev + 1
        : prev === 0
        ? slides.length - 1
        : prev - 1
    );
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100) nextSlide(1);
    else if (info.offset.x > 100) nextSlide(-1);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentSlide = slides[current];

  return (
    <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden font-montserrat">
      {/* Background: Image or Gradient */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {currentSlide.bgImage ? (
            <motion.div
              key={`img-${currentSlide.id}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <img
                src={currentSlide.bgImage}
                alt={currentSlide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/95 via-[#0a0e17]/70 to-[#0a0e17]/50" />
            </motion.div>
          ) : (
            <motion.div
              key={`grad-${currentSlide.id}`}
              className={`absolute inset-0 bg-gradient-to-br ${currentSlide.bgGradient}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          )}
        </AnimatePresence>

        {/* Base Dark Overlay (for gradient slides) */}
        {!currentSlide.bgImage && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-[#0a0e17]/80" />
        )}
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide.id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl px-6 text-center cursor-grab active:cursor-grabbing"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-2xl shadow-[#00ff88]/60">
              {currentSlide.icon}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent 
                       bg-gradient-to-r from-[#00ff88] via-[#FFD700] to-[#00cc66] mb-6 leading-tight"
          >
            {currentSlide.title}
          </motion.h1>

          {/* Text */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-[#ffffffcc] max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            {currentSlide.text}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <a
              href={currentSlide.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc66] 
                         text-black font-bold text-lg rounded-full shadow-xl hover:shadow-2xl 
                         hover:shadow-[#00ff88]/70 hover:scale-105 transition-all duration-300"
            >
              {currentSlide.ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i
                ? "bg-[#FFD700] w-10 shadow-lg shadow-[#FFD700]/60"
                : "bg-[#ffffff60] hover:bg-[#ffffff90]"
            }`}
            whileTap={{ scale: 0.8 }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatDelay: 3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#00ff88] rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-[#00ff88] rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoffieFXHero;