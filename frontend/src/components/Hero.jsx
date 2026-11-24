import React, { useEffect, useRef } from 'react'
import { Users, Calendar, Sparkles, ArrowRight } from 'lucide-react'
import Button from './ui/Button'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    const mouse = {
      x: null,
      y: null,
      radius: 220,
    }

    const ripples = []

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouse.x = e.touches[0].clientX - rect.left
        mouse.y = e.touches[0].clientY - rect.top
      }
    }

    const handleTouchEnd = () => {
      mouse.x = null
      mouse.y = null
    }

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top
      ripples.push({
        x: clickX,
        y: clickY,
        radius: 4,
        maxRadius: 260,
        alpha: 0.75,
        speed: 6.5,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('click', handleClick)

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener('resize', handleResize)

    // Code tokens & particles setup with Acid Lime (#C8FF00) and Electric Cyan (#00F0FF)
    const symbols = ['{ }', '</>', '=>', '01']
    const particles = []
    const particleCount = Math.min(80, Math.max(50, Math.floor((width * height) / 11000)))

    for (let i = 0; i < particleCount; i++) {
      const isSymbol = Math.random() > 0.65
      const isLime = Math.random() > 0.45
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: isSymbol ? 0 : Math.random() * 2 + 1.2,
        isSymbol,
        symbol: isSymbol ? symbols[Math.floor(Math.random() * symbols.length)] : null,
        baseAlpha: Math.random() * 0.35 + 0.45,
        color: isLime ? '200, 255, 0' : '0, 240, 255', // Acid Lime or Electric Cyan
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Soft Cursor Radial Spotlight
      if (mouse.x !== null && mouse.y !== null) {
        const spotlight = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        )
        spotlight.addColorStop(0, 'rgba(0, 240, 255, 0.12)')
        spotlight.addColorStop(0.45, 'rgba(200, 255, 0, 0.05)')
        spotlight.addColorStop(1, 'rgba(5, 8, 17, 0)')

        ctx.fillStyle = spotlight
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // 2. Click Ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r]
        ripple.radius += ripple.speed
        ripple.alpha *= 0.94

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 240, 255, ${ripple.alpha * 0.65})`
        ctx.lineWidth = 1.5
        ctx.stroke()

        if (ripple.alpha < 0.02 || ripple.radius > ripple.maxRadius) {
          ripples.splice(r, 1)
        }
      }

      // 3. Update & Draw Constellation Nodes & Code Tokens
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        // Wrap around boundaries
        if (p.x < -30) p.x = width + 30
        if (p.x > width + 30) p.x = -30
        if (p.y < -30) p.y = height + 30
        if (p.y > height + 30) p.y = -30

        // Ripple interaction
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r]
          const rdx = p.x - rip.x
          const rdy = p.y - rip.y
          const rdist = Math.hypot(rdx, rdy)
          if (Math.abs(rdist - rip.radius) < 25) {
            const push = ((25 - Math.abs(rdist - rip.radius)) / 25) * 2.5
            p.x += (rdx / (rdist || 1)) * push
            p.y += (rdy / (rdist || 1)) * push
          }
        }

        // Mouse magnetic pull & proximity brightness
        let alpha = p.baseAlpha
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < mouse.radius) {
            const factor = (mouse.radius - dist) / mouse.radius
            p.x += (dx / dist) * factor * 0.65
            p.y += (dy / dist) * factor * 0.65
            alpha = Math.min(1, alpha + factor * 0.5)
          }
        }

        if (p.isSymbol) {
          ctx.font = `600 11px "JetBrains Mono", monospace`
          ctx.fillStyle = `rgba(${p.color}, ${alpha})`
          ctx.shadowBlur = 8
          ctx.shadowColor = `rgba(${p.color}, 0.7)`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(p.symbol, p.x, p.y)
          ctx.shadowBlur = 0
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.color}, ${alpha})`
          ctx.shadowBlur = 8
          ctx.shadowColor = `rgba(${p.color}, 0.8)`
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      // 4. Inter-Particle Network Lines
      const maxConnectDist = 115
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.16
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // 5. Bright Glowing Web Lines Connected to Cursor
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.45
            ctx.beginPath()
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`
            ctx.lineWidth = 1.1
            ctx.shadowBlur = 6
            ctx.shadowColor = 'rgba(0, 240, 255, 0.6)'
            ctx.stroke()
            ctx.shadowBlur = 0
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-26 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Interactive Mouse-Reactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Ambient Cyber Backglows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[680px] h-[340px] sm:h-[420px] bg-gradient-to-tr from-[#00F0FF]/10 via-[#C8FF00]/10 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Center Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-4">
        
        {/* Top Badge with 45° Diagonal Hatching Texture & Silkscreen Pixel Accent */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-black/60 border border-white/15 bg-hatch-pattern text-xs font-mono-tag text-slate-300 mb-6 shadow-sm backdrop-blur-md">
          <span className="font-pixel text-[11px] text-[#C8FF00] tracking-wider">[SYS: ONLINE]</span>
          <span className="text-slate-500">//</span>
          <span className="text-slate-300">UNIVERSITY CODING COMMUNITY</span>
        </div>

        {/* Headline: Clean, Balanced & Well-Proportioned */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-5 max-w-3xl">
          Code Together.{' '}
          <span className="bg-gradient-to-r from-[#C8FF00] to-[#00F0FF] bg-clip-text text-transparent">
            Build Real Things.
          </span>{' '}
          Chill.
        </h1>

        {/* Subheadline */}
        <p className="font-body text-slate-400 text-sm sm:text-base text-balance max-w-2xl mx-auto leading-relaxed mb-8">
          A student-driven coding community where beginners and builders team up for
          workshops, hackathons, open-source, and peer mentorship.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-14">
          <Button
            variant="primary"
            size="md"
            href="#join"
            className="w-full sm:w-auto group"
          >
            <span>Join Club</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="secondary"
            size="md"
            href="#events"
            className="w-full sm:w-auto"
          >
            Explore Events
          </Button>
        </div>

        {/* Bottom Single Glass Capsule Bar */}
        <div className="w-full max-w-2xl px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-slate-300">
          {/* 300+ Team Members */}
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#C8FF00]" />
            <span><strong className="text-white font-bold text-sm">300+</strong> Team Members</span>
          </div>

          <span className="hidden sm:inline text-slate-600 font-mono-tag">•</span>

          {/* Workshops & Hackathons — Coming Soon */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#00F0FF]" />
            <span>Workshops & Hackathons</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded-full border border-[#00F0FF]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
              Coming Soon
            </span>
          </div>

          <span className="hidden sm:inline text-slate-600 font-mono-tag">•</span>

          {/* 100% Beginner Friendly */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C8FF00]" />
            <span><strong className="text-white font-bold text-sm">100%</strong> Beginner Friendly</span>
          </div>
        </div>

      </div>
    </section>
  )
}
