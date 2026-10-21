import React, { useState } from 'react';
import FleetHero from '../components/FleetHero';
import MobileFleetHero from '../components/mobile/MobileFleetHero';
import { Users, Briefcase, Wind, CheckCircle2, ArrowRight, Car, ShieldCheck, Check, LayoutGrid, Table } from 'lucide-react';

export default function FleetPage({ onOpenBooking }) {
  const [fleetFilter, setFleetFilter] = useState('all');
  const [tariffMobileMode, setTariffMobileMode] = useState('cards');

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
      model: 'Swift Dzire / Etios',
      capacity: '4 Passengers',
      bestFor: 'Couples & small families',
    },
    {
      title: 'Premium SUVs',
      model: 'Toyota Innova Crysta',
      capacity: '6 to 7 Passengers',
      bestFor: 'Long pilgrimages & families',
    },
    {
      title: 'Tempo Travellers',
      model: 'Force Traveller / Urbania',
      capacity: '12 to 17 Passengers',
      bestFor: 'Extended families & groups',
    },
    {
      title: 'Luxury Coaches',
      model: 'AC Tourist Buses',
      capacity: '36 to 49 Passengers',
      bestFor: 'Weddings & corporate events',
    },
  ];

  const fleet = [
    {
      id: 'innova-crysta',
      name: 'Toyota Innova Crysta',
      category: 'Premium SUV',
      image: '/images/vehicles/innova.png',
      seats: '6 + 1 Passengers',
      seatsMobile: '6 + 1 Seats',
      luggage: '4 Large Bags',
      luggageMobile: '4 Large Bags',
      ac: 'Dual Zone Automatic AC',
      acMobile: 'Dual Zone AC',
      rate: '₹18 / km (or ₹3,500/day package)',
      rateMobile: '₹18 / km',
      specs: [
        'Reclining plush captain seats',
        'High ground clearance for temple routes',
        'Mobile charging ports in passenger rows',
        'Speed governor & verified first-aid kit',
      ],
      idealFor: 'Family temple circuits & outstation journeys',
    },
    {
      id: 'sedan-dzire',
      name: 'Maruti Suzuki Dzire',
      category: 'Comfort Sedan',
      image: '/images/vehicles/sedan.png',
      seats: '4 + 1 Passengers',
      seatsMobile: '4 + 1 Seats',
      luggage: '2 Large Bags',
      luggageMobile: '2 Large Bags',
      ac: 'Climate Control AC',
      acMobile: 'Climate AC',
      rate: '₹13 / km (or ₹2,400/day package)',
      rateMobile: '₹13 / km',
      specs: [
        'Silent cabin with smooth highway suspension',
        'Economical tariff with high fuel efficiency',
        'Boot space for luggage and prasadam',
        'Ideal for city sightseeing & station drops',
      ],
      idealFor: 'Couples, small families & executive travel',
    },
    {
      id: 'tempo-traveller',
      name: 'Force Tempo Traveller (Urbania)',
      category: 'Mini Coach',
      image: '/images/vehicles/tempo.png',
      seats: '12 / 17 Passengers',
      seatsMobile: '12 / 17 Seats',
      luggage: '10 Large Bags + Roof Carrier',
      luggageMobile: '10 Bags + Roof',
      ac: 'Individual Overhead AC Vents',
      acMobile: 'Individual AC',
      rate: '₹24 / km (or ₹5,500/day package)',
      rateMobile: '₹24 / km',
      specs: [
        '2x1 executive pushback luxury seats',
        'Wide central aisle with standing headroom',
        'Music system, LED lighting & microphone setup',
        'Dedicated luggage storage compartments',
      ],
      idealFor: 'Navagraha pilgrimage groups & joint families',
    },
    {
      id: 'luxury-coach',
      name: 'Luxury AC Tourist Coach Bus',
      category: 'Bus Charter',
      image: '/images/vehicles/bus.png',
      seats: '36 / 49 Passengers',
      seatsMobile: '36 / 49 Seats',
      luggage: 'Spacious Underbody Cargo Compartment',
      luggageMobile: 'Underbody Cargo',
      ac: 'High-Capacity Climate AC',
      acMobile: 'Climate AC',
      rate: 'Custom Charter Tariff by Route',
      rateMobile: 'Custom Quote',
      specs: [
        'Air suspension chassis for long distance ride',
        'Multi-angle reclining high-back seats',
        'Emergency exits & GPS speed tracking',
        'All South India tourist permits enabled',
      ],
      idealFor: 'Weddings, college tours & group travel',
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {fleetTypes.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-xl p-3 sm:p-5 flex flex-col justify-between hover:shadow-md hover:border-brand-gold-dark/50 transition-all duration-300 active:scale-95 group"
              >
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[9px] sm:text-xs font-bold text-brand-gold-dark bg-brand-gold/10 px-1.5 sm:px-2 py-0.5 rounded whitespace-nowrap">
                      {item.capacity}
                    </span>
                    <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-brand-gold-dark transition-colors shrink-0" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold font-heading text-neutral-900 group-hover:text-brand-gold-dark transition-colors truncate whitespace-nowrap">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-semibold text-neutral-700 truncate whitespace-nowrap">
                    {item.model}
                  </p>
                  <p className="text-[9px] sm:text-xs text-neutral-500 leading-snug sm:leading-relaxed truncate whitespace-nowrap">
                    {item.bestFor}
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-neutral-100">
                  <button
                    onClick={() => onOpenBooking({ vehicle: item.title })}
                    className="w-full btn-gold py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1 cursor-pointer shadow-sm active:scale-95 transition-all whitespace-nowrap"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
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

        <div className="relative z-10 max-w-7xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-gold/20 pb-5 sm:pb-6 gap-3 sm:gap-4">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">
                Commercial Fleet Overview
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white">
                Available Vehicles & Specifications
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                Every vehicle is mechanically inspected, AC-tested, and chauffeur-driven across Tamil Nadu and South India.
              </p>
            </div>

            {/* Quick trust badge */}
            <div className="flex items-center gap-2 text-xs text-brand-gold bg-[#2d1e1a] border border-brand-gold/30 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg shrink-0 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span className="font-semibold text-neutral-200">100% Commercial Tourist Permits</span>
            </div>
          </div>

          {/* Category Filter Pills with Smooth Horizontal Scroll on Mobile */}
          <div className="flex items-center gap-2 pt-1 pb-2 overflow-x-auto no-scrollbar scroll-smooth flex-nowrap sm:flex-wrap">
            {fleetFilterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFleetFilter(tab.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
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
                  <div className="fleet-stage relative h-52 sm:h-64 w-full flex flex-col items-center justify-center p-4 sm:p-6 border-b border-white/10">
                    
                    {/* Background Radial Spotlight */}
                    <div className="absolute inset-0 bg-radial from-brand-gold/20 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    {/* Floating Studio Vehicle Image with Ground Shadow */}
                    <div className="relative z-10 w-full h-36 sm:h-44 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain fleet-car-image"
                        loading="lazy"
                      />
                    </div>

                    {/* Ambient Contact Ground Shadow */}
                    <div className="w-3/4 sm:w-2/3 h-2.5 sm:h-3 bg-black/80 rounded-full blur-sm mx-auto -mt-1 fleet-ground-shadow pointer-events-none"></div>

                    {/* Category Tag on Stage Top Left */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#1b100e]/90 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold text-brand-gold border border-brand-gold/40 shadow-sm whitespace-nowrap">
                      {item.category}
                    </div>

                    {/* Rate Tag on Stage Top Right */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-[#241815] to-[#180e0c] text-white text-[10px] sm:text-xs font-black font-heading px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg border border-brand-gold/50 shadow-md whitespace-nowrap">
                      <span className="hidden sm:inline">{item.rate}</span>
                      <span className="sm:hidden">{item.rateMobile || item.rate.split('(')[0].trim()}</span>
                    </div>
                  </div>

                  {/* Vehicle Details & Specifications */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-xl font-bold font-heading text-white group-hover:text-brand-gold transition-colors truncate whitespace-nowrap">
                        {item.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-brand-gold font-medium mt-0.5 sm:mt-1 truncate whitespace-nowrap">
                        {item.idealFor}
                      </p>
                    </div>

                    {/* 3 Key Metric Tiles (Single line fit in all datas) */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5 text-xs text-neutral-300 py-2.5 sm:py-3 border-y border-white/10">
                      <div className="bg-[#1f1310] border border-white/5 hover:border-brand-gold/40 rounded-lg p-2 sm:p-2.5 transition-colors flex flex-col gap-0.5 sm:gap-1 overflow-hidden">
                        <div className="flex items-center gap-1 sm:gap-1.5 text-brand-gold">
                          <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                          <span className="text-[9px] sm:text-[10px] uppercase font-bold text-neutral-400 whitespace-nowrap">Seats</span>
                        </div>
                        <span className="font-semibold text-white text-[10px] sm:text-xs truncate whitespace-nowrap">
                          <span className="sm:hidden">{item.seatsMobile || item.seats}</span>
                          <span className="hidden sm:inline">{item.seats}</span>
                        </span>
                      </div>

                      <div className="bg-[#1f1310] border border-white/5 hover:border-brand-gold/40 rounded-lg p-2 sm:p-2.5 transition-colors flex flex-col gap-0.5 sm:gap-1 overflow-hidden">
                        <div className="flex items-center gap-1 sm:gap-1.5 text-brand-gold">
                          <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                          <span className="text-[9px] sm:text-[10px] uppercase font-bold text-neutral-400 whitespace-nowrap">Luggage</span>
                        </div>
                        <span className="font-semibold text-white text-[10px] sm:text-xs truncate whitespace-nowrap">
                          <span className="sm:hidden">{item.luggageMobile || item.luggage}</span>
                          <span className="hidden sm:inline">{item.luggage}</span>
                        </span>
                      </div>

                      <div className="bg-[#1f1310] border border-white/5 hover:border-brand-gold/40 rounded-lg p-2 sm:p-2.5 transition-colors flex flex-col gap-0.5 sm:gap-1 overflow-hidden">
                        <div className="flex items-center gap-1 sm:gap-1.5 text-brand-gold">
                          <Wind className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                          <span className="text-[9px] sm:text-[10px] uppercase font-bold text-neutral-400 whitespace-nowrap">Comfort</span>
                        </div>
                        <span className="font-semibold text-white text-[10px] sm:text-xs truncate whitespace-nowrap">
                          <span className="sm:hidden">{item.acMobile || item.ac}</span>
                          <span className="hidden sm:inline">{item.ac}</span>
                        </span>
                      </div>
                    </div>

                    {/* Specifications Checklist (Single-line fit with truncate) */}
                    <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-neutral-300 pt-0.5">
                      {item.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2 leading-tight truncate whitespace-nowrap">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                          <span className="truncate whitespace-nowrap">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Button with smooth slide */}
                <div className="p-4 sm:p-6 pt-0">
                  <button
                    onClick={() => onOpenBooking(item)}
                    className="w-full btn-gold py-2.5 sm:py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn whitespace-nowrap"
                  >
                    <span className="hidden sm:inline">Check Availability & Book {item.name.split(' ')[0]}</span>
                    <span className="sm:hidden">Book {item.name.split(' ')[0]} Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform shrink-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Tariff Schedule Table with Single-line Mobile & Desktop Alignment */}
      <section id="tariff-table" className="py-10 sm:py-20 px-3.5 sm:px-10 bg-[#FAF8F5] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-8 pb-4 sm:pb-5 border-b border-neutral-300 gap-3 sm:gap-4">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gold-dark block mb-1">
                Transparent Tariffs
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-neutral-900">
                Standard Tariff Schedule
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-xl">
                Transparent outstation per-km rates with verified drivers. Toll charges, parking fees, and interstate permits are billed as actuals.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold-dark bg-white border border-brand-gold/40 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg shadow-2xs shrink-0 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-brand-gold-dark shrink-0" />
              <span>No Hidden Charges • Clear Allowances</span>
            </div>
          </div>

          {/* Mobile Display Mode Switcher (Cards vs Table) */}
          <div className="flex md:hidden items-center justify-between mb-3 px-1">
            <span className="text-[11px] text-neutral-500 font-semibold">Tariff View:</span>
            <div className="inline-flex p-0.5 bg-neutral-200/90 rounded-lg text-[11px] font-bold">
              <button
                onClick={() => setTariffMobileMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                  tariffMobileMode === 'cards'
                    ? 'bg-[#241815] text-brand-gold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Cards</span>
              </button>
              <button
                onClick={() => setTariffMobileMode('table')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                  tariffMobileMode === 'table'
                    ? 'bg-[#241815] text-brand-gold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Table className="w-3 h-3" />
                <span>Table</span>
              </button>
            </div>
          </div>

          {/* 1. Dedicated Mobile-Optimized Tariff Cards (100% Single-Line Fit on Mobile) */}
          <div className={`md:hidden ${tariffMobileMode === 'cards' ? 'block' : 'hidden'} space-y-2.5 mb-6`}>
            {tariffs.map((t) => (
              <div 
                key={t.vehicle} 
                className="bg-white rounded-xl border border-brand-gold/35 p-3.5 shadow-sm space-y-2.5 transition-all"
              >
                {/* Row 1: Vehicle & Base Rate Single Line */}
                <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Car className="w-4 h-4 text-brand-gold-dark shrink-0" />
                    <span className="text-xs font-bold text-neutral-900 truncate whitespace-nowrap">{t.vehicle}</span>
                  </div>
                  <span className="bg-brand-gold/15 text-brand-gold-dark font-mono font-extrabold text-xs px-2.5 py-0.5 rounded-full border border-brand-gold/30 shrink-0 whitespace-nowrap">
                    {t.perKm}
                  </span>
                </div>

                {/* Row 2: 3 Metrics in Single-Line Row */}
                <div className="grid grid-cols-3 gap-1.5 text-center bg-[#FAF8F5] rounded-lg p-2 border border-neutral-100 text-[11px]">
                  <div className="truncate overflow-hidden">
                    <span className="text-[9px] uppercase font-bold text-neutral-400 block whitespace-nowrap">Min Km</span>
                    <span className="font-semibold text-neutral-800 whitespace-nowrap text-[11px]">{t.minKm.split('/')[0].trim()}</span>
                  </div>
                  <div className="truncate overflow-hidden border-x border-neutral-200 px-1">
                    <span className="text-[9px] uppercase font-bold text-neutral-400 block whitespace-nowrap">Driver Bata</span>
                    <span className="font-semibold text-neutral-800 whitespace-nowrap text-[11px]">{t.driverBata.replace(' / day', '/d')}</span>
                  </div>
                  <div className="truncate overflow-hidden">
                    <span className="text-[9px] uppercase font-bold text-neutral-400 block whitespace-nowrap">Night Halt</span>
                    <span className="font-semibold text-neutral-800 whitespace-nowrap text-[11px]">{t.nightCharge.split('(')[0].trim()}</span>
                  </div>
                </div>

                {/* Row 3: Single Line Booking Button */}
                <button
                  onClick={() => onOpenBooking({ vehicle: t.vehicle })}
                  className="w-full btn-gold py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-all whitespace-nowrap"
                >
                  <span>Book {t.vehicle.split('(')[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            ))}
          </div>

          {/* 2. Full Table Container (Always shown on desktop, toggleable on mobile with Single-Line Cells) */}
          <div className={`${tariffMobileMode === 'table' ? 'block' : 'hidden md:block'}`}>
            
            {/* Mobile Horizontal Swipe Indicator */}
            <div className="md:hidden flex items-center justify-between text-[11px] text-neutral-500 mb-2 px-1">
              <span>Swipe horizontally to view all columns</span>
              <span className="text-brand-gold-dark font-bold font-mono">⇄ Scroll</span>
            </div>

            <div className="p-[2px] rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold shadow-lg shadow-brand-gold/15">
              <div className="rounded-[calc(0.75rem-1px)] sm:rounded-[calc(1rem-1px)] overflow-hidden bg-white">
                
                <div className="overflow-x-auto no-scrollbar sm:scrollbar-thin">
                  <table className="w-full text-left border-collapse">
                    
                    {/* Rich Dark Header with Single-line fit */}
                    <thead>
                      <tr className="bg-gradient-to-r from-[#201512] via-[#291b17] to-[#180e0c] text-white">
                        <th className="py-3 px-3.5 sm:py-4 sm:px-5 font-bold uppercase text-[10px] sm:text-[11px] tracking-wider text-brand-gold border-r border-white/10 whitespace-nowrap">
                          Vehicle Category
                        </th>
                        <th className="py-3 px-3.5 sm:py-4 sm:px-5 font-bold uppercase text-[10px] sm:text-[11px] tracking-wider text-brand-gold border-r border-white/10 whitespace-nowrap">
                          Base Tariff
                        </th>
                        <th className="py-3 px-3.5 sm:py-4 sm:px-5 font-bold uppercase text-[10px] sm:text-[11px] tracking-wider text-neutral-200 border-r border-white/10 whitespace-nowrap">
                          Min Km / Day
                        </th>
                        <th className="py-3 px-3.5 sm:py-4 sm:px-5 font-bold uppercase text-[10px] sm:text-[11px] tracking-wider text-neutral-200 border-r border-white/10 whitespace-nowrap">
                          Driver Bata
                        </th>
                        <th className="py-3 px-3.5 sm:py-4 sm:px-5 font-bold uppercase text-[10px] sm:text-[11px] tracking-wider text-neutral-200 border-r border-white/10 whitespace-nowrap">
                          Night Halt
                        </th>
                        <th className="py-3 px-3.5 sm:py-4 sm:px-5 font-bold uppercase text-[10px] sm:text-[11px] tracking-wider text-brand-gold text-center whitespace-nowrap">
                          Action
                        </th>
                      </tr>
                    </thead>

                    {/* Body with Single-line fit for all data cells */}
                    <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
                      {tariffs.map((t, idx) => (
                        <tr 
                          key={t.vehicle} 
                          className={`transition-colors duration-200 hover:bg-amber-50/70 ${
                            idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]/80'
                          }`}
                        >
                          {/* Vehicle Category */}
                          <td className="py-3 px-3.5 sm:py-4 sm:px-5 font-bold text-neutral-900 border-r border-neutral-100 whitespace-nowrap">
                            <div className="flex items-center gap-2 sm:gap-2.5">
                              <Car className="w-4 h-4 text-brand-gold-dark shrink-0" />
                              <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">{t.vehicle}</span>
                            </div>
                          </td>

                          {/* Base Tariff Badge */}
                          <td className="py-3 px-3.5 sm:py-4 sm:px-5 border-r border-neutral-100 whitespace-nowrap">
                            <span className="inline-block bg-brand-gold/15 text-brand-gold-dark font-extrabold font-mono text-xs sm:text-sm px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-brand-gold/30 shadow-2xs whitespace-nowrap">
                              {t.perKm}
                            </span>
                          </td>

                          {/* Min Km */}
                          <td className="py-3 px-3.5 sm:py-4 sm:px-5 font-medium text-neutral-700 border-r border-neutral-100 whitespace-nowrap">
                            <span className="bg-neutral-100 text-neutral-800 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-xs font-semibold whitespace-nowrap">
                              {t.minKm}
                            </span>
                          </td>

                          {/* Driver Bata */}
                          <td className="py-3 px-3.5 sm:py-4 sm:px-5 font-semibold text-neutral-800 border-r border-neutral-100 whitespace-nowrap text-xs sm:text-sm">
                            {t.driverBata}
                          </td>

                          {/* Night Halt */}
                          <td className="py-3 px-3.5 sm:py-4 sm:px-5 text-neutral-600 border-r border-neutral-100 text-xs sm:text-sm whitespace-nowrap">
                            {t.nightCharge}
                          </td>

                          {/* Direct Booking CTA */}
                          <td className="py-3 px-3.5 sm:py-4 sm:px-5 text-center whitespace-nowrap">
                            <button
                              onClick={() => onOpenBooking({ vehicle: t.vehicle })}
                              className="btn-gold px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold inline-flex items-center gap-1 cursor-pointer shadow-sm hover:scale-105 active:scale-95 transition-transform whitespace-nowrap"
                            >
                              <span>Book</span>
                              <ArrowRight className="w-3 h-3 shrink-0" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>

                {/* Bottom Clarification Notice */}
                <div className="bg-[#FAF8F5] p-3 sm:p-4 border-t border-neutral-200 text-[11px] sm:text-xs text-neutral-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-brand-gold-dark font-bold font-mono">NOTE:</span>
                    <span>Garage-to-garage basis • 6:00 AM to 10:00 PM calendar day.</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-700 font-medium whitespace-nowrap">
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

        </div>
      </section>

    </div>
  );
}
