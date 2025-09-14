<template>
  <div class="project-detail">
    <ProjectDetail :project="project" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { projects } from '~/data/projects'

// Récupération du slug depuis l'URL
const route = useRoute()
const slug = route.params.slug

// Trouver le projet correspondant
const { $i18n } = useNuxtApp()
const project = projects.find(p => p.slug === slug)

// Gestion des erreurs 404
if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projet non trouvé'
  })
}

// Meta dynamique pour le SEO
useHead({
  title: computed(() => `${project.title[$i18n.locale.value]} - Matheo Champagne`),
  meta: [
    { name: 'description', content: computed(() => project.description[$i18n.locale.value]) }
  ]
})
</script>
