import React from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#FAF5EC] text-[#33251F] pt-16 pb-12 px-4 sm:px-6 border-t-2 border-[#C5A15B]/50 overflow-hidden">
      
      {/* Background Indian Motif */}
      <div className="absolute inset-0 bg-parchment opacity-70 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top of invitation"
          className="mb-8 w-11 h-11 rounded-full bg-[#FFFDF9] border-2 border-[#C5A15B] flex items-center justify-center text-[#5A0E1F] hover:bg-[#5A0E1F] hover:text-white transition-all transform hover:-translate-y-1 shadow-md cursor-pointer"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        {/* Sacred Vedic Closing Blessing */}
        <div className="mb-8 px-4 max-w-2xl">
          <p className="font-devanagari text-base sm:text-lg text-[#5A0E1F] font-semibold leading-relaxed mb-2">
            {weddingData.sacredBlessings.closingShloka}
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D]">
            {weddingData.sacredBlessings.closingEnglish}
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 w-48 mx-auto my-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
          <span className="text-[#C5A15B] text-xs">❦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
        </div>

        {/* Royal Monogram & Couple Identity */}
        <div className="w-12 h-12 rounded-full bg-[#FFFDF9] border-2 border-[#C5A15B] flex items-center justify-center text-[#5A0E1F] font-serif text-base font-bold shadow-md mb-3">
          P&amp;R
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-[#5A0E1F] mb-1">
          {weddingData.couple.groom.firstName} &amp; {weddingData.couple.bride.firstName}
        </h3>
        <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D] tracking-widest uppercase mb-4">
          {weddingData.date.weddingDayDisplay} • Bhopal, Madhya Pradesh
        </p>

        {/* Closing Sentiment */}
        <p className="font-serif italic text-sm text-[#5C4A42] flex items-center gap-1.5 justify-center mb-6">
          <span>Made with love for our special day</span>
          <Heart className="w-3.5 h-3.5 text-[#5A0E1F] fill-[#5A0E1F]" />
        </p>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#C5A15B]/30 w-full text-center">
          <p className="text-[11px] text-[#8C6D2D] font-sans">
            © 2026 Prashant &amp; Raveena. All rights reserved. Designed with royal heritage aesthetics.
          </p>
        </div>

      </div>
    </footer>
  );
};
