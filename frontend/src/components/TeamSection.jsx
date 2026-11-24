import React, { useState, useEffect } from 'react'

const ROSTER_SECTIONS = [
  {
    title: 'LEADERSHIP',
    description: 'Overall coordination, club direction, and community strategy.',
    members: [
      {
        id: 1,
        name: 'Lakshay Kalra',
        role: 'PRESIDENT',
        dept: 'Leadership',
        initial: 'L',
        bio: 'Leading overall club direction, university partnerships, and building an inclusive engineering culture for campus coders.',
        link: 'https://instagram.com'
      },
      {
        id: 2,
        name: 'Jiya Arora',
        role: 'VICE PRESIDENT',
        dept: 'Leadership',
        initial: 'J',
        bio: 'Overseeing operations, inter-department alignment, and empowering team leads to execute high-impact initiatives.',
        link: 'https://instagram.com'
      }
    ]
  },
  {
    title: 'TECHNICAL TEAM',
    description: 'Build. Fixes. Keeps things running. Web platforms, codebases, and hands-on workshops.',
    members: [
      {
        id: 3,
        name: 'Samanyu Thakur',
        role: 'TECHNICAL HEAD',
        dept: 'Technical',
        initial: 'S',
        bio: 'Architecting web platforms, open-source repositories, and mentoring junior developers in full-stack engineering.',
        link: 'https://instagram.com'
      },
      {
        id: 4,
        name: 'Bhupinder Singh',
        role: 'TECHNICAL HEAD',
        dept: 'Technical',
        initial: 'B',
        bio: 'Leading hands-on dev sessions, system architecture, and cloud deployment pipelines for club projects.',
        link: 'https://instagram.com'
      }
    ]
  },
  {
    title: 'CONTENT TEAM',
    description: 'Writes. Edits. Tells our story. Newsletters, tutorials, and technical event documentation.',
    members: [
      {
        id: 5,
        name: 'Ayush Sharma',
        role: 'CONTENT HEAD',
        dept: 'Content & Editorial',
        initial: 'A',
        bio: 'Crafting developer newsletters, technical documentation, and translating complex concepts into readable guides.',
        link: 'https://instagram.com'
      },
      {
        id: 6,
        name: 'Tamanna Kakkar',
        role: 'CONTENT HEAD',
        dept: 'Content & Editorial',
        initial: 'T',
        bio: 'Writing event narratives, post-mortems, and building our student engineering editorial publication.',
        link: 'https://instagram.com'
      }
    ]
  },
  {
    title: 'SOCIAL MEDIA TEAM',
    description: 'Creates buzz. Builds community. Broadcasting updates, reels, and campus announcements.',
    members: [
      {
        id: 7,
        name: 'Jashan Bhalla',
        role: 'SOCIAL MEDIA HEAD',
        dept: 'Social Media',
        initial: 'J',
        bio: 'Managing community broadcasting, viral reels, event teasers, and expanding our online student reach.',
        link: 'https://instagram.com'
      }
    ]
  },
  {
    title: 'CREATIVE & OPERATIONS UNITS',
    description: 'Design assets, event coordination, logistics, and student outreach.',
    members: [
      {
        id: 8,
        name: 'Graphics Team',
        role: 'CORE_UNIT',
        dept: 'Design',
        initial: 'G',
        bio: 'Creating club branding, banners, posters, and cyber-aesthetic digital artwork for all club events.',
        link: 'https://instagram.com'
      },
      {
        id: 9,
        name: 'Organising Team',
        role: 'CORE_UNIT',
        dept: 'Operations',
        initial: 'O',
        bio: 'Managing hall reservations, event schedules, stage setups, and on-ground logistics for hackathons.',
        link: 'https://instagram.com'
      },
      {
        id: 10,
        name: 'Promotions Team',
        role: 'CORE_UNIT',
        dept: 'Public Relations',
        initial: 'P',
        bio: 'Classroom campaigns, campus announcements, and connecting prospective coders with our club community.',
        link: 'https://instagram.com'
      }
    ]
  }
]

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null)

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null)
      }
    }
    if (selectedMember) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMember])

  return (
    <section id="team" className="pt-26 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen relative bg-black">
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ================= 1. LEFT-ALIGNED HEADER ================= */}
        <div className="mb-14 border-b border-[#1f1f1f] pb-8">
          <div className="font-mono-tag text-xs text-slate-400 mb-2 uppercase tracking-wider">
            2026-27 · ROSTER
          </div>
          {/* Glowing Blue Neon TEAM Title */}
          <h1 className="font-pixel text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider uppercase mb-2 neon-blue-text">
            TEAM
          </h1>
          <p className="font-heading text-sm sm:text-base text-white/90">
            The people behind Code2Chill
          </p>
        </div>

        {/* ================= 2. SECTIONS FLOW ================= */}
        <div className="space-y-16">
          {ROSTER_SECTIONS.map((section, idx) => (
            <div
              key={section.title}
              className={`${idx !== ROSTER_SECTIONS.length - 1 ? 'border-b border-[#1c1c1c] pb-12' : 'pb-6'}`}
            >
              {/* Title & Stacked Description */}
              <div className="mb-5">
                <h2 className="font-pixel text-lg sm:text-xl font-bold text-white tracking-wider uppercase mb-1">
                  {section.title}
                </h2>
                <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {section.members.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="rounded-2xl p-3 cursor-pointer group bg-[#0c0c0c] border border-[#1c1c1c] hover:bg-[#121212] hover:border-[#383838] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-full aspect-square rounded-xl bg-carbon-hatch border border-[#222222] flex items-center justify-center mb-3 group-hover:border-white/40 transition-colors relative overflow-hidden">
                      <span className="font-pixel text-3xl text-white group-hover:scale-110 transition-transform select-none">
                        {member.initial}
                      </span>
                      <div className="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono-tag text-[9px] text-[#00F0FF] bg-black/90 px-1.5 py-0.5 rounded border border-[#00F0FF]/30">
                        VIEW
                      </div>
                    </div>
                    <div className="font-heading font-semibold text-sm text-white truncate">
                      {member.name}
                    </div>
                    <div className="font-mono-tag text-[10px] text-slate-400 uppercase tracking-wider mt-1 truncate">
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= PROFILE DOSSIER MODAL ================= */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-[#0e0e0e] border border-[#2c2c2c] p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs font-mono-tag"
            >
              [ESC / ✕]
            </button>

            {/* Header info */}
            <div className="flex items-center gap-4 mb-5 pt-2">
              <div className="w-16 h-16 rounded-xl bg-carbon-hatch border border-[#2c2c2c] flex items-center justify-center shrink-0 shadow-inner">
                <span className="font-pixel text-2xl text-white">
                  {selectedMember.initial}
                </span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">
                  {selectedMember.name}
                </div>
                <div className="font-mono-tag text-xs font-semibold text-[#00F0FF] uppercase mt-0.5">
                  {selectedMember.role}
                </div>
              </div>
            </div>

            {/* Department info */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-black/70 border border-[#222222] mb-5 text-xs font-mono-tag">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">DEPARTMENT</span>
                <span className="text-white font-medium">{selectedMember.dept}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">TENURE</span>
                <span className="text-white font-medium">2026-27</span>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <span className="font-mono-tag text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                // BIO_OVERVIEW
              </span>
              <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                {selectedMember.bio}
              </p>
            </div>

            {/* Footer action */}
            <div className="flex items-center justify-between pt-2 border-t border-[#222222]">
              <span className="font-mono-tag text-[11px] text-slate-400">@code2chill</span>
              <a
                href={selectedMember.link || 'https://instagram.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold font-mono-tag bg-[#00F0FF] text-black hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                CONNECT ON IG &rarr;
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
