import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-[#151518]/60 backdrop-blur-md mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-accent-600 flex items-center justify-center text-white font-bold text-xs tracking-wider">
                PG
              </div>
              <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white">
                Prince Gohel
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-sm leading-relaxed">
              B.Tech CSE student focused on scalable web development, cross-platform engineering, and foundational algorithms in C.
            </p>
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for internships & collaborations</span>
            </div>
          </div>

          {/* Navigation & Connect: side-by-side 2-column on mobile, natural columns on desktop */}
          <div className="grid grid-cols-2 md:contents gap-8">
            {/* Quick Links */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
                Navigation
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                <li>
                  <Link to="/" className="hover:text-accent-600 dark:hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-accent-600 dark:hover:text-white transition-colors">
                    About & Skills
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-accent-600 dark:hover:text-white transition-colors">
                    Projects & Works
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent-600 dark:hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect / Socials */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
                Connect
              </span>
              <div className="flex flex-col space-y-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                <a
                  href="https://github.com/princegohel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent-600 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/princegohel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent-600 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:princegohel@example.com"
                  className="inline-flex items-center gap-2 hover:text-accent-600 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Prince Gohel. Built with React, Tailwind CSS & Framer Motion.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-accent-600 dark:hover:text-white transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
