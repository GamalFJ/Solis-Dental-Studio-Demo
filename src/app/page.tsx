"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Hero3D from "@/components/Hero3D";
import ClinicalSlider from "@/components/ClinicalSlider";
import ThreePrecisionGrid from "@/components/three/ThreePrecisionGrid";

const PremiumIcon = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="animate-pulse">
    <path d="M16 2L18.5 12.5L29 15L18.5 17.5L16 28L13.5 17.5L3 15L13.5 12.5L16 2Z" fill="currentColor" stroke={color} strokeWidth="1" />
    <circle cx="16" cy="15" r="4" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" />
  </svg>
);

import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-obsidian text-cloud">

      {/* Cinematic Hero */}
      <section className="min-h-[90vh] relative flex items-center justify-center p-6 lg:p-12 bg-obsidian py-16 lg:py-24 overflow-hidden">

        {/* Abstract 3D Background (React Three Fiber) */}
        <Hero3D />

        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-emerald/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="container-premium grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
            <span className="text-emerald font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase text-[10px] lg:text-xs drop-shadow-[0_0_10px_rgba(46,139,87,0.5)]">{t('hero_eyebrow')}</span>
            <h1 className="font-syne text-hero font-bold mt-8 tracking-tighter">
              Dental <br className="hidden lg:block" /><span className="text-luxury text-gold italic">{t('hero_title')}</span>
            </h1>
            <p className="mt-12 text-lg lg:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
               {t('hero_sub')}
            </p>
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <Link href="/booking" className="w-full sm:w-auto bg-emerald px-12 py-6 rounded-2xl font-bold text-xl hover:bg-emerald-light transition-all shadow-[0_20px_60px_rgba(46,139,87,0.4)] text-center group flex items-center justify-center space-x-4 border border-white/10 hover:border-white/30">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>{t('hero_cta')}</span>
              </Link>
              <Link href="/services" className="flex items-center space-x-6 group font-bold tracking-[0.3em] text-[10px] uppercase text-gray-500 hover:text-gold transition-colors duration-700">
                <span>{t('hero_secondary')}</span>
                <div className="w-16 h-px bg-gold/20 group-hover:w-32 group-hover:bg-gold transition-all duration-1000 ease-[0.16,1,0.3,1]"></div>
              </Link>
            </div>
            </motion.div>
          </div>

          {/* Dynamic Image Frame */}
          <div className="relative h-[50vh] lg:h-[85vh] rounded-[48px] lg:rounded-[80px] overflow-hidden border border-white/5 shadow-[0_120px_100px_rgba(0,0,0,0.8)] group perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
            <Image
              src="/assets/hero.png"
              alt="Clinical Luxury"
              fill
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8s] ease-[0.16,1,0.3,1] grayscale-[0.3] group-hover:grayscale-0 contrast-[1.1]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-16 lg:left-12 glass-obsidian p-8 lg:p-16 rounded-[32px] lg:rounded-[48px] max-w-sm border border-emerald/10 shadow-2xl backdrop-blur-3xl">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-8 lg:w-12 h-0.5 bg-emerald-light/40" />
                <h3 className="font-syne text-xl lg:text-3xl font-bold text-emerald-light drop-shadow-[0_0_15px_rgba(209,250,229,0.3)]">{t('hero_hub_label')}</h3>
              </div>
              <p className="text-gray-400 mt-2 lg:mt-4 leading-relaxed font-medium italic text-sm lg:text-lg text-balance bg-clip-text">{t('hero_hub_text')}</p>
              </motion.div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialty Reveal & Comparison */}
      <section id="results" className="section-padding bg-obsidian-light relative overflow-hidden">

        {/* Precision Grid Visualizer */}
        <ThreePrecisionGrid />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-obsidian via-transparent to-obsidian pointer-events-none" />
        <div className="container-premium flex flex-col lg:grid lg:grid-cols-2 gap-24 lg:gap-32 items-center relative z-10">

          {/* Clinical Before/After Slider */}
          <div className="order-2 lg:order-1 relative w-full lg:max-w-xl mx-auto">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
            <div className="absolute -inset-10 bg-emerald/5 blur-[150px] rounded-full opacity-50 pointer-events-none" />
            <ClinicalSlider />
            </motion.div>
          </div>

          <div className="space-y-16 lg:space-y-24 order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-gold font-bold tracking-[0.5em] uppercase text-[10px] drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">Biological Foundation</span>
              <h2 className="font-syne text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter mt-8">
                Digital DNA. <br /><span className="text-luxury text-emerald lowercase italic">scientific art.</span>
              </h2>
            </motion.div>

            <div className="space-y-12 lg:space-y-20">
              {[
                { id: "01", title: "Robotic Implants", detail: "Minimally invasive perfection with zero error tolerance.", icon: <PremiumIcon color="#D4AF37" /> },
                { id: "02", title: "Smile Sculpting", detail: "Using high-cadence AI to map facial symmetry.", icon: <PremiumIcon color="#2E8B57" /> }
              ].map((service, idx) => (
                <div className="group relative cursor-pointer">
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
                    <span className="text-6xl lg:text-8xl font-syne font-black text-white/5 group-hover:text-gold/20 transition-all duration-1000 leading-none">{service.id}</span>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                        <div className="p-4 lg:p-6 rounded-[24px] lg:rounded-[32px] bg-obsidian/50 border border-white/5 group-hover:border-gold/40 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-700">
                          {service.icon}
                        </div>
                        <h3 className="text-3xl lg:text-[2.5rem] font-bold tracking-tight group-hover:text-gold transition-colors duration-500 leading-tight">{service.title}</h3>
                      </div>
                      <p className="mt-4 lg:mt-8 text-base lg:text-xl text-gray-500 max-w-lg group-hover:text-cloud transition-all duration-1000 leading-relaxed font-medium">{service.detail}</p>
                    </div>
                  </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experimental Trust Signals */}
      <section className="py-24 md:py-48 bg-obsidian border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald/5 opacity-20 pointer-events-none" />
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 lg:gap-32 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-[2s] ease-out px-6">
          {['BIOTECH', 'PRECISION', 'AESTHETIC', 'ROBOTIC'].map(word => (
            <span key={word} className="font-syne text-2xl md:text-4xl lg:text-5xl font-black tracking-[0.5em] lg:tracking-[0.8em] italic text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white to-white/40">{word}</span>
          ))}
        </div>
      </section>

    </div>
  );
}
