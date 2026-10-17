import React from 'react';
import { ArrowRight, Code2, Sparkles, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/animations/PageWrapper';
import ScrollReveal from '../components/animations/ScrollReveal';
import TypewriterRoles from '../components/animations/TypewriterRoles';
import Button from '../components/ui/Button';
import AvatarHeadshot from '../components/ui/AvatarHeadshot';
import CodeWindow from '../components/ui/CodeWindow';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projectsData';

export default function Home() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];

  return (
    <PageWrapper className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-4 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Eyebrow Badge */}
            <ScrollReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>B.Tech CSE &bull; Available for Technical Roles</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I am{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-blue-500 to-indigo-600">
                  Prince
                </span>
                .
              </h1>
            </ScrollReveal>

            {/* Typewriter Subtitle */}
            <ScrollReveal delay={0.15}>
              <div className="text-xl sm:text-2xl text-slate-600 dark:text-gray-300 font-normal flex flex-wrap items-center gap-2">
                {/* <span>Passionate</span> */}
                <TypewriterRoles />
              </div>
            </ScrollReveal>

            {/* Concise Bio Paragraph */}
            <ScrollReveal delay={0.2}>
              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-xl leading-relaxed">
                Computer Science student building clean, production-grade applications. Focused on component architectures in React, responsive CSS systems, cross-platform apps in Flutter, and systems programming in C.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  to="/projects"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  View My Work
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                >
                  Let's Talk
                </Button>
              </div>
            </ScrollReveal>

            {/* Key Stack Quick Badges */}
            <ScrollReveal delay={0.3}>
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-gray-400">
                <span className="font-semibold text-slate-700 dark:text-gray-300">Core Focus:</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">C</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">HTML5 / CSS3 </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">Tailwind CSS</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">Flutter</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Headshot Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={0.2} x={40}>
              <AvatarHeadshot />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. ENGINEERING HIGHLIGHT STATS BAR */}
      <section>
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-card-light dark:glass-card-dark border border-slate-200/80 dark:border-white/10">
            <div className="text-left space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                1st Sem+
              </span>
              <p className="text-xs text-slate-500 dark:text-gray-400">
                Academic Web Foundation
              </p>
            </div>
            <div className="text-left space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-accent-600 dark:text-accent-400 font-mono">
                5+
              </span>
              <p className="text-xs text-slate-500 dark:text-gray-400">
                Engineered Projects
              </p>
            </div>
            <div className="text-left space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                100%
              </span>
              <p className="text-xs text-slate-500 dark:text-gray-400">
                Responsive Standards
              </p>
            </div>
            <div className="text-left space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                B.Tech
              </span>
              <p className="text-xs text-slate-500 dark:text-gray-400">
                Computer Science & Eng.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. CODE PROFILE DEMO (macOS Terminal & C Architecture) */}
      <section className="space-y-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold">
                Systems & Structure
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                Developer Manifest
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-md">
              A structured view of programming foundations, written in ANSI C to reflect strong low-level computing principles.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <CodeWindow filename="prince_profile.c" />
        </ScrollReveal>
      </section>

      {/* 4. FEATURED PROJECT SPOTLIGHT (Movieexplorer) */}
      <section className="space-y-6">
        <ScrollReveal>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold">
                Flagship Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                Featured Assignment
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-accent-600 dark:text-accent-400 hover:underline"
            >
              <span>Explore all projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ProjectCard project={featuredProject} />
        </ScrollReveal>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="pt-4">
        <ScrollReveal>
          <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-accent-900/10 via-slate-900/5 to-accent-900/10 dark:from-accent-950/40 dark:via-white/[0.02] dark:to-accent-950/40 border border-slate-200/90 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Interested in working together?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-lg">
                I am actively seeking software engineering internships, technical collaborations, and open-source contributions.
              </p>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
              iconPosition="right"
              className="shrink-0"
            >
              Get in Touch
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </PageWrapper>
  );
}
