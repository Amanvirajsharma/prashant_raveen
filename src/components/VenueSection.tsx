import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const { venues } = weddingData;
  const [activeVenueIdx, setActiveVenueIdx] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const activeVenue = venues[activeVenueIdx];

  const handleCopyAddress = (address: string, idx: number) => {
    navigator.clipboard.writeText(address);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2500);
  };

  return (
    <section id="venues" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF5EC] text-[#33251F] overflow-hidden">
      
      {/* Background Motif */}
      <div className="absolute inset-0 bg-parchment opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-devanagari text-base sm:text-lg text-[#5A0E1F] font-semibold mb-1">
            ॥ शुभ विवाह स्थल ॥
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D] uppercase tracking-widest mb-1">
            Royal Destinations
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A0E1F] tracking-tight">
            Wedding Venues
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto my-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <span className="text-[#C5A15B] text-sm">❦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>

          <p className="font-serif text-base text-[#5C4A42] max-w-lg mx-auto leading-relaxed">
            All our celebrations are hosted at iconic heritage destinations across Bhopal, ensuring comfort and grand royal hospitality.
          </p>
        </div>

        {/* Venue Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {venues.map((venue, idx) => (
            <button
              key={venue.name}
              onClick={() => setActiveVenueIdx(idx)}
              className={`px-5 py-2.5 rounded-full font-serif text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeVenueIdx === idx
                  ? 'bg-[#5A0E1F] text-[#FFF9F0] font-bold shadow-royal border border-[#C5A15B]'
                  : 'bg-[#FFFDF9] text-[#33251F] border border-[#C5A15B]/50 hover:bg-[#FFF9F0]'
              }`}
            >
              {venue.name}
            </button>
          ))}
        </div>

        {/* Active Venue Showcase Card (Royal Cream) */}
        <motion.div
          key={activeVenue.name}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFDF9] border-2 border-[#C5A15B] rounded-3xl p-6 sm:p-10 shadow-card-lux"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Venue Image */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#C5A15B]/60 shadow-xl relative group aspect-[16/10]">
              <img
                src={activeVenue.image}
                alt={activeVenue.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 rounded-full bg-[#5A0E1F]/90 text-[#F5E3BD] font-serif text-xs uppercase tracking-wider font-semibold border border-[#C5A15B] shadow-md">
                  {activeVenue.tag}
                </span>
              </div>
            </div>

            {/* Right: Venue Information & Navigation */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-serif italic text-xs text-[#8C6D2D] uppercase tracking-widest block mb-1">
                  Destination Details
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5A0E1F] mb-3">
                  {activeVenue.name}
                </h3>
                <p className="text-sm text-[#5C4A42] leading-relaxed mb-6 font-sans">
                  {activeVenue.description}
                </p>

                {/* Full Address Box */}
                <div className="bg-[#FAF5EC] border border-[#C5A15B]/40 rounded-2xl p-4 mb-6 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#5A0E1F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif font-bold text-[#33251F] block text-base">Full Address:</span>
                      <p className="text-[#5C4A42] text-xs sm:text-sm mt-1 leading-relaxed">
                        {activeVenue.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={activeVenue.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#5A0E1F] hover:bg-[#721529] text-[#FFF9F0] font-serif text-xs uppercase tracking-wider font-bold shadow-royal border border-[#C5A15B]/60 transition-transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4 text-[#D9A441]" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={() => handleCopyAddress(activeVenue.address, activeVenueIdx)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-[#C5A15B] text-[#5A0E1F] hover:bg-[#FAF5EC] font-serif text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  title="Copy address to clipboard"
                >
                  {copiedIdx === activeVenueIdx ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8C6D2D]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
