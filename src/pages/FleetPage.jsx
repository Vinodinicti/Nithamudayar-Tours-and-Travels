import React, { useState } from 'react';
import FleetHero from '../components/FleetHero';
import MobileFleetHero from '../components/mobile/MobileFleetHero';
import { Users, Briefcase, Wind, CheckCircle2, ArrowRight, Car, ShieldCheck, Check } from 'lucide-react';

export default function FleetPage({ onOpenBooking }) {
  const [fleetFilter, setFleetFilter] = useState('all');

  const fleetFilterTabs = [
    { id: 'all', label: 'All Fleet Models (4)' },
    { id: 'Comfort Sedan', label: 'Sedans (4+1)' },
    { id: 'Premium SUV', label: 'SUVs (6+1)' },
    { id: 'Mini Coach', label: 'Tempo Travellers (12/17)' },
    { id: 'Bus Charter', label: 'Tourist Coaches (36/49)' },
  ];
  const fleetTypes = [
    {
      title: 'Comfort Sedans',
      model: 'Swift Dzire / Toyota Etios',
      capacity: '4 Passengers',
      bestFor: 'Couples, small families & local city drops',
    },
    {
      title: 'Premium SUVs',
      model: 'Toyota Innova Crysta',
      capacity: '6 to 7 Passengers',
      bestFor: 'Long pilgrimages & luxury family vacations',
    },
    {
      title: 'Tempo Travellers',
      model: 'Force Traveller / Urbania',
      capacity: '12 to 17 Passengers',
      bestFor: 'Extended families & friend group tours',
    },
    {
      title: 'Luxury Coaches',
      model: 'AC Tourist Buses',
      capacity: '36 to 49 Passengers',
      bestFor: 'Weddings, college tours & corporate events',
    },
  ];

  const fleet = [
    {
      id: 'innova-crysta',
      name: 'Toyota Innova Crysta',
      category: 'Premium SUV',
      image: '/images/vehicles/innova.png',
      seats: '6 + 1 Passengers',
      luggage: '4 Large Bags',
      ac: 'Dual Zone Automatic AC',
      rate: '₹18 / km (or ₹3,500/day package)',
      specs: [
        'Reclining captain seats with plush cushioning',
        'High ground clearance for comfortable highway and temple town rides',
        'Mobile charging ports for passenger rows',
        'First aid kit and speed governor equipped',
      ],
      idealFor: 'Family temple circuits & outstation journeys',
    },
    {
      id: 'sedan-dzire',
      name: 'Maruti Suzuki Dzire',
      category: 'Comfort Sedan',
      image: '/images/vehicles/sedan.png',
      seats: '4 + 1 Passengers',
      luggage: '2 Large Bags',
      ac: 'Climate Control AC',
      rate: '₹13 / km (or ₹2,400/day package)',
      specs: [
        'Silent cabin with smooth suspension',
        'Economical tariff with excellent fuel efficiency',
        'Boot space for luggage and temple prasadam',
        'Ideal for city sightseeing & station pickups',
      ],
      idealFor: 'Couples, small families & executive travel',
    },
    {
      id: 'tempo-traveller',
      name: 'Force Tempo Traveller (Urbania & T1)',
      category: 'Mini Coach',
      image: '/images/vehicles/tempo.png',
      seats: '12 / 17 Passengers',
      luggage: '10 Large Bags + Roof Carrier',
      ac: 'Individual Overhead AC Vents',
      rate: '₹24 / km (or ₹5,500/day package)',
      specs: [
        '2x1 executive pushback luxury seats',
        'Wide central gangway with full standing headroom',
        'Music system, LED lighting, and mic setup',
        'Dedicated underseat and roof luggage space',
      ],
      idealFor: 'Navagraha pilgrimage groups & joint families',
    },
    {
      id: 'luxury-coach',
      name: 'Luxury AC Tourist Coach Bus',
      category: 'Bus Charter',
      image: '/images/vehicles/bus.png',
      seats: '36 / 49 Passengers',
      luggage: 'Spacious Underbody Cargo Compartment',
      ac: 'High-Capacity Climate AC',
      rate: 'Custom Charter Tariff by Route',
      specs: [
        'Air suspension chassis for long-distance ride comfort',
        'Multi-angle reclining high-back seats',
        'Emergency exits, dual fire extinguishers & GPS tracking',
        'Commercial South India tourist permits enabled',
      ],
      idealFor: 'Weddings, college tours, industrial visits & group travel',
    },
  ];

  const tariffs = [
    { vehicle: 'Maruti Suzuki Dzire (4+1)', perKm: '₹13 / km', minKm: '250 km / day', driverBata: '₹500 / day', nightCharge: '₹300 (after 10 PM)' },
    { vehicle: 'Toyota Innova Crysta (6+1)', perKm: '₹18 / km', minKm: '300 km / day', driverBata: '₹600 / day', nightCharge: '₹400 (after 10 PM)' },
    { vehicle: 'Force Tempo Traveller (12/17)', perKm: '₹24 / km', minKm: '300 km / day', driverBata: '₹800 / day', nightCharge: '₹500 (after 10 PM)' },
    { vehicle: 'Luxury Coach Bus (36/49)', perKm: 'Custom Quote', minKm: 'By Itinerary', driverBata: 'Included in Quote', nightCharge: 'Included in Quote' },
  ];

  return (
    <div className="pb-16 md:pb-0">
      {/* 1. Dedicated Mobile Hero View (< 768px) */}
      <div className="block md:hidden">
        <MobileFleetHero onOpenBooking={onOpenBooking} />
      </div>

      {/* 2. Dedicated Desktop Hero View (>= 768px) with landscape fleet background */}
      <div className="hidden md:block">
        <FleetHero onOpenBooking={onOpenBooking} />
      </div>

      {/* 2. Quick Fleet Categories */}
      <section className="py-10 sm:py-16 px-4 sm:px-10 bg-[#FAF8F5] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 border-b border-neutral-300 pb-4 sm:pb-5">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gold-dark block mb-1">
                Well-Maintained Vehicles
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-900">
                Ready for Every Group & Route
              </h2>
            </div>
            <p className="mt-2 sm:mt-0 text-xs sm:text-sm text-neutral-500">
              Clean, fully air-conditioned vehicles with verified chauffeurs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {fleetTypes.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-5 flex flex-col justify-between hover:shadow-md hover:border-brand-gold-dark/50 transition-all duration-300 active:scale-95 group"
              >
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-bold text-brand-gold-dark bg-brand-gold/10 px-2 py-0.5 rounded">
                      {item.capacity}
                    </span>
                    <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-brand-gold-dark transition-colors" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold font-heading text-neutral-900 group-hover:text-brand-gold-dark transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-700 line-clamp-1">
                    {item.model}
                  </p>
                  <p className="text-[10px] sm:text-xs text-neutral-500 leading-snug sm:leading-relaxed line-clamp-2">
                    {item.bestFor}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-neutral-100">
                  <button
                    onClick={() => onOpenBooking({ vehicle: item.title })}
                    className="w-full btn-gold py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1 cursor-pointer shadow-sm active:scale-95 transition-all"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Fleet Cards with Interactive Filter & Showroom Animations */}
      <section className="py-12 sm:py-20 px-4 sm:px-10 bg-[#201512] text-white relative overflow-hidden">
        {/* Ambient radial gold glow behind section */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-gold/20 pb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">
                Commercial Fleet Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Available Vehicles & Specifications
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                Every vehicle is mechanically inspected, AC-tested, and chauffeur-driven across Tamil Nadu and South India.
              </p>
            </div>

            {/* Quick trust badge */}
            <div className="flex items-center gap-2 text-xs text-brand-gold bg-[#2d1e1a] border border-brand-gold/30 px-3.5 py-2 rounded-lg shrink-0">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span className="font-semibold text-neutral-200">100% Commercial Tourist Permits</span>
            </div>
          </div>

          {/* Category Filter Pills with Smooth Hover/Active States */}
          <div className="flex items-center flex-wrap gap-2 pt-1 pb-2">
            {fleetFilterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFleetFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  fleetFilter === tab.id
                    ? 'btn-gold shadow-md scale-[1.02]'
                    : 'bg-[#2a1c18] border border-brand-gold/20 text-neutral-300 hover:border-brand-gold/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Showroom Animated Fleet Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(fleetFilter === 'all' ? fleet : fleet.filter(item => item.category === fleetFilter)).map((item) => (
              <div
                key={item.id}
                className="fleet-showroom-card group flex flex-col justify-between"
              >
                {/* Gold Shimmer Bar on Hover */}
                <div className="fleet-shimmer"></div>

                <div>
                  {/* Fitted Showroom Stage with Radial Spotlight */}
                  <div className="fleet-stage relative h-60 sm:h-64 w-full flex flex-col items-center justify-center p-6 border-b border-white/10">
                    
                    {/* Background Radial Spotlight */}
                    <div className="absolute inset-0 bg-radial from-brand-gold/20 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    {/* Floating Studio Vehicle Image with Ground Shadow */}
                    <div className="relative z-10 w-full h-40 sm:h-44 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain fleet-car-image"
                        loading="lazy"
                      />
                    </div>

                    {/* Ambient Contact Ground Shadow */}
                    <div className="w-3/4 sm:w-2/3 h-3 bg-black/80 rounded-full blur-sm mx-auto -mt-1 fleet-ground-shadow pointer-events-none"></div>

                    {/* Category Tag on Stage Top Left */}
                    <div className="absolute top-4 left-4 bg-[#1b100e]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-gold border border-brand-gold/40 shadow-sm">
                      {item.category}
                    </div>

                    {/* Rate Tag on Stage Top Right */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#241815] to-[#180e0c] text-white text-xs font-black font-heading px-3 py-1 rounded-lg border border-brand-gold/50 shadow-md">
                      {item.rate}
                    </div>
                  </div>

                  {/* Vehicle Details & Specifications */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-brand-gold transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-brand-gold font-medium mt-1">
                        {item.idealFor}
                      </p>
                    </div>

                    {/* 3 Key Metric Tiles with Hover Effect */}
                    <div className="grid grid-cols-3 gap-2.5 text-xs text-neutral-300 py-3 border-y border-white/10">
                      <div className="bg-[#1f1310] border border-white/5 hover:border-brand-gold/40 rounded-lg p-2.5 transition-colors flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-brand-gold">
                          <Users className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[10px] uppercase font-bold text-neutral-400">Seats</span>
                        </div>
                        <span className="font-semibold text-white truncate">{item.seats}</span>
                      </div>

                      <div className="bg-[#1f1310] border border-white/5 hover:border-brand-gold/40 rounded-lg p-2.5 transition-colors flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-brand-gold">
                          <Briefcase className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[10px] uppercase font-bold text-neutral-400">Luggage</span>
                        </div>
                        <span className="font-semibold text-white truncate">{item.luggage}</span>
                      </div>

                      <div className="bg-[#1f1310] border border-white/5 hover:border-brand-gold/40 rounded-lg p-2.5 transition-colors flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-brand-gold">
                          <Wind className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[10px] uppercase font-bold text-neutral-400">Comfort</span>
                        </div>
                        <span className="font-semibold text-white truncate">{item.ac}</span>
                      </div>
                    </div>

                    {/* Specifications Checklist */}
                    <ul className="space-y-2 text-xs text-neutral-300 pt-1">
                      {item.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Button with smooth slide */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenBooking(item)}
                    className="w-full btn-gold py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn"
                  >
                    <span>Check Availability & Book {item.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Tariff Schedule Table with Attractive Borders & Colors */}
      <section id="tariff-table" className="py-12 sm:py-20 px-4 sm:px-10 bg-[#FAF8F5] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-neutral-300 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark block mb-1">
                Transparent Tariffs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-900">
                Standard Tariff Schedule
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-xl">
                Transparent outstation per-km rates with verified drivers. Toll charges, parking fees, and interstate permits are billed as actuals.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold-dark bg-white border border-brand-gold/40 px-3.5 py-2 rounded-lg shadow-2xs shrink-0">
              <ShieldCheck className="w-4 h-4 text-brand-gold-dark" />
              <span>No Hidden Charges • Clear Driver Allowances</span>
            </div>
          </div>

          {/* Luxury Dual-Tone Bordered Table Container */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold shadow-lg shadow-brand-gold/15">
            <div className="rounded-[calc(1rem-1px)] overflow-hidden bg-white">
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  
                  {/* Rich Dark Header with Golden Accents */}
                  <thead>
                    <tr className="bg-gradient-to-r from-[#201512] via-[#291b17] to-[#180e0c] text-white">
                      <th className="py-4 px-5 font-bold uppercase text-[11px] tracking-wider text-brand-gold border-r border-white/10">
                        Vehicle Category
                      </th>
                      <th className="py-4 px-5 font-bold uppercase text-[11px] tracking-wider text-brand-gold border-r border-white/10">
                        Base Tariff
                      </th>
                      <th className="py-4 px-5 font-bold uppercase text-[11px] tracking-wider text-neutral-200 border-r border-white/10">
                        Min Km / Day
                      </th>
                      <th className="py-4 px-5 font-bold uppercase text-[11px] tracking-wider text-neutral-200 border-r border-white/10">
                        Driver Bata
                      </th>
                      <th className="py-4 px-5 font-bold uppercase text-[11px] tracking-wider text-neutral-200 border-r border-white/10">
                        Night Halt
                      </th>
                      <th className="py-4 px-5 font-bold uppercase text-[11px] tracking-wider text-brand-gold text-center">
                        Action
                      </th>
                    </tr>
                  </thead>

                  {/* Body with Alternating Colors & Golden Accents */}
                  <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                    {tariffs.map((t, idx) => (
                      <tr 
                        key={t.vehicle} 
                        className={`transition-colors duration-200 hover:bg-amber-50/70 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]/80'
                        }`}
                      >
                        {/* Vehicle Category */}
                        <td className="py-4 px-5 font-bold text-neutral-900 border-r border-neutral-100">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-brand-gold-dark shrink-0"></span>
                            <span className="text-sm font-semibold">{t.vehicle}</span>
                          </div>
                        </td>

                        {/* Base Tariff Badge */}
                        <td className="py-4 px-5 border-r border-neutral-100">
                          <span className="inline-block bg-brand-gold/15 text-brand-gold-dark font-extrabold font-mono text-xs sm:text-sm px-3 py-1 rounded-full border border-brand-gold/30 shadow-2xs">
                            {t.perKm}
                          </span>
                        </td>

                        {/* Min Km */}
                        <td className="py-4 px-5 font-medium text-neutral-700 border-r border-neutral-100">
                          <span className="bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded text-xs font-semibold">
                            {t.minKm}
                          </span>
                        </td>

                        {/* Driver Bata */}
                        <td className="py-4 px-5 font-semibold text-neutral-800 border-r border-neutral-100">
                          {t.driverBata}
                        </td>

                        {/* Night Halt */}
                        <td className="py-4 px-5 text-neutral-600 border-r border-neutral-100 text-xs">
                          {t.nightCharge}
                        </td>

                        {/* Direct Booking CTA */}
                        <td className="py-4 px-5 text-center">
                          <button
                            onClick={() => onOpenBooking({ vehicle: t.vehicle })}
                            className="btn-gold px-3.5 py-1.5 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105 transition-transform"
                          >
                            <span>Book</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

              {/* Bottom Clarification Notice */}
              <div className="bg-[#FAF8F5] p-4 border-t border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold-dark font-bold font-mono">NOTE:</span>
                  <span>Day starts from 6:00 AM to 10:00 PM. Rates calculate on garage-to-garage basis.</span>
                </div>
                <div className="flex items-center gap-4 text-neutral-700 font-medium">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-brand-gold-dark" />
                    <span>No Hidden Fees</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-brand-gold-dark" />
                    <span>GST Bill on Request</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
