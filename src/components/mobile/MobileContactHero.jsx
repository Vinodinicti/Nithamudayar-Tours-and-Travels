import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export default function MobileContactHero({ onOpenBooking }) {
  return (
    <section 
      id="mobile-contact-hero" 
      className="relative w-full pt-24 pb-8 px-4 bg-[#180e0c] text-white overflow-hidden bg-cover bg-right bg-no-repeat"
      style={{
        backgroundImage: `url('/images/backgrounds/contact-hero.png')`,
      }}
    >
      {/* Soft gradient blend so text is ultra-sharp and legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#180e0c]/95 via-[#180e0c]/85 to-[#180e0c] pointer-events-none"></div>
      {/* Golden ambient radial light */}
      <div className="absolute top-16 right-0 w-64 h-64 bg-brand-gold/15 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="relative z-10 space-y-4">
        
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-1.5 bg-black/40 border border-brand-gold/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-brand-gold" />
          <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">
            24/7 Reservations & Travel Assistance
          </span>
        </div>

        {/* Title matching desktop visual style */}
        <h1 className="text-3xl font-black font-heading leading-tight tracking-tight drop-shadow-lg">
          <span className="text-white block">CONTACT OUR TRAVEL DESK</span>
          <span className="text-gold-shine block text-2xl">BOOKINGS & ENQUIRIES</span>
        </h1>

        <p className="text-xs text-neutral-300 leading-relaxed max-w-sm">
          Get immediate vehicle availability, itemized per-km quotations, and 24/7 dispatch support via call or WhatsApp.
        </p>

        {/* Action Buttons matching desktop */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={() => onOpenBooking ? onOpenBooking() : null}
            className="btn-gold py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-lg active:scale-95 transition-all"
          >
            <span>Enquire WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="tel:+919894116405"
            className="px-3 py-2.5 rounded-lg text-xs font-semibold bg-black/60 border border-brand-gold/40 text-brand-gold hover:text-white flex items-center justify-center gap-1 transition-all backdrop-blur-sm"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span>Call 98941 16405</span>
          </a>
        </div>

        {/* 3D Map Pin & Route Showcase Banner */}
        <div className="relative w-full rounded-xl overflow-hidden border border-brand-gold/30 bg-gradient-to-b from-[#241815] to-[#160e0c] shadow-2xl p-2 group">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80"></div>
          <img
            src="/images/backgrounds/contact-hero.png"
            alt="Nithamudayar Tours and Travels Map Route Destination"
            className="w-full h-auto max-h-36 object-cover rounded-lg block drop-shadow-2xl"
          />
          <div className="flex items-center justify-between pt-1 px-1 text-[10px] text-neutral-400">
            <span className="text-brand-gold font-bold">Tamil Nadu • Kerala • Karnataka • Pondicherry</span>
            <a href="tel:+919894116405" className="text-white flex items-center gap-1 font-semibold hover:text-brand-gold">
              <Phone className="w-2.5 h-2.5 text-brand-gold" />
              <span>98941 16405</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
