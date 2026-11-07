import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Calendar, BellRing } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

const calculateTimeLeft = (): TimeLeft => {
  const target = new Date(weddingData.date.targetIso).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
};

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCalendar = () => {
    const title = encodeURIComponent("Prashant & Raveena's Royal Wedding");
    const details = encodeURIComponent("Join us in celebrating the auspicious wedding of Prashant Chouhan and Raveena Panwar with the blessings of Shri Ram.");
    const location = encodeURIComponent("Royal Heritage Garden, Shamla Hills, Bhopal");
    const dates = "20261126T143000Z/20261126T203000Z";
    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`, '_blank');
  };

  const timeUnits = [
    { label: 'Days', hindi: 'दिन', value: timeLeft.days },
    { label: 'Hours', hindi: 'घंटे', value: timeLeft.hours },
    { label: 'Minutes', hindi: 'मिनट', value: timeLeft.minutes },
    { label: 'Seconds', hindi: 'सेकंड', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#FFFDF9] text-[#33251F] overflow-hidden">
      
      {/* Background Indian Pattern */}
      <div className="absolute inset-0 bg-parchment opacity-60 pointer-events-none" />

      {/* Golden Aura Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Title */}
        <p className="font-devanagari text-lg text-[#5A0E1F] font-semibold mb-1">
          शुभ वेला की प्रतीक्षा
        </p>
        <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D] uppercase tracking-widest mb-2">
          Until We Say Forever
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#5A0E1F] mb-4">
          Counting Down To The Sacred Muhurat
        </h2>

        <div className="flex items-center justify-center gap-3 w-36 mx-auto mb-10">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
          <span className="text-[#C5A15B] text-xs">❦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
        </div>

        {/* Countdown Display or Ended Message */}
        {timeLeft.isPast ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#FFF9F0] border-2 border-[#C5A15B] shadow-card-lux max-w-xl mx-auto"
          >
            <span className="text-4xl text-[#D9A441] mb-4 block">❦</span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#5A0E1F] mb-3">
              The celebration of forever has begun.
            </h3>
            <p className="font-serif italic text-sm text-[#5C4A42]">
              Prashant and Raveena have united in holy matrimony with the divine blessings of Shri Ram and their cherished families.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-[#FFF9F0] border-2 border-[#C5A15B]/60 rounded-2xl p-4 sm:p-6 shadow-card-lux group hover:border-[#C5A15B] transition-colors"
              >
                {/* Traditional corner pins */}
                <div className="absolute top-2 left-2 text-[#C5A15B]/50 text-xs">❖</div>
                <div className="absolute top-2 right-2 text-[#C5A15B]/50 text-xs">❖</div>
                <div className="absolute bottom-2 left-2 text-[#C5A15B]/50 text-xs">❖</div>
                <div className="absolute bottom-2 right-2 text-[#C5A15B]/50 text-xs">❖</div>

                {/* Animated Digit */}
                <div className="font-serif text-4xl sm:text-6xl font-bold text-[#5A0E1F] tracking-tight my-1">
                  {String(unit.value).padStart(2, '0')}
                </div>

                {/* Labels */}
                <div className="pt-2 border-t border-[#C5A15B]/30">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#8C6D2D] font-bold block">
                    {unit.label}
                  </span>
                  <span className="font-devanagari text-[11px] text-[#5C4A42] block">
                    {unit.hindi}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Date Context and Remind Button */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 bg-[#FFF9F0] border border-[#C5A15B]/60 px-5 py-2 rounded-full text-xs font-serif text-[#5A0E1F] shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Target: {weddingData.date.weddingDayDisplay} at 8:00 PM IST (Asia/Kolkata)</span>
          </div>

          <button
            onClick={handleCalendar}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#5A0E1F] hover:bg-[#721529] text-[#FFF9F0] font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <BellRing className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Set Calendar Reminder</span>
          </button>
        </div>

      </div>
    </section>
  );
};
