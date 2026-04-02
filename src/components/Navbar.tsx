"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-syne font-bold text-xl">
          <Sparkles className="text-emerald" />
          <span>Solis Dental Studio</span>
        </Link>
        <div className="flex space-x-6 text-sm font-bold uppercase tracking-widest">
           <Link href="/about" className="hover:text-gold transition-colors">About</Link>
           <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
           <Link href="/cases" className="hover:text-gold transition-colors">Clinical Hub</Link>
        </div>
        <Link href="/booking" className="bg-emerald px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest text-obsidian shadow-xl">
           Book Now
        </Link>
      </div>
    </nav>
  );
}
