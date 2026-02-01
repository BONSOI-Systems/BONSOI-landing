"use client";
import { useState } from "react";
import Image from "next/image";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video max-h-[90vh] overflow-hidden bg-black cursor-pointer group rounded-xl md:rounded-2xl">
      {/* YouTube Thumbnail */}
      {/* YouTube Thumbnail */}
      {!playVideo && (
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video Thumbnail"
          fill
          className="object-cover opacity-60"
        />
      )}

      {!playVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {/* Premium Play Button */}
          <div className="relative group">
            {/* Pulsing Rings */}
            <div className="absolute inset-0 rounded-full border border-blue-500/30 w-full h-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></div>
            <div className="absolute inset-0 rounded-full border border-purple-500/30 w-full h-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30 delay-1000"></div>

            <button
              onClick={() => setPlayVideo(!playVideo)}
              className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(59,130,246,0.3)] sm:shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] md:hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] z-10"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-95 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white fill-current ml-0.5 sm:ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="sr-only">Play Video</span>
            </button>
          </div>
        </div>
      )}
      {playVideo && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&autoplay=1&rel=0&modestbranding=1&vq=hd1080`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute inset-0 w-full h-full z-30"
        ></iframe>
      )}

      {/* Placeholder image if not playing */}
      {!playVideo && (
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video Thumbnail Overlay"
          fill
          className="object-cover opacity-80 mix-blend-overlay"
        />
      )}
    </div>
  );
}
