import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export const CoupleSection: React.FC = () => {
  const { groom, bride, storyIntro } = weddingData.couple;

  return (
    <section id="couple-section" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF5EC] text-[#33251F] overflow-hidden">
      
      {/* Background Indian Parchment Texture */}
      <div className="absolute inset-0 bg-parchment opacity-70 pointer-events-none" />

      {/* Decorative Golden Corner Motifs */}
      <div className="absolute top-10 left-10 text-8xl text-[#C5A15B]/10 select-none pointer-events-none">𑁍</div>
      <div className="absolute bottom-10 right-10 text-8xl text-[#C5A15B]/10 select-none pointer-events-none">𑁍</div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-devanagari text-base sm:text-lg text-[#5A0E1F] font-semibold mb-2">
            ॥ मांगल्यं तन्तुनानेना मम जीवनहेतुना ॥
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D] uppercase tracking-widest mb-1">
            The Royal Couple
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A0E1F] tracking-tight">
            Meet The Bride &amp; Groom
          </h2>
          
          <div className="flex items-center justify-center gap-3 w-40 mx-auto my-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <span className="text-[#C5A15B] text-sm">❦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>

          <p className="font-serif italic text-base sm:text-lg text-[#5C4A42] leading-relaxed max-w-xl mx-auto">
            &ldquo;{storyIntro}&rdquo;
          </p>
        </div>

        {/* The Couple Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Groom: Prashant Chouhan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center text-center group"
          >
            {/* Grand Cream & Gold Jharokha Arch Frame */}
            <div className="relative p-2.5 bg-gradient-to-b from-[#C5A15B] via-[#E8CA85] to-[#8C6D2D] rounded-[150px_150px_24px_24px] shadow-card-lux mb-8 max-w-sm w-full">
              <div className="relative rounded-[146px_146px_20px_20px] overflow-hidden bg-[#FFF9F0] border-2 border-[#FFFDF9]">
                <img
                  src={groom.photo}
                  alt={`Portrait of groom ${groom.fullName}`}
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Bottom title gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2A050D]/90 via-[#2A050D]/50 to-transparent flex items-end justify-center pb-5">
                  <span className="text-xs uppercase tracking-widest font-serif text-[#F5E3BD] font-bold">
                    {groom.title} • वर
                  </span>
                </div>
              </div>

              {/* Bottom Traditional Auspicious Medallion */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#5A0E1F] border-2 border-[#C5A15B] flex items-center justify-center text-[#F5E3BD] text-xs font-bold shadow-md">
                卐
              </div>
            </div>

            {/* Groom Details */}
            <span className="font-devanagari text-sm font-bold text-[#8C6D2D] mb-0.5">
              {groom.hindiName}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A0E1F] mb-1">
              {groom.fullName}
            </h3>
            <p className="font-serif italic text-sm text-[#8C6D2D] mb-3">
              Son of {groom.parents}
            </p>
            <p className="text-xs text-[#5C4A42] font-sans font-light max-w-sm leading-relaxed mb-4">
              {groom.bio}
            </p>
          </motion.div>

          {/* Bride: Raveena Panwar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Grand Cream & Gold Jharokha Arch Frame */}
            <div className="relative p-2.5 bg-gradient-to-b from-[#C5A15B] via-[#E8CA85] to-[#8C6D2D] rounded-[150px_150px_24px_24px] shadow-card-lux mb-8 max-w-sm w-full">
              <div className="relative rounded-[146px_146px_20px_20px] overflow-hidden bg-[#FFF9F0] border-2 border-[#FFFDF9]">
                <img
                  src={bride.photo}
                  alt={`Portrait of bride ${bride.fullName}`}
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Bottom title gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2A050D]/90 via-[#2A050D]/50 to-transparent flex items-end justify-center pb-5">
                  <span className="text-xs uppercase tracking-widest font-serif text-[#F5E3BD] font-bold">
                    {bride.title} • वधू
                  </span>
                </div>
              </div>

              {/* Bottom Traditional Auspicious Medallion */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#5A0E1F] border-2 border-[#C5A15B] flex items-center justify-center text-[#F5E3BD] text-xs font-bold shadow-md">
                卐
              </div>
            </div>

            {/* Bride Details */}
            <span className="font-devanagari text-sm font-bold text-[#8C6D2D] mb-0.5">
              {bride.hindiName}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A0E1F] mb-1">
              {bride.fullName}
            </h3>
            <p className="font-serif italic text-sm text-[#8C6D2D] mb-3">
              Daughter of {bride.parents}
            </p>
            <p className="text-xs text-[#5C4A42] font-sans font-light max-w-sm leading-relaxed mb-4">
              {bride.bio}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
