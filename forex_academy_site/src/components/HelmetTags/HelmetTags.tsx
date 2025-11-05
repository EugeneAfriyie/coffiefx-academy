// src/components/SEO/HelmetTags.tsx
"use client";

import { Helmet } from "react-helmet-async";

const siteUrl = "https://coffiefx-academy.web.app";
const ogImage = "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302755/SnapInsta.to_486315081_18056517722161244_2095643982265963332_n_yhpgbg.jpg";
const logo = "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762305109/0103d37d-afc1-4517-bece-5901e53d5931.png";

export const HomeHelmet = () => (
  <Helmet>
    <title>CoffieFX Academy | Master Forex with Big Coffie</title>
    <meta
      name="description"
      content="Join Ghana’s #1 Forex Academy. Live classes in East Legon + online. Learn 85% win-rate strategy, get free signals, and trade with confidence."
    />
    <meta name="keywords" content="forex ghana, big coffie, east legon forex, forex mentorship, free signals, coffiefx" />
    <meta property="og:title" content="CoffieFX Academy | Master Forex Trading" />
    <meta property="og:description" content="1,800+ students. Live in East Legon. Free signals daily. Start winning today." />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:type" content="website" />
    <link rel="canonical" href={siteUrl} />
  </Helmet>
);

export const AboutHelmet = () => (
  <Helmet>
    <title>About CoffieFX Academy | Big Coffie’s Story</title>
    <meta
      name="description"
      content="From unemployment to 1,800+ students. Discover how Big Coffie built CoffieFX Academy in East Legon with faith, discipline, and proven strategy."
    />
    <meta name="keywords" content="big coffie story, coffiefx journey, east legon forex, forex mentor ghana" />
    <meta property="og:title" content="About CoffieFX Academy" />
    <meta property="og:description" content="Faith. Discipline. Results. This is the CoffieFX way." />
    <meta property="og:url" content={`${siteUrl}/about`} />
    <meta property="og:image" content={logo} />
    <meta property="og:type" content="website" />
    <link rel="canonical" href={`${siteUrl}/about`} />
  </Helmet>
);

export const PlansHelmet = () => (
  <Helmet>
    <title>Mentorship Plans | CoffieFX Academy ($50 - $150)</title>
    <meta
      name="description"
      content="Choose your plan: $50 Online Mentorship or $150 Live in East Legon. Includes VIP signals, live classes, and 1:1 support."
    />
    <meta name="keywords" content="coffiefx plans, $50 mentorship, $150 forex class, east legon trading, vip signals" />
    <meta property="og:title" content="CoffieFX Mentorship Plans" />
    <meta property="og:description" content="$50 Online | $150 In-Person | Free Signals | Live Support" />
    <meta property="og:url" content={`${siteUrl}/plans`} />
    <meta property="og:image" content={logo} />
    <meta property="og:type" content="website" />
    <link rel="canonical" href={`${siteUrl}/plans`} />
  </Helmet>
);

export const ResourcesHelmet = () => (
  <Helmet>
    <title>Free Forex Resources | CoffieFX Academy</title>
    <meta
      name="description"
      content="Download free PDFs, watch tutorials, and get daily market analysis. All resources from Big Coffie to help you trade smarter."
    />
    <meta name="keywords" content="free forex pdf, big coffie resources, forex tutorials, market analysis ghana" />
    <meta property="og:title" content="Free Forex Resources by CoffieFX" />
    <meta property="og:description" content="PDFs • Videos • Signals • All Free" />
    <meta property="og:url" content={`${siteUrl}/resources`} />
    <meta property="og:image" content={logo} />
    <meta property="og:type" content="website" />
    <link rel="canonical" href={`${siteUrl}/resources`} />
  </Helmet>
);

export const ContactHelmet = () => (
  <Helmet>
    <title>Contact CoffieFX Academy | East Legon, Accra</title>
    <meta
      name="description"
      content="Reach Big Coffie: +233 55 123 4567 | coffiefxacademy@gmail.com | East Legon Okponglo. Join live classes or get support."
    />
    <meta name="keywords" content="coffiefx contact, big coffie phone, east legon forex, forex academy accra" />
    <meta property="og:title" content="Contact CoffieFX Academy" />
    <meta property="og:description" content="Call • Email • Visit East Legon" />
    <meta property="og:url" content={`${siteUrl}/contact`} />
    <meta property="og:image" content={logo} />
    <meta property="og:type" content="website" />
    <link rel="canonical" href={`${siteUrl}/contact`} />
  </Helmet>
);