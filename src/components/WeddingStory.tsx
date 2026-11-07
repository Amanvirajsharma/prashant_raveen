import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Heart } from 'lucide-react';

export const WeddingStory: React.FC = () => {
  const { story } = weddingData;

  return (
    <section id="story" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF5EC] text-[#33251F] overflow-hidden">
      
      {/* Decorative Background Floral Details */}
      <div className="absolute top-20 right-10 text-9xl text-[#C5A15B]/10 select-none pointer-events-none">𑁍</div>
      <div className="absolute bottom-20 left-10 text-9xl text-[#C5A15B]/10 select-none pointer-events-none">𑁍</div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-devanagari text-base sm:text-lg text-[#5A0E1F] font-semibold mb-1">
            ॥ प्रेम एवं समर्पण की गाथा ॥
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D] uppercase tracking-widest mb-1">
            How Forever Began
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A0E1F] tracking-tight">
            Our Wedding Story
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto my-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <Heart className="w-3.5 h-3.5 text-[#5A0E1F] fill-[#5A0E1F]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>

          <p className="font-serif italic text-base sm:text-lg text-[#5C4A42] leading-relaxed max-w-xl mx-auto">
            Every love story is sacred, but ours is our favourite quiet miracle.
          </p>
        </div>

        {/* Desktop: Horizontal Editorial Flow / Timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
          
          {/* Horizontal Connecting Golden Thread */}
          <div className="absolute top-36 left-12 right-12 h-[2px] bg-gradient-to-r from-[#D9A441] via-[#C5A15B] to-[#5A0E1F] opacity-40 z-0 pointer-events-none" />

          {story.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative z-10 flex flex-col group"
            >
              {/* Image Preview */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C5A15B]/50 shadow-md mb-6 aspect-[4/3] bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#FFFDF9]/95 text-[10px] font-serif font-bold text-[#5A0E1F] border border-[#C5A15B]">
                  {item.year}
                </div>
              </div>

              {/* Step Connector Marker */}
              <div className="w-9 h-9 rounded-full bg-[#FFFDF9] border-2 border-[#C5A15B] flex items-center justify-center text-[#5A0E1F] text-xs font-serif font-bold mx-auto mb-4 shadow-sm group-hover:bg-[#5A0E1F] group-hover:text-white transition-colors">
                {index + 1}
              </div>

              {/* Text Card */}
              <div className="bg-[#FFFDF9] border-2 border-[#C5A15B]/50 rounded-2xl p-5 shadow-card-lux text-center flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-devanagari text-xs text-[#D9A441] font-bold mb-1">
                    {item.hindiTitle}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-[#5A0E1F] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C4A42] leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Connected Timeline */}
        <div className="md:hidden relative space-y-10 pl-6 border-l-2 border-[#C5A15B]/50 ml-4">
          {story.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Pin */}
              <div className="absolute -left-[35px] top-1 w-7 h-7 rounded-full bg-[#FFFDF9] border-2 border-[#C5A15B] flex items-center justify-center text-[#5A0E1F] text-[11px] font-bold shadow-sm">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-[#FFFDF9] border-2 border-[#C5A15B]/50 rounded-2xl p-5 shadow-sm">
                <div className="rounded-xl overflow-hidden mb-3 aspect-[16/9]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFF9F0] border border-[#C5A15B]/50 text-xs font-serif font-bold text-[#5A0E1F] mb-2">
                  {item.year}
                </span>
                <p className="font-devanagari text-xs text-[#D9A441] font-bold">
                  {item.hindiTitle}
                </p>
                <h3 className="font-serif text-xl font-bold text-[#5A0E1F] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5C4A42] leading-relaxed font-sans font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
