// src/components/ResourceFilter.tsx
'use client';

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import { resources } from "../../Pages/Resources/Resources";

interface ResourceFilterProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

/**
 * 1. Build a unique, sorted list of categories from the data.
 *    Always start with "All".
 */
const useCategories = () => {
  return useMemo(() => {
    const set = new Set<string>(["All"]);
    resources.forEach((r) => set.add(r.category));
    return Array.from(set).sort((a, b) =>
      a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)
    );
  }, []);
};

const ResourceFilter: React.FC<ResourceFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = useCategories();
  const [open, setOpen] = React.useState(false);

  /* ---------- Desktop pills ---------- */
  const Pills = () => (
    <div className="hidden sm:flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            selectedCategory === cat
              ? "bg-[#00c896] text-black shadow-[0_0_20px_rgba(0,200,150,0.5)]"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );

  /* ---------- Mobile dropdown ---------- */
  const Dropdown = () => (
    <div className="sm:hidden relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <Filter size={18} className="text-[#00c896]" />
        <span className="text-sm font-medium">{selectedCategory}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute top-full left-0 right-0 mt-2 bg-[#0b0f19] border border-white/10 rounded-xl overflow-hidden shadow-xl z-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-[#00c896] text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-6 mb-12 px-4"
    >
      {/* Header */}
      <div className="flex items-center gap-2 text-white/60 text-sm sm:text-base">
        <Filter size={18} className="text-[#00c896]" />
        <span>Filter by Category</span>
      </div>

      {/* Buttons / Dropdown */}
      <Pills />
      <Dropdown />
    </motion.div>
  );
};

export default ResourceFilter;