"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";

function Cloud() {
  const group = useRef<THREE.Group>(null!);
  const timer = useMemo(() => new THREE.Timer(), []);
  
  useFrame((state) => {
    // Standardizing on THREE.Timer to avoid Clock deprecation warnings
    timer.update();
    const time = timer.getElapsed();

    group.current.rotation.y = time * 0.1;
    group.current.rotation.x = time * 0.05;
  });

  return (
    <group ref={group}>
      {[...Array(12)].map((_, i) => (
        <Float speed={2} rotationIntensity={2} floatIntensity={2} key={i}>
          <mesh 
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10
            ]}
          >
            <icosahedronGeometry args={[1, 1]} />
            <meshPhongMaterial 
              color="#008080" 
              wireframe 
              transparent 
              opacity={0.15} 
              shininess={100}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-obsidian pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Cloud />
        <mesh position={[0,0,-2]} scale={15}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
                color="#008080"
                attach="material"
                distort={0.4}
                speed={2}
                transparent
                opacity={0.05}
            />
        </mesh>
      </Canvas>
    </div>
  );
}
