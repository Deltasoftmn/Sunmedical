'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

type Props = {
  src: string
  alt: string
  className?: string
  aspectClassName?: string
  imgClassName?: string
  sizes?: string
  priority?: boolean
  /** Full width, natural height — entire image visible (no fixed box crop). */
  variant?: 'aspect' | 'full'
  /** Hint for layout / CLS when variant is full; real file ratio still respected via h-auto. */
  intrinsicWidth?: number
  intrinsicHeight?: number
}

export default function TreatmentImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  imgClassName = 'object-contain object-center',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  variant = 'aspect',
  intrinsicWidth = 1920,
  intrinsicHeight = 1080,
}: Props) {
  const [failed, setFailed] = useState(false)

  if (variant === 'full') {
    return (
      <div className={`w-full overflow-hidden rounded-sm bg-gradient-to-r from-primary-darkBlue to-primary-blue ${className}`}>
        {failed ? (
          <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 p-6 text-center text-gray-500">
            <ImageIcon className="h-10 w-10 opacity-40 text-white/70" aria-hidden />
            <span className="text-xs leading-snug text-white/80">Зураг олдсонгүй — public хавтас руу оруулна уу</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={intrinsicWidth}
            height={intrinsicHeight}
            className="h-auto w-full max-w-full object-contain object-center align-middle"
            sizes={sizes}
            priority={priority}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    )
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-sm bg-gray-100 ${aspectClassName} ${className}`}>
      {failed ? (
        <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-2 p-6 text-center text-gray-500">
          <ImageIcon className="h-10 w-10 opacity-40" aria-hidden />
          <span className="text-xs leading-snug">Зураг олдсонгүй — public хавтас руу оруулна уу</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={imgClassName}
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
