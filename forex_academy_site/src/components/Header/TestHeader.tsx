// components/Header.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Layers,
  BookOpen,
  Phone,
  Menu,
  MapPin,
} from "lucide-react";
import MobileMenuDrawer from "../MobileMenuDrawer/MobileMenuDrawer";
import AdBanner from "../AdBanner/AdBanner";
import { NavLink, useLocation } from "react-router-dom";

const TypewriterText: React.FC = () => {
  const [h1Text, setH1Text] = useState("");
  const [pText, setPText] = useState("");
  const [phase, setPhase] = useState<"typing-h1" | "typing-p" | "deleting-p" | "deleting-h1">("typing-h1");
  const [loop, setLoop] = useState(0);

  const phrases = [
    { h1: "THE COFFIEFX", p: "East Legon Okponglo" },
    { h1: "THE COFFIEFX", p: "DON’T COMPLICATE TRADING.❤️" },
  ];

  const current = phrases[loop % 2];

  useEffect(() => {
    const typingSpeed = 120;
    const deletingSpeed = 60;
    const pauseDuration = 1500;

    let timer: NodeJS.Timeout;

    if (phase === "typing-h1") {
      if (h1Text.length < current.h1.length) {
        timer = setTimeout(() => {
          setH1Text(current.h1.slice(0, h1Text.length + 1));
        }, typingSpeed);
      } else {
        setPhase("typing-p");
      }
    } 
    else if (phase === "typing-p") {
      if (pText.length < current.p.length) {
        timer = setTimeout(() => {
          setPText(current.p.slice(0, pText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setPhase("deleting-p"), pauseDuration);
      }
    } 
    else if (phase === "deleting-p") {
      if (pText.length > 0) {
        timer = setTimeout(() => {
          setPText(current.p.slice(0, pText.length - 1));
        }, deletingSpeed);
      } else {
        setPhase("deleting-h1");
      }
    } 
    else if (phase === "deleting-h1") {
      if (h1Text.length > 0) {
        timer = setTimeout(() => {
          setH1Text(current.h1.slice(0, h1Text.length - 1));
        }, deletingSpeed);
      } else {
        setLoop(loop + 1);
        setPhase("typing-h1");
      }
    }

    return () => clearTimeout(timer);
  }, [h1Text, pText, phase, loop, current]);

  return (
    <div className="flex flex-col leading-tight">
      <h1 className="text-xl sm:text-2xl font-bold text-[#00c896] font-montserrat text-glow overflow-hidden whitespace-nowrap">
        {h1Text}
        {phase === "typing-h1" && <span className="inline-block w-0.5 h-6 bg-[#00c896] ml-1 animate-pulse" />}
      </h1>
      <p className="text-xs opacity-80 flex items-center gap-1 mt-0.5">
        <MapPin size={12} />
        {pText}
        {(phase === "typing-p") && <span className="inline-block w-0.5 h-5 bg-[#00c896] ml-1 animate-pulse" />}
      </p>
    </div>
  );
};

const Header: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <AdBanner />

      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden md:flex justify-between items-center sticky top-0 left-0 w-full z-40 px-6 py-4 shadow-md transition-all duration-300 bg-[#0b0f19]/80 backdrop-blur-md`}
      >
        <NavLink to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302080/84c2a67c-a5bf-4e1a-8ec2-75ac777d8a9e.png"
              alt="CoffieFX Bull"
              className="w-12 h-12 rounded-full object-cover border-2 gold-glow border-[#00c896]"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse bg-[#00c896]" />
          </div>
          <TypewriterText />
        </NavLink>

        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `relative font-medium transition-colors ${
                  isActive ? "text-[#00c896]" : "text-white/80"
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

          <motion.a
            href="/plans"
            className="px-5 py-2.5 bg-[#00c896] text-white rounded-2xl font-medium hover:bg-[#00b589] transition"
            whileHover={{ scale: 1.05 }}
          >
            Join Now
          </motion.a>
        </div>
      </motion.header>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{
          y: isVisible ? 0 : 100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed bottom-0 left-0 w-full md:hidden flex justify-around items-center py-1 px-0 shadow-2xl z-50 border-t border-white/10 bg-[#0b0f19]/80 backdrop-blur-md`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            end={link.href === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 transition-all ${
                isActive ? "text-[#00c896]" : "text-white/70"
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

        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col items-center space-y-1 text-white/70"
        >
          <div className="p-2.5 rounded-xl">
            <Menu size={22} />
          </div>
          <span className="text-xs font-medium">Menu</span>
        </button>
      </motion.nav>

      <MobileMenuDrawer
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        active={active}
        setActive={() => {}}
      />
    </>
  );
};

export default Header;