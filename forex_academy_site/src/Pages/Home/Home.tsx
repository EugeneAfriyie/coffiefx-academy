import React from 'react';
import { Helmet } from "react-helmet-async";
import Hero from '../../components/Home/hero/Hero';
import AboutMentor from '../../components/Home/AboutMentor/AboutMentor';
import WhatIsForex from '../../components/Home/WhatIsForex/ForexCard';
import Quotes from '../../components/Home/QuoteCard/QuoteCard';
import WhyForex from '../../components/Home/WhyForex/WhyForex';
import WhyMentorshipMatters from '../../components/Home/WhyMentorshipMatters/WhyMentorshipMatters';
import WhatYouGetSplit from '../../components/Home/WhatYouGet/WhatYouGetSplit';
import Services from '../../components/Home/Services/Services';
import TradingAcademyAd from '../../components/Home/TradingAcademyAd/TradingAcademyAd';
import AcademyPopupAd from '../../components/Home/TradingAcademyAd/AcademyPopupAd';
import ContactInvite from '../../components/Home/ContactInvite/ContactInvite';
import SmartTradingQuiz from '../../components/Home/FreeValueHook/CoffieFXSmartQuiz';
import FAQSection from '../../components/Home/FAQSection/FAQSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import JoinCommunity3D from '../../components/Home/JoinCommunity/JoinCommunity3D';

const Home: React.FC = () => {
  return (
      

    <>
      <Helmet>
        <title>Forex Academy | Master Forex Trading</title>
        <meta
          name="description"
          content="Welcome to Forex Academy. Learn how to trade Forex confidently with expert mentorship, live sessions, and real-world strategies."
        />
        <meta property="og:title" content="Forex Academy | Master Forex Trading" />
        <meta property="og:description" content="Join our Forex Academy and elevate your trading skills today." />
        <meta property="og:url" content="https://coffiefx-academy.web.app" />
      </Helmet>
    
      {/* const globeImage = theme === 'dark' ? '/assets/globe/dark.png' : '/assets/globe/light.png'; */}

      <Hero />
      <Services />
      <AboutMentor />
      <WhatIsForex />
      <Quotes />
       <WhyForex />
       <WhyMentorshipMatters />

       <WhatYouGetSplit />
       <JoinCommunity3D />
       <TradingAcademyAd />
       <AcademyPopupAd />
       <ContactInvite /> 
        <SmartTradingQuiz />
       <FAQSection />
       <Testimonials />


    </>                                  
  );
};

export default Home;