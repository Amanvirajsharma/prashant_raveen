# Royal Indian Hindu Wedding Invitation Website
### Aarav Sharma & Siya Verma • 18 February 2027 • Bhopal, Madhya Pradesh

A bespoke, production-quality digital wedding invitation crafted with royal Indian heritage aesthetics, modern editorial typography, spiritual blessings, and interactive motion design.

---

## 🌟 Highlights & Features

1. **Cinematic Opening Experience (`InvitationIntro.tsx`)**
   - Full-screen ceremonial folio / royal invitation envelope.
   - Golden Shri Ganesh symbol (`॥ श्री गणेशाय नमः ॥`), glowing brass diyas, and Ram Mandir motif.
   - Interactive wax seal button: *"Open Wedding Invitation"* with smooth 3D unfolding animation, celebratory confetti, and gentle ambient flute and tanpura drone.
   - Instant *"Skip to website"* option for complete accessibility.

2. **Dedicated Shri Ram Mandir Spiritual Section (`RamMandirSection.tsx`)**
   - Architectural artwork of the golden sandstone Ram Mandir, Ayodhya.
   - Temple-inspired arches, shikhara motifs, glowing steps, and lotus artwork.
   - Sacred Hindi blessing:
     > *"श्री राम की कृपा से, दो दिल एक नए सफर की शुरुआत करने जा रहे हैं।"*

3. **Editorial Couple Introduction (`CoupleSection.tsx`)**
   - Aarav Sharma (Groom) & Siya Verma (Bride).
   - Heritage royal arch frames with gold filigree and traditional corner motifs.
   - Romantic editorial introduction paragraph and elder lineage notes.

4. **Four Distinct Celebrations Timeline (`WeddingEvents.tsx`)**
   - **Mata Pujan** — 16 February 2027 (Tuesday, 10:00 AM) • Marigold & sacred kalash aesthetic.
   - **Haldi Ceremony** — 17 February 2027 (Wednesday, 11:00 AM) • Festive yellow & mustard floral garden.
   - **The Wedding Ceremony** — 18 February 2027 (Thursday, 8:00 PM) • Grand night mandap, sacred havan kund, seven pheras.
   - **शुभ विवाह प्रीतिभोज (Wedding Reception & Feast)** — 19 February 2027 (Friday, 7:00 PM) • Opulent palace banquet hall & chandeliers.
   - Every event includes calculated days of the week, times, venues, dress codes, Google Maps directions, and individual "Add to Calendar" sync.

5. **Live Countdown Timer (`CountdownTimer.tsx`)**
   - Configured in the `Asia/Kolkata` (+05:30) timezone.
   - Live animated Days, Hours, Minutes, and Seconds counters.
   - Safe state when time elapses: *"The celebration of forever has begun."*
   - Direct Google Calendar reminder button.

6. **Our Wedding Story (`WeddingStory.tsx`)**
   - Milestones: The First Meeting, When Two Worlds Aligned, Families Coming Together, and The Forever Promise.
   - Horizontal editorial timeline on desktop, vertical connected timeline on mobile.

7. **Traditional Family Invitation (`FamilySection.tsx`)**
   - Respectful Hindi elder invocation.
   - Sharma Family (Groom) and Verma Family (Bride) cards with grandparents and parents.

8. **Wedding Venues & Directions (`VenueSection.tsx`)**
   - Tabs for Royal Heritage Garden, Grand Celebration Palace, and Royal Garden Lawns.
   - Complete addresses, "Get Directions" links to Google Maps, and one-click "Copy Address" with toast feedback.

9. **Memories in Frame Gallery (`GallerySection.tsx`)**
   - Luxury editorial image grid with hover zoom.
   - Full-screen lightbox modal with previous/next controls, image captions, and keyboard navigation (`Esc`, `←`, `→`).

10. **RSVP with Dual Workflow (`RSVPSection.tsx` & `rsvpService.ts`)**
    - Guest full name, phone number, guest count, multi-event attendance selection, meal preferences (Pure Vegetarian, Jain Vegetarian), and personal blessings message.
    - Full client validation with celebratory confetti.
    - **Demo Mode**: Automatically persists to `localStorage`.
    - **Direct WhatsApp RSVP**: Pre-fills an elegant, polite WhatsApp message with all RSVP details directed to the couple's contact.
    - Extensible service architecture for easy backend database connection (REST, Supabase, Firebase, Google Sheets).

11. **Ambient Indian Classical Audio (`audioSynthesizer.ts`)**
    - Built-in Web Audio API synthesizer generating a meditative Tanpura drone (Sa-Pa in C#) and gentle bansuri flute harmonics in Raag Yaman.
    - 100% resilient with zero broken external audio URLs.
    - Non-intrusive mute/unmute control in the navbar.

12. **Interactive Petals & Visual Shimmer (`PetalOverlay.tsx`)**
    - Floating red rose petals, saffron marigold petals, and gold dust with natural physics on an HTML5 canvas.
    - Accessible: respects `prefers-reduced-motion` and includes an on-screen toggle button.

13. **Closing Vedic Blessing & Footer (`Footer.tsx`)**
    - Vedic Shloka: *"ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः..."*
    - Smooth "Back to Top" navigation button.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite
- **Styling**: Tailwind CSS v3.4 + Custom Heritage Parchment Design System
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Audio**: Web Audio API (Synthesized Classical Indian Sitar/Tanpura/Flute)

---

## 📂 Project Structure

```text
prashantwedding/
├── public/
│   ├── favicon.svg             # Bespoke royal monogram SVG
│   └── images/                 # Custom high-resolution editorial assets
│       ├── ram-mandir.jpg      # Sacred Ram Mandir Ayodhya artwork
│       ├── groom.jpg           # Aarav portrait
│       ├── bride.jpg           # Siya portrait
│       ├── mata-pujan.jpg      # Altar, kalash, marigolds
│       ├── haldi.jpg           # Brass urli, turmeric, garlands
│       ├── mandap.jpg          # Grand floral mandap with havan kund
│       ├── reception.jpg       # Palace ballroom banquet
│       ├── story-candid.jpg    # Balcony terrace golden hour candid
│       └── ring-ceremony.jpg   # Henna hands & rose petals ritual
├── src/
│   ├── components/
│   │   ├── InvitationIntro.tsx # Ceremonial opening envelope
│   │   ├── Navbar.tsx          # Responsive navigation & audio toggle
│   │   ├── HeroSection.tsx     # Grand royal hero
│   │   ├── RamMandirSection.tsx# Temple spiritual blessings
│   │   ├── CoupleSection.tsx   # Bride & groom editorial intro
│   │   ├── WeddingEvents.tsx   # Four distinct ceremony timelines
│   │   ├── CountdownTimer.tsx  # Live Asia/Kolkata countdown
│   │   ├── WeddingStory.tsx    # Relationship milestones
│   │   ├── FamilySection.tsx   # Traditional family invitation
│   │   ├── VenueSection.tsx    # Venues, maps, copy address
│   │   ├── GallerySection.tsx  # Photo grid & full-screen lightbox
│   │   ├── RSVPSection.tsx     # RSVP form & WhatsApp integration
│   │   ├── PetalOverlay.tsx    # Floating rose & marigold petals
│   │   └── Footer.tsx          # Vedic shloka & back to top
│   ├── data/
│   │   └── weddingData.ts      # CENTRAL CONFIG: all names, dates, venues, texts
│   ├── services/
│   │   └── rsvpService.ts      # API integration layer & WhatsApp link builder
│   ├── utils/
│   │   └── audioSynthesizer.ts # Web Audio ambient drone engine
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Parchment textures, gold foil, diya keyframes
├── tailwind.config.js          # Extended royal Indian color tokens
└── package.json
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ✏️ Replacing Wedding Details
To customize this website for any couple or family, simply update:
`src/data/weddingData.ts`

All couple names, bios, family lineages, event timings, venues, Google Maps links, and gallery images will automatically update across the entire website.
