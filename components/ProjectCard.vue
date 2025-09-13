<template>
  <div 
    class="project-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="project-image" :class="{ 'image-hovered': isHovered }">
      <div class="image-overlay"></div>
      <div v-if="project.image" class="real-image">
        <img :src="project.image" :alt="project.title" />
      </div>
      <div v-else class="placeholder-image">
        <span>{{ project.title.charAt(0) }}</span>
      </div>
      <div class="project-quick-actions" :class="{ 'show-actions': isHovered }">
        <a v-if="project.demoLink" :href="project.demoLink" target="_blank" class="quick-action-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Demo
        </a>
        <a v-if="project.codeLink" :href="project.codeLink" target="_blank" class="quick-action-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
          Code
        </a>
      </div>
    </div>

    <div class="project-info">
      <h2>{{ project.title }}</h2>
      <div class="project-tags">
        <span 
          v-for="tag in project.tags" 
          :key="tag" 
          class="tag"
          @click="$emit('filter-by-tag', tag)"
        >
          {{ tag }}
        </span>
      </div>
      <p class="project-description">
        {{ project.description }}
      </p>

      <div class="project-links">
        <button @click="navigateToDetails" class="btn btn-primary">
          <span class="btn-content">Voir plus</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const isHovered = ref(false);
const isExpanded = ref(false);
const description = ref(null);
const hasLongDescription = ref(false);

const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
};

const navigateToDetails = () => {
  router.push(`/project/${props.project.slug}`);
};

defineEmits(['filter-by-tag']);

onMounted(() => {
  if (description.value) {
    hasLongDescription.value = description.value.scrollHeight > 80;
  }
});
</script>

<style scoped>
.project-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(165, 180, 252, 0.2);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.project-image {
  height: 200px;
  position: relative;
  overflow: hidden;
  transition: height 0.3s ease;
}

.image-hovered {
  height: 250px;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  z-index: 1;
  transition: opacity 0.3s ease;
}

.project-quick-actions {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
}

.show-actions {
  opacity: 1;
}

.quick-action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.quick-action-btn svg {
  width: 1.25rem;
  height: 1.25rem;
}

.quick-action-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.real-image {
  width: 100%;
  height: 100%;
}

.real-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: #6b7280;
}

.project-info {
  padding: 1.5rem;
}

.project-info h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tag:hover {
  background: rgba(165, 180, 252, 0.1);
  border-color: rgba(165, 180, 252, 0.2);
  color: #fff;
  transform: translateY(-2px);
}

.project-description {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-description.expanded {
  max-height: 1000px;
}

.read-more-btn {
  background: none;
  border: none;
  color: #a5b4fc;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  color: #fff;
  text-shadow: 0 0 8px rgba(165, 180, 252, 0.5);
}

.project-links {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: white;
}

.btn-primary:hover {
  background: rgba(99, 102, 241, 0.2);
  transform: translateY(-2px);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .project-info h2 {
    font-size: 1.25rem;
  }
  
  .project-image {
    height: 180px;
  }
  
  .image-hovered {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .project-links {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
  
  .project-quick-actions {
    flex-direction: column;
  }
}
</style> 