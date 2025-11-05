// src/components/Home/Community/CoffieFXTeamCommunity.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe2, Star, Zap, ArrowRight } from "lucide-react";

const CoffieFXTeamCommunity: React.FC = () => {
  const teamMembers = [
    {
      name: "Big Coffie — Founder & Mentor",
      role: "Head Coach | 85% Win-Rate Strategist",
      img: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762305109/0103d37d-afc1-4517-bece-5901e53d5931.png",
      desc: "From unemployment to 1,800+ students — Big Coffie turned pain into purpose. He teaches structure, psychology, and faith-driven discipline. Every signal is free. Every student is family.",
    },
    {
      name: "Kwame — Tech Lead",
      role: "Web Developer | Student Success Engineer",
      img: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762305109/kwame_profile.jpg",
      desc: "CS student at UENR building the future of CoffieFX Academy. From live sites to student dashboards — he ensures every trader has the tools to win.",
    },
    {
      name: "East Legon Team",
      role: "Live Class Hosts & Support",
      img: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302755/SnapInsta.to_486315081_18056517722161244_2095643982265963332_n_yhpgbg.jpg",
      desc: "Our in-person team in East Legon runs live classes, seminars, and 1:1 support. They’re the heartbeat of the CoffieFX experience.",
    },
  ];

  return (
    <section
      id="community"
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
            Our Team & Community
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-[#ffffffcc] max-w-3xl mx-auto"
          >
            From <strong>East Legon</strong> to <strong>global traders</strong> — we’re more than a team. We’re a <strong>movement</strong>.
          </motion.p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -12 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0f1a2e]/80 border border-[#00ff88]/30 rounded-3xl p-6 text-center backdrop-blur-md hover:border-[#00ff88] hover:shadow-2xl hover:shadow-[#00ff88]/40 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-4 border-[#00ff88]/50 shadow-xl"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              <h3 className="text-xl font-bold text-[#FFD700] mb-1">{member.name}</h3>
              <p className="text-sm text-[#00ff88] mb-3">{member.role}</p>
              <p className="text-sm text-[#ffffffcc] leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Users className="w-12 h-12 text-[#00ff88] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[#FFD700]">1,800+</p>
            <p className="text-sm text-[#ffffff99]">Active Students</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Globe2 className="w-12 h-12 text-[#00ff88] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[#FFD700]">20+</p>
            <p className="text-sm text-[#ffffff99]">Countries</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <Star className="w-12 h-12 text-[#00ff88] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[#FFD700]">96%</p>
            <p className="text-sm text-[#ffffff99]">Success Rate</p>
          </motion.div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <motion.a
            href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20the%20CoffieFX%20community"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/70 transition-all duration-300"
          >
            Join the CoffieFX Family
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CoffieFXTeamCommunity;