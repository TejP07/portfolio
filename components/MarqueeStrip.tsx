import { MARQUEE_ITEMS } from '@/data/skills'

export default function MarqueeStrip() {
  // Double the items so we get seamless looping
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section className="relative py-8 overflow-hidden border-y border-white/[0.06]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-0 animate-marquee"
        style={{ width: 'max-content' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-4 text-sm font-mono text-text-faint whitespace-nowrap"
          >
            {item}
            <span className="text-accent opacity-40">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
