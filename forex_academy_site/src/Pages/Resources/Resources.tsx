// pages/ResourcesPage.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FeaturedResource from "../../components/Resources/FeaturedResource";
import ResourceFilter from "../../components/Resources/ResourceFilter";
import ResourceGrid from "../../components/Resources/ResourceGrid";
import FAQSection from "../../components/Home/FAQSection/CoffieFXFAQSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import { ResourcesHelmet } from "../../components/HelmetTags/HelmetTags";
import { Search } from "lucide-react";
import { resources } from "../../assets/data/data";



const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [rawQuery, setRawQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // 300ms debounce for search
  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(rawQuery.toLowerCase()), 300);
    return () => clearTimeout(timer);
  }, [rawQuery]);

  return (
    <>
      <ResourcesHelmet />
      <main className="min-h-screen bg-gradient-to-b from-[#0a0e17] via-[#0f1a2e] to-[#0a0e17] text-white font-montserrat">
        <section className="relative py-28 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto px-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#FFD700] mb-6">
              CoffieFX Learning Hub
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Master CoffieFX strategy, and prop funding with guides, live signals, and in-person mentorship at East Legon Academy.
            </p>
          </motion.div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.08),transparent_70%)] -z-10" />
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <FeaturedResource
            resource={{
              title: "CoffieFX Academy East Legon — NOW OPEN",
              description: "Walk-in mentorship, live signals, prop lab, and 1-on-1 with Big Coffie.",
              image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1762302727/SnapInsta.to_490724547_18058763129161244_3424482830605663776_n_a8rqoc.jpg",
              link: "/academy",
            }}
          />

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <ResourceFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Search resources..."
                value={rawQuery}
                onChange={(e) => setRawQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[#00ff88] transition"
              />
            </div>
          </div>

          <ResourceGrid
            resources={resources}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />

          <FeaturedResource
            resource={{
              title: "CoffieFX $200K Funded Giveaway + $1000 Bonus",
              description: "Trade with Exness → Win a $200K account + $1,000 cash. 10 winners monthly.",
              image: "https://res.cloudinary.com/djeorsh5d/image/upload/v1762081423/25f42861-0895-42fa-b3e9-87ebc41265fe.png",
              link: "https://one.exnesslink.com/a/coffiefx",
            }}
          />

          <Testimonials />
          <FAQSection />
        </div>
      </main>
    </>
  );
};

export default ResourcesPage;