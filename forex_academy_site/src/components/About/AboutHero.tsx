// src/components/About/Hero/CoffieFXAboutHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const CoffieFXAboutHero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302755/SnapInsta.to_486315081_18056517722161244_2095643982265963332_n_yhpgbg.jpg"
          alt="Big Coffie teaching live in East Legon"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/90 via-[#0f1a2e]/70 to-[#0a0e17]/95" />
      </div>

      {/* Glow Accents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-6"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div className="p-5 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-2xl shadow-[#00ff88]/70">
            <Zap className="w-14 h-14 text-black" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] via-[#FFD700] to-[#00ff88] mb-6"
        >
          About CoffieFX Academy
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-[#ffffffcc] leading-relaxed max-w-3xl mx-auto mb-10"
        >
          We don’t chase the market — we <strong className="text-[#FFD700]">master it</strong>.<br />
          From <strong>East Legon</strong> to the world, we teach <strong>structure, faith, and 85% win-rate trading</strong>.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20tell%20me%20about%20CoffieFX%20Academy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/70 transition-all duration-300"
          >
            Discover the CoffieFX Way
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#journey"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-[#00ff88] text-[#00ff88] font-bold text-xl rounded-full hover:bg-[#00ff88]/10 transition-all duration-300"
          >
            Read Big Coffie’s Story
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-[#ffffff99]"
        >
          <span>1,800+ Students</span>
          <span className="hidden sm:block w-1 h-1 bg-[#ffffff40] rounded-full" />
          <span>Live in East Legon</span>
          <span className="hidden sm:block w-1 h-1 bg-[#ffffff40] rounded-full" />
          <span>Free Daily Signals</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#00ff88]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00ff88] rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default CoffieFXAboutHero;