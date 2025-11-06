// src/components/Home/CTA/CoffieFXAboutCTA.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Users, Star } from "lucide-react";

const CoffieFXAboutCTA: React.FC = () => {
  return (
    <section className="relative py-28 text-center overflow-hidden bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17]">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302713/SnapInsta.to_566846249_18076755227161244_5083847515239079115_n_aszzyz.jpg"
          alt="CoffieFX East Legon Class"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/95 via-[#0f1a2e]/70 to-transparent" />
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
        {/* Header */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-xl shadow-[#00ff88]/60">
            <Zap className="w-12 h-12 text-black" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#FFD700] mb-6"
        >
          Start Winning Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-[#ffffffcc] leading-relaxed mb-8 max-w-3xl mx-auto"
        >
          No more guesswork. No more losing. Join <strong>1,800+ students</strong> who trade with
          <strong className="text-[#00ff88]"> 85% win-rate signals</strong>, live East Legon classes, and
          <strong className="text-[#FFD700]"> real mentorship from Big Coffie</strong>.
        </motion.p>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm text-[#ffffff99]">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#00ff88]" />
            <span><strong className="text-[#FFD700]">1,800+</strong> Active Students</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-[#ffffff40] rounded-full" />
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#FFD700]" />
            <span><strong className="text-[#00ff88]">96%</strong> Success Rate</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%27m%20ready%20to%20start%20winning"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/70 transition-all duration-300"
          >
            Join Mentorship Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#plans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-[#00ff88] text-[#00ff88] font-bold text-xl rounded-full hover:bg-[#00ff88]/10 transition-all duration-300"
          >
            View $50 / $150 Plans
          </motion.a>
        </div>

        {/* Final Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-[#ffffff80]"
        >
          <span className="text-[#FFD700]">Free signals daily</span> · 
          <span className="text-[#00ff88]"> Live support</span> · 
          <span className="text-[#ffffffcc]"> No hidden fees</span>
        </motion.p>
      </motion.div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#00ff88]/60 to-transparent rounded-full blur-sm" />
    </section>
  );
};

export default CoffieFXAboutCTA;