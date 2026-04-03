"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Activity, 
  Microscope, 
  Scan, 
  CircleDollarSign,
  CalendarCheck
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const serviceItems = [
    { 
      id: "01", 
      title: "Digital Oral Ecosystem", 
      detail: "Complete mapping using high-cadence 3D lidar scanners for a micron-perfect digital twin of your oral structure.",
      icon: <Scan className="text-emerald" />,
      colSpan: "lg:col-span-2"
    },
    { 
      id: "02", 
      title: "AI Invisalign", 
      detail: "Predictive aligner sequences tracked via real-time biological adaptation models.",
      icon: <Zap className="text-gold" />,
      colSpan: "lg:col-span-1"
    },
    { 
      id: "03", 
      title: "Robotic Implantology", 
      detail: "Automated surgical guidance for sub-millimetric depth control during implant placement.",
      icon: <Microscope className="text-emerald" />,
      colSpan: "lg:col-span-1"
    },
    { 
      id: "04", 
      title: "Bio-Aesthetic Sculpting", 
      detail: "Designing symmetrical perfection by analyzing facial bone density and muscle dynamics.",
      icon: <Sparkles className="text-gold" />,
      colSpan: "lg:col-span-1"
    },
    { 
      id: "05", 
      title: "Regenerative Protocols", 
      detail: "Biological stimulus treatments designed to accelerate recovery through precise tissue mapping.",
      icon: <Activity className="text-emerald" />,
      colSpan: "lg:col-span-1"
    }
  ];

  const pricingItems = [
    { name: "Initial 3D Assessment", usd: "$250", dop: "RD$ 15,000" },
    { name: "Ceramic Design Protocol", usd: "$800", dop: "RD$ 48,000" },
    { name: "Invisalign Elite Flow", usd: "from $3,500", dop: "RD$ 210,000" },
    { name: "Robotic Implant (Unit)", usd: "from $1,200", dop: "RD$ 72,000" }
  ];

  return (
    <div className="min-h-screen bg-obsidian text-cloud relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald/5 rounded-full blur-[100px]"></div>

      <div className="container-premium z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
        <span className="text-gold font-bold tracking-[0.5em] uppercase text-[10px] lg:text-xs text-center lg:text-left block mb-8">The Technical Horizon</span>
        <h1 className="font-syne text-hero font-bold mt-6 text-center lg:text-left">
          Clinical <br/><span className="text-luxury text-emerald lowercase">intelligence.</span>
        </h1>
        <p className="mt-12 text-lg md:text-xl lg:text-3xl text-gray-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left font-medium">
          Our services are powered by the world's most advanced dental technologies—eliminating uncertainty through <span className="text-white italic">technical predictability.</span>
        </p>

        {/* Bento Grid Services */}
        <div className="mt-24 md:mt-32 lg:mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {serviceItems.map((service, idx) => (
            <div className={`${service.colSpan} glass-obsidian p-8 md:p-10 lg:p-12 rounded-[32px] md:rounded-[48px] lg:rounded-[64px] hover:border-emerald/40 group transition-all duration-700 cursor-pointer overflow-hidden relative border border-white/5 hover:translate-y-[-12px] shadow-2xl`}>
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
              <div className="absolute top-6 right-6 lg:top-10 lg:right-10 text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-syne font-black text-emerald/5 group-hover:text-gold/10 transition-colors duration-1000">
                {service.id}
              </div>
              <div className="space-y-8 lg:space-y-10 relative z-10">
                <div className="p-4 lg:p-5 w-fit rounded-2xl md:rounded-3xl bg-obsidian-light border border-gold/10 group-hover:border-gold/30 transition-all duration-500 group-hover:scale-110">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <div className="space-y-4 lg:space-y-6">
                  <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight leading-none">{service.title}</h4>
                  <p className="text-gray-500 leading-relaxed font-bold group-hover:text-cloud transition-colors duration-700 text-base md:text-lg lg:text-2xl">
                    {service.detail}
                  </p>
                </div>
              </div>
              <div className="mt-12 lg:mt-16 w-full h-[2px] bg-white/5 relative overflow-hidden">
                <div className="absolute h-full inset-0 bg-gradient-to-r from-emerald to-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-1000">
                  <motion.div className="w-full h-full" />
                </div>
              </div>
                </motion.div>
              </div>
          ))}
        </div>

        {/* Clinical Investment Section */}
        <section className="mt-32 md:mt-48 lg:mt-[20rem]">
           <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-24 space-y-8 lg:space-y-0">
              <div className="text-center lg:text-left">
                 <span className="text-emerald font-bold tracking-[0.4em] uppercase text-xs">Transparency & Value</span>
                 <h2 className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold mt-4 tracking-tighter italic text-gold leading-none">Clinical <br/><span className="text-white not-italic lowercase text-luxury">investment.</span></h2>
              </div>
              <div className="glass-obsidian px-8 py-4 lg:px-10 lg:py-5 rounded-full border border-gold/20 backdrop-blur-xl group hover:border-gold transition-colors">
                 <p className="text-[10px] font-bold tracking-[0.3em] text-gray-500 group-hover:text-gold transition-colors italic uppercase">Dynamic Rate Mapping Active</p>
              </div>
           </div>

           <div className="glass-obsidian rounded-[32px] md:rounded-[4rem] lg:rounded-[6rem] border border-white/5 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="overflow-x-auto">
                <table className="w-full text-left relative z-10 border-collapse min-w-[600px] lg:min-w-[800px]">
                  <thead className="border-b border-white/5">
                      <tr className="text-gray-500 text-[8px] lg:text-xs uppercase tracking-[0.5em] font-black">
                        <th className="px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">Clinical Protocol</th>
                        <th className="px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">Investment (USD)</th>
                        <th className="px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16">Inversión (RD$)</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                      {pricingItems.map((item, idx) => (
                          <motion.tr 
                            key={item.name}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group/row hover:bg-white/[0.03] transition-all duration-500 cursor-pointer"
                          >
                            <td className="px-8 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20 border-r border-white/5 group-hover/row:border-emerald/20 transition-colors">
                              <div className="text-xl md:text-2xl lg:text-4xl font-bold group-hover/row:text-emerald transition-all duration-500 font-syne">{item.name}</div>
                            </td>
                            <td className="px-8 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20 text-center lg:text-left border-r border-white/5">
                              <div className="text-xl md:text-2xl lg:text-4xl font-black text-emerald group-hover/row:scale-110 transition-transform origin-left">{item.usd}</div>
                            </td>
                            <td className="px-8 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20 text-center lg:text-left">
                              <div className="text-xl md:text-2xl lg:text-4xl font-black text-gold group-hover/row:scale-110 transition-transform origin-left">{item.dop}</div>
                            </td>
                        </motion.tr>
                      ))}
                  </tbody>
                </table>
              </div>
           </div>
        </section>

        {/* High-Impact CTA */}
        <section className="section-padding mt-48 lg:mt-[20rem] relative bg-obsidian-light rounded-[48px] md:rounded-[80px] lg:rounded-[120px] border border-gold/10 p-8 md:p-16 lg:p-32 overflow-hidden text-center group/cta">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald/10 to-gold/10 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-[3s]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/abstract.png')] bg-cover opacity-[0.05] grayscale group-hover/cta:scale-110 transition-transform duration-[10s]" />
            
            <div className="relative z-10 max-w-5xl mx-auto space-y-12 lg:space-y-16">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
               <CircleDollarSign className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 text-gold mx-auto animate-float drop-shadow-[0_20px_40px_rgba(212,175,55,0.4)]" />
               <h2 className="font-syne text-4xl md:text-6xl lg:text-[7rem] font-bold tracking-tighter leading-[0.85]">
                  Begin Your <br/><span className="text-luxury text-emerald lowercase">biological evolution.</span>
               </h2>
               <p className="text-gray-400 text-lg md:text-2xl lg:text-4xl leading-relaxed max-w-3xl mx-auto font-medium">
                  Reserved for those who seek the vertical peak of aesthetic science in <span className="text-white italic">Santo Domingo.</span>
               </p>
               <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10 pt-8 md:pt-12">
                  <Link href="/booking" className="w-full sm:w-auto bg-emerald border-none px-12 md:px-16 py-6 md:py-8 rounded-[24px] md:rounded-[32px] font-bold text-xl md:text-2xl hover:bg-emerald-light transition-all shadow-[0_30px_80px_rgba(46,139,87,0.4)] flex items-center justify-center space-x-4 group hover:scale-105 active:scale-95 duration-500">
                     <CalendarCheck className="w-6 h-6 md:w-8 md:h-8" />
                     <span>Secure Appointment</span>
                  </Link>
                  <Link href="/contact" className="group/concierge flex items-center space-x-6 font-bold tracking-widest text-sm md:text-base uppercase text-gold hover:text-white transition-all">
                     <span className="italic font-cormorant text-xl md:text-2xl normal-case">Contact Concierge</span>
                     <div className="w-10 md:w-12 h-px bg-gold group-hover/concierge:w-16 md:group-hover/concierge:w-20 group-hover/concierge:bg-white transition-all duration-700" />
                  </Link>
               </div>
              </motion.div>
            </div>
        </section>
        </motion.div>
      </div>
    </div>
  );
}
