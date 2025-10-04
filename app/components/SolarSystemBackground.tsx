'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function Sun() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.2 })
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#FFD700" />
      <pointLight intensity={2} distance={50} />
    </mesh>
  )
}

function Planet({ distance, speed, color, size }: { distance: number; speed: number; color: string; size: number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed
      ref.current.position.x = Math.cos(t) * distance
      ref.current.position.z = Math.sin(t) * distance
    }
  })
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  )
}

function Starfield() {
  const ref = useRef<THREE.Points>(null)
  const positions = new Float32Array(3000)
  for (let i = 0; i < 1000; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 200
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200
  }
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={1000} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="white" size={1} />
    </points>
  )
}

export default function SolarSystemBackground() {
  return (
    <div className="fixed inset-0" style={{ zIndex: -10 }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#000814']} />
        <ambientLight intensity={0.1} />
        
        <Starfield />
        <Sun />
        <Planet distance={4} speed={0.8} color="#00BFFF" size={0.3} />
        <Planet distance={6} speed={0.6} color="#FF6347" size={0.4} />
        <Planet distance={8} speed={0.4} color="#32CD32" size={0.5} />
        <Planet distance={10} speed={0.3} color="#FF69B4" size={0.35} />
      </Canvas>
    </div>
  )
}
