'use client'

import { useEffect } from 'react'

export function SuppressThreeWarnings() {
  useEffect(() => {
    const originalWarn = console.warn
    console.warn = (...args: unknown[]) => {
      const msg = args.map(String).join(' ')
      if (msg.includes('THREE.Clock') && msg.includes('deprecated')) return
      originalWarn(...args)
    }
    return () => { console.warn = originalWarn }
  }, [])
  return null
}
