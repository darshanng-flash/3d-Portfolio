'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimatedName() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      const hueA = Math.round(240 * x)
      const hueB = Math.round(240 * (1 - x))
      const sat = Math.round(60 + 40 * y)
      document.documentElement.style.setProperty('--brand-hue-a', `${hueA}`)
      document.documentElement.style.setProperty('--brand-hue-b', `${hueB}`)
      document.documentElement.style.setProperty('--brand-sat', `${sat}%`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const showHome = mounted && pathname === '/'
if (!showHome) return null


  const letters = Array.from('DARSHAN N G').map((ch) => (ch === ' ' ? '\u00A0' : ch))

  const container = {
    hidden: { opacity: 0, y: -6 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.05 },
    },
  }
  const child = {
    hidden: { opacity: 0, y: 14, rotateX: 30, filter: 'blur(3px)' },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.45, ease: 'easeOut' },
    },
    hover: { y: -2, scale: 1.04, transition: { duration: 0.15, ease: 'easeOut' } },
  }

  return (
    <div className="fixed inset-x-0 top-10 z-[5000] flex justify-center pointer-events-auto" aria-label="Site brand">
      <Link href="/" prefetch={false}>
        <motion.h1 variants={container} initial="hidden" animate="show" className="flex select-none items-center justify-center gap-1 md:gap-1.5" style={{ lineHeight: 1 }}>
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              variants={child}
              whileHover="hover"
              className="text-[9vw] sm:text-5xl md:text-6xl font-black tracking-wider"
              style={{
                fontFamily: 'Orbitron, monospace',
                backgroundImage:
                  'linear-gradient(90deg, hsl(var(--brand-hue-a, 280) var(--brand-sat, 80%) 70%), hsl(var(--brand-hue-b, 190) var(--brand-sat, 80%) 70%))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 14px rgba(147,51,234,.35))',
                display: 'inline-block',
                whiteSpace: 'pre',
              }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>
      </Link>
    </div>
  )
}
