'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({
  href,
  children,
}: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      prefetch={false}
      aria-current={active ? 'page' : undefined}
      className={[
        'inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
        active ? 'text-purple-300' : 'text-white/90 hover:text-purple-300',
      ].join(' ')}
    >
      {children}
    </Link>
  )
}

export default function TopNav() {
  return (
    <header className="fixed top-8 right-8 z-[5000]">
      <nav className="flex items-center gap-4 text-lg font-medium">
        {/* Home BEFORE About */}
        <NavLink href="/">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 10.5V20h5v-5h4v5h5v-9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="hidden sm:inline">Home</span>
        </NavLink>
         <Link href="/about" className="hover:text-purple-400 transition-colors">About</Link>
            <Link href="/skills" className="hover:text-purple-400 transition-colors">Skills</Link>
            <Link href="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>

       
      </nav>
    </header>
  )
}
