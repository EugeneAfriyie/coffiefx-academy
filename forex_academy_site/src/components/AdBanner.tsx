// Eugene Afriyie UEB3502023
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ads = [
  {
    id: 1,
    title: "🎉 SNS Promotion — Trade with Rewards!",
    desc: "Register through our link and enjoy exclusive benefits as part of our SNS partnership promotion.",
    link: "#",
    button: "Explore Now",
  },
  {
    id: 2,
    title: "🏫 New In-Person Academy Now Open in Accra!",
    desc: "Join our physical trading sessions for deeper learning and personalized mentorship.",
    link: "/mentorship",
    button: "Visit Academy",
  },
];

const AdBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 4000); // 4 seconds per ad
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0b0f19] text-white py-2 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={ads[currentAd].id}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-center"
        >
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-[#00c896]">
              {ads[currentAd].title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              {ads[currentAd].desc}
            </p>
          </div>
          <a
            href={ads[currentAd].link}
            className="bg-[#00c896] text-[#0b0f19] text-sm px-4 py-1.5 rounded-full font-semibold hover:bg-[#00e6b3] transition-colors"
          >
            {ads[currentAd].button}
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AdBanner;
