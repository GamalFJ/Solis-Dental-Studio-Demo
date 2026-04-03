"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-obsidian text-cloud relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[60vh] bg-gradient-to-b from-gold/5 via-obsidian to-transparent opacity-30"></div>
      
      <div className="container-premium flex flex-col lg:grid lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 relative z-10 mx-auto">
        <div className="text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
          <span className="text-emerald font-bold tracking-[0.5em] lg:tracking-[0.8em] uppercase text-[10px] lg:text-xs">Direct Digital Inquiry</span>
          <h1 className="font-syne text-hero font-bold mt-6 tracking-tighter italic">
            Connect <br/><span className="text-gold not-italic">Elite.</span>
          </h1>
          <p className="mt-8 lg:mt-12 text-lg md:text-xl lg:text-3xl text-gray-400 max-w-md mx-auto lg:mx-0 leading-tight font-medium">
             Our concierge team is standing by to assist with your custom smile evolution.
          </p>

          <div className="mt-16 lg:mt-24 space-y-8 md:space-y-12">
             <div className="flex flex-col md:flex-row items-center lg:items-start space-y-6 md:space-y-0 md:space-x-8 border-b border-gold/10 pb-10 group">
                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl glass-obsidian flex items-center justify-center text-gold group-hover:scale-110 transition-transform shadow-2xl">
                  <MapPin size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="syne font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-emerald text-[8px] lg:text-[10px] opacity-60">Headquarters</h3>
                  <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight">Piantini, Santo Domingo</p>
                </div>
             </div>
             <div className="flex flex-col md:flex-row items-center lg:items-start space-y-6 md:space-y-0 md:space-x-8 border-b border-gold/10 pb-10 group">
                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl glass-obsidian flex items-center justify-center text-gold group-hover:scale-110 transition-transform shadow-2xl">
                  <Mail size={28} />
                </div>
                <div className="space-y-2">
                  <h3 className="syne font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-emerald text-[8px] lg:text-[10px] opacity-60">Digital Inquiry</h3>
                  <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight">concierge@solis.studio</p>
                </div>
             </div>
          </div>
          </motion.div>
        </div>

        <div className="relative glass-obsidian p-8 md:p-12 lg:p-20 rounded-[40px] md:rounded-[64px] lg:rounded-[100px] border border-gold/10 shadow-[0_100px_80px_rgba(0,0,0,0.6)]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
           <h3 className="font-syne text-3xl md:text-4xl lg:text-6xl font-bold mb-10 md:mb-16 text-emerald flex items-center justify-center lg:justify-start space-x-6">
              <MessageSquare className="text-gold w-8 h-8 lg:w-12 lg:h-12" />
              <span>Digital Intake</span>
           </h3>
           <form className="space-y-8 md:space-y-12">
              {[
                { id: "name", label: "Legal Name", type: "text" },
                { id: "email", label: "Professional Email", type: "email" },
                { id: "message", label: "Project Objective", type: "textarea" }
              ].map(field => (
                  <div key={field.id} className="relative group">
                     {field.type === "textarea" ? (
                       <textarea 
                          placeholder={field.label} 
                          rows={1}
                          className="w-full bg-transparent border-b-2 border-white/5 py-6 md:py-8 text-xl md:text-2xl lg:text-3xl outline-none focus:border-emerald transition-all syne placeholder:text-gray-200 resize-none"
                        />
                     ) : (
                       <input 
                          type={field.type} 
                          placeholder={field.label} 
                          className="w-full bg-transparent border-b-2 border-white/5 py-6 md:py-8 text-xl md:text-2xl lg:text-3xl outline-none focus:border-emerald transition-all syne placeholder:text-gray-200"
                        />
                     )}
                     <div className="absolute bottom-0 left-0 h-[2px] bg-emerald w-0 group-focus-within:w-full transition-all duration-1000" />
                  </div>
              ))}
              <div className="pt-8 md:pt-12">
                <button className="bg-emerald border-none w-full py-8 md:py-10 lg:py-12 rounded-[24px] md:rounded-[32px] lg:rounded-[48px] text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2em] uppercase hover:bg-emerald-light transition-all flex items-center justify-center space-x-6 shadow-[0_40px_100px_rgba(46,139,87,0.35)] group/btn hover:scale-105 active:scale-95 duration-500">
                   <span>Initialize Transformation</span>
                   <Send className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </div>
           </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
