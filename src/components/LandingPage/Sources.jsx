import React from 'react';

export default function Sources() {
  const sources = [
    {
      name: "Reddit r/programming",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#FF4500">
          <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.3-4.14 4.19.92c.02.85.72 1.54 1.57 1.54 1.1 0 2-.9 2-2s-.9-2-2-2c-.9 0-1.66.62-1.9 1.48l-4.62-1.02c-.22-.05-.44.08-.51.3l-1.56 4.96c-2.49.04-4.75.69-6.42 1.7-.54-.74-1.42-1.2-2.38-1.2-1.65 0-3 1.35-3 3 0 1.1.6 2.05 1.48 2.58-.08.42-.12.85-.12 1.29 0 4.14 4.93 7.5 11 7.5s11-3.36 11-7.5c0-.44-.04-.87-.12-1.28.87-.54 1.48-1.49 1.48-2.59zM6.5 14.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm10.75 3c-1.39 1.56-4.06 1.69-5.25 1.69s-3.86-.13-5.25-1.69c-.19-.21-.18-.54.03-.73s.54-.18.73.03c1.07 1.2 3.19 1.39 4.49 1.39s3.42-.19 4.49-1.39c.19-.21.52-.22.73-.03.21.19.22.52.03.73zm-.25-1c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      name: "Dev.to",
      icon: (
        <svg className="w-5 h-5 text-zinc-950 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm4.33 13.06c.72 0 1.28-.15 1.67-.44.38-.3.58-.78.58-1.45V13.8c0-.66-.2-1.14-.58-1.44-.39-.3-.95-.45-1.67-.45H6.26v4.15h1.07zm-.59-5.12h.73c.47 0 .82.09 1.05.28.23.19.34.5.34.95v1.2c0 .44-.11.75-.34.94-.23.19-.58.28-1.05.28h-.73v-3.65zm7.39 5.12h2.95v-1.05h-1.88v-1.46h1.7v-1.03h-1.7V12h1.88v-1.07h-2.95v5.13zm6.05 0l1.79-5.13h-1.12l-1.22 3.86-1.22-3.86h-1.13l1.8 5.13h1.1z"/>
        </svg>
      )
    },
    {
      name: "X / Twitter",
      icon: (
        <svg className="w-4 h-4 text-zinc-900 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "OpenAI Blog",
      icon: (
        <svg className="w-5 h-5 text-[#10a37f] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.728 11.23a3.593 3.593 0 0 0-.756-2.482 3.655 3.655 0 0 0-2.404-1.285 3.593 3.593 0 0 0-.256-2.593 3.655 3.655 0 0 0-1.874-2.023 3.592 3.592 0 0 0-2.128-.352 3.654 3.654 0 0 0-2.534 1.11 3.59 3.59 0 0 0-2.534-1.11 3.655 3.655 0 0 0-2.128.352A3.59 3.59 0 0 0 5.24 5.87a3.655 3.655 0 0 0-1.874 2.023 3.593 3.593 0 0 0-.256 2.593 3.655 3.655 0 0 0-2.404 1.285c-.868.966-1.144 2.274-.756 3.482A3.59 3.59 0 0 0 .706 17.74a3.655 3.655 0 0 0 2.404 1.285 3.59 3.59 0 0 0 .256 2.593c.69 1.196 1.874 1.956 3.128 2.023a3.59 3.59 0 0 0 2.128.352c1.233-.195 2.277-.96 2.534-2.11a3.59 3.59 0 0 0 2.534 2.11c1.233.195 2.277-.96 2.534-2.11a3.59 3.59 0 0 0 2.128.352 3.655 3.655 0 0 0 3.128-2.023 3.59 3.59 0 0 0 .256-2.593 3.655 3.655 0 0 0 2.404-1.285c.868-.966 1.144-2.274.756-3.482zm-12.01 7.204a2.235 2.235 0 0 1-1.134-.306l2.846-1.643a.585.585 0 0 0 .292-.507V12.01L14.34 13.52c0 .17-.091.328-.242.416l-3.953 2.282a2.23 2.23 0 0 1-1.129.308v-.092zm-2.434-2.316a2.235 2.235 0 0 1-.567-1.026l2.846 1.644c.148.085.33.085.478 0l3.654-2.11v3.023c0 .173-.092.33-.243.417l-3.953 2.283a2.233 2.233 0 0 1-2.215-.231zm-.3-4.888c0-.416.108-.825.314-1.186l2.846 1.643c.148.085.221.25.221.417v4.22L6.15 13.52a.48.48 0 0 1-.242-.416v-4.562zm6.26-3.614c.394 0 .783.104 1.133.306l-2.845 1.643a.585.585 0 0 0-.292.507v3.968L7.66 10.48c0-.17.092-.328.243-.416l3.953-2.282c.35-.202.75-.306 1.15-.306v-.092zm2.434 2.316a2.23 2.23 0 0 1 .567 1.026L11.83 7.848a.478.478 0 0 0-.478 0L7.7 9.958V6.935c0-.173.092-.33.243-.417l3.953-2.283a2.233 2.233 0 0 1 2.215.231zM18.15 10.48c0 .17-.092.328-.243.416l-3.654 2.11v-4.22l2.846-1.643c.355.205.632.518.788.895.156.377.213.791.163 1.196v1.246zM12 10.976l1.77 1.022-1.77 1.022-1.77-1.022 1.77-1.022z"/>
        </svg>
      )
    },
    {
      name: "Anthropic",
      icon: (
        <svg className="w-5 h-5 text-[#cc5500] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.75 3.32c-.34-.96-1.66-.96-2 0L5.35 18.52c-.22.62.24 1.28.9 1.28h2.09c.47 0 .88-.31 1.01-.76l1.37-4.48h6.56l1.37 4.48c.13.45.54.76 1.01.76h2.09c.66 0 1.12-.66.9-1.28L12.75 3.32zm-2.45 9.17l1.7-5.56 1.7 5.56h-3.4z" />
        </svg>
      )
    },
    {
      name: "Google AI",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="url(#google-ai-sources-grad)" />
          <defs>
            <linearGradient id="google-ai-sources-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="30%" stopColor="#EA4335" />
              <stop offset="70%" stopColor="#FBBC05" />
              <stop offset="100%" stopColor="#34A853" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "YouTube Tech",
      icon: (
        <svg className="w-5 h-5 text-[#FF0000] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5 text-[#0A66C2] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Stack Overflow",
      icon: (
        <svg className="w-5 h-5 text-[#f48024] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.986 21.865v-6.404h2.21v8.614H1.899v-8.614h2.21v6.404h14.877zM7.228 14.619l10.45 2.17.443-2.13-10.45-2.17-.443 2.13zm1.616-4.577l9.462 4.676.953-1.96-9.462-4.676-.953 1.96zm2.709-4.14l7.747 6.942 1.481-1.63-7.747-6.942-1.481 1.63zm3.93-3.09l5.485 8.81 1.88-1.162-5.485-8.81-1.88 1.162zM18.067 0l-1.414 1.714 8.796 7.258 1.414-1.714L18.067 0z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-zinc-50/65 py-14 border-y border-zinc-200/80 overflow-hidden relative select-none">
      {/* CSS Injection for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 35s linear infinite;
        }
        .marquee-container-hover:hover .animate-marquee-infinite {
          animation-play-state: paused;
        }
      `}} />

      {/* Decorative gradient overlays to create a smooth fade effect on the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-zinc-50 via-zinc-50/70 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-zinc-50 via-zinc-50/70 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        {/* Pulsing Live Section Header */}
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]"></span>
          </span>
          <p className="text-zinc-400 text-[10.5px] font-bold font-mono tracking-widest uppercase">
            Monitoring 24+ global tech sources in real time
          </p>
        </div>

        {/* Marquee Row */}
        <div className="flex overflow-hidden select-none w-full marquee-container-hover gap-8">
          {/* First loop track */}
          <div className="flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee-infinite">
            {sources.map((source, index) => (
              <div
                key={`track-1-${index}`}
                className="flex items-center gap-3 bg-white/90 border border-zinc-200/50 rounded-full px-5 py-2.5 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)] hover:border-zinc-300 hover:shadow-[0_6px_15px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {source.icon}
                <span className="text-zinc-800 text-sm font-semibold tracking-tight">{source.name}</span>
              </div>
            ))}
          </div>

          {/* Second identical loop track to ensure seamless infinite looping */}
          <div className="flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee-infinite" aria-hidden="true">
            {sources.map((source, index) => (
              <div
                key={`track-2-${index}`}
                className="flex items-center gap-3 bg-white/90 border border-zinc-200/50 rounded-full px-5 py-2.5 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)] hover:border-zinc-300 hover:shadow-[0_6px_15px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {source.icon}
                <span className="text-zinc-800 text-sm font-semibold tracking-tight">{source.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
