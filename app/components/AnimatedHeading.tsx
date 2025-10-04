'use client'

import { motion } from 'framer-motion'

export default function AnimatedHeading({
  text,
  className = '',
}: { text: string; className?: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={[
        'pointer-events-auto',
        'font-extrabold leading-tight',
        'bg-clip-text text-transparent',
        'drop-shadow-[0_6px_24px_rgba(147,51,234,.25)]',
        'break-words',
        'max-w-[92vw] sm:max-w-[85vw] md:max-w-5xl', // prevent overflow/overlap
        'pr-[120px]', // leave space from left logo area
        className,
      ].join(' ')}
      style={{
        backgroundImage:
          'linear-gradient(90deg, #e9d5ff 0%, #c084fc 30%, #22d3ee 65%, #a5b4fc 100%)',
      }}
    >
      {text}
    </motion.h1>
  )
}
