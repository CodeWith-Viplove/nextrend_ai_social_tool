import React from 'react';
import { Compass, Brain, Zap, RefreshCw, Bell, Layout, ArrowUpRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Compass,
      title: "Trend Discovery Engine",
      description: "Continuously scrapes GitHub, HN, Reddit, X, AI labs and more. Deduped, scored, and clustered."
    },
    {
      icon: Brain,
      title: "AI Trend Analyzer",
      description: "Engagement prediction, sentiment, audience fit and topic clustering powered by GPT, Claude and Gemini."
    },
    {
      icon: Zap,
      title: "Multi-Platform Generator",
      description: "One trend → LinkedIn post, YouTube script, Reel hook, Twitter thread, blog draft. Every format covered."
    },
    {
      icon: RefreshCw,
      title: "Repurposing Engine",
      description: "Turn a YouTube script into a thread, a blog into a carousel, a long video into Shorts — automatically."
    },
    {
      icon: Bell,
      title: "Smart Trend Alerts",
      description: "Personalized push for emerging frameworks, viral repos and AI launches in your niche before they peak.",
      hasArrow: true
    },
    {
      icon: Layout,
      title: "Creator Workspace",
      description: "Drafts, folders, history, favorites and inline AI editing. Built for daily creator workflows."
    }
  ];

  return (
    <div className="bg-white py-24 select-none" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#ef4444] text-[10px] font-bold tracking-widest uppercase mb-3 block">Platform</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mb-4">
            An AI operating system for tech creators.
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl mx-auto font-medium">
            Every module a creator needs — from discovery to publish — composed into one focused workspace.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white border border-zinc-200/80 rounded-2xl p-6 relative overflow-hidden group hover:border-[#ef4444]/60 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md ${
                index === 4 ? 'bg-red-50/5 border-red-200/60 hover:border-[#ef4444]' : ''
              }`}
            >
              {feature.hasArrow && (
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-zinc-400 group-hover:text-[#ef4444] transition-colors" />
              )}
              
              <div className="w-10 h-10 bg-zinc-50 border border-zinc-150 rounded-lg flex items-center justify-center mb-4 text-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white transition-colors">
                <feature.icon className="w-5 h-5 stroke-[2]" />
              </div>
              
              <h3 className="text-zinc-950 font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">{feature.description}</p>
              
              {index === 3 && (
                <div className="absolute -bottom-6 -left-6 text-zinc-200/20 text-7xl font-black select-none pointer-events-none font-mono">
                  FROM
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
