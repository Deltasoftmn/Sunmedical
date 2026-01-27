'use client'

import { useEffect, useRef, useState } from 'react'

type AnimationType = 'fade-in-up' | 'fade-in' | 'fade-in-down' | 'slide-in-left'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  threshold?: number
}

export default function AnimateIn({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.08,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const map: Record<AnimationType, string> = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in': 'animate-fade-in',
    'fade-in-down': 'animate-fade-in-down',
    'slide-in-left': 'animate-slide-in-left',
  }

  return (
    <div
      ref={ref}
      className={`${visible ? map[animation] : 'opacity-0'} ${className}`}
      style={delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
