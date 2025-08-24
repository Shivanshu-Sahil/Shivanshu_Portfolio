import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { FloatingBar } from '@/components/ui/FloatingBar'

export const metadata: Metadata = {
  title: 'Shivanshu Sahil | Portfolio',
  description: 'Welcome to my portfolio. I\'m a Full Stack Developer passionate about creating exceptional digital experiences.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <FloatingBar />
    </div>
  )
}