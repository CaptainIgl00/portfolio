<template>
  <div class="min-h-screen overflow-x-hidden py-2 sm:py-8 lg:py-16 text-white bg-gradient-to-br from-slate-900 to-slate-800">
    <div class="w-full max-w-7xl mx-auto px-1 sm:px-4 lg:px-8">
      <!-- En-tête -->
      <div class="text-center mb-4 sm:mb-12 lg:mb-16">
        <h1 class="text-xl sm:text-3xl lg:text-6xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent mb-1 sm:mb-4 tracking-tight leading-tight">MATHEO CHAMPAGNE</h1>
        <h2 class="text-base sm:text-2xl lg:text-3xl text-primary-300 font-medium mb-1 sm:mb-4">INGÉNIEUR DEVOPS</h2>
        <div class="flex items-center justify-center gap-1 sm:gap-2 text-slate-400 text-xs sm:text-base">
          <span class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 sm:h-5 w-3 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            Toulouse, France
          </span>
        </div>
      </div>

      <!-- Présentation -->
      <div class="mb-4 sm:mb-12 lg:mb-16 px-1 sm:px-0">
        <ProfileCard title="Ingénieur DevOps & Systèmes Communicants">
          <p class="text-xs sm:text-lg text-slate-400">
            Diplômé de l'<span class="highlight-text">ENSEEIHT</span> en <span class="highlight-text">télécommunications</span>, je suis un ingénieur spécialisé <span class="highlight-text">DevOps</span> passionné par l'automatisation et l'optimisation des processus de développement. <span class="highlight-text">Flexible</span>, <span class="highlight-text">curieux</span> et <span class="highlight-text">autonome</span>, je m'adapte rapidement aux nouveaux environnements techniques. Mon expertise couvre l'ensemble de la chaîne DevOps, du développement au déploiement, en passant par la conteneurisation et l'orchestration.
          </p>
        </ProfileCard>
      </div>

      <!-- Compétences -->
      <section class="mb-4 sm:mb-12 lg:mb-16 px-1 sm:px-0" data-section="skills">
        <h2 class="section-title">Compétences Techniques</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
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
            <ProgressBar name="C++" level="Avancé" :value="4" />
            <ProgressBar name="JavaScript/TypeScript" level="Avancé" :value="4" />
            <ProgressBar name="Golang" level="Intermédiaire" :value="3" />
            <ProgressBar name="Shell/Bash" level="Avancé" :value="4" />
          </SkillCard>
          
          <SkillCard>
            <template #title>Radiofréquences</template>
            <ProgressBar name="Analyseur de spectre" level="Expert" :value="5" />
            <ProgressBar name="Communications numériques" level="Expert" :value="5" />
            <ProgressBar name="Traitement du signal" level="Avancé" :value="4" />
            <ProgressBar name="Stations sol" level="Expert" :value="5" />
            <ProgressBar name="Antennes" level="Expert" :value="5" />
          </SkillCard>
        </div>
      </section>

      <!-- Expérience -->
      <section class="mb-4 sm:mb-12 lg:mb-16 px-1 sm:px-0" data-section="experience">
        <h2 class="section-title">Expérience Professionnelle</h2>
        <div class="relative py-2 sm:py-8 grid gap-3 sm:gap-8">
          <div class="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary-300/30 to-primary-300/10"></div>
          
          <TimelineItem 
            date="Depuis janvier 2025" 
            :featured="true"
            blog-path="poleos"
          >
            <template #title>
              Projet <span class="highlight-text">POLEOS</span> - <span class="highlight-text">Airbus Defense & Space</span>
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div class="mb-4 text-slate-200">
                  <p class="mb-2 text-slate-400">Modernisation et automatisation du segment sol des satellites d'observation de la Terre livrés à la Pologne. Implémentation de solutions innovantes basées sur les LLMs et les pratiques DevOps modernes.</p>
                </div>
                <div class="mb-2 text-slate-200 font-medium">DevOps & Automatisation</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Mise en place d'une approche <span class="highlight-text">Infrastructure as Code</span> avec Ansible</li>
                  <li class="list-item-tech">Développement de pipelines <span class="highlight-text">GitLab CI</span> et déploiement de GitLab Runners</li>
                  <li class="list-item-tech">Conteneurisation avec <span class="highlight-text">Docker</span> et orchestration via <span class="highlight-text">Kubernetes</span></li>
                  <li class="list-item-tech">Implémentation de pratiques <span class="highlight-text">GitOps</span> et politiques <span class="highlight-text">DevSecOps</span></li>
                </ul>
              </div>
              <div>
                <div class="mb-2 text-slate-200 font-medium">Innovation & IA</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Intégration de <span class="highlight-text">modèles LLM</span> via Ollama pour l'assistance au développement</li>
                  <li class="list-item-tech">Développement d'un générateur de documentation intelligent avec <span class="highlight-text">Langchain</span></li>
                  <li class="list-item-tech">Développement d'outils Cloud-Native avec <span class="highlight-text">FastAPI</span> et <span class="highlight-text">SQLAlchemy</span></li>
                  <li class="list-item-tech">Monitoring avancé avec <span class="highlight-text">Grafana</span> et métriques personnalisées</li>
                  <li class="list-item-tech">Hardening des VM <span class="highlight-text">Ubuntu</span> et <span class="highlight-text">Red Hat</span></li>
                </ul>
              </div>
            </div>
          </TimelineItem>

          <TimelineItem 
            date="Mars - Décembre 2024"
            blog-path="freehopper"
          >
            <template #title>
              Projet <span class="highlight-text">FreeHopper</span> - <span class="highlight-text">Airbus Defense & Space</span>
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div class="mb-4 text-slate-200">
                  <p class="mb-2 text-slate-400">Projet R&D démontrant la faisabilité du Beam Hopping pour les communications satellites. Développement d'une architecture microservices moderne pour l'automatisation des tests RF.</p>
                </div>
                <div class="mb-2 text-slate-200 font-medium">Architecture & DevOps</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Développement frontend avec <span class="highlight-text">VueJS</span> et <span class="highlight-text">TailwindCSS</span></li>
                  <li class="list-item-tech">API REST avec <span class="highlight-text">FastAPI</span> et scrappers en <span class="highlight-text">Golang</span></li>
                  <li class="list-item-tech">Architecture microservices avec <span class="highlight-text">Docker Compose</span></li>
                  <li class="list-item-tech">Déploiement sur serveur <span class="highlight-text">Ubuntu</span> avec scripts automatisés</li>
                </ul>
              </div>
              <div>
                <div class="mb-2 text-slate-200 font-medium">Automatisation & Monitoring</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Framework de test complet avec configuration dynamique</li>
                  <li class="list-item-tech">Monitoring temps réel avec <span class="highlight-text">Grafana</span> et <span class="highlight-text">InfluxDB</span></li>
                  <li class="list-item-tech">Réduction du temps de test de 30 minutes à quelques clics</li>
                  <li class="list-item-tech">Développement accéléré avec <span class="highlight-text">Cursor IDE</span></li>
                  <li class="list-item-tech">Gestion multi-protocoles (HTTP, SPI, USB, propriétaire)</li>
                </ul>
              </div>
            </div>
          </TimelineItem>

          <TimelineItem 
            date="Janvier - Mars 2024"
            blog-path="astrocast"
          >
            <template #title>
              Projet <span class="highlight-text">Astrocast</span> - <span class="highlight-text">Airbus Defense & Space</span>
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div class="mb-4 text-slate-200">
                  <p class="mb-2 text-slate-400">Modernisation de l'infrastructure logicielle embarquée pour les satellites IoT d'Astrocast. Migration et optimisation d'un système legacy Petalinux vers une architecture moderne et maintenable.</p>
                </div>
                <div class="mb-2 text-slate-200 font-medium">DevOps & Modernisation</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Mise en place d'environnements <span class="highlight-text">Docker</span> pour Ubuntu 16</li>
                  <li class="list-item-tech">Migration vers <span class="highlight-text">GitLab</span> avec implémentation de submodules</li>
                  <li class="list-item-tech">Standardisation de l'environnement de développement</li>
                  <li class="list-item-tech">Configuration reproductible et isolation des dépendances</li>
                </ul>
              </div>
              <div>
                <div class="mb-2 text-slate-200 font-medium">Embedded & Documentation</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Optimisation du code <span class="highlight-text">C++</span> et <span class="highlight-text">Petalinux</span></li>
                  <li class="list-item-tech">Rédaction exhaustive de documentation technique</li>
                  <li class="list-item-tech">Résolution de bugs critiques et refactoring</li>
                  <li class="list-item-tech">Standardisation des processus <span class="highlight-text">DevOps</span></li>
                </ul>
              </div>
            </div>
          </TimelineItem>

          <TimelineItem 
            date="Septembre - Décembre 2023"
            blog-path="madiran"
          >
            <template #title>
              Projet <span class="highlight-text">TELEO</span> - <span class="highlight-text">Airbus Defense & Space</span> & <span class="highlight-text">ONERA</span>
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div class="mb-4 text-slate-200">
                  <p class="mb-2 text-slate-400">Développement d'une architecture microservices pour les communications optiques laser entre satellites et stations sol. Collaboration étroite entre Airbus DS et l'ONERA pour démontrer la faisabilité des télécommunications optiques haute performance.</p>
                </div>
                <div class="mb-2 text-slate-200 font-medium">Architecture & Communication</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Architecture microservices <span class="highlight-text">Docker</span> pour liaison GS-MCC</li>
                  <li class="list-item-tech">Support multi-protocoles (<span class="highlight-text">CCSDS</span>, <span class="highlight-text">InfluxDB</span>)</li>
                  <li class="list-item-tech">Transmission temps réel des données météo et métriques</li>
                  <li class="list-item-tech">Interface <span class="highlight-text">PyQt6</span> pour pilotage des tests</li>
                </ul>
              </div>
              <div>
                <div class="mb-2 text-slate-200 font-medium">Data Engineering & Tests</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Migration <span class="highlight-text">Matlab</span> vers <span class="highlight-text">Python</span></li>
                  <li class="list-item-tech">Tests unitaires avec <span class="highlight-text">Pytest</span> et <span class="highlight-text">Paramiko</span></li>
                  <li class="list-item-tech">Visualisation <span class="highlight-text">Matplotlib</span> et GIFs explicatifs</li>
                  <li class="list-item-tech">Monitoring <span class="highlight-text">Grafana</span> temps réel</li>
                </ul>
              </div>
            </div>
          </TimelineItem>

          <TimelineItem 
            date="Juin 2022 - Septembre 2023"
            blog-path="uwb"
          >
            <template #title>
              Apprenti Ingénieur R&D RF - <span class="highlight-text">Continental Automotive</span>
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div class="mb-4 text-slate-400">
                  Développement de bancs de tests RF innovants et dépôt d'un brevet sur la technologie Ultra Wide Band (UWB). Conception et implémentation de solutions d'automatisation pour la caractérisation RF.
                </div>
                <div class="mb-2 text-slate-200 font-medium">Innovation & Bancs de Test</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Dépôt d'un <span class="highlight-text">brevet UWB</span> avec preuve de concept IA</li>
                  <li class="list-item-tech">Banc de test <span class="highlight-text">BLE</span> pour capteurs TPMS</li>
                  <li class="list-item-tech">Automatisation chambre anéchoïque avec <span class="highlight-text">Arduino</span> et <span class="highlight-text">Rhode&Schwarz</span></li>
                  <li class="list-item-tech">Cartographie UWB véhicule avec <span class="highlight-text">LiDAR</span> et <span class="highlight-text">CAN Bus</span></li>
                </ul>
              </div>
              <div>
                <div class="mb-2 text-slate-200 font-medium">Architecture & Performance</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Interface temps réel avec <span class="highlight-text">PyQt6</span> et <span class="highlight-text">PyQtGraph</span></li>
                  <li class="list-item-tech">Optimisation par <span class="highlight-text">multithreading</span> et <span class="highlight-text">NumPy</span></li>
                  <li class="list-item-tech">Tests autonomes longue durée (24/7)</li>
                  <li class="list-item-tech">Algorithmes d'interpolation avancés</li>
                  <li class="list-item-tech">Visualisation de données RF en temps réel</li>
                </ul>
              </div>
            </div>
          </TimelineItem>

        </div>
      </section>

      <!-- Certifications -->
      <section class="mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0" data-section="certifications">
        <h2 class="section-title">Certifications</h2>
        <div class="flex justify-center">
          <div class="w-full sm:w-[28rem] md:w-96">
            <div v-for="cert in certifications" :key="cert.title" class="mb-4">
              <SkillCard>
                <template #title>{{ cert.title }} <span class="text-primary-300">•</span> {{ cert.provider }}</template>
                <div class="text-center text-slate-400 mb-4">
                  <p class="mb-2">{{ cert.rank }}</p>
                  <p class="text-sm">{{ cert.year }}</p>
                </div>
                <div class="text-slate-400 mb-4 text-center">
                  {{ cert.description }}
                </div>
                <ul class="space-y-2 list-none pl-5">
                  <li v-for="achievement in cert.achievements" :key="achievement" class="list-item-tech">
                    {{ achievement }}
                  </li>
                </ul>
              </SkillCard>
            </div>
          </div>
        </div>
      </section>

      <!-- Projets Personnels -->
      <section class="mb-4 sm:mb-12 lg:mb-16 px-1 sm:px-0" data-section="personal-projects">
        <h2 class="section-title">Projets Personnels</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          <SkillCard>
            <template #title>
              <div class="flex items-center justify-between">
                <span>Home Lab & Domotique</span>
                <NuxtLink 
                  to="/project/home-lab" 
                  class="text-primary-300 hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300 text-sm font-medium"
                >
                  Lire →
                </NuxtLink>
              </div>
            </template>
            <ul class="space-y-2 list-none pl-5">
              <li class="list-item-tech">Monitoring énergétique avec <span class="highlight-text">PZEM</span> et <span class="highlight-text">ESPHome</span></li>
              <li class="list-item-tech">Développement <span class="highlight-text">HACS-Tiko</span> pour contrôle des radiateurs</li>
              <li class="list-item-tech">Vidéosurveillance IA avec <span class="highlight-text">Frigate</span> et détection d'objets</li>
              <li class="list-item-tech">VM <span class="highlight-text">Home Assistant</span> sur Freebox Ultra</li>
              <li class="list-item-tech">Automatisation complète avec <span class="highlight-text">MQTT</span></li>
            </ul>
          </SkillCard>

          <SkillCard>
            <template #title>Caméra Thermique DIY</template>
            <ul class="space-y-2 list-none pl-5">
              <li class="list-item-tech">Design PCB avec capteur <span class="highlight-text">MLX90640</span></li>
              <li class="list-item-tech">Programmation <span class="highlight-text">ESP32</span> et écran ILI9341</li>
              <li class="list-item-tech">Modélisation et impression 3D du boîtier</li>
              <li class="list-item-tech">Interpolation et traitement d'image</li>
            </ul>
          </SkillCard>

          <SkillCard>
            <template #title>
              <div class="flex items-center justify-between">
                <span>Projets Web Full-Stack</span>
                <NuxtLink 
                  to="/project/brasserie-chez-ju" 
                  class="text-primary-300 hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300 text-sm font-medium"
                >
                  Lire →
                </NuxtLink>
              </div>
            </template>
            <ul class="space-y-2 list-none pl-5">
              <li class="list-item-tech">Site restaurant avec <span class="highlight-text">Nuxt 3</span>, <span class="highlight-text">FastAPI</span> et <span class="highlight-text">Directus CMS</span></li>
              <li class="list-item-tech">Optimisation SEO (score Lighthouse > 90)</li>
              <li class="list-item-tech">Portfolio avec <span class="highlight-text">VueJS</span> et <span class="highlight-text">TailwindCSS</span></li>
              <li class="list-item-tech">Infrastructure <span class="highlight-text">Docker</span> et <span class="highlight-text">Traefik</span></li>
              <li class="list-item-tech">CI/CD avec <span class="highlight-text">GitHub Actions</span></li>
            </ul>
          </SkillCard>
        </div>
      </section>

      <!-- Formation -->
      <section class="mb-4 sm:mb-12 lg:mb-16 px-1 sm:px-0" data-section="education">
        <h2 class="section-title">Formation</h2>
        <div class="relative py-2 sm:py-8 grid gap-3 sm:gap-8">
          <div class="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary-300/30 to-primary-300/10"></div>
          <TimelineItem date="2020 - 2023">
            <template #title>
              <span class="highlight-text">ENSEEIHT</span> - Diplôme d'ingénieur
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div class="mb-4 text-slate-400">
                  Formation d'excellence en électronique et télécommunications à Toulouse INP. Spécialisation en systèmes embarqués et communications numériques.
                </div>
                <div class="mb-2 text-slate-200 font-medium">Spécialisation</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Communications numériques et <span class="highlight-text">RF</span></li>
                  <li class="list-item-tech">Systèmes embarqués et <span class="highlight-text">FPGA</span></li>
                  <li class="list-item-tech">Traitement du signal et <span class="highlight-text">IA</span></li>
                  <li class="list-item-tech">Architecture des systèmes communicants</li>
                </ul>
              </div>
              <div>
                <div class="mb-2 text-slate-200 font-medium">Projets Académiques</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Projet <span class="highlight-text">Nanosatellite</span> - Communications spatiales</li>
                  <li class="list-item-tech">Conception <span class="highlight-text">RADAR</span> - Traitement du signal</li>
                  <li class="list-item-tech">Club robotique - Systèmes embarqués temps réel</li>
                </ul>
              </div>
            </div>
          </TimelineItem>
          <TimelineItem date="2018 - 2020">
            <template #title>
              <span class="highlight-text">Classe Préparatoire PSI</span> - <span class="highlight-text">Lycée Arago</span>
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div class="mb-4 text-slate-400">
                  Préparation intensive pour les concours d'entrée dans les grandes écoles d'ingénieurs. Spécialisation en physique, sciences de l'ingénieur et mathématiques. Major de la promotion.
                </div>
                <div class="mb-2 text-slate-200 font-medium">Matières</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="list-item-tech">Mathématiques</li>
                  <li class="list-item-tech">Physique</li>
                  <li class="list-item-tech">Sciences de l'ingénieur</li>
                  <li class="list-item-tech">Français</li>
                  <li class="list-item-tech">Anglais</li>
                </ul>
              </div>
            </div>
          </TimelineItem>
        </div>
      </section>

      <!-- Langues -->
      <section class="px-1 sm:px-0" data-section="languages">
        <h2 class="section-title">Langues</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          <SkillCard>
            <template #title>Anglais</template>
            <div class="text-center text-slate-400">
              <p class="mb-2">Niveau C1</p>
              <p class="text-sm">Score CECRL 180+</p>
            </div>
          </SkillCard>
          
          <SkillCard>
            <template #title>Espagnol</template>
            <div class="text-center text-slate-400">
              <p>Niveau B1</p>
            </div>
          </SkillCard>
          
          <SkillCard>
            <template #title>Chinois</template>
            <div class="text-center text-slate-400">
              <p>Débutant</p>
              <p class="text-sm">2 ans de cours</p>
            </div>
          </SkillCard>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProfileCard from '~/components/ProfileCard.vue'
import TimelineItem from '~/components/TimelineItem.vue'
import SkillCard from '~/components/SkillCard.vue'
import ProgressBar from '~/components/ProgressBar.vue'
import { certifications } from '~/data/certifications'

// Meta pour le SEO
useHead({
  title: 'À propos - Matheo Champagne',
  meta: [
    { name: 'description', content: 'Découvrez le parcours et les compétences de Matheo Champagne, Ingénieur DevOps spécialisé en infrastructure cloud et développement' }
  ]
})

gsap.registerPlugin(ScrollTrigger)

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
    })
  })
})
</script>

<style>
.highlight-text {
  @apply text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300;
}

.list-item-tech {
  @apply relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300 text-xs sm:text-base;
}

.section-title {
  @apply text-lg sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-8 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent text-center;
}
</style>
