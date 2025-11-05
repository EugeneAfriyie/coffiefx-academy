// src/components/Home/WhyMentorship/FullScreenWhyMentorship.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedBackground from '../WhatIsForex/AnimatedBackground';

const panels = [
  {
    id: 'pain',
    eyebrow: 'The Struggle',
    title: 'Tired of losing in Forex?',
    text: 'You watched YouTube, followed signals, and still blew accounts. No system, no risk rules, no mentor — just noise and losses.',
    tone: 'dark',
  },
  {
    id: 'turn',
    eyebrow: 'The Turning Point',
    title: 'What if one mentor changed everything?',
    text: 'Big Coffie went from broke student to funding 100+ traders. Now he teaches the exact 85% win rate system he uses.',
    tone: 'mix',
  },
  {
    id: 'promise',
    eyebrow: 'The Promise',
    title: 'From confusion to funded trader',
    text: 'Join $50 online or $150 in-person. Get live training, VIP signals, risk templates, and pass prop firms — guaranteed.',
    tone: 'light',
  },
];

const FullScreenWhyMentorship: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const bgMix = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1]);

  return (
    <section id="why-mentorship" aria-labelledby="why-mentorship-heading" className="relative w-full">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <AnimatedBackground />
        <motion.div
          style={{ opacity: bgMix }}
          className="absolute inset-0 bg-gradient-to-tr from-[#00c896]/10 via-[#00ffcc]/10"
          aria-hidden="true"
        />
      </div>

      {/* Panels */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {panels.map((p,) => (
          <section
            key={p.id}
            className="snap-start h-screen flex items-center justify-center px-4 xs:px-6 sm:px-8 lg:px-12"
            aria-labelledby={`${p.id}-title`}
          >
            <div className="max-w-4xl text-center">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-[#00c896]/10 px-3 py-1 rounded-full border border-[#00c896]/30 text-[#00c896] text-xs font-semibold mb-4"
              >
                {p.eyebrow}
              </motion.div>

              {/* Title */}
              <motion.h2
                id={`${p.id}-title`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md"
              >
                {p.title}
              </motion.h2>

              {/* Text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-base xs:text-lg sm:text-xl max-w-3xl mx-auto text-white/90 drop-shadow-sm leading-relaxed"
              >
                {p.text}
              </motion.p>

              {/* CTA + Preview on Promise Panel */}
              {p.id === 'promise' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="mt-10"
                  >
                    <a
                      href="/plans"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#00c896] to-[#FFD700] text-[#001F3F] font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                      aria-label="Join CoffieFX $50 or $150 class"
                    >
                      Join Now — Start Winning
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
                  >
                    {[
                      {
                        title: 'Live Classes',
                        text: 'Train with Big Coffie weekly — online or in East Legon.',
                      },
                      {
                        title: 'VIP Signals',
                        text: '85% win rate signals sent daily in Telegram.',
                      },
                      {
                        title: 'Funded Trader Path',
                        text: 'Pass prop firm challenges with our proven system.',
                      },
                    ].map((card, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-[#00c896]/30 shadow-lg"
                        role="article"
                      >
                        <h5 className="font-bold text-[#FFD700] mb-2 text-lg">
                          {card.title}
                        </h5>
                        <p className="text-sm text-white/80">
                          {card.text}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default FullScreenWhyMentorship;