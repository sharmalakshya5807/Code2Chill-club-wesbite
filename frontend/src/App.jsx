import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Button from './components/ui/Button'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050811] text-[#F8FAFC] flex flex-col font-body selection:bg-[#C8FF00]/25 selection:text-[#C8FF00]">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Interactive Center-Aligned Hero Section */}
        <Hero />

        {/* Placeholder Anchor Sections with subtle blueprint glass design */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]"></span>
              <span className="font-mono-tag text-xs uppercase tracking-wider text-[#C8FF00] font-semibold">About Code2Chill</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
              More than just syntax. A culture of building.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              We bridge the gap between classroom theory and real-world tech. Whether you are debugging your very first loop or launching production applications, Code2Chill is your launchpad for learning, shipping, and having fun together.
            </p>
          </div>
        </section>

        <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
              <span className="font-mono-tag text-xs uppercase tracking-wider text-[#00F0FF] font-semibold">Upcoming & Past</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-6">
              Workshops, Hackathons & Code Nights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#C8FF00]/40 transition-all">
                <div className="font-mono-tag text-xs text-[#C8FF00] mb-2 font-medium">WEEKEND SPRINT</div>
                <h3 className="font-heading text-lg sm:text-xl font-medium text-white mb-2">Web3 & Full-Stack Jam</h3>
                <p className="text-slate-400 text-sm leading-relaxed">A 24-hour collaborative sprint building modern React applications and scalable architectures.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00F0FF]/40 transition-all">
                <div className="font-mono-tag text-xs text-[#00F0FF] mb-2 font-medium">HANDS-ON LAB</div>
                <h3 className="font-heading text-lg sm:text-xl font-medium text-white mb-2">Git & Open Source Kickstart</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Learn branching strategies, pull requests, and make your first open-source contributions.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]"></span>
              <span className="font-mono-tag text-xs uppercase tracking-wider text-[#A855F7] font-semibold">Leadership & Mentors</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
              Driven by passionate students
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Our core team organizes peer learning sessions, handles sponsorships, and curates hands-on tech events throughout the semester.
            </p>
          </div>
        </section>

        <section id="join" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#C8FF00] font-mono-tag text-xs mb-5">
              <span>Ready to level up?</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
              Join the Code2Chill Family
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Open to all university students regardless of major or experience level. Connect with us and get access to exclusive club workshops, hackathons, and project teams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button variant="primary" size="lg" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Connect via Instagram
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="border-t border-white/[0.08] py-8 px-4 text-center text-xs font-mono-tag text-slate-500">
        <p>© {new Date().getFullYear()} Code2Chill Club.</p>
      </footer>
    </div>
  )
}
