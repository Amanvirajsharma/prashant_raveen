export interface EventDetail {
  id: string;
  title: string;
  subtitle: string;
  hindiTitle?: string;
  hindiSubtitle?: string;
  date: string; // ISO date YYYY-MM-DD
  displayDate: string;
  dayOfWeek: string;
  time: string;
  venue: string;
  address: string;
  image: string;
  dressCode?: string;
  googleMapsUrl: string;
  themeColor: {
    badge: string;
    border: string;
    accent: string;
  };
}

export interface StoryMilestone {
  id: string;
  year: string;
  title: string;
  hindiTitle: string;
  description: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export const weddingData = {
  couple: {
    groom: {
      firstName: "Prashant",
      fullName: "Prashant Chouhan",
      hindiName: "प्रशांत चौहान",
      title: "The Groom",
      parents: "Smt. Rekha & Shri Bablu Chouhan",
      bio: "An entrepreneur with deep reverence for heritage values, classical art, and family traditions.",
      photo: "/images/groom.jpg",
    },
    bride: {
      firstName: "Raveena",
      fullName: "Raveena Panwar",
      hindiName: "रवीना पंवार",
      title: "The Bride",
      parents: "Smt. Parvati & Shri Bane Singh Panwar",
      bio: "A designer with an innate grace for cultural aesthetics, literature, and warm infectious joy.",
      photo: "/images/bride.jpg",
    },
    monogram: "P & R",
    tagline: "Together with the divine blessings of Shri Ram",
    invitationQuote: "Request the honour of your presence as we begin our forever.",
    storyIntro: "Two hearts, two families, and one beautiful beginning. With the love and blessings of our families, we invite you to celebrate the beginning of our forever.",
  },

  date: {
    weddingDayDisplay: "26 November 2026",
    dayOfWeek: "Thursday",
    targetIso: "2026-11-26T20:00:00+05:30",
    timezone: "Asia/Kolkata",
  },

  sacredBlessings: {
    ganesh: "॥ श्री गणेशाय नमः ॥",
    shriRam: "॥ श्री सीता-रामचन्द्राभ्यां नमः ॥",
    chaupai: "॥ मंगल भवन अमंगल हारी, द्रवहु सुदसरथ अजर बिहारी ॥",
    templeBlessing: "श्री राम की कृपा से,\nदो दिल एक नए सफर की शुरुआत करने जा रहे हैं।",
    closingShloka: "॥ ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥",
    closingEnglish: "May all beings everywhere be happy and free, and may the thoughts, words, and actions of our own lives contribute to that happiness.",
  },

  events: [
    {
      id: "mata-pujan",
      title: "Mata Pujan",
      subtitle: "Sacred Invocation & Divine Blessings",
      hindiTitle: "माता पूजन",
      hindiSubtitle: "माता रानी के आशीर्वाद से शुभारंभ",
      date: "2026-11-20",
      displayDate: "20 November 2026",
      dayOfWeek: "Friday",
      time: "10:00 AM onwards",
      venue: "Chouhan Niwas",
      address: "Chouhan Niwas, 14 Arera Colony, Bhopal, MP 462016",
      image: "/images/mata-pujan.jpg",
      dressCode: "Traditional Saffron / Yellow Attire",
      googleMapsUrl: "https://maps.google.com/?q=Arera+Colony+Bhopal",
      themeColor: {
        badge: "bg-[#D9A441]/15 text-[#9E7B35] border-[#D9A441]/30",
        border: "border-[#D9A441]/40",
        accent: "#D9A441",
      },
    },
    {
      id: "wedding",
      title: "The Wedding Ceremony",
      subtitle: "The Sacred Vows & Pheras",
      hindiTitle: "शुभ विवाह संस्कार",
      hindiSubtitle: "सात फेरे, सात वचन, जन्मों का साथ",
      date: "2026-11-26",
      displayDate: "26 November 2026",
      dayOfWeek: "Thursday",
      time: "8:00 PM onwards",
      venue: "Royal Heritage Garden",
      address: "Royal Heritage Garden, Lake View Road, Shamla Hills, Bhopal, MP 462013",
      image: "/images/mandap.jpg",
      dressCode: "Royal Ethnic / Traditional Elegance",
      googleMapsUrl: "https://maps.google.com/?q=Shamla+Hills+Bhopal",
      themeColor: {
        badge: "bg-[#5A0E1F]/10 text-[#5A0E1F] border-[#5A0E1F]/30",
        border: "border-[#C5A15B]/60",
        accent: "#5A0E1F",
      },
    },
    {
      id: "pratibhoj",
      title: "शुभ विवाह प्रीतिभोज",
      subtitle: "Wedding Reception & Feast",
      hindiTitle: "शुभ विवाह प्रीतिभोज",
      hindiSubtitle: "स्नेह मिलन एवं प्रीतिभोज",
      date: "2027-02-19",
      displayDate: "19 February 2027",
      dayOfWeek: "Friday",
      time: "7:00 PM onwards",
      venue: "Grand Celebration Palace",
      address: "Grand Celebration Palace, Hoshangabad Road, Bhopal, MP 462026",
      image: "/images/reception.jpg",
      dressCode: "Formal Indian / Black Tie Glamour",
      googleMapsUrl: "https://maps.google.com/?q=Hoshangabad+Road+Bhopal",
      themeColor: {
        badge: "bg-[#5A0E1F]/15 text-[#5A0E1F] border-[#C5A15B]/50",
        border: "border-[#C5A15B]/50",
        accent: "#C5A15B",
      },
    },
  ] as EventDetail[],

  story: [
    {
      id: "first-meet",
      year: "November 2024",
      title: "The Serendipitous First Meeting",
      hindiTitle: "पहली मुलाकात",
      description: "A chance meeting in an old heritage café that turned into four hours of effortless laughter. Between conversations of art, family, and shared values, time felt suspended.",
      image: "/images/story-candid.jpg",
    },
    {
      id: "growing-fondness",
      year: "April 2025",
      title: "When Two Worlds Aligned",
      hindiTitle: "दिलों का जुड़ाव",
      description: "Quiet conversations, shared dreams, and mutual respect. In each other, Prashant and Raveena found an anchor of steadfast support and true companionship.",
      image: "/images/bride.jpg",
    },
    {
      id: "roka-ceremony",
      year: "January 2026",
      title: "Families Coming Together",
      hindiTitle: "अपनों का आशीर्वाद",
      description: "With marigold garlands, sacred sweets, and joyful blessings, both the Chouhan and Panwar families celebrated the auspicious Roka ceremony with boundless love.",
      image: "/images/mata-pujan.jpg",
    },
    {
      id: "wedding-day",
      year: "November 2026",
      title: "The Forever Promise",
      hindiTitle: "जन्मों का बंधन",
      description: "Under the sacred temple mandap, with the divine grace of Prabhu Shri Ram and the blessings of all our elders, we take the seven sacred steps into eternity.",
      image: "/images/mandap.jpg",
    },
  ] as StoryMilestone[],

  families: {
    invitationIntro: "With the blessings of our elders and the love of our families, we cordially invite you to celebrate this auspicious occasion.",
    hindiIntro: "परमपिता परमात्मा एवं पूज्य अग्रजों के आशीर्वाद से हम अपने परिवार सहित आपको सादर आमंत्रित करते हैं।",
    groomSide: {
      familyTitle: "Chouhan Family",
      hindiTitle: "समस्त चौहान परिवार",
      parents: "Smt. Rekha & Shri Bablu Chouhan",
      residence: "Gaon Pathan Khurd, Tehsil Rajgarh, Zila Rajgarh, Madhya Pradesh",
      relationNote: "Groom's Parents & Elders",
    },
    brideSide: {
      familyTitle: "Panwar Family",
      hindiTitle: "समस्त पंवार परिवार",
      parents: "Smt. Parvati & Shri Bane Singh Panwar",
      residence: "Bhopal, Madhya Pradesh",
      relationNote: "Bride's Parents & Elders",
    },
  },

  venues: [
    {
      name: "Royal Heritage Garden",
      tag: "Main Wedding Ceremony",
      address: "Lake View Road, Shamla Hills, Bhopal, MP 462013",
      description: "Nestled along the scenic Upper Lake with majestic heritage sandstone arches and lush Mughal-style royal lawns.",
      mapsQuery: "Shamla+Hills+Bhopal",
      directUrl: "https://maps.google.com/?q=Shamla+Hills+Bhopal",
      image: "/images/mandap.jpg",
    },
    {
      name: "Grand Celebration Palace",
      tag: "Wedding Reception & Feast",
      address: "Hoshangabad Road, Bhopal, MP 462026",
      description: "A stately palace ballroom featuring grand crystal chandeliers, marble corridors, and regal hospitality.",
      mapsQuery: "Hoshangabad+Road+Bhopal",
      directUrl: "https://maps.google.com/?q=Hoshangabad+Road+Bhopal",
      image: "/images/reception.jpg",
    },
  ],

  gallery: [
    {
      id: "gal-4",
      title: "The Sacred Mandap by Night",
      subtitle: "Floral Canopies & Holy Havan Kund",
      src: "/images/mandap.jpg",
      aspect: "landscape",
    },
    {
      id: "gal-5",
      title: "Sacred Handfasting Ritual",
      subtitle: "Henna, Bangles & Rose Petals",
      src: "/images/ring-ceremony.jpg",
      aspect: "landscape",
    },
    {
      id: "gal-6",
      title: "Golden Haldi Festivities",
      subtitle: "Brass Urli, Marigolds & Fragrant Turmeric",
      src: "/images/haldi.jpg",
      aspect: "landscape",
    },
    {
      id: "gal-7",
      title: "Divine Mata Pujan Altar",
      subtitle: "Sacred Kalash, Mango Leaves & Diya Glow",
      src: "/images/mata-pujan.jpg",
      aspect: "landscape",
    },
    {
      id: "gal-8",
      title: "The Royal Pratibhoj Banquet",
      subtitle: "Opulent Chandeliers & Candlelit Feast",
      src: "/images/reception.jpg",
      aspect: "landscape",
    },
  ] as GalleryPhoto[],
};
