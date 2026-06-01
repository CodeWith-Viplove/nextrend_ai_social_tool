import React from 'react';
import Navbar from '@/components/LandingPage/Navbar';
import Hero from '@/components/LandingPage/Hero';
import Sources from '@/components/LandingPage/Sources';
import Features from '@/components/LandingPage/Features';
import Workflow from '@/components/LandingPage/Workflow';
import PlatformSection from '@/components/LandingPage/PlatformSection';
import Pricing from '@/components/LandingPage/Pricing';
import Footer from '@/components/LandingPage/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-red-50 selection:text-[#ef4444]">
      <Navbar />
      <Hero />
      <Sources />
      <Features />
      <Workflow />
      <PlatformSection />
      <Pricing />
      <Footer />
    </main>
  );
}
