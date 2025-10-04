'use client'

import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type ScrollRevealProps = {
  children: React.ReactNode
  threshold?: number
}

export default function ScrollReveal({
  children,
  threshold = 0.2,
}: ScrollRevealProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } })
          } else {
            controls.start({ opacity: 0, y: 16 })
          }
        })
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [controls, threshold])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={controls}>
      {children}
    </motion.div>
  )
}
