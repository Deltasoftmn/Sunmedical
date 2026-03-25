type Props = {
  videoId: string
  title: string
  /** Background style: autoplay muted, no controls */
  variant?: 'background' | 'player'
  className?: string
}

function buildSrc(videoId: string, variant: 'background' | 'player') {
  const base = `https://www.youtube-nocookie.com/embed/${videoId}`

  if (variant === 'background') {
    // Note: loop requires playlist=VIDEO_ID for YouTube embeds.
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      controls: '0',
      rel: '0',
      playsinline: '1',
      loop: '1',
      playlist: videoId,
      modestbranding: '1',
      iv_load_policy: '3',
    })
    return `${base}?${params.toString()}`
  }

  const params = new URLSearchParams({
    autoplay: '0',
    mute: '0',
    controls: '1',
    rel: '0',
    playsinline: '1',
    modestbranding: '1',
  })
  return `${base}?${params.toString()}`
}

export default function YouTubeEmbed({ videoId, title, variant = 'player', className }: Props) {
  const src = buildSrc(videoId, variant)

  return (
    <iframe
      className={className}
      src={src}
      title={title}
      allow="autoplay; encrypted-media; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

