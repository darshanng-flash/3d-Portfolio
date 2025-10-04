// File: app/components/main/Projects.tsx
"use client";

import React, { useState, useMemo, useCallback, useMemo as useMemo2 } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/app/constants";

// Inline fallback to avoid import path problems.
// Later you can move this to app/components/ui/ProjectCard3D.tsx and import it.
function ProjectCard3D({ project }: { project: any }) {
  const color = useMemo2(() => {
    const title = (project?.title || "").toLowerCase();
    if (title.includes("attack") || title.includes("defense") || title.includes("defence")) return "#ef4444";
    if (title.includes("e‑commerce") || title.includes("ecommerce") || title.includes("store")) return "#6366f1";
    return "#334155";
  }, [project]);

  return (
    <mesh>
      <boxGeometry args={[2.2, 1.4, 0.3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

const Projects = React.memo(function Projects() {
  const [selected, setSelected] = useState(0);

  const safeIndex = useMemo(() => {
    if (!Array.isArray(projects) || projects.length === 0) return 0;
    return Math.min(Math.max(selected, 0), projects.length - 1);
  }, [selected]);

  const current = useMemo(() => {
    if (!Array.isArray(projects) || projects.length === 0) return undefined;
    return projects[safeIndex];
  }, [safeIndex]);

  const handleSelect = useCallback((i: number) => setSelected(i), []);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Featured <span className="text-purple">Projects</span>
      </h2>

      <p className="mt-3 text-gray-400">
        A focused selection highlighting a full-stack E-commerce app and an AI-driven Attack & Defense Simulator.
      </p>

      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 space-y-3">
          {projects?.map((p: any, i: number) => (
            <motion.button
              key={p?.id ?? i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition ${
                i === safeIndex ? "border-purple bg-purple/10" : "border-gray-800 hover:bg-gray-900"
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <p className="font-semibold">{p?.title ?? "Project"}</p>
              <p className="text-sm text-gray-400 mt-1 line-clamp-2">{p?.des ?? ""}</p>
              {p?.tags?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t: string) => (
                    <span key={t} className="text-xxs px-2 py-0.5 rounded-full border border-gray-700 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.button>
          ))}
        </div>

        <div className="lg:w-2/3 h-[480px] rounded-xl border border-gray-800 overflow-hidden">
          <Canvas camera={{ position: [0, 0, 4.2] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[6, 6, 6]} intensity={1.1} />
            <AnimatePresence mode="wait">
              {current ? <ProjectCard3D key={current?.id ?? safeIndex} project={current} /> : null}
            </AnimatePresence>
          </Canvas>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-gray-800 p-5 bg-black-100">
        <h3 className="text-xl font-semibold">{current?.title ?? "Project"}</h3>
        <p className="text-gray-400 mt-2">{current?.des ?? ""}</p>
        {current?.highlights?.length ? (
          <ul className="list-disc ml-5 mt-3 text-gray-300">
            {current.highlights.map((h: string, idx: number) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        ) : null}
        {current?.url ? (
          <a className="inline-block mt-4 text-purple underline" href={current.url} target="_blank" rel="noreferrer">
            Visit project
          </a>
        ) : null}
      </div>
    </section>
  );
});

export default Projects;
