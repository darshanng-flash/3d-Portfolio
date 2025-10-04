'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function MovingStars() {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02
      ref.current.rotation.x += delta * 0.01
    }
  })
  return (
    <group ref={ref}>
      <Stars radius={120} depth={80} count={6000} factor={5} saturation={0} fade speed={2} />
    </group>
  )
}

function FloatingAsteroids() {
  const asteroids = useMemo(() => {
    const temp = []
    for (let i = 0; i < 8; i++) {
      temp.push({
        position: [(Math.random()-0.5)*40,(Math.random()-0.5)*40,(Math.random()-0.5)*40],
        speed: Math.random()*0.02+0.005,
        scale: Math.random()*0.8+0.2
      })
    }
    return temp
  }, [])

  return (
    <>
      {asteroids.map((a, i) => (
        <FloatingAsteroid key={i} {...a} />
      ))}
    </>
  )
}

function FloatingAsteroid({ position, speed, scale }: any) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += speed
      ref.current.rotation.y += speed * 0.5
      ref.current.position.y += Math.sin(state.clock.elapsedTime * speed * 10) * 0.01
    }
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <dodecahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial color="#4c1d95" emissive="#312e81" emissiveIntensity={0.2} roughness={0.7} />
    </mesh>
  )
}

export default function FullSpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} intensity={0.3} />
        <MovingStars />
        <FloatingAsteroids />
      </Canvas>
    </div>
  )
}
