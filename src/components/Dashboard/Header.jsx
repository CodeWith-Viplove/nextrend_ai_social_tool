import React from 'react';
import { Search } from 'lucide-react';

export default function Header({ activeTab }) {
  return (
    <header className="h-20 bg-white border-b border-zinc-200/80 flex items-center justify-between px-8 relative z-10 shrink-0 select-none">
      <div>
        <h1 className="text-xl font-bold text-zinc-900 leading-tight">
          {activeTab === 'dashboard' && 'Dashboard'}
          {activeTab === 'trending' && 'Tech Trends'}
          {activeTab === 'accounts' && 'Social Accounts'}
          {activeTab === 'scheduler' && 'Post Scheduler'}
          {activeTab === 'composer' && 'Generate with AI'}
        </h1>
        <p className="text-zinc-400 text-xs font-medium mt-0.5">
          Manage and automate your social presence
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-60">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-zinc-50 border border-zinc-200/80 rounded-full pl-9 pr-4 py-2 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100 transition-all"
          />
        </div>
        <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200/60 flex items-center justify-center text-zinc-600 text-xs font-bold font-mono">
          GB
        </div>
      </div>
    </header>
  );
}
