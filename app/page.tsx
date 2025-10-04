'use client'

import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mb-16"
      >
        <motion.p 
          className="text-2xl md:text-3xl text-purple-300 mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Glad to see you here!
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Crafting{' '}
          <span style={{
            background: 'linear-gradient(45deg, #a855f7, #ec4899, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Immersive
          </span>
          <br />
          3D Web Experiences
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          
        </motion.p>
        
        <motion.div 
          className="flex gap-6 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a 
            href="/projects" 
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
              color: 'white'
            }}
          >
            View My Projects
          </a>
          <a 
            href="/skills" 
            className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
          >
            My Skills
          </a>
        </motion.div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {[
          { icon: "🎨", title: "3D Design", desc: "Beautiful 3D animations powered by Three.js and React Three Fiber." },
          { icon: "⚡", title: "Performance", desc: "Optimized for speed with Next.js 14 and modern React patterns." },
          { icon: "📱", title: "Responsive", desc: "Perfect experience across all devices with adaptive layouts." }
        ].map((card, i) => (
          <motion.div
            key={i}
            className="card p-8 cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              rotateX: 5
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + i * 0.1, duration: 0.5 }}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
            <p className="text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
