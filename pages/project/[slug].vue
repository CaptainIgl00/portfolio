<template>
  <div class="project-detail">
    <ProjectDetail :project="project" />
  </div>
</template>

<script setup>
import { projects } from '~/data/projects'

// Récupération du slug depuis l'URL
const route = useRoute()
const slug = route.params.slug

// Trouver le projet correspondant
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
  title: `${project.title} - Matheo Champagne`,
  meta: [
    { name: 'description', content: project.description }
  ]
})
</script>
