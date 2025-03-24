<template>
  <div class="project-detail">
    <router-link to="/projects" class="back-link">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      Retour aux projets
    </router-link>

    <div class="project-grid">
      <div class="project-content">
        <div class="project-header">
          <h1>{{ project.title }}</h1>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="project-image" v-if="project.image">
          <img :src="project.image" :alt="project.title" />
        </div>

        <div class="project-links" v-if="project.demoLink || project.codeLink">
          <a v-if="project.demoLink" :href="project.demoLink" target="_blank" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Voir la démo
          </a>
          <a v-if="project.codeLink" :href="project.codeLink" target="_blank" class="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            Voir le code
          </a>
        </div>

        <div class="markdown-body" v-html="markdownContent"></div>
      </div>

      <div class="project-sidebar">
        <div class="project-highlights" v-if="project.highlights">
          <h2>Points clés</h2>
          <div class="highlights-grid">
            <div class="highlight-item" v-for="(highlight, index) in project.highlights" :key="index">
              <div class="highlight-icon" v-html="highlight.icon"></div>
              <h3>{{ highlight.title }}</h3>
              <p>{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { marked } from 'marked';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const markdownContent = ref('');

onMounted(async () => {
  try {
    const response = await fetch(`/projects/markdown/${props.project.markdownFile}`);
    const markdown = await response.text();
    markdownContent.value = marked(markdown);
  } catch (error) {
    console.error('Erreur lors du chargement du markdown:', error);
    markdownContent.value = '<p>Erreur lors du chargement du contenu.</p>';
  }
});
</script>

<style scoped>
.project-detail {
  color: white;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  text-decoration: none;
  margin-bottom: 2rem;
  margin-left: 0;
  transition: all 0.2s ease;
  font-weight: 500;
}

.back-link svg {
  width: 1.25rem;
  height: 1.25rem;
}

.back-link:hover {
  color: white;
  transform: translateX(-4px);
}

.project-grid {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
  gap: 6rem;
  align-items: start;
  margin: 0;
}

.project-content {
  margin-left: 0;
  padding-right: 2rem;
}

.project-header {
  margin-bottom: 3rem;
  text-align: left;
}

.project-header h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-align: left;
  max-width: 900px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
}

.tag {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tag:hover {
  background: rgba(165, 180, 252, 0.1);
  border-color: rgba(165, 180, 252, 0.2);
  color: white;
  transform: translateY(-2px);
}

.project-image {
  margin: 3rem 0;
  margin-right: -8rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(165, 180, 252, 0.1), transparent);
  pointer-events: none;
}

.project-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.project-image:hover img {
  transform: scale(1.02);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
  justify-content: flex-start;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 0.875rem;
}

.btn svg {
  width: 1.25rem;
  height: 1.25rem;
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

.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.project-sidebar {
  position: sticky;
  top: 5rem;
  margin-inline: 1rem;
  height: fit-content;
  margin-right: 0;
}

.project-highlights {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.project-highlights h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.highlights-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.highlight-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.highlight-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(165, 180, 252, 0.2);
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.2);
}

.highlight-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #a5b4fc;
  margin-bottom: 1rem;
}

.highlight-icon svg {
  width: 100%;
  height: 100%;
}

.highlight-item h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
}

.highlight-item p {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

.markdown-body {
  color: #94a3b8;
  font-size: 1.125rem;
  line-height: 1.8;
  max-width: 800px;
  text-align: left;
}

:deep(.markdown-body h2) {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 4rem 0 1.5rem;
  color: white;
  border-bottom: none;
  padding-bottom: 0;
  letter-spacing: -0.02em;
  text-align: left;
  max-width: 800px;
}

:deep(.markdown-body h3) {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 2.5rem 0 1rem;
  color: #a5b4fc;
  letter-spacing: -0.01em;
  text-align: left;
}

:deep(.markdown-body p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  text-align: left;
}

:deep(.markdown-body ul) {
  list-style: none;
  margin: 2rem 0;
  padding-left: 0;
  text-align: left;
}

:deep(.markdown-body li) {
  margin-bottom: 1rem;
  line-height: 1.6;
  padding-left: 2rem;
  position: relative;
  text-align: left;
}

:deep(.markdown-body li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0.8rem;
  width: 6px;
  height: 6px;
  background: #a5b4fc;
  border-radius: 1px;
  transform: rotate(45deg);
  box-shadow: 0 0 10px rgba(165, 180, 252, 0.3);
}

:deep(.markdown-body strong) {
  color: white;
  font-weight: 600;
  background: linear-gradient(135deg, rgba(165, 180, 252, 0.2), transparent);
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  margin: 0 0.1em;
}

:deep(.markdown-body a) {
  color: #a5b4fc;
  text-decoration: none;
  border-bottom: 1px solid rgba(165, 180, 252, 0.2);
  transition: all 0.2s ease;
}

:deep(.markdown-body a:hover) {
  color: white;
  border-bottom-color: #a5b4fc;
}

:deep(.markdown-body blockquote) {
  margin: 2rem 0;
  padding: 1.5rem 2rem;
  border-left: 4px solid #a5b4fc;
  background: rgba(165, 180, 252, 0.05);
  border-radius: 0 1rem 1rem 0;
  font-style: italic;
}

:deep(.markdown-body blockquote p) {
  margin: 0;
  color: #cbd5e1;
}

:deep(.markdown-body code) {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  font-size: 0.9em;
  color: #e2e8f0;
  font-family: 'JetBrains Mono', monospace;
}

:deep(.markdown-body pre) {
  margin: 2rem -2rem;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow-x: auto;
}

:deep(.markdown-body pre code) {
  background: none;
  padding: 0;
  font-size: 0.875rem;
  color: #e2e8f0;
}

@media (max-width: 1400px) {
  .project-grid {
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    gap: 4rem;
  }

  .project-image {
    margin-right: -4rem;
  }

  .project-header h1 {
    font-size: 3.5rem;
  }
}

@media (max-width: 1200px) {
  .project-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .project-sidebar {
    position: static;
    margin-top: 3rem;
  }

  .project-highlights {
    max-width: 600px;
    margin: 0 auto;
  }

  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .project-image {
    margin: 2rem 0;
  }

  .project-content {
    padding-right: 0;
  }

  .project-header h1 {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .project-detail {
    padding: 1rem;
  }

  .project-header h1 {
    font-size: 2.5rem;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .project-highlights h2 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  .project-links {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: flex-start;
  }

  :deep(.markdown-body) {
    font-size: 1rem;
  }

  :deep(.markdown-body h2) {
    font-size: 2rem;
    margin: 3rem 0 1rem;
  }

  :deep(.markdown-body h3) {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
  }
}
</style> 