// src/components/Home/WhyForex/WhyForex.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, DollarSign, Globe } from 'lucide-react';
import AnimatedChartCanvas from './AnimatedChartCanvas';

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyForex: React.FC = () => {
  // const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const reasons: Reason[] = [
    {
      title: 'Trade 24/5 From Ghana',
      description:
        'Forex never sleeps. Trade London, New York, or Tokyo sessions — anytime your phone has data.',
      icon: <Clock size={20} className="text-[#00c896] mr-3 flex-shrink-0" />,
    },
    {
      title: 'Turn $50 Into $500+',
      description:
        'With proper risk and Big Coffie’s system, students turn small accounts into funded traders.',
      icon: <DollarSign size={20} className="text-[#FFD700] mr-3 flex-shrink-0" />,
    },
    {
      title: 'Join From Anywhere',
      description:
        'East Legon in-person or online from Kumasi, Takoradi, or abroad — CoffieFX is global.',
      icon: <Globe size={20} className="text-[#00c896] mr-3 flex-shrink-0" />,
    },
  ];

  return (
    <section
      id="why-forex"
      aria-labelledby="why-forex-heading"
      className="relative py-20 overflow-hidden bg-gradient-to-b  from-[#00c896]/10 via-[#00ffcc]/10 text-white font-montserrat"
    >
      {/* Animated Chart Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatedChartCanvas theme="dark" />
        <motion.div
          style={{ translateY }}
          className="absolute inset-0 bg-black/20 mix-blend-overlay"
          aria-hidden="true"
        />
      </div>

      {/* Floating Glow Blob */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-18%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-20"
        animate={{
          x: ['0%', '-18%', '10%', '0%'],
          y: ['0%', '-8%', '12%', '0%'],
          scale: [1, 1.06, 1.02, 1],
          rotate: [0, -30, 24, 0],
        }}
        transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(135deg, rgba(0,200,150,0.18), rgba(255,215,0,0.10))',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#00c896]/10 px-3 py-1 rounded-full border border-[#00c896]/30 text-[#00c896] text-xs font-semibold mb-4">
            Why Forex? Why Now?
          </div>
          <h2
            id="why-forex-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00c896]"
          >
            Forex Is Ghana’s Fastest Path to Freedom
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto mt-4">
            No office. No boss. Just your phone, internet, and Big Coffie’s 85% win rate system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Live Market Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#00c896]/30"
          >
            <div className="absolute inset-6 rounded-xl bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-md border border-white/10 z-20 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/70">Live Signal</p>
                  <h4 className="text-xl font-bold text-white">EUR/USD</h4>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#00c896]">BUY</p>
                  <p className="text-xs text-white/70">1.0895 → 1.0950</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70">Sent: 2:14 PM GMT</div>
                <a
                  href="https://t.me/bigCoffie"
                  className="px-4 py-2 rounded-full bg-[#00c896] text-[#001F3F] font-bold text-sm hover:brightness-110 transition"
                >
                  Join VIP
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Reasons + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-6">
              Why Thousands Choose CoffieFX
            </h3>

            <ul className="space-y-6 mb-8">
              {reasons.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#00c896]/10 border border-[#00c896]/30">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">
                      {r.title}
                    </h4>
                    <p className="text-sm text-white/80 mt-1">
                      {r.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Teaser */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="mb-8 p-4 rounded-xl bg-[#FFD700]/5 border border-[#FFD700]/30"
            >
              <p className="text-sm italic text-white/90">
                <span className="text-[#FFD700] font-bold">Big Coffie:</span> “I started with $50. Now I fund traders. You’re next.”
              </p>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="/plans"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(0,200,150,0.3)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#00c896] to-[#FFD700] text-[#001F3F] font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Start Your $50 Class
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.35 }}
              >
                
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyForex;