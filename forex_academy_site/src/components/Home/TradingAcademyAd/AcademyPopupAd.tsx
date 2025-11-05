// src/components/Home/AcademyPopupAd/AcademyPopupAd.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, MapPin, Phone, Send, Instagram } from "lucide-react";

export default function AcademyPopupAd() {
  const [show, setShow] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    const shownBefore = sessionStorage.getItem("coffiefxPopupShown");
    if (!shownBefore) {
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem("coffiefxPopupShown", "true");
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const iconVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: custom * 0.1, type: "spring", stiffness: 300 },
    }),
    exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/70 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-b from-[#001F3F] via-[#001022] to-[#001F3F] border border-[#00c89640] shadow-[0_0_40px_#00c89640] rounded-3xl max-w-md w-full p-6 text-center text-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-0 right-0 text-[#00c896] hover:text-white transition p-2"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.img
              src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1762240564/PHYSICAL_TEACH_ahfhc1.jpg"
              alt="The CoffieFX Academy Classroom"
              className="w-full h-44 sm:h-52 object-cover rounded-2xl mb-4 border border-[#00c89633]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />

            {/* Text */}
            <h2 className="text-2xl font-bold text-[#00c896] mb-2 leading-snug">
              GRAND OPENING IN EAST LEGON!
            </h2>
            <p className="text-white/90 text-sm mb-5 leading-relaxed">
              <strong>The CoffieFX Academy</strong> has officially opened
              its physical trading hub in <strong>East Legon Okponglo, Accra</strong>!  
              Visit us and experience real mentorship with Big Coffie.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 relative items-center">
              {/* Visit Us */}
              <a
                href="https://maps.google.com?q=East+Legon+Okponglo+Accra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00c896] text-[#001F3F] font-semibold px-6 py-3 rounded-full hover:bg-[#FFD700] active:scale-95 transition-all w-full sm:w-auto"
              >
                <MapPin className="w-5 h-5" /> Visit Us in East Legon
              </a>

              {/* Contact Us */}
              <div className="relative w-full sm:w-auto flex justify-center">
                <button
                  onClick={() => setShowContacts((prev) => !prev)}
                  className="inline-flex items-center justify-center gap-2 border border-[#00c89680] text-[#00c896] font-semibold px-6 py-3 rounded-full hover:bg-[#00c89620] active:scale-95 transition-all w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" /> Contact Us
                </button>

                {/* Contact Icons */}
                <AnimatePresence>
                  {showContacts && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute right-0 bottom-full mb-3 flex flex-col items-center gap-3"
                    >
                      {[
                        {
                          href: "tel:+2335573425449",
                          icon: <Phone className="text-green-400" />,
                          color: "#10B981",
                          title: "Call",
                        },
                        {
                          href: "https://t.me/bigCoffie",
                          icon: <Send className="text-[#229ED9]" />,
                          color: "#229ED9",
                          title: "Telegram",
                        },
                        {
                          href: "https://instagram.com/the_coffiefx",
                          icon: <Instagram className="text-[#E1306C]" />,
                          color: "#E1306C",
                          title: "Instagram",
                        },
                      ].map((item, i) => (
                        <motion.a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={item.title}
                          variants={iconVariants}
                          custom={i}
                          className="bg-white/5 p-3 rounded-full backdrop-blur-md hover:scale-110 active:scale-95 transition shadow-[0_0_12px_rgba(0,0,0,0.4)]"
                          style={{
                            boxShadow: `0 0 10px ${item.color}55`,
                            backgroundColor: `${item.color}22`,
                          }}
                        >
                          {item.icon}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-[#00c89620] blur-2xl -z-10"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}