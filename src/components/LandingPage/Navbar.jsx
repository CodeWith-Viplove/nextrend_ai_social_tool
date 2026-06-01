import React from 'react';
import { Activity, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#ef4444] flex items-center justify-center text-white shadow-md shadow-red-200">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <span className="text-zinc-900 font-bold text-lg tracking-tight">AI Trend</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-zinc-500 hover:text-[#ef4444] transition-colors text-sm font-semibold">Features</a>
            <a href="#workflow" className="text-zinc-500 hover:text-[#ef4444] transition-colors text-sm font-semibold">Workflow</a>
            <a href="#platforms" className="text-zinc-500 hover:text-[#ef4444] transition-colors text-sm font-semibold">Platforms</a>
            <a href="#pricing" className="text-zinc-500 hover:text-[#ef4444] transition-colors text-sm font-semibold">Pricing</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="/login" className="text-zinc-500 hover:text-[#ef4444] transition-colors text-sm font-semibold">Sign in</a>
            <a href="/login" className="bg-[#ef4444] hover:bg-[#e03552] text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-1.5 transition-all shadow-md shadow-red-100 hover:shadow-lg active:scale-95">
              Start free <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
