import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ECOLOGICAL_SYSTEMS, PLANETARY_MARKERS } from '../../data/brandData';
import { isReducedMotionPreferred } from '../../utils/accessibility';

// Convert Lat/Lon to 3D Vector on Sphere
function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Map system id to shader integer
const SYSTEM_ID_MAP = { forests: 0, water: 1, energy: 2, circularity: 3 };

export default function EarthScene3D({
  activeSystemId = 'forests',
  onSelectSystem,
  theme = 'day'
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const earthGroupRef = useRef(null);
  const cloudMeshRef = useRef(null);
  const atmoMeshRef = useRef(null);
  const earthMatRef = useRef(null);
  const earthShaderRef = useRef(null);
  const lightsRef = useRef({});
  const animFrameRef = useRef(null);
  const isDestroyedRef = useRef(false);

  // Tooltip & marker interaction state
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const markerObjectsRef = useRef([]);

  // System layer groups — each holds its meshes
  const systemLayersRef = useRef({ forests: null, water: null, energy: null, circularity: null });

  // Drag interaction physics
  const isDraggingRef = useRef(false);
  const previousPointerPosRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0.15, y: 0.8 });
  const currentRotationRef = useRef({ x: 0.15, y: 0.8 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    isDestroyedRef.current = false;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.05, 6.7);
    cameraRef.current = camera;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      if (!renderer || !renderer.getContext()) {
        throw new Error("WebGL context not available");
      }
    } catch (e) {
      console.warn("WebGL Earth initialization error:", e);
      setHasWebGLError(true);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const sunLight = new THREE.DirectionalLight(0xFFF9E6, theme === 'night' ? 1.6 : 2.5);
    sunLight.position.set(5.5, 2.5, 4.0);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0xC8E6C9, theme === 'night' ? 0.35 : 0.55);
    scene.add(ambientLight);

    const rimLight = new THREE.DirectionalLight(0x74D0C0, theme === 'night' ? 0.9 : 0.45);
    rimLight.position.set(-6, -1.5, -4);
    scene.add(rimLight);

    lightsRef.current = { ambientLight, sunLight, rimLight };

    // --- Earth Group ---
    const earthGroup = new THREE.Group();
    earthGroup.rotation.set(0.15, 0.8, 0);
    earthGroupRef.current = earthGroup;
    scene.add(earthGroup);

    // --- Load Textures ---
    const textureLoader = new THREE.TextureLoader();
    const atmosTexture = textureLoader.load('/textures/planets/earth_atmos_2048.jpg');
    atmosTexture.colorSpace = THREE.SRGBColorSpace;
    const normalTexture = textureLoader.load('/textures/planets/earth_normal_2048.jpg');
    const specularTexture = textureLoader.load('/textures/planets/earth_specular_2048.jpg');
    const cloudTexture = textureLoader.load('/textures/planets/earth_clouds_1024.png');
    cloudTexture.colorSpace = THREE.SRGBColorSpace;

    // --- Earth Base Sphere ---
    const earthRadius = 2.15;
    const earthGeo = new THREE.SphereGeometry(earthRadius, 128, 96);

    const earthMat = new THREE.MeshStandardMaterial({
      map: atmosTexture,
      normalMap: normalTexture,
      normalScale: new THREE.Vector2(0.85, 0.85),
      roughnessMap: specularTexture,
      roughness: 0.62,
      metalness: 0.04
    });

    // System-responsive shader: ocean + land colors shift based on uSystemId
    // uSystemBlend (0→1) is animated by GSAP during system transitions
    earthMat.onBeforeCompile = (shader) => {
      shader.uniforms.specMap = { value: specularTexture };
      // System color uniforms — 0=forests, 1=water, 2=energy, 3=circularity
      shader.uniforms.uSystemId = { value: SYSTEM_ID_MAP[activeSystemId] || 0 };
      shader.uniforms.uSystemBlend = { value: 1.0 };
      earthShaderRef.current = shader;

      // Land base colors (per system)
      shader.uniforms.forestLandDeep  = { value: new THREE.Color('#0B3D2E') };
      shader.uniforms.forestLandMid   = { value: new THREE.Color('#1A5E3C') };
      shader.uniforms.forestLandHigh  = { value: new THREE.Color('#4E9B6E') };
      shader.uniforms.forestLandPeak  = { value: new THREE.Color('#BFD8C2') };
      shader.uniforms.waterLandDeep   = { value: new THREE.Color('#162F25') };
      shader.uniforms.waterLandMid    = { value: new THREE.Color('#1E4A36') };
      shader.uniforms.waterLandHigh   = { value: new THREE.Color('#3D7A56') };
      shader.uniforms.waterLandPeak   = { value: new THREE.Color('#9AC4AA') };
      shader.uniforms.energyLandDeep  = { value: new THREE.Color('#1A2E1A') };
      shader.uniforms.energyLandMid   = { value: new THREE.Color('#3A5A32') };
      shader.uniforms.energyLandHigh  = { value: new THREE.Color('#6B9A52') };
      shader.uniforms.energyLandPeak  = { value: new THREE.Color('#C4C98A') };
      shader.uniforms.circLandDeep    = { value: new THREE.Color('#162832') };
      shader.uniforms.circLandMid     = { value: new THREE.Color('#2A4A52') };
      shader.uniforms.circLandHigh    = { value: new THREE.Color('#4A7A7A') };
      shader.uniforms.circLandPeak    = { value: new THREE.Color('#A0C4C4') };

      // Ocean colors per system — WATER gets vivid bright blue-teal
      shader.uniforms.forestOceanDeep = { value: new THREE.Color('#061D16') };
      shader.uniforms.forestOceanTeal = { value: new THREE.Color('#0B2E24') };
      shader.uniforms.waterOceanDeep  = { value: new THREE.Color('#0A3A6E') };
      shader.uniforms.waterOceanTeal  = { value: new THREE.Color('#1060AA') };
      shader.uniforms.energyOceanDeep = { value: new THREE.Color('#0A2520') };
      shader.uniforms.energyOceanTeal = { value: new THREE.Color('#103C32') };
      shader.uniforms.circOceanDeep   = { value: new THREE.Color('#0A2840') };
      shader.uniforms.circOceanTeal   = { value: new THREE.Color('#14405E') };

      shader.fragmentShader = `
        uniform sampler2D specMap;
        uniform int uSystemId;
        uniform float uSystemBlend;
        uniform vec3 forestLandDeep; uniform vec3 forestLandMid; uniform vec3 forestLandHigh; uniform vec3 forestLandPeak;
        uniform vec3 waterLandDeep;  uniform vec3 waterLandMid;  uniform vec3 waterLandHigh;  uniform vec3 waterLandPeak;
        uniform vec3 energyLandDeep; uniform vec3 energyLandMid; uniform vec3 energyLandHigh; uniform vec3 energyLandPeak;
        uniform vec3 circLandDeep;   uniform vec3 circLandMid;   uniform vec3 circLandHigh;   uniform vec3 circLandPeak;
        uniform vec3 forestOceanDeep; uniform vec3 forestOceanTeal;
        uniform vec3 waterOceanDeep;  uniform vec3 waterOceanTeal;
        uniform vec3 energyOceanDeep; uniform vec3 energyOceanTeal;
        uniform vec3 circOceanDeep;   uniform vec3 circOceanTeal;
      ` + shader.fragmentShader;

      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <map_fragment>',
        `
        #ifdef USE_MAP
          vec4 texColor = texture2D( map, vMapUv );
          float oceanMask = texture2D( specMap, vMapUv ).r;
          float lum = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));

          // Pick land gradient based on system
          vec3 landDeep, landMid, landHigh, landPeak, oceanDeep, oceanTeal;
          if (uSystemId == 1) {
            landDeep = waterLandDeep; landMid = waterLandMid; landHigh = waterLandHigh; landPeak = waterLandPeak;
            oceanDeep = waterOceanDeep; oceanTeal = waterOceanTeal;
          } else if (uSystemId == 2) {
            landDeep = energyLandDeep; landMid = energyLandMid; landHigh = energyLandHigh; landPeak = energyLandPeak;
            oceanDeep = energyOceanDeep; oceanTeal = energyOceanTeal;
          } else if (uSystemId == 3) {
            landDeep = circLandDeep; landMid = circLandMid; landHigh = circLandHigh; landPeak = circLandPeak;
            oceanDeep = circOceanDeep; oceanTeal = circOceanTeal;
          } else {
            landDeep = forestLandDeep; landMid = forestLandMid; landHigh = forestLandHigh; landPeak = forestLandPeak;
            oceanDeep = forestOceanDeep; oceanTeal = forestOceanTeal;
          }

          vec3 landColor = mix(landDeep, landMid,  smoothstep(0.04, 0.30, lum));
          landColor      = mix(landColor, landHigh, smoothstep(0.30, 0.60, lum));
          landColor      = mix(landColor, landPeak, smoothstep(0.60, 0.90, lum));

          vec3 oceanCol = mix(oceanDeep, oceanTeal, clamp(texColor.b * 1.5 + (uSystemId == 1 ? 0.4 : 0.0), 0.0, 1.0));
          vec3 finalColor = mix(landColor, oceanCol, smoothstep(0.06, 0.22, oceanMask));

          diffuseColor = vec4( finalColor, 1.0 );
        #endif
        `
      );
    };

    earthMatRef.current = earthMat;
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // --- Cloud Layer ---
    const cloudGeo = new THREE.SphereGeometry(earthRadius + 0.022, 64, 48);
    const cloudMat = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.25,
      blending: THREE.NormalBlending,
      roughness: 0.85,
      depthWrite: false
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    cloudMeshRef.current = cloudMesh;
    earthGroup.add(cloudMesh);

    // --- Atmospheric Fresnel Limb ---
    const atmoGeo = new THREE.SphereGeometry(earthRadius + 0.042, 64, 48);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vEye;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vEye = -normalize(mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vEye;
        uniform vec3 atmoColor;
        uniform float atmoOpacity;
        void main() {
          float dotVal = dot(vNormal, vEye);
          float fresnel = clamp(1.0 - dotVal, 0.0, 1.0);
          float intensity = pow(fresnel, 3.2);
          gl_FragColor = vec4(atmoColor, intensity * atmoOpacity);
        }
      `,
      uniforms: {
        atmoColor: { value: new THREE.Color('#74D0C0') },
        atmoOpacity: { value: theme === 'night' ? 0.22 : 0.16 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      depthWrite: false
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    atmoMeshRef.current = atmoMesh;
    earthGroup.add(atmoMesh);

    // =========================================================
    // SYSTEM VISUALIZATION LAYERS
    // =========================================================

    // Helper: make transparent material with target opacity for GSAP control
    const makeMat = (color, opacity, blending = THREE.NormalBlending) =>
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide, blending, depthWrite: false });

    // ---- A) FORESTS ----
    // 6 large disc overlays at real major forest biome coordinates
    const forestGroup = new THREE.Group();
    const forestRegions = [
      { lat: -3.5,  lon: -62.2,  rad: 0.58 },  // Amazon Basin
      { lat: -0.8,  lon: 24.5,   rad: 0.46 },  // Congo Basin
      { lat: 58.0,  lon: 85.0,   rad: 0.72 },  // Siberian Boreal Taiga
      { lat: 3.0,   lon: 109.0,  rad: 0.40 },  // Borneo / SE Asia
      { lat: 52.0,  lon: -100.0, rad: 0.60 },  // Canadian Boreal
      { lat: -7.5,  lon: 29.0,   rad: 0.34 },  // Central African forest belt
    ];
    forestRegions.forEach(({ lat, lon, rad }) => {
      const pos = latLonToVector3(lat, lon, earthRadius + 0.028);
      // Outer halo disc
      const haloGeo = new THREE.CircleGeometry(rad, 40);
      const haloMat = makeMat(0x3D8B57, 0.18);
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(pos);
      halo.lookAt(pos.clone().multiplyScalar(2.5));
      forestGroup.add(halo);
      // Inner core disc
      const coreGeo = new THREE.CircleGeometry(rad * 0.55, 32);
      const coreMat = makeMat(0x52B788, 0.28);
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.copy(pos);
      core.lookAt(pos.clone().multiplyScalar(2.5));
      forestGroup.add(core);
    });
    // Subtle green-tinted land overlay sphere
    const forestOverlayGeo = new THREE.SphereGeometry(earthRadius + 0.01, 64, 48);
    const forestOverlayMat = new THREE.MeshBasicMaterial({
      color: 0x52B788,
      transparent: true,
      opacity: 0.04,
      side: THREE.FrontSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    forestGroup.add(new THREE.Mesh(forestOverlayGeo, forestOverlayMat));
    earthGroup.add(forestGroup);
    forestGroup.visible = (activeSystemId === 'forests');
    systemLayersRef.current.forests = forestGroup;

    // ---- B) WATER ----
    const waterGroup = new THREE.Group();

    // River splines — thicker tubes
    const riverSplines = [
      // Amazon (corrected: lon should increase eastward from source)
      [[-72,-3], [-62,-3.5], [-54,-1.5], [-50,0]],
      // Nile (S→N: starts Uganda, ends Egypt)
      [[32,-1], [32.5,12], [32.8,24], [31,31.2]],
      // Ganges-Brahmaputra
      [[78,28], [84,25.5], [89.5,22.5]],
      // Congo River
      [[18,-4], [22,-1], [26,0.5], [30,-1]],
      // Mississippi-Missouri
      [[-97,47], [-95,40], [-90,32], [-89.5,29]],
    ];
    const riverMat = new THREE.MeshBasicMaterial({ color: 0x4BAFA1, transparent: true, opacity: 0.75, depthWrite: false });
    riverSplines.forEach(pts => {
      const curve = new THREE.CatmullRomCurve3(pts.map(([lon, lat]) => latLonToVector3(lat, lon, earthRadius + 0.026)));
      const geo = new THREE.TubeGeometry(curve, 32, 0.026, 7, false);
      waterGroup.add(new THREE.Mesh(geo, riverMat.clone()));
    });

    // 3 major ocean gyre arc ribbons
    const gyreArcs = [
      // North Atlantic Gyre
      [[-75,20], [-60,35], [-30,45], [0,40], [10,25], [-20,10], [-50,5], [-75,20]].map(([lon,lat]) => latLonToVector3(lat, lon, earthRadius + 0.026)),
      // North Pacific Gyre (simplified)
      [[140,15], [160,25], [170,35], [-150,40], [-130,30], [-110,20], [-95,10], [140,15]].map(([lon,lat]) => latLonToVector3(lat, lon, earthRadius + 0.026)),
      // Southern Ocean ring (approximate)
      [[0,-55], [60,-58], [120,-55], [180,-58], [240,-55], [300,-58], [360,-55]].map(([lon,lat]) => latLonToVector3(lat, lon, earthRadius + 0.026)),
    ];
    const gyreMat = new THREE.MeshBasicMaterial({ color: 0x1E90C0, transparent: true, opacity: 0.35, depthWrite: false });
    gyreArcs.forEach(pts => {
      const curve = new THREE.CatmullRomCurve3(pts, true);
      const geo = new THREE.TubeGeometry(curve, 64, 0.016, 6, true);
      waterGroup.add(new THREE.Mesh(geo, gyreMat.clone()));
    });

    // Additive ocean overlay sphere — makes oceans visibly brighter in water mode
    const oceanOverlayGeo = new THREE.SphereGeometry(earthRadius + 0.009, 64, 48);
    const oceanOverlayMat = new THREE.MeshBasicMaterial({
      color: 0x1A7AAD,
      transparent: true,
      opacity: 0.11,
      side: THREE.FrontSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    waterGroup.add(new THREE.Mesh(oceanOverlayGeo, oceanOverlayMat));

    earthGroup.add(waterGroup);
    waterGroup.visible = (activeSystemId === 'water');
    systemLayersRef.current.water = waterGroup;

    // ---- C) ENERGY ----
    const energyGroup = new THREE.Group();

    // Solar equatorial belt — torus at equator
    const solarBeltGeo = new THREE.TorusGeometry(earthRadius + 0.06, 0.014, 8, 120);
    const solarBeltMat = new THREE.MeshBasicMaterial({ color: 0xE8C86E, transparent: true, opacity: 0.50, depthWrite: false });
    const solarBelt = new THREE.Mesh(solarBeltGeo, solarBeltMat);
    solarBelt.rotation.x = Math.PI / 2; // Align with equatorial plane
    energyGroup.add(solarBelt);

    // Wind corridor arcs
    const windCorridors = [
      // North Sea / European wind belt
      [[2,54], [4,56], [8,58], [12,57], [8,55], [2,54]].map(([lon,lat]) => latLonToVector3(lat, lon, earthRadius + 0.030)),
      // Patagonian wind belt
      [[-72,-42], [-68,-44], [-62,-46], [-58,-47], [-62,-44], [-72,-42]].map(([lon,lat]) => latLonToVector3(lat, lon, earthRadius + 0.030)),
      // Inner Mongolian wind corridor
      [[102,42], [108,44], [114,42], [110,40], [104,40]].map(([lon,lat]) => latLonToVector3(lat, lon, earthRadius + 0.030)),
      // US Great Plains wind belt
      [[-100,40], [-98,44], [-96,47], [-98,45], [-100,42]].map(([lon,lat]) => latLonToVector3(lat, lon, earthRadius + 0.030)),
    ];
    const windMat = new THREE.MeshBasicMaterial({ color: 0xE8C86E, transparent: true, opacity: 0.45, depthWrite: false });
    windCorridors.forEach(pts => {
      const curve = new THREE.CatmullRomCurve3(pts, true);
      const geo = new THREE.TubeGeometry(curve, 24, 0.019, 6, true);
      energyGroup.add(new THREE.Mesh(geo, windMat.clone()));
    });

    // 5 energy node spheres at renewable hotspots
    const energyNodes = [
      { lat: 64.9, lon: -19.0 },   // Iceland geothermal
      { lat: 25.0, lon: 55.0 },    // Arabian solar belt
      { lat: -25.0, lon: 130.0 },  // Australian solar
      { lat: 38.0, lon: -97.0 },   // US Great Plains wind/solar
      { lat: 35.0, lon: 103.0 },   // China renewables
    ];
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xF5D060, transparent: true, opacity: 0.85, depthWrite: false });
    energyNodes.forEach(({ lat, lon }) => {
      const pos = latLonToVector3(lat, lon, earthRadius + 0.04);
      const nodeGeo = new THREE.SphereGeometry(0.055, 12, 12);
      const node = new THREE.Mesh(nodeGeo, nodeMat.clone());
      node.position.copy(pos);
      energyGroup.add(node);
      // Halo ring around each node
      const haloGeo = new THREE.RingGeometry(0.07, 0.10, 24);
      const haloMat = new THREE.MeshBasicMaterial({ color: 0xE8C86E, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(pos);
      halo.lookAt(pos.clone().multiplyScalar(2.5));
      energyGroup.add(halo);
    });

    // Subtle warm amber land overlay
    const energyOverlayGeo = new THREE.SphereGeometry(earthRadius + 0.008, 64, 48);
    const energyOverlayMat = new THREE.MeshBasicMaterial({
      color: 0xC88020,
      transparent: true,
      opacity: 0.04,
      side: THREE.FrontSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    energyGroup.add(new THREE.Mesh(energyOverlayGeo, energyOverlayMat));

    earthGroup.add(energyGroup);
    energyGroup.visible = (activeSystemId === 'energy');
    systemLayersRef.current.energy = energyGroup;

    // ---- D) CIRCULARITY ----
    const circularGroup = new THREE.Group();

    // 3 inclined orbital rings at different inclinations
    const ringInclinations = [Math.PI / 5, Math.PI / 2.2, Math.PI / 1.4];
    ringInclinations.forEach((incl, i) => {
      const ringGeo = new THREE.TorusGeometry(earthRadius + 0.10 + i * 0.025, 0.011, 8, 96);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x96DC9E,
        transparent: true,
        opacity: 0.45 - i * 0.08,
        depthWrite: false
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = incl;
      ring.rotation.z = (i * Math.PI) / 3;
      circularGroup.add(ring);
    });

    // 4 hub node spheres (major circular economy regions)
    const circHubs = [
      { lat: 52.4, lon: 4.9 },    // Netherlands / North Sea hub
      { lat: 35.6, lon: 139.7 },  // Japan circular economy
      { lat: 37.8, lon: -95.0 },  // North America industrial ecology
      { lat: 5.0,  lon: 8.0 },    // West Africa bio-cycle
    ];
    const hubMat = new THREE.MeshBasicMaterial({ color: 0x96DC9E, transparent: true, opacity: 0.90, depthWrite: false });
    circHubs.forEach(({ lat, lon }) => {
      const pos = latLonToVector3(lat, lon, earthRadius + 0.04);
      const hubGeo = new THREE.SphereGeometry(0.05, 12, 12);
      const hub = new THREE.Mesh(hubGeo, hubMat.clone());
      hub.position.copy(pos);
      circularGroup.add(hub);
      // Ring pulse around hub
      const haloGeo = new THREE.RingGeometry(0.065, 0.095, 24);
      const haloMat = new THREE.MeshBasicMaterial({ color: 0x96DC9E, transparent: true, opacity: 0.30, side: THREE.DoubleSide, depthWrite: false });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(pos);
      halo.lookAt(pos.clone().multiplyScalar(2.5));
      circularGroup.add(halo);
    });

    // Arc connectors between hubs (simplified great-circle arcs)
    const hubPositions = circHubs.map(({ lat, lon }) => latLonToVector3(lat, lon, earthRadius + 0.035));
    const arcPairs = [[0,1],[1,2],[2,3],[3,0],[0,2]];
    const arcMat = new THREE.MeshBasicMaterial({ color: 0x78C88A, transparent: true, opacity: 0.30, depthWrite: false });
    arcPairs.forEach(([a, b]) => {
      const mid = hubPositions[a].clone().add(hubPositions[b]).multiplyScalar(0.5).normalize().multiplyScalar(earthRadius + 0.12);
      const curve = new THREE.QuadraticBezierCurve3(hubPositions[a], mid, hubPositions[b]);
      const geo = new THREE.TubeGeometry(curve, 20, 0.013, 6, false);
      circularGroup.add(new THREE.Mesh(geo, arcMat.clone()));
    });

    earthGroup.add(circularGroup);
    circularGroup.visible = (activeSystemId === 'circularity');
    systemLayersRef.current.circularity = circularGroup;

    // =========================================================
    // PLANETARY MARKERS (per-system)
    // =========================================================
    markerObjectsRef.current = [];
    PLANETARY_MARKERS.forEach((markerData) => {
      const pos = latLonToVector3(markerData.coordinates.lat, markerData.coordinates.lon, earthRadius + 0.038);
      const markerPivot = new THREE.Group();
      markerPivot.position.copy(pos);

      const dotGeo = new THREE.SphereGeometry(0.038, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
      markerPivot.add(new THREE.Mesh(dotGeo, dotMat));

      const ringGeo = new THREE.RingGeometry(0.05, 0.075, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x78B978,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.lookAt(pos.clone().multiplyScalar(2));
      markerPivot.add(ringMesh);

      // Show only markers for current active system
      markerPivot.visible = (markerData.systemId === activeSystemId);

      earthGroup.add(markerPivot);
      markerObjectsRef.current.push({
        data: markerData,
        pivot: markerPivot,
        ringMesh,
        pos3D: pos
      });
    });

    // =========================================================
    // POINTER & TOUCH DRAG
    // =========================================================
    const handlePointerDown = (e) => {
      isDraggingRef.current = true;
      previousPointerPosRef.current = {
        x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
        y: e.clientY || (e.touches && e.touches[0].clientY) || 0
      };
    };

    const handlePointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      // Marker hover tooltip
      if (cameraRef.current && container) {
        const rect = container.getBoundingClientRect();
        const mouseNormX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const mouseNormY = -((clientY - rect.top) / rect.height) * 2 + 1;

        let foundHover = null;
        markerObjectsRef.current.forEach((m) => {
          if (!m.pivot.visible) return;
          const worldPos = new THREE.Vector3();
          m.pivot.getWorldPosition(worldPos);
          if (worldPos.z > 0.2) {
            const screenPos = worldPos.clone().project(camera);
            const dist = Math.hypot(screenPos.x - mouseNormX, screenPos.y - mouseNormY);
            if (dist < 0.11) {
              foundHover = m.data;
              // Clamp tooltip within container
              const rawX = ((screenPos.x + 1) / 2) * rect.width;
              const rawY = ((-screenPos.y + 1) / 2) * rect.height;
              setTooltipPos({
                x: Math.min(Math.max(rawX, 80), rect.width - 80),
                y: Math.min(Math.max(rawY, 60), rect.height - 20)
              });
            }
          }
        });
        setHoveredMarker(foundHover);
      }

      if (!isDraggingRef.current) return;

      const deltaX = clientX - previousPointerPosRef.current.x;
      const deltaY = clientY - previousPointerPosRef.current.y;

      targetRotationRef.current.y += deltaX * 0.005;
      targetRotationRef.current.x = Math.max(-0.55, Math.min(0.55, targetRotationRef.current.x + deltaY * 0.004));

      previousPointerPosRef.current = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => { isDraggingRef.current = false; };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    domEl.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // =========================================================
    // RENDER LOOP
    // =========================================================
    const clock = new THREE.Clock();
    const reducedMotion = isReducedMotionPreferred();

    const renderLoop = () => {
      if (isDestroyedRef.current) return;
      animFrameRef.current = requestAnimationFrame(renderLoop);
      const elapsedTime = clock.getElapsedTime();

      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.07;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.07;

      if (!isDraggingRef.current && !reducedMotion) {
        targetRotationRef.current.y += 0.00022;
      }

      earthGroup.rotation.x = currentRotationRef.current.x;
      earthGroup.rotation.y = currentRotationRef.current.y;

      if (cloudMeshRef.current) {
        cloudMeshRef.current.rotation.y += 0.00015;
      }

      markerObjectsRef.current.forEach((m, idx) => {
        if (!m.pivot.visible) return;
        const pulse = 1 + Math.sin(elapsedTime * 2.0 + idx * 0.9) * 0.18;
        m.ringMesh.scale.set(pulse, pulse, 1);
      });

      try {
        renderer.render(scene, camera);
      } catch (err) {
        console.error("WebGL render error in EarthScene3D:", err);
        setHasWebGLError(true);
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        return;
      }
    };

    renderLoop();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 540;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      isDestroyedRef.current = true;
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      domEl.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  // =========================================================
  // SYSTEM SWITCH — GSAP opacity transitions + shader update
  // =========================================================
  useEffect(() => {
    if (!earthGroupRef.current) return;

    const layers = systemLayersRef.current;
    const allIds = ['forests', 'water', 'energy', 'circularity'];

    // Fade out non-active layers, fade in active layer
    allIds.forEach((id) => {
      const grp = layers[id];
      if (!grp) return;
      if (id === activeSystemId) {
        grp.visible = true;
        // Fade in each child material
        grp.traverse((child) => {
          if (child.isMesh && child.material) {
            const mat = child.material;
            const targetOpacity = mat.userData.targetOpacity ?? mat.opacity;
            if (!mat.userData.targetOpacity) mat.userData.targetOpacity = mat.opacity;
            mat.opacity = 0;
            gsap.to(mat, { opacity: targetOpacity, duration: 0.45, delay: 0.15, ease: 'power2.out' });
          }
        });
      } else {
        // Fade out
        grp.traverse((child) => {
          if (child.isMesh && child.material) {
            const mat = child.material;
            gsap.to(mat, {
              opacity: 0,
              duration: 0.30,
              ease: 'power2.in',
              onComplete: () => { grp.visible = false; }
            });
          }
        });
      }
    });

    // Per-system marker visibility
    markerObjectsRef.current.forEach(m => {
      m.pivot.visible = (m.data.systemId === activeSystemId);
    });

    // Update shader uniform for system color palette
    if (earthShaderRef.current) {
      const targetId = SYSTEM_ID_MAP[activeSystemId] ?? 0;
      gsap.to(earthShaderRef.current.uniforms.uSystemBlend, {
        value: 0,
        duration: 0.20,
        ease: 'power1.in',
        onComplete: () => {
          if (earthShaderRef.current) {
            earthShaderRef.current.uniforms.uSystemId.value = targetId;
          }
          gsap.to(earthShaderRef.current.uniforms.uSystemBlend, {
            value: 1,
            duration: 0.40,
            ease: 'power2.out'
          });
        }
      });
    }

    // Rotate globe to focus on selected system region
    const system = ECOLOGICAL_SYSTEMS.find(s => s.id === activeSystemId);
    if (!system) return;
    const targetY = -(system.coordinates.lon * (Math.PI / 180)) - Math.PI / 2;
    const targetX = system.coordinates.lat * (Math.PI / 180) * 0.35;
    gsap.to(targetRotationRef.current, { x: targetX, y: targetY, duration: 1.5, ease: 'power2.inOut' });
  }, [activeSystemId]);

  // --- Theme Adaptation ---
  useEffect(() => {
    const lights = lightsRef.current;
    if (!lights.ambientLight || !lights.sunLight) return;
    if (theme === 'night') {
      gsap.to(lights.ambientLight, { intensity: 0.35, duration: 0.8 });
      gsap.to(lights.sunLight, { intensity: 1.6, duration: 0.8 });
      gsap.to(lights.rimLight, { intensity: 0.9, duration: 0.8 });
      if (atmoMeshRef.current) atmoMeshRef.current.material.uniforms.atmoOpacity.value = 0.22;
    } else {
      gsap.to(lights.ambientLight, { intensity: 0.55, duration: 0.8 });
      gsap.to(lights.sunLight, { intensity: 2.5, duration: 0.8 });
      gsap.to(lights.rimLight, { intensity: 0.45, duration: 0.8 });
      if (atmoMeshRef.current) atmoMeshRef.current.material.uniforms.atmoOpacity.value = 0.16;
    }
  }, [theme]);

  const handleMarkerClick = (systemId) => {
    if (onSelectSystem) onSelectSystem(systemId);
  };

  if (hasWebGLError) {
    return (
      <div className="relative w-full max-w-[620px] mx-auto h-[440px] sm:h-[500px] md:h-[560px] flex items-center justify-center select-none">
        <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full flex items-center justify-center shadow-2xl overflow-hidden border border-econest-forest/20">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <radialGradient id="fallbackEarth" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#4E9B6E" />
                <stop offset="35%" stopColor="#1F6B45" />
                <stop offset="70%" stopColor="#0B3D2E" />
                <stop offset="100%" stopColor="#061D16" />
              </radialGradient>
              <radialGradient id="fallbackAtmosphere" cx="50%" cy="50%" r="50%">
                <stop offset="85%" stopColor="#74D0C0" stopOpacity="0" />
                <stop offset="100%" stopColor="#74D0C0" stopOpacity="0.35" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="195" fill="url(#fallbackEarth)" />
            <ellipse cx="200" cy="200" rx="190" ry="60" fill="none" stroke="#74D0C0" strokeWidth="0.75" strokeOpacity="0.25" />
            <ellipse cx="200" cy="200" rx="190" ry="120" fill="none" stroke="#74D0C0" strokeWidth="0.75" strokeOpacity="0.25" />
            <line x1="200" y1="5" x2="200" y2="395" stroke="#74D0C0" strokeWidth="0.75" strokeOpacity="0.25" />
            <line x1="5" y1="200" x2="395" y2="200" stroke="#74D0C0" strokeWidth="0.75" strokeOpacity="0.25" />
            <circle cx="200" cy="200" r="195" fill="url(#fallbackAtmosphere)" />
          </svg>
          {PLANETARY_MARKERS.filter(m => m.systemId === activeSystemId).map((marker, idx) => {
            const offsets = [
              { x: 120, y: 220 }, { x: 215, y: 210 },
              { x: 270, y: 155 }, { x: 280, y: 240 },
              { x: 180, y: 100 }, { x: 195, y: 110 }
            ];
            const pos = offsets[idx % offsets.length];
            return (
              <button
                key={marker.id}
                onClick={() => handleMarkerClick(marker.systemId)}
                onMouseEnter={() => setHoveredMarker(marker)}
                onMouseLeave={() => setHoveredMarker(null)}
                className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-econest-fresh"
                style={{ left: `${(pos.x / 400) * 100}%`, top: `${(pos.y / 400) * 100}%` }}
                aria-label={marker.name}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-md animate-ping absolute opacity-75" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#78B978] border border-white relative z-10" />
              </button>
            );
          })}
        </div>
        {hoveredMarker && (
          <div className="absolute z-20 top-8 bg-econest-deep/90 text-white backdrop-blur-md px-4 py-2 rounded-2xl border border-econest-natural/30 shadow-organic text-center">
            <div className="text-[10px] uppercase font-bold tracking-brand text-econest-fresh">{hoveredMarker.systemName}</div>
            <div className="text-xs font-serif font-semibold text-white">{hoveredMarker.name}</div>
            <div className="text-[10px] text-econest-natural/80 pt-0.5">{hoveredMarker.metric}</div>
          </div>
        )}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none text-[10px] uppercase tracking-brand font-medium text-econest-forest/70 dark:text-econest-natural/70 bg-white/60 dark:bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-econest-forest/10">
          Ecological Biosphere Active · Telemetry Mode
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[620px] mx-auto h-[440px] sm:h-[500px] md:h-[560px] flex items-center justify-center select-none">
      <div
        ref={containerRef}
        data-cursor="DRAG"
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
        aria-label="Interactive 3D Ecological Planetary Earth — drag to rotate"
      />

      {/* Marker Tooltip — viewport-clamped */}
      {hoveredMarker && (
        <div
          className="absolute z-20 pointer-events-auto bg-econest-deep/90 dark:bg-black/85 text-white backdrop-blur-md px-4 py-2.5 rounded-2xl border border-econest-natural/30 shadow-organic text-left transition-opacity duration-200 -translate-x-1/2 -translate-y-full cursor-pointer"
          style={{ left: tooltipPos.x, top: tooltipPos.y - 8 }}
          onClick={() => handleMarkerClick(hoveredMarker.systemId)}
        >
          <div className="text-[10px] uppercase font-bold tracking-brand text-econest-fresh">{hoveredMarker.systemName}</div>
          <div className="text-xs font-serif font-semibold text-white">{hoveredMarker.name}</div>
          <div className="text-[10px] text-econest-natural/80 pt-0.5 max-w-[200px]">{hoveredMarker.metric}</div>
        </div>
      )}

      {/* Drag / Interact Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none text-[10px] uppercase tracking-brand font-medium text-econest-forest/65 dark:text-econest-natural/70 bg-white/50 dark:bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-econest-forest/10">
        Drag to rotate · Hover markers for telemetry
      </div>
    </div>
  );
}
