'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, User } from 'lucide-react'

const ROLES = [
  'Urban Technologist',
  'GIS Specialist',
  'Architectural Visualiser',
  '2D and 3D Digital Artist',
]

const STATS = [
  { label: 'Projects Shipped',  value: '20+' },
  { label: 'Games Built',       value: '8'   },
  { label: 'Lines of Code',     value: '∞'   },
]

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2800
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
      {/* ─── Content ───────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* ─── Text column ───────────────────────── */}
          <div className="lg:col-span-3">
            {/* Name — big display */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-display font-semibold italic leading-[0.88] tracking-normal text-text mb-4"
              style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
            >
              Tej
              <br />
              <span className="text-accent">Patel.</span>
            </motion.h1>

            {/* Animated role ticker */}
            <div className="h-10 overflow-hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0,  opacity: 1 }}
                  exit={{ y: -20,   opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="text-xl md:text-2xl text-text-muted font-body font-light italic"
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bio blurb */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="max-w-md text-text-muted font-body text-base md:text-lg leading-relaxed mb-10"
            >
              Building software, crafting worlds, and creating art across
              code, games, and digital media.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-16"
            >
              <Link href="/projects" className="btn-primary">
                View My Work
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-10"
            >
              {STATS.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="flex flex-col gap-0.5"
                >
                  <span className="font-display font-bold text-2xl text-text">
                    {value}
                  </span>
                  <span className="text-xs font-mono text-text-muted tracking-wide">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ─── Photo column ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 order-last lg:order-none"
          >
            {/* ✏️ EDIT: Replace this div with:
                <img src="/profile.jpg" alt="Tej Patel" className="w-full h-full object-cover" />
                Place your photo at public/profile.jpg */}
            <div className="aspect-[3/4] p-3 bg-bg border border-black/[0.15] rounded-sm">
              <img src="/profile.png" alt="Tej Patel" className="w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-faint"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-faint to-transparent" />
      </motion.div>
    </section>
  )
}
