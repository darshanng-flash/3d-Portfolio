'use client'

import { motion } from 'framer-motion'

export default function AboutContent() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h1 
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      <motion.div 
        className="grid gap-12 lg:grid-cols-[400px_1fr]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="card p-8 hover:rotate-1 transition-all duration-500"
          whileHover={{ scale: 1.05, rotateY: 5 }}
        >
          <div className="overflow-hidden rounded-2xl mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/me.jpg" alt="DARSHAN N G" className="h-96 w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">DARSHAN N G</h2>
            <p className="text-lg text-purple-400 font-medium">
              Software Engineer • 3D Web Designer • Frontend Developer
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="card p-10"
          whileHover={{ scale: 1.02, rotateY: -2 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-purple-300">Hello! Nice to meet you.</h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Software engineering student specializing in React/Next.js, React Three Fiber, and motion design.
            Passionate about building responsive, immersive interfaces and delivering clean, maintainable code.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-2xl font-bold mb-6 text-purple-400">What I Do</h4>
              <ul className="space-y-3 text-lg text-gray-300">
                <li>• 3D experiences with React Three Fiber</li>
                <li>• Smooth animations with Framer Motion</li>
                <li>• Responsive UI with Tailwind CSS</li>
                <li>• AI agent simulations and security</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 text-purple-400">Languages</h4>
              <ul className="space-y-3 text-lg text-gray-300">
                <li>• Python & Java (Advanced)</li>
                <li>• SQL & Database Design</li>
                <li>• C Programming</li>
                <li>• JavaScript & TypeScript</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
