interface LogoProps {
  className?: string
  rotateOnHover?: boolean
}

/**
 * Brand mark — the handshake logo (public/logo.png).
 * Rotates 180 degrees on hover by default.
 */
export default function Logo({ className = 'w-9 h-9', rotateOnHover = true }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Contact2Hire logo"
      width={512}
      height={512}
      className={`${className} object-contain transition-transform duration-700 ${
        rotateOnHover ? 'hover:rotate-180' : ''
      }`}
    />
  )
}
