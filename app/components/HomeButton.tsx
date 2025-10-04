'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function HomeButton() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted || pathname === '/') return null

  return (
    <Link
      href="/"
      aria-label="Back to home"
      prefetch={false}
      // Position this near the top-right nav, just to the left of "About"
      className="fixed top-8 right-[-10000] z-[5000] group"
      // right offset assumes your nav starts at right:2rem and each link ~8rem wide; adjust if your spacing differs
    >
      <div
        className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-slate-900
                   shadow-[0_10px_30px_rgba(0,0,0,.35)] ring-1 ring-white/50 backdrop-blur
                   transition-transform duration-200 group-hover:scale-105"
      >
        {/* Home icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 10.5V20h5v-5h4v5h5v-9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-sm font-semibold">Home</span>
      </div>
    </Link>
  )
}
