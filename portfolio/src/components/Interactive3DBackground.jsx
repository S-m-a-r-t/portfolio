import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Interactive3DBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const linesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouse3DRef = useRef(new THREE.Vector3(0, 0, 0));
  const originalPositionsRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    console.log('3D Background initializing...');

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
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    // Ensure canvas has proper styling
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    console.log('Canvas element added:', renderer.domElement);

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
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Add connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    for (let i = 0; i < particleCount - 1; i += 20) {
      const i3 = i * 3;
      if (i3 + 5 < positions.length) {
        linePositions.push(
          positions[i3], positions[i3 + 1], positions[i3 + 2],
          positions[i3 + 3], positions[i3 + 4], positions[i3 + 5]
        );
      }
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
    linesRef.current = lines;

    // Mouse move handler - attached to document to ensure it always fires
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Get mouse position in 3D space
      const vector = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      mouse3DRef.current = camera.position.clone().add(dir.multiplyScalar(distance));
    };

    // Animation loop
    let frameCount = 0;
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      frameCount++;

      if (particlesRef.current && originalPositionsRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array;
        const originalPositions = originalPositionsRef.current;

        // Update particle positions based on mouse proximity
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          
          // Get original positions
          const originalX = originalPositions[i3];
          const originalY = originalPositions[i3 + 1];
          const originalZ = originalPositions[i3 + 2];

          // Transform to world space considering current rotation
          const worldPos = new THREE.Vector3(originalX, originalY, originalZ);
          worldPos.applyQuaternion(particlesRef.current.quaternion);
          worldPos.add(particlesRef.current.position);

          // Calculate distance from mouse
          const dx = worldPos.x - mouse3DRef.current.x;
          const dy = worldPos.y - mouse3DRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Disperse effect radius
          const effectRadius = 8;
          
          if (distance < effectRadius) {
            // Calculate dispersion strength
            const strength = (1 - distance / effectRadius) * 5;
            
            // Push particles away from mouse
            const angle = Math.atan2(dy, dx);
            const disperseX = Math.cos(angle) * strength;
            const disperseY = Math.sin(angle) * strength;
            const disperseZ = (Math.random() - 0.5) * strength * 0.5;

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

      if (linesRef.current && particlesRef.current) {
        linesRef.current.rotation.copy(particlesRef.current.rotation);
        linesRef.current.scale.copy(particlesRef.current.scale);
      }

      renderer.render(scene, camera);

      // Debug log every 60 frames
      if (frameCount % 60 === 0) {
        console.log('Animation running, rotation:', particlesRef.current?.rotation.y);
      }
    };

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Attach to document instead of window for better event capture
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    
    console.log('Starting animation...');
    animate();

    // Cleanup
    return () => {
      console.log('Cleaning up 3D background...');
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (containerRef.current && renderer.domElement && containerRef.current.contains(renderer.domElement)) {
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
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-950 via-slate-950 to-black">
      <div 
        ref={containerRef} 
        className="w-full h-full pointer-events-none"
        style={{ position: 'relative', overflow: 'hidden' }}
      />
    </div>
  );
}