import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export const FamilySection: React.FC = () => {
  const { families } = weddingData;

  return (
    <section id="family" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF5EC] text-[#33251F] overflow-hidden">
      
      {/* Background Motif */}
      <div className="absolute inset-0 bg-parchment opacity-70 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-devanagari text-lg sm:text-xl text-[#5A0E1F] font-semibold mb-2">
            ॥ स्नेह निमंत्रण एवं अग्रज आशीर्वाद ॥
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#5A0E1F]">
            With Blessings Of Our Families
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto my-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <span className="text-[#C5A15B] text-sm">𑁍</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>

          <p className="font-devanagari text-base sm:text-lg text-[#33251F] mb-3 leading-relaxed">
            &ldquo;{families.hindiIntro}&rdquo;
          </p>
          <p className="font-serif italic text-sm sm:text-base text-[#5C4A42] max-w-xl mx-auto">
            {families.invitationIntro}
          </p>
        </div>

        {/* Two Families Cards Grid (Royal Cream) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Groom's Family: Chouhan Family */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#FFFDF9] border-2 border-[#C5A15B] rounded-3xl p-8 sm:p-10 shadow-card-lux text-center flex flex-col justify-between"
          >
            {/* Inset Gold Border */}
            <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/30 rounded-2xl pointer-events-none" />
            <span className="absolute top-4 left-4 text-[#C5A15B] text-xs">❖</span>
            <span className="absolute top-4 right-4 text-[#C5A15B] text-xs">❖</span>
            <span className="absolute bottom-4 left-4 text-[#C5A15B] text-xs">❖</span>
            <span className="absolute bottom-4 right-4 text-[#C5A15B] text-xs">❖</span>

            <div>
              <div className="w-12 h-12 rounded-full bg-[#FAF5EC] border-2 border-[#C5A15B] mx-auto flex items-center justify-center text-[#5A0E1F] font-serif text-lg font-bold mb-4 shadow-sm">
                C
              </div>

              <span className="font-serif italic text-xs text-[#8C6D2D] tracking-widest uppercase block mb-1">
                Groom&apos;s Family
              </span>
              <p className="font-devanagari text-sm font-bold text-[#5A0E1F] mb-0.5">
                {families.groomSide.hindiTitle}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#33251F] mb-6">
                {families.groomSide.familyTitle}
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8C6D2D] block font-sans font-semibold">Parents</span>
                  <p className="font-serif text-lg font-bold text-[#5A0E1F] mt-0.5">
                    {families.groomSide.parents}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#C5A15B]/25">
                  <span className="text-xs text-[#5C4A42] font-sans">Residence: {families.groomSide.residence}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C5A15B]/30">
              <p className="font-devanagari text-xs text-[#5A0E1F] font-medium">
                &ldquo;दर्शनाभिलाषी: समस्त चौहान परिवार एवं सगे-संबंधी&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Bride's Family: Panwar Family */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-[#FFFDF9] border-2 border-[#C5A15B] rounded-3xl p-8 sm:p-10 shadow-card-lux text-center flex flex-col justify-between"
          >
            {/* Inset Gold Border */}
            <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/30 rounded-2xl pointer-events-none" />
            <span className="absolute top-4 left-4 text-[#C5A15B] text-xs">❖</span>
            <span className="absolute top-4 right-4 text-[#C5A15B] text-xs">❖</span>
            <span className="absolute bottom-4 left-4 text-[#C5A15B] text-xs">❖</span>
            <span className="absolute bottom-4 right-4 text-[#C5A15B] text-xs">❖</span>

            <div>
              <div className="w-12 h-12 rounded-full bg-[#FAF5EC] border-2 border-[#C5A15B] mx-auto flex items-center justify-center text-[#5A0E1F] font-serif text-lg font-bold mb-4 shadow-sm">
                P
              </div>

              <span className="font-serif italic text-xs text-[#8C6D2D] tracking-widest uppercase block mb-1">
                Bride&apos;s Family
              </span>
              <p className="font-devanagari text-sm font-bold text-[#5A0E1F] mb-0.5">
                {families.brideSide.hindiTitle}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#33251F] mb-6">
                {families.brideSide.familyTitle}
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8C6D2D] block font-sans font-semibold">Parents</span>
                  <p className="font-serif text-lg font-bold text-[#5A0E1F] mt-0.5">
                    {families.brideSide.parents}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#C5A15B]/25">
                  <span className="text-xs text-[#5C4A42] font-sans">Residence: {families.brideSide.residence}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C5A15B]/30">
              <p className="font-devanagari text-xs text-[#5A0E1F] font-medium">
                &ldquo;दर्शनाभिलाषी: समस्त पंवार परिवार एवं सगे-संबंधी&rdquo;
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
