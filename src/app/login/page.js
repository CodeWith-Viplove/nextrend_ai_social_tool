"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Lock, User, Eye, EyeOff, Check } from 'lucide-react';

// Custom Platform SVG Brand Icons for the floating widgets
const PlatformIcons = {
  linkedin: (
    <svg className="w-5 h-5 text-[#0A66C2] fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  twitter: (
    <svg className="w-4.5 h-4.5 text-white fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5 text-[#FF0000] fill-current" viewBox="0 0 24 24">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  medium: (
    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
      <path d="M13.54 12a6.8 6.8 0 1 1-6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z"/>
    </svg>
  )
};

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  // Parallax motion tracking coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft springs for high-fidelity interactive physics
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  // Parallax shifts for different virtual depth layers (Z-space depth separation)
  const centralX = useTransform(springX, (val) => val / 45);
  const centralY = useTransform(springY, (val) => val / 45);

  const linkedinX = useTransform(springX, (val) => val / 20);
  const linkedinY = useTransform(springY, (val) => val / 20);

  const twitterX = useTransform(springX, (val) => val / 15);
  const twitterY = useTransform(springY, (val) => val / 15);

  const instagramX = useTransform(springX, (val) => val / 28);
  const instagramY = useTransform(springY, (val) => val / 28);

  const youtubeX = useTransform(springX, (val) => val / 12);
  const youtubeY = useTransform(springY, (val) => val / 12);

  const mediumX = useTransform(springX, (val) => val / 35);
  const mediumY = useTransform(springY, (val) => val / 35);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request and redirect to dashboard
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white select-none overflow-hidden antialiased" style={{ fontFamily: "'Google Sans Flex', Inter, ui-sans-serif, system-ui, sans-serif" }}>
      
      {/* LEFT SIDE PANEL: Ambient Tech Image Overlay (Hidden on Mobile) */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hidden lg:flex lg:w-[50%] xl:w-[55%] relative overflow-hidden bg-[#070913] items-center justify-center cursor-default select-none"
      >
        {/* Abstract Fluid Red/Rose Tech Art Background */}
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-[1.03] transition-transform duration-[12s] ease-out pointer-events-none"
          alt="Abstract Red Tech Artwork"
        />

        {/* Ambient coordinate grids */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none z-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
          }}
        />

        {/* Soft radial glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#070913_95%)] pointer-events-none" />

        {/* Sleek Minimalist Splash Core Overlay (Centered & High-End) */}
        <div className="z-10 relative w-full max-w-[440px] h-[480px] flex items-center justify-center">
          
          {/* Static High-Fidelity Network Coordinate Connecting Lines Web */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0 overflow-visible">
            <defs>
              <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#ff4f7a" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <line x1="13%" y1="19%" x2="50%" y2="50%" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 4" />
            <line x1="87%" y1="25%" x2="50%" y2="50%" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 4" />
            <line x1="11%" y1="80%" x2="50%" y2="50%" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 4" />
            <line x1="90%" y1="73%" x2="50%" y2="50%" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 4" />
            <line x1="50%" y1="7%"  x2="50%" y2="50%" stroke="url(#lineGlow)" strokeWidth="1.5" strokeDasharray="3 4" />
          </svg>

          {/* Centered Brand Core Block */}
          <motion.div 
            style={{ x: centralX, y: centralY }}
            className="z-10 text-center flex flex-col items-center gap-7 px-10 relative pointer-events-none"
          >
            {/* Glowing Red Brand Icon container with high-end breathing float */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="p-[2.5px] rounded-3xl bg-gradient-to-tr from-white/10 via-white/30 to-transparent shadow-[0_0_40px_rgba(239,68,68,0.25)]"
            >
              <div className="w-16 h-16 rounded-[22px] bg-gradient-to-tr from-[#ef4444] to-[#ff4f7a] flex items-center justify-center text-white shadow-xl shadow-red-500/10">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
            </motion.div>

            {/* Luxury Typography */}
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-5xl font-black tracking-tight leading-none">
                AI <span className="bg-gradient-to-r from-[#ef4444] to-[#ff4f7a] bg-clip-text text-transparent">Trend</span>
              </h2>
              <p className="text-zinc-400 text-sm font-semibold max-w-[280px] leading-relaxed mx-auto">
                Tech trends to viral content, <br />in one keystroke.
              </p>
            </div>

            {/* Micro status indicator: Sleek glassmorphic capsule */}
            <div className="flex items-center gap-2 mt-2 bg-white/[0.03] border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ef4444]"></span>
              </span>
              <span className="text-zinc-400 text-[9px] font-extrabold font-mono tracking-widest uppercase">24+ Sources Live</span>
            </div>
          </motion.div>

          {/* FLOATING PLATFORM ICONS (Nested motion.divs to separate Mouse Parallax from Idle Floating) */}
          
          {/* LinkedIn Icon */}
          <motion.div
            style={{ x: linkedinX, y: linkedinY }}
            className="absolute left-[8%] top-[14%] z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-11 h-11 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg shadow-blue-500/10 hover:border-white/20 transition-colors"
              title="LinkedIn Integration"
            >
              {PlatformIcons.linkedin}
            </motion.div>
          </motion.div>

          {/* Twitter / X Icon */}
          <motion.div
            style={{ x: twitterX, y: twitterY }}
            className="absolute right-[8%] top-[20%] z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="w-10 h-10 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg shadow-white/10 hover:border-white/20 transition-colors"
              title="Twitter / X Integration"
            >
              {PlatformIcons.twitter}
            </motion.div>
          </motion.div>

          {/* Instagram Icon */}
          <motion.div
            style={{ x: instagramX, y: instagramY }}
            className="absolute left-[6%] bottom-[16%] z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="w-11 h-11 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg shadow-pink-500/10 hover:border-white/20 transition-colors"
              title="Instagram Integration"
            >
              {PlatformIcons.instagram}
            </motion.div>
          </motion.div>

          {/* YouTube Icon */}
          <motion.div
            style={{ x: youtubeX, y: youtubeY }}
            className="absolute right-[5%] bottom-[22%] z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="w-11 h-11 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg shadow-red-500/10 hover:border-white/20 transition-colors"
              title="YouTube Integration"
            >
              {PlatformIcons.youtube}
            </motion.div>
          </motion.div>

          {/* Medium Icon */}
          <motion.div
            style={{ x: mediumX, y: mediumY }}
            className="absolute left-[45%] top-[2%] z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="w-10 h-10 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg shadow-white/10 hover:border-white/20 transition-colors"
              title="Medium Integration"
            >
              {PlatformIcons.medium}
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* RIGHT SIDE PANEL: Premium Form Container */}
      <div className="w-full lg:w-[50%] xl:w-[45%] flex items-center justify-center p-8 sm:p-12 relative overflow-y-auto">
        
        {/* Soft light gray ambient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-50/50 via-white to-white pointer-events-none z-0" />

        <div className="w-full max-w-[380px] flex flex-col gap-7 relative z-10">
          
          {/* Logo Header Header */}
          <div className="flex flex-col items-center text-center">
            <div 
              onClick={() => window.location.href = '/'}
              className="w-9 h-9 rounded-lg bg-[#ef4444] flex items-center justify-center text-white shadow-md shadow-red-200 mb-6 cursor-pointer hover:bg-[#e03552] transition-colors active:scale-95"
              title="Go to Homepage"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-zinc-950 tracking-tight leading-none mb-2">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-zinc-400 text-xs font-medium leading-normal max-w-[280px]">
              {isLogin ? 'Log in to manage and automate your social presence' : 'Get started with 50 free generations today'}
            </p>
          </div>

          {/* Social Google Login Button */}
          <button 
            type="button"
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2.5 bg-white border border-zinc-200/80 hover:border-zinc-300 text-zinc-700 font-semibold text-xs py-3 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.98] cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Elegant Divider line */}
          <div className="flex items-center justify-between gap-4">
            <span className="h-px bg-zinc-100 flex-1" />
            <span className="text-[10px] font-bold text-zinc-400 font-mono uppercase tracking-widest">Or email</span>
            <span className="h-px bg-zinc-100 flex-1" />
          </div>

          {/* Form input field inputs */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {/* Full Name field (Only in Sign Up state!) */}
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-start w-full relative"
                >
                  <label className="text-zinc-500 text-[10.5px] font-bold tracking-wide uppercase font-mono mb-1.5 px-0.5">
                    Full Name
                  </label>
                  <div className="relative w-full">
                    <User className="w-4.5 h-4.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Gautam Bhawsar"
                      className="w-full bg-white border border-zinc-200/80 rounded-xl pl-10.5 pr-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all shadow-2xs"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email field */}
            <div className="flex flex-col items-start w-full relative">
              <label className="text-zinc-500 text-[10.5px] font-bold tracking-wide uppercase font-mono mb-1.5 px-0.5">
                Email Address
              </label>
              <div className="relative w-full">
                <Mail className="w-4.5 h-4.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="gautam@gmail.com"
                  className="w-full bg-white border border-zinc-200/80 rounded-xl pl-10.5 pr-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="flex flex-col items-start w-full relative">
              <div className="flex justify-between items-center w-full mb-1.5">
                <label className="text-zinc-500 text-[10.5px] font-bold tracking-wide uppercase font-mono px-0.5">
                  Password
                </label>
                {isLogin && (
                  <a href="#" className="text-zinc-400 hover:text-[#ef4444] text-[10.5px] font-bold transition-colors">
                    Forgot?
                  </a>
                )}
              </div>
              <div className="relative w-full">
                <Lock className="w-4.5 h-4.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-white border border-zinc-200/80 rounded-xl pl-10.5 pr-10.5 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 focus:outline-none cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              {/* Confirm Password field (Only in Sign Up state!) */}
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-start w-full relative"
                >
                  <label className="text-zinc-500 text-[10.5px] font-bold tracking-wide uppercase font-mono mb-1.5 px-0.5">
                    Confirm Password
                  </label>
                  <div className="relative w-full">
                    <Lock className="w-4.5 h-4.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-white border border-zinc-200/80 rounded-xl pl-10.5 pr-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all shadow-2xs"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Action button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full group bg-[#ef4444] hover:bg-[#e03552] disabled:bg-zinc-100 text-white disabled:text-zinc-400 font-semibold text-xs py-3.5 rounded-xl transition-all shadow-md shadow-red-100 disabled:shadow-none hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-1.5 mt-2.5 cursor-pointer disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Connecting...</span>
                </>
              ) : (
                <>
                  <span>{isLogin ? 'Sign In to Workspace' : 'Create Account'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>

          {/* Form view toggling link */}
          <div className="text-center pt-2">
            <p className="text-xs text-zinc-400 font-semibold">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setName('');
                  setConfirmPassword('');
                }}
                className="text-[#ef4444] hover:text-[#e03552] font-bold transition-all cursor-pointer bg-transparent border-none outline-none"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
