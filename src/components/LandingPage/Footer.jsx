import React from 'react';
import { Zap, ArrowRight, Code, Hash, Briefcase, Video, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-white border-t border-zinc-200/80 select-none">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-zinc-200/80">
        <div className="text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mb-6 text-[#ef4444] shadow-sm shadow-red-100">
            <Zap className="w-6 h-6 fill-current stroke-[2.5]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mb-4">
            Stop scrolling. Start shipping.
          </h2>
          
          <p className="text-zinc-500 text-base max-w-2xl mx-auto mb-8 font-medium">
            Join thousands of tech creators turning daily trends into compounding content with AI Trend.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mb-4">
            <input 
              type="email" 
              placeholder="gautam.bhawsar8269@gmail.com" 
              className="w-full bg-zinc-50 border border-zinc-200 rounded-full px-5 py-3.5 text-zinc-800 text-sm focus:outline-none focus:border-red-400 focus:bg-white transition-colors focus:ring-2 focus:ring-red-100 font-semibold"
            />
            <a href="/dashboard" className="w-full sm:w-auto bg-[#ef4444] hover:bg-[#e03552] text-white px-6 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all whitespace-nowrap shadow-md shadow-red-100 hover:shadow-lg active:scale-97 cursor-pointer text-sm">
              Get early access <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
          
          <p className="text-zinc-400 text-[10px] font-bold font-mono tracking-widest uppercase mt-3">
            Free 50 generations <span className="mx-1 text-red-300">•</span> no credit card <span className="mx-1 text-red-300">•</span> unsubscribe anytime
          </p>
        </div>
      </div>

      {/* Actual Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#ef4444] flex items-center justify-center text-white shadow-md shadow-red-200">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <span className="text-zinc-900 font-bold text-lg tracking-tight">AI Trend</span>
            </div>
            <p className="text-zinc-400 text-sm font-semibold max-w-xs mb-6">
              Discover trends. Create faster. Grow smarter. The AI content engine built for tech creators.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-400 hover:text-[#ef4444] transition-colors">
                <Code className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#ef4444] transition-colors">
                <Hash className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#ef4444] transition-colors">
                <Briefcase className="w-5 h-5 stroke-[2]" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#ef4444] transition-colors">
                <Video className="w-5 h-5 stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h3 className="text-zinc-950 font-bold text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Features</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Workflow</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Platforms</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Pricing</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-950 font-bold text-sm mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Docs</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">API</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Blog</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Creator guides</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Trend reports</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-950 font-bold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">About</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Careers</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Contact</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Privacy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#ef4444] text-sm font-semibold transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-200/80 text-center text-zinc-400 text-xs font-bold font-mono tracking-wider">
          <p>&copy; {new Date().getFullYear()} AI Trend. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
