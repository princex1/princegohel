import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 dark:focus:ring-offset-dark-bg disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

  const variants = {
    primary: 'bg-accent-600 hover:bg-accent-700 text-white shadow-sm hover:shadow-md hover:shadow-accent-600/20 border border-accent-500/30',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-200 dark:border-white/10 backdrop-blur-sm',
    outline: 'border border-slate-300 dark:border-white/20 text-slate-800 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5',
    accentOutline: 'border border-accent-600/40 text-accent-600 dark:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-500/10',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={classes} {...props}>
      {content}
    </button>
  );
}
