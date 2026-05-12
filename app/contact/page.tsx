'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, ArrowUpRight } from 'lucide-react'

const CONTACT_LINKS = [
  {
    icon:    Mail,
    label:   'Email',
    value:   'pateltej@umich.edu',
    href:    'mailto:pateltej@umich.edu',
    color:   '#1E293B',
    desc:    'Best for project inquiries',
  },
  {
    icon:    Linkedin,
    label:   'LinkedIn',
    value:   'Tej Patel',
    href:    'https://linkedin.com/in/tejp07',
    color:   '#0A66C2',
    desc:    'Let\'s connect professionally',
  }
]

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status,    setStatus]    = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })
    setStatus(res.ok ? 'sent' : 'error')
  }

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-24">
      {/* ─── Header ────────────────────────── */}
      <div className="mb-16">
        <span className="section-label">Reach Out</span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-5xl md:text-6xl text-text tracking-tight mt-2"
        >
          Let&apos;s{' '}
          <span className="text-accent">Connect.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-text-muted font-body text-lg max-w-md"
        >
          Open to collaborations, freelance work, and interesting conversations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* ─── Contact links ───────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 flex flex-col gap-3"
        >
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href, color, desc }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08 }}
              className="group flex items-center gap-4 p-4 rounded-xl border border-black/[0.07] bg-white hover:border-black/[0.12] hover:bg-bg-secondary/50 transition-all"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}12`, border: `1px solid ${color}25` }}
              >
                <Icon size={16} style={{ color }} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    {label}
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="text-text-faint opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all"
                  />
                </div>
                <p className="text-sm font-body text-text truncate">{value}</p>
                <p className="text-xs text-text-faint">{desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ─── Contact form ────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-3"
        >
          <div className="p-6 md:p-8 rounded-2xl border border-black/[0.08] bg-white">
            <h2 className="font-display font-bold text-xl text-text mb-6">
              Send a Message
            </h2>

            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-xl text-accent font-bold">
                  ✓
                </div>
                <p className="font-display font-bold text-xl text-text">Message Sent!</p>
                <p className="text-text-muted font-body text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setFormState({ name: '', email: '', message: '' }) }}
                  className="btn-outline mt-2"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-black/[0.08] text-text text-sm font-body placeholder:text-text-faint focus:outline-none focus:border-accent/30 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="johnsmith@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-black/[0.08] text-text text-sm font-body placeholder:text-text-faint focus:outline-none focus:border-accent/30 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="What are you working on? What can I help with?"
                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-black/[0.08] text-text text-sm font-body placeholder:text-text-faint focus:outline-none focus:border-accent/30 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-sm font-body text-red-600">
                    Something went wrong — please email me directly at pateltej@umich.edu.
                  </p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
