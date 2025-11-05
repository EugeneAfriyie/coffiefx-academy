// src/components/Home/About/CoffieFXAboutMentor.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Users, Target, Shield, Twitter, Instagram, Youtube, Linkedin, Music2 as Tiktok, ArrowRight } from "lucide-react";

const CoffieFXAboutMentor: React.FC = () => {
  const stats = [
    { label: "Years Trading", value: "5+", icon: <Zap className="w-6 h-6" /> },
    { label: "Students Trained", value: "1,800+", icon: <Users className="w-6 h-6" /> },
    { label: "Consistency Rate", value: "92%", icon: <Target className="w-6 h-6" /> },
    { label: "Risk Mastery", value: "Elite", icon: <Shield className="w-6 h-6" /> },
  ];

  const socials = [
    { name: "Twitter", icon: Twitter, link: "https://twitter.com/bigcoffie" },
    { name: "Instagram", icon: Instagram, link: "https://instagram.com/bigcoffie" },
    { name: "YouTube", icon: Youtube, link: "https://youtube.com/@bigcoffie" },
    { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com/in/bigcoffie" },
    { name: "TikTok", icon: Tiktok, link: "https://tiktok.com/@bigcoffie" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Mentor Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03, rotate: 1 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#00ff88]/40"
        >
          <img
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302725/SnapInsta.to_566350257_18076755302161244_5110453254266395074_n_ttu6vw.jpg"
            alt="Big Coffie - Your Mentor"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/90 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-3xl font-bold text-[#FFD700]">Big Coffie</h3>
            <p className="text-sm text-[#00ff88]">Self-Funded Trader • East Legon</p>
          </div>
        </motion.div>

        {/* Mentor Details */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Header */}
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex justify-start mb-4"
            >
              <div className="p-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-xl shadow-[#00ff88]/60">
                <Zap className="w-8 h-8 text-black" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#FFD700] mb-4"
            >
              Meet Your Mentor
            </motion.h2>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {["Self-Funded", "Seminar Host", "5+ Years", "1,800+ Students", "Prop Funded"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full text-xs font-medium text-[#00ff88]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-lg text-[#ffffffcc] leading-relaxed">
            I used to chase the market — until I learned to <strong className="text-[#FFD700]">trade myself</strong>.
            Every win came from <strong className="text-[#00ff88]">discipline</strong>, not luck.
          </p>

          <p className="text-base text-[#ffffffb3]">
            That’s why <strong className="text-[#FFD700]">CoffieFX</strong> exists — to turn confused traders into
            <strong className="text-[#00ff88]"> confident, consistent scalers</strong> who grow accounts sustainably.
          </p>

          <p className="text-sm text-[#ffffff99]">
            I host live classes in <strong>East Legon</strong> and online because real transformation happens through
            <strong className="text-[#FFD700]"> clarity, not theory</strong>.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8"
          >
            <a
              href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20learn%20your%20story"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/70 hover:scale-105 transition-all duration-300"
            >
              Learn My Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socials.map(({ name, icon: Icon, link }) => (
              <motion.a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#ffffff99] hover:text-[#00ff88] transition-colors"
                aria-label={name}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[#0f1a2e]/80 border border-[#00ff88]/30 rounded-xl p-4 text-center"
              >
                <div className="flex justify-center mb-2 text-[#00ff88]">{stat.icon}</div>
                <div className="text-2xl font-bold text-[#FFD700]">{stat.value}</div>
                <div className="text-xs text-[#ffffffb3] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffieFXAboutMentor;