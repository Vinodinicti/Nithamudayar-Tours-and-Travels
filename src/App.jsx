import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PackagesPage from './pages/PackagesPage';
import FleetPage from './pages/FleetPage';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import BookingModal from './components/BookingModal';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import MobileBottomNav from './components/mobile/MobileBottomNav';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setBookingInitialData(data);
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1E1E1E]">
        
        {/* Persistent Global Header */}
        <Header onOpenBooking={() => handleOpenBooking()} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/packages" element={<PackagesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/fleet" element={<FleetPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/destinations" element={<DestinationsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactPage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Persistent Global Footer */}
        <Footer 
          onOpenPrivacyPolicy={() => setIsPrivacyOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Mobile App Bottom Navigation Bar */}
        <MobileBottomNav onOpenBooking={() => handleOpenBooking()} />

        {/* Global Modals */}
        <PrivacyPolicyModal 
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
        />

        <BookingModal 
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialData={bookingInitialData}
        />

        {/* Single Floating WhatsApp Button */}
        <WhatsAppFloatingButton />

      </div>
    </BrowserRouter>
  );
}
