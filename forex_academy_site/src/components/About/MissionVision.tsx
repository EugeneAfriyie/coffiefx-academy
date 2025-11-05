// src/components/Home/Mission/CoffieFXMissionVision.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap, ArrowRight } from "lucide-react";

const CoffieFXMissionVision: React.FC = () => {
  return (
    <section
      id="mission-vision"
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
            Our Mission & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-[#ffffffcc] max-w-3xl mx-auto"
          >
            Built on <strong>faith, discipline, and purpose</strong> — we don’t just teach trading. We build <strong>lives</strong>.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0f1a2e]/80 border border-[#00ff88]/30 rounded-3xl p-8 backdrop-blur-md hover:border-[#00ff88] hover:shadow-2xl hover:shadow-[#00ff88]/40 transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="p-4 bg-gradient-to-br from-[#00ff88]/20 to-[#FFD700]/20 rounded-2xl">
                <Target className="w-12 h-12 text-[#00ff88]" />
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-[#FFD700] mb-4 text-center">Our Mission</h3>

            <p className="text-[#ffffffcc] leading-relaxed text-center">
              To <strong>equip 100,000 traders</strong> with <strong>structure-based systems</strong>, 
              <strong> 85% win-rate signals</strong>, and <strong>faith-driven discipline</strong> — 
              so they can trade with <strong>consistency, confidence, and purpose</strong>.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0f1a2e]/80 border border-[#00ff88]/30 rounded-3xl p-8 backdrop-blur-md hover:border-[#00ff88] hover:shadow-2xl hover:shadow-[#00ff88]/40 transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="p-4 bg-gradient-to-br from-[#00ff88]/20 to-[#FFD700]/20 rounded-2xl">
                <Eye className="w-12 h-12 text-[#00ff88]" />
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-[#FFD700] mb-4 text-center">Our Vision</h3>

            <p className="text-[#ffffffcc] leading-relaxed text-center">
              A world where <strong>every trader</strong> — from <strong>East Legon to London</strong> — 
              trades with <strong>clarity, discipline, and faith</strong>. 
              No more gambling. Only <strong>consistency and freedom</strong>.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0f1a2e]/80 border border-[#00ff88]/30 rounded-3xl p-8 backdrop-blur-md hover:border-[#00ff88] hover:shadow-2xl hover:shadow-[#00ff88]/40 transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="p-4 bg-gradient-to-br from-[#00ff88]/20 to-[#FFD700]/20 rounded-2xl">
                <Heart className="w-12 h-12 text-[#00ff88]" />
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-[#FFD700] mb-4 text-center">Our Core Values</h3>

            <p className="text-[#ffffffcc] leading-relaxed text-center">
              <strong className="text-[#00ff88]">Faith</strong> in God’s plan.  
              <strong className="text-[#00ff88]">Discipline</strong> in every trade.  
              <strong className="text-[#00ff88]">Integrity</strong> in every word.  
              This is the <strong>CoffieFX way</strong>.
            </p>
          </motion.div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <motion.a
            href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20live%20the%20CoffieFX%20way"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/70 transition-all duration-300"
          >
            Join the Movement
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CoffieFXMissionVision;