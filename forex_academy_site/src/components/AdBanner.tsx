// Eugene Afriyie UEB3502023
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ads = [
  {
    title: "🔥 $200K + $1K Bonus!",
    shortTitle: "$200K + $1K Bonus!",
    description: "Join Exness via our link — trade & win up to $200K + $1K bonus!",
    shortDesc: "Trade & win $200K + $1K bonus!",
    image:
      "https://res.cloudinary.com/djeorsh5d/image/upload/v1762081423/25f42861-0895-42fa-b3e9-87ebc41265fe.png",
    link: "https://one.exnesslink.com/a/ttgurtgu",
    button: "Explore Now",
  },
  {
    title: "🎯 Accra Trading Academy!",
    shortTitle: "Accra Academy!",
    description:
      "Learn, trade, and grow with mentors at our new in-person Accra Academy.",
    shortDesc: "Join Accra’s top trading academy!",
    image:
      "https://res.cloudinary.com/djeorsh5d/image/upload/v1760408679/IMG_20251014_022039_477_ri1daj.jpg",
    link: "/plans#in-person",
    button: "Join Now",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const AdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        fixed top-0 left-0 w-full 
        bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/90 to-[#0b0f19]
        border-b border-[#00c896]/30 
        overflow-hidden z-50 sm:static
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={ads[currentAd].title}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex items-center justify-center gap-3 sm:gap-5 px-3 py-2 sm:py-3 text-center sm:text-left"
        >
          {/* Image */}
          <motion.img
            variants={{
              hidden: { opacity: 0, scale: 0.7, rotate: -8 },
              visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 0.6, type: "spring" },
              },
            }}
            src={ads[currentAd].image}
            alt={ads[currentAd].title}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-[#00c896]/40 shadow-md"
          />

          {/* Texts */}
          <motion.div variants={itemVariants} className="max-w-[550px] flex-1">
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { type: "spring", stiffness: 150 },
                },
              }}
              className="text-xs sm:text-sm md:text-base font-semibold text-[#00c896] leading-tight"
            >
              <span className="block sm:hidden">{ads[currentAd].shortTitle}</span>
              <span className="hidden sm:block">{ads[currentAd].title}</span>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { type: "spring", stiffness: 150, delay: 0.1 },
                },
              }}
              className="text-[10px] sm:text-sm text-gray-300 leading-snug"
            >
              <span className="block sm:hidden">{ads[currentAd].shortDesc}</span>
              <span className="hidden sm:block">{ads[currentAd].description}</span>
            </motion.p>
          </motion.div>

          {/* Button */}
          <motion.a
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 10 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { delay: 0.25, type: "spring" },
              },
            }}
            href={ads[currentAd].link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00c896] text-[#0b0f19] text-[10px] sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold shadow hover:bg-[#00e6b3] transition-all"
          >
            {ads[currentAd].button}
          </motion.a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AdBanner;
