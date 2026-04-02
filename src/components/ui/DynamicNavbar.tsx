"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const PremiumSparkle = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="animate-pulse">
    <path d="M16 2L18.5 12.5L29 15L18.5 17.5L16 28L13.5 17.5L3 15L13.5 12.5L16 2Z" fill="#D4AF37" stroke="#D4AF37" strokeWidth="1" />
  </svg>
);

const PremiumMenu = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <path d="M4 12 L28 12 M4 20 L28 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-20 translate-z-[10px]" />
  </svg>
);

const PremiumX = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <path d="M8 8 L24 24 M24 8 L8 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

import { useLanguage } from "../../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export function DynamicNavbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-0 w-full z-[100] px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-obsidian p-5 rounded-[32px] border border-white/5 backdrop-blur-[40px] shadow-2xl">
        <Link href="/" className="flex items-center space-x-7 group px-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="shadow-[0_0_20px_rgba(212,175,55,0.2)] rounded-full translate-y-[1px]"
          >
            <PremiumSparkle />
          </motion.div>
          <span className="font-syne font-black text-xl lg:text-2xl tracking-tighter uppercase flex items-center space-x-3">
            <span className="text-white">Solis</span> 
            <span className="text-emerald italic lowercase opacity-80">studio</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">
           <Link href="/about" className="hover:text-gold transition-all relative group py-2">
            {t('nav_about')}
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />
           </Link>
           <Link href="/services" className="hover:text-gold transition-all relative group py-2">
            {t('nav_services')}
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />
           </Link>
           <Link href="/cases" className="hover:text-gold transition-all relative group py-2">
            {t('nav_cases')}
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />
           </Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <div className="hidden lg:block">
            <LanguageToggle />
          </div>
          <Link href="/booking" className="hidden sm:block bg-emerald/10 border border-emerald-light/20 px-8 lg:px-10 py-3 lg:py-4 rounded-2xl font-syne font-black text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-emerald-light shadow-[0_0_40px_rgba(46,139,87,0.1)] hover:bg-emerald/20 transition-all hover:scale-105 duration-700 whitespace-nowrap">
             {t('nav_cta')}
          </Link>
          <button 
            className="md:hidden text-white p-3 hover:scale-110 transition-transform bg-white/5 rounded-full border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <PremiumX /> : <PremiumMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: -40, scale: 0.9, rotateX: -20 }}
            className="md:hidden glass-obsidian mt-6 rounded-[48px] p-12 flex flex-col space-y-10 border border-white/5 shadow-3xl backdrop-blur-3xl overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />
            <div className="flex justify-between items-center mb-4">
              <LanguageToggle />
            </div>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-syne font-black tracking-tighter hover:text-emerald transition-colors italic">{t('nav_about')}</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-4xl font-syne font-black tracking-tighter hover:text-emerald transition-colors italic">{t('nav_services')}</Link>
            <Link href="/cases" onClick={() => setIsMenuOpen(false)} className="text-4xl font-syne font-black tracking-tighter hover:text-emerald transition-colors italic">{t('nav_cases')}</Link>
            <Link href="/booking" onClick={() => setIsMenuOpen(false)} className="bg-emerald-light/10 border border-emerald-light/20 p-8 rounded-[32px] text-center font-syne font-bold uppercase tracking-widest text-emerald-light text-xl shadow-2xl">{t('nav_cta')}</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
