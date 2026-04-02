'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface BeforeAfterSliderProps {
  beforeImg: string
  afterImg: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({ 
  beforeImg, 
  afterImg, 
  beforeLabel = 'Scientific Baseline', 
  afterLabel = 'Artistic Result' 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isResizing, setIsResizing] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = (x / rect.width) * 100
    setSliderPosition(percent)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) handleMove(e.clientX)
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize glass-obsidian"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsResizing(true)}
      onMouseUp={() => setIsResizing(false)}
      onMouseLeave={() => setIsResizing(false)}
    >
      {/* After Image (Background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImg})` }}
      />

      {/* Before Image (Overlay) */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center border-r-2 border-[#D4AF37]/50 shadow-[10px_0_30px_rgba(212,175,55,0.2)]"
        style={{ 
          backgroundImage: `url(${beforeImg})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      />

      {/* Slider Line/Handle */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-[#0D0D0D] flex items-center justify-center shadow-[0_0_20px_#D4AF37]">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-[#D4AF37] rounded-full" />
            <div className="w-1 h-3 bg-[#D4AF37] rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 px-4 py-2 bg-[#0D0D0D]/80 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold border border-white/10 opacity-70">
        {beforeLabel}
      </div>
      <div className="absolute bottom-6 right-6 px-4 py-2 bg-[#135D43]/80 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold border border-white/10 opacity-70">
        {afterLabel}
      </div>
    </div>
  )
}
