import React, { useState } from 'react';
import PackagesHero from '../components/PackagesHero';
import MobilePackagesHero from '../components/mobile/MobilePackagesHero';
import { Clock, Users, ArrowRight, Check, MapPin, Compass } from 'lucide-react';

export default function PackagesPage({ onOpenBooking }) {
  const [filter, setFilter] = useState('all');
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const packages = [
    {
      id: 'thanjavur-royal-heritage',
      city: 'Thanjavur',
      category: 'heritage',
      tag: 'Palace Arts & Royal Chola Heritage',
      title: 'Thanjavur Royal Palace, Bronze Masters & Chola Arts Trail',
      location: 'Thanjavur & Cauvery Delta',
      duration: '2 Days / 1 Night',
      groupSize: 'Family / Private Group',
      image: '/images/destinations/thanjavur.jpg',
      price: 'From ₹7,800',
      highlights: [
        'Maratha Royal Palace complex, Durbar Hall & Royal Museum',
        'Asia’s historic Saraswathi Mahal ancient palm-leaf manuscript library',
        'Bronze casting ateliers & genuine Tanjore gold-leaf painting studios',
        'Brihadisvara UNESCO Monument with serene evening courtyard breeze',
      ],
      includes: 'AC Vehicle, Experienced Chauffeur, Fuel & Driver Bata',
    },
    {
      id: 'trichy-kallanai-rockfort',
      city: 'Trichy',
      category: 'riverway',
      tag: '2nd-Century Dam & River Panorama',
      title: 'Trichy Kaveri Riverway, Historic Kallanai & Rockfort Summit',
      location: 'Tiruchirappalli & Kaveri Riverfront',
      duration: '1 Full Day Tour',
      groupSize: '1 to 20 Passengers',
      image: '/images/destinations/trichy.jpg',
      price: 'From ₹4,200',
      highlights: [
        'Kallanai (Grand Anicut) - 2nd Century AD Roman-era water diversion marvel',
        'Uchchi Pillayar 83m Rockfort summit with 360° panoramic Kaveri river view',
        'Asia’s largest tropical Butterfly Park & Mukkombu river picnic gardens',
        'Srirangam heritage island promenade and authentic Trichy banana-leaf feast',
      ],
      includes: 'AC Vehicle, Fuel, Driver Allowance, Flexible Photo Stops',
    },
    {
      id: 'kumbakonam-crafts-delta',
      city: 'Kumbakonam',
      category: 'artisans',
      tag: 'Silk Looms & Bronze Masters',
      title: 'Kumbakonam Delta Village Trail, Silk Weavers & Bronze Casting',
      location: 'Kumbakonam, Swamimalai & Darasuram',
      duration: '2 Days / 1 Night',
      groupSize: 'Couples / Families / Groups',
      image: '/images/destinations/kumbakonam.jpg',
      price: 'From ₹8,900',
      highlights: [
        'Swamimalai lost-wax bronze casting studios (GI-Tagged craftsmanship)',
        'Thirubuvanam pure silk saree handloom weaving workshops',
        'Authentic Kumbakonam brass vessel bazaars & degree filter coffee trail',
        'Mahamaham 6.2-acre historic tank & Darasuram stone sculptures',
      ],
      includes: 'AC Sedan / Innova / Urbania, Fuel, Chauffeur Allowance',
    },
    {
      id: 'madurai-food-palace',
      city: 'Madurai',
      category: 'culinary',
      tag: 'Food Capital & Night Bazaars',
      title: 'Madurai Night City Walk, Nayakkar Palace & Culinary Trail',
      location: 'Madurai "Thoonga Nagaram"',
      duration: '2 Days / 1 Night',
      groupSize: 'All Group Sizes',
      image: '/images/destinations/madurai.jpg',
      price: 'From ₹8,500',
      highlights: [
        'Thirumalai Nayakkar Palace Indo-Saracenic royal courtyard & light show',
        'Famous Madurai culinary crawl: Jigarthanda, Bun Parotta, Kari Dosa & Idli',
        'Fragrant Madurai Malli (Jasmine flower market) & banana bazaar walk',
        'Historic Meenakshi concentric lotus-city architecture & Gandhi Museum',
      ],
      includes: 'AC Vehicle, Fuel, Dedicated Chauffeur, Driver Bata',
    },
    {
      id: 'coimbatore-valparai-ghats',
      city: 'Coimbatore',
      category: 'nature',
      tag: 'Sweet Waters & 40-Hairpin Tea Trails',
      title: 'Coimbatore Western Ghats, Siruvani Waters & Valparai Tea Trails',
      location: 'Coimbatore, Siruvani & Valparai',
      duration: '3 Days / 2 Nights',
      groupSize: 'Families / Couples',
      image: '/images/destinations/coimbatore.jpg',
      price: 'From ₹15,200',
      highlights: [
        'Siruvani Waterfalls & reservoir (renowned as world’s 2nd sweetest water)',
        'Thrilling 40-hairpin mountain climb up to misty Valparai tea plantations',
        'Isha Yoga Center & iconic 112-foot Adiyogi statue at the Velliangiri foothills',
        'Anamalai Tiger Reserve foothills safari & peaceful scenic viewpoints',
      ],
      includes: 'AC Vehicle with Certified Hill Chauffeur, Fuel & Hill Permit',
    },
    {
      id: 'chennai-coastal-mahabs',
      city: 'Chennai',
      category: 'coastal',
      tag: 'Coastal Scenic Drive & Living Heritage',
      title: 'Chennai Coromandel Coast, UNESCO Shore Reliefs & Marina Promenade',
      location: 'Chennai & East Coast Road (ECR)',
      duration: '2 Days / 1 Night',
      groupSize: '1 to 40 Passengers',
      image: '/images/destinations/chennai.jpg',
      price: 'From ₹8,900',
      highlights: [
        'Marina Beach sunrise promenade (world’s 2nd longest natural urban beach)',
        'Mahabalipuram 7th-century rock reliefs, Shore Temple & Pancha Rathas',
        'Historic Fort St. George (built 1644) & colonial heritage trail',
        'DakshinaChitra Living Heritage Museum of South Indian architecture',
      ],
      includes: 'AC Vehicle, Fuel, ECR Toll Guidelines, Driver Allowance',
    },
    {
      id: 'tamilnadu-grand-circuit',
      city: 'Multi-City',
      category: 'grand',
      tag: 'Complete 6-City Expedition',
      title: 'Grand South Tamil Nadu Heritage, Nature & Coastal Tour',
      location: 'Thanjavur • Trichy • Madurai • Coimbatore • Chennai',
      duration: '6 Days / 5 Nights',
      groupSize: 'Family / Corporate / Group',
      image: '/images/backgrounds/packages-bg.jpg',
      price: 'Custom Tariff',
      highlights: [
        'Seamless luxury chauffeured itinerary across all 6 premier Tamil Nadu hubs',
        'Comprehensive mix: palaces, 2nd-century dams, silk weavers, food walks & tea hills',
        'Doorstep airport or railway station pickup and drop in any selected city',
        'Dedicated vehicle assigned exclusively to your group for the entire duration',
      ],
      includes: 'Private AC Fleet, Dedicated Chauffeur, All Inter-City Permits & Bata',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All City Tours' },
    { id: 'heritage', label: 'Palace & Royal Heritage' },
    { id: 'riverway', label: 'Riverway & Engineering' },
    { id: 'artisans', label: 'Artisans & Silk Delta' },
    { id: 'culinary', label: 'Food & Night Bazaars' },
    { id: 'nature', label: 'Western Ghats & Tea' },
    { id: 'coastal', label: 'Coastal Coromandel' },
    { id: 'grand', label: 'Grand Multi-City' },
  ];

  const filtered = filter === 'all' 
    ? packages 
    : packages.filter((p) => p.category === filter);

  return (
    <div className="pb-16 md:pb-0">
      {/* 1. Dedicated Mobile Hero View (< 768px) */}
      <div className="block md:hidden">
        <MobilePackagesHero onOpenBooking={onOpenBooking} />
      </div>

      {/* 2. Dedicated Desktop Hero View (>= 768px) with Tamil Nadu 3D Map */}
      <div className="hidden md:block">
        <PackagesHero onOpenBooking={onOpenBooking} />
      </div>

      {/* 2. Filter Tabs & Listing */}
      <section className="py-10 sm:py-16 px-4 sm:px-10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Introduction */}
          <div className="mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-gold-dark block mb-1">
              Authentic Regional Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-neutral-900">
              Explore Tamil Nadu City Tours
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              From Cauvery river dams and silk-weaving delta hamlets to highland tea valleys and coastal colonial forts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-10 border-b border-neutral-300 pb-4 sm:pb-5">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'btn-gold shadow-md'
                    : 'bg-white border border-neutral-300 text-neutral-700 hover:border-brand-gold-dark hover:text-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Animated Tour Packages Grid with Full-Card Click 3D Flip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => toggleFlip(pkg.id)}
                className="flip-card-perspective min-h-[475px] sm:h-[495px] cursor-pointer group"
                title="Click card to flip"
              >
                <div className={`flip-card-inner ${flippedCards[pkg.id] ? 'is-flipped' : ''}`}>
                  
                  {/* FRONT FACE: Clean, Compact Overview (Click anywhere to flip) */}
                  <div className="flip-card-front flex flex-col justify-between h-full">
                    <div>
                      {/* Image Container with Ken Burns Zoom */}
                      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-neutral-950">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover image-zoom"
                          loading="lazy"
                        />
                        
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"></div>

                        {/* City Badge Top Left */}
                        <div className="absolute top-3.5 left-3.5 bg-[#241815]/90 backdrop-blur-md text-brand-gold text-[11px] font-bold tracking-wider px-3 py-1 rounded-full border border-brand-gold/30 shadow-md">
                          {pkg.city}
                        </div>

                        {/* Price Tag Top Right */}
                        <div className="absolute top-3.5 right-3.5 bg-gradient-to-r from-[#241815] to-[#180e0c] text-white text-xs font-black font-heading px-3 py-1 rounded-lg border border-brand-gold/50 shadow-md">
                          {pkg.price}
                        </div>

                        {/* Bottom overlay tag */}
                        <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                          <span className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider block truncate">
                            {pkg.tag}
                          </span>
                        </div>
                      </div>

                      {/* Front Card Content */}
                      <div className="p-5 space-y-3">
                        <div className="flex items-center gap-3 text-xs text-neutral-500">
                          <span className="flex items-center gap-1 font-semibold text-neutral-700">
                            <Clock className="w-3.5 h-3.5 text-brand-gold-dark" />
                            {pkg.duration}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-neutral-600">
                            <Users className="w-3.5 h-3.5 text-brand-gold-dark" />
                            {pkg.groupSize}
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold font-heading text-neutral-900 group-hover:text-brand-gold-dark transition-colors line-clamp-2">
                          {pkg.title}
                        </h3>
                        
                        <p className="text-xs text-neutral-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-brand-gold-dark shrink-0" />
                          <span>{pkg.location}</span>
                        </p>

                        <div className="text-[11px] text-neutral-500 font-medium flex items-center gap-1.5 pt-1">
                          <Check className="w-3 h-3 text-brand-gold-dark shrink-0" />
                          <span className="truncate">{pkg.includes}</span>
                        </div>

                        {/* Subtle Card Flip Prompt */}
                        <div className="flex items-center justify-between text-xs text-neutral-500 pt-2.5 border-t border-neutral-100">
                          <span className="text-[11px] text-brand-gold-dark font-semibold flex items-center gap-1.5">
                            <Compass className="w-3.5 h-3.5" />
                            <span>{pkg.highlights.length} Route Highlights</span>
                          </span>
                          <span className="text-[11px] text-neutral-400 font-medium group-hover:text-neutral-600 transition-colors">
                            Click card to flip
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Front Booking Button with generous bottom padding */}
                    <div className="p-5 pt-0 pb-5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking(pkg);
                        }}
                        className="w-full btn-gold py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn"
                      >
                        <span>Book This Tour</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* BACK FACE: Detailed Itinerary & Stops (Click anywhere to flip back) */}
                  <div className="flip-card-back p-5 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-2.5 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="bg-brand-gold/15 text-brand-gold-dark text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-brand-gold/30">
                            {pkg.city}
                          </span>
                          <span className="text-xs text-neutral-500 font-semibold">
                            {pkg.duration}
                          </span>
                        </div>

                        <span className="text-[11px] text-neutral-400 font-medium">
                          Click to flip back
                        </span>
                      </div>

                      {/* Back Subtitle */}
                      <div className="mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-dark block">
                          Route Itinerary
                        </span>
                        <h4 className="text-sm font-bold font-heading text-neutral-900 line-clamp-1">
                          Key Stops & Highlights
                        </h4>
                      </div>

                      {/* Detailed Highlights List */}
                      <div className="space-y-2 overflow-y-auto max-h-[225px] sm:max-h-[240px] pr-1 py-1">
                        {pkg.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-neutral-800 bg-white p-2.5 rounded-lg border border-neutral-200 shadow-2xs"
                          >
                            <span className="font-mono text-[10px] font-extrabold text-brand-gold-dark bg-brand-gold/15 border border-brand-gold/30 rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                              0{idx + 1}
                            </span>
                            <span className="leading-snug font-medium">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Inclusions & Actions */}
                    <div className="pt-2 border-t border-neutral-200/90 space-y-2.5 pb-1">
                      <div className="text-[11px] text-neutral-500 font-medium flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-brand-gold-dark shrink-0" />
                        <span className="truncate">{pkg.includes}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenBooking(pkg);
                          }}
                          className="w-full btn-gold py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn"
                        >
                          <span>Book This Tour</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Custom Package Consultation Banner */}
      <section 
        className="relative py-16 px-6 sm:px-10 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('/images/backgrounds/cta-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#241815]/75 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">
              Custom Itineraries
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">
              Need a Tailored Regional Route?
            </h3>
            <p className="text-xs text-neutral-300 mt-1">
              We customize multi-day itineraries for artisan visits, wildlife safaris, family holidays, and private group charters.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="btn-gold px-6 py-3 rounded-lg text-xs font-bold shrink-0 cursor-pointer shadow-lg"
          >
            Request Custom Quotation
          </button>
        </div>
      </section>
    </div>
  );
}
