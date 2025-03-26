<template>
  <div class="bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300/20 hover:shadow-lg h-full flex flex-col">
    <div class="w-12 h-12 mx-auto mb-4 text-primary-300">
      <slot name="icon"></slot>
    </div>
    <h3 class="text-xl font-bold mb-4 text-center bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
      <slot name="title"></slot>
    </h3>
    <div class="text-slate-400 mb-4 leading-relaxed">
      <slot name="description"></slot>
    </div>
    <div class="flex flex-wrap gap-2 justify-center mt-auto">
      <slot name="tags"></slot>
    </div>
    <div class="space-y-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// No script needed
</script> 