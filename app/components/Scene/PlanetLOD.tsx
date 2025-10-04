// app/components/Scene/PlanetLOD.tsx
"use client";
import { Detailed } from "@react-three/drei";

export default function PlanetLOD() {
  return (
    <Detailed distances={[0, 10, 20]}>
      {/* High detail */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#8352FD" />
      </mesh>
      {/* Medium detail */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#8352FD" />
      </mesh>
      {/* Low detail */}
      <mesh>
        <sphereGeometry args={[2, 16, 16]} />
        <meshStandardMaterial color="#8352FD" />
      </mesh>
    </Detailed>
  );
}
