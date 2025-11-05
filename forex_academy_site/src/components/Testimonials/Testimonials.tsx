// src/components/Home/Testimonials/Testimonials.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Tilt from "react-parallax-tilt";

const testimonials = [
  {
    name: "Kwame A.",
    role: "Beginner → Funded Trader",
    quote:
      "I joined the $50 class with zero knowledge. In 6 weeks, I passed a prop firm challenge. Big Coffie changed my life.",
    image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762240564/student1_kofi.jpg",
  },
  {
    name: "Abena M.",
    role: "Full-Time Mom → Profitable Trader",
    quote:
      "I trade from home while raising kids. The VIP signals + live classes gave me 85% win rate. Now I fund my family’s future.",
    image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762240564/student2_abena.jpg",
  },
  {
    name: "Kojo B.",
    role: "IT Guy → 6-Figure Trader",
    quote:
      "I was stuck in salary life. After $150 advanced class, I quit my job. CoffieFX strategies work — I’m proof.",
    image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762240564/student3_kojo.jpg",
  },
  {
    name: "Esi P.",
    role: "University Student",
    quote:
      "I paid school fees with trading profits. The 1:1 mentorship and signal group are gold. Best decision I made.",
    image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762240564/student4_esi.jpg",
  },
  {
    name: "Nana Y.",
    role: "Prop Firm Trader",
    quote:
      "CoffieFX taught me risk management that no YouTube video could. Now I trade $100K accounts with confidence.",
    image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762240564/student5_nana.jpg",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden font-montserrat bg-gradient-to-tr from-[#00c896]/10 via-[#00ffcc]/10 to-transparent"
    >
      {/* Animated Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#00c896]/10 via-[#FFD700]/5 to-transparent blur-[150px]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#00c896]"
        >
          Student Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-white/80"
        >
          Real Ghanaian traders who started with <span className="text-[#FFD700] font-semibold">CoffieFX</span> and won big.
        </motion.p>
      </div>

      {/* Testimonial Slider */}
      <div className="relative z-PT10 max-w-3xl mx-auto text-center px-6">
        <AnimatePresence mode="wait">
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={900} key={current}>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="p-10 rounded-2xl backdrop-blur-xl bg-white/5 border border-[#00c896]/20 shadow-xl"
            >
              <Quote className="mx-auto mb-4 text-[#00c896]" size={36} />
              <p className="italic text-lg leading-relaxed text-white/90">
                “{t.quote}”
              </p>

              <div className="mt-8 flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-2 border-[#00c896]/70 shadow-md mb-3 object-cover"
                />
                <h4 className="text-lg font-semibold text-white">{t.name}</h4>
                <p className="text-sm text-[#FFD700]">{t.role}</p>
              </div>
            </motion.div>
          </Tilt>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} className="text-[#00c896]" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-[#00c896] w-6" : "bg-gray-500/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-[#00c896]/20 hover:bg-[#00c896]/40 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} className="text-[#00c896]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;