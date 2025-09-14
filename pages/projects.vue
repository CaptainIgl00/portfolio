<template>
  <div class="projects">
    <div class="container">
      <h1 class="gradient-title" data-section="projects-header">{{ $t('projects.title') }}</h1>
      
      <ProjectFilter
        v-model="activeFilter"
        :filters="filters"
        :counts="filterCounts"
      />
      
      <ProjectGrid
        :projects="filteredProjects"
        @filter-by-tag="setFilter"
        data-section="projects-grid"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectFilter from '~/components/ProjectFilter.vue'
import ProjectGrid from '~/components/ProjectGrid.vue'
import { projects as projectsList } from '~/data/projects'

// Meta pour le SEO
const { $t } = useNuxtApp()
useHead({
  title: computed(() => $t('projects.metaTitle')),
  meta: [
    { name: 'description', content: computed(() => $t('projects.metaDescription')) }
  ]
})

gsap.registerPlugin(ScrollTrigger)

// Liste des filtres disponibles
const filters = ['Tous', 'Web', 'DevOps', 'IoT', 'IA', 'Automatisation']

// Filtre actif
const activeFilter = ref('Tous')

// Calcul des compteurs pour chaque filtre
const filterCounts = computed(() => {
  const counts = {}
  filters.forEach(filter => {
    if (filter === 'Tous') {
      counts[filter] = projectsList.length
    } else {
      counts[filter] = projectsList.filter(project => 
        project.tags.includes(filter)
      ).length
    }
  })
  return counts
})

// Projets filtrés
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') {
    return projectsList
  }
  return projectsList.filter(project => 
    project.tags.includes(activeFilter.value)
  )
})

// Fonction pour définir un filtre
const setFilter = (filterId) => {
  activeFilter.value = filterId
}

// Animation d'entrée
onMounted(() => {
  gsap.from('.gradient-title', {
    scrollTrigger: {
      trigger: '.gradient-title',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  })
})
</script>

<style scoped>
.projects {
  padding: 2rem 0;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.gradient-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media (max-width: 768px) {
  .gradient-title {
    font-size: 2rem;
  }
}
</style>
