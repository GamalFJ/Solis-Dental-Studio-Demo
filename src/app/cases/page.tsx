"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ThreePrecisionGrid from "@/components/three/ThreePrecisionGrid";

const PremiumIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="group-hover:scale-125 transition-transform duration-700">
    <path d="M4 16 L28 16 M20 8 L28 16 L20 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="0.5" strokeDasharray="4 4" className="animate-spin-slow opacity-20" />
  </svg>
);

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Cinematic Reveal Card ────────────────────────────
   A hover-driven wipe that simulates a before/after 
   without needing two separate images.                */
function CinematicRevealCard({ image, title }: { image: string; title: string }) {
  const [hoverPct, setHoverPct] = useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setHoverPct((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full cursor-ew-resize overflow-hidden rounded-[inherit] touch-pan-y"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onMouseLeave={() => setHoverPct(50)}
      onTouchEnd={() => setHoverPct(50)}
    >
      {/* Full colour layer */}
      <Image src={image} alt={title} fill className="object-cover" />

      {/* Desaturated overlay — wipes away on hover */}
      <div
        className="absolute inset-0 grayscale brightness-50"
        style={{ clipPath: `inset(0 0 0 ${hoverPct}%)` }}
      >
        <Image src={image} alt={`${title} baseline`} fill className="object-cover" />
      </div>

      {/* Gold divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#D4AF37] pointer-events-none shadow-[0_0_14px_#D4AF37]"
        style={{ left: `${hoverPct}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-[#D4AF37] bg-[#0D0D0D] flex items-center justify-center shadow-[0_0_20px_#D4AF37]">
          <div className="flex space-x-1">
            <div className="w-0.5 h-3 bg-[#D4AF37] rounded-full" />
            <div className="w-0.5 h-3 bg-[#D4AF37] rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 px-4 py-2 bg-[#0D0D0D]/80 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold border border-white/10 opacity-70">
        Scientific Baseline
      </div>
      <div className="absolute bottom-6 right-6 px-4 py-2 bg-[#135D43]/80 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold border border-white/10 opacity-70">
        Solis Outcome
      </div>
    </div>
  );
}

export default function Results() {
  const cases = [
    { 
      title: "Full Oral Design", 
      location: "Piantini Studio", 
      tag: "Porcelain Veneers",
      insight: "Achieving symmetrical perfection through 3D mapping and biological patient data analysis.",
      isReveal: true,
      image: "/assets/hero.png"
    },
    { 
      title: "Digital Orthodontics", 
      location: "Santo Domingo Hub", 
      tag: "Invisalign Elite",
      insight: "Accelerated alignment featuring AI-monitored weekly progression scans.",
      image: "/assets/detail.png"
    },
    { 
      title: "Bio-Implantology", 
      location: "Naco Flagship", 
      tag: "Robotic Guided",
      insight: "Zero-error implant placement using micron-precise robotic surgical assistance.",
      image: "/assets/abstract.png"
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian text-cloud relative overflow-hidden">
      
      {/* Background Precision Grid */}
      <ThreePrecisionGrid />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="container-premium text-center lg:text-left relative z-10"
      >
        <span className="text-gold font-bold tracking-[0.5em] lg:tracking-[0.8em] uppercase text-[10px] lg:text-xs block mb-8 opacity-60">The Clinical Archive</span>
        <h1 className="font-syne text-hero font-bold mt-6 tracking-tighter drop-shadow-2xl">
          Master <br/><span className="text-luxury text-emerald lowercase italic">outcomes.</span>
        </h1>
        <p className="mt-12 md:mt-16 text-xl md:text-2xl lg:text-4xl text-gray-400 max-w-4xl mx-auto lg:mx-0 leading-tight font-medium bg-clip-text text-balance">
          Each case is a testament to the intersection of digital biology and aesthetic desire, crafted for the <span className="text-white italic">elite aesthetic.</span>
        </p>

        <div className="mt-24 md:mt-32 lg:mt-[24rem] space-y-32 md:space-y-48 lg:space-y-[45rem]">
          {cases.map((project, idx) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-5 gap-12 md:gap-16 lg:gap-32 items-center`}
            >
               <TiltCard className={`lg:col-span-3 relative h-[50vh] md:h-[60vh] lg:h-[85vh] rounded-[40px] md:rounded-[72px] lg:rounded-[100px] overflow-hidden border border-white/5 group perspective-1000 shadow-[0_80px_60px_rgba(0,0,0,0.9)] ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  {project.isReveal ? (
                    <CinematicRevealCard image={project.image} title={project.title} />
                  ) : (
                    <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-[6s] ease-[0.16,1,0.3,1] opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-l from-emerald/10 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-1000" />
                    </div>
                  )}
                  <div style={{ transform: "translateZ(100px)" }} className="absolute bottom-6 left-6 md:bottom-10 md:left-10 lg:bottom-16 lg:left-16 z-10 glass-obsidian p-6 md:p-10 lg:p-14 rounded-[32px] md:rounded-[56px] lg:rounded-[72px] border border-white/10 max-w-[280px] md:max-w-sm lg:max-w-md shadow-2xl group-hover:border-gold/40 transition-all duration-700 bg-obsidian/60 backdrop-blur-3xl">
                     <span className="text-emerald font-bold tracking-[0.4em] lg:tracking-[0.5em] uppercase text-[8px] lg:text-xs opacity-60">Archive No.0{idx + 1}</span>
                     <h4 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-4 lg:mt-6 tracking-tighter leading-[0.9] group-hover:text-gold transition-colors duration-500">{project.title}</h4>
                     <p className="mt-6 md:mt-10 text-gray-400 tracking-[0.1em] lg:tracking-[0.2em] text-[8px] lg:text-xs font-bold uppercase italic border-l border-emerald pl-4 md:pl-8 flex items-center space-x-2 md:space-x-4">
                        <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gold animate-pulse" />
                        <span>{project.location} · {project.tag}</span>
                     </p>
                  </div>
               </TiltCard>
               <motion.div 
                 initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                 className={`lg:col-span-2 space-y-8 md:space-y-12 lg:space-y-16 text-center lg:text-left ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
               >
                  <div className="flex items-center justify-center lg:justify-start space-x-4 md:space-x-6">
                    <div className="w-8 md:w-12 h-px bg-emerald/20" />
                    <span className="font-syne font-black text-[8px] lg:text-xs uppercase tracking-[0.4em] lg:tracking-[0.6em] text-emerald drop-shadow-[0_0_10px_rgba(46,139,87,0.3)]">Clinical Insight</span>
                  </div>
                  <p className="text-2xl md:text-3xl lg:text-[4rem] font-bold pb-12 md:pb-16 lg:pb-24 border-b border-white/5 leading-[1.05] tracking-tighter hover:text-white transition-all duration-1000 italic font-cormorant max-w-lg lg:ml-0 mx-auto">
                    &ldquo;{project.insight}&rdquo;
                  </p>
                  <Link href="/booking" className="flex items-center justify-center lg:justify-start space-x-6 md:space-x-8 group/link font-bold tracking-[0.2em] lg:tracking-[0.3em] text-[10px] uppercase text-gray-500 hover:text-gold transition-all duration-700">
                     <span className="group-hover/link:translate-x-4 transition-transform duration-700">Full Protocol Analysis</span>
                     <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/5 flex items-center justify-center group-hover/link:bg-gold/5 group-hover/link:border-gold transition-all duration-700 group-hover/link:scale-110 shadow-2xl">
                        <PremiumIcon color="#D4AF37" />
                     </div>
                  </Link>
               </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Experimental Trust Signals */}
      <section className="section-padding bg-obsidian border-y border-white/5 relative overflow-hidden mt-32 md:mt-64">
         <div className="absolute inset-0 bg-emerald/5 opacity-20 pointer-events-none" />
         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-48 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-[3s] ease-out px-6">
            {['BIOTECH', 'PRECISION', 'AESTHETIC', 'ROBOTIC'].map(word => (
              <span key={word} className="font-syne text-2xl md:text-4xl lg:text-8xl font-black tracking-[0.5em] lg:tracking-[1em] italic text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">{word}</span>
            ))}
         </div>
      </section>
    </div>
  );
}
