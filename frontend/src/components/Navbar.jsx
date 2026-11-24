import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Instagram from './ui/Instagram'
import Button from './ui/Button'

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Join Us', href: '#join' },
  ]

  const handleLinkClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050811]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-[#050811]/80 backdrop-blur-md border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">
          {/* Brand Logo with Clean Circular Emblem */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Code2Chill Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-white/20 shadow-[0_0_14px_rgba(200,255,0,0.25)] bg-[#070B14] group-hover:border-[#C8FF00]/60 transition-colors">
              <img
                src="/logo.png"
                alt="Code2Chill Club Logo"
                className="w-full h-full object-cover object-center scale-[1.08]"
              />
            </div>
            <div className="flex items-baseline font-heading tracking-tight text-xl font-bold">
              <span className="text-white">Code</span>
              <span className="text-[#C8FF00] ml-0.5 group-hover:brightness-110 transition-colors">
                2Chill
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 relative py-1 hover:text-[#00F0FF] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C8FF00] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Instagram Social Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-300 hover:text-[#00F0FF] hover:bg-white/5 transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] focus:outline-none"
              aria-label="Code2Chill Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* Acid Lime CTA Button */}
            <Button variant="primary" size="sm" href="#join">
              Join Club
            </Button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-300 hover:text-[#00F0FF] hover:bg-white/5 transition-colors"
              aria-label="Code2Chill Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF00]"
              aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/10 bg-[#050811]/95 backdrop-blur-xl ${
          isMobileOpen ? 'max-h-96 opacity-100 py-5 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col gap-3.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-base font-medium text-slate-200 hover:text-[#C8FF00] py-1.5 transition-colors border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center gap-2.5 text-sm font-medium text-[#00F0FF] py-1.5 hover:text-cyan-300 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
          </a>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              href="#join"
              className="w-full"
              onClick={handleLinkClick}
            >
              Join Club
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
