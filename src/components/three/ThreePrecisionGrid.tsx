'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Segments, Segment, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GridSystem({ count = 20 }) {
  const group = useRef<THREE.Group>(null!)
  
  // Create a grid of lines and particles
  const lines = useMemo(() => {
    const l = []
    for (let i = -count; i <= count; i += 2) {
      l.push(
        { start: [i, -count, 0] as [number, number, number], end: [i, count, 0] as [number, number, number] },
        { start: [-count, i, 0] as [number, number, number], end: [count, i, 0] as [number, number, number] }
      )
    }
    return l
  }, [count])

  const particles = useMemo(() => {
    const pos = new Float32Array((count + 1) * (count + 1) * 3)
    let idx = 0
    for (let i = -count; i <= count; i += 2) {
      for (let j = -count; j <= count; j += 2) {
        if (idx < pos.length / 3) {
          pos[idx * 3] = i
          pos[idx * 3 + 1] = j
          pos[idx * 3 + 2] = Math.sin(i * j) * 0.5
          idx++
        }
      }
    }
    return pos
  }, [count])

  const timer = useMemo(() => new THREE.Timer(), [])

  useFrame(() => {
    timer.update()
    const time = timer.getElapsed()
    group.current.rotation.z = Math.sin(time * 0.1) * 0.1
    group.current.position.y = Math.cos(time * 0.2) * 0.2
  })

  return (
    <group ref={group}>
      <Segments limit={lines.length} lineWidth={0.5}>
        {lines.map((line, i) => (
          <Segment 
            key={i} 
            start={new THREE.Vector3(...line.start)} 
            end={new THREE.Vector3(...line.end)} 
            color="#2E8B57" 
          />
        ))}
      </Segments>
      <Points positions={particles} stride={3}>
        <PointMaterial 
          transparent 
          color="#D4AF37" 
          size={0.1} 
          sizeAttenuation={true} 
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.4}
        />
      </Points>
    </group>
  )
}

export default function ThreePrecisionGrid() {
  return (
    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <GridSystem />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#008080" />
      </Canvas>
    </div>
  )
}
