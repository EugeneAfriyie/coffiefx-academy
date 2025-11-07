// src/components/Home/Impact/CoffieFXImpact.tsx
import { motion, type Variants } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Mic, Target, Share2, Zap } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  subtext: string;
}

const stats: Stat[] = [
  {
    icon: <Users className="w-8 h-8 text-[#00ff88]" />,
    value: 1800,
    label: "Traders Trained",
    subtext: "From Ghana to the world",
  },
  {
    icon: <Mic className="w-8 h-8 text-[#00ff88]" />,
    value: 120,
    label: "Live Sessions",
    subtext: "Weekly Zoom + In-Person",
  },
  {
    icon: <Target className="w-8 h-8 text-[#00ff88]" />,
    value: 92,
    label: "Flipping Success",
    subtext: "Students who 10x'd under $1000",
  },
  {
    icon: <Share2 className="w-8 h-8 text-[#00ff88]" />,
    value: 25000,
    label: "Social Reach",
    subtext: "Inspiring daily on Telegram",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CoffieFXImpact() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-lg shadow-[#00ff88]/50">
            <Zap className="w-10 h-10 text-black" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00cc66] mb-4"
        >
          The CoffieFX Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-[#ffffffcc] max-w-3xl mx-auto mb-16"
        >
          From small accounts to big wins — we’ve helped thousands flip, scale, and master the markets with The CoffieFX Strategy.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative p-6 rounded-2xl bg-[#0f1a2e]/80 backdrop-blur-md border border-[#00ff88]/30 
                         hover:border-[#00ff88] hover:shadow-2xl hover:shadow-[#00ff88]/40 
                         transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {/* Icon with Pulse */}
                <motion.div
                  animate={inView ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  {stat.icon}
                </motion.div>

                {/* CountUp Number */}
                <h3 className="text-4xl font-extrabold text-[#FFD700]">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix="+"
                    />
                  ) : (
                    "0+"
                  )}
                </h3>

                <p className="text-lg font-bold text-white">{stat.label}</p>
                <p className="text-sm text-[#ffffffb3]">{stat.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <a
            href="https://t.me/bigCoffie?text=Hi%20Big%20Coffie%2C%20I%20want%20to%20join%20the%20mentorship"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold text-lg rounded-full 
                       hover:scale-105 hover:shadow-2xl hover:shadow-[#00ff88]/60 
                       transition-all duration-300"
          >
            Join the Movement
            <Zap className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}