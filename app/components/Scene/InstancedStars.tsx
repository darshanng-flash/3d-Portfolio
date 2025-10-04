// app/components/Scene/InstancedStars.tsx
"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

export default function InstancedStars({ count = 500 }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  useEffect(() => {
    const temp = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      temp.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      temp.updateMatrix();
      meshRef.current!.setMatrixAt(i, temp.matrix);
    }
    meshRef.current!.instanceMatrix.needsUpdate = true;
  }, [count]);

  return (
    <Canvas camera={{ position: [0, 0, 20] }}>
      <ambientLight intensity={0.5} />
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </instancedMesh>
    </Canvas>
  );
}
