// THE COFFIEFX ACADEMY – Mentorship Plans
// Built for Big Coffie by Kwame (UEB3502023)

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MapPin, Globe, Zap } from "lucide-react";

type PlanType = "online" | "flipping" | "inPerson";

const PlanTypes = {
  Online: "online" as PlanType,
  Flipping: "flipping" as PlanType,
  InPerson: "inPerson" as PlanType,
} as const;

interface Package {
  name: string;
  priceUsd?: number;
  priceGhs?: number;
  level: string;
  benefits: string[];
  premium?: boolean;
  ctaText: string;
  ctaLink: string;
}

export const onlinePackages: Package[] = [
  {
    name: "VIP Signals",
    priceUsd: 55,
    level: "Beginners",
    ctaText: "Join VIP Signals",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20VIP%20Signals%20%28%2455%29",
    benefits: [
      "Daily live trade alerts",
      "Entry & exit signals",
      "Market analysis updates",
      "Access to private Telegram group",
    ],
  },
  {
    name: "Group Mentorship",
    priceUsd: 150,
    level: "Beginner–Advanced",
    ctaText: "Enroll in Group Mentorship",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20Online%20Group%20Mentorship%20%28%24150%29",
    benefits: [
      "1 month intensive online training",
      "Lifetime access to private group",
      "Weekly live Zoom sessions",
      "Recorded classes for review",
      "Risk management training",
      "Certificate of Participation",
    ],
    premium: true,
  },
  {
    name: "1-on-1 Mentorship",
    priceUsd: 350,
    level: "Elite Traders",
    ctaText: "Book 1-on-1 Session",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%201-on-1%20Online%20Mentorship%20%28%24350%29",
    benefits: [
      "Personalized 1-on-1 coaching",
      "Lifetime access to coach",
      "Custom strategy development",
      "Prop firm setup guide",
      "Weekly performance reviews",
      "Certificate of Mastery",
    ],
  },
];

export const flippingPackage: Package = {
  name: "Online Flipping Sessions",
  priceUsd: 150,
  level: "Small Account Traders",
  ctaText: "Enroll in Flipping Sessions",
  ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20Online%20Flipping%20Sessions%20%28%24150%29",
  benefits: [
    "How to open multiple positions safely",
    "How to flip small accounts (under $1000)",
    "Risk management when flipping",
    "Live flipping demos",
    "Community support",
  ],
  premium: true,
};

export const inPersonPackages: Package[] = [
  {
    name: "Beginners Class",
    priceGhs: 700,
    level: "New Traders",
    ctaText: "Book Beginners Seat",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20Physical%20Beginners%20Class%20%28₵700%29",
    benefits: [
      "Live Trading Sessions",
      "Expert Tutor Support",
      "Chart Analysis & Signal Access",
      "The coffiefx Strategy",
      "In-Person Classes with Big Coffie",
    ],
  },
  {
    name: "Advanced Class",
    priceGhs: 2100,
    level: "Experienced Traders",
    ctaText: "Book Advanced Seat",
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20Physical%20Advanced%20Class%20%28₵2100%29",
    benefits: [
      "Live Trading & Market Analysis",
      "1-Month Forex Signals",
      "Small Account Growth Support",
      "Student Community for Analysis",
      "Certificate of Excellence",
    ],
    premium: true,
  },
];

export default function CoffieFXPlans() {
  const [activePlan, setActivePlan] = useState<PlanType>(PlanTypes.Online);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(onlinePackages[1]);
  const [usdToGhs, setUsdToGhs] = useState<number>(16.5);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        if (data?.rates?.GHS) setUsdToGhs(data.rates.GHS + 1.5);
      } catch {
        setUsdToGhs(16.5);
      }
    };
    fetchRate();
  }, []);

  useEffect(() => {
    if (activePlan === PlanTypes.Flipping) {
      setSelectedPackage(flippingPackage);
    } else if (activePlan === PlanTypes.Online) {
      setSelectedPackage(onlinePackages[1]);
    } else {
      setSelectedPackage(inPersonPackages[0]);
    }
  }, [activePlan]);

  const getPackages = () => {
    if (activePlan === PlanTypes.Flipping) return [flippingPackage];
    if (activePlan === PlanTypes.Online) return onlinePackages;
    return inPersonPackages;
  };

  const packages = getPackages();

  return (
    <section id="plans" className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo + Title */}
        <div className="flex justify-center mb-6">
          <img src="/assets/coffiefx-logo.png" alt="THE COFFIE FX" className="w-20 h-20 drop-shadow-lg" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00cc66]">
          THE COFFIEFX ACADEMY
        </h2>
        <p className="text-xl text-[#ffffffcc] mb-10">Master Forex with Big Coffie</p>

        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActivePlan(PlanTypes.Online)}
            className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${
              activePlan === PlanTypes.Online
                ? "bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black shadow-lg shadow-[#00ff88]/50"
                : "border border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88]/10"
            }`}
          >
            <Globe className="w-5 h-5" /> Online (USD)
          </button>

          <button
            onClick={() => setActivePlan(PlanTypes.Flipping)}
            className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${
              activePlan === PlanTypes.Flipping
                ? "bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/50"
                : "border border-[#3B82F6] text-[#60A5FA] hover:bg-[#3B82F6]/10"
            }`}
          >
            <Zap className="w-5 h-5" /> Flipping Sessions
          </button>

          <button
            onClick={() => setActivePlan(PlanTypes.InPerson)}
            className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${
              activePlan === PlanTypes.InPerson
                ? "bg-gradient-to-r from-[#FFD700] to-[#e6b800] text-black shadow-lg shadow-[#FFD700]/50"
                : "border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
            }`}
          >
            <MapPin className="w-5 h-5" /> In-Person (GHS)
          </button>
        </div>

        {/* Social Links (BELOW TABS) */}
        <div className="flex justify-center gap-6 mb-12 text-[#00ff88]">
          <a
            href="https://t.me/bigCoffie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD700] transition duration-200"
          >
            Telegram
          </a>
          <a
            href="https://instagram.com/the_coffiefx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD700] transition duration-200"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@TheCoffieFX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD700] transition duration-200"
          >
            YouTube
          </a>
          <a
            href="https://vm.tiktok.com/ZMSUT1XT2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD700] transition duration-200"
          >
            TikTok
          </a>
        </div>

        {!usdToGhs ? (
          <p className="text-white/70 animate-pulse">Loading exchange rate...</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
            {/* Left: Package List */}
            <div className="flex lg:flex-col w-full lg:w-1/3 gap-4 overflow-x-auto lg:overflow-visible pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#00ff88] scrollbar-track-transparent">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  onClick={() => setSelectedPackage(pkg)}
                  whileHover={{ scale: 1.03 }}
                  className={`cursor-pointer p-5 rounded-2xl border min-w-[80%] lg:min-w-0 snap-start transition-all
                    ${
                      selectedPackage?.name === pkg.name
                        ? pkg.premium
                          ? "bg-gradient-to-br from-[#FFD70020] to-[#FFD70040] border-[#FFD700] shadow-xl shadow-[#FFD700]/30"
                          : activePlan === PlanTypes.Flipping
                          ? "bg-gradient-to-br from-[#1E40AF20] to-[#3B82F620] border-[#60A5FA] shadow-xl shadow-[#3B82F6]/30"
                          : "bg-gradient-to-br from-[#00ff8820] to-[#00cc6620] border-[#00ff88] shadow-xl shadow-[#00ff88]/30"
                        : "border-[#ffffff30] hover:border-[#00ff88]/50"
                    }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`text-lg font-bold ${pkg.premium ? "text-[#FFD700]" : activePlan === PlanTypes.Flipping ? "text-[#60A5FA]" : "text-[#00ff88]"}`}>
                      {pkg.name}
                    </h3>
                    <p className="text-xl font-bold text-white">
                      {pkg.priceUsd ? `$${pkg.priceUsd}` : `₵${pkg.priceGhs}`}
                    </p>
                  </div>
                  <p className="text-sm text-[#ffffffb3]">{pkg.level}</p>
                </motion.div>
              ))}
            </div>

            {/* Right: Selected Package Details */}
            <AnimatePresence mode="wait">
              {selectedPackage && (
                <motion.div
                  key={selectedPackage.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className={`w-full lg:w-2/3 p-8 rounded-2xl backdrop-blur-md border ${
                    selectedPackage.premium
                      ? "bg-gradient-to-br from-[#FFD70010] to-[#FFD70030] border-[#FFD70080] shadow-2xl shadow-[#FFD700]/40"
                      : activePlan === PlanTypes.Flipping
                      ? "bg-gradient-to-br from-[#1E40AF10] to-[#3B82F610] border-[#60A5FA] shadow-2xl shadow-[#3B82F6]/40"
                      : "bg-gradient-to-br from-[#00ff8810] to-[#00cc6610] border-[#00ff88] shadow-2xl shadow-[#00ff88]/40"
                  }`}
                >
                  <h3 className={`text-3xl font-bold mb-3 ${selectedPackage.premium ? "text-[#FFD700]" : activePlan === PlanTypes.Flipping ? "text-[#60A5FA]" : "text-[#00ff88]"}`}>
                    {selectedPackage.name}
                  </h3>
                  <p className="text-[#ffffffb3] mb-4">{selectedPackage.level}</p>

                  <div className="mb-6">
                    {selectedPackage.priceUsd && (
                      <>
                        <p className="text-4xl font-bold text-white">
                          ${selectedPackage.priceUsd.toFixed(2)} USD
                        </p>
                        <p className="text-lg text-[#00ff88]">
                          ≈ ₵{(selectedPackage.priceUsd * usdToGhs).toFixed(2)} GHS
                        </p>
                      </>
                    )}
                    {selectedPackage.priceGhs && (
                      <p className="text-4xl font-bold text-[#FFD700]">
                        ₵{selectedPackage.priceGhs} GHS
                      </p>
                    )}
                  </div>

                  <ul className="text-left text-[#ffffffcc] mb-8 space-y-3">
                    {selectedPackage.benefits.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${selectedPackage.premium ? "text-[#FFD700]" : activePlan === PlanTypes.Flipping ? "text-[#60A5FA]" : "text-[#00ff88]"}`} />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <a
                    href={selectedPackage.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] ${
                      selectedPackage.premium
                        ? "bg-gradient-to-r from-[#FFD700] to-[#e6b800] text-black hover:shadow-xl hover:shadow-[#FFD700]/50"
                        : activePlan === PlanTypes.Flipping
                        ? "bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white hover:shadow-xl hover:shadow-[#3B82F6]/50"
                        : "bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black hover:shadow-xl hover:shadow-[#00ff88]/50"
                    }`}
                  >
                    {selectedPackage.ctaText}
                  </a>

                  {activePlan === PlanTypes.InPerson && (
                    <p className="mt-4 text-sm text-[#ffffff80] flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      East Legon Okponglo, Accra
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}