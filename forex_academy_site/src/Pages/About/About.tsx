import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
// import { ThemeContext } from "../../context/ThemeContext";
import AboutHero from "../../components/About/AboutHero";
// import AboutJourney from "../../components/About/AboutJourney";
import AboutCTA from "../../components/About/AboutCTA";
import AboutMentor from "../../components/Home/AboutMentor/AboutMentor";
import MentorImpact from "../../components/About/MentorImpact";
import { ThemeContext } from "../../context/ThemeContext";
import MentorJourney from "../../components/About/MentorJourney";
import MissionVision from "../../components/About/MissionVision";
import TeamCommunity from "../../components/About/TeamCommunity";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQSection from "../../components/Home/FAQSection/FAQSection";

const About: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const bgClass =
    theme === "dark"
      ? "bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19]"
      : "bg-gradient-to-b from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]";
  const textClass = theme === "dark" ? "text-white/90" : "text-gray-900";

  return (

   <>
     <Helmet>
        <title>About Us | RoadMoney Forex Academy</title>
        <meta
          name="description"
          content="Learn more about RoadMoney Forex Academy — empowering traders through mentorship, education, and funded trading programs."
        />
        <meta property="og:title" content="About RoadMoney Forex Academy" />
        <meta
          property="og:description"
          content="Discover how RoadMoney helps traders grow through education and mentorship."
        />
        <meta property="og:image" content="/logo.png" />
      </Helmet>
    <main
      className={`min-h-screen font-montserrat transition-colors duration-500 ${bgClass} ${textClass}`}
    >
      <AboutHero />
      <AboutMentor />
      <MentorImpact />
      {/* <AboutMission /> */}
      <MissionVision />
      <MentorJourney />
      <TeamCommunity />
      <AboutCTA />
      <Testimonials />
      <FAQSection />
    </main>
   </>
  );
};

export default About;
