/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAFAF8',
          secondary: '#F4F1EC',
          tertiary: '#EDE9E2',
        },
        accent: {
          DEFAULT: '#1E293B',
          dim: 'rgba(30, 41, 59, 0.08)',
        },
        text: {
          DEFAULT: '#1C1917',
          muted: '#78716C',
          faint: '#A8A29E',
        },
        // Category accent colors
        cat: {
          programming: '#0284C7',
          gamedev:     '#BE185D',
          art2d:       '#C2410C',
          art3d:       '#7C3AED',
          gis:         '#15803D',
          aes:         '#A16207',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      borderColor: {
        DEFAULT: 'rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease forwards',
        'marquee':    'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'card':       '0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
