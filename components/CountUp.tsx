'use client'

import { useEffect, useState, useRef } from 'react'

export default function CountUp({ text, className }: { text: string, className?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  
  // Extract number and suffix
  const numMatch = text.match(/\d+(,\d+)*(\.\d+)?/)
  const numStr = numMatch ? numMatch[0].replace(/,/g, '') : '0'
  const target = parseFloat(numStr)
  
  const prefix = numMatch ? text.substring(0, text.indexOf(numMatch[0])) : ''
  const suffix = numMatch ? text.substring(text.indexOf(numMatch[0]) + numMatch[0].length) : text
  
  useEffect(() => {
    if (!ref.current) return
    let animationFrameId: number

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2000 // 2 seconds
        const startTime = performance.now()
        
        const update = (currentTime: number) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // easeOutExpo for smoother ending
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
          
          setCount(Math.floor(easeProgress * target))
          
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(update)
          } else {
            setCount(target)
          }
        }
        
        animationFrameId = requestAnimationFrame(update)
      } else {
        // Reset count when scrolled out of view so it animates again next time
        setCount(0)
        if (animationFrameId) cancelAnimationFrame(animationFrameId)
      }
    }, { threshold: 0.1 })
    
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [target])

  // Format with commas if original had commas
  const formattedCount = text.includes(',') ? count.toLocaleString('en-US') : count.toString()

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  )
}
