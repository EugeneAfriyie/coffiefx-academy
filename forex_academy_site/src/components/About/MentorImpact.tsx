// src/components/Home/Impact/CoffieFXMentorImpact.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Mic, Share2, Instagram, Youtube, Send, ArrowRight, Zap } from "lucide-react";
import { Music2 as Tiktok } from "lucide-react";

const CoffieFXMentorImpact: React.FC = () => {
  const socials = [
    { icon: <Instagram size={22} />, href: "https://instagram.com/the_coffiefx", label: "Instagram" },
    { icon: <Youtube size={22} />, href: "https://youtube.com/@TheCoffieFX", label: "YouTube" },
    { icon: <Send size={22} />, href: "https://t.me/bigCoffie", label: "Telegram" },
    { icon: <Tiktok size={22} />, href: "https://tiktok.com/@bigcoffie", label: "TikTok" },
  ];

  return (
    <section
      id="impact"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#00ff88]/40"
        >
          <img
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1762395603/SnapInsta.to_573146741_18078681389161244_8695105450639066888_n_omvcma.jpg"
            alt="Big Coffie mentoring students in East Legon"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/90 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-sm text-[#00ff88]">East Legon Campus</p>
            <p className="text-xs text-[#ffffff99]">Live Training Session</p>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
              Beyond Trading
            </motion.h2>
          </div>

          <p className="text-lg text-[#ffffffcc] leading-relaxed">
            Big Coffie isn’t just a mentor — he’s a <strong className="text-[#FFD700]">movement</strong>.
            From <strong>East Legon seminars</strong> to <strong>online webinars</strong>, he’s trained over
            <strong className="text-[#00ff88]"> 1,800 students</strong> in financial discipline and mindset.
          </p>

          <p className="text-base text-[#ffffffb3]">
            Every week, he hosts <strong className="text-[#FFD700]">live classes</strong> and shares
            <strong className="text-[#00ff88]"> free signals</strong> across social media — helping thousands stay
            <strong> consistent, confident, and profitable</strong>.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <Users className="w-8 h-8 text-[#00ff88] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[#FFD700]">1,800+</p>
              <p className="text-xs text-[#ffffff99]">Students Trained</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Mic className="w-8 h-8 text-[#00ff88] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[#FFD700]">50+</p>
              <p className="text-xs text-[#ffffff99]">Seminars Hosted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <Share2 className="w-8 h-8 text-[#00ff88] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[#FFD700]">50K+</p>
              <p className="text-xs text-[#ffffff99]">Community Reach</p>
            </motion.div>
          </div>

          {/* CTA + Socials */}
          <div className="mt-10">
            <motion.a
              href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20a%20live%20webinar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/70 transition-all duration-300"
            >
              Join Live Webinar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex items-center gap-4 mt-8">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[#ffffff99] hover:text-[#00ff88] transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffieFXMentorImpact;