<template>
  <div class="p-2 transition-all duration-300 hover:bg-primary-300/5 hover:translate-x-1 rounded">
    <div class="flex justify-between items-center mb-2">
      <span class="text-slate-200 font-medium text-sm">{{ name }}</span>
      <span class="text-slate-400 text-xs italic">{{ level }}</span>
    </div>
    <div class="h-1.5 bg-white/10 rounded overflow-hidden relative">
      <div 
        class="h-full bg-gradient-to-r from-primary-300 to-primary-500 rounded transition-all duration-500 relative z-10"
        :class="{
          'w-1/5': value === 1,
          'w-2/5': value === 2,
          'w-3/5': value === 3,
          'w-4/5': value === 4,
          'w-full': value === 5
        }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary-300/10 via-primary-300/5 to-primary-300/10 animate-shimmer"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
    validator: (value) => value >= 1 && value <= 5
  }
});
</script>