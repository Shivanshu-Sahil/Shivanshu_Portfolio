"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  className?: string
}

export function Reveal({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  distance = 20,
  className = '' 
}: RevealProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return `translate-y-${distance} opacity-0`
        case 'down': return `-translate-y-${distance} opacity-0`
        case 'left': return `translate-x-${distance} opacity-0`
        case 'right': return `-translate-x-${distance} opacity-0`
        default: return `translate-y-${distance} opacity-0`
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100'
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        getTransformClass(),
        className
      )}
      style={{ 
        transitionDuration: `${duration}s`,
        transitionDelay: isVisible ? `${delay}s` : '0s'
      }}
    >
      {children}
    </div>
  )
}