import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';

export const WeddingEvents: React.FC = () => {
  const { events } = weddingData;

  const handleAddSingleEventToCalendar = (evt: typeof events[0]) => {
    const title = encodeURIComponent(`${evt.title} — Prashant & Raveena's Wedding`);
    const details = encodeURIComponent(`${evt.subtitle}. Venue: ${evt.venue}, ${evt.address}. Dress code: ${evt.dressCode || 'Traditional'}`);
    const location = encodeURIComponent(`${evt.venue}, ${evt.address}`);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="events" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF5EC] text-[#33251F] overflow-hidden">
      
      {/* Background Parchment Texture */}
      <div className="absolute inset-0 bg-parchment opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="font-devanagari text-lg sm:text-xl text-[#5A0E1F] font-semibold mb-1">
            ॥ मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः ॥
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D] uppercase tracking-widest">
            Auspicious Ceremonies
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A0E1F] tracking-tight mt-1">
            शुभ मांगलिक प्रसंग
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto my-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <span className="text-[#C5A15B] text-sm">❦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>

          <p className="font-serif text-base text-[#5C4A42] max-w-lg mx-auto leading-relaxed">
            Three sacred chapters of divine rituals, joyful festivities, and eternal promises blessed by our elders.
          </p>
        </div>

        {/* Connected Vertical Timeline Spine on Desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#D9A441] via-[#C5A15B] to-[#5A0E1F] opacity-40 pointer-events-none" />

          {/* Event Loop */}
          <div className="space-y-16 sm:space-y-24">
            {events.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              const isWeddingDay = evt.id === 'wedding';
              const isReception = evt.id === 'pratibhoj';

              return (
                <motion.div
                  key={evt.id}
                  id={`event-${evt.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className={`relative ${
                    isWeddingDay || isReception
                      ? 'w-full'
                      : 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'
                  }`}
                >
                  {/* Timeline Badge for Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-4 z-20 w-10 h-10 rounded-full bg-[#FFFDF9] border-2 border-[#C5A15B] items-center justify-center shadow-md">
                    <span className="font-serif font-bold text-xs text-[#5A0E1F]">0{idx + 1}</span>
                  </div>

                  {/* Standard Alternating Events (Mata Pujan) */}
                  {!isWeddingDay && !isReception && (
                    <>
                      {/* Event Visual */}
                      <div className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative p-2 rounded-3xl bg-gradient-to-br from-[#C5A15B]/40 via-white to-[#8C6D2D]/40 border border-[#C5A15B]/60 shadow-card-lux group">
                          <div className="relative rounded-2xl overflow-hidden bg-white">
                            <img
                              src={evt.image}
                              alt={evt.title}
                              className="w-full h-[300px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              loading="lazy"
                            />
                            {/* Floating Event Date Badge */}
                            <div className="absolute top-4 left-4">
                              <span className="px-3.5 py-1.5 rounded-full text-xs font-serif font-bold tracking-wider uppercase bg-[#FFFDF9]/95 backdrop-blur-md text-[#5A0E1F] border border-[#C5A15B] shadow-sm">
                                {evt.displayDate}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Event Details Card (Royal Cream) */}
                      <div className={`order-2 ${isEven ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'}`}>
                        <div className="bg-[#FFFDF9] border-2 border-[#C5A15B]/60 rounded-3xl p-6 sm:p-10 shadow-card-lux relative">
                          {/* Inner gold line */}
                          <div className="absolute inset-2 border border-[#C5A15B]/30 rounded-2xl pointer-events-none" />

                          {/* Hindi Title & Subtitle */}
                          <p className="font-devanagari text-2xl sm:text-3xl text-[#D9A441] font-bold mb-1">
                            {evt.hindiTitle}
                          </p>
                          <p className="font-devanagari text-xs sm:text-sm text-[#8C6D2D] mb-4">
                            &ldquo;{evt.hindiSubtitle}&rdquo;
                          </p>

                          {/* Main Title */}
                          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5A0E1F] mb-2">
                            {evt.title}
                          </h3>
                          <p className="font-serif italic text-sm text-[#5C4A42] mb-6">
                            {evt.subtitle}
                          </p>

                          {/* Meta Grid */}
                          <div className="space-y-3.5 mb-6 text-sm">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#FFF9F0] border border-[#C5A15B]/60 flex items-center justify-center shrink-0">
                                <Calendar className="w-4 h-4 text-[#D9A441]" />
                              </div>
                              <div>
                                <span className="font-serif font-bold text-[#5A0E1F]">{evt.displayDate}</span>
                                <span className="text-xs text-[#8C6D2D] ml-2">({evt.dayOfWeek})</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#FFF9F0] border border-[#C5A15B]/60 flex items-center justify-center shrink-0">
                                <Clock className="w-4 h-4 text-[#D9A441]" />
                              </div>
                              <span className="font-sans font-medium text-[#33251F]">{evt.time}</span>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#FFF9F0] border border-[#C5A15B]/60 flex items-center justify-center shrink-0 mt-0.5">
                                <MapPin className="w-4 h-4 text-[#5A0E1F]" />
                              </div>
                              <div>
                                <span className="font-serif font-bold text-[#33251F] block">{evt.venue}</span>
                                <span className="text-xs text-[#5C4A42] leading-tight block">{evt.address}</span>
                              </div>
                            </div>

                            {evt.dressCode && (
                              <div className="flex items-center gap-3 pt-2">
                                <div className="w-8 h-8 rounded-full bg-[#FFF9F0] border border-[#C5A15B]/60 flex items-center justify-center shrink-0">
                                  <Sparkles className="w-4 h-4 text-[#C5A15B]" />
                                </div>
                                <span className="text-xs font-serif italic text-[#8C6D2D]">
                                  Attire: <strong className="font-semibold text-[#5A0E1F]">{evt.dressCode}</strong>
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#C5A15B]/25">
                            <a
                              href={evt.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5A0E1F] hover:bg-[#721529] text-[#FFF9F0] text-xs font-serif uppercase tracking-wider font-bold transition-transform hover:scale-105 shadow-md"
                            >
                              <Navigation className="w-3.5 h-3.5" />
                              <span>Get Directions</span>
                            </a>
                            <button
                              onClick={() => handleAddSingleEventToCalendar(evt)}
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#C5A15B] text-[#5A0E1F] hover:bg-[#FFF9F0] text-xs font-serif uppercase tracking-wider transition-colors"
                            >
                              <Calendar className="w-3.5 h-3.5 text-[#D9A441]" />
                              <span>Add to Calendar</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Wedding Day Full Width Feature (Event 4) */}
                  {isWeddingDay && (
                    <div className="relative bg-[#FFFDF9] border-2 border-[#C5A15B] rounded-3xl p-6 sm:p-12 shadow-card-lux overflow-hidden">
                      {/* Inset Gold Border */}
                      <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/35 rounded-2xl pointer-events-none" />
                      
                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Mandap Image */}
                        <div className="lg:col-span-6 rounded-2xl overflow-hidden border-2 border-[#C5A15B]/60 shadow-xl group">
                          <img
                            src={evt.image}
                            alt="The Sacred Wedding Mandap Ceremony"
                            className="w-full h-[340px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                        </div>

                        {/* Wedding Day Details */}
                        <div className="lg:col-span-6 flex flex-col justify-center">
                          <div className="inline-flex items-center gap-2 bg-[#5A0E1F]/10 border border-[#5A0E1F]/30 px-4 py-1.5 rounded-full w-fit mb-3">
                            <span className="w-2 h-2 rounded-full bg-[#5A0E1F] animate-ping" />
                            <span className="font-serif text-xs text-[#5A0E1F] tracking-widest uppercase font-bold">
                              The Sacred Pheras • सात फेरे
                            </span>
                          </div>

                          <p className="font-devanagari text-2xl sm:text-3xl text-[#5A0E1F] font-bold mb-1">
                            {evt.hindiTitle}
                          </p>
                          <p className="font-devanagari text-base sm:text-lg text-[#D9A441] mb-3">
                            &ldquo;{evt.hindiSubtitle}&rdquo;
                          </p>

                          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#33251F] mb-2">
                            {evt.title}
                          </h3>
                          <p className="font-serif italic text-sm text-[#5C4A42] mb-6">
                            Under the divine stars and the fragrance of sacred fire, seven vows to sanctify two souls forever.
                          </p>

                          {/* Timing & Venue Box */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF5EC] p-5 rounded-2xl border border-[#C5A15B]/40 mb-6 text-sm">
                            <div>
                              <span className="text-xs text-[#8C6D2D] uppercase tracking-wider block font-sans">Date &amp; Day</span>
                              <span className="font-serif font-bold text-base text-[#5A0E1F]">{evt.displayDate}</span>
                              <span className="text-xs text-[#5C4A42] block">({evt.dayOfWeek})</span>
                            </div>
                            <div>
                              <span className="text-xs text-[#8C6D2D] uppercase tracking-wider block font-sans">Auspicious Time</span>
                              <span className="font-serif font-bold text-base text-[#5A0E1F]">{evt.time}</span>
                            </div>
                            <div className="sm:col-span-2 pt-2 border-t border-[#C5A15B]/20">
                              <span className="text-xs text-[#8C6D2D] uppercase tracking-wider block font-sans">Ceremony Venue</span>
                              <span className="font-serif font-bold text-[#33251F] block">{evt.venue}</span>
                              <span className="text-xs text-[#5C4A42]">{evt.address}</span>
                            </div>
                            {evt.dressCode && (
                              <div className="sm:col-span-2 pt-2 border-t border-[#C5A15B]/20">
                                <span className="text-xs text-[#8C6D2D] uppercase tracking-wider block font-sans">Dress Code</span>
                                <span className="font-serif italic text-xs text-[#5A0E1F] font-semibold">{evt.dressCode}</span>
                              </div>
                            )}
                          </div>

                          {/* CTA Row */}
                          <div className="flex flex-wrap items-center gap-4">
                            <a
                              href={evt.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2.5 rounded-full bg-[#5A0E1F] hover:bg-[#721529] text-[#FFF9F0] font-serif text-xs uppercase tracking-wider font-bold shadow-royal transition-all flex items-center gap-2 hover:scale-105"
                            >
                              <Navigation className="w-4 h-4 text-[#D9A441]" />
                              <span>Map &amp; Directions</span>
                            </a>
                            <button
                              onClick={() => handleAddSingleEventToCalendar(evt)}
                              className="px-5 py-2.5 rounded-full bg-[#FAF5EC] hover:bg-[#F2DDD6] border border-[#C5A15B] text-[#5A0E1F] font-serif text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                            >
                              <Calendar className="w-4 h-4 text-[#D9A441]" />
                              <span>Add to Calendar</span>
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pratibhoj / Reception Feature (Event 3) */}
                  {isReception && (
                    <div className="relative bg-[#FFFDF9] border-2 border-[#C5A15B] rounded-3xl p-6 sm:p-12 shadow-card-lux overflow-hidden">
                      {/* Inset Gold Border */}
                      <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/35 rounded-2xl pointer-events-none" />

                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* Details First on Desktop */}
                        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
                          <div className="inline-flex items-center gap-2 bg-[#5A0E1F]/10 border border-[#5A0E1F]/30 px-4 py-1.5 rounded-full w-fit mb-3">
                            <span className="font-serif text-xs text-[#5A0E1F] tracking-widest uppercase font-bold">
                              The Royal Feast • प्रीतिभोज
                            </span>
                          </div>

                          <p className="font-devanagari text-2xl sm:text-3xl text-[#5A0E1F] font-bold mb-1">
                            {evt.hindiTitle}
                          </p>
                          <p className="font-serif italic text-base text-[#8C6D2D] mb-4">
                            {evt.subtitle}
                          </p>

                          <p className="font-serif text-sm text-[#5C4A42] leading-relaxed mb-6">
                            Join us for an evening of regal hospitality, classical melodies, joyous celebrations, and an opulent royal dinner in honour of the newly married couple.
                          </p>

                          {/* Meta Box */}
                          <div className="space-y-3 bg-[#FAF5EC] p-5 rounded-2xl border border-[#C5A15B]/40 mb-6 text-sm">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-4 h-4 text-[#D9A441]" />
                              <span className="font-serif font-bold text-[#5A0E1F]">{evt.displayDate}</span>
                              <span className="text-xs text-[#8C6D2D]">({evt.dayOfWeek})</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Clock className="w-4 h-4 text-[#D9A441]" />
                              <span className="font-sans font-medium text-[#33251F]">{evt.time}</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-[#5A0E1F] mt-0.5" />
                              <div>
                                <span className="font-serif font-bold text-[#33251F] block">{evt.venue}</span>
                                <span className="text-xs text-[#5C4A42]">{evt.address}</span>
                              </div>
                            </div>
                            {evt.dressCode && (
                              <div className="pt-2 border-t border-[#C5A15B]/20 text-xs font-serif text-[#8C6D2D]">
                                Dress Code: <strong className="text-[#5A0E1F]">{evt.dressCode}</strong>
                              </div>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap items-center gap-3">
                            <a
                              href={evt.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2.5 rounded-full bg-[#5A0E1F] hover:bg-[#721529] text-[#FFF9F0] text-xs font-serif uppercase tracking-wider font-bold transition-transform hover:scale-105 shadow-md flex items-center gap-2"
                            >
                              <Navigation className="w-3.5 h-3.5" />
                              <span>Get Directions</span>
                            </a>
                            <button
                              onClick={() => handleAddSingleEventToCalendar(evt)}
                              className="px-5 py-2.5 rounded-full border border-[#C5A15B] text-[#5A0E1F] hover:bg-[#FAF5EC] text-xs font-serif uppercase tracking-wider transition-colors flex items-center gap-2"
                            >
                              <Calendar className="w-3.5 h-3.5 text-[#D9A441]" />
                              <span>Add to Calendar</span>
                            </button>
                          </div>
                        </div>

                        {/* Banquet Hall Image */}
                        <div className="lg:col-span-6 rounded-2xl overflow-hidden border-2 border-[#C5A15B]/50 shadow-xl group order-1 lg:order-2">
                          <img
                            src={evt.image}
                            alt="Grand Royal Pratibhoj Reception Banquet Hall"
                            className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                        </div>

                      </div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
