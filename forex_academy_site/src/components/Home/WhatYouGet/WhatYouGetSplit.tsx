// src/components/Home/Programs/WhatYouGetSplit.tsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Video, Clock, Award, MapPin } from "lucide-react";

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
      className="bg-white/5 border border-[#00c896]/20 rounded-2xl p-5 shadow-sm backdrop-blur-md hover:translate-y-[-6px] hover:shadow-[0_10px_30px_rgba(0,200,150,0.15)] transition-transform"
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#00c896]/20 to-[#00c896]/10">
          <Icon size={20} className="text-[#00c896]" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-[#00c896] mb-1">{title}</h4>
          <p className="text-sm text-white/80">{desc}</p>
        </div>
      </div>
    </motion.li>
  );
};

const WhatYouGetSplit: React.FC = () => {
  const [mentorshipType, setMentorshipType] = useState<"online" | "in-person">("online");

  const mentorshipDetails = useMemo(
    () => ({
      online: {
        title: "$50 Online Class",
        tagline: "Learn from home with Big Coffie",
        highlight: "4 Weeks Live",
        mode: "Zoom + Telegram",
        image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762240564/online_class_preview.jpg",
        badge: "Beginner Friendly",
        features: [
          { title: "Live Zoom Classes", desc: "4 weeks of live training with Big Coffie.", Icon: Video },
          { title: "VIP Signal Group", desc: "Daily signals with 85% win rate.", Icon: Award },
          { title: "1:1 Mentor Chat", desc: "Ask questions anytime in Telegram.", Icon: Users },
          { title: "Lifetime Access", desc: "Re-watch recordings forever.", Icon: Clock },
        ],
      },
      "in-person": {
        title: "$150 In-Person Class",
        tagline: "Train at our East Legon campus",
        highlight: "2-Day Intensive",
        mode: "East Legon Okponglo",
        image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302755/SnapInsta.to_486315081_18056517722161244_2095643982265963332_n_yhpgbg.jpg",
        badge: "Elite Training",
        features: [
          { title: "Face-to-Face Training", desc: "2 full days with Big Coffie in Accra.", Icon: MapPin },
          { title: "Live Trading Floor", desc: "Trade live with mentors on real accounts.", Icon: Video },
          { title: "Advanced Risk System", desc: "Master the 85% win rate strategy.", Icon: Award },
          { title: "Lifetime VIP Group", desc: "Stay in the signal group forever.", Icon: Users },
        ],
      },
    }),
    []
  );

  const currentDetails = mentorshipDetails[mentorshipType];

  return (
    <section
      id="what-you-get"
      aria-labelledby="what-you-get-heading"
      className="relative py-20 px-4 sm:px-6 lg:px-12 font-montserrat bg-gradient-to-tr from-[#00c896]/10 via-[#00ffcc]/1"
    >
      {/* Intro */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          id="what-you-get-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-[#00c896]"
        >
          Choose Your CoffieFX Class
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto"
        >
          $50 online or $150 in-person — both include VIP signals, live training, and lifetime access.
        </motion.p>
      </div>

      {/* Toggle */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-center gap-4">
        <button
          onClick={() => setMentorshipType("online")}
          className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
            mentorshipType === "online"
              ? "bg-[#00c896] text-[#001F3F]"
              : "bg-white/5 text-white/70 hover:bg-white/10"
          }`}
        >
          $50 Online
        </button>
        <button
          onClick={() => setMentorshipType("in-person")}
          className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
            mentorshipType === "in-person"
              ? "bg-[#FFD700] text-[#001F3F]"
              : "bg-white/5 text-white/70 hover:bg-white/10"
          }`}
        >
          $150 In-Person
        </button>
      </div>

      {/* Split Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" aria-live="polite">
        
        {/* Left: Image with Overlay */}
        <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-[#00c896]/30">
          <AnimatePresence mode="wait">
            <motion.img
              key={mentorshipType}
              src={currentDetails.image}
              alt={`${currentDetails.title} preview`}
              initial={{ opacity: 0, filter: "blur(10px)", transform: "scale(1.05)" }}
              animate={{ opacity: 1, filter: "blur(0px)", transform: "scale(1)" }}
              exit={{ opacity: 0, filter: "blur(10px)", transform: "scale(1.05)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-6 rounded-xl p-4 z-10 flex flex-col justify-between pointer-events-none bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/80">{currentDetails.tagline}</p>
                <h3 className="text-lg font-bold text-white">{currentDetails.title}</h3>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#FFD700]">{currentDetails.highlight}</p>
                <p className="text-xs text-white/70">{currentDetails.mode}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs text-white/70"></div>
              <div className="flex gap-2">
                <a
                  href="/plans"
                  className="px-3 py-1 rounded-full bg-[#00c896] text-[#001F3F] font-semibold text-xs pointer-events-auto"
                >
                  Enroll Now
                </a>
                <a
                  href="#faq"
                  className="px-3 py-1 rounded-full bg-white/10 text-white text-xs pointer-events-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 z-20">
            <div className="px-3 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] text-xs font-semibold">
              {currentDetails.badge}
            </div>
          </div>
        </div>

        {/* Right: Features */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mentorshipType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#00c896]"
            >
              What You’ll Get
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-sm text-white/80 mb-6"
            >
              {mentorshipType === "online"
                ? "Join thousands learning from Big Coffie via Zoom and Telegram — perfect for beginners."
                : "Train in-person at our East Legon campus with live trading and advanced strategies."}
            </motion.p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentDetails.features.map((f, idx) => (
                <FeatureCard key={f.title} index={idx} title={f.title} desc={f.desc} Icon={f.Icon} />
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <a
                href="/plans"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#00c896] to-[#FFD700] text-[#001F3F] font-semibold shadow-md hover:shadow-lg transition"
              >
                Join {currentDetails.title}
                <span className="text-sm">→</span>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhatYouGetSplit;