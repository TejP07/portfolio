'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ChevronLeft, ChevronRight } from 'lucide-react'

export default function WorkPage() {
  const viewerRef    = useRef<HTMLDivElement>(null)
  const renditionRef = useRef<any>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!viewerRef.current) return
    let rendition: any

    ;(async () => {
      const Epub = (await import('epubjs')).default
      const book = Epub('/portfolio.epub')
      rendition = book.renderTo(viewerRef.current!, {
        width: '100%',
        height: '100%',
        spread: 'none',
      })
      renditionRef.current = rendition
      await rendition.display()
      setReady(true)
    })()

    return () => { rendition?.destroy() }
  }, [])

  return (
    <div className="min-h-screen pt-16 flex flex-col bg-bg">
      {/* Header bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-6 md:px-10 py-5 flex items-center justify-between border-b border-black/[0.07]"
      >
        <div>
          <span className="section-label">Portfolio</span>
          <h1 className="font-display font-bold text-2xl text-text tracking-tight">Work.</h1>
        </div>
        <a href="/portfolio.epub" download className="btn-outline">
          <Download size={13} />
          Download
        </a>
      </motion.div>

      {/* EPUB viewer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 relative"
        style={{ height: 'calc(100vh - 180px)' }}
      >
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center text-text-faint font-mono text-sm">
            Loading…
          </div>
        )}
        <div ref={viewerRef} className="w-full h-full" />
      </motion.div>

      {/* Prev / Next navigation */}
      <div className="flex items-center justify-center gap-6 py-4 border-t border-black/[0.07]">
        <button
          onClick={() => renditionRef.current?.prev()}
          className="btn-outline flex items-center gap-1"
        >
          <ChevronLeft size={14} /> Prev
        </button>
        <button
          onClick={() => renditionRef.current?.next()}
          className="btn-outline flex items-center gap-1"
        >
          Next <ChevronRight size={14} />
        </button>
      </div>
    </div>
  )
}
