'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Project, CATEGORY_META } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const meta  = CATEGORY_META[project.category]
  const color = meta.color

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white border border-black/[0.07] rounded-xl overflow-hidden flex flex-col shadow-card hover:shadow-card-hover hover:border-black/[0.12] transition-all duration-300"
    >
      {/* ─── Image / Preview ─────────────────── */}
      <div
        className="relative h-44 overflow-hidden"
        style={{ background: `${color}0d` }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(${color}40 1px, transparent 1px),
                  linear-gradient(90deg, ${color}40 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px',
              }}
            />
            <span
              className="font-display font-bold text-4xl select-none"
              style={{ color: `${color}50` }}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase"
          style={{
            background: `${color}15`,
            border:     `1px solid ${color}35`,
            color:       color,
          }}
        >
          {meta.label}
        </span>

        {/* Year */}
        <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono text-text-muted bg-white/80">
          {project.year}
        </span>
      </div>

      {/* ─── Body ────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Top accent line */}
        <div
          className="w-8 h-0.5 rounded-full mb-3 transition-all duration-300 group-hover:w-16"
          style={{ background: color }}
        />

        <h3 className="font-display font-bold text-base text-text mb-2 leading-tight group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-text-muted font-body leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-secondary border border-black/[0.06] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ─── Links ───────────────────────────── */}
        <div className="flex items-center gap-2 pt-3 border-t border-black/[0.06]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-accent transition-colors"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-text transition-colors"
            >
              <Github size={12} />
              Code
            </a>
          )}
          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-accent">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  )
}
