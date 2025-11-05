// src/components/Home/Quotes/Quotes.tsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface QuoteItem {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

const AUTO_ROTATE_MS = 7000;

const Quotes: React.FC = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { ref: containerRef, inView = true } = useInView({
    threshold: 0.2,
  });

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(!inView);
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const quotes: QuoteItem[] = [
    {
      quote: "Consistency beats talent. Trade your plan — not your emotions.",
      author: "Big Coffie",
      role: "Founder, CoffieFX Academy",
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302725/SnapInsta.to_566350257_18076755302161244_5110453254266395074_n_ttu6vw.jpg",
    },
    {
      quote: "A $50 student with discipline will outperform a $10,000 trader with ego.",
      author: "Big Coffie",
      role: "Mentor to 5,000+ Students",
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302725/SnapInsta.to_566350257_18076755302161244_5110453254266395074_n_ttu6vw.jpg",
    },
    {
      quote: "Risk 1% to make 3%. That’s how you stay in the game for decades.",
      author: "Big Coffie",
      role: "East Legon Trading Hub",
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302725/SnapInsta.to_566350257_18076755302161244_5110453254266395074_n_ttu6vw.jpg",
    },
    {
      quote: "The market doesn’t owe you money. You earn it with patience and proof.",
      author: "Big Coffie",
      role: "85% Win Rate System Creator",
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302725/SnapInsta.to_566350257_18076755302161244_5110453254266395074_n_ttu6vw.jpg",
    },
    {
      quote: "Every loss is tuition. Every win is graduation. Keep learning.",
      author: "Big Coffie",
      role: "Your Mentor in Accra & Online",
      image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302725/SnapInsta.to_566350257_18076755302161244_5110453254266395074_n_ttu6vw.jpg",
    },
  ];

  // Rotation logic
  useEffect(() => {
    setIsPaused(!inView || prefersReducedMotion);
  }, [inView, prefersReducedMotion]);

  useEffect(() => {
    if (!isPaused) {
      autoRotateRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % quotes.length);
      }, AUTO_ROTATE_MS);
    }
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [isPaused, quotes.length]);

  const handlePrev = useCallback(
    () => setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length),
    [quotes.length]
  );
  const handleNext = useCallback(
    () => setCurrent((prev) => (prev + 1) % quotes.length),
    [quotes.length]
  );

  return (
    <section
      ref={containerRef}
      id="quotes"
      className="relative py-24 overflow-hidden font-montserrat bg-gradient-to-tr from-[#00c896]/10 via-[#00ffcc]/1"
    >
      {/* Animated Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#00c896]/10 via-[#FFD700]/5 to-transparent blur-[150px]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#00c896] mb-4"
        >
          Wisdom from Big Coffie
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 text-base sm:text-lg text-white/80"
        >
          Real talk from the mentor who turned students into funded traders — in East Legon and online.
        </motion.p>

        {/* Quote Card */}
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={900}>
                <div className="relative mx-auto flex flex-col md:flex-row items-center gap-8 rounded-3xl shadow-xl border overflow-hidden backdrop-blur-xl bg-white/5 border-[#00c896]/25">
                  {/* Image */}
                  <div className="md:w-1/3 flex justify-center md:justify-end">
                    <motion.img
                      src={quotes[current].image}
                      alt={quotes[current].author}
                      className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-2 border-[#00c896]/60 shadow-md my-10 md:my-16"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Quote */}
                  <div className="md:w-2/3 text-center md:text-left px-8 py-10">
                    <Quote size={34} className="text-[#00c896] mb-4 mx-auto md:mx-0" />
                    <p className="text-xl md:text-2xl italic leading-relaxed mb-6 text-white/90">
                      “{quotes[current].quote}”
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold text-[#FFD700]">
                        {quotes[current].author}
                      </h4>
                      {quotes[current].role && (
                        <p className="text-sm text-white/70">
                          {quotes[current].role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-6 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition"
            aria-label="Previous quote"
          >
            <ChevronLeft size={24} className="text-[#00c896]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-6 p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition"
            aria-label="Next quote"
          >
            <ChevronRight size={24} className="text-[#00c896]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-[#00c896] w-6" : "bg-gray-500/40 w-3"
              }`}
              aria-label={`Go to quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;