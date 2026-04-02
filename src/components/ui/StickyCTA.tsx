'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'
import Link from 'next/link'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-10 right-10 z-[80] hidden md:block"
        >
          <Link href="/booking" className="group relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#135D43] blur-2xl opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#0D0D0D] border border-[#D4AF37]/30 px-8 py-4 rounded-full flex items-center space-x-4 shadow-2xl group-hover:scale-105 transition-transform group-hover:border-[#D4AF37]">
              <div className="w-10 h-10 rounded-full bg-[#135D43] flex items-center justify-center text-[#F8F8F8]">
                <Calendar size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-[#D4AF37] font-bold">Secure Your Slot</span>
                <span className="text-xs uppercase tracking-widest font-black">Book Experience</span>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
