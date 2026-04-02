'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.98 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-1 relative"
      >
        {/* Grainy Cinematic Overlay for route transitions */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] grayscale mix-blend-overlay animate-grain bg-[url('/assets/noise.png')]" />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
