import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function QuickBookingBar({ onOpenBooking }) {
  const [pickupCity, setPickupCity] = useState('Thanjavur');
  const [destinationCity, setDestinationCity] = useState('Kumbakonam Navagraha Circuit');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState('4-7 Persons (Innova Crysta)');

  const todayStr = new Date().toISOString().split('T')[0];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    onOpenBooking({ pickupCity, destinationCity, travelDate, passengers });
  };

  return (
    <section className="relative z-20 py-3.5 sm:py-8 px-3 sm:px-10 bg-[#FAF8F5] border-b border-neutral-200">
      <div className="max-w-md lg:max-w-7xl mx-auto">
        <div className="bg-[#241815] rounded-xl sm:rounded-2xl border border-brand-gold/35 p-3 sm:p-7 shadow-xl relative overflow-hidden">
          
          {/* Subtle Top Gold Shimmer Line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80"></div>
          
          {/* Header Row */}
          <div className="pb-2 mb-2.5 sm:pb-4 sm:mb-5 border-b border-white/10 space-y-0.5">
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-brand-gold block">
              Instant Fare & Availability Calculator
            </span>
            <h2 className="text-xs sm:text-lg font-bold font-heading text-white">
              Check Tariff & Reserve Your Travel Route
            </h2>
          </div>

          {/* Booking Inputs Grid (Compact 2-col on mobile, 5-col on desktop) */}
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4 items-end">
            <div className="col-span-1">
              <label className="block text-[10px] sm:text-xs font-semibold text-neutral-300 mb-1 sm:mb-1.5 flex items-center gap-1 sm:gap-1.5">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-gold shrink-0" /> 
                <span className="truncate">Pickup City</span>
              </label>
              <select
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className="w-full bg-[#18110f] border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold transition-colors truncate"
              >
                <option value="Thanjavur">Thanjavur</option>
                <option value="Trichy">Trichy</option>
                <option value="Kumbakonam">Kumbakonam</option>
                <option value="Madurai">Madurai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] sm:text-xs font-semibold text-neutral-300 mb-1 sm:mb-1.5 flex items-center gap-1 sm:gap-1.5">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-gold shrink-0" /> 
                <span className="truncate">Destination</span>
              </label>
              <select
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
                className="w-full bg-[#18110f] border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold transition-colors truncate"
              >
                <option value="Thanjavur Brihadisvara Temple Circuit">Thanjavur Circuit</option>
                <option value="Kumbakonam Navagraha Circuit">Kumbakonam Circuit</option>
                <option value="Trichy Srirangam & Rockfort">Trichy Srirangam</option>
                <option value="Madurai Meenakshi & Rameswaram">Madurai & Rameswaram</option>
                <option value="Coimbatore & Nilgiris">Coimbatore & Nilgiris</option>
                <option value="Chennai Local / Outstation">Chennai Outstation</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] sm:text-xs font-semibold text-neutral-300 mb-1 sm:mb-1.5 flex items-center gap-1 sm:gap-1.5">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-gold shrink-0" /> 
                <span className="truncate">Travel Date</span>
              </label>
              <input
                type="date"
                min={todayStr}
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-[#18110f] border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
              >
              </input>
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] sm:text-xs font-semibold text-neutral-300 mb-1 sm:mb-1.5 flex items-center gap-1 sm:gap-1.5">
                <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-gold shrink-0" /> 
                <span className="truncate hidden sm:inline">Passengers / Vehicle</span>
                <span className="truncate sm:hidden">Vehicle / Seats</span>
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full bg-[#18110f] border border-white/20 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold transition-colors truncate"
              >
                <option value="1-4 Persons (Sedan)">Sedan (1-4 Seater)</option>
                <option value="4-7 Persons (Innova Crysta)">Innova (4-7 Seater)</option>
                <option value="8-14 Persons (Tempo Traveller)">Tempo (8-14 Seater)</option>
                <option value="15-26 Persons (Mini Bus)">Mini Bus (15-26)</option>
                <option value="27-50 Persons (Coach Bus)">Coach Bus (27-50)</option>
              </select>
            </div>

            <div className="col-span-2 lg:col-span-1 pt-0.5 sm:pt-0">
              <button
                type="submit"
                className="w-full btn-gold py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-md hover:shadow-brand-gold/30 active:scale-95 transition-all group/btn"
              >
                <span>Check Tariff</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
