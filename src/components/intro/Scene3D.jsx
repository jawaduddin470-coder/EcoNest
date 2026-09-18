import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { buildPlantSystem } from './plantGrowth';
import { isReducedMotionPreferred } from '../../utils/accessibility';

export default function Scene3D({ currentStage, isEntering, onReady }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const plantSystemRef = useRef(null);
  const animFrameIdRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isDestroyedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    isDestroyedRef.current = false;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0a2216, 0.08);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 3.0);
    camera.lookAt(0, 0.3, 0);
    cameraRef.current = camera;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch (e) {
      console.warn("WebGL initialization error:", e);
      if (onReady) onReady(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // --- Lighting Setup ---
    const ambientLight = new THREE.AmbientLight(0xd4edd0, 0.95);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffae6, 2.5);
    sunLight.position.set(3, 5, 4);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x78b978, 1.5);
    rimLight.position.set(-3, 2, -2);
    scene.add(rimLight);

    // --- Procedural Plant Hierarchy ---
    const plant = buildPlantSystem();
    plantSystemRef.current = plant;
    scene.add(plant.rootGroup);

    if (onReady) onReady(true);

    // --- Mouse Parallax Tracker ---
    const handleMouseMove = (e) => {
      mousePosRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2
      };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // --- Render Loop & Organic Dynamics ---
    const clock = new THREE.Clock();
    const reducedMotion = isReducedMotionPreferred();

    const animate = () => {
      if (isDestroyedRef.current) return;
      animFrameIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Parallax response to mouse
      if (!reducedMotion && cameraRef.current) {
        const targetCamX = (mousePosRef.current.x * 0.35);
        const targetCamY = (mousePosRef.current.y * 0.25);
        camera.position.x += (targetCamX - camera.position.x) * 0.05;
      }

      // Natural botanical respiration
      if (!reducedMotion && plant.rootGroup) {
        plant.rootGroup.rotation.y = Math.sin(elapsedTime * 0.45) * 0.05;
        
        plant.leaves.forEach((l, idx) => {
          if (l.pivot.scale.y > 0.1) {
            l.mesh.rotation.z = Math.sin(elapsedTime * 2.0 + idx * 0.8) * 0.035;
          }
        });

        // Drift Spores
        if (plant.particles && plant.particlePositions) {
          const positions = plant.particles.geometry.attributes.position.array;
          const speeds = plant.particleSpeeds;
          const count = positions.length / 3;

          for (let i = 0; i < count; i++) {
            positions[i * 3 + 1] += speeds[i * 3 + 1];
            positions[i * 3] += Math.sin(elapsedTime * 1.2 + i) * 0.001;
            positions[i * 3 + 2] += Math.cos(elapsedTime * 1.2 + i) * 0.001;

            if (positions[i * 3 + 1] > 4.8) {
              positions[i * 3 + 1] = -0.4;
            }
          }
          plant.particles.geometry.attributes.position.needsUpdate = true;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isDestroyedRef.current = true;
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  // --- Dynamic, Continuous Overlapping Choreography ---
  useEffect(() => {
    const plant = plantSystemRef.current;
    const camera = cameraRef.current;
    if (!plant || !camera) return;

    const reducedMotion = isReducedMotionPreferred();
    const duration = reducedMotion ? 0.15 : 0.85;

    if (currentStage === 1) {
      // Stage 1: Seed emerges
      gsap.to(plant.seedMesh.scale, {
        x: 1, y: 1, z: 1,
        duration: duration * 0.8,
        ease: "power2.out"
      });
      gsap.to(plant.glowLight, { intensity: 0.9, duration: duration * 0.8 });
      gsap.to(camera.position, { y: 0.4, z: 2.8, duration: duration * 0.8, ease: "power2.inOut" });
    }

    if (currentStage === 2) {
      // Stage 2: Germination & root expansion
      gsap.to(plant.glowLight, { intensity: 2.2, duration: duration * 0.9 });
      gsap.to(plant.rootGroupTendrils.scale, { x: 1, y: 1, z: 1, duration: duration * 0.9, ease: "power2.out" });
      gsap.to(plant.seedMesh.position, { y: 0.26, duration: duration * 0.9, ease: "power1.inOut" });
      gsap.to(camera.position, { y: 0.65, z: 2.6, duration: duration * 0.9, ease: "power2.inOut" });
    }

    if (currentStage === 3) {
      // Stage 3: Stem ascends swiftly
      gsap.to(plant.stemMesh.scale, {
        y: 1,
        duration: duration * 1.05,
        ease: "power2.out"
      });
      gsap.to(plant.apexLight.position, {
        y: 3.2,
        duration: duration * 1.05,
        ease: "power2.out"
      });
      gsap.to(plant.apexLight, {
        intensity: 1.4,
        duration: duration * 0.8
      });
      gsap.to(camera.position, {
        y: 1.8,
        z: 3.8,
        duration: duration * 1.05,
        ease: "power2.inOut"
      });
    }

    if (currentStage === 4) {
      // Stage 4: Leaves unfold in cascade
      plant.leaves.forEach((l) => {
        gsap.to(l.pivot.scale, {
          x: l.targetScale,
          y: l.targetScale,
          z: l.targetScale,
          duration: duration * 0.9,
          delay: l.delay * 0.45,
          ease: "back.out(1.3)"
        });
      });
      gsap.to(camera.position, {
        y: 2.0,
        z: 4.3,
        duration: duration * 1.1,
        ease: "power2.inOut"
      });
    }

    if (currentStage === 5) {
      // Stage 5: Spore ecosystem awakens
      gsap.to(plant.particles.material, {
        opacity: 0.9,
        duration: duration * 0.8,
        ease: "power1.inOut"
      });
      if (sceneRef.current && sceneRef.current.fog) {
        gsap.to(sceneRef.current.fog, {
          density: 0.05,
          duration: duration * 1.2
        });
      }
      gsap.to(camera.position, {
        y: 1.8,
        z: 4.9,
        duration: duration * 1.1,
        ease: "power2.out"
      });
    }

    if (currentStage === 6) {
      // Stage 6: Camera frames the grown plant for brand reveal
      gsap.to(camera.position, {
        y: 1.65,
        z: 4.6,
        duration: duration * 0.9,
        ease: "power2.inOut"
      });
    }
  }, [currentStage]);

  // Accelerated Fly-through when Entering Experience
  useEffect(() => {
    if (!isEntering) return;
    const camera = cameraRef.current;
    if (!camera) return;

    gsap.to(camera.position, {
      z: 0.6,
      y: 1.9,
      duration: 0.85,
      ease: "power3.inOut"
    });
  }, [isEntering]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
