// src/pages/Mentorship/Mentorship.tsx
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";

import { ThemeContext } from "../../components/context/ThemeContext";
import MentorshipHero from "../../components/Plans/CoffieFXPlansHero";
import MentorshipCurriculum from "../../components/Plans/MentorshipCurriculum";
import MentorshipImpact from "../../components/Plans/CoffieFXImpact";
import MentorshipCTA from "../../components/Plans/MentorshipCTA";
import SignalPlans from "../../components/Plans/SignalPlans";
import MentorshipPlans from "../../components/Plans/CoffieFXPlans";
import SmartTradingQuiz from "../../components/Home/FreeValueHook/Quiz";
import FAQSection from "../../components/Home/FAQSection/CoffieFXFAQSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import { PlansHelmet } from "../../components/HelmetTags/HelmetTags";


const Mentorship: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const bgClass =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
      : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = theme === "dark" ? "text-white/90" : "text-gray-900";

  return (
  <>
     <PlansHelmet />

    <main className={`font-montserrat transition-colors duration-500 ${bgClass} ${textClass}`}>
      <MentorshipHero />
      <MentorshipCurriculum />
      <MentorshipImpact />
      <SmartTradingQuiz />
      <MentorshipPlans />
      <SignalPlans />
      {/* <ServicesPlans /> */}
      <MentorshipCTA />
        <Testimonials />
      <FAQSection />
      
    </main>
  </>
  );
};

export default Mentorship;
