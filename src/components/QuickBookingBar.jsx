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
    <section className="relative z-20 py-8 px-4 sm:px-10 bg-[#FAF8F5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#241815] rounded-2xl border border-brand-gold/35 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Top Gold Shimmer Line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80"></div>
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gold block">
                Instant Fare & Availability Calculator
              </span>
              <h2 className="text-base sm:text-lg font-bold font-heading text-white">
                Check Tariff & Reserve Your Travel Route
              </h2>
            </div>
            <div className="text-xs text-neutral-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All 38 Districts & South India Coverage</span>
            </div>
          </div>

          {/* Booking Inputs Grid */}
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Pickup City
              </label>
              <select
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className="w-full bg-[#18110f] border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
              >
                <option value="Thanjavur">Thanjavur</option>
                <option value="Trichy">Trichy</option>
                <option value="Kumbakonam">Kumbakonam</option>
                <option value="Madurai">Madurai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Destination
              </label>
              <select
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
                className="w-full bg-[#18110f] border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
              >
                <option value="Thanjavur Brihadisvara Temple Circuit">Thanjavur Temple Circuit</option>
                <option value="Kumbakonam Navagraha Circuit">Kumbakonam Navagraha Circuit</option>
                <option value="Trichy Srirangam & Rockfort">Trichy Srirangam & Rockfort</option>
                <option value="Madurai Meenakshi & Rameswaram">Madurai & Rameswaram</option>
                <option value="Coimbatore & Nilgiris">Coimbatore & Nilgiris</option>
                <option value="Chennai Local / Outstation">Chennai Local / Outstation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-gold" /> Travel Date
              </label>
              <input
                type="date"
                min={todayStr}
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-[#18110f] border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-brand-gold" /> Passengers / Vehicle
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full bg-[#18110f] border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
              >
                <option value="1-4 Persons (Sedan)">1 - 4 Persons (Sedan)</option>
                <option value="4-7 Persons (Innova Crysta)">4 - 7 Persons (Innova Crysta)</option>
                <option value="8-14 Persons (Tempo Traveller)">8 - 14 Persons (Tempo Traveller)</option>
                <option value="15-26 Persons (Mini Bus)">15 - 26 Persons (Mini Bus)</option>
                <option value="27-50 Persons (Coach Bus)">27 - 50 Persons (Coach Bus)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn-gold py-2.5 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-brand-gold/30 transition-all group/btn"
              >
                <span>Check Tariff</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
