import * as THREE from 'three';

/**
 * Creates an organic leaf geometry with natural curved curvature and central vein crease
 */
export function createLeafGeometry() {
  const shape = new THREE.Shape();
  // Sculpt a graceful botanical leaf profile
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.28, 0.2, 0.48, 0.75, 0.0, 1.45); // Right contour to apex
  shape.bezierCurveTo(-0.48, 0.75, -0.28, 0.2, 0, 0);    // Left contour back to base

  const extrudeSettings = {
    steps: 2,
    depth: 0.015,
    bevelEnabled: true,
    bevelThickness: 0.01,
    bevelSize: 0.015,
    bevelSegments: 3
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();
  
  // Arch the leaf along its longitudinal vein for realistic organic contour
  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const x = pos.getX(i);
    // Parabolic camber: center rib is lifted, lamina slopes downwards
    const zOffset = -Math.pow(x * 1.7, 2) * 0.18 + (Math.sin(y * 1.4) * 0.09);
    pos.setZ(i, pos.getZ(i) + zOffset);
  }
  pos.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * Creates soft spore particle texture for WebGL particles
 */
export function createParticleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.25, 'rgba(185, 221, 179, 0.9)');
  gradient.addColorStop(0.65, 'rgba(120, 185, 120, 0.35)');
  gradient.addColorStop(1, 'rgba(61, 139, 87, 0)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Builds the complete 3D plant hierarchy
 */
export function buildPlantSystem() {
  const rootGroup = new THREE.Group();
  rootGroup.name = "plantSystem";

  // 1. SOIL MOUND (Organic Base)
  const soilGeo = new THREE.CylinderGeometry(0.8, 1.4, 0.15, 32);
  const soilMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#0D2A1C'),
    roughness: 0.9,
    metalness: 0.05
  });
  const soilMesh = new THREE.Mesh(soilGeo, soilMat);
  soilMesh.position.set(0, -0.05, 0);
  rootGroup.add(soilMesh);

  // Soft root tendrils branching out
  const rootGroupTendrils = new THREE.Group();
  for (let r = 0; r < 5; r++) {
    const angle = (r / 5) * Math.PI * 2;
    const rootCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.1, 0),
      new THREE.Vector3(Math.cos(angle) * 0.4, 0.02, Math.sin(angle) * 0.4),
      new THREE.Vector3(Math.cos(angle + 0.3) * 0.9, -0.04, Math.sin(angle + 0.3) * 0.9)
    ]);
    const rootGeo = new THREE.TubeGeometry(rootCurve, 20, 0.02, 6, false);
    const rootMat = new THREE.MeshStandardMaterial({ color: 0x1a452d, roughness: 0.8 });
    const rootMesh = new THREE.Mesh(rootGeo, rootMat);
    rootGroupTendrils.add(rootMesh);
  }
  rootGroupTendrils.scale.set(0.001, 0.001, 0.001);
  rootGroup.add(rootGroupTendrils);

  // 2. SEED (Organic Cotyledon Halves)
  const seedGeometry = new THREE.SphereGeometry(0.22, 32, 24);
  seedGeometry.scale(0.85, 1.25, 0.75); // ovoid organic seed
  
  const seedMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#2A5D3E'),
    roughness: 0.45,
    metalness: 0.12,
  });

  const seedMesh = new THREE.Mesh(seedGeometry, seedMaterial);
  seedMesh.position.set(0, 0.22, 0);
  rootGroup.add(seedMesh);

  // Bioluminescent core inside the seed
  const glowLight = new THREE.PointLight(0x78B978, 0.6, 5);
  glowLight.position.set(0, 0.22, 0);
  rootGroup.add(glowLight);

  // Apex light that follows the growing stem tip
  const apexLight = new THREE.PointLight(0xB9DDB3, 0.2, 3.5);
  apexLight.position.set(0, 0.25, 0);
  rootGroup.add(apexLight);

  // 3. STEM
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.15, 0),
    new THREE.Vector3(0.07, 0.8, 0.03),
    new THREE.Vector3(-0.08, 1.6, -0.04),
    new THREE.Vector3(0.06, 2.4, 0.05),
    new THREE.Vector3(0.0, 3.3, 0.0)
  ]);

  const stemGeometry = new THREE.TubeGeometry(curve, 64, 0.065, 12, false);
  const stemMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#3D8B57'),
    roughness: 0.32,
    metalness: 0.06,
  });
  
  const stemMesh = new THREE.Mesh(stemGeometry, stemMaterial);
  stemMesh.scale.set(1, 0.001, 1);
  stemMesh.position.set(0, 0, 0);
  rootGroup.add(stemMesh);

  // 4. LEAVES
  const leafGeometry = createLeafGeometry();
  const leafMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#489D63'),
    roughness: 0.25,
    metalness: 0.06,
    side: THREE.DoubleSide
  });

  const leafConfig = [
    { height: 0.85, angle: -0.65, tilt: 0.58, scale: 0.72, delay: 0.2 },
    { height: 1.05, angle: 2.5, tilt: 0.60, scale: 0.78, delay: 0.3 },
    { height: 1.75, angle: 0.8, tilt: 0.64, scale: 0.94, delay: 0.48 },
    { height: 1.95, angle: -2.3, tilt: 0.66, scale: 0.90, delay: 0.58 },
    { height: 2.65, angle: -0.9, tilt: 0.70, scale: 0.86, delay: 0.74 },
    { height: 2.80, angle: 2.15, tilt: 0.68, scale: 0.84, delay: 0.82 },
    { height: 3.25, angle: 0.1, tilt: 0.35, scale: 0.64, delay: 0.91 },
    { height: 3.25, angle: 3.14, tilt: 0.35, scale: 0.64, delay: 0.94 }
  ];

  const leaves = [];

  leafConfig.forEach((cfg) => {
    const stemPoint = curve.getPointAt(Math.min(0.98, cfg.height / 3.3));
    const pivot = new THREE.Group();
    pivot.position.copy(stemPoint);
    
    const mesh = new THREE.Mesh(leafGeometry, leafMaterial);
    mesh.position.set(0, 0.62 * cfg.scale, 0);
    mesh.scale.set(cfg.scale, cfg.scale, cfg.scale);
    mesh.rotation.x = cfg.tilt;
    
    pivot.rotation.y = cfg.angle;
    pivot.scale.set(0.001, 0.001, 0.001);
    
    pivot.add(mesh);
    rootGroup.add(pivot);

    leaves.push({
      pivot,
      mesh,
      targetScale: cfg.scale,
      delay: cfg.delay,
      initialRotationY: cfg.angle,
      tilt: cfg.tilt
    });
  });

  // 5. SPORES / PARTICLES
  const particleCount = 200;
  const particlePositions = new Float32Array(particleCount * 3);
  const particleSpeeds = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const radius = 0.4 + Math.random() * 3.2;
    const theta = Math.random() * Math.PI * 2;
    const y = Math.random() * 5.0 - 0.4;
    
    particlePositions[i * 3] = Math.cos(theta) * radius;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = Math.sin(theta) * radius;

    particleSpeeds[i * 3] = (Math.random() - 0.5) * 0.003;
    particleSpeeds[i * 3 + 1] = 0.003 + Math.random() * 0.007;
    particleSpeeds[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleTexture = createParticleTexture();
  const particleMaterial = new THREE.PointsMaterial({
    color: new THREE.Color('#B9DDB3'),
    size: 0.18,
    map: particleTexture,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  rootGroup.add(particles);

  return {
    rootGroup,
    soilMesh,
    rootGroupTendrils,
    seedMesh,
    glowLight,
    apexLight,
    stemMesh,
    leaves,
    particles,
    particleSpeeds,
    particlePositions,
    curve
  };
}
