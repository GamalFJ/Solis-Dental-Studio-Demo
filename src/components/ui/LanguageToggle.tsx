"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-emerald/10 border border-emerald/20 p-1 rounded-full backdrop-blur-xl">
      <button
        onClick={() => setLanguage("en")}
        className="relative px-3 py-1 text-[8px] font-black uppercase tracking-widest transition-colors duration-500"
      >
        <span className={language === "en" ? "text-white" : "text-gray-500"}>EN</span>
        {language === "en" && (
          <motion.div
            layoutId="lang-pill"
            className="absolute inset-0 bg-emerald/60 rounded-full -z-10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </button>
      <button
        onClick={() => setLanguage("es")}
        className="relative px-3 py-1 text-[8px] font-black uppercase tracking-widest transition-colors duration-500"
      >
        <span className={language === "es" ? "text-white" : "text-gray-500"}>ES</span>
        {language === "es" && (
          <motion.div
            layoutId="lang-pill"
            className="absolute inset-0 bg-emerald/60 rounded-full -z-10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </button>
    </div>
  );
}
