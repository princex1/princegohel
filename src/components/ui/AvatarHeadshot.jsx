import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

export default function AvatarHeadshot({
  imageSrc = '/profile.jpg', // Place your photo at public/profile.jpg
  alt = 'Prince Gohel',
  className = '',
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative group ${className}`}>
      {/* Subtle background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-600/20 via-blue-500/10 to-indigo-600/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-xl flex flex-col justify-between p-4">
        {/* Top bar inside headshot frame */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active CSE</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-accent-600/30 border border-accent-500/40 text-[10px] font-mono text-accent-300 uppercase tracking-widest">
            Dev Profile
          </div>
        </div>

        {/* Headshot Area: Displays your photo if available, otherwise shows the fallback SVG */}
        <div className="relative flex-1 flex items-center justify-center my-2 overflow-hidden rounded-xl">
          {!imageError ? (
            <img
              src={imageSrc}
              alt={alt}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top rounded-xl shadow-inner transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            /* Fallback Modern Developer Vector Illustration */
            <svg
              className="w-36 h-36 text-slate-400 dark:text-gray-300 filter drop-shadow-md"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="60" cy="60" r="54" fill="#18181B" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 2" />
              <path
                d="M26 102C26 88 38 80 60 80C82 80 94 88 94 102V108H26V102Z"
                fill="#27272A"
                stroke="#3F3F46"
                strokeWidth="2"
              />
              <path d="M48 80L60 92L72 80" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
              <rect x="52" y="65" width="16" height="18" rx="4" fill="#D1D5DB" />
              <path
                d="M40 48C40 34 48 26 60 26C72 26 80 34 80 48C80 60 72 68 60 68C48 68 40 60 40 48Z"
                fill="#E5E7EB"
              />
              <path
                d="M38 42C38 30 46 22 60 22C74 22 82 30 82 42C80 34 72 30 60 30C48 30 40 34 38 42Z"
                fill="#18181B"
              />
              <rect x="44" y="44" width="13" height="8" rx="2" stroke="#1E293B" strokeWidth="2" fill="none" />
              <rect x="63" y="44" width="13" height="8" rx="2" stroke="#1E293B" strokeWidth="2" fill="none" />
              <line x1="57" y1="48" x2="63" y2="48" stroke="#1E293B" strokeWidth="2" />
            </svg>
          )}
        </div>

        {/* Bottom Badge Bar */}
        <div className="z-10 bg-black/60 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between">
          <div className="flex flex-col text-left">
            <span className="text-white text-xs font-semibold">Prince Gohel</span>
            <span className="text-[10px] text-gray-400 font-mono">CSE &bull; Developer</span>
          </div>
          <div className="w-6 h-6 rounded-md bg-accent-600/30 border border-accent-500/40 flex items-center justify-center text-accent-300">
            <Terminal className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
