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
    { name: 'description', content: project.description },
    { property: 'og:title', content: `${project.title} - Matheo Champagne` },
    { property: 'og:description', content: project.description },
    { property: 'og:url', content: `https://champagnedevops.fr/project/${slug}` },
    { property: 'og:image', content: project.image ? `https://champagnedevops.fr${project.image}` : 'https://champagnedevops.fr/og-default.png' }
  ],
  link: [
    { rel: 'canonical', href: `https://champagnedevops.fr/project/${slug}` }
  ]
})
</script>
