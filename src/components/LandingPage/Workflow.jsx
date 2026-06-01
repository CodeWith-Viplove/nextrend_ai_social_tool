import React from 'react';
import { Search, Cpu, Sparkles, Rocket } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description: "We surface what's actually trending across 24+ tech sources, scored and ranked."
    },
    {
      number: "02",
      icon: Cpu,
      title: "Analyze",
      description: "AI agents cluster topics, predict engagement and match them to your audience."
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Generate",
      description: "One click → a script, a post, a thread, a caption — formatted per platform."
    },
    {
      number: "04",
      icon: Rocket,
      title: "Publish",
      description: "Export, copy, schedule. Repurpose across formats without rewriting from scratch."
    }
  ];

  return (
    <div className="bg-zinc-50/30 py-24 border-y border-zinc-200/50 select-none" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#ef4444] text-[10px] font-bold tracking-widest uppercase mb-3 block">Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mb-4">
            From signal to published, in minutes.
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl mx-auto font-medium">
            A focused four-step pipeline replacing hours of scrolling, researching and rewriting.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-zinc-200 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200/80 rounded-2xl p-6 relative z-10 hover:border-[#ef4444]/60 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-zinc-300 font-mono font-bold text-sm">{step.number}</span>
                <step.icon className="w-5 h-5 text-[#ef4444]" />
              </div>
              
              <h3 className="text-zinc-950 font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
