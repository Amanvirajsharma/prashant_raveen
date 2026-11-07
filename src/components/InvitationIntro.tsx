import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { ambientAudio } from '../utils/audioSynthesizer';
import confetti from 'canvas-confetti';

interface InvitationIntroProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const InvitationIntro: React.FC<InvitationIntroProps> = ({ isOpen, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenDoors = () => {
    setIsOpening(true);

    // Gently start classical Shehnai & Tanpura ambient drone
    ambientAudio.play();

    // Trigger auspicious marigold & gold flower confetti
    confetti({
      particleCount: 65,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#6D1527', '#FFA500', '#F7E7CE', '#D9A441'],
      disableForReducedMotion: true,
    });

    // Smooth door opening sequence, then reveal the website
    setTimeout(() => {
      onOpen();
    }, 4500);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 2.2, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black text-[#FFF9F0]"
          style={{ minHeight: '100svh' }}
        >
          {/* Background: Grand Glowing Shri Ram Mandir revealed behind the opening doors */}
          <div className="absolute inset-0 bg-[url('/images/ram-mandir.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0308] via-black/40 to-black/60" />
            
            {/* Sacred chaupai visible as doors part */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
              <span className="font-devanagari text-2xl sm:text-4xl text-[#F5E3BD] font-bold tracking-wide drop-shadow-lg mb-2">
                &ldquo;सीय राममय सब जग जानी ।&rdquo;
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#D9A441] drop-shadow-md">
                Entering The Royal Union of Prashant &amp; Raveena
              </p>
            </div>
          </div>

          {/* 3D Perspective Container for Grand Temple Gates */}
          <div className="perspective-doors relative w-full h-full flex items-center justify-center pointer-events-auto">
            
            {/* LEFT TEMPLE DOOR */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={isOpening ? { rotateY: -110, opacity: 0.2 } : { rotateY: 0, opacity: 1 }}
              transition={{ duration: 3.2, ease: [0.45, 0, 0.25, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="absolute left-0 top-0 bottom-0 w-1/2 bg-[url('/images/temple-doors.jpg')] bg-cover bg-left shadow-2xl border-r-2 border-[#C5A15B] z-20 flex flex-col justify-between p-6 sm:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#3E0613]/50 to-[#2A050D]/30 pointer-events-none" />
            </motion.div>

            {/* RIGHT TEMPLE DOOR */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={isOpening ? { rotateY: 110, opacity: 0.2 } : { rotateY: 0, opacity: 1 }}
              transition={{ duration: 3.2, ease: [0.45, 0, 0.25, 1] }}
              style={{ transformOrigin: 'right center' }}
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('/images/temple-doors.jpg')] bg-cover bg-right shadow-2xl border-l-2 border-[#C5A15B] z-20 flex flex-col justify-between items-end p-6 sm:p-10 text-right"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-[#3E0613]/50 to-[#2A050D]/30 pointer-events-none" />
            </motion.div>

            {/* Glowing Golden Seam when closed */}
            {!isOpening && (
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-transparent via-[#FFD700] to-transparent z-30 shadow-[0_0_25px_6px_rgba(255,215,0,0.9)] animate-pulse" />
            )}

            {/* CENTER CEREMONIAL INVITATION CARD */}
            <motion.div
              initial={{ scale: 0.95, opacity: 1 }}
              animate={isOpening ? { scale: 1.08, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="relative z-30 max-w-lg w-[92%] sm:w-full mx-4 my-auto p-6 sm:p-10 rounded-3xl bg-[#1C0309]/95 backdrop-blur-md border-2 border-[#C5A15B] shadow-[0_0_70px_rgba(0,0,0,0.95)] text-center"
            >
              {/* Inset Border */}
              <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/40 rounded-2xl pointer-events-none" />
              <span className="absolute top-3 left-3 text-[#C5A15B] text-sm">❖</span>
              <span className="absolute top-3 right-3 text-[#C5A15B] text-sm">❖</span>
              <span className="absolute bottom-3 left-3 text-[#C5A15B] text-sm">❖</span>
              <span className="absolute bottom-3 right-3 text-[#C5A15B] text-sm">❖</span>

              {/* Invocations */}
              <div className="mb-4">
                <span className="text-3xl text-[#C5A15B] block mb-1">卐</span>
                <p className="font-devanagari text-lg sm:text-xl text-[#F5E3BD] font-bold tracking-wider">
                  {weddingData.sacredBlessings.ganesh}
                </p>
                <p className="font-devanagari text-xs sm:text-sm text-[#D9A441] mt-0.5">
                  {weddingData.sacredBlessings.chaupai}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 w-40 mx-auto my-3">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
                <span className="text-[#C5A15B] text-xs">𑁍</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
              </div>

              <p className="font-serif italic text-xs uppercase tracking-widest text-[#F2DDD6]/80 mb-1">
                Together with the divine blessings of Shri Ram
              </p>

              {/* Couple Names */}
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide leading-tight my-2">
                {weddingData.couple.groom.firstName}
                <span className="block font-script font-normal text-2xl sm:text-4xl text-[#D9A441] my-1">
                  &amp;
                </span>
                {weddingData.couple.bride.firstName}
              </h2>

              <p className="font-serif italic text-xs sm:text-sm text-[#F5E3BD]/90 max-w-xs mx-auto mb-5 leading-relaxed">
                &ldquo;{weddingData.couple.invitationQuote}&rdquo;
              </p>

              <div className="inline-block px-4 py-1.5 rounded-full bg-[#360613] border border-[#C5A15B]/60 text-xs font-serif text-[#F5E3BD] mb-6">
                {weddingData.date.weddingDayDisplay} • Bhopal, Madhya Pradesh
              </div>

              {/* BUTTON: DOOR OPEN */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleOpenDoors}
                  disabled={isOpening}
                  id="open-invitation-btn"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D9A441] via-[#F7E7CE] to-[#C5A15B] hover:from-[#F7E7CE] hover:to-[#D9A441] text-[#2A050D] font-serif text-sm sm:text-base uppercase tracking-widest font-bold shadow-[0_0_35px_rgba(217,164,65,0.7)] border border-[#FFF9F0] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>𑁍</span>
                  <span>{isOpening ? 'Opening...' : 'Open Wedding Invitation'}</span>
                  <span>𑁍</span>
                </motion.button>
              </div>

            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
