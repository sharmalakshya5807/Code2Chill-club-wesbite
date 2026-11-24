import React from 'react'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050811]'

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-semibold',
    md: 'text-sm px-5 py-2.5 gap-2 font-semibold',
    lg: 'text-sm sm:text-base px-6 py-3 gap-2.5 font-semibold',
  }

  const variantStyles = {
    primary:
      'bg-[#C8FF00] text-[#050811] font-bold shadow-[0_0_20px_rgba(200,255,0,0.35)] hover:shadow-[0_0_32px_rgba(200,255,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 border border-[#C8FF00]',
    secondary:
      'bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/15 hover:border-[#00F0FF]/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0',
  }

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`

  if (href) {
    return (
      <a href={href} className={combinedStyles} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={combinedStyles} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
