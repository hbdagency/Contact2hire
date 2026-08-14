import Logo from './Logo'

interface CircularBadgeProps {
  text: string
  className?: string
  bgClassName?: string
  spin?: boolean
  children?: React.ReactNode
}

/**
 * Circular badge with text running around the border and a clover knot
 * in the center — the signature badge from the mockups. Text renders via
 * SVG textPath and inherits the wrapper's text color; the whole SVG slowly
 * rotates when `spin` is true.
 */
export default function CircularBadge({
  text,
  className = 'w-24 h-24 text-white',
  bgClassName = 'fill-brand-violet',
  spin = true,
  children,
}: CircularBadgeProps) {
  const id = `circularPath-${text.replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <div className={`relative inline-flex items-center justify-center ${spin ? 'rotating-badge' : ''} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id={id}
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <circle cx="50" cy="50" r="50" className={bgClassName} />
        <text
          fill="currentColor"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="2.5"
          textAnchor="middle"
          style={{ textTransform: 'uppercase' }}
        >
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
        <circle cx="50" cy="50" r="16" className="fill-white/15" />
      </svg>
      {/* Center icon */}
      <span className="absolute inset-0 flex items-center justify-center">
        {children ?? <Logo className="w-7 h-7" rotateOnHover={false} />}
      </span>
    </div>
  )
}
