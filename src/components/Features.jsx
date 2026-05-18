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
    <div className="bg-black py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lime-400 text-xs font-mono font-bold tracking-widest uppercase mb-3 block">Platform</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            An AI operating system for tech creators.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every module a creator needs — from discovery to publish — composed into one focused workspace.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors ${
                index === 4 ? 'bg-zinc-900/80 border-lime-500/20' : ''
              }`}
            >
              {feature.hasArrow && (
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              )}
              
              <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center mb-4 text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-colors">
                <feature.icon className="w-5 h-5" />
              </div>
              
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              
              {/* Special style for index 3 (Repurposing Engine) to add that big text if needed, or I can just leave it clean */}
              {index === 3 && (
                <div className="absolute -bottom-6 -left-6 text-zinc-800/10 text-7xl font-bold select-none pointer-events-none">
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
