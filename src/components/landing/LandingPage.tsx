'use client';

import NavBar from './sections/NavBar';
import HeroSection from './sections/HeroSection';
import ValueProps from './sections/ValueProps';
import SyllabusBento from './sections/SyllabusBento';
import ToolsMarquee from './sections/ToolsMarquee';
import CtaSection from './sections/CtaSection';
import TestimonialSection from './sections/TestimonialSection';
import FooterSection from './sections/FooterSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]" dir="rtl" lang="he">
      <NavBar />
      <main>
        <HeroSection />
        <ValueProps />
        <SyllabusBento />
        <ToolsMarquee />
        <CtaSection />
        <TestimonialSection />
      </main>
      <FooterSection />
    </div>
  );
}
