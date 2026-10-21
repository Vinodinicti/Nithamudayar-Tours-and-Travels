import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileHero({ onOpenBooking }) {
  return (
    <section 
      id="mobile-home" 
      className="bg-[#352016] text-white pt-24 pb-8 px-4 overflow-hidden"
    >
      <div className="space-y-4">
        
        {/* Brand Tag */}
        <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase block">
          Tamil Nadu Tour & Travel Services
        </span>

        {/* Title matching desktop visual style */}
        <h1 className="font-black font-heading leading-tight tracking-tight drop-shadow-xl">
          <span className="text-white block text-3xl sm:text-4xl">NITHAMUDAYAR</span>
          <span className="text-gold-shine block text-xl sm:text-2xl mt-0.5">TOURS & TRAVELS</span>
        </h1>

        {/* Panoramic Fleet Showcase Banner */}
        <div className="relative w-full rounded-xl overflow-hidden border border-brand-gold/30 bg-[#241815] shadow-xl p-2 group">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80"></div>
          <img
            src="/hero-bg-full.png"
            alt="Nithamudayar Tours and Travels Fleet"
            className="w-full h-auto max-h-40 object-contain block drop-shadow-2xl"
          />
          <div className="flex items-center justify-between pt-1 px-1 text-[10px] text-neutral-400">
            <span className="text-brand-gold font-bold">Innova • Dzire • Tempo • Coach</span>
            <a href="tel:+919894116405" className="text-white flex items-center gap-1 font-semibold hover:text-brand-gold">
              <Phone className="w-2.5 h-2.5 text-brand-gold" />
              <span>98941 16405</span>
            </a>
          </div>
        </div>

        {/* Action Buttons matching desktop */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={() => onOpenBooking()}
            className="btn-gold py-3 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>Book A Vehicle</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <Link
            to="/packages"
            className="bg-[#1c1917] border border-white/20 hover:border-brand-gold text-white py-3 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Explore Packages</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
