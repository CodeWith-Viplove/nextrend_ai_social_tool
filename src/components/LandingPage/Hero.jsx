"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, TrendingUp, Cpu, Calendar, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Spring physics for the 3D Parallax Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tiltX = useSpring(x, { stiffness: 100, damping: 20 });
  const tiltY = useSpring(y, { stiffness: 100, damping: 20 });

  // Map coordinate offsets to degree rotations
  const rotateX = useTransform(tiltY, [-300, 300], [15, -15]);
  const rotateY = useTransform(tiltX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate cursor position relative to center of the Hero container
    const relativeX = e.clientX - (rect.left + width / 2);
    const relativeY = e.clientY - (rect.top + height / 2);
    
    x.set(relativeX);
    y.set(relativeY);
    setCoords({ x: relativeX / 30, y: relativeY / 30 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* 1. Fine Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.035) 1px, transparent 1px)`,
          backgroundSize: '45px 45px',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* 2. Massive Soft Ambient Light-Beams */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-500/5 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-400/5 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Crisp SaaS Typography & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Glowing Capsule Active Live Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-red-50/60 border border-red-100/60 rounded-full px-4 py-1.5 mb-8 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]"></span>
            </span>
            <span className="text-zinc-500 text-[10.5px] font-semibold tracking-wider uppercase font-mono">
              Live Trend Ingestion Active
            </span>
          </motion.div>

          {/* Core Captivating Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.85rem] leading-[1.1] font-bold text-zinc-900 tracking-tight mb-6"
          >
            Tech trends to viral content, <br />
            <span className="text-[#ef4444] bg-gradient-to-r from-[#ef4444] to-[#f43f5e] bg-clip-text text-transparent">
              in one keystroke.
            </span>
          </motion.h1>

          {/* Product Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 text-base md:text-[0.98rem] leading-relaxed max-w-md mb-10 font-normal"
          >
            Instantly convert raw technology signals from GitHub, Hacker News, and Reddit into platform-ready viral drafts.
          </motion.p>

          {/* Dynamic Interactive Call to Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a 
              href="/dashboard" 
              className="w-full sm:w-auto group relative bg-[#ef4444] hover:bg-[#e03552] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-red-100 hover:shadow-xl active:scale-97 cursor-pointer text-sm"
            >
              Start creating free 
              <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="/dashboard" 
              className="w-full sm:w-auto bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200/80 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer text-sm"
            >
              <Play className="w-4 h-4 fill-zinc-500 text-zinc-500 shrink-0" /> 
              See it in action
            </a>
          </motion.div>

          {/* Social Proof Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <div className="flex -space-x-2.5">
              <img className="w-7.5 h-7.5 rounded-full border-2 border-white ring-1 ring-zinc-200/40" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="User 1" />
              <img className="w-7.5 h-7.5 rounded-full border-2 border-white ring-1 ring-zinc-200/40" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="User 2" />
              <img className="w-7.5 h-7.5 rounded-full border-2 border-white ring-1 ring-zinc-200/40" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80" alt="User 3" />
            </div>
            <div className="text-left">
              <p className="text-[11.5px] font-semibold text-zinc-700 tracking-tight">Trusted by 2,400+ tech influencers</p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Right Side: Interactive 3D Parallax Dashboard Deck */}
        <div className="lg:col-span-6 relative w-full h-[580px] flex items-center justify-center perspective-[1200px]">
          
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full max-w-[460px] h-[480px] transition-all duration-300 ease-out"
          >
            {/* Ambient Back Glow behind the cards */}
            <div className="absolute inset-4 rounded-3xl bg-red-500/10 filter blur-2xl pointer-events-none transform translate-z-[-20px]" />

            {/* CARD 1: Tech Trends Monitor Ingestion Card */}
            <motion.div
              style={{ transform: `translateZ(65px)` }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-6 w-[290px] bg-white/95 backdrop-blur-md border border-zinc-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-2xl p-4.5"
            >
              <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-wider font-mono text-zinc-500 uppercase">Live Trends Feed</span>
                </div>
                <TrendingUp className="w-3.5 h-3.5 text-zinc-400" />
              </div>
              
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-3 text-left">
                  <span className="text-xs font-semibold text-zinc-800 truncate max-w-[160px]">next/image compiler opt</span>
                  <span className="bg-red-50 text-[#ef4444] text-[9px] font-bold font-mono px-2 py-0.5 rounded-full shrink-0">GitHub • +2.4k</span>
                </div>
                <div className="flex items-center justify-between gap-3 text-left">
                  <span className="text-xs font-semibold text-zinc-800 truncate max-w-[160px]">Claude 4.5 system prompt</span>
                  <span className="bg-amber-50 text-amber-600 text-[9px] font-bold font-mono px-2 py-0.5 rounded-full shrink-0">HN • 482 pts</span>
                </div>
                <div className="flex items-center justify-between gap-3 text-left">
                  <span className="text-xs font-semibold text-zinc-800 truncate max-w-[160px]">React Compiler natively ready</span>
                  <span className="bg-indigo-50 text-indigo-600 text-[9px] font-bold font-mono px-2 py-0.5 rounded-full shrink-0">Reddit • 1.1k</span>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: AI Composer Social Post Draft Card */}
            <motion.div
              style={{ transform: `translateZ(105px)` }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-28 -right-8 w-[320px] bg-white/95 backdrop-blur-md border border-zinc-200/50 shadow-[0_25px_60px_rgba(0,0,0,0.08)] rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-red-50 text-[#ef4444]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider font-mono text-zinc-500 uppercase">AI Social Draft</span>
                </div>
                <span className="text-[9px] font-bold text-zinc-400 font-mono">148 / 280</span>
              </div>
              
              <div className="text-left mb-4">
                <p className="text-xs font-semibold text-zinc-800 leading-relaxed">
                  Next.js v16 is officially live! 🚀 <br />
                  Here is why it's a huge deal for devs: <br />
                  1️⃣ Instant Turbopack compilers <br />
                  2️⃣ Zero-config hydrate layers...
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-1 border-t border-zinc-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-bold text-zinc-400">Viral Score: 98%</span>
                </div>
                <button className="bg-red-50 text-[#ef4444] text-[9.5px] font-bold px-3 py-1 rounded-full hover:bg-red-100 transition-colors">
                  Sync Draft
                </button>
              </div>
            </motion.div>

            {/* CARD 3: Analytics / Engagement Spike Area Chart Card */}
            <motion.div
              style={{ transform: `translateZ(45px)` }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-2 -left-12 w-[310px] bg-white/95 backdrop-blur-md border border-zinc-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-orange-50 text-orange-500">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider font-mono text-zinc-500 uppercase">Engagement Spike</span>
                </div>
                <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">+12.8%</span>
              </div>
              
              <div className="text-left mb-4">
                <span className="text-[10px] font-bold text-zinc-400 font-mono uppercase tracking-wider block">Estimated Views</span>
                <span className="text-2xl font-black text-zinc-900 leading-tight">18,452</span>
              </div>
              
              {/* Custom High-Fidelity SVG Area Curve */}
              <div className="w-full h-16 relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Fill Area */}
                  <path 
                    d="M0 60 C30 48, 50 56, 80 35 C110 14, 130 45, 160 12 C180 -1, 190 2, 200 8 L200 60 Z" 
                    fill="url(#area-grad)" 
                  />
                  {/* Stroke Line */}
                  <path 
                    d="M0 60 C30 48, 50 56, 80 35 C110 14, 130 45, 160 12 C180 -1, 190 2, 200 8" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  {/* Pulsing focal point dot */}
                  <circle cx="160" cy="12" r="4" fill="#ef4444" />
                  <circle cx="160" cy="12" r="9" fill="#ef4444" fillOpacity="0.3" className="animate-ping" />
                </svg>
              </div>
            </motion.div>

          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
