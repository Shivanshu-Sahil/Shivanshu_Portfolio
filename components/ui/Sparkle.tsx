"use client"

import { ReactNode } from 'react'

interface SparkleProps {
  children: ReactNode
  intensity?: 'light' | 'medium' | 'strong'
  className?: string
}

export function Sparkle({ children, intensity = 'medium', className = '' }: SparkleProps) {
  const getIntensityClass = () => {
    switch (intensity) {
      case 'light':
        return 'bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20'
      case 'strong':
        return 'bg-gradient-to-r from-primary via-accent to-primary-glow'
      default:
        return 'bg-gradient-to-r from-primary/60 via-accent/60 to-primary-glow/60'
    }
  }

  return (
    <div className={`relative inline-block transition-transform duration-200 hover:scale-[1.02] ${className}`}>
      <div
        className={`absolute -inset-1 rounded-lg blur opacity-75 animate-shimmer ${getIntensityClass()}`}
        style={{ backgroundSize: '200% 100%' }}
      />
      <div className="relative">
        {children}
      </div>
    </div>
  )
}