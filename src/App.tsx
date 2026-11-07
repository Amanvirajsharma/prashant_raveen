import React, { useState } from 'react';
import { InvitationIntro } from './components/InvitationIntro';
import { PetalOverlay } from './components/PetalOverlay';
import { MusicFloatingButton } from './components/MusicFloatingButton';
import { HeroSection } from './components/HeroSection';
import { RamMandirSection } from './components/RamMandirSection';
import { CoupleSection } from './components/CoupleSection';
import { WeddingStory } from './components/WeddingStory';
import { WeddingEvents } from './components/WeddingEvents';
import { CountdownTimer } from './components/CountdownTimer';
import { FamilySection } from './components/FamilySection';
import { VenueSection } from './components/VenueSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAF5EC] text-[#33251F] selection:bg-[#C5A15B]/30 selection:text-[#5A0E1F] font-sans">
      
      {/* 1. Full-Screen Cinematic Opening: 3D Grand Ram Mandir Temple Gates */}
      <InvitationIntro
        isOpen={isInvitationOpen}
        onOpen={() => setIsInvitationOpen(true)}
      />

      {/* 2. Ambient Floating Rose & Marigold Petals */}
      <PetalOverlay />

      {/* 3. Floating Sacred Music Controller in Top-Right (No navbar per user preference) */}
      <MusicFloatingButton />

      {/* 4. Complete Royal Wedding Website (Everything restored & integrated) */}
      <div className={`transition-opacity duration-1000 ${isInvitationOpen ? 'opacity-100' : 'opacity-95'}`}>
        
        {/* Chapter 1: Grand Royal Hero Invocations */}
        <HeroSection />

        {/* Chapter 2: Shri Ram Mandir Ayodhya Sacred Temple Darshan & Blessings */}
        <RamMandirSection />

        {/* Chapter 3: The Royal Couple (Prashant Chouhan & Raveena Panwar - Royal Cream Theme) */}
        <CoupleSection />

        {/* Chapter 4: Our Wedding Story Milestones (Royal Cream Theme) */}
        <WeddingStory />

        {/* Chapter 5: Three Auspicious Celebrations (Mata Pujan, Vivah, Pratibhoj) */}
        <WeddingEvents />

        {/* Chapter 6: Live Astrolabe Countdown to Sacred Muhurat */}
        <CountdownTimer />

        {/* Chapter 7: Kul & Kutumb Traditional Family Lineage (Chouhan & Panwar Families) */}
        <FamilySection />

        {/* Chapter 8: Royal Destinations & Venues */}
        <VenueSection />

        {/* Chapter 9: Memories in Frame Gallery & Lightbox */}
        <GallerySection />

        {/* Chapter 11: Vedic Closing Blessing */}
        <Footer />
      </div>

    </div>
  );
};

export default App;
