"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, History, Award, Users, ShieldCheck, Microscope, Scan, Info, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState, useCallback } from "react";

export default function About() {
  const [activeStep, setActiveStep] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragStartX, setDragStartX] = useState(0);

  const steps = [
    { year: "2021", title: "The Inception", detail: "Defined the 3D-first clinical protocol in Piantini.", icon: <ShieldCheck size={40} className="text-gold" /> },
    { year: "2022", title: "Digital Integration", detail: "Implemented AI tooth-mapping for predictive outcomes.", icon: <Scan size={40} className="text-emerald" /> },
    { year: "2023", title: "Robotic Standard", detail: "Became a benchmark for robotic-guided surgery.", icon: <Microscope size={40} className="text-gold" /> },
    { year: "2024", title: "Global Expansion", detail: "Serving elective cosmetic cases for 500+ patients annually.", icon: <Users size={40} className="text-emerald" /> },
    { year: "2025", title: "Advanced Bio-Labs", detail: "Inaugurated dedicated tissue regeneration research suites.", icon: <Info size={40} className="text-gold" /> },
    { year: "2026", title: "Next-Gen Hub", detail: "Launching the PCL-powered automated booking ecosystem.", icon: <History size={40} className="text-emerald" /> }
  ];

  const goTo = useCallback((idx: number) => {
    setActiveStep(Math.max(0, Math.min(idx, steps.length - 1)));
  }, [steps.length]);

  const progress = ((activeStep) / (steps.length - 1)) * 100;

  /* ── Swipe handling ─────────────────────── */
  const handlePointerDown = (e: React.PointerEvent) => {
    setDragStartX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const delta = e.clientX - dragStartX;
    if (Math.abs(delta) > 60) {
      if (delta < 0) goTo(activeStep + 1);
      else goTo(activeStep - 1);
    }
  };

  return (
    <div className="bg-obsidian text-cloud min-h-screen">
      {/* Cinematic Intro */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald/5 rounded-full blur-[200px]" />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="container-premium relative z-10"
        >
          <span className="text-gold font-bold tracking-[0.6em] uppercase text-[10px] lg:text-xs">The Obsidian Sanctuary</span>
          <h1 className="font-syne text-hero-lg font-bold mt-8 tracking-tighter">
            Our <br/><span className="text-luxury text-emerald lowercase">legacy.</span>
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-32 mt-16 md:mt-24 lg:mt-32">
            <p className="text-2xl md:text-3xl lg:text-5xl font-medium leading-[1.2] text-gray-300 ornament">
               Engineering clinical excellence into a <span className="text-luxury text-gold">bespoke sensory experience.</span>
            </p>
            <div className="space-y-6 md:space-y-10">
              <p className="text-base md:text-lg lg:text-2xl text-gray-500 leading-relaxed font-bold">
                 Founded in Piantini, Solis Dental Studio represents the intersection of biotechnology and high-art. We serve the most discerning residents of Santo Domingo and international patients seeking surgical perfection.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Timeline Carousel — Click + Swipe */}
      <section className="section-padding bg-obsidian-light/30 relative overflow-hidden">
        <div className="container-premium mb-16 md:mb-24 lg:mb-32 flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
           <div className="text-center md:text-left">
              <span className="text-emerald font-bold tracking-[0.5em] uppercase text-[10px] lg:text-xs">The Technical Horizon</span>
              <h2 className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold mt-6 tracking-tighter italic text-gold leading-none">Projecting <br/><span className="text-white not-italic lowercase text-luxury">futures.</span></h2>
           </div>
           {/* Animated Year Display */}
           <AnimatePresence mode="wait">
             <motion.div 
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-7xl md:text-9xl lg:text-[10rem] font-syne font-black text-emerald/10 leading-none tracking-tighter select-none"
             >
                {steps[activeStep].year}
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Carousel Track */}
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y select-none"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div 
            ref={trackRef}
            className="flex items-center px-6 md:px-12 lg:px-20 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${activeStep * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 90 : 40)}vw)` }}
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                onClick={() => goTo(idx)}
                className={`flex-shrink-0 w-[85vw] lg:w-[35vw] mr-8 lg:mr-16 relative group transition-all duration-700 cursor-pointer ${activeStep === idx ? 'opacity-100 scale-100' : 'opacity-30 scale-95 hover:opacity-60'}`}
              >
                <div className="relative glass-obsidian p-8 md:p-12 lg:p-20 rounded-[48px] md:rounded-[64px] lg:rounded-[100px] border border-white/5 space-y-8 lg:space-y-10 group-hover:border-emerald/40 transition-all duration-700 hover:translate-y-[-15px] shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
                  <div className="flex justify-between items-start">
                    <div className="p-4 lg:p-6 rounded-[24px] lg:rounded-[32px] bg-obsidian border border-gold/10 w-fit group-hover:scale-110 group-hover:border-gold/40 transition-all duration-700">
                      {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <span className="font-syne text-xl lg:text-4xl font-bold text-gold/30 group-hover:text-gold transition-colors duration-700">{step.year}</span>
                  </div>
                  <div className="space-y-4 lg:space-y-6">
                    <h3 className="font-syne text-2xl lg:text-5xl font-bold tracking-tight">{step.title}</h3>
                    <p className="text-base lg:text-2xl text-gray-500 font-medium leading-relaxed group-hover:text-white transition-colors duration-700">{step.detail}</p>
                  </div>
                  <div className="pt-4 lg:pt-8 flex items-center space-x-6">
                    <div className="w-16 h-px bg-emerald/20 group-hover:w-full group-hover:bg-emerald transition-all duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 md:mt-16 lg:mt-24 container-premium flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => goTo(activeStep - 1)}
              disabled={activeStep === 0}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold disabled:opacity-20 disabled:hover:text-gray-500 disabled:hover:border-white/10 transition-all duration-500"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => goTo(activeStep + 1)}
              disabled={activeStep === steps.length - 1}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold disabled:opacity-20 disabled:hover:text-gray-500 disabled:hover:border-white/10 transition-all duration-500"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Step Dots */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`rounded-full transition-all duration-500 ${activeStep === idx ? 'w-8 md:w-10 h-2 md:h-3 bg-gradient-to-r from-emerald to-gold' : 'w-2 md:w-3 h-2 md:h-3 bg-white/10 hover:bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 lg:mt-16 container-premium group">
           <div className="w-full h-2 bg-white/5 rounded-full relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald to-gold rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ width: `${progress}%` }}
              />
           </div>
           <div className="flex justify-between mt-6 lg:mt-10 text-[8px] lg:text-xs uppercase font-black tracking-[0.4em] lg:tracking-[0.6em] text-gray-700 transition-colors group-hover:text-gold">
              <span>The Inception</span>
              <span>The Horizon</span>
           </div>
        </div>
      </section>

      {/* Final Call to Legacy */}
      <section className="section-padding container-premium">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
           {[
            { label: "Precision Rate", value: "99.9%", icon: <Award className="text-emerald" size={32} /> },
            { label: "Years in Piantini", value: "5+", icon: <History className="text-gold" size={32} /> },
            { label: "Elite Tech Stack", value: "Bio-Sync", icon: <ArrowRight className="text-emerald" size={32} /> },
            { label: "Global Presence", value: "45+", icon: <Users className="text-gold" size={32} /> }
           ].map((stat, idx) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="glass-obsidian p-8 md:p-10 lg:p-12 rounded-[32px] md:rounded-[48px] lg:rounded-[56px] border border-white/5 text-center flex flex-col items-center justify-center space-y-3 md:space-y-4 hover:border-gold/30 transition-all duration-700 group cursor-pointer"
             >
                <div className="group-hover:scale-110 transition-transform duration-500">
                   {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-syne font-black text-emerald group-hover:text-white transition-colors tracking-tighter leading-none break-keep">
                   {stat.value}
                </div>
                <div className="text-[9px] lg:text-[11px] uppercase font-black tracking-widest text-gray-500 group-hover:text-gold transition-colors">{stat.label}</div>
             </motion.div>
           ))}
        </div>

        <section className="mt-32 md:mt-48 lg:mt-[20rem] min-h-[50vh] lg:h-[70vh] rounded-[48px] md:rounded-[80px] lg:rounded-[120px] overflow-hidden relative group border border-gold/10">
            <img src="/assets/hero.png" alt="Legacy" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-all duration-[8s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12 space-y-8 lg:space-y-12 z-10">
               <h3 className="font-syne text-4xl md:text-6xl lg:text-[7rem] font-bold max-w-5xl tracking-tighter leading-[0.85]">Enter the <br/><span className="text-luxury text-gold lowercase">solis legacy.</span></h3>
               <Link href="/booking" className="bg-emerald px-12 md:px-20 py-6 md:py-8 rounded-[24px] md:rounded-[32px] font-bold text-xl md:text-2xl hover:bg-emerald-light transition-all shadow-[0_40px_100px_rgba(46,139,87,0.4)] hover:scale-105 active:scale-95 duration-500">
                  Reserve My Timeline
               </Link>
            </div>
        </section>
      </section>

    </div>
  );
}
