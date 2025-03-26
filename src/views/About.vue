<template>
  <div class="min-h-screen py-16 text-white bg-gradient-to-br from-slate-900 to-slate-800">
    <div class="w-full max-w-7xl mx-auto px-4">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent mb-4">MATHEO GUILLOUX</h1>
        <h2 class="text-2xl md:text-3xl text-primary-300 font-medium mb-4">INGÉNIEUR DEVOPS</h2>
        <div class="flex items-center justify-center gap-2 text-slate-400">
          <span class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            Toulouse, France
          </span>
        </div>
      </div>

      <!-- Présentation -->
      <div class="mb-16">
        <ProfileCard title="Ingénieur DevOps & Systèmes Communicants">
          Diplômé de l'<span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">ENSEEIHT</span> en <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">télécommunications</span>, je suis un ingénieur spécialisé <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">DevOps</span> passionné par l'automatisation et l'optimisation des processus de développement. <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Flexible</span>, <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">curieux</span> et <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">autonome</span>, je m'adapte rapidement aux nouveaux environnements techniques. Mon expertise couvre l'ensemble de la chaîne DevOps, du développement au déploiement, en passant par la conteneurisation et l'orchestration.
        </ProfileCard>
      </div>

      <!-- Compétences -->
      <section class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent text-center">Compétences Techniques</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent text-center">Expérience Professionnelle</h2>
        <div class="relative py-8 grid gap-8">
          <div class="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary-300/30 to-primary-300/10"></div>
          
          <TimelineItem date="Depuis novembre 2023" :featured="true">
            <template #title>
              Ingénieur <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">DevOps</span> - <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Airbus Defense & Space</span>
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div class="mb-4 text-slate-200">
                  <p class="mb-2 text-slate-400">Lead DevOps sur le projet POLEOS et responsable de la modernisation de l'infrastructure. Mise en place d'une culture DevSecOps et d'une approche Cloud-Native.</p>
                </div>
                <div class="mb-2 text-slate-200 font-medium">Infrastructure & Sécurité</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Mise en place d'une <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Infrastructure as Code</span> avec Ansible</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Déploiement d'un cluster <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Kubernetes</span> hautement disponible</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Implémentation de politiques <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">DevSecOps</span> et hardening</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Mise en place de <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">GitLab CI/CD</span> pour le déploiement continu</li>
                </ul>
              </div>
              <div>
                <div class="mb-2 text-slate-200 font-medium">Innovation & Automatisation</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Architecture microservices avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Docker</span> et <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Kubernetes</span></li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Développement d'APIs avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">FastAPI</span> et <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">SQLAlchemy</span></li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Intégration de <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">LLMs</span> pour l'automatisation des tâches</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Monitoring avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Prometheus</span> et <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Grafana</span></li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Optimisation des pipelines CI/CD avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">GitLab Runners</span></li>
                </ul>
              </div>
            </div>
          </TimelineItem>
          
          <TimelineItem date="2022 - 2023">
            <template #title>
              Électronicien Produits - <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Continental Automotive</span>
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div class="mb-4 text-slate-400">
                  Mise en place d'une approche DevOps pour l'automatisation des bancs de tests RF et l'optimisation des processus de développement.
                </div>
                <div class="mb-2 text-slate-200 font-medium">Automatisation & CI/CD</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Développement d'une pipeline <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">CI/CD</span> pour les tests automatisés</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Conteneurisation des environnements de test avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Docker</span></li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Optimisation des performances (5 jours → 5 minutes)</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Dépôt d'un <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">brevet</span> sur l'automatisation RF</li>
                </ul>
              </div>
              <div>
                <div class="mb-2 text-slate-200 font-medium">Infrastructure & Monitoring</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Mise en place d'un monitoring temps réel avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Grafana</span></li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Développement d'APIs REST avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">FastAPI</span></li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Intégration <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Git</span> et gestion des versions</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Automatisation avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Python</span> et <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Shell</span></li>
                </ul>
              </div>
            </div>
          </TimelineItem>
        </div>
      </section>

      <!-- Projets Personnels -->
      <section class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent text-center">Projets Personnels</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard>
            <template #title>Infrastructure Domotique</template>
            <ul class="space-y-2 list-none pl-5">
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Architecture <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Infrastructure as Code</span> avec Ansible</li>
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Cluster <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Kubernetes</span> sur Raspberry Pi</li>
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Monitoring avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Prometheus</span> et <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Grafana</span></li>
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">CI/CD avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">GitLab</span> pour le déploiement continu</li>
            </ul>
          </SkillCard>

          <SkillCard>
            <template #title>Caméra Thermique DIY</template>
            <ul class="space-y-2 list-none pl-5">
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Design PCB avec capteur <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">MLX90640</span></li>
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Programmation <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">ESP32</span> et écran ILI9341</li>
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Modélisation et impression 3D du boîtier</li>
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Interpolation et traitement d'image</li>
            </ul>
          </SkillCard>

          <SkillCard>
            <template #title>Projets Web</template>
            <ul class="space-y-2 list-none pl-5">
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Site web restaurant avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">NuxtJS</span> + <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">Firebase</span></li>
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Portfolio personnel en <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">VueJS</span></li>
              <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Applications web avec <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">TailwindCSS</span></li>
            </ul>
          </SkillCard>
        </div>
      </section>

      <!-- Formation -->
      <section class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent text-center">Formation</h2>
        <div class="relative py-8 grid gap-8">
          <div class="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary-300/30 to-primary-300/10"></div>
          <TimelineItem date="2020 - 2023">
            <template #title>
              <span class="text-primary-300 font-medium hover:text-white hover:shadow-[0_0_8px_rgba(165,180,252,0.5)] transition-all duration-300">ENSEEIHT</span> - Diplôme d'ingénieur
            </template>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div class="mb-2 text-slate-200 font-medium">Spécialisation</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Systèmes communicants</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Développement logiciel</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Systèmes hautes fréquences embarqués</li>
                </ul>
              </div>
              <div>
                <div class="mb-2 text-slate-200 font-medium">Points Clés</div>
                <ul class="space-y-2 list-none pl-5">
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Projet Nanosatellite</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Club de robotique</li>
                  <li class="relative text-slate-400 before:content-['•'] before:absolute before:left-[-1.25rem] before:text-primary-300">Projet radar</li>
                </ul>
              </div>
            </div>
          </TimelineItem>
        </div>
      </section>

      <!-- Langues -->
      <section>
        <h2 class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent text-center">Langues</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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