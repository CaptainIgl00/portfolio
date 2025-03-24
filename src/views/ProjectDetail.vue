<template>
  <div class="project-detail-view">
    <div v-if="project" class="container">
      <ProjectDetail :project="project" />
    </div>
    <div v-else class="container">
      <div class="error-message">
        <h1>Projet non trouvé</h1>
        <p>Le projet que vous recherchez n'existe pas.</p>
        <router-link to="/projects" class="back-btn">
          Retour aux projets
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProjectDetail from '../components/ProjectDetail.vue';
import { projects } from '../data/projects';

const route = useRoute();

// Utilisation directe des projets importés
const project = computed(() => {
  return projects.find(p => p.slug === route.params.slug);
});
</script>

<style scoped>
.project-detail-view {
  min-height: 100vh;
  background: #0f172a;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 4rem 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.error-message {
  text-align: center;
  color: white;
  padding: 4rem 0;
}

.error-message h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.error-message p {
  color: #94a3b8;
  margin-bottom: 2rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 0.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: rgba(99, 102, 241, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .project-detail-view {
    padding: 2rem 0;
  }
}
</style> 