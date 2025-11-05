import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const MentorJourney: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const bgClass = isDark
    ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
    : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = isDark ? "text-white/90" : "text-gray-900";

  return (
    <section
      id="journey-article"
      className={`relative py-20 px-4 sm:px-6 lg:px-12 font-montserrat transition-colors duration-500 ${bgClass} ${textClass}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-[#00c896] mb-10 text-center"
        >
          My Journey — From Struggle to Purpose
        </motion.h2>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="prose prose-base sm:prose-lg max-w-none leading-relaxed text-justify"
        >
          {/* 🌱 The Spark */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            The Spark — Rising Through Hardship
          </h3>
          <p className={`${isDark ? "text-white/80" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140164/photo_2025-08-20_09-20-25_pych9m.jpg"
              alt="Young man reflecting on challenges"
              className="float-left w-28 h-24 sm:w-40 sm:h-40 object-cover rounded-xl mr-5 mb-4 shadow-md"
            />
            My journey didn’t start from success — it started from survival.
            There was a season where I felt stuck, overlooked, and forgotten by
            the system. But in that wilderness I learned something powerful:
            <span className="text-[#00c896] font-semibold"> struggles are not
            signs of failure — they are the birthplace of calling.</span>
          </p>

          {/* 💡 Early Struggles */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            6 Years Ago — Nights of Learning and Prayer
          </h3>
          <p className={`${isDark ? "text-white/80" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140163/photo_2025-08-04_08-20-22_hmjomv.jpg"
              alt="Trader studying charts"
              className="float-right w-28 h-24 sm:w-40 sm:h-40 object-cover rounded-xl ml-5 mb-4 shadow-md"
            />
            I studied charts late at night with nothing but hope and a cracked
            phone screen. I wasn’t chasing luxury — I was chasing freedom. And I
            realized that consistency is not built on motivation but on habits...
            habits reinforced by faith, patience, and resilience.
          </p>

          {/* 🔁 Turning Point */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            Turning Pain into Purpose
          </h3>
          <p className={`${isDark ? "text-white/75" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140152/photo_2024-09-22_22-20-55_uevwfm.jpg"
              alt="Mentor teaching session"
              className="float-left w-28 h-24 sm:w-40 sm:h-40 object-cover rounded-xl mr-5 mb-4 shadow-md"
            />
            When I stopped trying to prove myself and started trying to improve
            myself — everything shifted. Trading stopped being an escape and
            became a mission. That’s when RoadMoney Forex was born — not as a
            business, but as a responsibility to help others avoid the same
            mistakes I made.
          </p>

          {/* 🌍 Today */}
          <h3 className="text-[#00c896] font-semibold mb-2 text-lg">
            Today — Faith, Mentorship & Impact
          </h3>
          <p className={`${isDark ? "text-white/75" : "text-gray-700"} mb-6`}>
            <img
              src="https://res.cloudinary.com/djeorsh5d/image/upload/v1761140148/photo_2023-12-12_17-33-45_m1idsn.jpg"
              alt="Mentor speaking to youth"
              className="float-right w-28 h-24 sm:w-40 sm:h-40 object-cover rounded-xl ml-5 mb-4 shadow-md"
            />
            Today I teach traders globally, guiding them not just in charts but
            in mindset. And everything I do remains rooted in faith — because
            skill without direction is wasted talent, and ambition without
            humility is self-destruction.
          </p>

          <p
            className={`${isDark ? "text-white/85" : "text-gray-800"} font-semibold mt-8 text-center italic`}
          >
            “Your journey is not random. If you let God work — every season will
            produce purpose.”
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default MentorJourney;
