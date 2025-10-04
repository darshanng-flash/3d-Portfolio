import Image from 'next/image'

export const metadata = { title: 'Projects | DARSHAN N G' }

type Project = {
  name: string
  desc: string
  stack: string[]
  link: string
  banner: string
}

const projects: Project[] = [
  {
    name: 'Interactive 3D Portfolio',
    desc: 'React Three Fiber + Next.js 14 with animated 3D scenes, orbit controls, and responsive UI design.',
    stack: ['Next.js', 'R3F', 'Drei', 'Tailwind', 'Framer Motion'],
    link: '#',
    banner: '/projects/p1.jpg',
  },
  {
    name: 'AI Attack/Defense Sandbox',
    desc: 'Multi-agent simulation platform for adversarial scenarios with modular bot systems and real-time monitoring.',
    stack: ['Node.js', 'Python', 'React', 'MongoDB'],
    link: '#',
    banner: '/projects/p2.jpg',
  },
  {
    name: 'E-Commerce Website',
    desc: 'Fully functional e-commerce platform built with PHP, MySQL, HTML, CSS (Tailwind), and JavaScript.',
    stack: ['PHP', 'MySQL', 'HTML', 'Tailwind CSS', 'JavaScript'],
    link: '#',
    banner: '/projects/p3.jpg',
  },
]

export default function ProjectsPage() {
  return (
    <section className="relative z-[3000] space-y-8 px-6 pt-24 md:pt-28">
      {/* Centered heading with gradient */}
      <h1
        className="text-center text-[9vw] sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #e9d5ff 0%, #c084fc 30%, #22d3ee 65%, #a5b4fc 100%)',
          filter: 'drop-shadow(0 6px 24px rgba(147,51,234,.25))',
        }}
      >
        Featured Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((p) => (
          <article key={p.name} className="card overflow-hidden">
            {/* Banner image */}
            <div className="relative h-48 w-full">
              <Image
                src={p.banner}
                alt={`${p.name} banner`}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-700 bg-black/40 px-3 py-1 text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="inline-block rounded-lg bg-purple px-4 py-2 text-black font-semibold hover:opacity-90"
              >
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
