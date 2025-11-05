// src/components/Home/FAQ/FAQSection.tsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, Mail, Send } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How long does the mentorship last?",
    a: "Programs last 4–8 weeks depending on your level. You’ll have lifetime access to materials and VIP signals even after completion.",
  },
  {
    q: "Can I learn remotely?",
    a: "Yes! We offer live online sessions, recorded lessons, and hybrid options. Join from anywhere — Ghana or abroad.",
  },
  {
    q: "Do I need trading experience?",
    a: "No experience needed. Our smart quiz places you in the right program — $50 beginner or $150 advanced.",
  },
  {
    q: "Is in-person available outside East Legon?",
    a: "In-person classes are held exclusively at our East Legon Okponglo campus. Online is available worldwide.",
  },
  {
    q: "What payment options are available?",
    a: "Pay via Mobile Money (MTN, Vodafone, AirtelTigo), Bank Transfer, or Card. Details sent after enrollment.",
  },
  {
    q: "What’s included in the $50 class?",
    a: "Live in-person or online classes, VIP signals, 1:1 mentor chat, strategy templates, and 85% win rate system.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
         className="relative bg-[#0b0f19] text-white py-20 px-6 sm:px-12 md:px-20 overflow-hidden"
    >
      {/* background glows */}
      <div className="pointer-events-none absolute -top-32 left-10 w-72 h-72 bg-[#00ffcc22] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 w-72 h-72 bg-[#00ffcc22] rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#00c89612] px-3 py-1 rounded-full border border-[#00c89633] text-[#00c896] mb-4">
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00c896]">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80 mt-3 max-w-xl mx-auto">
            Got questions about CoffieFX classes, signals, or mentorship? We’ve got answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#001022]/60 border border-[#00c89622] rounded-xl p-5"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-[#00c896]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00c89699] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/90 mt-3 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 bg-[#00c89610] border border-[#00c89633] rounded-2xl p-6 text-center shadow-[0_0_20px_#00c89620]"
        >
          <h3 className="text-2xl font-bold text-[#00c896] mb-2">
            Still have questions?
          </h3>
          <p className="text-white/90 mb-5">
            Our team is ready — ask about $50 beginner class, $150 advanced, or VIP signals.
          </p>
          <motion.a
            href="mailto:bigcoffieacademy@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px #00c89680" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#00c896] text-[#001F3F] font-semibold px-6 py-3 rounded-full transition"
          >
            <Send className="w-4 h-4" />
            Contact Big Coffie
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}