import React from 'react';
import { LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, sidebarTabs, isCollapsed, setIsCollapsed }) {
  return (
    <aside 
      className={`bg-white border-r border-zinc-200/80 flex flex-col justify-between h-full relative z-20 shrink-0 select-none transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Modern Collapsible Floating Border Button Toggle */}
      <button
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-7 w-6 h-6 rounded-full bg-white border border-zinc-200 hover:border-red-300 text-zinc-400 hover:text-[#ef4444] flex items-center justify-center cursor-pointer shadow-sm hover:shadow transition-all z-50 focus:outline-none"
        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        {isCollapsed ? (
          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
        )}
      </button>

      <div className="flex flex-col">
        {/* Logo Brand Header */}
        <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'gap-2.5'}`}>
          <div className="w-8 h-8 rounded-lg bg-[#ef4444] flex items-center justify-center text-white shadow-md shadow-red-200 shrink-0">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          {!isCollapsed && (
            <span className="font-bold text-xl tracking-tight text-zinc-900 truncate transition-opacity duration-300">
              AI Trend
            </span>
          )}
        </div>

        {/* Navigation Section */}
        <nav className="px-4 py-3 flex flex-col gap-1">
          <p className={`text-zinc-400 text-[10px] font-bold tracking-widest uppercase mb-2.5 px-2.5 ${isCollapsed ? 'text-center truncate' : ''}`}>
            {isCollapsed ? '•••' : 'MENU'}
          </p>

          {sidebarTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                title={isCollapsed ? tab.name : undefined}
                className={`relative flex items-center w-full rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isCollapsed 
                    ? 'justify-center p-2.5' 
                    : 'justify-between px-3.5 py-2.5'
                } ${isActive
                  ? 'bg-red-50/60 text-[#ef4444] font-semibold shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 shrink-0 transition-colors ${isActive ? 'text-[#ef4444]' : 'text-zinc-400'}`} />
                  {!isCollapsed && (
                    <span className="truncate">{tab.name}</span>
                  )}
                </div>
                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#ef4444] rounded-l-md" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User profile footer */}
      <div className={`p-4 border-t border-zinc-100 flex flex-col gap-3 ${isCollapsed ? 'items-center' : ''}`}>
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-1.5 py-1'}`}>
          <div className="w-9 h-9 rounded-full bg-[#ff4f7a] flex items-center justify-center text-white font-bold text-sm shadow-inner shadow-black/10 shrink-0">
            G
          </div>
          {!isCollapsed && (
            <div className="flex flex-col truncate">
              <span className="text-zinc-950 font-bold text-sm leading-tight truncate">Gautam Bhawsar</span>
              <span className="text-zinc-400 text-xs font-medium truncate max-w-[120px] mt-0.5">gautam@gmail.com</span>
            </div>
          )}
        </div>
        
        <button
          onClick={() => alert('Signing out...')}
          title={isCollapsed ? 'Sign Out' : undefined}
          className={`flex items-center w-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer ${
            isCollapsed 
              ? 'justify-center p-2.5' 
              : 'gap-3 px-3 py-2.5'
          }`}
        >
          <LogOut className="w-4.5 h-4.5 text-zinc-400 shrink-0" />
          {!isCollapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
