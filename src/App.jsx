import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Star, 
  MessageSquare, 
  Share2, 
  Globe, 
  Clock,
  X,
  Volume2
} from 'lucide-react';

const DEMO_GUIDES = [
  {
    id: 'google-review',
    badge: 'Step 1',
    title: 'Google Review',
    subtitle: 'Submission Guide',
    duration: '0:34',
    videoSrc: '/google-review-opt.mp4',
    icon: Star,
    iconBg: 'bg-amber-50 text-amber-500 border border-amber-200/80',
    description: 'Quick walkthrough on posting your verified review & rating.'
  },
  {
    id: 'reddit-post',
    badge: 'Step 2',
    title: 'Reddit Post',
    subtitle: 'Discussion Guide',
    duration: '0:48',
    videoSrc: '/reddit-post-opt.mp4',
    icon: MessageSquare,
    iconBg: 'bg-orange-50 text-orange-500 border border-orange-200/80',
    description: 'Guidelines on sharing your experience and discussion on Reddit.'
  },
  {
    id: 'linkedin-tag',
    badge: 'Step 3',
    title: 'LinkedIn Tag',
    subtitle: 'Certificate Guide',
    duration: '1:09',
    videoSrc: '/linkedin-tag-opt.mp4',
    icon: Share2,
    iconBg: 'bg-blue-50 text-blue-500 border border-blue-200/80',
    description: 'How to tag Launched Global and announce your certificate.'
  }
];

export default function App() {
  const [playingVideo, setPlayingVideo] = useState(null);

  // Close modal when pressing ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setPlayingVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-[#E85749] selection:text-white antialiased overflow-x-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
          {/* Brand Logo & Name */}
          <a 
            href="https://launchedglobal.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-1.5 flex-shrink-0 group-hover:border-[#E85749] transition-colors">
              <img 
                src="/logo.png" 
                alt="Launched Global" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-xl tracking-tight text-slate-900 group-hover:text-[#E85749] transition-colors truncate">
                  Launched<span className="text-[#E85749]">Global</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold bg-[#E85749]/10 text-[#E85749] border border-[#E85749]/20 px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">
                  Guides
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate hidden xs:block">
                Student Video Walkthroughs
              </p>
            </div>
          </a>

          {/* Header Action Button */}
          <a 
            href="https://launchedglobal.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors flex-shrink-0"
          >
            <Globe className="w-3.5 h-3.5 text-[#E85749] flex-shrink-0" />
            <span className="hidden sm:inline">launchedglobal.in</span>
            <span className="sm:hidden">Website</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-5 sm:px-6 sm:py-14 flex-1 w-full flex flex-col justify-start sm:justify-center">
        {/* Minimal Hero Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 mb-2.5 sm:mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E85749]" />
            <span>Student Demonstration Videos</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Follow The Steps Below
          </h1>
          <p className="mt-2 text-xs sm:text-base text-slate-500 max-w-md mx-auto">
            Click on any guide below to play the demo video directly.
          </p>
        </div>

        {/* 3 Clean Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {DEMO_GUIDES.map((guide) => {
            const IconComponent = guide.icon;

            return (
              <div
                key={guide.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-[#E85749]/60"
              >
                <div>
                  {/* Step Badge & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#E85749]/10 text-[#E85749]">
                      {guide.badge}
                    </span>
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/80">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {guide.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className={`p-2.5 sm:p-3 rounded-xl ${guide.iconBg} flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#E85749] transition-colors leading-tight">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-slate-500 truncate">{guide.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {guide.description}
                  </p>
                </div>

                {/* Direct Play Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setPlayingVideo(guide)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#E85749] hover:bg-[#d44336] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Demo Video</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* In-Website Fullscreen Video Player Modal */}
      {playingVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setPlayingVideo(null)}
        >
          <div 
            className="bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl max-w-4xl w-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-4 sm:px-6 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#E85749] text-white flex-shrink-0">
                  {playingVideo.badge}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {playingVideo.title} — {playingVideo.subtitle}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setPlayingVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ml-2"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Native Video Player with Fast-Start range streaming & download disabled */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video 
                key={playingVideo.videoSrc}
                src={playingVideo.videoSrc} 
                controls 
                autoPlay 
                playsInline
                preload="metadata"
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-contain focus:outline-none"
              >
                Your browser does not support HTML5 video playback.
              </video>
            </div>

            {/* Modal Bottom Info */}
            <div className="px-4 sm:px-6 py-3 bg-slate-900/90 text-xs text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-[#E85749]" />
                Video with audio walkthrough
              </span>
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">ESC</kbd> or click outside to close</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200/80 bg-white py-5 sm:py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center p-0.5">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-slate-700">Launched Global</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a href="https://launchedglobal.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#E85749] transition-colors">
              launchedglobal.in
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/company/launchedglobal" target="_blank" rel="noopener noreferrer" className="hover:text-[#E85749] transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://www.instagram.com/launchedglobal" target="_blank" rel="noopener noreferrer" className="hover:text-[#E85749] transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
