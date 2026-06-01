import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Data for Recharts AreaChart (Engagement over last week)
const lineData = [
  { name: 'Mon', views: 2400 },
  { name: 'Tue', views: 3600 },
  { name: 'Wed', views: 1800 },
  { name: 'Thu', views: 5100 },
  { name: 'Fri', views: 4200 },
  { name: 'Sat', views: 6800 },
  { name: 'Sun', views: 8000 }
];

// Data for Recharts Pie Donut (Platform follower percentage)
const pieData = [
  { name: 'LinkedIn', value: 50, color: '#0a66c2' },
  { name: 'Instagram', value: 30, color: '#e1306c' },
  { name: 'Twitter/X', value: 15, color: '#1f2937' },
  { name: 'Facebook', value: 5, color: '#1877f2' }
];

// Premium Custom Tooltip for Recharts AreaChart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-950 border border-zinc-800 text-white p-3 rounded-xl shadow-lg text-xs font-semibold">
        <p className="text-zinc-400 font-bold mb-1">{payload[0].payload.name}</p>
        <p className="text-[#ef4444] flex items-center gap-1">
          <span>Views:</span>
          <span className="font-mono text-zinc-100 font-bold">{payload[0].value.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function DashboardTab({ upcomingPosts, publishedPosts, connectedCount, connectedPlatforms }) {
  const [mounted, setMounted] = useState(false);

  // Guard against Next.js hydration mismatches on server-side measuring
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto select-none">
      
      {/* Header Greeting */}
      <div>
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
          Good morning! <span className="animate-bounce inline-block">👋</span>
        </h2>
        <p className="text-zinc-400 text-sm font-medium mt-1">
          Here's what's happening with your social accounts today.
        </p>
      </div>

      {/* Stats Row Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Stat 1 */}
        <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between h-[132px] hover:shadow-md hover:scale-[1.005] transition-all duration-300">
          <div className="flex justify-between items-start">
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Scheduled Posts</span>
            <span className="text-[#ef4444] text-[11px] font-bold bg-red-50/70 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <ArrowUpRight className="w-3 h-3" /> +2 today
            </span>
          </div>
          <p className="text-4xl font-bold text-zinc-950 tracking-tight">{upcomingPosts.length}</p>
        </div>

        {/* Stat 2 */}
        <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between h-[132px] hover:shadow-md hover:scale-[1.005] transition-all duration-300">
          <div className="flex justify-between items-start">
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Published Posts</span>
            <span className="text-[#ef4444] text-[11px] font-bold bg-red-50/70 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <ArrowUpRight className="w-3 h-3" /> All time
            </span>
          </div>
          <p className="text-4xl font-bold text-zinc-950 tracking-tight">{publishedPosts.length}</p>
        </div>

        {/* Stat 3 */}
        <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between h-[132px] hover:shadow-md hover:scale-[1.005] transition-all duration-300">
          <div className="flex justify-between items-start">
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Connected Accounts</span>
            <span className="text-[#ef4444] text-[11px] font-bold bg-red-50/70 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <ArrowUpRight className="w-3 h-3" /> Active
            </span>
          </div>
          <p className="text-4xl font-bold text-zinc-950 tracking-tight">{connectedCount}</p>
        </div>

      </div>

      {/* Analytics Recharts Grid (Placed ABOVE Recent Activity!) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Recharts AreaChart Card */}
        <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] lg:col-span-8 flex flex-col justify-between hover:shadow-md transition-all duration-300 min-h-[300px]">
          <div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-bold text-base text-zinc-900">Engagement Over Time</h3>
              <span className="text-[#ef4444] text-[11px] font-bold bg-red-50/70 px-2.5 py-1 rounded-full flex items-center gap-0.5">
                +4.2% growth
              </span>
            </div>
            <p className="text-zinc-400 text-xs font-medium">Views & interactions track across social networks</p>
          </div>
          
          <div className="w-full mt-6 h-[190px] relative">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={lineData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 4" stroke="#f1f3f5" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 700 }}
                  />
                  <YAxis 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{ fill: '#9ca3af', fontSize: 9, fontWeight: 700 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#ef4444" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorViews)" 
                    activeDot={{ r: 6, fill: '#ef4444', stroke: '#ffffff', strokeWidth: 1.5 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-zinc-50 rounded-xl animate-pulse flex items-center justify-center text-zinc-400 text-xs font-bold">
                Loading engagement charts...
              </div>
            )}
          </div>
        </div>

        {/* Recharts Pie Donut Chart Card */}
        <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] lg:col-span-4 flex flex-col justify-between hover:shadow-md transition-all duration-300 min-h-[300px]">
          <div>
            <h3 className="font-bold text-base text-zinc-900 mb-1">Audience by Platform</h3>
            <p className="text-zinc-400 text-xs font-medium">Follower distribution details</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 justify-center">
            {/* SVG Donut Chart container */}
            <div className="relative w-32 h-32 shrink-0">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={36}
                      outerRadius={48}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="w-full h-full bg-zinc-50 rounded-full animate-pulse" />
              )}
              
              {/* Centered Follower Number */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-base font-bold text-zinc-900 leading-tight">4.8k</span>
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Total</span>
              </div>
            </div>

            {/* Recharts Legend mapping */}
            <div className="flex flex-col gap-2 shrink-0 select-none">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full block shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-[11px] font-bold text-zinc-700">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Recent Activity Container Card (Placed BELOW Analytics Recharts!) */}
      <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-base text-zinc-900">Recent Activity</h3>
          <span className="text-zinc-400 text-xs font-medium">{publishedPosts.length} events</span>
        </div>

        <div className="divide-y divide-zinc-100">
          {publishedPosts.map((post) => (
            <div key={post.id} className="py-4 flex items-center justify-between gap-4 first:pt-0 last:pb-0 group">
              <div className="flex items-center gap-4">
                {/* Telegram paperplane-style icon */}
                <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 shrink-0 shadow-sm group-hover:bg-[#ef4444] group-hover:text-white transition-all duration-300">
                  <Send className="w-4 h-4 -rotate-12 translate-x-px -translate-y-px fill-current stroke-[2.5]" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-zinc-100 text-zinc-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      Published
                    </span>
                    
                    {/* Embedded platform icons */}
                    <div className="flex items-center gap-1.5 ml-1">
                      {post.platforms.map(plat => {
                        const PlatConfig = connectedPlatforms[plat];
                        const PlatIcon = PlatConfig?.icon;
                        return PlatIcon ? (
                          <span key={plat} className={`${PlatConfig.color}`} title={PlatConfig.handle}>
                            <PlatIcon className="w-3.5 h-3.5" />
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-zinc-800 leading-tight">
                    {post.content}
                  </span>
                </div>
              </div>
              <span className="text-zinc-400 text-xs font-medium shrink-0">
                {post.date}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
