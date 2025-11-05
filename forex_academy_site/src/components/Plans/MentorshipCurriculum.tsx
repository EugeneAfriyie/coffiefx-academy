// src/components/Home/Carousel/CoffieFXCarousel.tsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Shield, TrendingUp, Users, ArrowRight } from "lucide-react";

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
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20master%20trading%20psychology",
  },
  {
    title: "Risk Management",
    description: "Protect your capital while maximizing profits using professional-grade strategies.",
    icon: <Shield className="w-8 h-8 text-[#00ff88]" />,
    ctaText: "Learn Risk Rules",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20learn%20risk%20management",
  },
  {
    title: "Market Structure",
    description: "Understand the flow of the market like a pro and trade with precision entries.",
    icon: <TrendingUp className="w-8 h-8 text-[#00ff88]" />,
    ctaText: "Master Structure",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20master%20market%20structure",
  },
  {
    title: "Live Sessions",
    description: "Join weekly group and 1-on-1 mentorship calls to review charts and plan setups.",
    icon: <Zap className="w-8 h-8 text-[#FFD700]" />,
    ctaText: "Book Live Call",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20live%20mentorship",
  },
  {
    title: "Community Support",
    description: "Access a private trading community that keeps you motivated and accountable.",
    icon: <Users className="w-8 h-8 text-[#00ff88]" />,
    ctaText: "Join Community",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20the%20community",
  },
];

const CoffieFXCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // === AUTO-SLIDE LOGIC ===
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === mentorshipData.length - 1 ? 0 : prev + 1));
    }, 4500);
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

  // === SCROLL TO CENTER CARD ===
  const scrollToCard = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement;
    if (!card) return;

    const containerWidth = container.clientWidth;
    const cardWidth = card.offsetWidth;
    const cardLeft = card.offsetLeft;

    const scrollLeft = cardLeft - (containerWidth - cardWidth) / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    scrollToCard(activeIndex);
  }, [activeIndex, scrollToCard]);

  // === DETECT SCROLL & UPDATE activeIndex ===
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const updateActiveIndex = () => {
      const containerWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(container.children).forEach((child, i) => {
        const card = child as HTMLElement;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - (scrollLeft + containerWidth / 2));
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveIndex);
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  // === DOT CLICK ===
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    scrollToCard(index);
  };

  return (
    <section className="relative py-24 font-montserrat bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
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
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00cc66] mb-4"
        >
          CoffieFX Mentorship Highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-[#ffffffcc] max-w-3xl mx-auto"
        >
          From **psychology to live flips** — everything you need to become a **consistent trader**.
        </motion.p>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto gap-6 px-6 md:px-12 scroll-smooth snap-x snap-mandatory hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {mentorshipData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex-shrink-0 w-[85%] sm:w-[65%] md:w-[45%] lg:w-[35%] bg-[#0f1a2e]/90 backdrop-blur-md rounded-2xl overflow-hidden 
                        transition-all duration-700 ease-out snap-center border ${
                          index === activeIndex
                            ? "border-[#00ff88] shadow-2xl shadow-[#00ff88]/40 scale-105 z-10"
                            : "border-[#ffffff20] scale-95 opacity-80"
                        }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-3 py-1 bg-[#FFD700] text-black text-xs font-bold rounded-full"
                  >
                    ACTIVE
                  </motion.div>
                )}
              </div>

              <h3 className={`text-xl font-bold mb-2 ${
                index === activeIndex ? "text-[#FFD700]" : "text-[#00ff88]"
              }`}>
                {item.title}
              </h3>
              <p className="text-sm text-[#ffffffcc] leading-relaxed mb-6">
                {item.description}
              </p>

              <a
                href={item.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]
                           bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black
                           hover:shadow-xl hover:shadow-[#00ff88]/50"
              >
                {item.ctaText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-10 gap-2">
        {mentorshipData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[#FFD700] w-8 shadow-lg shadow-[#FFD700]/60"
                : "bg-[#ffffff40] hover:bg-[#ffffff80]"
            }`}
            whileTap={{ scale: 0.8 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CoffieFXCarousel;