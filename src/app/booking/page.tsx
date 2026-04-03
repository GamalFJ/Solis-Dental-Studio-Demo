'use client'

import { motion } from 'framer-motion'
import ThreePrecisionGrid from '@/components/three/ThreePrecisionGrid'

const PremiumIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="group-hover:scale-125 transition-transform duration-700">
    <path d="M16 2L18.5 12.5L29 15L18.5 17.5L16 28L13.5 17.5L3 15L13.5 12.5L16 2Z" fill={color} stroke={color} strokeWidth="1" />
  </svg>
);

export default function Booking() {
  return (
    <div className="min-h-screen bg-obsidian text-cloud relative overflow-hidden">
      
      {/* Background Precision Grid */}
      <ThreePrecisionGrid />

      <div className="container-premium grid lg:grid-cols-5 gap-16 md:gap-24 items-start relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
        <div className="lg:col-span-2 lg:sticky lg:top-56 lg:h-min text-center lg:text-left">
          <span className="text-gold font-bold tracking-[0.5em] lg:tracking-[0.8em] uppercase text-[10px] lg:text-xs block mb-8 opacity-60 italic font-syne">The Digital Portal</span>
          <h1 className="font-syne text-hero font-bold mt-6 tracking-tighter shadow-2xl">
            Secure <br/><span className="text-luxury text-emerald lowercase italic">the slot.</span>
          </h1>
          <p className="mt-8 lg:mt-12 text-xl lg:text-3xl text-gray-400 leading-tight font-medium bg-clip-text text-balance max-w-xl mx-auto lg:mx-0">
            Select high-speed availability for your virtual assessment or in-person 3D oral mapping.
          </p>
          
          <div className="mt-16 space-y-12 hidden md:block">
            {[
              { id: "01", title: "Select Availability", description: "Choose a cinematic time-slot.", status: "Active" },
              { id: "02", title: "Assessment Logic", description: "Prepare your medical data.", status: "Pending" }
            ].map((step, idx) => (
              <div key={idx} className={`flex items-center space-x-8 group ${step.status === 'Pending' ? 'opacity-30' : ''} justify-center lg:justify-start`}>
                 <div className={`w-16 h-16 rounded-[24px] border border-white/5 flex items-center justify-center font-syne font-bold text-2xl group-hover:border-gold transition-colors duration-700 bg-obsidian/40 backdrop-blur-3xl shadow-xl`}>
                    {step.id}
                 </div>
                 <div>
                    <h4 className="text-xl lg:text-2xl font-bold tracking-tight mb-2">{step.title}</h4>
                    <p className="text-gray-500 font-medium italic text-base lg:text-lg">{step.description}</p>
                 </div>
              </div>
            ))}
          </div>

          <div className="mt-16 lg:mt-24 p-8 glass-obsidian rounded-[32px] md:rounded-[40px] border border-emerald/10 shadow-3xl bg-emerald/5 max-w-sm mx-auto lg:mx-0">
             <div className="flex items-center space-x-6 mb-6">
                <PremiumIcon color="#2E8B57" />
                <span className="font-syne font-black text-[10px] uppercase tracking-[0.4em] text-emerald">Encryption Active</span>
             </div>
             <p className="text-gray-400 text-sm font-medium leading-relaxed italic">Your clinical data and slot selection are secured by the Solis Advanced Protocol.</p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="relative rounded-[40px] md:rounded-[72px] lg:rounded-[100px] overflow-hidden border border-white/5 shadow-[0_100px_80px_rgba(0,0,0,0.8)] bg-obsidian/80 backdrop-blur-2xl p-6 md:p-8 lg:p-12 min-h-[600px] md:min-h-[850px] group">
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 pointer-events-none border-inset border-[20px] md:border-[40px] border-obsidian z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Cal.com Stylized Embed */}
            <iframe 
              src="https://cal.com/purple-cove-labs/20-min-cafe-virtual?theme=dark" 
              className="w-full h-[600px] md:h-[800px] opacity-100 grayscale-[0.5] hover:grayscale-0 transition-all duration-[2s] rounded-[24px] md:rounded-[48px] lg:rounded-[64px]"
              style={{ border: 'none' }}
              title="Solis Booking Portal"
            />
            
            {/* Premium Grain Frame */}
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.03] bg-[url('/assets/noise.png')]" />
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  )
}
