<template>
  <div 
    class="relative pl-8 card transition-all duration-300 hover:translate-x-2 ml-4"
    :class="{ 'bg-primary-300/5 border-primary-300/10 shadow-primary-300/10 shadow-lg': featured }"
  >
    <div 
      class="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-gradient-to-r from-primary-300 to-primary-500 shadow-lg shadow-primary-300/50 transition-all duration-300 group-hover:scale-110"
    ></div>
    <div class="relative">
      <h3 class="text-white text-lg font-semibold mb-2">
        <slot name="title"></slot>
      </h3>
      <p class="text-sm text-slate-400 mb-3 italic">{{ date }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  date: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
});
</script>