import React from 'react';
import { Briefcase, Video, Camera, Hash, FileText, Code, Check } from 'lucide-react';

export default function PlatformSection() {
  const platforms = [
    {
      icon: Briefcase,
      name: "LinkedIn",
      features: ["Thought leadership posts", "Technical explainers", "Story-based hooks"]
    },
    {
      icon: Video,
      name: "YouTube",
      features: ["Long-form scripts", "Shorts scripts", "SEO titles & tags"]
    },
    {
      icon: Camera,
      name: "Instagram",
      features: ["Reel scripts", "Carousels", "Captions & CTAs"]
    },
    {
      icon: Hash,
      name: "X / Twitter",
      features: ["Viral threads", "Short-form posts", "Hook variations"]
    },
    {
      icon: FileText,
      name: "Blog & Newsletter",
      features: ["SEO-ready outlines", "Technical articles", "Newsletter drafts"]
    },
    {
      icon: Code,
      name: "Dev Communities",
      features: ["Dev.to articles", "Reddit posts", "Hashnode drafts"]
    }
  ];

  return (
    <div className="bg-white py-24 select-none" id="platforms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#ef4444] text-[10px] font-bold tracking-widest uppercase mb-3 block">Multi-Platform</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mb-4">
            One trend. Every platform. Native voice.
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl mx-auto font-medium">
            Generate content tuned to each platform&apos;s format, length, tone and audience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200/80 rounded-2xl p-6 hover:border-[#ef4444]/60 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-zinc-50 border border-zinc-150 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-[#ef4444] transition-colors">
                  <platform.icon className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-zinc-950 font-bold text-lg">{platform.name}</h3>
              </div>
              
              <ul className="space-y-3">
                {platform.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 stroke-[3]" />
                    <span className="text-zinc-500 text-sm font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
