import { useState } from 'react'

// Detects provider + extracts the embeddable URL from a Loom / YouTube link.
function resolveEmbed(url) {
  try {
    const u = new URL(url)
    if (u.hostname.includes('loom.com')) {
      const id = u.pathname.split('/').pop()
      return { src: `https://www.loom.com/embed/${id}`, provider: 'Loom' }
    }
    if (u.hostname.includes('youtu')) {
      const id = u.hostname.includes('youtu.be')
        ? u.pathname.slice(1)
        : u.searchParams.get('v')
      return {
        src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
        provider: 'YouTube',
      }
    }
  } catch {
    /* fall through */
  }
  return { src: url, provider: 'Vidéo' }
}

// Click-to-load video façade: no third-party iframe until the user opts in
// (better mobile perf, no eager tracking).
export function VideoEmbed({ url, title, poster }) {
  const [active, setActive] = useState(false)
  const { src, provider } = resolveEmbed(url)

  return (
    <div className="relative my-6 aspect-video w-full overflow-hidden rounded-2xl border border-black/10 bg-black dark:border-white/10">
      {active ? (
        <iframe
          src={src}
          title={title ?? provider}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3 text-white"
          style={
            poster
              ? {
                  backgroundImage: `url(${poster})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : undefined
          }
        >
          <span className="absolute inset-0 bg-black/40 transition group-hover:bg-black/30" />
          <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-0.5 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="relative text-sm font-medium">
            {title ? `${title} · ${provider}` : `Lire la vidéo · ${provider}`}
          </span>
        </button>
      )}
    </div>
  )
}
