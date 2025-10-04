'use client'

import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function Planet() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.08 })
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.6, 3]} />
        <meshStandardMaterial
          color="#6b5cff"
          roughness={0.3}
          metalness={0.6}
          emissive="#3b2bff"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

function Ring() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, d) => { if (ref.current) ref.current.rotation.z += d * 0.25 })
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.3, 0, 0]}>
      <torusGeometry args={[2.6, 0.05, 16, 200]} />
      <meshStandardMaterial color="#a08bff" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

function Ship() {
  const ref = useRef<THREE.Group>(null)
  const path = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-6, 1.2, 2),
          new THREE.Vector3(-2, 0.4, -0.5),
          new THREE.Vector3(0, 0.6, 0.8),
          new THREE.Vector3(2.5, 1.0, -0.3),
          new THREE.Vector3(6, 1.6, 2.5),
        ],
        false,
        'catmullrom',
        0.2
      ),
    []
  )
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * 0.08) % 1
    const pos = path.getPointAt(t)
    const next = path.getPointAt((t + 0.01) % 1)
    if (ref.current && pos && next) {
      ref.current.position.copy(pos)
      ref.current.lookAt(next)
    }
  })
  return (
    <group ref={ref} scale={0.55}>
      <mesh>
        <coneGeometry args={[0.25, 0.9, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.45, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#71e6ff" emissive="#71e6ff" emissiveIntensity={0.6} />
      </mesh>
    </group>
  )
}

export default function SpaceScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      {/* Background and lights */}
      <color attach="background" args={['#03030a']} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 4, 4]} intensity={1} />

      {/* Stars and entities */}
      <Stars radius={100} depth={60} count={4000} factor={4} saturation={0} fade speed={1} />
      <Planet />
      <Ring />
      <Ship />

      {/* Environment and controls */}
      <Environment preset="night" />
      <OrbitControls enablePan={false} minDistance={6} maxDistance={14} />
    </Canvas>
  )
}
