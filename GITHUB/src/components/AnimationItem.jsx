import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { ANIMATIONS_INTRO } from '../data/portfolioData';

/**
 * Single Video Slide Component for Animations Category.
 * TikTok-style vertical feed supporting TikTok, YouTube, and Instagram
 * with muted autoplay on active, pause on exit, and minimal liquid controls.
 */
export default function AnimationItem({ item, index, isActive }) {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);

  // Manage YouTube iframe playback on active state changes
  useEffect(() => {
    if (item.type === 'youtube' && iframeRef.current) {
      const target = iframeRef.current.contentWindow;
      if (!target) return;

      if (isActive) {
        target.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
          '*'
        );
        target.postMessage(
          JSON.stringify({
            event: 'command',
            func: isMuted ? 'mute' : 'unMute',
            args: ''
          }),
          '*'
        );
      } else {
        target.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
          '*'
        );
      }
    }
  }, [isActive, isMuted, item.type]);

  const toggleMute = (e) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (item.type === 'youtube' && iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: nextMuted ? 'mute' : 'unMute',
          args: ''
        }),
        '*'
      );
    }
  };

  return (
    <div
      data-item-id={item.id}
      data-index={index}
      className="portfolio-slide relative w-full h-screen flex flex-col items-center justify-center snap-center snap-always px-4 sm:px-8 py-16 sm:py-20 select-none"
    >
      {/* Understated intro statement shown delicately on first item */}
      {index === 0 && (
        <div className="absolute top-24 sm:top-28 max-w-xl mx-auto px-6 text-center z-20 pointer-events-none opacity-80 animate-fade-in">
          <p className="text-[11px] sm:text-xs text-white/70 font-light tracking-wide leading-relaxed backdrop-blur-md bg-black/30 py-2 px-4 rounded-full border border-white/10 shadow-lg">
            {ANIMATIONS_INTRO}
          </p>
        </div>
      )}

      {/* Floating Video Container */}
      <div
        className={`relative flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-[transform,opacity] ${
          isActive
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-40 scale-[0.94] translate-y-3'
        }`}
        style={{
          width: item.aspectRatio === '9/16' ? 'min(88vw, 360px)' : 'min(88vw, 920px)',
          height: item.aspectRatio === '9/16' ? 'min(76vh, 640px)' : 'auto',
          maxHeight: '76vh'
        }}
      >
        {/* Ambient Halo */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 sm:-inset-6 rounded-3xl blur-2xl opacity-40 transition-opacity duration-700 pointer-events-none"
          style={{
            backgroundColor: item.palette?.ambient || 'transparent',
            mixBlendMode: 'screen'
          }}
        />

        {/* Video Card Container */}
        <div className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl bg-black/70 border border-white/[0.14] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md">
          {/* 1. TIKTOK EMBEDDED PLAYER */}
          {item.type === 'tiktok' && (
            <div className="relative w-full h-full min-h-[500px] sm:min-h-[580px] bg-black flex items-center justify-center">
              <iframe
                src={`https://www.tiktok.com/player/v1/${item.videoId}?embed_from=oembed&music_info=1&description=1&autoplay=1&muted=1`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0 pointer-events-auto rounded-xl"
              />

              {/* Minimal Discreet Direct Link Pill */}
              <div className="absolute top-3 right-3 z-20 pointer-events-auto">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white/90 text-[11px] font-medium backdrop-blur-md transition-all active:scale-95 shadow-lg"
                >
                  <span>TikTok</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          )}

          {/* 2. YOUTUBE EMBED */}
          {item.type === 'youtube' && (
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <iframe
                ref={iframeRef}
                src={`https://www.youtube-nocookie.com/embed/${item.videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&loop=1&playlist=${item.videoId}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 pointer-events-auto"
              />

              {/* Minimal Liquid Bar at Bottom */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white/90 backdrop-blur-md transition-transform active:scale-90"
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open on YouTube"
                  className="p-2 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white/90 backdrop-blur-md transition-transform active:scale-90 flex items-center gap-1.5 text-[11px] px-3"
                >
                  <span>YouTube</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          )}

          {/* 3. INSTAGRAM PREVIEW & PLAYER (Robust Hybrid Presentation) */}
          {item.type === 'instagram' && (
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] bg-[#0c0c0f] flex flex-col items-center justify-center overflow-hidden">
              {/* Attempt Live Iframe with correct query params */}
              <iframe
                src={`https://www.instagram.com/p/${item.shortcode}/embed/?cr=1&v=14&wp=540&rd=https%3A%2F%2Finstagram.com`}
                title={item.title}
                className="w-full h-full border-0 rounded-lg pointer-events-auto"
                scrolling="no"
                allowTransparency
              />

              {/* Liquid Glass Overlay Card in case cross-origin cookies block Instagram iframe */}
              <div className="absolute inset-x-4 bottom-4 z-20 flex flex-col items-center text-center p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide">
                    {item.isReel ? 'Instagram Reel' : 'Instagram Project'}
                  </span>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 active:scale-95 transition-all shadow-md"
                >
                  <span>{item.isReel ? 'Watch on Instagram' : 'View on Instagram'}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
