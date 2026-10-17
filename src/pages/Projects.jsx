import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, Github, ExternalLink, Code2 } from 'lucide-react';
import PageWrapper from '../components/animations/PageWrapper';
import ScrollReveal from '../components/animations/ScrollReveal';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';
import { projects } from '../data/projectsData';

const CATEGORIES = ['All', 'Web', 'Mobile', 'Systems'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <PageWrapper className="space-y-12 sm:space-y-16">
      {/* 1. PAGE HEADER */}
      <section className="space-y-4">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-mono text-accent-600 dark:text-accent-400">
            <span>Portfolio &bull; Works</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineered Projects
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            A showcase of web applications, cross-platform mobile systems, and core C programming repositories developed throughout my academic and personal trajectory.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section>
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl glass-card-light dark:glass-card-dark border border-slate-200/80 dark:border-white/10">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 shrink-0 select-none ${
                    selectedCategory === category
                      ? 'bg-accent-600 text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-64 shrink-0">
              <Search className="w-4 h-4 text-slate-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by tech or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. RESPONSIVE PROJECT GRID */}
      <section className="space-y-6">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 space-y-3 glass-card-light dark:glass-card-dark rounded-xl border border-slate-200 dark:border-white/10">
            <Layers className="w-8 h-8 mx-auto text-slate-400 dark:text-gray-500" />
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              No matching projects found
            </h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 max-w-sm mx-auto">
              Try adjusting your search criteria or switching category tabs.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal
                key={project.id}
                delay={idx * 0.08}
                className={project.featured ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      {/* 4. OPEN SOURCE & ASSIGNMENTS FOOTNOTE */}
      <section className="pt-4">
        <ScrollReveal>
          <div className="rounded-xl p-6 bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Looking for academic lab repos or raw source code?
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-400">
                All course assignments, lab submissions, and prototypes are maintained openly on GitHub.
              </p>
            </div>
            <Button
              href="https://github.com/princegohel"
              variant="outline"
              size="sm"
              icon={Github}
              className="shrink-0 text-xs"
            >
              View GitHub Profile
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </PageWrapper>
  );
}
