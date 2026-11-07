import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Prashant & Raveena's Royal Wedding");
    const details = encodeURIComponent("Join us in celebrating the holy union of Prashant Chouhan and Raveena Panwar with the divine blessings of Shri Ram.");
    const location = encodeURIComponent("Royal Heritage Garden, Shamla Hills, Bhopal, Madhya Pradesh");
    const dates = "20261126T143000Z/20261126T203000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 bg-[#FAF5EC] text-[#33251F] overflow-hidden"
    >
      {/* Background Indian Wallpaper Lattice Motif */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A15B_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Atmospheric Golden Aura Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#D9A441]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Royal Temple Pavilion Frame */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FFFDF9] border-2 border-[#C5A15B] rounded-3xl p-8 sm:p-14 shadow-card-lux overflow-hidden"
        >
          {/* Inner Inset Antique Gold Border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/40 rounded-2xl pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 border border-[#C5A15B]/20 rounded-xl pointer-events-none" />

          {/* Four Traditional Indian Corner Ornaments */}
          <span className="absolute top-4 left-4 text-[#C5A15B] text-xl select-none">𑁍</span>
          <span className="absolute top-4 right-4 text-[#C5A15B] text-xl select-none">𑁍</span>
          <span className="absolute bottom-4 left-4 text-[#C5A15B] text-xl select-none">𑁍</span>
          <span className="absolute bottom-4 right-4 text-[#C5A15B] text-xl select-none">𑁍</span>

          {/* Top Auspicious Symbol & Sacred Invocations */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#FAF5EC] border-2 border-[#C5A15B] flex items-center justify-center shadow-sm mb-3">
              <span className="font-devanagari text-lg font-bold text-[#5A0E1F]">卐</span>
            </div>
            
            <p className="font-devanagari text-xl sm:text-2xl font-bold text-[#5A0E1F] tracking-wider">
              {weddingData.sacredBlessings.ganesh}
            </p>
            <p className="font-devanagari text-xs sm:text-sm text-[#8C6D2D] mt-1 tracking-wide">
              ॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D] tracking-widest uppercase mt-3">
              {weddingData.couple.tagline}
            </p>
          </div>

          {/* Floral Divider */}
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <span className="text-[#C5A15B] text-sm">❦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>

          {/* Grand Couple Names */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#5A0E1F] leading-none mb-3">
            <span className="block sm:inline">{weddingData.couple.groom.firstName}</span>
            <span className="block sm:inline font-script font-normal text-3xl sm:text-5xl md:text-6xl text-[#C5A15B] mx-2 sm:mx-4">
              &amp;
            </span>
            <span className="block sm:inline">{weddingData.couple.bride.firstName}</span>
          </h1>

          {/* Poetic Invitation Line */}
          <p className="font-serif italic text-base sm:text-xl text-[#5C4A42] max-w-xl mx-auto my-6 leading-relaxed">
            &ldquo;{weddingData.couple.invitationQuote}&rdquo;
          </p>

          {/* Auspicious Wedding Meta Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-8">
            <div className="flex items-center gap-2.5 bg-[#FAF5EC] border border-[#C5A15B]/60 px-5 py-2.5 rounded-full">
              <Calendar className="w-4 h-4 text-[#C5A15B]" />
              <span className="font-serif font-bold text-[#5A0E1F] text-sm sm:text-base">
                {weddingData.date.weddingDayDisplay}
              </span>
              <span className="text-xs text-[#8C6D2D] font-sans">({weddingData.date.dayOfWeek})</span>
            </div>

            <div className="flex items-center gap-2.5 bg-[#FAF5EC] border border-[#C5A15B]/60 px-5 py-2.5 rounded-full">
              <MapPin className="w-4 h-4 text-[#C5A15B]" />
              <span className="font-serif font-bold text-[#5A0E1F] text-sm sm:text-base">
                Bhopal, Madhya Pradesh
              </span>
            </div>
          </div>

          {/* Royal Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="#events"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#D9A441] via-[#F7E7CE] to-[#C5A15B] hover:from-[#F7E7CE] hover:to-[#D9A441] text-[#2A050D] font-serif text-sm uppercase tracking-wider font-bold shadow-royal-gold border border-[#C5A15B] transition-all transform hover:-translate-y-0.5"
            >
              मांगलिक प्रसंग • Celebrations
            </a>

            <button
              onClick={handleAddToCalendar}
              className="px-6 py-3 rounded-full bg-[#5A0E1F] hover:bg-[#721529] text-[#FFF9F0] font-serif text-sm uppercase tracking-wider font-semibold border border-[#C5A15B] shadow-sm transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D9A441]" />
              <span>Save The Date</span>
            </button>
          </div>

        </motion.div>

        {/* Scroll indicator pointing to Ram Mandir section */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href="#blessings"
            aria-label="Scroll to Ram Mandir blessings section"
            className="flex flex-col items-center text-[#8C6D2D] hover:text-[#5A0E1F] transition-colors group"
          >
            <span className="text-[11px] font-sans uppercase tracking-widest font-semibold mb-1">
              प्रभु श्री राम का दिव्य आशीर्वाद
            </span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
