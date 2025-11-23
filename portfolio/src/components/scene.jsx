import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import './scene.css';

const AnimatedSphere = () => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();

      // Basic rotation
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;

      // Mouse interaction
      const mouseX = state.mouse.x * 0.5;
      const mouseY = state.mouse.y * 0.5;

      // Smooth interpolation
      meshRef.current.rotation.x += (mouseY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (mouseX - meshRef.current.rotation.y) * 0.05;

      // Position shift
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        mouseX * 2,
        0.1
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        mouseY * 2,
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 100, 200]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#2e0249"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Scene = () => {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full overflow-hidden opacity-60 scene-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} color="#00f2ff" />
        <pointLight position={[-2, -5, -2]} intensity={1} color="#7000ff" />

        <AnimatedSphere />

        <Sparkles
          count={100}
          scale={10}
          size={2}
          speed={0.4}
          opacity={0.5}
          color="#00f2ff"
        />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
