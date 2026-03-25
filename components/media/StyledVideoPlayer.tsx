'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Maximize, Pause, Play, Volume2, VolumeX } from 'lucide-react'

type Props = {
  src: string
  poster?: string
  className?: string
  title?: string
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const s = Math.floor(seconds % 60)
  const m = Math.floor((seconds / 60) % 60)
  const h = Math.floor(seconds / 3600)
  const ss = s.toString().padStart(2, '0')
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${ss}`
  return `${m}:${ss}`
}

export default function StyledVideoPlayer({ src, poster, className, title = 'Видео' }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const progress = useMemo(() => {
    if (!duration) return 0
    return clamp(currentTime / duration, 0, 1)
  }, [currentTime, duration])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const onLoadedMeta = () => {
      setDuration(v.duration || 0)
      setIsReady(true)
      setIsMuted(v.muted)
      setVolume(v.volume ?? 1)
    }
    const onTimeUpdate = () => setCurrentTime(v.currentTime || 0)
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onVolumeChange = () => {
      setIsMuted(v.muted)
      setVolume(v.volume ?? 1)
    }

    v.addEventListener('loadedmetadata', onLoadedMeta)
    v.addEventListener('timeupdate', onTimeUpdate)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    v.addEventListener('volumechange', onVolumeChange)

    return () => {
      v.removeEventListener('loadedmetadata', onLoadedMeta)
      v.removeEventListener('timeupdate', onTimeUpdate)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
      v.removeEventListener('volumechange', onVolumeChange)
    }
  }, [])

  const togglePlay = async () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      try {
        await v.play()
      } catch {
        // Autoplay restrictions or other errors: do nothing.
      }
    } else {
      v.pause()
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
  }

  const setVideoVolume = (next: number) => {
    const v = videoRef.current
    if (!v) return
    const vol = clamp(next, 0, 1)
    v.volume = vol
    if (vol === 0) v.muted = true
    else if (v.muted) v.muted = false
  }

  const seekTo = (nextProgress: number) => {
    const v = videoRef.current
    if (!v || !duration) return
    v.currentTime = clamp(nextProgress, 0, 1) * duration
  }

  const onProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1)
    seekTo(x)
  }

  const requestFullscreen = async () => {
    const el = containerRef.current
    if (!el) return
    const anyEl = el as any
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
      else if (anyEl.requestFullscreen) await anyEl.requestFullscreen()
    } catch {
      // ignore
    }
  }

  return (
    <div
      ref={containerRef}
      className={[
        'group relative overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm',
        'ring-1 ring-black/5',
        className ?? '',
      ].join(' ')}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="aspect-video">
        <video ref={videoRef} className="h-full w-full object-cover" playsInline preload="metadata" poster={poster}>
          <source src={src} type="video/mp4" />
        </video>
      </div>

      {/* Soft vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />

      {/* Center play button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Түр зогсоох' : 'Тоглуулах'}
        className={[
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'grid h-16 w-16 place-items-center rounded-full',
          'bg-white/95 text-primary-blue shadow-lg shadow-black/25',
          'transition-all duration-200',
          isPlaying ? 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100' : 'opacity-100 scale-100',
          !isReady ? 'opacity-60' : '',
        ].join(' ')}
      >
        {isPlaying ? <Pause className="h-7 w-7" aria-hidden /> : <Play className="h-7 w-7 translate-x-[1px]" aria-hidden />}
      </button>

      {/* Control bar */}
      <div
        className={[
          'absolute inset-x-0 bottom-0 px-4 pb-4 pt-8',
          'transition-opacity duration-200',
          isPlaying && !isHovering ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 flex items-center justify-between gap-3 text-xs text-white/90">
            <span className="truncate font-medium">{title}</span>
            <span className="tabular-nums">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div
            role="slider"
            aria-label="Видео явц"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            tabIndex={0}
            onClick={onProgressClick}
            className="relative h-2 cursor-pointer rounded-full bg-white/20"
          >
            <div className="absolute inset-y-0 left-0 rounded-full bg-primary-yellow" style={{ width: `${progress * 100}%` }} />
            <div
              className="absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow"
              style={{ left: `calc(${progress * 100}% - 6px)`, width: 12, height: 12 }}
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 transition"
              >
                {isPlaying ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex items-center justify-center rounded-lg bg-white/10 p-2 text-white backdrop-blur hover:bg-white/15 transition"
                aria-label={isMuted ? 'Дуу нээх' : 'Дуу хаах'}
              >
                {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" aria-hidden /> : <Volume2 className="h-4 w-4" aria-hidden />}
              </button>

              <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur">
                <span className="text-xs text-white/80 w-8 tabular-nums">{Math.round(volume * 100)}%</span>
                <input
                  aria-label="Дууны хэмжээ"
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVideoVolume(Number(e.target.value))}
                  className="h-1.5 w-24 accent-primary-yellow"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={requestFullscreen}
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 transition"
            >
              <Maximize className="h-4 w-4" aria-hidden />
              Fullscreen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

