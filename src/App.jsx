import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  LogIn, 
  UserCheck, 
  FolderSync, 
  UploadCloud, 
  Video, 
  Globe, 
  Clock,
  X,
  Volume2,
  VolumeX,
  Copy,
  Check,
  ListOrdered
} from 'lucide-react';

const DEMO_GUIDES = [
  {
    id: 'lms-login-mentor-led-blended',
    title: 'LMS Login Guide',
    subtitle: 'Mentor-LED & Blended',
    subtitleHighlight: 'bg-emerald-500 text-white font-extrabold shadow-sm ring-2 ring-emerald-300/60',
    duration: '1:32',
    videoSrc: '/how-login-lms-mentorled-opt.mp4',
    subtitleSrc: '/subtitles/lms-mentorled.vtt',
    icon: LogIn,
    iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200/80',
    description: 'Complete walkthrough on logging into the LMS portal specifically for Mentor-LED and Blended batch students.',
    steps: [
      {
        step: 1,
        title: 'Check Your Registered Email Inbox',
        detail: 'Look for an email with subject "Welcome to Launched Global" sent from learn@launchedglobal.in. (Be sure to check Spam/Junk folder if not in Inbox).'
      },
      {
        step: 2,
        title: 'Open "Login Here" Portal Link',
        detail: 'Inside the welcome email, click on the official "Login Here" link to access the LMS portal interface.'
      },
      {
        step: 3,
        title: 'Enter Email & Receive Login OTP',
        detail: 'Select the "Email" option, enter your registered email ID, and submit to request your one-time verification password / OTP.'
      },
      {
        step: 4,
        title: 'Authenticate & Access Dashboard',
        detail: 'Check your email for the OTP, enter it into the LMS portal, and you will be directed straight to your enrolled courses & live schedule.'
      }
    ]
  },
  {
    id: 'lms-login-self-paced',
    title: 'LMS Login Guide',
    subtitle: 'Self-Paced Track',
    subtitleHighlight: 'bg-blue-600 text-white font-extrabold shadow-sm ring-2 ring-blue-300/60',
    duration: '1:41',
    videoSrc: '/how-login-lms-selfpaced-opt.mp4',
    subtitleSrc: '/subtitles/lms-selfpaced.vtt',
    icon: UserCheck,
    iconBg: 'bg-blue-50 text-blue-600 border border-blue-200/80',
    description: 'Step-by-step instructions on accessing and navigating the LMS specifically for Self-Paced learners.',
    steps: [
      {
        step: 1,
        title: 'Find Your LMS Credentials Email',
        detail: 'Upon registration, locate your "Welcome to Launched Global" email containing your portal login URL and student access ID.'
      },
      {
        step: 2,
        title: 'Navigate to LMS Login Page',
        detail: 'Click the provided login URL and choose your login method (Registered Email / Password).'
      },
      {
        step: 3,
        title: 'Access Self-Paced Learning Modules',
        detail: 'Once logged in, navigate to "My Courses" to access pre-recorded lecture modules, quizzes, and project milestones.'
      },
      {
        step: 4,
        title: 'Track Progress Towards Certificate',
        detail: 'Complete each video module sequentially; completion unlocks your minor/major projects and final internship completion certificate.'
      }
    ]
  },
  {
    id: 'project-resources-download-upload',
    title: 'Project Resources',
    subtitle: 'Download & Upload',
    subtitleHighlight: 'bg-amber-500 text-white font-extrabold shadow-sm ring-2 ring-amber-300/60',
    duration: '1:26',
    videoSrc: '/how-download-upload-projects-opt.mp4',
    subtitleSrc: '/subtitles/projects.vtt',
    icon: FolderSync,
    iconBg: 'bg-amber-50 text-amber-600 border border-amber-200/80',
    description: 'Learn how to properly download starter project files and upload your finished work.',
    steps: [
      {
        step: 1,
        title: 'Open Project Notification Email',
        detail: 'Open the project email sent to your registered mail ID by Launched Global containing your project resources link.'
      },
      {
        step: 2,
        title: 'Access Project Material Document',
        detail: 'Scroll down to the attached project resource document/Google Drive link to view starter code and task guidelines.'
      },
      {
        step: 3,
        title: 'Download Project Starter Files',
        detail: 'Download all project zip/asset files to your local system and extract them into your preferred working folder.'
      },
      {
        step: 4,
        title: 'Complete and Upload Finished Project',
        detail: 'Implement your solution and upload your finished files/repo link as demonstrated. Contact support if you face any issues.'
      }
    ]
  },
  {
    id: 'submission-of-minor-project',
    title: 'Submission of Minor Project',
    subtitle: 'Mentor-LED & Blended',
    subtitleHighlight: 'bg-emerald-500 text-white font-extrabold shadow-sm ring-2 ring-emerald-300/60',
    duration: '1:23',
    videoSrc: '/how-submit-minor-project-opt.mp4',
    subtitleSrc: '/subtitles/minor.vtt',
    icon: UploadCloud,
    iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-200/80',
    description: 'Guidance on verifying, preparing, and submitting your minor project deliverables.',
    steps: [
      {
        step: 1,
        title: 'Join Your Google Classroom',
        detail: 'Open the invitation link sent to your registered email or join code to enroll in your batch Google Classroom.'
      },
      {
        step: 2,
        title: 'Locate Minor Project Assignment',
        detail: 'Under the "Classwork" tab, find the Minor Project Submission assignment and review all submission criteria.'
      },
      {
        step: 3,
        title: 'Attach Deliverables & GitHub Link',
        detail: 'Click "Add or create" to upload your project source files (ZIP/PDF) or paste your verified GitHub repository link.'
      },
      {
        step: 4,
        title: 'Click "Turn In / Hand In"',
        detail: 'Confirm your attached files and press "Turn In" to officially mark your minor project as submitted for mentor grading.'
      }
    ]
  },
  {
    id: 'shoot-final-project-demo',
    title: 'Shoot Final Project Demo',
    subtitle: 'Video Recording Guide',
    subtitleHighlight: 'bg-rose-500 text-white font-extrabold shadow-sm ring-2 ring-rose-300/60',
    duration: '3:04',
    videoSrc: '/how-shoot-final-project-video-opt.mp4',
    subtitleSrc: '/subtitles/final.vtt',
    icon: Video,
    iconBg: 'bg-rose-50 text-rose-600 border border-rose-200/80',
    description: 'Best practices for recording and presenting your final project demonstration video.',
    steps: [
      {
        step: 1,
        title: 'Introduction & Self Overview',
        detail: 'Begin by introducing yourself (Name, Degree/University, and Internship Domain at Launched Global).'
      },
      {
        step: 2,
        title: 'Explain Folder Structure in VS Code',
        detail: 'Show your code editor (VS Code) displaying clean project folder structure (e.g. separate HTML, CSS, JavaScript / Backend files).'
      },
      {
        step: 3,
        title: 'Walk Through Key Code Logic',
        detail: 'Briefly explain your key functions, logic, responsive navigation, API calls, or form validations.'
      },
      {
        step: 4,
        title: 'Live Website / Application Demo',
        detail: 'Switch to the running browser view and demonstrate all working features, UI responsiveness, and real user flows live.'
      }
    ]
  }
];

const CURRENT_YEAR = new Date().getFullYear();

export default function App() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [isMutedForAutoplay, setIsMutedForAutoplay] = useState(false);
  const videoRef = useRef(null);

  // Sync state with URL pathname (e.g. /shoot-final-project-demo) on load and back/forward navigation
  useEffect(() => {
    const checkPath = () => {
      // Remove leading/trailing slashes and get path segment
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '').trim().toLowerCase();
      // Backward compatibility: also support #hash if anyone opens an old link
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      const targetSlug = path || hash;

      if (targetSlug) {
        const found = DEMO_GUIDES.find(g => g.id === targetSlug);
        if (found) {
          setPlayingVideo(found);
          return;
        }
      }
      setPlayingVideo(null);
    };

    checkPath();
    window.addEventListener('popstate', checkPath);
    window.addEventListener('hashchange', checkPath);
    return () => {
      window.removeEventListener('popstate', checkPath);
      window.removeEventListener('hashchange', checkPath);
    };
  }, []);

  // Smart Autoplay: attempts playback with sound; if blocked by browser policy, falls back to muted autoplay
  useEffect(() => {
    if (!playingVideo || !videoRef.current) return;

    const videoEl = videoRef.current;
    setIsMutedForAutoplay(false);
    videoEl.muted = false;

    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser blocked audio autoplay -> fallback to muted autoplay immediately
        videoEl.muted = true;
        setIsMutedForAutoplay(true);
        videoEl.play().catch(() => {});
      });
    }
  }, [playingVideo]);

  // Handle user unmute
  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMutedForAutoplay(false);
    }
  };

  // Open video & update URL to clean slash path e.g. /video-slug
  const handleOpenVideo = (guide) => {
    const newPath = `/${guide.id}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ videoId: guide.id }, '', newPath);
    }
    setPlayingVideo(guide);
  };

  // Close video & reset URL back to root /
  const handleCloseVideo = () => {
    setPlayingVideo(null);
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
  };

  // Copy shareable direct slash link (e.g. https://domain.com/shoot-final-project-demo)
  const handleCopyLink = (e, guide) => {
    e.stopPropagation();
    const url = `${window.location.origin}/${guide.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(guide.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Close modal when pressing ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleCloseVideo();
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
      <main className="max-w-6xl mx-auto p-5 sm:px-6 sm:py-12 flex-1 w-full flex flex-col justify-start">
        {/* Minimal Hero Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 mb-2.5 sm:mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E85749]" />
            <span>Student Demonstration Videos</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Follow The Videos Below
          </h1>
          <p className="mt-2 text-xs sm:text-base text-slate-500 max-w-md mx-auto">
            Click on any guide below to play the demo video directly.
          </p>
        </div>

        {/* 5 Clean Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {DEMO_GUIDES.map((guide) => {
            const IconComponent = guide.icon;

            return (
              <div
                key={guide.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-[#E85749]/60"
              >
                <div>
                  {/* Duration Header (Step badge removed) */}
                  <div className="flex items-center justify-end mb-4">
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/80">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {guide.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`p-2.5 sm:p-3 rounded-xl ${guide.iconBg} flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#E85749] transition-colors leading-tight">
                        {guide.title}
                      </h3>
                      {guide.subtitleHighlight ? (
                        <span className={`inline-block text-[13px] sm:text-sm px-2.5 py-1 rounded-lg mt-1.5 tracking-normal ${guide.subtitleHighlight}`}>
                          {guide.subtitle}
                        </span>
                      ) : (
                        <p className="text-xs sm:text-[13px] text-slate-500 truncate mt-1">{guide.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {guide.description}
                  </p>
                </div>

                {/* Direct Play & Copy Link Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenVideo(guide)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#E85749] hover:bg-[#d44336] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Video</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleCopyLink(e, guide)}
                    title="Copy direct shareable link for this video"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-all active:scale-95 cursor-pointer flex-shrink-0"
                  >
                    {copiedId === guide.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-[11px] hidden xs:inline">Link</span>
                      </>
                    )}
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200"
          onClick={handleCloseVideo}
        >
          <div 
            className="bg-slate-950 rounded-none sm:rounded-3xl overflow-hidden border-0 sm:border border-slate-800 shadow-2xl max-w-4xl w-full flex flex-col h-full sm:h-auto sm:max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-3.5 sm:px-6 py-3 sm:py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E85749] flex-shrink-0 animate-pulse" />
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-white truncate leading-tight">
                    {playingVideo.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 truncate hidden xs:block">
                    {playingVideo.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={(e) => handleCopyLink(e, playingVideo)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                  title="Copy video link"
                >
                  {copiedId === playingVideo.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy Link</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCloseVideo}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                  aria-label="Close video"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Container (Video + Steps) */}
            <div className="overflow-y-auto flex-1 flex flex-col overscroll-contain">
              {/* Native Video Player with Big Mobile Height, Smart Autoplay & Captions */}
              <div className="relative w-full bg-black flex items-center justify-center flex-shrink-0 min-h-[240px] xs:min-h-[280px] sm:min-h-[360px] aspect-video">
                <video 
                  ref={videoRef}
                  key={playingVideo.videoSrc}
                  src={playingVideo.videoSrc} 
                  controls 
                  autoPlay 
                  playsInline
                  crossOrigin="anonymous"
                  preload="metadata"
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-contain focus:outline-none"
                >
                  {playingVideo.subtitleSrc && (
                    <track 
                      key={playingVideo.subtitleSrc}
                      src={playingVideo.subtitleSrc}
                      kind="subtitles"
                      srcLang="en"
                      label="English (CC)"
                      default
                    />
                  )}
                  Your browser does not support HTML5 video playback.
                </video>

                {/* Unmute Overlay Pill if browser forced muted autoplay */}
                {isMutedForAutoplay && (
                  <button
                    type="button"
                    onClick={handleUnmute}
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-slate-900/90 hover:bg-[#E85749] text-white text-[11px] sm:text-xs font-bold shadow-lg border border-white/20 backdrop-blur-md transition-all animate-bounce cursor-pointer"
                  >
                    <VolumeX className="w-3.5 h-3.5 text-[#E85749] group-hover:text-white" />
                    <span>Tap to Unmute Audio</span>
                  </button>
                )}
              </div>

              {/* Step-by-Step Text Walkthrough & Transcription Section */}
              {playingVideo.steps && (
                <div className="p-4 sm:p-6 bg-slate-900/95 border-t border-slate-800/80 flex-1">
                  <div className="flex items-center justify-between mb-3.5 gap-2">
                    <div className="flex items-center gap-2">
                      <ListOrdered className="w-4 h-4 text-[#E85749]" />
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
                        Step-by-Step Walkthrough
                      </h4>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700/60">
                      {playingVideo.steps.length} Steps
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
                    {playingVideo.steps.map((st) => (
                      <div 
                        key={st.step}
                        className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 hover:border-[#E85749]/50 transition-colors flex gap-3 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#E85749]/15 border border-[#E85749]/30 text-[#E85749] font-extrabold text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-[#E85749] group-hover:text-white transition-colors mt-0.5">
                          {st.step}
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-[13px] sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-snug mb-1">
                            {st.title}
                          </h5>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {st.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Info */}
            <div className="px-3.5 sm:px-6 py-2.5 bg-slate-900/95 text-[11px] sm:text-xs text-slate-400 flex items-center justify-between border-t border-slate-800/60 flex-shrink-0">
              <span className="flex items-center gap-1.5 truncate pr-2">
                <Volume2 className="w-3.5 h-3.5 text-[#E85749] flex-shrink-0" />
                <span className="truncate">Audio Walkthrough & Step Guide</span>
              </span>
              <span className="flex-shrink-0 text-slate-500 hidden xs:inline">Press ESC to close</span>
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
            <span>&copy; {CURRENT_YEAR}</span>
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
