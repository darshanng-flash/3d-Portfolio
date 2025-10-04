'use client'

import { useMemo } from 'react'

const skills = [
  { title: 'React & Next.js', level: 'Advanced', points: ['App Router', 'SSR/ISR', 'Optimized images'] },
  { title: '3D & R3F', level: 'Advanced', points: ['Drei helpers', 'GLTF/DRACO', 'Lighting & Materials'] },
  { title: 'TypeScript', level: 'Advanced', points: ['Generics', 'Strict mode', 'DX & linting'] },
  { title: 'Styling', level: 'Advanced', points: ['Tailwind', 'Responsive', 'Design tokens'] },
  { title: 'Animation', level: 'Intermediate', points: ['Framer Motion', 'Gestures', 'Scroll effects'] },
  { title: 'Backend/DB', level: 'Intermediate', points: ['Node', 'REST', 'MongoDB/SQL basics'] },
  { title: 'Python', level: 'Advanced', points: ['Data structures', 'Async IO', 'Tooling & packaging'] },
  { title: 'Java', level: 'Advanced', points: ['OOP & Collections', 'Streams', 'Build tooling'] },
  { title: 'SQL', level: 'Advanced', points: ['Query optimization', 'Joins & indexing', 'Schema design'] },
]

export default function SkillsPage() {
  const items = useMemo(() => skills, [])

  return (
    <section className="relative z-[3000] px-6 pt-24 md:pt-28">
      {/* Centered heading */}
      <h1
        className="text-center text-[9vw] sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #e9d5ff 0%, #c084fc 30%, #22d3ee 65%, #a5b4fc 100%)',
          filter: 'drop-shadow(0 6px 24px rgba(147,51,234,.25))',
        }}
      >
        Skills & Technologies
      </h1>

      {/* Grid of skill cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((s) => (
          <article key={s.title} className="card p-6">
            <header className="mb-3">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-300">{s.level}</p>
            </header>

            <div className="mt-3 flex flex-wrap gap-2">
              {s.points.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-gray-700 bg-black/40 px-3 py-1 text-xs text-gray-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
