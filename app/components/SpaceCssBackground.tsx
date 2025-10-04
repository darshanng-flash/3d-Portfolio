'use client'

export default function SpaceCssBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#070b1a]" />

      {/* Nebula gradients */}
      <div className="absolute -left-24 -top-24 h-[60vmax] w-[60vmax] rounded-full opacity-35 blur-[90px]"
           style={{ background: 'radial-gradient(circle at 30% 30%, #6d28d9 0%, transparent 60%)' }} />
      <div className="absolute right-[-15vmax] top-[10vmax] h-[55vmax] w-[55vmax] rounded-full opacity-30 blur-[110px]"
           style={{ background: 'radial-gradient(circle at 70% 40%, #0ea5e9 0%, transparent 60%)' }} />
      <div className="absolute left-[20vmax] bottom-[-10vmax] h-[50vmax] w-[50vmax] rounded-full opacity-25 blur-[100px]"
           style={{ background: 'radial-gradient(circle at 50% 50%, #ef4444 0%, transparent 60%)' }} />

      {/* Starfield layers (parallax) */}
      <div className="stars stars-1" />
      <div className="stars stars-2" />
      <div className="stars stars-3" />

      {/* Soft vignette for contrast */}
      <div className="pointer-events-none absolute inset-0"
           style={{ boxShadow: 'inset 0 0 300px 120px rgba(0,0,0,0.65)' }} />
    </div>
  )
}
