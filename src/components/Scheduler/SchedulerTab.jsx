import React from 'react';
import { Clock, ImageIcon, X, ArrowRight } from 'lucide-react';

export default function SchedulerTab({
  connectedPlatforms,
  selectedComposePlatforms,
  setSelectedComposePlatforms,
  composeContent,
  setComposeContent,
  selectedFile,
  setSelectedFile,
  selectedFilePreview,
  setSelectedFilePreview,
  scheduleDate,
  setScheduleDate,
  scheduleTime,
  setScheduleTime,
  upcomingPosts,
  publishedPosts,
  fileInputRef,
  handleFileChange,
  handleDragOver,
  handleDrop,
  removeSelectedFile,
  handleSchedulePost,
  setPosts
}) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 select-none">
      
      {/* Left Column: Compose Form */}
      <form onSubmit={handleSchedulePost} className="lg:col-span-7 bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <h3 className="font-bold text-lg text-zinc-950">Compose Post</h3>
        
        {/* Platforms Picker */}
        <div>
          <label className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase block mb-3">PLATFORMS</label>
          <div className="flex gap-2">
            {Object.entries(connectedPlatforms).map(([key, config]) => {
              const PlatIcon = config.icon;
              const isSelected = selectedComposePlatforms.includes(key);
              const isConnected = config.connected;
              return (
                <button
                  key={key}
                  type="button"
                  disabled={!isConnected}
                  onClick={() => {
                    if (selectedComposePlatforms.includes(key)) {
                      setSelectedComposePlatforms(prev => prev.filter(x => x !== key));
                    } else {
                      setSelectedComposePlatforms(prev => [...prev, key]);
                    }
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    !isConnected 
                      ? 'bg-zinc-50 text-zinc-200 cursor-not-allowed opacity-30 border border-zinc-150' 
                      : isSelected
                      ? 'bg-red-50 text-[#ef4444] border-2 border-[#ef4444] shadow-sm'
                      : 'bg-zinc-50 border border-zinc-200/80 text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100'
                  }`}
                  title={isConnected ? `Select ${config.handle}` : `${key} account not connected`}
                >
                  <PlatIcon className="w-4.5 h-4.5" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Post Content */}
        <div>
          <label className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase block mb-2">CONTENT</label>
          <div className="border border-zinc-200/80 rounded-xl p-3 bg-zinc-50/30 focus-within:border-red-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-100 transition-all">
            <textarea
              value={composeContent}
              onChange={(e) => setComposeContent(e.target.value)}
              placeholder="What do you want to share today?"
              className="w-full h-36 bg-transparent text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none resize-none"
            />
            <div className="flex justify-end pt-1">
              <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${
                composeContent.length > 280 ? 'text-red-500 bg-red-50' : 'text-zinc-400'
              }`}>
                {composeContent.length}/280
              </span>
            </div>
          </div>
        </div>

        {/* Media Uploader */}
        <div>
          <label className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase block mb-2.5">MEDIA (OPTIONAL)</label>
          
          {selectedFilePreview ? (
            <div className="relative border border-zinc-250 rounded-xl overflow-hidden bg-zinc-50 flex items-center justify-center p-4">
              <img src={selectedFilePreview} alt="Upload preview" className="max-h-48 rounded-lg shadow-sm object-contain" />
              <button
                type="button"
                onClick={removeSelectedFile}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center shadow transition-all hover:scale-105 cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
          ) : (
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-zinc-200 hover:border-red-300 hover:bg-red-50/5 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*,video/*"
                className="hidden"
              />
              <div className="w-12 h-12 rounded-full bg-zinc-50 group-hover:bg-red-50 flex items-center justify-center text-zinc-400 group-hover:text-[#ef4444] transition-all mb-3.5 border border-zinc-100">
                <ImageIcon className="w-5.5 h-5.5 stroke-[2]" />
              </div>
              <p className="text-sm font-semibold text-zinc-700 group-hover:text-zinc-950">Click to upload image or video</p>
              <p className="text-zinc-400 text-[11px] font-medium mt-1">Supports drag and drop file here</p>
            </div>
          )}
        </div>

        {/* Scheduling Config */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase block mb-2">DATE</label>
            <input
              type="date"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200/80 rounded-xl px-4 py-2.5 text-xs text-zinc-700 focus:outline-none focus:border-red-400 focus:bg-white transition-all font-semibold cursor-pointer"
            />
          </div>
          <div>
            <label className="text-zinc-400 text-[10px] font-bold tracking-widest uppercase block mb-2">TIME</label>
            <input
              type="time"
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200/80 rounded-xl px-4 py-2.5 text-xs text-zinc-700 focus:outline-none focus:border-red-400 focus:bg-white transition-all font-semibold cursor-pointer"
            />
          </div>
        </div>

        {/* Action button */}
        <button
          type="submit"
          className="w-full bg-[#ef4444] hover:bg-[#e03552] text-white text-sm font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-md shadow-red-100 hover:shadow-lg active:scale-[0.99] mt-3 cursor-pointer"
        >
          <span>{scheduleDate && scheduleTime ? 'Schedule Post' : 'Post Now'}</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </form>

      {/* Right Column: Queues */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        
        {/* Upcoming Posts Card */}
        <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-base text-zinc-950">Upcoming</h3>
            <span className="text-zinc-400 text-xs font-bold font-mono bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded">
              {upcomingPosts.length}
            </span>
          </div>

          {upcomingPosts.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 mb-3.5">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-zinc-700">No posts scheduled yet</p>
              <p className="text-zinc-400 text-xs font-medium mt-0.5">Use the compose block to schedule content.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingPosts.map(post => (
                <div key={post.id} className="p-4 border border-zinc-200/60 rounded-xl bg-zinc-50/30 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1">
                      {post.platforms.map(plat => {
                        const PlatConfig = connectedPlatforms[plat];
                        const PlatIcon = PlatConfig?.icon;
                        return PlatIcon ? (
                          <span key={plat} className={`${PlatConfig?.color}`} title={PlatConfig?.handle}>
                            <PlatIcon className="w-4.5 h-4.5" />
                          </span>
                        ) : null;
                      })}
                    </div>
                    <span className="text-[#ef4444] text-[10px] font-bold bg-red-50 px-2.5 py-0.5 rounded-full flex items-center gap-0.5 animate-pulse">
                      <Clock className="w-3 h-3" /> Scheduled
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-zinc-800 leading-tight">{post.content}</p>
                  {post.media && (
                    <img src={post.media} alt="thumbnail" className="w-14 h-14 rounded object-cover border border-zinc-200" />
                  )}
                  <div className="flex justify-between items-center pt-2 border-t border-zinc-100 text-[11px] font-semibold text-zinc-400">
                    <span>{post.date}</span>
                    <button 
                      type="button" 
                      onClick={() => {
                        setPosts(prev => prev.map(p => p.id === post.id ? { ...p, status: 'published', date: new Date().toLocaleString() } : p));
                        alert("Published scheduled post successfully!");
                      }}
                      className="text-[#ef4444] hover:underline cursor-pointer"
                    >
                      Publish Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Published Posts Queue */}
        <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-base text-zinc-950">Published</h3>
            <span className="text-zinc-400 text-xs font-bold font-mono bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded">
              {publishedPosts.length}
            </span>
          </div>

          <div className="space-y-4">
            {publishedPosts.map(post => (
              <div key={post.id} className="p-4 border border-zinc-150 rounded-xl flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5">
                    {post.platforms.map(plat => {
                      const PlatConfig = connectedPlatforms[plat];
                      const PlatIcon = PlatConfig?.icon;
                      return PlatIcon ? (
                        <span key={plat} className={`${PlatConfig?.color}`} title={PlatConfig?.handle}>
                          <PlatIcon className="w-4 h-4" />
                        </span>
                      ) : null;
                    })}
                  </div>
                  <span className="text-emerald-600 text-[10px] font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Published
                  </span>
                </div>
                <p className="text-xs font-semibold text-zinc-800 leading-tight">{post.content}</p>
                {post.media && (
                  <div className="relative inline-block w-14 h-14 rounded overflow-hidden border border-zinc-150 shadow-sm">
                    <img src={post.media} alt="Uploaded attachment" className="w-full h-full object-cover" />
                    <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] font-bold text-center py-0.5 select-none">
                      IMAGE
                    </span>
                  </div>
                )}
                <span className="text-zinc-400 text-[10px] font-medium font-mono pt-1 block">{post.date}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
