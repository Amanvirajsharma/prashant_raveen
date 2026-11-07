import React, { useState, useEffect } from 'react';
import { VolumeX } from 'lucide-react';
import { ambientAudio } from '../utils/audioSynthesizer';

export const MusicFloatingButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Check initial audio state
    const timer = setInterval(() => {
      setIsPlaying(ambientAudio.getStatus());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggle = () => {
    const newState = ambientAudio.toggle();
    setIsPlaying(newState);
  };

  return (
    <button
      onClick={handleToggle}
      title={isPlaying ? 'Mute Sacred Shehnai & Flute Music' : 'Play Sacred Shehnai & Flute Music'}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
      className="fixed top-6 right-6 z-40 bg-[#1F0309]/90 backdrop-blur-md border border-[#C5A15B]/70 text-[#F5E3BD] p-3 rounded-full shadow-[0_0_20px_rgba(197,161,91,0.3)] hover:scale-105 transition-all flex items-center gap-2 group cursor-pointer"
    >
      {isPlaying ? (
        <>
          <div className="flex items-center gap-0.5 h-4">
            <span className="w-0.5 h-3 bg-[#D9A441] animate-pulse rounded-full" />
            <span className="w-0.5 h-4 bg-[#F5E3BD] animate-pulse rounded-full" style={{ animationDelay: '0.2s' }} />
            <span className="w-0.5 h-2 bg-[#D9A441] animate-pulse rounded-full" style={{ animationDelay: '0.4s' }} />
          </div>
          <span className="hidden sm:inline font-serif text-xs text-[#F5E3BD] tracking-wider pr-1">
            Music Playing
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-[#C5A15B]" />
          <span className="hidden sm:inline font-serif text-xs text-[#C5A15B] tracking-wider pr-1">
            Music Off
          </span>
        </>
      )}
    </button>
  );
};
