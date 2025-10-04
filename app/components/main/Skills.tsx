// File: app/components/main/Skills.tsx
"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { skillsData } from "@/app/constants";

function SkillBox({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={position}>
        <boxGeometry args={[1.1, 0.6, 0.2]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </Float>
  );
}

const Skills = () => {
  const positions: [number, number, number][] = [
    [-2, 1.2, 0],
    [0, 1.2, 0],
    [2, 1.2, 0],
    [-2, 0, 0],
    [0, 0, 0],
    [2, 0, 0],
    [-2, -1.2, 0],
    [0, -1.2, 0],
    [2, -1.2, 0],
  ];
  const items = Array.isArray(skillsData) ? skillsData.slice(0, positions.length) : [];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Core <span className="text-purple">Skills</span>
      </h2>
      <p className="mt-3 text-gray-400">
        React, Java, Python, SQL, MongoDB, IoT, DevOps, Tableau, Power BI, C Programming.
      </p>

      <div className="mt-8 h-[420px] rounded-xl border border-gray-800 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.1} />
          {items.map((_, i) => (
            <SkillBox key={i} position={positions[i]} />
          ))}
        </Canvas>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {skillsData.map((s) => (
          <motion.span
            key={s}
            className="text-xs md:text-sm px-3 py-1 rounded-full border border-gray-800 text-gray-300"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
