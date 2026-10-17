import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import ProjectThumbnail from './ProjectThumbnail';
import Card from './Card';
import Button from './Button';

export default function ProjectCard({ project }) {
  const {
    id,
    title,
    subtitle,
    category,
    featured,
    tagline,
    description,
    technologies,
    githubUrl,
    liveUrl,
    metrics,
  } = project;

  return (
    <Card
      className={`group flex flex-col justify-between overflow-hidden relative transition-all duration-300 ${
        featured ? 'ring-1 ring-accent-500/40' : ''
      }`}
    >
      {/* Top subtle blue highlight line for featured project */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 via-blue-400 to-indigo-600" />
      )}

      <div>
        {/* Project Visual Thumbnail */}
        <div className="p-4 sm:p-5 pb-0">
          <ProjectThumbnail projectId={id} title={title} />
        </div>

        {/* Card Header & Content */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold">
              {subtitle}
            </span>
            {featured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent-600 text-white shadow-sm">
                <Sparkles className="w-2.5 h-2.5" /> Featured
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
            {tagline}
          </p>

          {/* Metrics if present */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 dark:border-white/5">
              {metrics.map((m, i) => (
                <div key={i} className="text-center p-1.5 rounded bg-slate-100/50 dark:bg-white/[0.02]">
                  <div className="text-[9px] text-slate-500 dark:text-gray-400 font-mono truncate">{m.label}</div>
                  <div className="text-[10px] font-semibold text-slate-800 dark:text-gray-200 truncate">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200/60 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 sm:p-6 pt-0 mt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {githubUrl && (
            <Button
              href={githubUrl}
              variant="outline"
              size="sm"
              icon={Github}
              className="text-xs"
            >
              Code
            </Button>
          )}
          {liveUrl && liveUrl !== '#' && (
            <Button
              href={liveUrl}
              variant="primary"
              size="sm"
              icon={ExternalLink}
              iconPosition="right"
              className="text-xs"
            >
              Demo
            </Button>
          )}
        </div>
        <span className="text-[11px] font-mono text-slate-400 dark:text-gray-500">
          {category}
        </span>
      </div>
    </Card>
  );
}
