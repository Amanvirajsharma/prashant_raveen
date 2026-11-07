import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export const RamMandirSection: React.FC = () => {
  return (
    <section
      id="blessings"
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#160207] text-[#FFF9F0] overflow-hidden"
    >
      {/* Background Indian Wallpaper Motif */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A15B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Warm Golden Glow from Temple Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] bg-[#D9A441]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-devanagari text-xl sm:text-2xl text-[#D9A441] font-bold tracking-wide mb-2 drop-shadow">
            {weddingData.sacredBlessings.shriRam}
          </p>
          <p className="font-devanagari text-sm sm:text-base text-[#F5E3BD] tracking-wider mb-2">
            ॥ सीय राममय सब जग जानी । करहुँ प्रनाम जोरि जुग पानी ॥
          </p>
          
          <div className="flex items-center justify-center gap-3 w-44 mx-auto my-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <span className="text-[#C5A15B] text-base">𑁍</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight">
            Divine Grace &amp; Sacred Blessings
          </h2>
        </div>

        {/* The Architectural Temple Showcase Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative bg-gradient-to-b from-[#24050D] to-[#140206] border-2 border-[#C5A15B] rounded-3xl p-4 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          {/* Temple Pillar & Arch Accent Borders */}
          <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/40 rounded-2xl pointer-events-none" />
          
          {/* Corner Temple Motifs */}
          <span className="absolute top-4 left-4 text-[#C5A15B] text-xl">𑁍</span>
          <span className="absolute top-4 right-4 text-[#C5A15B] text-xl">𑁍</span>
          <span className="absolute bottom-4 left-4 text-[#C5A15B] text-xl">𑁍</span>
          <span className="absolute bottom-4 right-4 text-[#C5A15B] text-xl">𑁍</span>

          {/* Majestic Ram Mandir Artwork Display */}
          <div className="relative rounded-2xl overflow-hidden border border-[#C5A15B]/50 group shadow-2xl">
            <img
              src="/images/ram-mandir.jpg"
              alt="Shri Ram Mandir Ayodhya architectural artwork with golden evening diyas"
              className="w-full h-[340px] sm:h-[480px] md:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            {/* Subtle Gradient Veil for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#140206] via-transparent to-black/30 pointer-events-none" />

            {/* Glowing Temple Steps Diyas Accent Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <div className="w-4 h-6 bg-gradient-to-t from-[#FFA500] via-[#FFD700] to-white rounded-full diya-flame shadow-glow-diya" />
                <span className="font-serif italic text-xs text-[#F5E3BD] tracking-wider hidden sm:inline drop-shadow">
                  Ayodhya Dham
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif italic text-xs text-[#F5E3BD] tracking-wider hidden sm:inline drop-shadow">
                  Eternal Grace
                </span>
                <div className="w-4 h-6 bg-gradient-to-t from-[#FFA500] via-[#FFD700] to-white rounded-full diya-flame shadow-glow-diya" />
              </div>
            </div>
          </div>

          {/* Hindi Blessing Card */}
          <div className="mt-8 text-center px-4 max-w-2xl mx-auto">
            <div className="inline-block p-6 sm:p-8 bg-[#330712]/90 backdrop-blur-sm border-2 border-[#C5A15B]/70 rounded-2xl shadow-inner">
              <p className="font-devanagari text-2xl sm:text-3xl md:text-4xl text-[#F5E3BD] font-bold leading-relaxed whitespace-pre-line tracking-wide drop-shadow-md">
                &ldquo;{weddingData.sacredBlessings.templeBlessing}&rdquo;
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-[#D9A441] mt-3 tracking-widest uppercase">
                With the divine grace of Prabhu Shri Ram, two souls embark on their sacred journey into forever.
              </p>
            </div>
          </div>

          {/* Sacred Values / Shloka Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#C5A15B]/30 text-center">
            <div className="p-3">
              <span className="text-[#D9A441] font-devanagari text-lg font-bold block">सत्य एवं धर्म</span>
              <span className="font-serif text-xs text-[#F2DDD6]/90 tracking-wider">Truth &amp; Righteousness</span>
            </div>
            <div className="p-3 border-y sm:border-y-0 sm:border-x border-[#C5A15B]/30">
              <span className="text-[#D9A441] font-devanagari text-lg font-bold block">प्रेम एवं समर्पण</span>
              <span className="font-serif text-xs text-[#F2DDD6]/90 tracking-wider">Love &amp; Devotion</span>
            </div>
            <div className="p-3">
              <span className="text-[#D9A441] font-devanagari text-lg font-bold block">अटूट विश्वास</span>
              <span className="font-serif text-xs text-[#F2DDD6]/90 tracking-wider">Eternal Trust</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
