import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

export default function ConnectModal({ isConnectModalOpen, setIsConnectModalOpen, connectedPlatforms, handleTogglePlatform }) {
  if (!isConnectModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-zinc-900/35 backdrop-blur-xs flex items-center justify-center z-50 p-4 transition-all duration-300 select-none">
      <div className="bg-white border border-zinc-200 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden scale-100 transition-all">
        
        {/* Modal Header */}
        <div className="px-6 py-4.5 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/20">
          <h3 className="font-bold text-base text-zinc-900">Choose a Platform</h3>
          <button
            onClick={() => setIsConnectModalOpen(false)}
            className="w-8 h-8 rounded-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-150 flex items-center justify-center text-zinc-400 hover:text-zinc-700 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Social Platforms list */}
        <div className="p-5 flex flex-col gap-3">
          {Object.entries(connectedPlatforms).map(([key, config]) => {
            const PlatIcon = config.icon;
            const isConnected = config.connected;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  handleTogglePlatform(key);
                }}
                className={`flex items-center justify-between w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isConnected
                    ? 'bg-red-50/30 border-red-200/80 hover:bg-red-50/50'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-lg ${config.bg} flex items-center justify-center ${config.color} border border-zinc-150`}>
                    <PlatIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-sm font-bold ${isConnected ? 'text-[#ef4444]' : 'text-zinc-800'}`}>
                      {key === 'twitter' ? 'Twitter / X' : key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                    <span className="text-zinc-400 text-xs font-medium mt-0.5">
                      {isConnected ? 'Already connected' : key === 'linkedin' ? 'Post business articles and updates' : key === 'twitter' ? 'Post tweets, threads, and media' : key === 'facebook' ? 'Manage your pages and profile' : 'Share photos, reels and stories'}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 ml-4">
                  {isConnected ? (
                    <div className="w-6 h-6 rounded-full bg-[#ef4444] text-white flex items-center justify-center shadow shadow-red-200">
                      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal actions footer */}
        <div className="bg-zinc-50 px-6 py-4 flex justify-end border-t border-zinc-100">
          <button
            onClick={() => setIsConnectModalOpen(false)}
            className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all shadow-sm cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
