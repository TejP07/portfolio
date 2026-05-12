import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Tej Patel — Portfolio',
}

export default function HomePage() {
  return <HeroSection />
}
