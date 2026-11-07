import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { submitRSVP, generateWhatsAppRSVPUrl, type RSVPFormData } from '../services/rsvpService';
import { Send, CheckCircle, MessageSquare, AlertCircle, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: '',
    phone: '',
    guestCount: 2,
    attendingEvents: ['The Wedding Ceremony (26 Nov)'],
    dietaryPreference: 'Pure Vegetarian',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const eventOptions = [
    'Mata Pujan (20 Nov)',
    'The Wedding Ceremony (26 Nov)',
    'शुभ विवाह प्रीतिभोज (19 Feb)',
  ];

  const handleCheckboxToggle = (eventTitle: string) => {
    setFormData((prev) => {
      const exists = prev.attendingEvents.includes(eventTitle);
      return {
        ...prev,
        attendingEvents: exists
          ? prev.attendingEvents.filter((e) => e !== eventTitle)
          : [...prev.attendingEvents, eventTitle],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (formData.attendingEvents.length === 0) {
      setErrorMessage('Please select at least one event you will attend.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitRSVP(formData);
      if (response.success) {
        setSubmitSuccess(true);
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#5A0E1F', '#C5A15B', '#D9A441', '#FFF9F0'],
          disableForReducedMotion: true,
        });
      }
    } catch {
      setErrorMessage('Failed to submit RSVP. Please try again or RSVP directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRSVP = () => {
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your name before sending via WhatsApp.');
      return;
    }
    const url = generateWhatsAppRSVPUrl(formData, weddingData.rsvp.whatsappNumber);
    window.open(url, '_blank');
  };

  return (
    <section id="rsvp" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF5EC] text-[#33251F] overflow-hidden">
      
      {/* Background Indian Motif */}
      <div className="absolute inset-0 bg-parchment opacity-70 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-devanagari text-base sm:text-lg text-[#5A0E1F] font-semibold mb-1">
            ॥ सादर आमंत्रण ॥
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#8C6D2D] uppercase tracking-widest mb-1">
            Will You Join Us?
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#5A0E1F]">
            Kindly Respond &amp; RSVP
          </h2>

          <div className="flex items-center justify-center gap-3 w-40 mx-auto my-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <Heart className="w-3.5 h-3.5 text-[#5A0E1F] fill-[#5A0E1F]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>

          <p className="font-serif italic text-sm sm:text-base text-[#5C4A42] max-w-lg mx-auto">
            Please let us know if you will be celebrating with us by 25 January 2027 so we may arrange your warm royal reception.
          </p>
        </div>

        {/* Form Container (Royal Cream & Gold) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#FFFDF9] border-2 border-[#C5A15B] rounded-3xl p-6 sm:p-10 shadow-card-lux"
        >
          {/* Inset Gold Border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/30 rounded-2xl pointer-events-none" />

          {/* Success State */}
          {submitSuccess ? (
            <div className="text-center py-12 px-4 relative z-10">
              <CheckCircle className="w-16 h-16 text-[#5A0E1F] mx-auto mb-4" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5A0E1F] mb-2">
                Thank You, {formData.fullName}!
              </h3>
              <p className="font-serif italic text-base text-[#8C6D2D] mb-4">
                Your RSVP has been gratefully noted. We eagerly look forward to welcoming you to the celebrations!
              </p>
              
              {/* Demo Mode Notice */}
              <div className="bg-[#FAF5EC] border border-[#C5A15B]/40 rounded-xl p-4 text-xs text-[#5C4A42] max-w-md mx-auto mb-6 text-left">
                <span className="font-bold text-[#5A0E1F] block mb-1 font-serif">Integration Notice (Demo Mode):</span>
                Your response was saved locally in your browser session. For backend integration, simply connect your database or API in <code className="text-[#5A0E1F] bg-white px-1 py-0.5 rounded border border-[#C5A15B]/40">src/services/rsvpService.ts</code>.
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleWhatsAppRSVP}
                  className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-serif text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Also Confirm via WhatsApp</span>
                </button>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-5 py-2.5 rounded-full border border-[#C5A15B] text-[#5A0E1F] hover:bg-[#FAF5EC] font-serif text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {errorMessage && (
                <div className="flex items-center gap-2.5 bg-red-100 border border-red-300 p-3.5 rounded-xl text-red-800 text-xs">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Guest Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs uppercase tracking-widest font-serif font-bold text-[#5A0E1F] mb-2">
                  Guest Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Vikramaditya &amp; Sunita Rathore"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A15B]/60 text-[#33251F] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C5A15B] text-sm font-sans"
                />
              </div>

              {/* Phone & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-serif font-bold text-[#5A0E1F] mb-2">
                    Mobile Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A15B]/60 text-[#33251F] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C5A15B] text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-xs uppercase tracking-widest font-serif font-bold text-[#5A0E1F] mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guestCount"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A15B]/60 text-[#33251F] focus:outline-none focus:ring-2 focus:ring-[#C5A15B] text-sm font-sans"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Events Attending Checkboxes */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-serif font-bold text-[#5A0E1F] mb-2">
                  Which Events Will You Attend? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {eventOptions.map((opt) => {
                    const isChecked = formData.attendingEvents.includes(opt);
                    return (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors text-xs font-serif ${
                          isChecked
                            ? 'bg-[#5A0E1F] border-[#5A0E1F] text-white font-semibold'
                            : 'bg-white border-[#C5A15B]/40 text-[#33251F] hover:border-[#C5A15B]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxToggle(opt)}
                          className="w-4 h-4 rounded text-[#5A0E1F] focus:ring-[#C5A15B] accent-[#5A0E1F]"
                        />
                        <span>{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Dietary Preference */}
              <div>
                <label htmlFor="dietaryPreference" className="block text-xs uppercase tracking-widest font-serif font-bold text-[#5A0E1F] mb-2">
                  Meal / Dining Preference (Optional)
                </label>
                <select
                  id="dietaryPreference"
                  value={formData.dietaryPreference}
                  onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A15B]/60 text-[#33251F] focus:outline-none focus:ring-2 focus:ring-[#C5A15B] text-sm font-sans"
                >
                  <option value="Pure Vegetarian">Pure Vegetarian (Traditional)</option>
                  <option value="Jain Vegetarian">Jain Vegetarian (No Onion / Garlic / Root)</option>
                  <option value="No Special Preference">No Special Preference</option>
                </select>
              </div>

              {/* Message to Couple */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-serif font-bold text-[#5A0E1F] mb-2">
                  Auspicious Wishes for Prashant &amp; Raveena (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Send your warm blessings, shlokas, or lovely greetings to Prashant and Raveena..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#C5A15B]/60 text-[#33251F] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C5A15B] text-sm font-sans"
                />
              </div>

              {/* Form Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#5A0E1F] hover:bg-[#721529] text-[#FFF9F0] font-serif text-sm uppercase tracking-wider font-bold shadow-royal transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#D9A441]" />
                  <span>{isSubmitting ? 'Recording RSVP...' : 'Submit RSVP (Instant)'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRSVP}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20b858] text-white font-serif text-sm uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  title="Send RSVP details directly via WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>RSVP via WhatsApp</span>
                </button>
              </div>

              {/* Demo Mode / Backend Connection Explanation Note */}
              <p className="text-center text-[11px] text-[#8C6D2D] font-sans mt-3">
                Demo Mode: Submissions persist locally. Easily connect to Google Sheets, Supabase, or REST endpoint in <code className="text-[#5A0E1F] font-bold">src/services/rsvpService.ts</code>.
              </p>

            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
};
