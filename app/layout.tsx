import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// App UI components
import Link from 'next/link'
import AnimatedName from './components/AnimatedName'
import SpaceCssBackground from './components/SpaceCssBackground'
import SparkleCursor from './components/SparkleCursor'
import SolarSystemCss from './components/SolarSystemCss'
import HomeButton from './components/HomeButton'
import TopNav from './components/TopNav'

// Load Inter (Google) to avoid unknown font build errors
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DARSHAN N G | 3D Portfolio',
  description: 'Interactive 3D Portfolio with Solar System Background',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Orbitron for headings (CDN) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Basic meta for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={inter.className}>
        {/* Global backgrounds/effects */}
        <SpaceCssBackground />
        <SolarSystemCss />
        <SparkleCursor />

        {/* Brand and navigation */}
        <AnimatedName />
        <TopNav />
        <HomeButton />

        {/* Main content */}
        <main className="relative z-[100]">{children}</main>
      </body>
    </html>
  )
}
