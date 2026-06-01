"use client";

import React, { useState } from 'react';
import {
  LayoutGrid,
  Sparkles,
  Flame
} from 'lucide-react';

// Reusable platform icons
import { LinkedInIcon, XIcon, FacebookIcon, InstagramIcon } from '@/components/Dashboard/Icons';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Dashboard/Header';
import DashboardTab from '@/components/Dashboard/DashboardTab';
import ComposerTab from '@/components/AIComposer/ComposerTab';
import TrendingTab from '@/components/Trending/TrendingTab';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Static connected platform settings for dashboard analytics representation
  const connectedPlatforms = {
    linkedin: { connected: true, name: 'Gautam Bhawsar', handle: 'LinkedIn', icon: LinkedInIcon, color: 'text-[#0a66c2]', bg: 'bg-blue-50' },
    twitter: { connected: true, name: 'Gautam Bhawsar', handle: 'Twitter/X', icon: XIcon, color: 'text-zinc-900', bg: 'bg-zinc-100' },
    facebook: { connected: true, name: 'Gautam Bhawsar', handle: 'Facebook', icon: FacebookIcon, color: 'text-[#1877f2]', bg: 'bg-blue-50/50' },
    instagram: { connected: true, name: 'Gautam Bhawsar', handle: 'Instagram', icon: InstagramIcon, color: 'text-[#e1306c]', bg: 'bg-pink-50' }
  };

  // Static mock published history for visual analytics rendering
  const [posts] = useState([
    {
      id: 1,
      platforms: ['linkedin', 'instagram'],
      status: 'published',
      content: 'Deep learning reasoning models set a new industry benchmark.',
      date: '5/29/2026, 6:07:06 PM',
      media: null
    },
    {
      id: 2,
      platforms: ['instagram', 'twitter'],
      status: 'published',
      content: 'Rust language migrated core serverless architectures successfully.',
      date: '5/29/2026, 5:50:08 PM',
      media: null
    },
    {
      id: 3,
      platforms: ['linkedin', 'twitter'],
      status: 'published',
      content: 'Next.js Turbopack compiler stable compile speed metrics logged.',
      date: '5/29/2026, 5:48:05 PM',
      media: null
    }
  ]);

  // AI Composer Prompt and Generation States
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiImageToggle, setAiImageToggle] = useState(false);
  const [activeTone, setActiveTone] = useState('Professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copySuccessId, setCopySuccessId] = useState(null);
  const [generatedItems, setGeneratedItems] = useState([
    {
      id: 101,
      tone: 'Professional',
      content: '🚀 Optimizing workflow processes using Next.js & TailwindCSS is a total game changer. By migrating our UI system to a clean variable system featuring \'Google Sans Flex\', we unlocked major aesthetic performance increases.\n\nKey takeaways:\n1. Consistent HSL-tailored branding\n2. Smooth variable-font layout responsiveness\n3. Ultra-refined user transitions\n\nRead the full technical architectural overview in our documentation.',
      date: '5/29/2026, 6:06:03 PM'
    }
  ]);

  // Handles AI generation mock trigger
  const handleAiGenerate = () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);

    setTimeout(() => {
      let content = '';
      if (activeTone === 'Professional') {
        content = `🚀 Optimizing workflow processes using Next.js & TailwindCSS is a total game changer. By migrating our UI system to a clean variable system featuring 'Google Sans Flex', we unlocked major aesthetic performance increases.\n\nKey takeaways:\n1. Consistent HSL-tailored branding\n2. Smooth variable-font layout responsiveness\n3. Ultra-refined user transitions\n\nRead the full technical architectural overview in our documentation.`;
      } else if (activeTone === 'Creative') {
        content = `✨ What if your social dashboard didn't just track metrics, but felt alive? 🎨 We designed our newest interface around the stunning variable axes of 'Google Sans Flex'. The result? A typography design system that stretches, bends, and breathes alongside your interactions.\n\nStep into a gorgeous, red-accented creation workspace. Let's make something beautiful!`;
      } else if (activeTone === 'Funny') {
        content = `Me: "I will build a simple, quick MVP dashboard over the weekend."\n\n*3 hours later*\n\nMe: *Importing Google Sans Flex, optimizing custom bezier easing animations, fine-tuning HSL color values to the exact pixel, and writing detailed responsive grid wrappers.*\n\nNo regrets, beauty is in the details! 💻✨`;
      } else if (activeTone === 'Minimalist') {
        content = `Simplicity. Rebuilding /dashboard around structure, whitespace, and variable typography. Design speaks louder when it says less.`;
      } else { // Excited
        content = `OH MY GOD! 🎉 The newly redesigned AI Social Scheduler is officially LIVE! 🔥 Experience the absolute pinnacle of premium design featuring the sleekest red coral accents, custom file preview pipelines, and variable Google Sans Flex layouts! Type your idea, click generate, and publish instantly! Let's GOOOO! 🚀`;
      }

      const newGen = {
        id: Date.now(),
        tone: activeTone,
        content: content,
        date: new Date().toLocaleString()
      };

      setGeneratedItems(prev => [newGen, ...prev]);
      setIsGenerating(false);
    }, 1500);
  };

  // Copy to clipboard helper
  const handleCopyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopySuccessId(id);
    setTimeout(() => setCopySuccessId(null), 2000);
  };

  // Drafts post content from trending news card and pre-fills it inside AI Composer
  const handleDraftTrend = (news, platform = 'twitter') => {
    let draft = '';
    const cleanCategory = news.category.replace(/\s+/g, '');

    if (platform === 'linkedin') {
      draft = `🔥 **TECH BREAKTHROUGH:** ${news.title}\n\nA massive step forward for the ecosystem! ${news.description}\n\nHere are my key takeaways on this update:\n1️⃣ Major efficiency & performance unlocks\n2️⃣ Streamlining core developer workflows\n3️⃣ Setting new standards for future engineering\n\nWhat is your take on this change? Let's discuss! 👇\n\n#TechNews #${cleanCategory} #Innovation`;
    } else if (platform === 'twitter') {
      draft = `🚀 Huge news: ${news.title}!\n\n${news.description}\n\nThis is a total game changer for tech creators. What do you think? 👇\n\n#TechTrends #${cleanCategory}`;
    } else if (platform === 'instagram') {
      draft = `🔥 TREND ALERT: ${news.title}! 📸\n\n[Suggested Visual: A clean infographic of this news article!]\n\nDid you hear? ${news.description}\n\n👇 Tell me in the comments if you are hyped!\n\n#techtrends #${cleanCategory.toLowerCase()} #saas #developers`;
    } else if (platform === 'youtube') {
      draft = `🎥 **VIDEO CONCEPT HOOK & DESCRIPTION**\n\n[Hook/Intro Script]:\n"This is NOT a drill—${news.title} is officially here! If you are a developer, here is why your workflow is about to change forever..."\n\n[Suggested Title]:\nThe Secret ${news.category} Update Everyone Is Talking About! 🚀\n\n[Description Draft]:\nWe are deep-diving into ${news.source}'s massive announcement: ${news.description}.\n\n#youtube #${cleanCategory}`;
    } else if (platform === 'medium') {
      draft = `📝 **BLOG ARTICLE OUTLINE**\n\nTitle: Why ${news.title} Changes Everything\n\nIntroduction:\nWe examine the latest development from ${news.source} regarding ${news.category}: ${news.description}.\n\nKey Section Outline:\n1. The Background: Why this migration is happening now.\n2. Under the Hood: A deep technical analysis.\n3. The Impact: How this reshapes developer productivity.\n\nConclusion:\nThis update represents a critical turning point for the industry.`;
    } else {
      draft = `🔥 Quick thoughts on: "${news.title}" (via ${news.source})\n\n${news.description}\n\nThis is a massive step forward for the ecosystem! What are your thoughts? 👇\n\n#TechTrends #${cleanCategory}`;
    }

    setAiPrompt(draft);
    setActiveTab('composer');
  };

  // Prefills AI Composer prompt from trending news AI Script action
  const handleAiGenerateTrend = (news) => {
    const prompt = `Write a viral LinkedIn post summarizing the following trending news:\nTitle: ${news.title}\nSource: ${news.source}\nDescription: ${news.description}\nMake it engaging and insightful, using bullet points and hashtags.`;
    setAiPrompt(prompt);
    setActiveTab('composer');
  };

  // Sidebar navigation options configuration (Scheduler and Accounts removed completely!)
  const sidebarTabs = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutGrid },
    { id: 'trending', name: 'Trending', icon: Flame },
    { id: 'composer', name: 'Generate with AI', icon: Sparkles }
  ];

  return (
    <div className="flex h-screen bg-[#f8f9fa] text-zinc-800 font-sans select-none overflow-hidden antialiased" style={{ fontFamily: "'Google Sans Flex', Inter, ui-sans-serif, system-ui, sans-serif" }}>

      {/* Sidebar navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarTabs={sidebarTabs}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      {/* Main Workspace content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#f8f9fa]">

        {/* Dynamic header */}
        <Header activeTab={activeTab} />

        {/* Scrollable Screens */}
        <main className="flex-1 overflow-y-auto p-8 relative">

          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <DashboardTab
              upcomingPosts={[]}
              publishedPosts={posts}
              connectedCount={4}
              connectedPlatforms={connectedPlatforms}
            />
          )}

          {/* TAB 2: TRENDING */}
          {activeTab === 'trending' && (
            <TrendingTab
              onDraftPost={handleDraftTrend}
              onAiGenerate={handleAiGenerateTrend}
            />
          )}

          {/* TAB 3: AI COMPOSER */}
          {activeTab === 'composer' && (
            <ComposerTab
              aiPrompt={aiPrompt}
              setAiPrompt={setAiPrompt}
              aiImageToggle={aiImageToggle}
              setAiImageToggle={setAiImageToggle}
              activeTone={activeTone}
              setActiveTone={setActiveTone}
              isGenerating={isGenerating}
              generatedItems={generatedItems}
              copySuccessId={copySuccessId}
              handleAiGenerate={handleAiGenerate}
              handleCopyText={handleCopyText}
            />
          )}

        </main>
      </div>

    </div>
  );
}
