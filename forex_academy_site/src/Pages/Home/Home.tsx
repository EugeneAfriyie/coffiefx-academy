import React from 'react';
import Hero from '../../components/Home/hero/Hero';
import AboutMentor from '../../components/Home/AboutMentor/CoffieFXAboutMentor';
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
// import FAQSection from '../../components/Home/FAQSection/FAQSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import JoinCommunity3D from '../../components/Home/JoinCommunity/JoinCommunity3D';
import { HomeHelmet } from '../../components/HelmetTags/HelmetTags';
import CoffieFXFAQSection from '../../components/Home/FAQSection/CoffieFXFAQSection';

const Home: React.FC = () => {
  return (
      

    <>
    <HomeHelmet />
    
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
       <CoffieFXFAQSection />
       <Testimonials />


    </>                                  
  );
};

export default Home;