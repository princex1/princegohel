import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'glass-nav-light dark:glass-nav-dark border-b shadow-sm'
          : 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-accent-600 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-sm group-hover:bg-accent-700 transition-colors">
            PG
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white leading-tight">
              Prince Gohel
            </span>
            <span className="text-[11px] text-slate-500 dark:text-gray-400 font-mono leading-none">
              Engineering Portfolio
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-white/5 p-1 rounded-full border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
                  isActive
                    ? 'bg-white dark:bg-dark-surface text-accent-600 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Contact CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light/Dark Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-slate-700 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Let's Talk CTA (Desktop) */}
          <NavLink
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-accent-600 hover:bg-accent-700 text-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </NavLink>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav-light dark:glass-nav-dark border-b border-slate-200/80 dark:border-white/10 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent-50 dark:bg-white/10 text-accent-600 dark:text-white font-semibold'
                    : 'text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-200/80 dark:border-white/10">
            <NavLink
              to="/contact"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium bg-accent-600 text-white hover:bg-accent-700 transition-colors shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
