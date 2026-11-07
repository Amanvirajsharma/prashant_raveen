/**
 * RSVP Service Layer
 * Demonstrates a clean API integration layer for production.
 * Replace the mock submission with your REST API, Firebase Firestore, Supabase, or Google Sheets webhook.
 */

export interface RSVPFormData {
  fullName: string;
  phone?: string;
  guestCount: number;
  attendingEvents: string[];
  dietaryPreference: string;
  message?: string;
}

export interface RSVPResponse {
  success: boolean;
  message: string;
  data?: RSVPFormData;
}

export const submitRSVP = async (formData: RSVPFormData): Promise<RSVPResponse> => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Store in LocalStorage for demo persistence
  try {
    const existing = JSON.parse(localStorage.getItem('wedding_rsvp_submissions') || '[]');
    existing.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('wedding_rsvp_submissions', JSON.stringify(existing));
  } catch {
    // ignore local storage restrictions if any
  }

  // To connect a live backend, replace this with:
  // const res = await fetch('/api/rsvp', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData),
  // });
  // return await res.json();

  return {
    success: true,
    message: `Thank you, ${formData.fullName}! Your RSVP has been received.`,
    data: formData,
  };
};

export const generateWhatsAppRSVPUrl = (formData: RSVPFormData, targetPhone: string): string => {
  const eventsList = formData.attendingEvents.length > 0 ? formData.attendingEvents.join(', ') : 'All events';
  const text = `Namaste Aarav & Siya! 🌸\n\nI am thrilled to confirm my attendance for your royal wedding.\n\n*Guest Name:* ${formData.fullName}\n*Guests:* ${formData.guestCount}\n*Attending Events:* ${eventsList}\n*Meal Preference:* ${formData.dietaryPreference}\n${formData.message ? `*Message:* "${formData.message}"\n` : ''}\nLooking forward to celebrating with you! ✨`;

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
};
