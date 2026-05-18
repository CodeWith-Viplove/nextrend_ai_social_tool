import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-16">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      ></div>
      
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.05)_0%,transparent_70%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </span>
          <span className="text-zinc-400 text-sm font-medium">Live across 24+ tech sources right now</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          Tech trends to viral content, <br />
          <span className="text-lime-400">in one keystroke.</span>
        </h1>

        {/* Subheading */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          DevPulse AI monitors GitHub, Hacker News, X, Reddit, AI labs and more — 
          then turns the most relevant tech trends into platform-ready scripts, posts, and threads built for tech creators.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <button className="w-full sm:w-auto bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(163,230,53,0.3)]">
            Start creating free <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors">
            <Play className="w-4 h-4 fill-current" /> See it in action
          </button>
        </div>

        {/* Subtext */}
        <p className="text-zinc-600 text-sm">
          no credit card <span className="mx-1">•</span> 50 generations free <span className="mx-1">•</span> cancel anytime
        </p>
      </div>
    </div>
  );
}
