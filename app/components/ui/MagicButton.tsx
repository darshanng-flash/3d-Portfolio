'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  href: string
  children: React.ReactNode
  position?: 'left' | 'right'
  className?: string
}

export default function MagicButton({
  href,
  children,
  position = 'left',
  className = '',
}: Props) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center px-5 py-3 border border-purple text-purple rounded-full hover:bg-purple hover:text-black transition ${position === 'left' ? 'flex-row' : 'flex-row-reverse'} ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.a>
  )
}
