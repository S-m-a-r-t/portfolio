import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Interactive3DBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouse3DRef = useRef(new THREE.Vector3());
  const originalPositionsRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create geometric structure with particles
    const geometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Create a torus knot structure
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 15;
      const tube = 3;
      const p = (i / particleCount) * Math.PI * 2;
      const q = (i / particleCount) * Math.PI * 4;

      const x = (radius + tube * Math.cos(q)) * Math.cos(p) + (Math.random() - 0.5) * 2;
      const y = (radius + tube * Math.cos(q)) * Math.sin(p) + (Math.random() - 0.5) * 2;
      const z = tube * Math.sin(q) + (Math.random() - 0.5) * 2;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      // Purple to blue gradient colors
      const color = new THREE.Color();
      color.setHSL(0.7 - i / particleCount * 0.2, 0.8, 0.6);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    originalPositionsRef.current = originalPositions;

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Add connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    for (let i = 0; i < particleCount - 1; i += 20) {
      const i3 = i * 3;
      linePositions.push(
        positions[i3], positions[i3 + 1], positions[i3 + 2],
        positions[i3 + 3], positions[i3 + 4], positions[i3 + 5]
      );
    }
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 2;

    // Mouse move handler
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update raycaster
      raycaster.setFromCamera(mouseRef.current, camera);

      // Get mouse position in 3D space
      const vector = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      mouse3DRef.current = camera.position.clone().add(dir.multiplyScalar(distance));
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesRef.current && originalPositionsRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array;
        const originalPositions = originalPositionsRef.current;

        // Update particle positions based on mouse proximity
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          
          // Get original and current positions
          const originalX = originalPositions[i3];
          const originalY = originalPositions[i3 + 1];
          const originalZ = originalPositions[i3 + 2];

          // Transform original position to world space
          const worldPos = new THREE.Vector3(originalX, originalY, originalZ);
          worldPos.applyMatrix4(particlesRef.current.matrixWorld);

          // Calculate distance from mouse
          const dx = worldPos.x - mouse3DRef.current.x;
          const dy = worldPos.y - mouse3DRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Disperse effect radius
          const effectRadius = 8;
          
          if (distance < effectRadius) {
            // Calculate dispersion strength (stronger when closer)
            const strength = (1 - distance / effectRadius) * 5;
            
            // Push particles away from mouse
            const angle = Math.atan2(dy, dx);
            const disperseX = Math.cos(angle) * strength;
            const disperseY = Math.sin(angle) * strength;
            const disperseZ = (Math.random() - 0.5) * strength;

            positions[i3] = originalX + disperseX;
            positions[i3 + 1] = originalY + disperseY;
            positions[i3 + 2] = originalZ + disperseZ;
          } else {
            // Smoothly return to original position
            positions[i3] += (originalX - positions[i3]) * 0.1;
            positions[i3 + 1] += (originalY - positions[i3 + 1]) * 0.1;
            positions[i3 + 2] += (originalZ - positions[i3 + 2]) * 0.1;
          }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;

        // Auto rotation
        particlesRef.current.rotation.y += 0.001;
        particlesRef.current.rotation.z += 0.0005;

        // Pulse effect
        const time = Date.now() * 0.001;
        const scale = 1 + Math.sin(time) * 0.05;
        particlesRef.current.scale.setScalar(scale);
      }

      if (lines) {
        lines.rotation.y = particlesRef.current.rotation.y;
        lines.rotation.z = particlesRef.current.rotation.z;
        lines.scale.copy(particlesRef.current.scale);
      }

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black -z-9">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}