import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Compass, 
  Target, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ArrowRight,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/animations/PageWrapper';
import ScrollReveal from '../components/animations/ScrollReveal';
import Card from '../components/ui/Card';
import SkillBadge from '../components/ui/SkillBadge';
import CodeWindow from '../components/ui/CodeWindow';
import Button from '../components/ui/Button';
import { skillCategories, futureGoals } from '../data/skillsData';

export default function About() {
  const cSkillSnippet = `/* engineering_philosophy.c */
#include <stdio.h>

int main(void) {
    printf("1. Write clean, memory-safe code.\\n");
    printf("2. Master algorithms & complexity.\\n");
    printf("3. Build responsive, accessible UI.\\n");
    return 0;
}`;

  return (
    <PageWrapper className="space-y-16 sm:space-y-20">
      {/* 1. PAGE HEADER */}
      <section className="space-y-4">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-mono text-accent-600 dark:text-accent-400">
            <span>Engineering &bull; Profile</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About & Technical Background
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            I am a B.Tech Computer Science and Engineering student driven by building scalable software, mastering core data structures, and crafting seamless cross-platform interfaces.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. ACADEMIC & ENGINEERING BIO */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal delay={0.1}>
            <Card className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-600/10 text-accent-600 dark:text-accent-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Academic Foundation
                  </h2>
                  <span className="text-xs font-mono text-slate-500 dark:text-gray-400">
                    B.Tech in Computer Science & Engineering
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 dark:text-gray-300 leading-relaxed pt-2">
                <p>
                  My engineering journey is grounded in computing fundamentals. From analyzing pointer arithmetic and manual memory allocation in ANSI C to developing reactive user interfaces in React and Tailwind CSS, I approach software with an emphasis on clarity and performance.
                </p>
                <p>
                  During my first semester, I built <span className="font-semibold text-slate-900 dark:text-white">Movieexplorer</span>, an interactive media catalog created without relying on heavy frontend abstractions. That project consolidated my enthusiasm for frontend architecture, state synchronization, and clean design systems.
                </p>
                <p>
                  Today, I actively bridge low-level logic with high-level cross-platform systems, exploring mobile apps in Flutter and native Android with Kotlin.
                </p>
              </div>

              {/* Fast Facts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-gray-400 block font-mono">Degree</span>
                  <span className="font-semibold text-slate-900 dark:text-white">B.Tech CSE</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-gray-400 block font-mono">Specialization</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Web & Cross-Platform</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-gray-400 block font-mono">Core Discipline</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Algorithms & Systems</span>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Right Code Window */}
        <div className="lg:col-span-5 space-y-4">
          <ScrollReveal delay={0.2}>
            <CodeWindow
              filename="engineering_philosophy.c"
              code={cSkillSnippet}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. CURRENT TECHNICAL SKILLS GRID */}
      <section className="space-y-8">
        <ScrollReveal>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold">
              Proficiencies & Technologies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              Current Technical Stack
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-xl mt-1">
              Categorized technologies actively utilized in academic assignments and independent projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={category.id} delay={idx * 0.1}>
              <Card className="p-6 h-full flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-accent-600 dark:text-accent-400 px-2 py-0.5 rounded bg-accent-50 dark:bg-white/5">
                      {category.skills.length} tools
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-gray-400 py-3 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        highlight={skill.highlight}
                        color={skill.color}
                        tags={skill.tags}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. SPECIFIC "FUTURE GOALS" SECTION */}
      <section className="space-y-8 pt-4">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold">
                <Target className="w-3.5 h-3.5" />
                <span>Roadmap & Intent</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                Future Learning Goals
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 max-w-md">
              Targeted domains currently under active study to expand engineering depth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureGoals.map((goal, idx) => (
            <ScrollReveal key={goal.id} delay={0.1 * idx}>
              <Card className="p-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                      {goal.badge}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-gray-400 font-mono">
                      {goal.timeline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {goal.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                    {goal.description}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-gray-300 block font-mono">
                      Key Objectives:
                    </span>
                    <ul className="space-y-1">
                      {goal.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="pt-6 mt-4 border-t border-slate-200/80 dark:border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 dark:text-gray-400">Current Progress</span>
                    <span className="font-semibold text-accent-600 dark:text-accent-400">{goal.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-600 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. EXPLORE WORK CTA */}
      <section className="pt-4">
        <ScrollReveal>
          <div className="rounded-xl p-6 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                See these concepts in practice
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400">
                Explore the applications, assignments, and tools built with these technologies.
              </p>
            </div>
            <Button
              to="/projects"
              variant="primary"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
            >
              Browse Projects
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </PageWrapper>
  );
}
