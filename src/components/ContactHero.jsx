import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function ContactHero({ onOpenBooking }) {
  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="contact-hero" 
      className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#180e0c] text-white overflow-hidden bg-cover bg-right lg:bg-center bg-no-repeat min-h-[460px] sm:min-h-[520px] flex items-center"
      style={{
        backgroundImage: `url('/images/backgrounds/contact-hero.png')`,
      }}
    >
      {/* Soft gradient blend on the left so typography is crisp and legible */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-1/2 bg-gradient-to-r from-[#180e0c] via-[#180e0c]/90 to-transparent pointer-events-none z-10"></div>

      {/* Subtle top/bottom vignette */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#180e0c]/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#180e0c]/80 to-transparent pointer-events-none z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 w-full">
        
        {/* Left Content aligned over the dark gradient area */}
        <div className="max-w-xl lg:max-w-2xl space-y-5 py-6 sm:py-10">
          
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-brand-gold uppercase block">
            24/7 Reservations & Travel Assistance • South India
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading leading-tight tracking-tight drop-shadow-md">
            <span className="text-white block">CONTACT OUR TRAVEL DESK</span>
            <span className="text-gold-shine block text-xl sm:text-2xl lg:text-3xl">BOOKINGS, QUOTATIONS & ROUTES</span>
          </h1>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg">
            Have questions about customized temple tours, outstation tariffs, or group coach rentals? Our team is available round the clock.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : scrollToForm()}
              className="btn-gold px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Enquire on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919894116405"
              className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-black/60 hover:bg-black/80 border border-brand-gold/40 text-brand-gold hover:text-white transition-all backdrop-blur-sm flex items-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call +91 98941 16405</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
