// src/components/Home/SmartQuiz/CoffieFXSmartQuiz.tsx
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Zap, MapPin, Globe } from "lucide-react";
// import { inPersonPackages } from "../../Plans/CoffieFXPlans";
import { onlinePackages, flippingPackage, inPersonPackages } from "../../Plans/CoffieFXPlans";

interface Step {
  key: string;
  question: string;
  options: string[];
}

const steps: Step[] = [
  {
    key: "experience",
    question: "How long have you been trading?",
    options: ["I’m new to trading", "Less than 1 year", "1–3 years", "Over 3 years"],
  },
  {
    key: "schedule",
    question: "What’s your typical weekday schedule?",
    options: ["I work full-time (9–5)", "I have flexible hours", "I’m a student/freelancer"],
  },
  {
    key: "location",
    question: "Do you live in or near Accra (Ghana)?",
    options: ["Yes — I live in/near Accra", "No — I’m outside Accra"],
  },
  {
    key: "capital",
    question: "What’s your available capital for trading right now?",
    options: ["Under $200", "$200–$1000", "Over $1000"],
  },
  {
    key: "learning",
    question: "How do you prefer to learn?",
    options: ["Video & visuals (self-paced)", "Live sessions with mentors", "1-on-1 coaching"],
  },
];

// ------------------------------------------------------
// Hook: useCoffieFXQuiz
// ------------------------------------------------------
function useCoffieFXQuiz() {
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [usdToGhs, setUsdToGhs] = useState(16.5);

  // Fetch live rate
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
    }, []);;

  const startQuiz = () => {
    setStarted(true);
    setStepIndex(0);
    setShowResult(false);
    setAnswers({});
  };

  const selectOption = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (stepIndex < steps.length - 1) {
      setStepIndex((s) => s + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (stepIndex === 0) {
      setStarted(false);
      setAnswers({});
    } else {
      setStepIndex((s) => Math.max(0, s - 1));
    }
  };

  const computeRecommendation = () => {
    const { experience, location, capital, learning } = answers;

    let plan: any;
    let description = "";

    // 1. In-Person?
    if (location?.includes("Accra")) {
      plan = experience?.includes("new") || experience?.includes("Less") 
        ? inPersonPackages[0] 
        : inPersonPackages[1];
      description = `You're in Accra — join **${plan.name}** with Big Coffie in **East Legon**.`;
    }
    // 2. Online
    else {
      if (capital?.includes("Under $200") || learning?.includes("1-on-1")) {
        plan = onlinePackages[2]; // 1-on-1
        description = `You want **personal coaching** — **1-on-1 Mentorship** is your elite path.`;
      } else if (capital?.includes("$200–$1000")) {
        plan = flippingPackage;
        description = `Small account? **Flipping Sessions** will help you grow fast.`;
      } else {
        plan = onlinePackages[1]; // Group
        description = `Join **Group Mentorship** — weekly live Zoom + community support.`;
      }
    }

    return { plan, description, usdToGhs };
  };

  const result = showResult ? computeRecommendation() : null;

  return {
    started,
    showResult,
    stepIndex,
    steps,
    answers,
    result,
    startQuiz,
    selectOption,
    goBack,
  };
}

// ------------------------------------------------------
// Intro Panel
// ------------------------------------------------------
const IntroPanel = ({ onStart }: { onStart: () => void }) => {
  const stats = [
    { icon: Zap, title: "2-Min Quiz", sub: "Get matched fast" },
    { icon: Globe, title: "Online or In-Person", sub: "Accra or anywhere" },
    { icon: MapPin, title: "East Legon Classes", sub: "Live with Big Coffie" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-[#0f1a2e]/80 border border-[#00ff88]/40 rounded-2xl p-6 shadow-xl backdrop-blur-md"
    >
      <h3 className="text-2xl font-bold text-[#00ff88] mb-3">Find Your Path</h3>
      <p className="text-[#ffffffcc] mb-6">
        Answer 5 quick questions — we’ll match you with the **perfect CoffieFX program**.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {stats.map((s) => (
          <button
            key={s.title}
            onClick={onStart}
            className="p-4 bg-[#121826]/60 rounded-xl border border-[#00ff88]/20 hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all text-left"
          >
            <s.icon className="w-5 h-5 text-[#00ff88] mb-2" />
            <div className="text-sm font-semibold text-white">{s.title}</div>
            <div className="text-xs text-[#ffffffb3]">{s.sub}</div>
          </button>
        ))}
      </div>

      <button
        onClick={onStart}
        className="w-full py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold rounded-xl hover:shadow-xl hover:shadow-[#00ff88]/50 transition"
      >
        Start Quiz <ArrowRight className="inline w-5 h-5 ml-1" />
      </button>
    </motion.div>
  );
};

// ------------------------------------------------------
// Quiz Panel
// ------------------------------------------------------
const QuizPanel: React.FC<any> = ({ stepIndex, steps, selectOption, goBack }) => {
  const progress = ((stepIndex + 1) / steps.length) * 100;
  const current = steps[stepIndex];

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className="bg-[#0f1a2e]/80 border border-[#00ff88]/50 rounded-2xl p-6 shadow-2xl"
    >
      <div className="mb-6">
        <div className="flex justify-between text-sm text-[#00ff88] mb-2">
          <span>Question {stepIndex + 1} / {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-[#121826] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00ff88] to-[#FFD700]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <h4 className="text-xl font-bold text-white mb-5">{current.question}</h4>
      <div className="space-y-3">
        {current.options.map((opt: string) => (
          <motion.button
            key={opt}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => selectOption(current.key, opt)}
            className="w-full text-left p-4 rounded-xl bg-[#121826]/60 border border-[#00ff88]/30 hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all"
          >
            {opt}
          </motion.button>
        ))}
      </div>

      <button
        onClick={goBack}
        className="mt-6 text-sm text-[#00ff88] underline hover:text-[#FFD700]"
      >
        Back
      </button>
    </motion.div>
  );
};

// ------------------------------------------------------
// Result Panel
// ------------------------------------------------------
const ResultPanel = ({ result, onRetake }: any) => {
  const { plan, description, usdToGhs } = result;
  const isGHS = plan.priceGhs !== undefined;
  const price = isGHS ? `₵${plan.priceGhs}` : `$${plan.priceUsd}`;
  const priceGHS = !isGHS ? `≈ ₵${(plan.priceUsd * usdToGhs).toFixed(0)} GHS` : "";

  const scrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-[#00ff8810] to-[#FFD70010] border border-[#00ff88] rounded-3xl p-8 shadow-2xl"
    >
      <h3 className="text-3xl font-bold text-[#00ff88] mb-3">Your Perfect Match</h3>
      <p className="text-[#ffffffcc] mb-8 leading-relaxed">{description}</p>

      <div className="bg-[#0f1a2e]/90 border border-[#00ff88]/50 rounded-2xl p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className={`text-2xl font-bold ${plan.premium ? "text-[#FFD700]" : "text-[#00ff88]"}`}>
              {plan.name}
            </h4>
            <p className="text-sm text-[#ffffffb3]">{plan.level}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-white">{price}</p>
            {priceGHS && <p className="text-sm text-[#00ff88]">{priceGHS}</p>}
          </div>
        </div>

        <ul className="space-y-2 text-[#ffffffcc] text-sm mb-6">
          {plan.benefits.slice(0, 4).map((b: string, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#00ff88] rounded-full" />
              {b}
            </li>
          ))}
        </ul>

        <a
          href={plan.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] ${
            plan.premium
              ? "bg-gradient-to-r from-[#FFD700] to-[#e6b800] text-black"
              : "bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black"
          }`}
        >
          {plan.ctaText}
        </a>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={scrollToPlans}
          className="px-5 py-2 border border-[#00ff88] text-[#00ff88] rounded-full hover:bg-[#00ff88]/10 transition"
        >
          See All Plans
        </button>
        <button
          onClick={onRetake}
          className="px-5 py-2 border border-[#ffffff30] text-[#ffffffb3] rounded-full hover:bg-[#ffffff10] transition"
        >
          Retake Quiz
        </button>
      </div>
    </motion.div>
  );
};

// ------------------------------------------------------
// Main Component
// ------------------------------------------------------
export default function CoffieFXSmartQuiz() {
  const { started, showResult, stepIndex, steps, result, startQuiz, selectOption, goBack } = useCoffieFXQuiz();

  return (
    <section
      id="smart-quiz"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#00ff88]/10 px-4 py-1 rounded-full border border-[#00ff88]/50 text-[#00ff88] mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Matching
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00cc66] mb-4">
            Which CoffieFX Program Fits You?
          </h2>
          <p className="text-xl text-[#ffffffcc] max-w-3xl mx-auto">
            Answer 5 questions — get your **personalized plan** with Big Coffie (in-person or online).
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              {!started && <IntroPanel onStart={startQuiz} />}
              {started && !showResult && (
                <QuizPanel stepIndex={stepIndex} steps={steps} selectOption={selectOption} goBack={goBack} />
              )}
              {showResult && result && <ResultPanel result={result} onRetake={startQuiz} />}
            </AnimatePresence>
          </div>

          <div className="md:col-span-5">
            <div className="sticky top-24 space-y-4">
              <div className="bg-[#0f1a2e]/80 border border-[#00ff88]/30 rounded-xl p-5">
                <h4 className="text-sm font-bold text-[#00ff88] mb-3">How We Match You</h4>
                <ul className="space-y-2 text-sm text-[#ffffffcc]">
                  <li><strong>Experience</strong> → Program level</li>
                  <li><strong>Location</strong> → In-Person or Online</li>
                  <li><strong>Capital</strong> → Flipping or Growth</li>
                </ul>
              </div>
              <div className="bg-[#121826]/60 border border-[#FFD700]/30 rounded-xl p-5 text-sm text-[#ffffffb3]">
                <p className="font-semibold text-[#FFD700] mb-2">Pro Tip</p>
                <p>Students in Accra get **live classes in East Legon**.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}