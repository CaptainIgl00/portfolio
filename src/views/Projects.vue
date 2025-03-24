<template>
  <div class="projects">
    <div class="container">
      <h1 class="gradient-title">Mes Projets</h1>
      
      <ProjectFilter
        v-model="activeFilter"
        :filters="filters"
        :counts="filterCounts"
      />
      
      <ProjectGrid
        :projects="filteredProjects"
        @filter-by-tag="setFilter"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectFilter from '../components/ProjectFilter.vue';
import ProjectGrid from '../components/ProjectGrid.vue';
import { projects as projectsList } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

// Liste des filtres disponibles
const filters = ["Tous", "DevOps", "RF", "Web", "IoT", "Hardware"];
const activeFilter = ref("Tous");

const setFilter = (filter) => {
  activeFilter.value = filter;
};

// Liste des projets
const projects = ref(projectsList);

const filteredProjects = computed(() => {
  if (activeFilter.value === "Tous") {
    return projects.value;
  }
  return projects.value.filter(project => 
    project.tags.includes(activeFilter.value)
  );
});

const filterCounts = computed(() => {
  const counts = { Tous: projects.value.length };
  filters.forEach(filter => {
    if (filter !== "Tous") {
      counts[filter] = projects.value.filter(project => 
        project.tags.includes(filter)
      ).length;
    }
  });
  return counts;
});

onMounted(() => {
  // Animation du titre
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
  });
});
</script>

<style scoped>
.projects {
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

@media (max-width: 768px) {
  .gradient-title {
    font-size: 2rem;
  }
}
</style> 