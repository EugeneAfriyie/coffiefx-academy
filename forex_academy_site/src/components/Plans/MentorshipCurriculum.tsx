// Eugene Afriyie UEB3502023
// src/components/Home/Carousel/CoffieFXCarousel.tsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Card {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  ctaLink: string;
}

const mentorshipData: Card[] = [
  {
    title: "Trading Psychology",
    description: "Master emotional control and discipline — the foundation of consistent trading.",
    icon: <Brain className="w-8 h-8 text-[#FFD700]" />,
    ctaText: "Join Mentorship",
    ctaLink:
      "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20master%20trading%20psychology",
  },
  {
    title: "Risk Management",
    description: "Protect your capital while maximizing profits using professional-grade strategies.",
    icon: <Shield className="w-8 h-8 text-[#00ff88]" />,
    ctaText: "Learn Risk Rules",
    ctaLink:
      "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20learn%20risk%20management",
  },
  {
    title: "Market Structure",
    description: "Understand the flow of the market like a pro and trade with precision entries.",
    icon: <TrendingUp className="w-8 h-8 text-[#00ff88]" />,
    ctaText: "Master Structure",
    ctaLink:
      "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20master%20market%20structure",
  },
  {
    title: "Live Sessions",
    description: "Join weekly group and 1-on-1 mentorship calls to review charts and plan setups.",
    icon: <Zap className="w-8 h-8 text-[#FFD700]" />,
    ctaText: "Book Live Call",
    ctaLink:
      "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20live%20mentorship",
  },
  {
    title: "Community Support",
    description: "Access a private trading community that keeps you motivated and accountable.",
    icon: <Users className="w-8 h-8 text-[#00ff88]" />,
    ctaText: "Join Community",
    ctaLink:
      "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20the%20community",
  },
];

const CoffieFXCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStart = useRef<number | null>(null);

  /* ------------------------------------------------------------------ */
  /* AUTO-SLIDE LOGIC (pauses on hover)                                 */
  /* ------------------------------------------------------------------ */
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === mentorshipData.length - 1 ? 0 : prev + 1));
    }, 4000);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      startAutoSlide();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, startAutoSlide]);

  /* ------------------------------------------------------------------ */
  /* SMOOTH SCROLL TO ACTIVE CARD                                       */
  /* ------------------------------------------------------------------ */
  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement | undefined;
    if (!card) return;

    const containerWidth = container.clientWidth;
    const scrollLeft = card.offsetLeft - (containerWidth - card.offsetWidth) / 2;

    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToCard(activeIndex);
  }, [activeIndex]);

  /* ------------------------------------------------------------------ */
  /* TOUCH SWIPE HANDLERS                                               */
  /* ------------------------------------------------------------------ */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    touchStart.current = null;
  };

  /* ------------------------------------------------------------------ */
  /* MANUAL NAVIGATION                                                  */
  /* ------------------------------------------------------------------ */
  const nextSlide = () =>
    setActiveIndex((p) => (p === mentorshipData.length - 1 ? 0 : p + 1));
  const prevSlide = () =>
    setActiveIndex((p) => (p === 0 ? mentorshipData.length - 1 : p - 1));

  /* ------------------------------------------------------------------ */
  /* RENDER                                                             */
  /* ------------------------------------------------------------------ */
  return (
    <section
      className="relative py-24 font-montserrat bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-24 left-16 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-lg shadow-[#00ff88]/50">
            <Zap className="w-10 h-10 text-black" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#FFD700] mb-4"
        >
          CoffieFX Mentorship Highlights
        </motion.h2>
        <p className="text-lg text-[#ffffffcc] max-w-3xl mx-auto">
          From <span className="text-[#00ff88]">psychology</span> to{" "}
          <span className="text-[#FFD700]">live flips</span> — everything you need to become a{" "}
          <b>consistent trader</b>.
        </p>
      </div>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-12 scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {mentorshipData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex-shrink-0 w-[85%] sm:w-[65%] md:w-[45%] lg:w-[35%] 
              bg-[#0f1a2e]/90 backdrop-blur-md rounded-2xl overflow-hidden 
              transition-all duration-700 ease-out snap-center border ${
                index === activeIndex
                  ? "border-[#00ff88] shadow-2xl shadow-[#00ff88]/40 scale-105 z-10"
                  : "border-[#ffffff20] scale-95 opacity-80"
              }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#00ff88]/20 to-[#FFD700]/20 rounded-xl">
                  {item.icon}
                </div>
                {index === activeIndex && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-3 py-1 bg-[#FFD700] text-black text-xs font-bold rounded-full"
                  >
                    ACTIVE
                  </motion.div>
                )}
              </div>

              <h3
                className={`text-xl font-bold mb-2 ${
                  index === activeIndex ? "text-[#FFD700]" : "text-[#00ff88]"
                }`}
              >
                {item.title}
              </h3>

              <p className="text-sm text-[#ffffffcc] leading-relaxed mb-6">{item.description}</p>

              <a
                href={item.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center py-3 rounded-xl font-bold text-sm
                  bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black hover:shadow-xl hover:shadow-[#00ff88]/50 transition-all"
              >
                {item.ctaText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Manual Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-3 bg-[#0f1a2e]/80 rounded-full border border-[#00ff88]/40 hover:bg-[#00ff88]/20 transition pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6 text-[#00ff88]" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-[#0f1a2e]/80 rounded-full border border-[#FFD700]/40 hover:bg-[#FFD700]/20 transition pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6 text-[#FFD700]" />
        </button>
      </div>

      {/* Dots Only */}
      <div className="flex justify-center mt-12 gap-3">
        {mentorshipData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[#FFD700] w-8 shadow-lg shadow-[#FFD700]/60"
                : "bg-[#ffffff40] hover:bg-[#ffffff80]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default CoffieFXCarousel;