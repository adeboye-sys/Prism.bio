"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles({ count = 500, color = "#D4AF37", speed = 0.5 }) {
  const points = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001 * speed;
      points.current.rotation.x += 0.0005 * speed;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeBackground({ theme = "dark-luxury" }) {
  const isNeon = theme === "neon-futuristic";
  const particleColor = isNeon ? "#8b5cf6" : "#D4AF37";
  const particleCount = isNeon ? 800 : 400;
  const speed = isNeon ? 2 : 0.5;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles count={particleCount} color={particleColor} speed={speed} />
        {isNeon && <Particles count={400} color="#3b82f6" speed={1.5} />}
      </Canvas>
    </div>
  );
}
