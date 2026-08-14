/** Spotify-style glyph: three curved lines in a circle. */
function SpotifyGlyph({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7 9.5c3.2-1 6.8-.8 9.5.6M7.6 12.4c2.6-.8 5.4-.6 7.6.5M8.4 15c2-.6 4-.4 5.6.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Allianz-style three vertical bars. */
function AllianzBars({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <rect x="1" y="3" width="3" height="10" rx="1" />
      <rect x="6.5" y="3" width="3" height="10" rx="1" />
      <rect x="12" y="3" width="3" height="10" rx="1" />
    </svg>
  )
}

const logoRowOne: LogoItem[] = [
  { name: "Kellogg's", style: 'font-serif italic font-bold tracking-tight text-xl' },
  { name: "L'ORÉAL", style: 'font-sans font-semibold tracking-[0.25em] text-lg' },
  { name: 'Heineken', style: 'font-sans font-bold tracking-[0.15em] text-lg', star: true },
  { name: 'Jeep', style: 'font-serif font-bold tracking-wide text-lg', boxed: true },
  { name: 'Champion', style: 'font-serif italic font-bold tracking-tight text-xl' },
]

const logoRowTwo: LogoItem[] = [
  { name: 'Spotify', style: 'font-sans font-bold text-lg', glyph: 'spotify' },
  { name: 'Allianz', style: 'font-sans font-bold tracking-wide text-lg', glyph: 'allianz' },
  { name: 'Coca-Cola', style: 'font-serif italic font-bold tracking-tight text-xl' },
  { name: 'Gillette', style: 'font-sans font-extrabold italic tracking-tight text-lg' },
  { name: 'NETFLIX', style: 'font-sans font-extrabold tracking-[0.12em] text-lg' },
]

interface LogoItem {
  name: string
  style: string
  star?: boolean
  boxed?: boolean
  glyph?: 'spotify' | 'allianz'
}

function LogoMark({ logo }: { logo: LogoItem }) {
  const inner = (
    <>
      {logo.star && (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
        </svg>
      )}
      <span className={logo.style}>{logo.name}</span>
      {logo.glyph === 'spotify' && <SpotifyGlyph />}
      {logo.glyph === 'allianz' && <AllianzBars />}
    </>
  )

  return (
    <div className="flex items-center justify-center gap-2 opacity-45 grayscale select-none">
      {logo.boxed ? (
        <span className="px-3 py-1 border border-current rounded-md flex items-center gap-2">{inner}</span>
      ) : (
        inner
      )}
    </div>
  )
}

export default function ClientLogos() {
  return (
    <section id="clients" className="py-20 lg:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-12 md:gap-y-14 place-items-center">
          {logoRowOne.map((logo) => (
            <LogoMark key={logo.name} logo={logo} />
          ))}
          {logoRowTwo.map((logo) => (
            <LogoMark key={logo.name} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
