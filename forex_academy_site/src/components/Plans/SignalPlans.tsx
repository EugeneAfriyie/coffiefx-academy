// src/components/Plans/CoffieFXSignals.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Crown, Shield } from "lucide-react";

interface SignalPackage {
  name: string;
  description: string;
  priceUsd: number;
  features: string[];
  highlight?: boolean;
  icon: React.ReactNode;
  ctaLink: string;
  ctaText: string;
}

const signalPackages: SignalPackage[] = [
  {
    name: "VIP Signals",
    description: "Daily high-probability entries with full analysis.",
    priceUsd: 55,
    icon: <Zap className="w-6 h-6" />,
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20VIP%20Signals%20%28%2455%29",
    ctaText: "Join VIP Signals – $55",
    features: [
      "5–10 signals per week",
      "Entry, SL, TP with chart screenshots",
      "Market breakdown & correlation",
      "24/7 Telegram access",
      "Weekly recap & psychology tips",
    ],
    highlight: true,
  },
  {
    name: "Flipping Signals",
    description: "Specialized for small account flipping under $1000.",
    priceUsd: 150,
    icon: <Crown className="w-6 h-6" />,
    ctaLink: "https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20Flipping%20Signals%20%28%24150%29",
    ctaText: "Get Flipping Signals – $150",
    features: [
      "All VIP Signals",
      "Flipping-specific entries",
      "Risk management for small accounts",
      "Live flipping demos",
      "1-on-1 review monthly",
    ],
  },
];

const CoffieFXSignals: React.FC = () => {
  const [usdToGhs, setUsdToGhs] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        if (data?.rates?.GHS) {
          setUsdToGhs(data.rates.GHS + 1.5); // adding buffer
          setLastUpdated(new Date(data.time_last_update_utc).toLocaleDateString());
        } else {
          setUsdToGhs(16.5);
          setLastUpdated(new Date().toLocaleDateString());
        }
      } catch {
        setUsdToGhs(16.5);
        setLastUpdated(new Date().toLocaleDateString());
      }
    };
    fetchRate();
  }, []);

  return (
    <section
      id="signals"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#00ff88] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD700] rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-[#00ff88] drop-shadow-lg" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00cc66]">
            COFFIEFX SIGNALS
          </h2>
          <p className="text-xl text-[#ffffffcc] mt-3">Trade Like Big Coffie</p>
        </motion.div>

        {/* Exchange Rate */}
        <p className="text-center text-[#ffffff80] mb-10 text-sm">
          {usdToGhs
            ? `Live Rate: $1 ≈ ₵${usdToGhs.toFixed(2)} GHS (Updated ${lastUpdated})`
            : "Fetching rate..."}
        </p>

        {/* Signal Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {signalPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 backdrop-blur-xl border transition-all duration-500
                ${pkg.highlight
                  ? "bg-gradient-to-br from-[#00ff8810] to-[#00cc6610] border-[#00ff88] shadow-2xl shadow-[#00ff88]/40 scale-105"
                  : "bg-[#0f1a2e]/80 border-[#ffffff20] hover:border-[#00ff88]/50"
                } hover:scale-105`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-full mb-4 ${pkg.highlight ? "bg-[#00ff88] text-black" : "bg-[#FFD700] text-black"}`}>
                {pkg.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 text-[#FFD700]">{pkg.name}</h3>
              <p className="text-[#ffffffb3] mb-6">{pkg.description}</p>

              {/* Price */}
              <div className="mb-8">
                <p className="text-4xl font-bold text-[#00ff88]">
                  ${pkg.priceUsd} <span className="text-lg font-normal text-[#ffffff80]">/ month</span>
                </p>
                {usdToGhs && (
                  <p className="text-lg text-[#FFD700] font-medium">
                    ≈ ₵{(pkg.priceUsd * usdToGhs).toFixed(2)} GHS
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-[#ffffffcc]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={pkg.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-full font-bold text-lg transition-all
                  ${pkg.highlight
                    ? "bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black hover:shadow-xl hover:shadow-[#00ff88]/60"
                    : "bg-gradient-to-r from-[#FFD700] to-[#e6b800] text-black hover:shadow-xl hover:shadow-[#FFD700]/60"
                  }`}
              >
                {pkg.highlight ? "Join VIP Now" : "Get Flipping Signals"}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="flex justify-center gap-6 mt-12 text-[#00ff88]">
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
      </div>
    </section>
  );
};

export default CoffieFXSignals;