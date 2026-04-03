"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="section-padding bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/abstract.png')] bg-cover opacity-[0.03] grayscale" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container-premium relative z-10 space-y-8 lg:space-y-12">
        <p className="text-[10px] text-emerald font-bold uppercase tracking-[0.3em] md:tracking-[1em] lg:tracking-[1.5em] opacity-60 leading-relaxed px-4 break-words">{t('footer_spec')}</p>
        <div className="flex justify-center items-center space-x-6 lg:space-x-12 h-16">
          <div className="w-12 lg:w-24 h-px bg-white/5" />
          <img src="/assets/cases/Purple_Cove_Labs_Transparent.png" alt="PCL" className="h-6 lg:h-8 opacity-20 grayscale brightness-200" />
          <div className="w-12 lg:w-24 h-px bg-white/5" />
        </div>
        <p className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.2em] md:tracking-[0.5em] lg:tracking-[1em] italic">{t('footer_copy')}</p>
      </div>
    </footer>
  );
}
