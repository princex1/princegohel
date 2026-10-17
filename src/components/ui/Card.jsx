import React from 'react';
import { cn } from '../../utils/cn';

export default function Card({
  children,
  className = '',
  glass = true,
  hover = true,
  ...props
}) {
  return (
    <div
      className={cn(
        'rounded-xl transition-all duration-300',
        glass
          ? 'bg-white/85 dark:bg-[#18181B]/70 backdrop-blur-md border border-slate-200/90 dark:border-white/10 shadow-sm'
          : 'bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-subtle',
        hover && 'hover:border-slate-300 dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-glass-dark',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
