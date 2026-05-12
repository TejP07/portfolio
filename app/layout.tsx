import type { Metadata } from 'next'
import { Playfair_Display, Lora, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Tej Patel — Portfolio',
    template: '%s | Tej Patel',
  },
  description:
    'Software engineer, game developer, and digital artist. Building across code, art, and interactive worlds.',
  keywords: [
    'software engineer', 'game developer', 'digital artist', '3D modeling',
    'GIS', 'portfolio', 'web development',
  ],
  authors: [{ name: 'Tej Patel' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Tej Patel — Portfolio',
    description: 'Software engineer, game developer, and digital artist.',
    siteName: 'Tej Patel Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text font-body min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
