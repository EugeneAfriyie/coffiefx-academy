"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
// import { inPersonPackages } from "../../Plans/TestMentordhip";
import { onlinePackages, flippingPackage, inPersonPackages } from "../../Plans/CoffieFXPlans";

interface Question {
  id: number;
  question: string;
  options: string[];
  key: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your trading experience?",
    options: ["Beginner", "1–3 years", "Over 3 years"],
    key: "experience",
  },
  {
    id: 2,
    question: "What’s your preferred learning style?",
    options: ["Live group sessions", "1-on-1 coaching", "Self-paced flipping"],
    key: "learning",
  },
  {
    id: 3,
    question: "Where are you currently located?",
    options: ["Accra (can attend in-person)", "Outside Accra", "Outside Ghana"],
    key: "location",
  },
  {
    id: 4,
    question: "How much time can you dedicate per week?",
    options: ["<5 hours", "5–10 hours", "10+ hours"],
    key: "schedule",
  },
  {
    id: 5,
    question: "What’s your trading capital range?",
    options: ["Under $500", "$500–$2000", "Over $2000"],
    key: "capital",
  },
];

export default function CoffieFXQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<any>(null);
  const [usdToGhs, setUsdToGhs] = useState<number>(16.5);

  // Fetch live USD → GHS rate
  useState(() => {
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

  const handleSelect = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    setTimeout(() => setStep(step + 1), 300);
  };

  const computeRecommendation = () => {
    const { experience, learning, location, capital } = answers;

    let plan: any = onlinePackages[1]; // default: Group Mentorship
    let description = "";

    // 1. Location → In-Person?
    if (location?.includes("Accra")) {
      if (experience === "Beginner") {
        plan = inPersonPackages[0]; // Beginners Class
        description = `You're in Accra and new to trading — perfect for our **Beginners Class** with Big Coffie in-person.`;
      } else {
        plan = inPersonPackages[1]; // Advanced Class
        description = `You're in Accra and experienced — join our **Advanced Class** with live market analysis.`;
      }
    } 
    // 2. Online
    else {
      if (learning?.includes("flipping") || capital?.includes("Under $500")) {
        plan = flippingPackage;
        description = `You want to flip small accounts fast — **Online Flipping Sessions** is your best path.`;
      } else if (learning?.includes("1-on-1")) {
        plan = onlinePackages[2];
        description = `You want personal coaching — **1-on-1 Mentorship** with Big Coffie is elite.`;
      } else {
        plan = onlinePackages[1];
        description = `You want structure and community — **Group Mentorship** is ideal for growth.`;
      }
    }

    setResult({ plan, description });
  };

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setResult(null);
  };

  const handleScrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full shadow-lg">
            <Zap className="w-8 h-8 text-black" />
          </div>
        </motion.div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00cc66]">
          Find Your Perfect CoffieFX Path
        </h2>
        <p className="text-xl text-[#ffffffcc] mb-12">
          Answer 5 quick questions — get your **personalized mentorship plan**.
        </p>

        <AnimatePresence mode="wait">
          {!result ? (
            step < questions.length ? (
              <QuizStep
                step={step}
                question={questions[step]}
                onSelect={handleSelect}
                total={questions.length}
              />
            ) : (
              <motion.div
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <button
                  onClick={computeRecommendation}
                  className="px-10 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc66] text-black font-bold rounded-xl hover:shadow-xl hover:shadow-[#00ff88]/50 transition"
                >
                  Show My Recommendation
                </button>
              </motion.div>
            )
          ) : (
            <ResultPanel
              result={result}
              usdToGhs={usdToGhs}
              onRetake={handleRestart}
              onScroll={handleScrollToPlans}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ------------------ Quiz Step ------------------ */
const QuizStep = ({ step, question, onSelect, total }: any) => (
  <motion.div
    key={step}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-[#0f1a2e]/80 border border-[#00ff88]/40 rounded-2xl p-8 backdrop-blur-md shadow-2xl"
  >
    <h3 className="text-2xl font-bold mb-8 text-[#00ff88]">{question.question}</h3>
    <div className="flex flex-col gap-4">
      {question.options.map((option: string) => (
        <motion.button
          key={option}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(question.key, option)}
          className="px-6 py-4 text-lg rounded-xl bg-[#121826]/70 border border-[#00ff88]/30 hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all"
        >
          {option}
        </motion.button>
      ))}
    </div>
    <p className="mt-8 text-[#00ff88] text-sm">Question {step + 1} of {total}</p>
  </motion.div>
);

/* ------------------ Result Panel ------------------ */
const ResultPanel = ({ result, usdToGhs, onRetake, onScroll }: any) => {
  const { plan, description } = result;
  const isGHS = plan.priceGhs !== undefined;
  const price = isGHS ? `₵${plan.priceGhs}` : `$${plan.priceUsd}`;
  const priceGHS = !isGHS ? `≈ ₵${(plan.priceUsd * usdToGhs).toFixed(0)} GHS` : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-[#00ff8810] to-[#00cc6610] border border-[#00ff88] rounded-3xl p-8 shadow-2xl"
    >
      <h3 className="text-3xl font-bold text-[#00ff88] mb-3">Your Perfect Match</h3>
      <p className="text-[#ffffffcc] mb-8 leading-relaxed">{description}</p>

      <div className="bg-[#0f1a2e]/80 border border-[#00ff88]/50 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className={`text-2xl font-bold ${plan.premium ? "text-[#FFD700]" : "text-[#00ff88]"}`}>
            {plan.name}
          </h4>
          <div className="text-right">
            <p className="text-2xl font-bold text-white">{price}</p>
            {priceGHS && <p className="text-sm text-[#00ff88]">{priceGHS}</p>}
          </div>
        </div>
        <p className="text-sm text-[#ffffffb3] mb-4">{plan.level}</p>

        <ul className="space-y-2 text-[#ffffffcc] text-sm mb-6">
          {plan.benefits.slice(0, 5).map((b: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-2"
            >
              <CheckCircle2 className={`w-4 h-4 mt-0.5 ${plan.premium ? "text-[#FFD700]" : "text-[#00ff88]"}`} />
              {b}
            </motion.li>
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

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onScroll}
          className="px-6 py-2 border border-[#00ff88] text-[#00ff88] rounded-full hover:bg-[#00ff88]/10 transition"
        >
          See All Plans
        </button>
        <button
          onClick={onRetake}
          className="px-6 py-2 border border-[#ffffff30] text-[#ffffffb3] rounded-full hover:bg-[#ffffff10] transition"
        >
          Retake Quiz
        </button>
      </div>
    </motion.div>
  );
};