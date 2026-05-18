"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function TechCube({ position, delay }: { position: [number, number, number]; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 + delay;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + delay;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={0.4}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          metalness={0.8}
          roughness={0.2}
          emissive="#0891b2"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function DNA() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 20;

  const points = useMemo(() => {
    const pts: { pos1: [number, number, number]; pos2: [number, number, number] }[] = [];
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const y = (t - 0.5) * 8;
      const angle = t * Math.PI * 4;
      pts.push({
        pos1: [Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5],
        pos2: [Math.cos(angle + Math.PI) * 1.5, y, Math.sin(angle + Math.PI) * 1.5],
      });
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {points.map((point, i) => (
        <group key={i}>
          <mesh position={point.pos1}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#22d3ee"
              emissiveIntensity={0.5}
            />
          </mesh>
          <mesh position={point.pos2}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#0891b2"
              emissive="#0891b2"
              emissiveIntensity={0.5}
            />
          </mesh>
          {i % 2 === 0 && (
            <mesh
              position={[
                (point.pos1[0] + point.pos2[0]) / 2,
                (point.pos1[1] + point.pos2[1]) / 2,
                (point.pos1[2] + point.pos2[2]) / 2,
              ]}
              rotation={[0, 0, Math.atan2(point.pos2[1] - point.pos1[1], point.pos2[0] - point.pos1[0])]}
            >
              <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
              <meshStandardMaterial
                color="#22d3ee"
                transparent
                opacity={0.3}
              />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

function CentralCore() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron args={[0.8, 2]} scale={1}>
        <MeshDistortMaterial
          color="#22d3ee"
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={1}
        />
      </Icosahedron>
    </Float>
  );
}

export default function SkillsScene() {
  const cubePositions: [number, number, number][] = [
    [-4, 2, -2],
    [4, -2, -2],
    [-3, -3, -1],
    [3, 3, -1],
    [-4, -1, -3],
    [4, 1, -3],
  ];

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0a0a0b"]} />
        <fog attach="fog" args={["#0a0a0b", 8, 25]} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} color="#22d3ee" intensity={0.8} />
        <pointLight position={[10, -10, 5]} color="#0891b2" intensity={0.5} />
        
        <DNA />
        <CentralCore />
        {cubePositions.map((pos, i) => (
          <TechCube key={i} position={pos} delay={i * 0.5} />
        ))}
      </Canvas>
    </div>
  );
}
