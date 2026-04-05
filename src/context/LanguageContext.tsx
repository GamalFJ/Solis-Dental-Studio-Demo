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
    
    // Stats/Grid
    stats_eyebrow: "Biological Foundation",
    stats_dna_title: "Digital DNA.",
    stats_dna_sub: "scientific art.",
    stats_implant_title: "Robotic Implants",
    stats_implant_detail: "Minimally invasive perfection with zero error tolerance.",
    stats_sculpt_title: "Smile Sculpting",
    stats_sculpt_detail: "Using high-cadence AI to map facial symmetry.",
    
    // Trust
    trust_biotech: "BIOTECH",
    trust_precision: "PRECISION",
    trust_aesthetic: "AESTHETIC",
    trust_robotic: "ROBOTIC",

    // About
    about_eyebrow: "The Obsidian Sanctuary",
    about_title: "Our",
    about_title_span: "legacy.",
    about_intro: "Engineering clinical excellence into a",
    about_intro_span: "bespoke sensory experience.",
    about_desc: "Founded in Piantini, Solis Dental Studio represents the intersection of biotechnology and high-art. We serve the most discerning residents of Santo Domingo and international patients seeking surgical perfection.",
    about_horizon: "The Technical Horizon",
    about_future: "Projecting",
    about_future_span: "futures.",
    about_cta: "Reserve My Timeline",
    about_enter: "Enter the",
    about_enter_span: "solis legacy.",
    
    // Services
    services_eyebrow: "The Technical Horizon",
    services_title: "Clinical",
    services_title_span: "intelligence.",
    services_sub: "Our services are powered by the world's most advanced dental technologies—eliminating uncertainty through technical predictability.",
    services_ecosystem: "Digital Oral Ecosystem",
    services_ecosystem_detail: "Complete mapping using high-cadence 3D lidar scanners for a micron-perfect digital twin of your oral structure.",
    services_invisalign: "AI Invisalign",
    services_invisalign_detail: "Predictive aligner sequences tracked via real-time biological adaptation models.",
    services_robotic: "Robotic Implantology",
    services_robotic_detail: "Automated surgical guidance for sub-millimetric depth control during implant placement.",
    services_sculpting: "Bio-Aesthetic Sculpting",
    services_sculpting_detail: "Designing symmetrical perfection by analyzing facial bone density and muscle dynamics.",
    services_regenerative: "Regenerative Protocols",
    services_regenerative_detail: "Biological stimulus treatments designed to accelerate recovery through precise tissue mapping.",
    
    // Services Pricing
    services_investment: "Clinical",
    services_investment_span: "investment.",
    services_transparency: "Transparency & Value",
    services_dynamic: "Dynamic Rate Mapping Active",
    services_protocol: "Clinical Protocol",
    services_inv_usd: "Investment (USD)",
    services_inv_dop: "Inversión (RD$)",
    pricing_assessment: "Initial 3D Assessment",
    pricing_ceramic: "Ceramic Design Protocol",
    pricing_invisalign: "Invisalign Elite Flow",
    pricing_robotic: "Robotic Implant (Unit)",
    pricing_from: "from",

    // Services CTA
    services_cta_title: "Begin Your",
    services_cta_title_span: "biological evolution.",
    services_cta_sub: "Reserved for those who seek the vertical peak of aesthetic science in Santo Domingo.",
    services_cta_btn: "Secure Appointment",
    services_concierge: "Contact Concierge",
    
    // Cases
    cases_eyebrow: "The Clinical Archive",
    cases_title: "Master",
    cases_title_span: "outcomes.",
    cases_sub: "Each case is a testament to the intersection of digital biology and aesthetic desire, crafted for the elite aesthetic.",
    cases_baseline: "Scientific Baseline",
    cases_outcome: "Solis Outcome",
    cases_insight_label: "Clinical Insight",
    cases_analysis: "Full Protocol Analysis",
    cases_archive: "Archive No.",
    case1_title: "Full Oral Design",
    case1_tag: "Porcelain Veneers",
    case1_insight: "Achieving symmetrical perfection through 3D mapping and biological patient data analysis.",
    case2_title: "Digital Orthodontics",
    case2_tag: "Invisalign Elite",
    case2_insight: "Accelerated alignment featuring AI-monitored weekly progression scans.",
    case3_title: "Bio-Implantology",
    case3_tag: "Robotic Guided",
    case3_insight: "Zero-error implant placement using micron-precise robotic surgical assistance.",

    // Booking
    booking_eyebrow: "The Digital Portal",
    booking_title: "Secure",
    booking_title_span: "the slot.",
    booking_sub: "Select high-speed availability for your virtual assessment or in-person 3D oral mapping.",
    booking_step1_title: "Select Availability",
    booking_step1_desc: "Choose a cinematic time-slot.",
    booking_step2_title: "Assessment Logic",
    booking_step2_desc: "Prepare your medical data.",
    booking_encryption: "Encryption Active",
    booking_encryption_sub: "Your clinical data and slot selection are secured by the Solis Advanced Protocol.",

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

    // About
    about_eyebrow: "El Santuario Obsidian",
    about_title: "Nuestro",
    about_title_span: "legado.",
    about_intro: "Ingeniería de excelencia clínica en una",
    about_intro_span: "experiencia sensorial a medida.",
    about_desc: "Fundado en Piantini, Solis Dental Studio representa la intersección entre la biotecnología y el alto arte. Servimos a los residentes más exigentes de Santo Domingo y pacientes internacionales que buscan la perfección quirúrgica.",
    about_horizon: "El Horizonte Técnico",
    about_future: "Proyectando",
    about_future_span: "futuros.",
    about_cta: "Reservar mi Cronograma",
    about_enter: "Entra al",
    about_enter_span: "legado Solis.",

    // Services
    services_eyebrow: "El Horizonte Técnico",
    services_title: "Inteligencia",
    services_title_span: "clínica.",
    services_sub: "Nuestros servicios están impulsados por las tecnologías dentales más avanzadas del mundo, eliminando la incertidumbre mediante la predictibilidad técnica.",
    services_ecosystem: "Ecosistema Oral Digital",
    services_ecosystem_detail: "Mapeo completo mediante escáneres lidar 3D de alta cadencia para un gemelo digital perfecto de su estructura oral.",
    services_invisalign: "Invisalign con IA",
    services_invisalign_detail: "Secuencias de alineadores predictivos seguidos mediante modelos de adaptación biológica en tiempo real.",
    services_robotic: "Implantología Robótica",
    services_robotic_detail: "Guía quirúrgica automatizada para un control de profundidad submilimétrico durante la colocación de implantes.",
    services_sculpting: "Esculpido Bio-Estético",
    services_sculpting_detail: "Diseño de la perfección simétrica analizando la densidad ósea facial y la dinámica muscular.",
    services_regenerative: "Protocolos Regenerativos",
    services_regenerative_detail: "Tratamientos de estímulo biológico diseñados para acelerar la recuperación mediante un mapeo tisular preciso.",
    
    // Services Pricing
    services_investment: "Inversión",
    services_investment_span: "clínica.",
    services_transparency: "Transparencia y Valor",
    services_dynamic: "Mapeo Dinámico de Tarifas Activo",
    services_protocol: "Protocolo Clínico",
    services_inv_usd: "Inversión (USD)",
    services_inv_dop: "Inversión (RD$)",
    pricing_assessment: "Evaluación 3D Inicial",
    pricing_ceramic: "Protocolo de Diseño Cerámico",
    pricing_invisalign: "Invisalign Elite Flow",
    pricing_robotic: "Implante Robótico (Unidad)",
    pricing_from: "desde",

    // Services CTA
    services_cta_title: "Comienza tu",
    services_cta_title_span: "evolución biológica.",
    services_cta_sub: "Reservado para quienes buscan el pico vertical de la ciencia estética en Santo Domingo.",
    services_cta_btn: "Asegurar Cita",
    services_concierge: "Contactar Concierge",

    // Cases
    cases_eyebrow: "El Archivo Clínico",
    cases_title: "Resultados",
    cases_title_span: "maestros.",
    cases_sub: "Cada caso es un testimonio de la intersección entre la biología digital y el deseo estético, diseñado para la élite estética.",
    cases_baseline: "Base Científica",
    cases_outcome: "Resultado Solis",
    cases_insight_label: "Perspectiva Clínica",
    cases_analysis: "Análisis Completo del Protocolo",
    cases_archive: "Archivo No.",
    case1_title: "Diseño Oral Completo",
    case1_tag: "Carillas de Porcelana",
    case1_insight: "Logrando la perfección simétrica mediante mapeo 3D y análisis de datos biológicos del paciente.",
    case2_title: "Ortodoncia Digital",
    case2_tag: "Invisalign Élite",
    case2_insight: "Alineación acelerada con escaneos de progresión semanales monitoreados por IA.",
    case3_title: "Bio-Implantología",
    case3_tag: "Guiado Robótico",
    case3_insight: "Colocación de implantes con error cero mediante asistencia quirúrgica robótica de precisión micrométrica.",

    // Booking
    booking_eyebrow: "El Portal Digital",
    booking_title: "Asegurar",
    booking_title_span: "el espacio.",
    booking_sub: "Seleccione disponibilidad de alta velocidad para su evaluación virtual o mapeo oral 3D en persona.",
    booking_step1_title: "Seleccionar Disponibilidad",
    booking_step1_desc: "Elija un horario cinematográfico.",
    booking_step2_title: "Lógica de Evaluación",
    booking_step2_desc: "Prepare sus datos médicos.",
    booking_encryption: "Encriptación Activa",
    booking_encryption_sub: "Sus datos clínicos y selección de espacio están protegidos por el Protocolo Avanzado Solis.",

    // Stats
    stat_precision: "Tasa de Precisión",
    stat_years: "Años en Piantini",
    stat_tech: "Stack Tech Élite",
    stat_presence: "Presencia Global",

    // Stats/Grid
    stats_eyebrow: "Base Biológica",
    stats_dna_title: "ADN Digital.",
    stats_dna_sub: "arte científico.",
    stats_implant_title: "Implantes Robóticos",
    stats_implant_detail: "Perfección mínimamente invasiva con tolerancia cero al error.",
    stats_sculpt_title: "Esculpido de Sonrisa",
    stats_sculpt_detail: "Uso de IA de alta cadencia para mapear la simetría facial.",
    
    // Trust
    trust_biotech: "BIOTECNOLOGÍA",
    trust_precision: "PRECISIÓN",
    trust_aesthetic: "ESTÉTICA",
    trust_robotic: "ROBÓTICA",
    
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
