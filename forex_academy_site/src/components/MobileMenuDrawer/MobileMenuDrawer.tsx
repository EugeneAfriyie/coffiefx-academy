'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, MessageCircle, Send, Facebook, Mail, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

interface NavLink {
  name: string;
  href: string; // e.g., "#home", "/plans"
  icon?: React.ReactNode;
}

interface MobileMenuDrawerProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navLinks: NavLink[];
  active: string;
  setActive: (name: string) => void;
  theme: 'light' | 'dark';
}

const MobileMenuDrawer = ({
  menuOpen,
  setMenuOpen,
  navLinks,
  active,
  setActive,
  theme,
}: MobileMenuDrawerProps) => {
  const bgClass = theme === 'dark' ? 'bg-[#0b0f19]' : 'bg-[#f8f9fb]';
  const textClass = theme === 'dark' ? 'text-white' : 'text-[#1a1a1a]';
  const accentClass = 'text-[#00c896]';

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [menuOpen, setMenuOpen]);

  // Close on backdrop
  const handleBackdropClick = () => setMenuOpen(false);

  // Handle navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();

    setActive(name);
    setMenuOpen(false);

    // If it's a hash link → smooth scroll
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // External or full page → navigate
      window.location.href = href;
    }
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          {/* MENU PANEL */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className={`relative w-full h-full ${bgClass} flex flex-col overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-2 p-2 rounded-full bg-[#00c896]/10 hover:bg-[#00c896]/20 transition z-10"
              aria-label="Close menu"
            >
              <X size={24} className={accentClass} />
            </button>

            {/* HERO – NOW VISIBLE */}
            <div className="relative mt-16 px-6 mb-8">
              <div
                className="h-32 bg-cover bg-center rounded-2xl shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302725/SnapInsta.to_566350257_18076755302161244_5110453254266395074_n_ttu6vw.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h1 className={`text-2xl sm:text-3xl font-bold ${accentClass}`}>
                    THE COFFIEFX Forex Academy
                  </h1>
                  <p className="mt-1 text-sm text-white/90">DON’T COMPLICATE TRADING.❤️</p>
                </div>
              </div>
            </div>

            {/* NAV LINKS */}
            <nav className="flex-1 px-8 pb-6 overflo-y-auto">
              <div className="space-y-5">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.name)}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className={`flex items-center justify-between border-b border-white/10 pb-3 transition-colors ${
                      active === link.name ? accentClass : textClass
                    }`}
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{link.name}</h3>
                      <p className="text-xs opacity-70">
                        {link.name === 'Home' && 'Return to the homepage'}
                        {link.name === 'About' && 'Learn more about us'}
                        {link.name === 'Plans' && 'Explore mentorship plans'}
                        {link.name === 'Resources' && 'View trading resources'}
                        {link.name === 'Contact' && 'Get in touch'}
                      </p>
                    </div>
                    <ChevronRight size={20} className="opacity-60" />
                  </motion.a>
                ))}
              </div>
            </nav>

            {/* SOCIALS */}
            <div className="px-8 py-6 border-t border-white/10">
              <p className={`text-center text-sm ${textClass} opacity-80 mb-3`}>Connect with us</p>
              <div className="flex justify-center space-x-6">
                <a href="https://instagram.com/the_coffiefx" target="_blank" rel="noopener" aria-label="Instagram">
                  <Instagram size={22} className={accentClass} />
                </a>
                <a href="https://t.me/bigCoffie" target="_blank" rel="noopener" aria-label="Telegram">
                  <Send size={22} className={accentClass} />
                </a>
                <a href="https://wa.me/233241234567" target="_blank" rel="noopener" aria-label="WhatsApp">
                  <MessageCircle size={22} className={accentClass} />
                </a>
                <a href="https://facebook.com/coffiefx" target="_blank" rel="noopener" aria-label="Facebook">
                  <Facebook size={22} className={accentClass} />
                </a>
                <a href="mailto:groupeight00@gmail.com" aria-label="Email">
                  <Mail size={22} className={accentClass} />
                </a>
              </div>
            </div>

            {/* JOIN BUTTON */}
            <div className="px-8 pb-10">
              <motion.a
                href="/mentorship"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  window.location.href = '/plans';
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-center py-4 rounded-2xl bg-[#00c896] text-black font-bold text-lg shadow-lg"
              >
                Join Now
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuDrawer;