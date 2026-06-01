import React from 'react';
import { ArrowRight, Check, Copy, Plus } from 'lucide-react';

export default function ComposerTab({
  aiPrompt,
  setAiPrompt,
  aiImageToggle,
  setAiImageToggle,
  activeTone,
  setActiveTone,
  isGenerating,
  generatedItems,
  copySuccessId,
  handleAiGenerate,
  handleCopyText
}) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 select-none">
      
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zinc-900 tracking-tight leading-tight">
          What should we create today?
        </h2>
        <p className="text-zinc-400 text-sm font-medium mt-1.5">
          Generate beautiful, copy-pasteable marketing posts using dynamic AI models.
        </p>
      </div>

      {/* Central generator module card */}
      <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm flex flex-col gap-5">
        <div className="border border-zinc-200/80 rounded-xl p-3 bg-zinc-50/20 focus-within:border-red-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-100 transition-all">
          <textarea
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            placeholder="Share your idea... (e.g. A post about the launch of our new eco-friendly coffee beans)"
            className="w-full h-28 bg-transparent text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none resize-none leading-relaxed"
          />
          
          {/* Inside bottom bar */}
          <div className="flex justify-between items-center pt-3 border-t border-zinc-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-500">AI Image</span>
              <button
                type="button"
                onClick={() => setAiImageToggle(!aiImageToggle)}
                className={`w-9 h-5 rounded-full relative transition-all duration-300 cursor-pointer ${
                  aiImageToggle ? 'bg-[#ef4444]' : 'bg-zinc-200'
                }`}
              >
                <span className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.75 shadow-sm transition-all duration-300 ${
                  aiImageToggle ? 'left-[17px]' : 'left-0.75'
                }`} />
              </button>
            </div>

            <button
              onClick={handleAiGenerate}
              disabled={isGenerating || !aiPrompt.trim()}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all leading-tight cursor-pointer ${
                isGenerating || !aiPrompt.trim()
                  ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed border border-zinc-200'
                  : 'bg-[#0a0f1d] hover:bg-[#1a233d] text-white shadow-md'
              }`}
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <span>Generate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tone pills */}
        <div className="flex flex-wrap gap-2.5 justify-center">
          {['Professional', 'Creative', 'Funny', 'Minimalist', 'Excited'].map((tone) => {
            const isSelected = activeTone === tone;
            return (
              <button
                key={tone}
                type="button"
                onClick={() => setActiveTone(tone)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#ef4444] border-[#ef4444] text-white shadow-sm'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 text-zinc-500 hover:text-zinc-800'
                }`}
              >
                {tone}
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent generations feed */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-base text-zinc-950">Recent Generations</h3>
          <span className="text-zinc-400 text-xs font-semibold">{generatedItems.length} total</span>
        </div>

        <div className="space-y-4">
          {generatedItems.map((item) => (
            <div key={item.id} className="bg-white border border-zinc-200/60 rounded-2xl p-5 shadow-xs flex flex-col gap-4">
              <div className="flex justify-between items-center text-[10px] font-bold">
                <span className="text-zinc-400 font-mono">{item.date}</span>
                <span className="bg-red-50 text-[#ef4444] px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.tone}
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-800 leading-relaxed whitespace-pre-wrap">
                {item.content}
              </p>
              
              {/* Copy Paste Utilities */}
              <div className="flex justify-end gap-2 border-t border-zinc-100 pt-3.5">
                <button
                  type="button"
                  onClick={() => handleCopyText(item.content, item.id)}
                  className="bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copySuccessId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 stroke-[2]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
