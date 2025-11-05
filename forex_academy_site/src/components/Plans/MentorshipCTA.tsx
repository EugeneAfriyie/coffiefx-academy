import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const CoffieFXCTA: React.FC = () => {
  const handleScrollToPlans = () => {
    const section = document.getElementById("plans");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-lg shadow-[#00ff88]/50">
            <Zap className="w-8 h-8 text-black" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00cc66] mb-6"
        >
          Ready to Trade Like Big Coffie?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg sm:text-xl text-[#ffffffcc] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join hundreds of traders flipping small accounts into consistent profits with
          <span className="text-[#FFD700] font-semibold"> The CoffieFX Strategy</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Scroll to Plans */}
          <button
            onClick={handleScrollToPlans}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full 
                       bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-lg
                       hover:scale-105 hover:shadow-2xl hover:shadow-[#00ff88]/60 
                       transition-all duration-300"
          >
            Choose Your Plan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Telegram Community */}
          <a
            href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20the%20community"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full 
                       border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg
                       hover:bg-[#FFD700] hover:text-black hover:scale-105 
                       hover:shadow-2xl hover:shadow-[#FFD700]/60 
                       transition-all duration-300"
          >
            Join Community
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff88]/20 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
};

export default CoffieFXCTA;