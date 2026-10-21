import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutHero({ onOpenBooking }) {
  return (
    <section 
      id="about-hero" 
      className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#352016] text-white overflow-hidden bg-cover bg-right lg:bg-center bg-no-repeat min-h-[480px] sm:min-h-[520px] flex items-center"
      style={{
        backgroundImage: `url('/images/backgrounds/about-fleet-hero.png')`,
      }}
    >
      {/* Soft gradient blend on the left so typography is crisp and legible */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-1/2 bg-gradient-to-r from-[#352016] via-[#352016]/90 to-transparent pointer-events-none z-10"></div>

      {/* Subtle top/bottom vignette */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#352016]/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#352016]/80 to-transparent pointer-events-none z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 w-full">
        
        {/* Left Content aligned over the image's dark curved area */}
        <div className="max-w-xl lg:max-w-2xl space-y-5 py-6 sm:py-10">
          
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-brand-gold uppercase block">
            Tamil Nadu & South India Tour Specialists
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading leading-tight tracking-tight drop-shadow-md">
            <span className="text-white block">ABOUT NITHAMUDAYAR</span>
            <span className="text-gold-shine block text-xl sm:text-2xl lg:text-3xl">TOURS & TRAVELS</span>
          </h1>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="btn-gold px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Book A Vehicle</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/fleet"
              className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-black/60 hover:bg-black/80 border border-brand-gold/40 text-brand-gold hover:text-white transition-all backdrop-blur-sm shadow-md"
            >
              Explore Commercial Fleet
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
