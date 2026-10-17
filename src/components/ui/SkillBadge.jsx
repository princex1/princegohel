import React from 'react';
import { cn } from '../../utils/cn';

const COLOR_STYLES = {
  sky: {
    container: 'bg-sky-500/[0.07] dark:bg-sky-500/10 border-sky-400/40 dark:border-sky-400/40 hover:border-sky-400',
    title: 'text-sky-800 dark:text-sky-300 font-bold',
    dot: 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]',
    level: 'bg-sky-500/15 text-sky-800 dark:text-sky-300 border-sky-400/30',
    tag: 'bg-sky-500/10 text-sky-800 dark:text-sky-300 border-sky-400/20',
  },
  cyan: {
    container: 'bg-cyan-500/[0.07] dark:bg-cyan-500/10 border-cyan-400/40 dark:border-cyan-400/40 hover:border-cyan-400',
    title: 'text-cyan-800 dark:text-cyan-300 font-bold',
    dot: 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]',
    level: 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-400/30',
    tag: 'bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-400/20',
  },
  blue: {
    container: 'bg-accent-500/[0.07] dark:bg-accent-500/10 border-accent-400/40 dark:border-accent-400/40 hover:border-accent-400',
    title: 'text-accent-800 dark:text-accent-300 font-bold',
    dot: 'bg-accent-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]',
    level: 'bg-accent-500/15 text-accent-800 dark:text-accent-300 border-accent-400/30',
    tag: 'bg-accent-500/10 text-accent-800 dark:text-accent-300 border-accent-400/20',
  },
  emerald: {
    container: 'bg-emerald-500/[0.07] dark:bg-emerald-500/10 border-emerald-400/40 dark:border-emerald-400/40 hover:border-emerald-400',
    title: 'text-emerald-800 dark:text-emerald-300 font-bold',
    dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
    level: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-400/30',
    tag: 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-400/20',
  },
  amber: {
    container: 'bg-amber-500/[0.07] dark:bg-amber-500/10 border-amber-400/40 dark:border-amber-400/40 hover:border-amber-400',
    title: 'text-amber-800 dark:text-amber-300 font-bold',
    dot: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]',
    level: 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-400/30',
    tag: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-400/20',
  },
  orange: {
    container: 'bg-orange-500/[0.07] dark:bg-orange-500/10 border-orange-400/40 dark:border-orange-400/40 hover:border-orange-400',
    title: 'text-orange-800 dark:text-orange-300 font-bold',
    dot: 'bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]',
    level: 'bg-orange-500/15 text-orange-800 dark:text-orange-300 border-orange-400/30',
    tag: 'bg-orange-500/10 text-orange-800 dark:text-orange-300 border-orange-400/20',
  },
  purple: {
    container: 'bg-purple-500/[0.07] dark:bg-purple-500/10 border-purple-400/40 dark:border-purple-400/40 hover:border-purple-400',
    title: 'text-purple-800 dark:text-purple-300 font-bold',
    dot: 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]',
    level: 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-400/30',
    tag: 'bg-purple-500/10 text-purple-800 dark:text-purple-300 border-purple-400/20',
  },
  indigo: {
    container: 'bg-indigo-500/[0.07] dark:bg-indigo-500/10 border-indigo-400/40 dark:border-indigo-400/40 hover:border-indigo-400',
    title: 'text-indigo-800 dark:text-indigo-300 font-bold',
    dot: 'bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]',
    level: 'bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border-indigo-400/30',
    tag: 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border-indigo-400/20',
  },
  rose: {
    container: 'bg-rose-500/[0.07] dark:bg-rose-500/10 border-rose-400/40 dark:border-rose-400/40 hover:border-rose-400',
    title: 'text-rose-800 dark:text-rose-300 font-bold',
    dot: 'bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.6)]',
    level: 'bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-400/30',
    tag: 'bg-rose-500/10 text-rose-800 dark:text-rose-300 border-rose-400/20',
  },
};

export default function SkillBadge({
  name,
  level,
  highlight = false,
  color = 'blue',
  tags = [],
  className = '',
}) {
  const styles = COLOR_STYLES[color] || COLOR_STYLES.blue;

  return (
    <div
      className={cn(
        'group relative p-3.5 rounded-xl transition-all duration-200 border shadow-sm',
        styles.container,
        highlight ? 'ring-1 ring-offset-1 ring-offset-transparent' : '',
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-2">
          {/* Distinct Colored Tech Glow Dot */}
          <span className={cn('w-2 h-2 rounded-full shrink-0', styles.dot)} />
          <span className={cn('text-sm tracking-tight font-semibold', styles.title)}>
            {name}
          </span>
        </div>

        {level && (
          <span
            className={cn(
              'text-[11px] font-mono font-medium px-2 py-0.5 rounded-full border',
              styles.level
            )}
          >
            {level}
          </span>
        )}
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={cn(
                'text-[10px] font-mono px-2 py-0.5 rounded-md border font-medium transition-colors',
                styles.tag
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
