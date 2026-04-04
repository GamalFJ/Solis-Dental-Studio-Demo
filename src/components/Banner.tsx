"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder that matches the server layout exactly
    return (
      <div className="fixed top-0 w-full z-[150] bg-emerald-gold h-8 flex items-center overflow-hidden">
        <div className="flex w-full">
          <div className="text-[10px] uppercase font-bold tracking-[0.5em] text-white flex shrink-0 space-x-12">
            <span>This is a Speculative Demo Website by Purple Cove Labs</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-[150] bg-emerald-gold h-8 flex items-center overflow-hidden pt-[env(safe-area-inset-top)]"
      style={{ height: 'calc(2rem + env(safe-area-inset-top))' }}
      suppressHydrationWarning
    >
      <div className="flex w-full">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="text-[10px] uppercase font-bold tracking-[0.5em] text-white flex shrink-0 space-x-12"
        >
          <span>This is a Speculative Demo Website by Purple Cove Labs</span>
          <span className="opacity-50">·</span>
          <span>Solis Dental Studio Modern Ecosystem</span>
          <span className="opacity-50">·</span>
          <span>2026 Experimental Framework</span>
          <span className="opacity-50">·</span>
          {/* Duplicate for seamless loop */}
          <span>This is a Speculative Demo Website by Purple Cove Labs</span>
          <span className="opacity-50">·</span>
          <span>Solis Dental Studio Modern Ecosystem</span>
          <span className="opacity-50">·</span>
          <span>2026 Experimental Framework</span>
          <span className="opacity-50">·</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
