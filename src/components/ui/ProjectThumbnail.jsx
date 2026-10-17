import React from 'react';
import { Film, Gamepad2, Timer, Terminal, DollarSign, Layers } from 'lucide-react';

export default function ProjectThumbnail({ projectId, title }) {
  // Render clean, bespoke vector previews for each project
  switch (projectId) {
    case 'movieexplorer':
      return (
        <div className="w-full h-44 sm:h-48 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-accent-950 p-4 flex flex-col justify-between border border-white/5 relative group">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 font-mono text-accent-400">
              <Film className="w-3.5 h-3.5" /> Movieexplorer
            </span>
            <span className="px-2 py-0.5 rounded bg-accent-600/30 text-accent-300 font-mono text-[10px]">
              TMDB API
            </span>
          </div>

          {/* Mockup UI layout */}
          <div className="space-y-2 my-auto">
            <div className="flex gap-2">
              <div className="h-6 w-28 bg-white/10 rounded flex items-center px-2 text-[10px] text-gray-400">
                Search films...
              </div>
              <div className="h-6 w-14 bg-accent-600/50 rounded flex items-center justify-center text-[10px] text-white">
                Filter
              </div>
            </div>
            {/* Grid of mini movie posters */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              <div className="h-14 rounded bg-accent-700/30 border border-accent-500/20 flex flex-col items-center justify-center p-1">
                <span className="text-[9px] text-gray-300 font-medium">Interstellar</span>
                <span className="text-[8px] text-emerald-400">8.7</span>
              </div>
              <div className="h-14 rounded bg-slate-700/30 border border-white/10 flex flex-col items-center justify-center p-1">
                <span className="text-[9px] text-gray-300 font-medium">Inception</span>
                <span className="text-[8px] text-emerald-400">8.8</span>
              </div>
              <div className="h-14 rounded bg-slate-700/30 border border-white/10 flex flex-col items-center justify-center p-1">
                <span className="text-[9px] text-gray-300 font-medium">The Dark Knight</span>
                <span className="text-[8px] text-emerald-400">9.0</span>
              </div>
              <div className="h-14 rounded bg-slate-700/30 border border-white/10 flex flex-col items-center justify-center p-1">
                <span className="text-[9px] text-gray-300 font-medium">Oppenheimer</span>
                <span className="text-[8px] text-emerald-400">8.9</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono border-t border-white/5 pt-2">
            <span>Assignment 1 &bull; Sem 1</span>
            <span className="text-emerald-400">Responsive UI</span>
          </div>
        </div>
      );

    case 'glitch-lounge':
      return (
        <div className="w-full h-44 sm:h-48 rounded-lg overflow-hidden bg-gradient-to-br from-[#121217] via-[#1a1824] to-[#121217] p-4 flex flex-col justify-between border border-white/5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 font-mono text-purple-400">
              <Gamepad2 className="w-3.5 h-3.5" /> Glitch Lounge
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-600/30 text-purple-300 font-mono text-[10px]">
              Flutter &bull; Firebase
            </span>
          </div>

          <div className="my-auto space-y-2">
            <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/5">
              <span className="text-xs text-gray-200">Station #04 (PS5 Pro)</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                Reserved
              </span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/5">
              <span className="text-xs text-gray-200">Station #07 (PC RTX 4090)</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-accent-500/20 text-accent-400">
                Available
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono border-t border-white/5 pt-2">
            <span>Realtime Slots</span>
            <span className="text-purple-400">Cross-Platform</span>
          </div>
        </div>
      );

    case 'focusflow':
      return (
        <div className="w-full h-44 sm:h-48 rounded-lg overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-4 flex flex-col justify-between border border-white/5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 font-mono text-accent-400">
              <Timer className="w-3.5 h-3.5" /> FocusFlow
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-600/30 text-emerald-300 font-mono text-[10px]">
              Productivity
            </span>
          </div>

          <div className="my-auto text-center">
            <div className="text-3xl font-mono font-bold tracking-tight text-white">
              24:59
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Deep Work &bull; Session 3 of 4</div>
            <div className="w-36 mx-auto h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="w-3/4 h-full bg-accent-500 rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono border-t border-white/5 pt-2">
            <span>Pomodoro State</span>
            <span className="text-accent-400">Zero Latency</span>
          </div>
        </div>
      );

    case 'c-programming-portal':
      return (
        <div className="w-full h-44 sm:h-48 rounded-lg overflow-hidden bg-[#0A0E17] p-4 flex flex-col justify-between border border-white/5 font-mono">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <Terminal className="w-3.5 h-3.5" /> c-portal / tree.c
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-600/20 text-emerald-400 text-[10px]">
              ANSI C
            </span>
          </div>

          <div className="my-auto text-[11px] text-slate-300 space-y-1 bg-black/40 p-2.5 rounded border border-white/5">
            <div><span className="text-accent-400">struct</span> Node* insert(<span className="text-accent-400">struct</span> Node* root, <span className="text-purple-400">int</span> key);</div>
            <div className="text-gray-500">// valgrind: 0 errors from 0 contexts</div>
            <div className="text-emerald-400">&gt; tests passed: 42/42 (0.012ms)</div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
            <span>Algorithms & Benchmarks</span>
            <span className="text-emerald-400">O(log n)</span>
          </div>
        </div>
      );

    case 'android-currency-converter':
      return (
        <div className="w-full h-44 sm:h-48 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 to-zinc-900 p-4 flex flex-col justify-between border border-white/5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 font-mono text-emerald-400">
              <DollarSign className="w-3.5 h-3.5" /> Currency Converter
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-600/30 text-emerald-300 font-mono text-[10px]">
              Kotlin &bull; Room
            </span>
          </div>

          <div className="my-auto space-y-2 bg-black/30 p-2.5 rounded border border-white/5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400">100 USD</span>
              <span className="font-semibold text-white font-mono">8,350.25 INR</span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
              <span>Rate: 1 USD = 83.50 INR</span>
              <span className="text-emerald-400">Cached Offline</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono border-t border-white/5 pt-2">
            <span>Android Material 3</span>
            <span className="text-accent-400">Native Speed</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-44 sm:h-48 rounded-lg overflow-hidden bg-slate-800 p-4 flex flex-col justify-center items-center text-slate-400 border border-white/5">
          <Layers className="w-8 h-8 mb-2 opacity-50" />
          <span className="text-xs font-mono">{title}</span>
        </div>
      );
  }
}
