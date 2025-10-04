'use client'

import { useEffect } from 'react'

export default function SparkleCursor() {
  useEffect(() => {
    const update = (e: MouseEvent) => {
      const x = `${e.clientX}px`
      const y = `${e.clientY}px`
      document.documentElement.style.setProperty('--mouse-x', x)
      document.documentElement.style.setProperty('--mouse-y', y)
    }
    window.addEventListener('mousemove', update, { passive: true })
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 999,
        mixBlendMode: 'screen',
        background:
          'radial-gradient(10px 10px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,.25), transparent 60%), ' +
          'radial-gradient(28px 28px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,.18), transparent 65%), ' +
          'radial-gradient(60px 60px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(14,165,233,.12), transparent 70%)'
      }}
    />
  )
}
