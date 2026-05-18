"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function GeometricShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const shapes = useMemo(() => {
    return [
      { position: [-3, 2, -2] as [number, number, number], type: "box", scale: 0.5 },
      { position: [3, -1, -3] as [number, number, number], type: "octahedron", scale: 0.4 },
      { position: [-2, -2, -1] as [number, number, number], type: "tetrahedron", scale: 0.6 },
      { position: [2, 2, -2] as [number, number, number], type: "dodecahedron", scale: 0.3 },
      { position: [0, -3, -4] as [number, number, number], type: "icosahedron", scale: 0.5 },
    ];
  }, []);

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={shape.position} scale={shape.scale}>
            {shape.type === "box" && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === "octahedron" && <octahedronGeometry args={[1]} />}
            {shape.type === "tetrahedron" && <tetrahedronGeometry args={[1]} />}
            {shape.type === "dodecahedron" && <dodecahedronGeometry args={[1]} />}
            {shape.type === "icosahedron" && <icosahedronGeometry args={[1]} />}
            <meshStandardMaterial
              color="#22d3ee"
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          metalness={0.1}
          roughness={0}
          color="#22d3ee"
        />
      </mesh>
    </Float>
  );
}

function AnimatedCode() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      <Center>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.3}
          height={0.05}
          curveSegments={12}
        >
          {"<Developer />"}
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.2} />
        </Text3D>
      </Center>
    </group>
  );
}

export default function AboutScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0a0a0b"]} />
        <fog attach="fog" args={["#0a0a0b", 5, 20]} />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, -5]} color="#22d3ee" intensity={0.5} />
        
        <GlassSphere />
        <GeometricShapes />
        <AnimatedCode />
      </Canvas>
    </div>
  );
}
