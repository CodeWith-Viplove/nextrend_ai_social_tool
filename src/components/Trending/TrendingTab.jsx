"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useAnimation, AnimatePresence } from 'framer-motion';
import { Search, Flame, MessageSquare, ArrowUpRight, Sparkles, RefreshCw, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';

export default function TrendingTab({ onDraftPost, onAiGenerate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation controls for swiping triggers
  const controls = useAnimation();
  const dragX = useMotionValue(0);

  // Map horizontal drag offsets to card rotations and opacity shifts
  const rotate = useTransform(dragX, [-200, 200], [-18, 18]);
  const opacity = useTransform(dragX, [-200, -150, 0, 150, 200], [0.6, 1, 1, 1, 0.6]);

  // Dynamic feedback indicators
  const swipeTextOpacity = useTransform(dragX, [-100, 0, 100], [1, 0, 1]);
  const swipeColor = useTransform(
    dragX,
    [-100, 0, 100],
    ["rgba(239, 68, 68, 1)", "rgba(113, 113, 122, 1)", "rgba(245, 158, 11, 1)"]
  );

  // Hardcoded technology trends related to technology fields for 2026
  const trendingNews = [
    {
      id: 1,
      title: "Next.js 16.2 Stable Release Introduces Turbopack by Default",
      source: "Vercel Blog",
      time: "2 hours ago",
      category: "Web Development",
      upvotes: 1250,
      comments: 340,
      description: "Next.js 16.2 compiles 3x faster using the Rust-based Turbopack engine by default, offering native integration with React 19 canary features and Server Actions."
    },
    {
      id: 2,
      title: "Gemini 3.5 Flash Sets New Benchmarks for Speed and Cost Efficiency",
      source: "Google AI",
      time: "4 hours ago",
      category: "AI & Machine Learning",
      upvotes: 2100,
      comments: 580,
      description: "Google DeepMind releases the Gemini 3.5 Flash model, delivering extreme performance for high-throughput agentic flows and low-latency API interactions."
    },
    {
      id: 3,
      title: "Tailwind CSS v4.0 Launches with Rust-Based Lightning Compiler",
      source: "Tailwind Labs",
      time: "1 day ago",
      category: "Web Development",
      upvotes: 950,
      comments: 210,
      description: "Tailwind v4 is re-engineered from the ground up to support Rust-powered compiling speeds and automatic class detection without configuration files."
    },
    {
      id: 4,
      title: "Rust Programming Language Reaches 85% Adoption in Core Infrastructure Projects",
      source: "Stack Overflow Trends",
      time: "2 days ago",
      category: "Mobile & Software",
      upvotes: 840,
      comments: 190,
      description: "Large enterprise teams have migrated high-performance backend pipelines to Rust, citing 40% memory reductions and extreme type safety benchmarks."
    },
    {
      id: 5,
      title: "Docker Announces Web Assembly (Wasm) Native Containers for Cloud Deployments",
      source: "Docker News",
      time: "3 days ago",
      category: "Cloud & DevOps",
      upvotes: 720,
      comments: 90,
      description: "Wasm containers allow developers to build sub-millisecond cold start times into their serverless pipelines, offering major improvements over Linux VM images."
    },
    {
      id: 6,
      title: "OpenAI Unveils GPT-5 Early Developer Access with Native Reasoning Core",
      source: "TechCrunch",
      time: "4 days ago",
      category: "AI & Machine Learning",
      upvotes: 3400,
      comments: 920,
      description: "Select developers report massive upgrades in multi-step problem solving, math logic, and automated tool use with the newly deployed o1-reasoning models."
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Web Development", "Mobile & Software", "Cloud & DevOps"];

  // Filter trends dynamically based on category and query searches
  const filteredNews = trendingNews.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Ensure index remains in bounds when filtered list changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [searchQuery, activeCategory]);

  const activeTrend = filteredNews[currentIndex];

  // Performs actual exit swiping trigger
  const handleSwipe = async (direction) => {
    if (direction === 'left') {
      // Fly Off Left (Skip)
      await controls.start({ x: -350, opacity: 0, transition: { duration: 0.25 } });
      setCurrentIndex((prev) => (prev + 1) % filteredNews.length);
      dragX.set(0);
      controls.set({ x: 0, opacity: 1 });
    } else if (direction === 'right') {
      // Fly Off Right (Send to AI Compose)
      await controls.start({ x: 350, opacity: 0, transition: { duration: 0.25 } });
      onAiGenerate(activeTrend);
      dragX.set(0);
      controls.set({ x: 0, opacity: 1 });
    }
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 130) {
      handleSwipe('right');
    } else if (info.offset.x < -130) {
      handleSwipe('left');
    } else {
      controls.start({ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } });
    }
  };

  // Custom Platform SVG Brand Icons
  const PlatformIcons = {
    linkedin: (
      <svg className="w-4 h-4 text-[#0A66C2] fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    twitter: (
      <svg className="w-3.5 h-3.5 text-zinc-900 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4 text-[#FF0000] fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    medium: (
      <svg className="w-4 h-4 text-zinc-950 fill-current" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 1 1-6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z"/>
      </svg>
    )
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto select-none relative">
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            Trending Tech News <Flame className="w-5.5 h-5.5 text-red-500 fill-current animate-pulse" />
          </h2>
          <p className="text-zinc-400 text-sm font-medium mt-1">
            Swipe through tech breakthroughs and choose your platform to draft posts.
          </p>
        </div>

        {/* Local Search Input Area */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trending technology..."
            className="w-full bg-white border border-zinc-200 rounded-full pl-9.5 pr-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Category Pills Header */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-red-50/80 border-[#ef4444] text-[#ef4444] shadow-xs'
                  : 'bg-white border-zinc-200 hover:border-zinc-300 text-zinc-500 hover:text-zinc-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Dynamic News list grid */}
      {filteredNews.length === 0 ? (
        <div className="bg-white border border-zinc-200/60 rounded-2xl p-16 flex flex-col items-center justify-center text-center shadow-xs">
          <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 mb-3.5">
            <Search className="w-5.5 h-5.5" />
          </div>
          <h4 className="font-bold text-sm text-zinc-800">No matching tech trends found</h4>
          <p className="text-zinc-400 text-xs font-medium mt-1">Try refining your search keyword or selecting a different category.</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-6 w-full relative">
          
          {/* Deck swipe directional help tags */}
          <div className="flex justify-between w-full max-w-[460px] px-4 mb-4 text-[10px] font-bold font-mono tracking-widest uppercase">
            <span className="text-zinc-400 flex items-center gap-1">← Drag Left to Skip</span>
            <span className="text-amber-500 flex items-center gap-1">Drag Right to AI Prompt →</span>
          </div>

          {/* Interactive Stack Deck */}
          <div className="relative w-full max-w-[460px] h-[480px] flex items-center justify-center">
            
            {/* Visual Stack Cards (Behind Active Card) - Spread out like Playing Cards! */}
            {filteredNews.length > 1 && (
              <>
                {/* Left Fanned Playing Card */}
                <div 
                  className="absolute w-full h-[450px] bg-white/95 border border-zinc-200/80 shadow-[0_12px_35px_rgba(0,0,0,0.04)] rounded-[2.25rem] pointer-events-none transform -translate-x-5 translate-y-2.5 -rotate-[4.5deg] scale-[0.97] z-0 transition-all duration-300"
                />
                
                {/* Right Fanned Playing Card */}
                <div 
                  className="absolute w-full h-[450px] bg-white/90 border border-zinc-200/70 shadow-[0_12px_35px_rgba(0,0,0,0.03)] rounded-[2.25rem] pointer-events-none transform translate-x-5 translate-y-2.5 rotate-[4.5deg] scale-[0.97] -z-10 transition-all duration-300"
                />
              </>
            )}

            {/* Core Swiping Active Card */}
            <motion.div
              style={{ x: dragX, rotate, opacity }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.65}
              onDragEnd={handleDragEnd}
              animate={controls}
              className="absolute w-full h-[450px] bg-white border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-[2.25rem] p-7 flex flex-col justify-between cursor-grab active:cursor-grabbing z-10 select-none hover:border-zinc-300 transition-colors"
            >
              {/* Card Top Section: Category & Score */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1 text-left">
                  <span className="bg-red-50 text-[#ef4444] px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider self-start">
                    {activeTrend.category}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400 font-mono mt-1.5">
                    {activeTrend.source} • {activeTrend.time}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded-md text-[10px] font-bold font-mono text-zinc-500">
                    <ArrowUpRight className="w-3 h-3 text-emerald-500 stroke-[2.5]" />
                    {activeTrend.upvotes}
                  </span>
                  <span className="flex items-center gap-1 bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded-md text-[10px] font-bold font-mono text-zinc-500">
                    <MessageSquare className="w-3 h-3 text-zinc-400" />
                    {activeTrend.comments}
                  </span>
                </div>
              </div>

              {/* Card Middle: Content Description */}
              <div className="text-left my-4 flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold text-xl text-zinc-950 leading-snug tracking-tight mb-3">
                  {activeTrend.title}
                </h3>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium">
                  {activeTrend.description}
                </p>
              </div>

              {/* Card Bottom Section: Platform Buttons */}
              <div className="border-t border-zinc-100 pt-5 flex flex-col gap-3">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block text-left">
                  Draft For Social Channels:
                </span>
                
                <div className="flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    {/* LinkedIn */}
                    <button
                      onClick={() => onDraftPost(activeTrend, 'linkedin')}
                      className="w-10 h-10 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100/40 hover:border-blue-200 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                      title="Draft for LinkedIn"
                    >
                      {PlatformIcons.linkedin}
                    </button>

                    {/* Instagram */}
                    <button
                      onClick={() => onDraftPost(activeTrend, 'instagram')}
                      className="w-10 h-10 rounded-xl bg-pink-50/50 hover:bg-pink-50 border border-pink-100/40 hover:border-pink-200 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                      title="Draft for Instagram"
                    >
                      {PlatformIcons.instagram}
                    </button>

                    {/* Twitter / X */}
                    <button
                      onClick={() => onDraftPost(activeTrend, 'twitter')}
                      className="w-10 h-10 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/50 hover:border-zinc-300 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                      title="Draft for Twitter / X"
                    >
                      {PlatformIcons.twitter}
                    </button>

                    {/* YouTube */}
                    <button
                      onClick={() => onDraftPost(activeTrend, 'youtube')}
                      className="w-10 h-10 rounded-xl bg-red-50/50 hover:bg-red-50 border border-red-100/40 hover:border-red-200 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                      title="Draft for YouTube"
                    >
                      {PlatformIcons.youtube}
                    </button>

                    {/* Medium */}
                    <button
                      onClick={() => onDraftPost(activeTrend, 'medium')}
                      className="w-10 h-10 rounded-xl bg-zinc-950/5 hover:bg-zinc-950/10 border border-zinc-900/5 hover:border-zinc-950/20 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                      title="Draft for Medium Blog"
                    >
                      {PlatformIcons.medium}
                    </button>
                  </div>

                  {/* AI Quick Script */}
                  <button
                    onClick={() => onAiGenerate(activeTrend)}
                    className="h-10 px-4 rounded-xl bg-red-50 hover:bg-red-100 border border-red-100/30 text-[#ef4444] flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer hover:scale-102 active:scale-95 shadow-2xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-100 shrink-0" />
                    <span>AI Script</span>
                  </button>
                </div>
              </div>

            </motion.div>

          </div>

          {/* Swipe Interactive Buttons & Feedback Track */}
          <div className="flex items-center gap-6 mt-10">
            {/* Click-to-swipe-left indicator */}
            <button
              onClick={() => handleSwipe('left')}
              className="w-12 h-12 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-800 transition-all cursor-pointer shadow-xs active:scale-95"
              title="Skip Trend"
            >
              <ChevronLeft className="w-6 h-6 shrink-0" />
            </button>

            {/* Deck indicators */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-black text-zinc-700 tracking-wider font-mono uppercase bg-zinc-100 border border-zinc-200/60 rounded-full px-4 py-1">
                Trend {currentIndex + 1} of {filteredNews.length}
              </span>
              <button 
                onClick={() => setCurrentIndex(0)} 
                className="text-[10px] font-bold text-zinc-400 hover:text-[#ef4444] transition-colors flex items-center gap-1 mt-2.5"
              >
                <RefreshCw className="w-3 h-3" /> Reset Deck
              </button>
            </div>

            {/* Click-to-swipe-right indicator */}
            <button
              onClick={() => handleSwipe('right')}
              className="w-12 h-12 rounded-full bg-red-50 hover:bg-red-100 border border-red-100 text-[#ef4444] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 animate-pulse"
              title="Send to AI Composer"
            >
              <ChevronRight className="w-6 h-6 shrink-0" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
