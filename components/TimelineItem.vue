<template>
  <div 
    class="relative pl-4 sm:pl-6 md:pl-8 ml-2 sm:ml-3 md:ml-4 transition-all duration-300 hover:translate-x-2"
    :class="{ 'bg-primary-300/3 border-primary-300/5 shadow-primary-300/5 shadow-md': featured }"
  >
    <div 
      class="absolute left-[-4px] sm:left-[-5px] md:left-[-6px] top-6 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full bg-gradient-to-r from-primary-300 to-primary-500 shadow-lg shadow-primary-300/50 transition-all duration-300 group-hover:scale-110"
    ></div>
    <div class="relative">
      <div class="flex items-center justify-between mb-1 sm:mb-1.5 md:mb-2">
        <h3 class="text-white text-base sm:text-lg font-semibold">
          <slot name="title"></slot>
        </h3>
        <router-link v-if="blogPath" :to="`/project/${blogPath}`" class="blog-link">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 sm:h-4 w-3 sm:w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          <span class="hidden sm:inline">Voir le projet</span>
        </router-link>
      </div>
      <p class="text-xs sm:text-sm text-slate-400 mb-2 sm:mb-2.5 md:mb-3 italic">{{ date }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  date: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  blogPath: {
    type: String,
    default: ''
  }
});

const isDev = computed(() => {
  return process.env.NODE_ENV === 'development';
});
</script>

<style scoped>
.blog-link {
  @apply inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 hover:bg-primary-500/30 hover:text-white hover:shadow-[0_0_12px_rgba(165,180,252,0.6)] transition-all duration-300 text-xs sm:text-sm font-medium border border-primary-500/30 backdrop-blur-sm gap-1;
}
</style>