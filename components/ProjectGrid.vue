<template>
  <TransitionGroup 
    name="projects"
    tag="div"
    class="projects-grid"
  >
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.title"
      :project="project"
      :style="{ animationDelay: `${index * 0.1}s` }"
      @filter-by-tag="$emit('filter-by-tag', $event)"
    />
  </TransitionGroup>
</template>

<script setup>
import { TransitionGroup } from 'vue';
import ProjectCard from './ProjectCard.vue';

defineProps({
  projects: {
    type: Array,
    required: true
  }
});

defineEmits(['filter-by-tag']);
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.projects-move {
  transition: transform 0.6s ease;
}

.projects-enter-active,
.projects-leave-active {
  transition: all 0.6s ease;
}

.projects-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.projects-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.projects-leave-active {
  position: absolute;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 