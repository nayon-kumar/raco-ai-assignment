"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const points = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);

    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    return positions;
  }, []);

  useFrame(({ clock }) => {
    points.current.rotation.y = clock.getElapsedTime() * 0.15;
    points.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial color="#22d3ee" size={0.05} transparent opacity={0.85} />
    </points>
  );
}

function CoreSphere() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.getElapsedTime() * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial color="#06b6d4" wireframe />
      </mesh>
    </Float>
  );
}

export default function DataVisualization() {
  return (
    <div className="h-[520px] w-full rounded-3xl overflow-hidden border border-white/10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1} />

        <pointLight position={[5, 5, 5]} intensity={5} color="#22d3ee" />

        <pointLight position={[-5, -5, -5]} intensity={3} color="#8b5cf6" />

        <Particles />
        <CoreSphere />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}
