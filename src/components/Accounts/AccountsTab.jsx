import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function AccountsTab({ connectedPlatforms, connectedCount, setIsConnectModalOpen, handleTogglePlatform }) {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto select-none">
      
      <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-bold text-lg text-zinc-950">Connected Accounts</h3>
            <p className="text-zinc-400 text-xs font-medium mt-1">{connectedCount} of 4 platforms connected</p>
          </div>
          <button
            onClick={() => setIsConnectModalOpen(true)}
            className="bg-[#ef4444] hover:bg-[#e03552] text-white text-sm font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-md shadow-red-100 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[3]" /> Connect Account
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(connectedPlatforms).map(([key, config]) => {
            const PlatIcon = config.icon;
            return config.connected ? (
              <div key={key} className="bg-white border border-zinc-200/80 rounded-2xl p-5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-zinc-300 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className={`w-11 h-11 rounded-xl ${config.bg} flex items-center justify-center ${config.color} border border-zinc-150`}>
                    <PlatIcon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-950 leading-snug">{config.name}</h4>
                    <p className="text-zinc-400 text-xs font-medium mt-0.5">{config.handle}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold bg-emerald-50 px-3 py-1.5 rounded-full">
                    <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black">✓</span>
                    Connected
                  </span>
                  <button
                    onClick={() => handleTogglePlatform(key)}
                    title="Disconnect Platform"
                    className="w-9 h-9 rounded-full hover:bg-red-50 text-zinc-400 hover:text-red-500 flex items-center justify-center transition-all border border-transparent hover:border-red-100 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div key={key} className="bg-zinc-50/50 border border-zinc-200/40 border-dashed rounded-2xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-3.5 opacity-55">
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400 border border-zinc-200">
                    <PlatIcon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-500 leading-snug">{key.toUpperCase()}</h4>
                    <p className="text-zinc-400 text-xs font-medium mt-0.5">Not connected</p>
                  </div>
                </div>
                <button
                  onClick={() => handleTogglePlatform(key)}
                  className="border border-zinc-200 hover:border-red-200 text-zinc-600 hover:text-[#ef4444] hover:bg-red-50/20 text-xs font-bold px-4 py-2 rounded-full transition-all cursor-pointer"
                >
                  Connect
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
