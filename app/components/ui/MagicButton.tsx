'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  href: string
  position?: 'left' | 'right'
  className?: string
  // add these to match Hero usage
  title?: string
  icon?: React.ReactNode
}

export default function MagicButton({
  href,
  position = 'left',
  className = '',
  title,
  icon,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center gap-2 px-5 py-3 border border-purple text-purple rounded-full hover:bg-purple hover:text-black transition ${position === 'left' ? 'flex-row' : 'flex-row-reverse'} ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* When position=right, flex-row-reverse will place icon on the right */}
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {title ? <span>{title}</span> : null}
      {children}
    </motion.a>
  )
}
