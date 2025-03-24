<template>
  <div class="background-3d">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const canvas = ref(null);
let scene, camera, renderer, points;
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const particleCount = 2000;
const particleDistance = 1000;

// Définition des shaders en dehors du composant
const vertexShader = /* glsl */ `
  attribute float size;
  varying vec3 vColor;
  varying float vDistance;
  
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uPixelRatio;
  
  void main() {
    vColor = color;
    vec3 pos = position;
    
    // Convertir la position du monde en position écran
    vec4 viewPosition = modelViewMatrix * vec4(pos, 1.0);
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    // Effet de vague basé sur la distance à la souris dans l'espace écran
    vec2 ndc = projectedPosition.xy / projectedPosition.w;
    vec2 mouseDir = uMouse - ndc;
    float mouseDist = length(mouseDir);
    float waveEffect = sin(mouseDist * 5.0 - uTime * 2.0) * 20.0;
    
    // Attraction vers la souris
    if (mouseDist < 0.5) {
      vec2 force = normalize(mouseDir) * (1.0 - mouseDist / 0.5) * 30.0;
      pos.xy -= force;
    }
    
    // Ajout de l'effet de vague
    pos.z += waveEffect * (1.0 - min(1.0, mouseDist));
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Taille variable avec la profondeur et le pixel ratio
    float depth = (2000.0 - abs(mvPosition.z)) / 2000.0;
    gl_PointSize = size * uPixelRatio * (depth * 2.0 + 0.5);
    vDistance = depth;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vDistance;
  
  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    
    // Effet de lueur douce
    float strength = 1.0 - smoothstep(0.0, 0.5, dist);
    strength = pow(strength, 2.0);
    
    // Couleur finale avec alpha basé sur la distance
    vec3 finalColor = vColor * (1.0 + vDistance * 0.5);
    float alpha = strength * vDistance;
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

onMounted(() => {
  // Scene
  scene = new THREE.Scene();
  
  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
  camera.position.z = 1000;
  
  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Particles
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    // Position aléatoire dans une sphère
    const radius = Math.random() * particleDistance;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
    
    // Couleur basée sur la position
    const hue = (radius / particleDistance) * 0.15 + 0.5;
    const color = new THREE.Color();
    color.setHSL(hue, 0.8, 0.5 + Math.random() * 0.3);
    
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
    
    // Taille variable
    sizes[i] = Math.random() * 4 + 1;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uPixelRatio: { value: window.devicePixelRatio }
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    vertexColors: true
  });
  
  points = new THREE.Points(geometry, material);
  scene.add(points);
  
  // Mouse events
  const onMouseMove = (event) => {
    // Convertir les coordonnées de la souris en coordonnées NDC (-1 à 1)
    const rect = canvas.value.getBoundingClientRect();
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  
  window.addEventListener('mousemove', onMouseMove, { passive: true });
  
  // Animation
  let time = 0;
  function animate() {
    requestAnimationFrame(animate);
    
    time += 0.001;
    
    // Mouvement fluide de la souris
    targetX += (mouseX - targetX) * 0.1;
    targetY += (mouseY - targetY) * 0.1;
    
    if (points.material.uniforms) {
      points.material.uniforms.uTime.value = time;
      points.material.uniforms.uMouse.value.set(targetX, targetY);
    }
    
    // Rotation douce de la scène
    points.rotation.y = Math.sin(time * 0.5) * 0.3;
    points.rotation.x = Math.cos(time * 0.3) * 0.2;
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Resize
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (points.material.uniforms) {
      points.material.uniforms.uPixelRatio.value = window.devicePixelRatio;
    }
  };
  
  window.addEventListener('resize', onResize);
  
  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    
    points.geometry.dispose();
    points.material.dispose();
    renderer.dispose();
  });
});
</script>

<style scoped>
.background-3d {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(circle at center, #0f172a 0%, #020617 100%);
}

canvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
</style> 