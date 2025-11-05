// src/components/Home/SmartQuiz/SmartTradingQuiz.tsx
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

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
    options: ["Video & visuals (self-paced)", "Live sessions with mentors", "Hybrid (mix of both)"],
  },
];

// ------------------------------------------------------
// Hook: useSmartQuiz
// ------------------------------------------------------
function useSmartQuiz() {
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

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
    const { experience, schedule, location, capital, learning } = answers;
    let level = "Beginner";
    if (experience === "1–3 years") level = "Intermediate";
    else if (experience === "Over 3 years") level = "Advanced";

    let mode = "Online Mentorship";
    if (location?.includes("Accra")) {
      mode = learning?.includes("Video") ? "Hybrid (Recommended)" : "In-Person (East Legon)";
    } else if (learning?.includes("Live")) {
      mode = "Live Online Mentorship";
    }

    let style = "Swing Trading";
    if (schedule?.includes("full-time")) style = "Swing Trading / Longer holds";
    else if (schedule?.includes("flexible")) style = "Day Trading / Active";
    else style = "Long-Term Investing";

    let capitalNote = "";
    if (capital?.includes("Under")) capitalNote = "Start small, focus on risk management.";
    else if (capital?.includes("$200")) capitalNote = "Good starting capital to learn scaling.";
    else capitalNote = "You have capital to deploy into diversified strategies.";

    return {
      title: `${level} ${mode}`,
      description: `Suggested style: ${style}. ${capitalNote} We recommend the ${level} program delivered as ${mode}.`,
    };
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
  const statTiles = [
    { title: "Fast Placement", sub: "Find right program in 2 mins" },
    { title: "Personalized", sub: "Based on experience & capital" },
    { title: "East Legon / Online", sub: "We match you by location" },
  ];

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45 }}
      className="bg-[#121826]/60 border border-[#00ffcc33] rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-semibold text-[#00c896] mb-3">Quick Intro</h3>
      <p className="text-white/90 mb-4">
        This quick quiz helps us match you with the right <strong>CoffieFX program</strong>. Tap any stat below or press{" "}
        <strong>Start Quiz</strong> — it’s fast, private, and tailored.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {statTiles.map((t) => (
          <button
            key={t.title}
            onClick={onStart}
            className="text-left p-4 bg-[#0b1220]/60 hover:bg-[#0b1220]/80 transition rounded-lg border border-[#ffffff06] flex flex-col gap-1"
          >
            <div className="text-sm text-[#00c896] font-semibold">{t.title}</div>
            <div className="text-xs text-white/70">{t.sub}</div>
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="inline-flex items-center gap-2 bg-[#00c896] text-[#001F3F] px-5 py-3 rounded-full font-semibold shadow-md"
        >
          Start Quiz
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// ------------------------------------------------------
// Quiz Panel
// ------------------------------------------------------
interface QuizPanelProps {
  stepIndex: number;
  steps: Step[];
  selectOption: (key: string, val: string) => void;
  goBack: () => void;
}

const QuizPanel: React.FC<QuizPanelProps> = ({ stepIndex, steps, selectOption, goBack }) => {
  const progress = ((stepIndex + 1) / steps.length) * 100;
  const current = steps[stepIndex];

  return (
    <motion.div
      key={`question-${stepIndex}`}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.35 }}
      className="bg-[#001022]/60 border border-[#00c89633] rounded-2xl p-6 shadow-lg"
    >
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-white/70 mb-2">
          <div>
            Question {stepIndex + 1} of {steps.length}
          </div>
          <div>{Math.round(progress)}%</div>
        </div>
        <div className="w-full bg-white/6 rounded-full h-2 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[#00c896] to-[#FFD700]" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h4 className="text-lg font-semibold text-[#00c896] mb-4">{current.question}</h4>
      <div className="grid gap-3">
        {current.options.map((opt: string) => (
          <motion.button
            key={opt}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => selectOption(current.key, opt)}
            className="py-3 px-4 text-left rounded-xl bg-[#00c89610] hover:bg-[#00c89620] transition border border-[#ffffff04]"
          >
            <div className="font-medium text-white/90">{opt}</div>
          </motion.button>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button onClick={goBack} className="text-sm text-white/70 underline">
          Back
        </button>
        <div className="text-sm text-white/70">
          Need help?{" "}
          <a href="mailto:bigcoffieacademy@gmail.com" className="text-[#00c896] underline">
            Contact us
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ------------------------------------------------------
// Result Panel
// ------------------------------------------------------
const ResultPanel = ({
  result,
  onRetake,
}: {
  result: { title: string; description: string };
  onRetake: () => void;
}) => {
  const scrollToPlans = () => {
    const el = document.getElementById("plans");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45 }}
      className="bg-[#001022]/70 border border-[#00c89644] rounded-3xl p-6 shadow-[0_0_20px_#00c89630]"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#00c896] mb-2">{result.title}</h3>
        <p className="text-white/90 max-w-xl mx-auto">{result.description}</p>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="/plans"
          className="inline-flex items-center gap-2 bg-[#00c896] text-[#001F3F] px-5 py-3 rounded-full font-semibold shadow-md hover:shadow-[0_0_10px_#00c89680] transition"
        >
          View Your Plan
          <ArrowRight className="w-4 h-4" />
        </a>

        <button
          onClick={onRetake}
          className="inline-flex items-center gap-2 border border-[#ffffff10] text-white/90 px-4 py-3 rounded-full hover:bg-[#ffffff05] transition"
        >
          Retake Quiz
        </button>

        <button
          onClick={scrollToPlans}
          className="inline-flex items-center gap-2 border border-[#00c89666] text-[#00c896] px-4 py-3 rounded-full hover:bg-[#00c89610] transition"
        >
          See Plans
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

// ------------------------------------------------------
// Main Component
// ------------------------------------------------------
export default function SmartTradingQuiz() {
  const { started, showResult, stepIndex, steps, result, startQuiz, selectOption, goBack } = useSmartQuiz();

  return (
    <section
      id="smart-quiz"
      className="relative bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white py-16 px-4 sm:px-8 md:px-16"
    >
      <div className="pointer-events-none absolute -top-32 left-8 w-72 h-72 rounded-full blur-3xl bg-[#00c89622]" />
      <div className="pointer-events-none absolute -bottom-32 right-8 w-72 h-72 rounded-full blur-3xl bg-[#00c89622]" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#00c89612] px-3 py-1 rounded-full border border-[#00c89633] text-[#00c896] mb-4">
            <Sparkles className="w-4 h-4" />
            Smart Placement
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#00c896] mb-3">
            Which CoffieFX program fits you best?
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto">
            Answer a few quick questions — we’ll recommend the best mentorship package (in-person in East Legon or online) and the trading style that matches your lifestyle and capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
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
            <div className="sticky top-24">
              <div className="bg-[#0b1220]/50 border border-[#ffffff06] rounded-xl p-4 shadow-sm">
                <h4 className="text-sm text-[#00c896] font-semibold mb-2">What we look at</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li><strong>Experience:</strong> shows trading familiarity.</li>
                  <li><strong>Schedule:</strong> helps match strategy style.</li>
                  <li><strong>Location & Capital:</strong> decide in-person vs online.</li>
                </ul>
                <div className="mt-4">
                  <details className="text-sm text-white/90">
                    <summary className="cursor-pointer text-[#00c896]">Why this matters</summary>
                    <div className="mt-2 text-white/70">
                      We ask about your background and capital to match you with realistic strategies and mentorship formats.
                    </div>
                  </details>
                </div>
              </div>

              <div className="mt-4 bg-[#121826]/40 border border-[#ffffff06] rounded-xl p-4 text-sm text-white/90">
                <div className="font-semibold mb-2">Quick tips</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Be honest — better answers mean better matches.</li>
                  <li>If you’re in Accra, in-person classes are available.</li>
                  <li>Smaller capital = focus on risk management and position sizing.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}