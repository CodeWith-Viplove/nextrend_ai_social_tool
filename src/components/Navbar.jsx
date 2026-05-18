import React from 'react';
import { Activity, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-lime-400" />
            </div>
            <span className="text-white font-semibold text-lg">DevPulse <span className="text-white">AI</span></span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Features</a>
            <a href="#workflow" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Workflow</a>
            <a href="#platforms" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Platforms</a>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Pricing</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="#signin" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Sign in</a>
            <button className="bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-colors">
              Start free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
