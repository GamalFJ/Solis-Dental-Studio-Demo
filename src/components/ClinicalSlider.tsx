"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ClinicalSlider() {
  const [mounted, setMounted] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      className="relative w-full h-[60vh] rounded-[48px] overflow-hidden glass-obsidian border border-emerald/20 cursor-ew-resize group select-none shadow-2xl" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
      {/* After Image (Base) */}
      <div className="absolute inset-0">
        <Image 
          src="/assets/hero.png" 
          alt="After CLINICAL" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right z-30 max-w-[40%] md:max-w-none">
          <span className="text-emerald font-bold tracking-[0.2em] md:tracking-widest text-[8px] md:text-[10px] uppercase">Final Phase</span>
          <h4 className="text-white text-xl md:text-3xl lg:text-4xl font-bold font-syne mt-1 md:mt-2 drop-shadow-xl">Bespoke Aesthetics</h4>
        </div>
      </div>

      {/* Before Image (Clipped Overlay) */}
      <div 
        className="absolute inset-0 z-10 transition-all duration-75"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src="/assets/abstract.png" 
          alt="Before CLINICAL" 
          fill 
          className="object-cover grayscale opacity-60"
        />
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-30 max-w-[40%] md:max-w-none">
          <span className="text-gold font-bold tracking-[0.2em] md:tracking-widest text-[8px] md:text-[10px] uppercase">Initial Phase</span>
          <h4 className="text-white text-xl md:text-3xl lg:text-4xl font-bold font-syne mt-1 md:mt-2 drop-shadow-xl">Clinical Assessment</h4>
        </div>
        <div className="absolute inset-0 bg-obsidian-dark/40 pointer-events-none" />
      </div>

      {/* Slider Divider Handle */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-75"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/30 glass-obsidian backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="flex space-x-1.5 opacity-60">
             <div className="w-1 h-4 bg-white/80 rounded-full" />
             <div className="w-1 h-4 bg-white/80 rounded-full" />
          </div>
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent z-40" />
    </div>
  );
}
