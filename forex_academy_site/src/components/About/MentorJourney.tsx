// src/components/Home/Journey/CoffieFXMentorJourneyV2.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Heart, Trophy, Globe, Users } from "lucide-react";

const CoffieFXMentorJourneyV2: React.FC = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Dark Days",
      desc: "Unemployed. Broke. Praying at 3 AM over a cracked phone screen.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
    },
    {
      year: "2020",
      title: "First Win",
      desc: "Lost 7 accounts. Then — 1 green trade. Faith became strategy.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-lime-500",
    },
    {
      year: "2022",
      title: "CoffieFX Born",
      desc: "7 students in a small room. No AC. Just charts, coffee, and belief.",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2024",
      title: "East Legon Campus",
      desc: "1,800+ students. Live classes. Free signals. A movement.",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
    },
    {
      year: "2025",
      title: "Global Reach",
      desc: "London. Dubai. Nigeria. Ghana’s #1 Forex Academy goes worldwide.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-xl shadow-[#00ff88]/60">
              <Zap className="w-12 h-12 text-black" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#FFD700] mb-4"
          >
            From Pain to Purpose
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[#ffffffcc] max-w-3xl mx-auto"
          >
            Big Coffie didn’t start with a plan. He started with <strong>faith</strong>.
          </motion.p>
        </div>

        {/* Visual Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00ff88] via-[#FFD700] to-[#00ff88] rounded-full opacity-30" />

          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative flex items-center justify-center mb-16 ${
                i % 2 === 0 ? "md:justify-end md:pr-8" : "md:justify-start md:pl-8"
              }`}
            >
              {/* Card */}
              <div
                className={`w-full md:w-96 p-6 rounded-3xl bg-gradient-to-br ${
                  milestone.color
                } text-black shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#00ff88]/50`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-black/20 rounded-full">
                    {milestone.icon}
                  </div>
                  <span className="text-2xl font-bold">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-sm opacity-90">{milestone.desc}</p>
              </div>

              {/* Dot on Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00ff88] rounded-full border-4 border-[#0a0e17] shadow-lg" />
            </motion.div>
          ))}
        </div>

        {/* Final Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 p-8 bg-gradient-to-r from-[#00ff88]/10 to-[#FFD700]/10 rounded-3xl border border-[#00ff88]/30"
        >
          <h3 className="text-3xl font-bold text-[#FFD700] mb-4">
            Today: 1,800+ Lives Changed
          </h3>
          <p className="text-lg text-[#ffffffcc] mb-6 max-w-3xl mx-auto">
            Every student is proof: <strong>faith + structure = freedom</strong>.
          </p>

          {/* Final CTA */}
          <motion.a
            href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20be%20next"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/70 transition-all duration-300"
          >
            Be the Next Success Story
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffieFXMentorJourneyV2;