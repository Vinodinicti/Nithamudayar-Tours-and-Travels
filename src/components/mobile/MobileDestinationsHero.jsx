import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function MobileDestinationsHero({ onOpenBooking }) {
  const scrollToDestinations = () => {
    const el = document.getElementById('destination-profiles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="mobile-destinations-hero" 
      className="bg-[#352016] text-white pt-24 pb-8 px-4 overflow-hidden"
    >
      <div className="space-y-4">
        
        {/* Brand Tag */}
        <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase block">
          Primary Travel Hubs • Tamil Nadu
        </span>

        {/* Title matching desktop visual style */}
        <h1 className="text-2xl font-black font-heading leading-tight tracking-tight drop-shadow-lg">
          <span className="text-white block">TAMIL NADU DESTINATIONS</span>
          <span className="text-gold-shine block text-lg">HERITAGE HUBS & REGIONAL CIRCUITS</span>
        </h1>

        {/* Temple & Heritage Showcase Banner */}
        <div className="relative w-full rounded-xl overflow-hidden border border-brand-gold/30 bg-[#241815] shadow-xl p-2 group">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80"></div>
          <img
            src="/images/backgrounds/destinations-hero-full.jpg"
            alt="Tamil Nadu Heritage Destinations Temple and Sacred Hill"
            className="w-full h-auto max-h-40 object-cover rounded-lg block drop-shadow-2xl"
          />
          <div className="flex items-center justify-between pt-1 px-1 text-[10px] text-neutral-400">
            <span className="text-brand-gold font-bold">Thanjavur • Trichy • Madurai • Coimbatore</span>
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
            <span>Plan A Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={scrollToDestinations}
            className="bg-[#1c1917] border border-white/20 hover:border-brand-gold text-white py-3 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Explore 6 Hubs</span>
          </button>
        </div>

      </div>
    </section>
  );
}
