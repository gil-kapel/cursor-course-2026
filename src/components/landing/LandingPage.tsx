'use client';

import NavBar from './sections/NavBar';
import HeroSection from './sections/HeroSection';
import SyllabusBento from './sections/SyllabusBento';
import ToolsMarquee from './sections/ToolsMarquee';
import CtaSection from './sections/CtaSection';
import TestimonialSection from './sections/TestimonialSection';
import FooterSection from './sections/FooterSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7]" dir="rtl" lang="he">
      <NavBar />
      <main>
        <HeroSection />
        <ToolsMarquee />
        <SyllabusBento />
        <TestimonialSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
