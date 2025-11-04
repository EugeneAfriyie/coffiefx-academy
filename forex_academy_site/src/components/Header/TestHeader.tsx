// Eugene Afriyie UEB3502023
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Layers,
  BookOpen,
  Phone,
  Menu,
  Sun,
  Moon,
  MapPin,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import MobileMenuDrawer from "../MobileMenuDrawer/MobileMenuDrawer";
import AdBanner from "../AdBanner/AdBanner"; // ✅ import the new Ad component
import { NavLink, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide mobile navbar on scroll down
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const bgClass =
    theme === "dark"
      ? "bg-[#0b0f19]/80 backdrop-blur-md"
      : "bg-[#f8f9fb]/80 backdrop-blur-md";
  const textClass = theme === "dark" ? "text-white" : "text-[#1a1a1a]";
  const accentClass = "text-[#00c896]";

  const navLinks = [
    { name: "Home", icon: <Home size={22} />, href: "/" },
    { name: "About", icon: <Info size={22} />, href: "/about" },
    { name: "Plans", icon: <Layers size={22} />, href: "/plans" },
    { name: "Resources", icon: <BookOpen size={22} />, href: "/resources" },
    { name: "Contact", icon: <Phone size={22} />, href: "/contact" },
  ];

  const getActiveName = () =>
    navLinks.find((link) => link.href === location.pathname)?.name ?? "Home";

  const active = getActiveName();

  return (
    <>
      {/* ✅ Top Animated Ad Banner */}
      <AdBanner />

      {/* ===== Desktop Header ===== */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden md:flex justify-between items-center sticky top-0 left-0 w-full z-40 px-6 py-4 ${bgClass} shadow-md transition-all duration-300`}
      >
          <NavLink to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="CoffieFX Bull"
              className="w-12 h-12 rounded-full object-cover border-2 border-coffie-primary dark:border-coffie-primary border-coffie-light-primary coffie-glow"
            />
            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse ${
              theme === 'dark' ? 'bg-coffie-accent' : 'bg-coffie-light-accent'
            }`} />
          </div>
          <div>
            <h1 className={`text-2xl font-bold ${accentClass} font-montserrat`}>
              THE COFFIEFX
            </h1>
            <p className={`text-xs opacity-80 flex items-center gap-1 ${textClass}`}>
              <MapPin size={12} /> East Legon Okponglo
            </p>
          </div>
        </NavLink>

        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `relative font-medium transition-colors ${
                  isActive ? accentClass : textClass
                } hover:text-[#00c896]`
              }
            >
              {({ isActive }) => (
                <>
                  <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
                    {link.name}
                  </motion.span>
                  {isActive && (
                    <motion.span
                      layoutId="desktopActive"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00c896] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      initial={false}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* ✅ Join Now Button */}
          <motion.a
            href="/mentorship"
            className="px-5 py-2.5 bg-[#00c896] text-white rounded-2xl font-medium hover:bg-[#00b589] transition"
            whileHover={{ scale: 1.05 }}
          >
            Join Now
          </motion.a>

          {/* Theme Toggle */}
          
        </div>
      </motion.header>

      {/* ===== Mobile Navbar (Auto-hide) ===== */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{
          y: isVisible ? 0 : 100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed bottom-0 left-0 w-full md:hidden flex justify-around items-center py-1 px-0 ${bgClass} shadow-2xl z-50 border-t border-white/10`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            end={link.href === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 transition-all ${
                isActive ? "text-[#00c896]" : textClass
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`p-2.5 rounded-xl transition-colors ${
                    isActive ? "bg-[#00c896]/15" : ""
                  }`}
                >
                  {link.icon}
                </div>
                <span className="text-xs font-medium">{link.name}</span>
                <motion.span
                  layoutId="mobileActive"
                  className={`h-1 w-1 rounded-full mt-1 ${
                    isActive ? "bg-[#00c896]" : "bg-transparent"
                  }`}
                  initial={false}
                />
              </>
            )}
          </NavLink>
        ))}

        {/* ✅ Menu Button (opens drawer) */}
        <button
          onClick={() => setMenuOpen(true)}
          className={`flex flex-col items-center space-y-1 ${textClass}`}
        >
          <div className="p-2.5 rounded-xl">
            <Menu size={22} />
          </div>
          <span className="text-xs font-medium">Menu</span>
        </button>
      </motion.nav>

      {/* Drawer */}
      <MobileMenuDrawer
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        active={active}
        setActive={() => {}}
        theme={theme}
      />
    </>
  );
};

export default Header;
