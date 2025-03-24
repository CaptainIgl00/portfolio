<template>
  <div class="about">
    <div class="container">
      <h1 class="gradient-title">À propos de moi</h1>
      
      <div class="about-content">
        <ProfileCard title="Mathéo Guilloux - Ingénieur DevOps">
          Diplômé de l'<span class="highlight">ENSEEIHT</span> en <span class="highlight">télécommunications</span>, je suis un ingénieur spécialisé <span class="highlight">DevOps</span> passionné par l'automatisation et l'optimisation des processus de développement. <span class="highlight">Flexible</span> et <span class="highlight">autonome</span>, je m'adapte rapidement aux nouveaux environnements techniques. Mon expertise couvre l'ensemble de la chaîne DevOps, du développement au déploiement, en passant par la conteneurisation et l'orchestration.
        </ProfileCard>
        
        <section class="experience">
          <h2 class="section-title">Expérience Professionnelle</h2>
          <div class="timeline">
            <TimelineItem date="Depuis novembre 2023" :featured="true">
              <template #title>
                Ingénieur <span class="highlight">DevOps</span> - <span class="highlight">Airbus Defense & Space</span>
              </template>
              <div class="skills-container">
                <SkillCard>
                  <template #title>Projets Principaux</template>
                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Projet <span class="highlight">POLEOS</span></span>
                    </div>
                    <ul>
                      <li>Mission <span class="highlight">DevSecOps</span> sur segment sol</li>
                      <li>Déploiement d'infrastructures via <span class="highlight">Ansible</span></li>
                      <li>Hardening de VM et configuration d'antivirus</li>
                    </ul>
                  </div>
                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">Développement Interne</span>
                    </div>
                    <ul>
                      <li>Stack : <span class="highlight">Python</span>, <span class="highlight">FastAPI</span>, <span class="highlight">SQLAlchemy</span></li>
                      <li>LLMs avec <span class="highlight">Langchain</span> et <span class="highlight">Ollama</span></li>
                      <li>Méthode <span class="highlight">AGILE</span>, <span class="highlight">GitLab</span>, <span class="highlight">JIRA</span></li>
                    </ul>
                  </div>
                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-name">FreeHopper & Astrocast</span>
                    </div>
                    <ul>
                      <li>Architecture microservices avec <span class="highlight">Docker</span></li>
                      <li>Frontend en <span class="highlight">VueJS</span> avec <span class="highlight">Vite</span>, <span class="highlight">Vuetify</span>, <span class="highlight">TailwindCSS</span></li>
                      <li>Backend <span class="highlight">FastAPI</span>, monitoring <span class="highlight">Grafana</span></li>
                      <li>OS embarqué <span class="highlight">Petalinux</span></li>
                    </ul>
                  </div>
                </SkillCard>
              </div>
            </TimelineItem>
            
            <TimelineItem date="2022 - 2023">
              <template #title>
                Électronicien Produits - <span class="highlight">Continental</span>
              </template>
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">Réalisations Clés</span>
                </div>
                <ul>
                  <li>Développement <span class="highlight">Ultra Wide Band</span></li>
                  <li>Dépôt d'un <span class="highlight">brevet</span></li>
                  <li>Développement d'outils d'automatisation en <span class="highlight">Python</span></li>
                  <li>Optimisation des performances (réduction de 5 jours à 5 minutes)</li>
                </ul>
              </div>
            </TimelineItem>
          </div>
        </section>
        
        <section class="skills">
          <h2 class="section-title">Compétences techniques</h2>
          <div class="skills-container">
            <SkillCard>
              <template #title>DevOps & Cloud</template>
              <ProgressBar name="Docker" level="Expert" :value="5" />
              <ProgressBar name="Kubernetes" level="Avancé" :value="4" />
              <ProgressBar name="Ansible" level="Avancé" :value="4" />
              <ProgressBar name="GitLab CI/CD" level="Avancé" :value="4" />
              <ProgressBar name="Infrastructure as Code" level="Avancé" :value="4" />
            </SkillCard>
            
            <SkillCard>
              <template #title>Développement</template>
              <ProgressBar name="Python" level="Expert" :value="5" />
              <ProgressBar name="JavaScript/TypeScript" level="Avancé" :value="4" />
              <ProgressBar name="C++" level="Avancé" :value="4" />
              <ProgressBar name="Golang" level="Intermédiaire" :value="3" />
              <ProgressBar name="Shell/Bash" level="Avancé" :value="4" />
            </SkillCard>
            
            <SkillCard>
              <template #title>Outils & Frameworks</template>
              <ProgressBar name="FastAPI" level="Expert" :value="5" />
              <ProgressBar name="Vue.js" level="Avancé" :value="4" />
              <ProgressBar name="Grafana/InfluxDB" level="Avancé" :value="4" />
              <ProgressBar name="JIRA/Confluence" level="Avancé" :value="4" />
              <ProgressBar name="TailwindCSS" level="Avancé" :value="4" />
            </SkillCard>
          </div>
        </section>

        <section class="projects">
          <h2 class="section-title">Projets Personnels DevOps</h2>
          <div class="skills-container">
            <SkillCard>
              <template #title>Infrastructure Domotique</template>
              <ul>
                <li>Déploiement de <span class="highlight">Home Assistant</span> sur VM</li>
                <li>Monitoring avec <span class="highlight">ESPHome</span> et <span class="highlight">Grafana</span></li>
                <li>Détection IA avec <span class="highlight">Frigate</span></li>
                <li>Configuration NAS et gestion des flux vidéos</li>
              </ul>
            </SkillCard>
          </div>
        </section>

        <section class="education">
          <h2 class="section-title">Formation</h2>
          <div class="timeline">
            <TimelineItem date="2020 - 2023">
              <template #title>
                <span class="highlight">ENSEEIHT</span> - Diplôme d'ingénieur
              </template>
              <p>Spécialisation en <span class="highlight">systèmes communicants</span> et <span class="highlight">développement logiciel</span></p>
            </TimelineItem>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProfileCard from '../components/ProfileCard.vue';
import TimelineItem from '../components/TimelineItem.vue';
import SkillCard from '../components/SkillCard.vue';
import ProgressBar from '../components/ProgressBar.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animation des sections au scroll
  gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out'
    });
  });
});
</script>

<style scoped>
.about {
  padding: 4rem 0;
  color: white;
  min-height: 100vh;
  background: #0f172a;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.gradient-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

.timeline {
  position: relative;
  padding: 2rem 0;
  display: grid;
  gap: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, rgba(165, 180, 252, 0.3), rgba(165, 180, 252, 0.1));
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: start;
}

.highlight {
  color: #a5b4fc;
  font-weight: 500;
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #a5b4fc;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.highlight:hover {
  color: #fff;
  text-shadow: 0 0 8px rgba(165, 180, 252, 0.5);
}

.highlight:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-header {
  margin-bottom: 0.75rem;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }

  .gradient-title {
    font-size: 2rem;
  }
  
  .timeline {
    padding-left: 1rem;
  }
  
  .timeline::before {
    left: 0;
  }

  .skills-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.5rem;
  }
  
  .about-content {
    gap: 3rem;
  }
}
</style> 