"use client";
import { useMemo } from "react";

export default function ProjectCard3D({ project }: { project: any }) {
  const color = useMemo(() => {
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
