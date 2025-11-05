// src/components/Home/Education/CoffieFXForexIntro.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, AlertTriangle, Star, Zap, ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt";

const ForexCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  ctaText?: string;
  ctaLink?: string;
}> = ({ title, description, icon, index, ctaText, ctaLink }) => {
  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1200} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.06, y: -8 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        viewport={{ once: true }}
        className="h-full bg-[#0f1a2e]/90 border border-[#00ff88]/30 rounded-3xl p-6 backdrop-blur-md hover:border-[#00ff88] hover:shadow-2xl hover:shadow-[#00ff88]/40 transition-all duration-300"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-4"
        >
          <div className="p-4 bg-gradient-to-br from-[#00ff88]/20 to-[#FFD700]/20 rounded-2xl">
            {icon}
          </div>
        </motion.div>

        <h3 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-3 text-center">
          {title}
        </h3>

        <p className="text-sm md:text-base text-[#ffffffcc] leading-relaxed text-center mb-6">
          {description}
        </p>

        {ctaText && ctaLink && (
          <motion.a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block mx-auto w-fit px-5 py-2 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:shadow-[#00ff88]/60 transition-all"
          >
            {ctaText}
          </motion.a>
        )}
      </motion.div>
    </Tilt>
  );
};

const CoffieFXForexIntro: React.FC = () => {
  const cards = [
    {
      title: "What is Forex?",
      description:
        "The largest financial market in the world — trade currencies 24/5 and profit from global economic shifts.",
      icon: <Globe className="w-8 h-8 text-[#00ff88]" />,
    },
    {
      title: "Why Most Traders Fail",
      description:
        "No plan, no discipline, no risk control. 90% lose because they trade emotions, not strategy.",
      icon: <AlertTriangle className="w-8 h-8 text-[#FFD700]" />,
    },
    {
      title: "How CoffieFX Helps You Win",
      description:
        "Live training, VIP signals, 1:1 support, and a proven system — built for consistency and long-term growth.",
      icon: <Star className="w-8 h-8 text-[#00ff88]" />,
      ctaText: "Join Mentorship",
      ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20CoffieFX%20Mentorship",
    },
  ];

  return (
    <section
      id="forex-intro"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-xl shadow-[#00ff88]/60">
              <Zap className="w-10 h-10 text-black" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#FFD700] mb-4"
          >
            Master Forex Trading
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-[#ffffffcc] max-w-3xl mx-auto"
          >
            From confusion to <strong>consistency</strong> — learn the truth about Forex and how to win.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <ForexCard
              key={i}
              index={i}
              title={card.title}
              description={card.description}
              icon={card.icon}
              ctaText={card.ctaText}
              ctaLink={card.ctaLink}
            />
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <motion.a
            href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20start%20learning%20Forex"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/70 transition-all duration-300"
          >
            Start Learning Forex Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CoffieFXForexIntro;