import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sources from '@/components/Sources';
import Features from '@/components/Features';
import Workflow from '@/components/Workflow';
import PlatformSection from '@/components/PlatformSection';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
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
