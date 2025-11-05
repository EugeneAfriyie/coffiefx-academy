// src/pages/Mentorship/Mentorship.tsx
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";

import { ThemeContext } from "../../components/context/ThemeContext";
import MentorshipHero from "../../components/Plans/PlansHero";
import MentorshipCurriculum from "../../components/Plans/MentorshipCurriculum";
import MentorshipImpact from "../../components/Plans/CoffieFXImpact";
import MentorshipCTA from "../../components/Plans/MentorshipCTA";
import SignalPlans from "../../components/Plans/SignalPlans";
import MentorshipPlans from "../../components/Plans/CoffieFXPlans";
import SmartTradingQuiz from "../../components/Home/FreeValueHook/Quiz";
import FAQSection from "../../components/Home/FAQSection/FAQSection";
import Testimonials from "../../components/Testimonials/Testimonials";


const Mentorship: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const bgClass =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
      : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = theme === "dark" ? "text-white/90" : "text-gray-900";

  return (
  <>
     <Helmet>
  <title>Mentorship & Trading Plans | RoadMoney Forex Academy</title>
  <meta
    name="description"
    content="Explore our mentorship packages and trading plans — from beginner to advanced, both online and in-person at our Accra Academy."
  />
  <meta property="og:image" content="https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302080/84c2a67c-a5bf-4e1a-8ec2-75ac777d8a9e.png" />
</Helmet>

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
