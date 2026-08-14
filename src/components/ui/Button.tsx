import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: ReactNode
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-brand-violet text-white hover:bg-brand-violet-dark rounded-full relative overflow-hidden group',
    secondary: 'text-gray-900 border-b-2 border-gray-900 hover:text-brand-violet hover:border-brand-violet pb-1',
    ghost: 'text-gray-900 hover:text-brand-violet hover:bg-gray-100 rounded-lg px-4 py-2',
    outline: 'border border-gray-900 text-gray-900 hover:border-brand-violet hover:text-brand-violet rounded-full bg-transparent',
  }
  
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-brand-violet-dark transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      )}
      <span className={`relative z-10 flex items-center gap-2 ${variant === 'primary' ? '' : ''}`}>
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  )
}