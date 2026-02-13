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

const particleCount = 3000;
const particleDistance = 1200;

// Définition des shaders en dehors du composant
const vertexShader = /* glsl */ `
  attribute float size;
  varying vec3 vColor;
  varying float vDistance;
  varying vec2 vUv;
  
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uPixelRatio;
  uniform float uClickStrength;
  
  // Fonctions de bruit améliorées
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec2 mod289(vec2 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }
  
  vec3 permute(vec3 x) {
    return mod289(((x*34.0)+1.0)*x);
  }
  
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,
                        0.366025403784439,
                        -0.577350269189626,
                        0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  
  void main() {
    vColor = color;
    vUv = uv;
    vec3 pos = position;
    
    // Effet de vagues multiples avec amplitude réduite
    float wave1 = snoise(vec2(pos.x * 0.02 + uTime * 0.3, pos.y * 0.02)) * 10.0; // Réduit de 15.0 à 10.0
    float wave2 = snoise(vec2(pos.y * 0.02 - uTime * 0.2, pos.x * 0.02)) * 10.0; // Réduit de 15.0 à 10.0
    float wave3 = snoise(vec2(length(pos.xy) * 0.05 + uTime * 0.5, atan(pos.y, pos.x))) * 5.0; // Réduit de 10.0 à 5.0
    
    // Combinaison des vagues
    float finalWave = wave1 + wave2 + wave3;
    
    // Position modifiée avec les vagues
    pos.z += finalWave;
    
    // Effet de souris
    vec4 viewPosition = modelViewMatrix * vec4(pos, 1.0);
    vec4 projectedPosition = projectionMatrix * viewPosition;
    vec2 ndc = projectedPosition.xy / projectedPosition.w;
    vec2 mouseDir = uMouse - ndc;
    float mouseDist = length(mouseDir);
    
    // Effet de vortex plus subtil autour de la souris
    if (mouseDist < 1.2) { // Zone d'influence légèrement plus large
      float strength = (1.0 - mouseDist / 1.2);
      strength = pow(strength, 3.0); // Transition plus douce
      float angle = atan(mouseDir.y, mouseDir.x) + uTime * 1.5;
      vec2 spiral = vec2(cos(angle), sin(angle)) * strength * 15.0;
      pos.xy += spiral;
      pos.z += strength * 10.0; // Élévation réduite de 20.0 à 10.0
    }
    
    // Effet de clic avec ondes concentriques plus douces
    if (uClickStrength > 0.0) {
      float radius = length(pos.xy);
      float wave = sin(radius * 0.2 - uTime * 5.0) * uClickStrength * 20.0;
      pos.z += wave;
    }
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    
    // Taille variable avec effets plus subtils
    float depth = (2000.0 - abs(viewPosition.z)) / 2000.0;
    float sizeVariation = 1.0 + sin(uTime + length(pos.xy) * 0.05) * 0.3;
    float mouseEffect = (1.0 - min(1.0, mouseDist)) * 1.2;
    gl_PointSize = size * uPixelRatio * (depth * 2.0 + 0.5) * sizeVariation * (1.0 + mouseEffect);
    
    vDistance = depth;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vDistance;
  varying vec2 vUv;
  
  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    
    // Effet de particule plus doux
    float strength = 1.0 - smoothstep(0.0, 0.5, dist);
    strength = pow(strength, 2.0);
    
    // Couleur dynamique
    vec3 color = vColor;
    color += vec3(0.2, 0.3, 0.5) * vDistance; // Ajout de teintes bleutées en profondeur
    color += vec3(0.1) * sin(vUv.x * 10.0 + vUv.y * 10.0); // Motif subtil
    
    // Luminosité variable
    float brightness = 1.0 + vDistance * 0.5;
    color *= brightness;
    
    // Alpha avec fondu doux
    float alpha = strength * (0.5 + vDistance * 0.5);
    
    gl_FragColor = vec4(color, alpha);
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
    // Position dans une sphère avec distribution plus uniforme
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = Math.pow(Math.random(), 0.5) * particleDistance; // Distribution plus uniforme
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
    
    // Couleurs plus variées
    const hue = (radius / particleDistance) * 0.2 + 0.5; // Base bleue
    const saturation = 0.6 + Math.random() * 0.4;
    const lightness = 0.5 + Math.random() * 0.3;
    
    const color = new THREE.Color();
    color.setHSL(hue, saturation, lightness);
    
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
    
    // Tailles plus variées mais plus petites
    sizes[i] = Math.random() * 3 + 1; // Réduit de 5+2 à 3+1
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uPixelRatio: { value: window.devicePixelRatio },
      uClickStrength: { value: 0 }
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
  let animationId;
  function animate() {
    animationId = requestAnimationFrame(animate);

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

    if (animationId) {
      cancelAnimationFrame(animationId);
    }

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