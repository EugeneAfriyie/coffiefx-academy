// src/components/Home/Programs/CoffieFXWhatYouGet.tsx
"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Award, Users, Clock, MapPin, Zap, ArrowRight } from "lucide-react";

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  Icon: React.FC<any>;
  index: number;
}> = ({ title, desc, Icon, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="bg-[#0f1a2e]/80 border border-[#00ff88]/30 rounded-2xl p-5 backdrop-blur-md hover:translate-y-[-6px] hover:shadow-2xl hover:shadow-[#00ff88]/40 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#FFD700]/20">
          <Icon size={22} className="text-[#00ff88]" />
        </div>
        <div>
          <h4 className="text-base font-bold text-[#FFD700] mb-1">{title}</h4>
          <p className="text-sm text-[#ffffffcc] leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.li>
  );
};

const CoffieFXWhatYouGet: React.FC = () => {
  const [mentorshipType, setMentorshipType] = useState<"online" | "in-person">("online");

  const mentorshipDetails = useMemo(
    () => ({
      online: {
        title: "Online Mentorship", // ← Price removed
        tagline: "Learn from home with Big Coffie",
        highlight: "4 Weeks Live",
        mode: "Zoom + Telegram",
        image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762305109/0103d37d-afc1-4517-bece-5901e53d5931.png",
        badge: "Beginner Friendly",
        ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20the%20Online%20Mentorship",
        features: [
          { title: "4 Live Zoom Classes", desc: "Weekly training with Big Coffie.", Icon: Video },
          { title: "VIP Signal Group", desc: "Daily signals with 85% win rate.", Icon: Award },
          { title: "1:1 Telegram Support", desc: "Ask questions anytime.", Icon: Users },
          { title: "Lifetime Access", desc: "Re-watch recordings forever.", Icon: Clock },
        ],
      },
      "in-person": {
        title: "In-Person Class", // ← Price removed
        tagline: "Train at East Legon Campus",
        highlight: "14-Day Intensive",
        mode: "Okponglo, East Legon",
        image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302755/SnapInsta.to_486315081_18056517722161244_2095643982265963332_n_yhpgbg.jpg",
        badge: "Elite Training",
        ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20the%20In-Person%20Class",
        features: [
          { title: "2-Day Live Training", desc: "Face-to-face with Big Coffie.", Icon: MapPin },
          { title: "Live Trading Floor", desc: "Trade real accounts with mentors.", Icon: Video },
          { title: "Advanced Risk System", desc: "Master the 85% win rate strategy.", Icon: Award },
          { title: "Lifetime VIP Group", desc: "Stay in the signal group forever.", Icon: Users },
        ],
      },
    }),
    []
  );

  const current = mentorshipDetails[mentorshipType];

  return (
    <section
      id="what-you-get"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
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
          Choose Your Training
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-[#ffffffcc] max-w-3xl mx-auto"
        >
          Online or in-person — both include <strong>VIP signals</strong>, <strong>live training</strong>, and <strong>lifetime access</strong>.
        </motion.p>
      </div>

      {/* Toggle (Prices in buttons only) */}
      <div className="max-w-7xl mx-auto mb-12 flex justify-center gap-6">
        <button
          onClick={() => setMentorshipType("online")}
          className={`group relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
            mentorshipType === "online"
              ? "bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black shadow-xl shadow-[#00ff88]/60"
              : "bg-[#0f1a2e]/80 text-[#ffffffcc] border border-[#00ff88]/30 hover:border-[#00ff88] hover:text-[#00ff88]"
          }`}
        >
          Online 
          {mentorshipType === "online" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00cc66] rounded-full -z-10"
            />
          )}
        </button>

        <button
          onClick={() => setMentorshipType("in-person")}
          className={`group relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
            mentorshipType === "in-person"
              ? "bg-gradient-to-r from-[#FFD700] to-[#00cc66] text-black shadow-xl shadow-[#FFD700]/60"
              : "bg-[#0f1a2e]/80 text-[#ffffffcc] border border-[#00ff88]/30 hover:border-[#00ff88] hover:text-[#00ff88]"
          }`}
        >
          In-Person 
          {mentorshipType === "in-person" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#00cc66] rounded-full -z-10"
            />
          )}
        </button>
      </div>

      {/* Split Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={mentorshipType}
              src={current.image}
              alt={current.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/95 via-[#0a0e17]/60 to-transparent" />

          <div className="absolute inset-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-[#ffffffb3]">{current.tagline}</p>
                  <h3 className="text-2xl font-bold text-[#FFD700] mt-1">{current.title}</h3>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#00ff88]">{current.highlight}</p>
                  <p className="text-xs text-[#ffffff99]">{current.mode}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="px-4 py-2 bg-[#FFD700]/20 rounded-full text-[#FFD700] text-sm font-bold">
                {current.badge}
              </div>
              <a
                href={current.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-[#00ff88]/60 transition-all"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>

        {/* Right: Features */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mentorshipType}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-[#FFD700] mb-2">What You’ll Get</h3>
              <p className="text-lg text-[#ffffffcc]">
                {mentorshipType === "online"
                  ? "Perfect for beginners. Learn from anywhere with live Zoom classes."
                  : "Elite training. 2 days of live trading at our East Legon campus."}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4">
              {current.features.map((f, i) => (
                <FeatureCard key={f.title} index={i} title={f.title} desc={f.desc} Icon={f.Icon} />
              ))}
            </ul>

            <a
              href={current.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#00ff88]/70 hover:scale-105 transition-all duration-300"
            >
              Join {current.title}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CoffieFXWhatYouGet;