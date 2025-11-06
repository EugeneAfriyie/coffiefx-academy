// components/Resources/ResourceGrid.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ResourceModal from "./ResourceModal";
import { Calendar, User } from "lucide-react";

interface Resource {
  id: number;
  title: string;
  category: string;
  description: string;
  fullText?: string;
  link?: string;
  image: string;
  video?: string;
  author?: string;
  date?: string;
}

interface ResourceGridProps {
  resources: Resource[];
  selectedCategory: string;
  searchQuery: string;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ resources, selectedCategory, searchQuery }) => {
  const [active, setActive] = useState<Resource | null>(null);

  const filteredResources = resources
    .filter((res) => selectedCategory === "All" || res.category === selectedCategory)
    .filter((res) => 
      res.title.toLowerCase().includes(searchQuery) ||
      res.description.toLowerCase().includes(searchQuery)
    );

  const handleCardClick = (resource: Resource) => {
    setActive(resource);
  };

  return (
    <>
      <motion.section
        id="resources"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 sm:px-10 md:px-16 py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(resource)}
              className="cursor-pointer bg-[#0f1a2e]/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all duration-500 group border border-[#00ff88]/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute left-4 top-4 bg-[#00ff88]/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-[#00ff88] font-bold border border-[#00ff88]/30">
                  {resource.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#FFD700] mb-2">
                  {resource.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-xs text-[#ffffff99]">
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-[#FFD700]" />
                    <span>{resource.author ?? "Big Coffie"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#00ff88]" />
                    <span>{resource.date ? new Date(resource.date).toLocaleDateString("en-GB") : ""}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {active && (
        <ResourceModal
          resource={active}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
};

export default ResourceGrid;