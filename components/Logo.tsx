import Image from 'next/image'

interface LogoProps {
  width?: number
  height?: number
  className?: string
  showFallback?: boolean
}

export default function Logo({ width = 120, height = 40, className = '', showFallback = true }: LogoProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Sun Medical Center Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
}
