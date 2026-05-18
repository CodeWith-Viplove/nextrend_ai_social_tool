"use client";

import React, { useState } from 'react';
import { 
  Briefcase, 
  Video, 
  Camera, 
  Hash, 
  Layout, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Activity,
  Plus,
  Zap,
  Clock,
  ChevronRight,
  X as CloseIcon,
  Sparkles,
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';

export default function Dashboard() {
  const [activePlatform, setActivePlatform] = useState('linkedin');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const platforms = [
    { id: 'overview', name: 'Overview', icon: Layout },
    { id: 'linkedin', name: 'LinkedIn', icon: Briefcase },
    { id: 'youtube', name: 'YouTube', icon: Video },
    { id: 'instagram', name: 'Instagram', icon: Camera },
    { id: 'twitter', name: 'X / Twitter', icon: Hash },
  ];

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      
      // Platform specific dummy content
      if (activePlatform === 'linkedin' || activePlatform === 'overview') {
        setGeneratedContent(`🚀 **How to optimize your workflow in 2026**\n\nI've been testing a few new strategies this month and the results are clear: automation is no longer optional.\n\nHere are the top 3 things you need to implement today:\n1. AI-assisted trend discovery\n2. Multi-platform content syndication\n3. Automated reporting\n\nRead the full breakdown in my newsletter. Link in bio.\n\n#TechTrends #AI #WorkflowOptimization`);
      } else if (activePlatform === 'twitter') {
        setGeneratedContent(`1/5 🧵 How to optimize your workflow in 2026:\n\nI've been testing a few new strategies this month and the results are clear: automation is no longer optional.\n\nLet's dive in 👇`);
      } else if (activePlatform === 'youtube') {
        setGeneratedContent(`[SCENE 1: Intro]\n(Visual: Fast cut of screens, code, and graphs)\nHost: "In 2026, if you aren't automating your content, you're falling behind. Here is how I use AI to do it in 5 minutes."\n\n[SCENE 2: The Strategy]...`);
      } else if (activePlatform === 'instagram') {
        setGeneratedContent(`📸 **Swipe to see the 2026 Workflow Guide**\n\nAutomation is the game changer this year. Stop doing manual research.\n\nDouble tap if you agree! 💚\n\n#Automation #CreatorEconomy #Tech`);
      }
    }, 2000);
  };

  const renderContent = () => {
    const platform = platforms.find(p => p.id === activePlatform);
    
    return (
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">
              {platform?.name} Workspace
            </h1>
            <p className="text-zinc-500 text-sm">
              Manage and generate content for {platform?.name}.
            </p>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" /> New Content
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-500 text-sm">Total Posts</span>
              <Activity className="w-4 h-4 text-lime-400" />
            </div>
            <p className="text-2xl font-bold text-white">24</p>
            <p className="text-zinc-600 text-xs mt-1">+3 this week</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-500 text-sm">Avg. Engagement</span>
              <Zap className="w-4 h-4 text-lime-400" />
            </div>
            <p className="text-2xl font-bold text-white">4.2%</p>
            <p className="text-lime-400 text-xs mt-1">+0.5% vs last month</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-500 text-sm">Generations Left</span>
              <Clock className="w-4 h-4 text-lime-400" />
            </div>
            <p className="text-2xl font-bold text-white">32/50</p>
            <p className="text-zinc-600 text-xs mt-1">Resets in 12 days</p>
          </div>
        </div>

        {/* Content Area Mockup */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Drafts</h2>
          
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-lime-400">
                    {platform ? <platform.icon className="w-5 h-5" /> : <Layout className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">How to optimize your workflow in 2026</h3>
                    <p className="text-zinc-500 text-xs mt-0.5">Created {item} hours ago • Draft</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-zinc-950 border-r border-zinc-900 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-lime-400" />
            </div>
            <span className="text-white font-semibold text-lg">DevPulse AI</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-wider mb-2 px-2">Navigation</p>
          
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActivePlatform(platform.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full text-left ${
                activePlatform === platform.id
                  ? 'bg-zinc-900 text-white border border-zinc-800'
                  : 'text-zinc-500 hover:text-white hover:bg-zinc-900/50'
              }`}
            >
              <platform.icon className={`w-5 h-5 ${activePlatform === platform.id ? 'text-lime-400' : 'text-zinc-600'}`} />
              {platform.name}
            </button>
          ))}

          <p className="text-zinc-600 text-xs font-mono uppercase tracking-wider mt-6 mb-2 px-2">System</p>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-500 hover:text-white hover:bg-zinc-900/50 transition-colors w-full text-left">
            <Settings className="w-5 h-5 text-zinc-600" />
            Settings
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-500 hover:text-white hover:bg-zinc-900/50 transition-colors w-full text-left">
            <Bell className="w-5 h-5 text-zinc-600" />
            Notifications
          </button>
        </div>

        {/* User / Bottom */}
        <div className="p-4 border-t border-zinc-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
              GB
            </div>
            <div>
              <p className="text-white text-sm font-medium">Gautam B.</p>
              <p className="text-zinc-600 text-xs">Free Plan</p>
            </div>
          </div>
          <button className="text-zinc-600 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-16 border-b border-zinc-900 flex items-center justify-between px-8 bg-zinc-950">
          <div className="relative w-64">
            <Search className="w-4 h-4 text-zinc-600 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search content..." 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-lime-500 transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative text-zinc-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-lime-400 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white text-xs border border-zinc-700">
              GB
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-black">
          {renderContent()}
        </div>
      </div>

      {/* Generation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(163,230,53,0.15)]">
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-lime-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Generate Content</h2>
                  <p className="text-zinc-500 text-sm">Create platform-optimized content in seconds.</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setGeneratedContent('');
                  setPrompt('');
                }}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left Pane - Inputs */}
              <div className="w-1/2 p-6 border-r border-zinc-800 flex flex-col gap-6 overflow-y-auto">
                {/* Platform Selector */}
                <div>
                  <label className="text-zinc-400 text-xs font-mono uppercase tracking-wider mb-2 block">Platform</label>
                  <div className="grid grid-cols-5 gap-2">
                    {platforms.filter(p => p.id !== 'overview').map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => setActivePlatform(platform.id)}
                        className={`p-3 rounded-lg flex flex-col items-center justify-center gap-1 transition-colors ${
                          activePlatform === platform.id
                            ? 'bg-zinc-800 border border-lime-500 text-lime-400'
                            : 'bg-zinc-800/50 border border-zinc-700 text-zinc-500 hover:text-white'
                        }`}
                      >
                        <platform.icon className="w-5 h-5" />
                        <span className="text-xs truncate max-w-full">{platform.name.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Prompt Input */}
                <div>
                  <label className="text-zinc-400 text-xs font-mono uppercase tracking-wider mb-2 block">What do you want to create?</label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="E.g. How to optimize workflow in 2026 with AI tools..."
                    className="w-full h-32 bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-lime-500 transition-colors resize-none"
                  />
                </div>

                {/* Tone Selector */}
                <div>
                  <label className="text-zinc-400 text-xs font-mono uppercase tracking-wider mb-2 block">Tone</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Professional', 'Casual', 'Viral'].map((tone) => (
                      <button
                        key={tone}
                        className="p-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-xs text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  onClick={handleGenerate}
                  disabled={!prompt || isGenerating}
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors mt-auto ${
                    !prompt || isGenerating
                      ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                      : 'bg-lime-400 hover:bg-lime-500 text-black shadow-[0_0_20px_rgba(163,230,53,0.2)]'
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 fill-current" /> Generate Content
                    </>
                  )}
                </button>
              </div>

              {/* Right Pane - Preview */}
              <div className="w-1/2 p-6 flex flex-col bg-zinc-950/50">
                <label className="text-zinc-400 text-xs font-mono uppercase tracking-wider mb-2 block">Preview</label>
                
                <div className="flex-1 bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 overflow-y-auto relative">
                  {isGenerating ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 gap-2">
                      <RefreshCw className="w-6 h-6 animate-spin" />
                      <p className="text-sm">AI is writing your content...</p>
                    </div>
                  ) : generatedContent ? (
                    <div className="text-sm text-white whitespace-pre-wrap">
                      {generatedContent}
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 gap-2">
                      <Sparkles className="w-6 h-6 opacity-30" />
                      <p className="text-sm">Generated content will appear here</p>
                    </div>
                  )}
                </div>

                {generatedContent && (
                  <div className="flex justify-end gap-2 mt-4">
                    <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors border border-zinc-700">
                      <Copy className="w-4 h-4" /> Copy
                    </button>
                    <button className="bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                      <Check className="w-4 h-4" /> Use This
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
