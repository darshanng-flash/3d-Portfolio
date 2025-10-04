'use client'

import Link from 'next/link'
import AnimatedName from './components/AnimatedName' // keep your existing file
// If you have background components, import them here (optional):
// import SpaceCssBackground from './components/SpaceCssBackground'
// import SolarSystemCss from './components/SolarSystemCss'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background layers (optional) */}
      {/* <SpaceCssBackground />
      <SolarSystemCss /> */}

      {/* Centered animated brand (home-only inside AnimatedName) */}
      <AnimatedName />

      {/* Hero content */}
      <section className="relative z-[100] flex flex-col items-center justify-center text-center px-6 pt-36 md:pt-40 pb-16">
        <h1 className="text-[9vw] sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #e9d5ff 0%, #c084fc 30%, #22d3ee 65%, #a5b4fc 100%)',
              filter: 'drop-shadow(0 6px 24px rgba(147,51,234,.25))',
            }}>
          Welcome to my portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Interactive 3D, React Three Fiber, Next.js, animations, and clean UI engineering.
        </p>

        {/* Quick navigation buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/about" className="rounded-lg bg-white/90 text-slate-900 px-4 py-2 font-semibold hover:opacity-90">
            About
          </Link>
          <Link href="/skills" className="rounded-lg bg-white/90 text-slate-900 px-4 py-2 font-semibold hover:opacity-90">
            Skills
          </Link>
          <Link href="/projects" className="rounded-lg bg-white/90 text-slate-900 px-4 py-2 font-semibold hover:opacity-90">
            Projects
          </Link>
          <Link href="/contact" className="rounded-lg bg-white/90 text-slate-900 px-4 py-2 font-semibold hover:opacity-90">
            Contact
          </Link>
        </div>
      </section>
    </main>
  )
}
