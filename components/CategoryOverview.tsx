'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CATEGORY_META, Category } from '@/data/projects'

const CATEGORY_ICONS: Record<Category, string> = {
  programming: '⌨️',
  gamedev:     '🎮',
  art2d:       '🎨',
  art3d:       '🧊',
  gis:         '🗺️',
  archviz:     '⚙️',
}

export default function CategoryOverview() {
  const categories = Object.entries(CATEGORY_META) as [Category, typeof CATEGORY_META[Category]][]

  return (
    <section className="py-24 px-6 md:px-16 bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">Disciplines</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-text tracking-tight"
          >
            What I <span className="text-gradient">Build.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(([key, meta], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/projects?category=${key}`}
                className="group flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-bg-tertiary/40 hover:border-white/[0.12] hover:bg-bg-tertiary/70 transition-all"
              >
                {/* Color dot + icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 mt-0.5"
                  style={{ background: `${meta.color}18`, border: `1px solid ${meta.color}30` }}
                >
                  {CATEGORY_ICONS[key]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3
                      className="font-display font-bold text-sm text-text group-hover:transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {meta.label}
                    </h3>
                    <ArrowRight
                      size={12}
                      className="text-text-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0"
                    />
                  </div>
                  <p className="text-xs text-text-muted font-body leading-relaxed">
                    {meta.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
