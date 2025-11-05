"use client";

import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Twitter, ChevronDown } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="relative bg-[#0b0f19] text-white pt-16 pb-8 px-6 sm:px-12 md:px-20 overflow-hidden border-t border-[#00ffcc22]">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-24 left-16 w-64 h-64 bg-[#00ffcc15] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-16 w-64 h-64 bg-[#00ffcc15] rounded-full blur-3xl" />

      {/* footer grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10 relative">
        {/* Brand / About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         <h3 className="text-xl font-bold text-[#00c896] mb-3">CoffieFX Academy</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Ghana’s #1 Forex Academy — in-person in <strong>East Legon</strong> or online. 
            Learn from Big Coffie, trade with 85% win rate, and join a winning community.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold text-[#00ffcc] mb-3">Quick Links</h4>
           <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#smart-quiz" className="hover:text-[#00ffcc] transition">Smart Quiz</a></li>
            <li><a href="#faq" className="hover:text-[#00ffcc] transition">FAQs</a></li>
            <li><a href="/plans" className="hover:text-[#00ffcc] transition">$50 / $150 Classes</a></li>
            <li><a href="#community" className="hover:text-[#00ffcc] transition">Join Community</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-[#00ffcc] mb-3">Contact</h4>
          <ul className="space-y-2 text-[#ffffffcc] text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00ffcc]" />
              <a href="mailto:groupeight00@gmail.com" className="hover:text-[#00ffcc] transition">
                groupeight00@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00ffcc]" />
              <span>+233 55 123 4567</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00ffcc]" />
              <span>Accra, Ghana</span>
            </li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold text-[#00c896] mb-3">Stay Connected</h4>
          <p className="text-white/70 text-sm mb-3">
            Follow Big Coffie for daily signals, live trades, and student wins.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://t.me/bigCoffie" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 8.053-3.491a.993.993 0 0 1 .38-.076z"/>
              </svg>
            </a>
            <a href="https://instagram.com/the_coffiefx" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition"><Instagram className="w-5 h-5" /></a>
            <a href="https://youtube.com/TheCoffieFX" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://x.com/bigCoffie" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition"><Twitter className="w-5 h-5" /></a>
          </div>
        </motion.div>
      </div>

      {/* Disclaimer Toggle */}
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <button
          onClick={() => setShowDisclaimer((s) => !s)}
          className="inline-flex items-center gap-2 text-[#00c896] hover:text-[#FFD700] transition text-sm font-semibold"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showDisclaimer ? "rotate-180" : ""}`}
          />
          {showDisclaimer ? "Hide Disclaimer" : "Read Disclaimer"}
        </button>

        <AnimatePresence>
          {showDisclaimer && (
            <motion.div
              key="disclaimer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden mt-4"
            >
              <p className="text-white/70 text-xs sm:text-sm italic leading-relaxed px-4">
                Trading involves substantial risk. The CoffieFX Academy provides education only — not financial advice. 
                Past performance is not indicative of future results. Only trade with capital you can afford to lose.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ffffff10] mt-10 pt-6 text-center text-white/70 text-sm">
        © {year} The CoffieFX Academy. All rights reserved. | Built by{" "}
        <span className="text-[#FFD700]">Kwame (CS Student, UENR)</span>
      </div>
    </footer>
  );
}