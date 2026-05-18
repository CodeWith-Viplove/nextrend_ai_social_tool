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
    <div className="bg-black py-24" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lime-400 text-xs font-mono font-bold tracking-widest uppercase mb-3 block">Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From signal to published, in minutes.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A focused four-step pipeline replacing hours of scrolling, researching and rewriting.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-zinc-800 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 relative z-10 hover:border-zinc-700 transition-colors group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-zinc-700 font-mono font-bold text-sm">{step.number}</span>
                <step.icon className="w-5 h-5 text-lime-400" />
              </div>
              
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
