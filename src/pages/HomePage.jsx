import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MobileHero from '../components/mobile/MobileHero';
import QuickBookingBar from '../components/QuickBookingBar';
import { ArrowRight, Shield, Award, Clock, Users, CheckCircle2, ChevronRight } from 'lucide-react';

export default function HomePage({ onOpenBooking }) {
  const featuredFleet = [
    {
      name: 'Toyota Innova Crysta',
      category: 'Premium SUV (6+1)',
      image: '/images/vehicles/innova.png',
      rate: '₹18 / km',
      desc: 'Comfortable captain seats, dual AC, ideal for family pilgrimages.',
    },
    {
      name: 'Maruti Suzuki Dzire',
      category: 'Comfort Sedan (4+1)',
      image: '/images/vehicles/sedan.png',
      rate: '₹13 / km',
      desc: 'Economical city & outstation travel with ample boot space.',
    },
    {
      name: 'Force Tempo Traveller (Urbania)',
      category: 'Mini Coach (12/17 Seater)',
      image: '/images/vehicles/tempo.png',
      rate: '₹24 / km',
      desc: 'Pushback luxury seats, high roof, and dedicated luggage carrier.',
    },
    {
      name: 'Luxury Coach Bus',
      category: 'Bus Charter (36/49 Seater)',
      image: '/images/vehicles/bus.png',
      rate: 'Charter Tariff',
      desc: 'Air suspension comfort for marriages, college & corporate tours.',
    },
  ];

  const destinations = [
    { city: 'Thanjavur', image: '/images/destinations/thanjavur.jpg', tag: 'Maratha Palace & Chola UNESCO Arts' },
    { city: 'Trichy', image: '/images/destinations/trichy.jpg', tag: 'Kallanai 2nd-Century Dam & Riverways' },
    { city: 'Kumbakonam', image: '/images/destinations/kumbakonam.jpg', tag: 'Bronze Masters & Silk Weavers' },
    { city: 'Madurai', image: '/images/destinations/madurai.jpg', tag: 'Culinary Capital, Nayakkar Palace & Bazaars' },
    { city: 'Coimbatore', image: '/images/destinations/coimbatore.jpg', tag: 'Siruvani Sweet Waters & Valparai Tea Trails' },
    { city: 'Chennai', image: '/images/destinations/chennai.jpg', tag: 'Marina Promenade & Mahabalipuram Relics' },
  ];

  return (
    <div className="pb-16 md:pb-0">
      {/* 1. Dedicated Mobile Hero View (< 768px) */}
      <div className="block md:hidden">
        <MobileHero onOpenBooking={onOpenBooking} />
      </div>

      {/* 2. Dedicated Desktop Hero View (>= 768px) with fitted panoramic background */}
      <div className="hidden md:block">
        <Hero onOpenBooking={onOpenBooking} />
      </div>

      {/* 3. Quick Booking Tariff Bar (Directly below hero section) */}
      <QuickBookingBar onOpenBooking={onOpenBooking} />

      {/* 4. Core Pillars / Why Choose Us */}
      <section className="py-12 sm:py-16 px-4 sm:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="glow-border-card group cursor-default transition-all duration-300 active:scale-95 hover:-translate-y-1">
              <div className="glow-border-card-inner !p-3.5 sm:!p-6 flex flex-col justify-between">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold-dark mb-2.5 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                <div>
                  <h3 className="text-xs sm:text-base font-bold font-heading text-neutral-900 mb-1 group-hover:text-brand-gold-dark transition-colors">
                    Sanitized Fleet
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-snug sm:leading-relaxed">
                    Regular mechanical servicing, AC checks, and clean interior cabins before every dispatch.
                  </p>
                </div>
              </div>
            </div>

            <div className="glow-border-card group cursor-default transition-all duration-300 active:scale-95 hover:-translate-y-1">
              <div className="glow-border-card-inner !p-3.5 sm:!p-6 flex flex-col justify-between">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold-dark mb-2.5 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                <div>
                  <h3 className="text-xs sm:text-base font-bold font-heading text-neutral-900 mb-1 group-hover:text-brand-gold-dark transition-colors">
                    Chauffeur Experts
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-snug sm:leading-relaxed">
                    Licensed drivers with extensive familiarity of temple darshan timings and bypass routes.
                  </p>
                </div>
              </div>
            </div>

            <div className="glow-border-card group cursor-default transition-all duration-300 active:scale-95 hover:-translate-y-1">
              <div className="glow-border-card-inner !p-3.5 sm:!p-6 flex flex-col justify-between">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold-dark mb-2.5 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                <div>
                  <h3 className="text-xs sm:text-base font-bold font-heading text-neutral-900 mb-1 group-hover:text-brand-gold-dark transition-colors">
                    Punctual Pickups
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-snug sm:leading-relaxed">
                    Guaranteed on-time arrivals for railway station, airport, and residence pickups.
                  </p>
                </div>
              </div>
            </div>

            <div className="glow-border-card group cursor-default transition-all duration-300 active:scale-95 hover:-translate-y-1">
              <div className="glow-border-card-inner !p-3.5 sm:!p-6 flex flex-col justify-between">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold-dark mb-2.5 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                <div>
                  <h3 className="text-xs sm:text-base font-bold font-heading text-neutral-900 mb-1 group-hover:text-brand-gold-dark transition-colors">
                    Clear Billing
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-snug sm:leading-relaxed">
                    Honest per-kilometer tariffs, standard driver bata, and upfront toll clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Primary Destinations Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 border-b border-neutral-200 pb-4 sm:pb-6">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gold-dark block mb-1">
                Tour Destinations Across Tamil Nadu
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-neutral-900">
                Key Travel Hubs
              </h2>
            </div>
            <Link
              to="/destinations"
              className="mt-3 sm:mt-0 text-xs sm:text-sm font-bold text-neutral-900 hover:text-brand-gold-dark flex items-center gap-1.5 transition-colors"
            >
              <span>View All Destination Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {destinations.map((d) => (
              <Link
                key={d.city}
                to="/destinations"
                className="group relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden shadow-sm border border-neutral-200 block transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl active:scale-[0.98]"
              >
                {/* Top subtle golden shimmer border */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <img
                  src={d.image}
                  alt={d.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-white">
                  <span className="text-[9px] sm:text-[11px] font-semibold text-brand-gold uppercase tracking-wider block mb-0.5">
                    {d.tag}
                  </span>
                  <h3 className="text-base sm:text-2xl font-bold font-heading group-hover:text-gold-shine transition-colors">
                    {d.city}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-neutral-300 pt-1 sm:pt-2 group-hover:text-brand-gold transition-colors">
                    <span>Explore Packages</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Fleet Showcase Section with Luxury Gradient & Showcase Animations */}
      <section className="relative py-14 sm:py-24 px-4 sm:px-10 bg-gradient-to-b from-[#18100e] via-[#281a16] to-[#140c0a] text-white overflow-hidden">
        {/* Golden ambient radial light aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 border-b border-brand-gold/25 pb-4 sm:pb-6">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">
                Commercial Vehicles
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                Our Fleet & Tariffs
              </h2>
            </div>
            <Link
              to="/fleet"
              className="mt-3 sm:mt-0 text-xs sm:text-sm font-bold text-brand-gold hover:text-white flex items-center gap-1.5 transition-colors group"
            >
              <span>View Full Fleet & Tariffs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Animated Vehicle Showcase Grid (2*2 on mobile, 4 on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredFleet.map((veh) => (
              <div
                key={veh.name}
                className="group relative bg-gradient-to-b from-[#241714] to-[#180e0c] border border-brand-gold/25 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-gold/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-5px_rgba(212,175,55,0.3)] active:scale-[0.98]"
              >
                {/* Top Subtle Shimmer Glow Bar on Hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <div>
                  {/* Vehicle Studio Spotlight Container */}
                  <div className="relative h-32 sm:h-48 w-full bg-gradient-to-b from-[#140c0a] via-[#1a100e] to-[#120a08] flex items-center justify-center p-2 sm:p-4 overflow-hidden border-b border-white/5">
                    
                    {/* Radial Spotlight Under Car */}
                    <div className="absolute bottom-1 inset-x-4 h-12 sm:h-20 bg-gradient-to-t from-brand-gold/20 to-transparent rounded-[100%] blur-md pointer-events-none group-hover:from-brand-gold/40 group-hover:scale-125 transition-all duration-500"></div>
                    
                    {/* Vehicle Image with Smooth Glide/Scale Animation */}
                    <img
                      src={veh.image}
                      alt={veh.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Category Pill Tag */}
                    <div className="absolute top-2 left-2 z-20 bg-black/85 backdrop-blur-md px-1.5 sm:px-2.5 py-0.5 rounded text-[8px] sm:text-[10px] font-bold text-brand-gold border border-brand-gold/30">
                      {veh.category}
                    </div>

                    {/* Rate Tag */}
                    <div className="absolute top-2 right-2 z-20 bg-[#241815]/90 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-extrabold px-1.5 sm:px-2.5 py-0.5 rounded border border-white/10">
                      {veh.rate}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-3 sm:p-5 space-y-1 sm:space-y-2">
                    <h3 className="text-xs sm:text-base font-bold font-heading text-white group-hover:text-brand-gold transition-colors">
                      {veh.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-neutral-400 leading-snug sm:leading-relaxed">
                      {veh.desc}
                    </p>
                  </div>
                </div>

                {/* Card Button */}
                <div className="p-3 sm:p-5 pt-0">
                  <button
                    onClick={() => onOpenBooking(veh)}
                    className="w-full btn-gold py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer shadow-md group-hover:shadow-brand-gold/30 transition-all"
                  >
                    <span>Enquire Vehicle</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Simple Quick Callout Section */}
      <section className="py-16 px-6 sm:px-10 bg-[#FAF8F5] border-t border-neutral-200">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-wider text-brand-gold-dark uppercase block">
            Plan Your Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-neutral-900">
            Planning a Trip in Tamil Nadu?
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Need a cab, van, or bus? Contact our customer booking desk for easy reservations, best rates, and a comfortable ride for you and your family.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="btn-gold px-7 py-3 rounded-lg text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
            >
              <span>Book Your Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg text-sm font-semibold bg-white border border-neutral-300 text-neutral-800 hover:border-brand-gold-dark hover:text-brand-gold-dark transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
