import React, { useState, useEffect } from 'react';
import { X, Send, Check } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: 'Thanjavur',
    destination: '',
    date: '',
    vehicle: 'Toyota Innova Crysta',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        pickup: initialData.pickupCity || prev.pickup,
        destination: initialData.destinationCity || initialData.title || initialData.city || prev.destination,
        date: initialData.travelDate || prev.date,
        vehicle: initialData.name || initialData.passengers || prev.vehicle,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = `*Booking Enquiry - Nithamudayar Tours and Travels*%0A• Name: ${formData.name}%0A• Phone: ${formData.phone}%0A• Pickup: ${formData.pickup}%0A• Destination: ${formData.destination}%0A• Date: ${formData.date}%0A• Vehicle: ${formData.vehicle}%0A• Notes: ${formData.notes || 'None'}`;

    setTimeout(() => {
      window.open(`https://wa.me/919894116405?text=${msg}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#241815] border border-brand-gold/30 rounded-xl shadow-2xl p-6 sm:p-8 text-white">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
            Trip Enquiry
          </span>
          <h2 className="text-xl font-bold font-heading text-white">
            Book Vehicle / Package
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Complete the details below. Our booking manager will reply with tariff & vehicle options.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <p className="text-base font-bold text-white">Connecting to WhatsApp Desk...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#18110f] border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-gold text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#18110f] border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-gold text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Pickup City *
                </label>
                <select
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  className="w-full bg-[#18110f] border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-gold text-xs"
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
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Destination *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kumbakonam / Madurai"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-[#18110f] border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-gold text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Travel Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#18110f] border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-gold text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Vehicle Type *
                </label>
                <select
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full bg-[#18110f] border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-gold text-xs"
                >
                  <option value="Swift Dzire (4+1 Sedan)">Swift Dzire (4+1 Sedan)</option>
                  <option value="Toyota Innova Crysta (6+1 SUV)">Toyota Innova Crysta (6+1 SUV)</option>
                  <option value="Force Tempo Traveller (12/17)">Force Tempo Traveller (12/17)</option>
                  <option value="Luxury Coach Bus (36/49)">Luxury Coach Bus (36/49)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Trip Details / Special Requests
              </label>
              <textarea
                rows="2"
                placeholder="Number of days, pickup point, one-way or round trip..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#18110f] border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-gold text-xs"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full btn-gold py-2.5 rounded-md font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Booking Enquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
