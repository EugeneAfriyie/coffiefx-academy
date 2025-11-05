// Eugene Afriyie UEB3502023
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  ChevronDown,
  ArrowUp,
} from "lucide-react";

import { useLocation } from "react-router-dom";



export default function CoffieFXFooter() {
  const year = new Date().getFullYear();
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // usePathname updates automatically on client-side navigations (Link)
 const location = useLocation();
const isHomePage = location.pathname === "/" || location.pathname === "/index.html";

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white pt-16 pb-8 px-6 sm:px-12 md:px-20 overflow-hidden border-t border-[#00ff88]/20">
      {/* Glow Accents */}
      <div className="pointer-events-none absolute -top-32 left-16 w-96 h-96 bg-[#00ff88]/20 rounded-full blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 right-16 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left z-10 relative">
        {/* Brand */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-xl font-bold text-[#00ff88] mb-3">CoffieFX Academy</h3>
          <p className="text-[#ffffffcc] text-sm leading-relaxed">
            Ghana’s #1 Forex Academy — live classes in <strong>East Legon</strong> or online.
            Master the market with Big Coffie’s proven strategy, VIP signals, and community support.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h4 className="text-lg font-semibold text-[#00ff88] mb-3">Quick Links</h4>
          <ul className="space-y-2 text-[#ffffffcc] text-sm">
            {isHomePage && (
              <>
                <li><a href="#smart-quiz" className="hover:text-[#00ff88] transition">Smart Quiz</a></li>
                <li><a href="#community" className="hover:text-[#00ff88] transition">Join Community</a></li>
              </>
            )}
            <li><a href="/faq" className="hover:text-[#00ff88] transition">FAQs</a></li>
            <li><a href="/plans" className="hover:text-[#00ff88] transition">Mentorship Plans</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.address className="not-italic space-y-3 text-[#ffffffcc] text-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h4 className="text-lg font-semibold text-[#00ff88] mb-3">Contact</h4>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#00ff88]" />
            <a href="mailto:coffiefxacademy@gmail.com" className="hover:text-[#00ff88] transition">coffiefxacademy@gmail.com</a>
          </p>
          <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#00ff88]" /> +233 55 123 4567</p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#00ff88]" /> East Legon Okponglo, Accra</p>
        </motion.address>

        {/* Social Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <h4 className="text-lg font-semibold text-[#00ff88] mb-3">Stay Connected</h4>
          <p className="text-[#ffffffcc] text-sm mb-4">Follow Big Coffie for daily signals, live trades, and student wins.</p>
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <a href="https://t.me/bigCoffie" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 8.053-3.491a.993.993 0 0 1 .38-.076z"/></svg>
            </a>
            <a href="https://instagram.com/the_coffiefx" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition"><Instagram className="w-5 h-5" /></a>
            <a href="https://youtube.com/@TheCoffieFX" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition"><Youtube className="w-5 h-5" /></a>
            <a href="https://x.com/bigCoffie" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition"><Twitter className="w-5 h-5" /></a>
          </div>
        </motion.div>
      </div>

      {/* Disclaimer Toggle */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <button
          onClick={() => setShowDisclaimer((s) => !s)}
          aria-expanded={showDisclaimer}
          className="group inline-flex items-center gap-2 text-[#00ff88] hover:text-[#FFD700] transition text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#00ff88]/40 rounded-md"
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDisclaimer ? "rotate-180" : ""}`} />
          {showDisclaimer ? "Hide Disclaimer" : "Read Disclaimer"}
        </button>

        <AnimatePresence>
          {showDisclaimer && (
            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }} className="overflow-hidden mt-4 text-[#ffffff99] text-xs sm:text-sm italic leading-relaxed px-4">
              Trading involves substantial risk. The CoffieFX Academy provides education only — not financial advice. Past performance is not indicative of future results. Only trade with capital you can afford to lose.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ffffff10] mt-10 pt-6 text-center text-[#ffffff99] text-sm">
        © {year} CoffieFX Academy. All rights reserved. | Built by{" "}
        <a href="https://t.me/kwame_cs" target="_blank" rel="noopener noreferrer" className="text-[#00ff88] hover:text-[#FFD700] transition">
          Kwame (CS Student, UENR)
        </a>
      </div>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button key="scroll-top" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.4 }} onClick={scrollToTop} className="fixed bottom-6 right-6 bg-[#00ff88] hover:bg-[#FFD700] text-[#0a0e17] p-3 rounded-full shadow-lg transition-colors z-50">
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
