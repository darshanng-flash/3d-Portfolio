// File: app/components/main/Hero.tsx
"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import MagicButton from "@/app/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const AnimatedSphere = () => (
  <Sphere visible args={[1, 100, 200]} scale={2}>
    <MeshDistortMaterial color="#8352FD" distort={0.5} speed={1.5} />
  </Sphere>
);

const Hero = () => (
  <div id="hero" className="pb-20 pt-36 relative">
    <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
        <div className="h-[400px] w-full mb-8 rounded-xl border border-gray-800 overflow-hidden">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>

        <motion.p
          className="uppercase tracking-widest text-xs text-blue-100 max-w-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dynamic Web Magic with Next.js
        </motion.p>

        <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight">
          Transforming Concepts into Seamless User Experiences
        </h1>

        <motion.p
          className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi! I’m <span className="text-purple">Darshan N G</span>, a Software Engineer and Tech Enthusiast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" href="#projects" />
        </motion.div>
      </div>
    </div>
  </div>
);

export default Hero;
