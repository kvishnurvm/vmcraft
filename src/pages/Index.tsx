import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import DesignServicesSection from "@/components/DesignServicesSection";
import SEOSection from "@/components/SEOSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

import ChapterTransition from "@/components/ChapterTransition";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      <Navbar />
      
      <HeroSection started={splashDone} />

      <ChapterTransition
        variant="wipe-up"
        nextChapter="Chapter 01"
        nextTitle="My Story"
      />
      <AboutSection />

      <ChapterTransition
        variant="wipe-gold"
        nextChapter="Chapter 02"
        nextTitle="My Arsenal"
      />
      <TechStackSection />

      <ChapterTransition
        variant="fade-scale"
        nextChapter="Chapter 03"
      />
      <ServicesSection />

      <ChapterTransition
        variant="wipe-up"
        nextChapter="Chapter 04"
        nextTitle="Selected Works"
      />
      <WorksSection />

      <ChapterTransition
        variant="fade-scale"
        nextChapter="Chapter 05"
      />
      <DesignServicesSection />

      <ChapterTransition variant="fade-scale" />
      <SEOSection />

      <ChapterTransition
        variant="wipe-gold"
        nextChapter="Final Chapter"
        nextTitle="Let's Connect"
      />
      <ContactSection />

      <WhatsAppFloat />
    </div>
  );
};

export default Index;
