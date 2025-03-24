<template>
  <div class="home">
    <Background3D />
    <header class="hero">
      <div class="hero-content">
        <div class="container">
          <h1 class="glitch" data-text="Matheo Guilloux">Matheo Guilloux</h1>
          <p class="tagline slide-in-right">Ingénieur DevOps</p>
          <div class="typewriter">
            <h2>Je développe <span class="accent" ref="typewriterText"></span></h2>
          </div>
          <div class="cta-buttons">
            <router-link to="/projects" class="btn btn-primary">
              <span class="btn-content">Voir mes projets</span>
            </router-link>
            <router-link to="/contact" class="btn btn-secondary">
              <span class="btn-content">Me contacter</span>
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <section class="intro">
      <div class="container">
        <h2 class="section-title glitch" data-text="Expertise">Expertise</h2>
        <div class="skills-grid">
          <SkillCard>
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
              </svg>
            </template>
            <template #title>Infrastructure & Cloud</template>
            <template #description>Expertise en déploiement et gestion d'infrastructures cloud, conteneurisation et orchestration de services</template>
            <template #tags>
              <span class="tag">Docker</span>
              <span class="tag">Kubernetes</span>
              <span class="tag">Ansible</span>
              <span class="tag">VM</span>
            </template>
          </SkillCard>
          <SkillCard>
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </template>
            <template #title>Développement</template>
            <template #description>Développement d'applications et d'outils d'automatisation avec focus sur les technologies modernes</template>
            <template #tags>
              <span class="tag">Python</span>
              <span class="tag">FastAPI</span>
              <span class="tag">Golang</span>
              <span class="tag">Rust</span>
              <span class="tag">Javascript</span>
            </template>
          </SkillCard>
          <SkillCard>
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
            </template>
            <template #title>Monitoring & DevSecOps</template>
            <template #description>Mise en place de solutions de monitoring, sécurisation des infrastructures et automatisation des déploiements</template>
            <template #tags>
              <span class="tag">Grafana</span>
              <span class="tag">InfluxDB</span>
              <span class="tag">GitLab CI</span>
              <span class="tag">Security</span>
            </template>
          </SkillCard>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card" ref="projectsCount">
            <div class="stat-number">0</div>
            <div class="stat-label">Projets</div>
          </div>
          <div class="stat-card" ref="experienceCount">
            <div class="stat-number">0</div>
            <div class="stat-label">Années d'Expérience</div>
          </div>
          <div class="stat-card" ref="certificationsCount">
            <div class="stat-number">0</div>
            <div class="stat-label">Certifications</div>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-project">
      <div class="container">
        <h2 class="section-title glitch" data-text="Projet à la Une">Projet à la Une</h2>
        <div class="featured-project-card">
          <div class="featured-project-image">
            <div class="image-overlay"></div>
            <img src="https://brasseriechezju.com/_ipx/f_webp&q_90/images/menu/pavlova.jpg" alt="Brasserie Chez Ju" class="project-image">
          </div>
          <div class="featured-project-info">
            <h3>Brasserie Chez Ju</h3>
            <p>Développement et déploiement d'un site web pour un restaurant traditionnel français. Stack technique : Nuxt 3, FastAPI, Directus CMS, PostgreSQL, Docker, Traefik. Architecture moderne avec séparation frontend/backend, gestion de contenu via CMS headless, et déploiement automatisé via Watchtower et Github Actions.</p>
            <div class="featured-project-tags">
              <span class="tag">Web</span>
              <span class="tag">DevOps</span>
              <span class="tag">Backend</span>
              <span class="tag">Frontend</span>
            </div>
            <div class="featured-project-links">
              <a href="https://brasseriechezju.com" target="_blank" class="btn btn-primary">
                <span class="btn-content">Voir le site</span>
              </a>
              <a href="https://github.com/CaptainIgl00/BrasserieChezJu" target="_blank" class="btn btn-secondary">
                <span class="btn-content">Code source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Background3D from '../components/Background3D.vue';
import SkillCard from '../components/SkillCard.vue';

console.log('Chargement de Home.vue');

gsap.registerPlugin(ScrollTrigger);

// Texte à afficher dans l'effet machine à écrire
const typewriterText = ref(null);
const typewriterStrings = [
  'des solutions DevOps',
  'des bancs de test',
  'des solutions de monitoring',
  'des interfaces web',
  'des solutions backend',
  'des outils automatisés',
  'des solutions de gestion de base de données',
];
let typewriterCurrentIndex = 0;
let typewriterCharIndex = 0;
let typewriterTimer = null;
let typewriterDeleting = false;
let typewriterPause = false;

// Compteurs pour les statistiques
const projectsCount = ref(null);
const experienceCount = ref(null);
const certificationsCount = ref(null);

// Fonction pour l'effet machine à écrire
const typeWriter = () => {
  if (!typewriterText.value) return;
  
  const currentText = typewriterStrings[typewriterCurrentIndex];
  
  if (typewriterPause) {
    typewriterPause = false;
    typewriterTimer = setTimeout(typeWriter, 1000);
    return;
  }
  
  if (typewriterDeleting) {
    // Suppression de caractères
    typewriterText.value.textContent = currentText.substring(0, typewriterCharIndex - 1);
    typewriterCharIndex--;
    
    if (typewriterCharIndex === 0) {
      typewriterDeleting = false;
      typewriterCurrentIndex = (typewriterCurrentIndex + 1) % typewriterStrings.length;
    }
    
    typewriterTimer = setTimeout(typeWriter, 50);
  } else {
    // Ajout de caractères
    typewriterText.value.textContent = currentText.substring(0, typewriterCharIndex + 1);
    typewriterCharIndex++;
    
    if (typewriterCharIndex === currentText.length) {
      typewriterDeleting = false;
      typewriterPause = true;
      setTimeout(() => {
        typewriterDeleting = true;
        typeWriter();
      }, 1500);
      return;
    }
    
    typewriterTimer = setTimeout(typeWriter, 100);
  }
};

// Animation des statistiques avec GSAP
const animateStats = () => {
  gsap.to('.stat-number', {
    scrollTrigger: {
      trigger: '.stats',
      start: 'top center',
      toggleActions: 'play none none reverse'
    },
    innerHTML: (i) => {
      const values = [9, 3, 1];
      return values[i];
    },
    duration: 2,
    ease: 'power2.out',
    snap: { innerHTML: 1 }
  });
};

onMounted(() => {
  typeWriter();
  animateStats();
  
  // Animation des titres avec effet glitch
  gsap.from('.glitch', {
    scrollTrigger: {
      trigger: '.glitch',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });
});

onUnmounted(() => {
  // Nettoyer le timer pour éviter les fuites de mémoire
  if (typewriterTimer) {
    clearTimeout(typewriterTimer);
  }
});
</script>

<style scoped>
.home {
  padding-bottom: 4rem;
  color: white;
  min-height: 100vh;
}

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.02em;
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #94a3b8;
  font-weight: 400;
}

.typewriter {
  margin-bottom: 3rem;
}

.typewriter h2 {
  font-size: 2rem;
  font-weight: 400;
  color: #e2e8f0;
}

.accent {
  color: #a5b4fc;
  position: relative;
  display: inline-block;
  min-width: 10px;
  min-height: 1.5em;
}

.accent::after {
  content: '|';
  margin-left: 2px;
  opacity: 1;
  animation: cursor-blink 1s infinite;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.btn {
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  letter-spacing: 0.5px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.btn-primary {
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.2);
}

.btn-primary:hover {
  background: rgba(99, 102, 241, 0.2);
}

.btn-secondary {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.intro {
  padding: 8rem 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.stats {
  padding: 6rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
}

.stat-card {
  padding: 2rem;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-label {
  font-size: 1.1rem;
  color: #94a3b8;
}

.featured-project {
  padding: 8rem 1rem;
}

.featured-project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.featured-project-card:hover {
  transform: translateY(-5px);
}

.featured-project-image {
  height: 100%;
  min-height: 400px;
  position: relative;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  z-index: 1;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.featured-project-card:hover .project-image {
  transform: scale(1.05);
}

.featured-project-info {
  padding: 3rem;
}

.featured-project-info h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.featured-project-info p {
  margin-bottom: 2rem;
  color: #94a3b8;
  line-height: 1.7;
}

.featured-project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.featured-project-links {
  display: flex;
  gap: 1rem;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .tagline {
    font-size: 1.25rem;
  }
  
  .typewriter h2 {
    font-size: 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-project-card {
    grid-template-columns: 1fr;
  }
  
  .featured-project-image {
    min-height: 300px;
  }
  
  .featured-project-info {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-project-links {
    flex-direction: column;
  }
}
</style> 