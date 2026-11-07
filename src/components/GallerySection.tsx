import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData, type GalleryPhoto } from '../data/weddingData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery } = weddingData;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const activePhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? gallery[selectedPhotoIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % gallery.length);
  }, [selectedPhotoIndex, gallery.length]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + gallery.length) % gallery.length);
  }, [selectedPhotoIndex, gallery.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF5EC] text-[#33251F] overflow-hidden">
      
      {/* Background Motif */}
      <div className="absolute inset-0 bg-parchment opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-devanagari text-base sm:text-lg text-[#5A0E1F] font-semibold mb-1">
            ॥ मनोहर स्मृतियां ॥
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D] uppercase tracking-widest mb-1">
            Cherished Glimpses
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A0E1F] tracking-tight">
            Memories In Frame
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto my-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <span className="text-[#C5A15B] text-sm">❦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>

          <p className="font-serif italic text-base sm:text-lg text-[#5C4A42] leading-relaxed">
            Moments of devotion, heritage elegance, and joyful celebrations captured in timeless royal frames.
          </p>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gallery.map((photo, index) => {
            const isFeatured = index === 0 || index === 3;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-[#C5A15B]/60 bg-white shadow-card-lux ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => setSelectedPhotoIndex(index)}
              >
                {/* Photo container */}
                <div className={`w-full overflow-hidden ${isFeatured ? 'h-72 sm:h-96' : 'h-72 sm:h-80'}`}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A050D]/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="font-serif text-xs text-[#D9A441] uppercase tracking-wider block mb-1">
                    {photo.subtitle}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                      {photo.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#C5A15B]/40 backdrop-blur-sm flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Bottom subtle bar on mobile */}
                <div className="p-3 bg-[#FFFDF9] border-t border-[#C5A15B]/40 lg:hidden">
                  <h4 className="font-serif font-bold text-sm text-[#5A0E1F] truncate">
                    {photo.title}
                  </h4>
                  <p className="font-sans text-[11px] text-[#8C6D2D] truncate">
                    {photo.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              aria-label="Close image viewer"
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={activePhoto.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-w-full max-h-[72vh] object-contain rounded-xl border-2 border-[#C5A15B] shadow-2xl"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5E3BD]">
                  {activePhoto.title}
                </h3>
                <p className="font-serif italic text-sm text-[#D9A441] mt-1">
                  {activePhoto.subtitle}
                </p>
                <p className="text-[11px] text-white/50 mt-1 font-sans">
                  {selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : 1} of {gallery.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
