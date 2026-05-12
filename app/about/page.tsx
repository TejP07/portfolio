'use client'

import { motion } from 'framer-motion'
import { Download, User } from 'lucide-react'
import { SKILL_GROUPS, TIMELINE } from '@/data/skills'

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-24">
      {/* ─── Header ──────────────────────────────── */}
      <div className="mb-16">
        <span className="section-label">Who I Am</span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-5xl md:text-6xl text-text tracking-tight mt-2"
        >
          About<span className="text-accent">.</span>
        </motion.h1>
      </div>

      {/* ─── Bio + Photo row ─────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
        {/* Bio text — 3 cols */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3 space-y-4"
        >
          <p className="text-text font-body text-lg leading-relaxed">
            Hi, I&apos;m{' '}
            <span className="text-accent font-semibold">Tej Patel</span>
            — a software engineer, game developer, and digital artist passionate
            about building things that sit at the intersection of technology and
            creativity.
          </p>
          <p className="text-text-muted font-body text-base leading-relaxed">
            I work across a wide range of disciplines: writing production-quality
            code, designing game systems, creating 2D illustrations and motion
            graphics, modeling 3D environments, and building geospatial tools.
          </p>
          <p className="text-text-muted font-body text-base leading-relaxed">
            Whether it&apos;s shipping a web app, designing a level, or rendering a
            photorealistic scene — I care about craft, detail, and the overall
            experience.
          </p>

          {/* Resume download */}
          <div className="pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Photo — 2 cols */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-2"
        >
          {/* ✏️ EDIT: Replace with <img src="/your-photo.jpg" ... /> */}
          <div className="aspect-square rounded-2xl bg-bg-secondary border border-black/[0.07] flex flex-col items-center justify-center gap-3 text-text-faint">
            <User size={48} strokeWidth={1} />
            <span className="text-xs font-mono text-text-faint">
              your-photo.jpg
            </span>
          </div>
        </motion.div>
      </div>

      <div className="divider mb-20" />

      {/* ─── Skills ──────────────────────────────── */}
      <section className="mb-20">
        <span className="section-label">Capabilities</span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl text-text mb-10 tracking-tight"
        >
          Skills & Tools
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="p-5 rounded-xl bg-bg-secondary border border-black/[0.06]"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-white border border-black/[0.07] text-text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="divider mb-20" />

      {/* ─── Experience Timeline ──────────────────── */}
      <section>
        <span className="section-label">Journey</span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl text-text mb-10 tracking-tight"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/15 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {TIMELINE.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-8 relative"
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-bg" />

                <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-8">
                  <span className="font-mono text-xs text-accent whitespace-nowrap mt-0.5 min-w-[120px]">
                    {entry.year}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-base text-text">
                      {entry.title}
                    </h3>
                    <p className="text-sm font-mono text-text-muted mb-1">
                      {entry.org}
                    </p>
                    <p className="text-sm font-body text-text-muted leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
