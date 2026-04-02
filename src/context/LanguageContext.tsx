"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    nav_about: "About",
    nav_services: "Services",
    nav_cases: "Clinical Hub",
    nav_cta: "Initiate Consult",
    
    // Hero
    hero_eyebrow: "Excellence & Innovation",
    hero_title: "Dental renaissance.",
    hero_sub: "Translating clinical precision into bespoke aesthetic results. Welcome to the elite oral ecosystem of Santo Domingo.",
    hero_cta: "Initialize Consult",
    hero_secondary: "The Suites",
    hero_hub_label: "Piantini Hub",
    hero_hub_text: "Surgical precision meets cinematic aesthetics in our flagship studio.",
    
    // Footer
    footer_spec: "A Speculative Build By Purple Cove Labs",
    footer_copy: "© 2026 Solis Dental Hub · Modern Framework Build",
  },
  es: {
    // Navbar
    nav_about: "Nosotros",
    nav_services: "Servicios",
    nav_cases: "Centro Clínico",
    nav_cta: "Agendar Cita",
    
    // Hero
    hero_eyebrow: "Excelencia e Innovación",
    hero_title: "Renacimiento Dental.",
    hero_sub: "Traduciendo precisión clínica en resultados estéticos personalizados. Bienvenidos al ecosistema oral élite de Santo Domingo.",
    hero_cta: "Iniciar Consulta",
    hero_secondary: "Las Suites",
    hero_hub_label: "Sede Piantini",
    hero_hub_text: "Donde la precisión quirúrgica se une a la estética cinematográfica.",
    
    // Footer
    footer_spec: "Un Diseño Especulativo de Purple Cove Labs",
    footer_copy: "© 2026 Solis Dental Hub · Construcción Moderna Experimental",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Optional: Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("pcl-lang") as Language;
    if (saved) setLanguage(saved);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("pcl-lang", lang);
  };

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
