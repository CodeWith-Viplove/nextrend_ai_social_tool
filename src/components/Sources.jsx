import React from 'react';

export default function Sources() {
  const sources = [
    "Reddit r/programming",
    "Dev.to",
    "X / Twitter",
    "OpenAI Blog",
    "Anthropic",
    "Google AI",
    "YouTube Tech",
    "LinkedIn",
    "Stack Overflow"
  ];

  return (
    <div className="bg-black py-12 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-zinc-600 text-xs font-mono tracking-widest text-center mb-8 uppercase">
          Monitoring 24+ sources in real time
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {sources.map((source, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-lime-500 rounded-full"></span>
              <span className="text-zinc-400 text-sm font-medium">{source}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
