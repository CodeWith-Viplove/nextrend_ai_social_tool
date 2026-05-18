import React from 'react';
import { Zap, ArrowRight, Code, Hash, Briefcase, Video, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-black border-t border-zinc-900">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-zinc-900">
        <div className="text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-lime-400">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stop scrolling. Start shipping.
          </h2>
          
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of tech creators turning daily trends into compounding content with DevPulse AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mb-4">
            <input 
              type="email" 
              placeholder="gautam.bhawsar8269@gmail.com" 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 text-white text-sm focus:outline-none focus:border-lime-500 transition-colors"
            />
            <button className="w-full sm:w-auto bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
              Get early access <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-zinc-600 text-sm">
            Free 50 generations <span className="mx-1">•</span> no credit card <span className="mx-1">•</span> unsubscribe anytime
          </p>
        </div>
      </div>

      {/* Actual Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-lime-400" />
              </div>
              <span className="text-white font-semibold text-lg">DevPulse AI</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs mb-6">
              Discover trends. Create faster. Grow smarter. The AI content engine built for tech creators.
            </p>
            
            {/* Social Icons (using safe fallbacks) */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <Code className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <Hash className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Workflow</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Platforms</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Docs</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">API</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Creator guides</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Trend reports</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} DevPulse AI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
