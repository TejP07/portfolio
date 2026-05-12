import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const SOCIALS = [
  { icon: Github,   href: 'https://github.com/TejP07',              label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/tejp07',         label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:pateltej@umich.edu',              label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/[0.07] bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: name + copyright */}
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="font-display font-bold text-base text-text hover:text-accent transition-colors"
          >
            TP<span className="text-accent">.</span>
          </Link>
          <p className="mt-1 text-xs text-text-faint font-mono">
            © {year} Tej Patel. All rights reserved.
          </p>
        </div>

        {/* Right: social links */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-md text-text-muted hover:text-accent hover:bg-accent/[0.06] transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
