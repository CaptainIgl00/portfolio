<template>
  <div class="flex flex-col md:flex-row gap-8 items-center bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-2xl p-8 shadow-lg transition-all duration-300">
    <div class="flex-shrink-0 w-[200px] h-[200px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden border border-white/10 transition-all duration-300 hover:scale-105 hover:border-primary-300/50 hover:shadow-[0_0_20px_rgba(165,180,252,0.2)] bg-white/5">
      <img
        src="/profil.jpg"
        alt="Matheo Champagne"
        class="w-full h-full object-cover object-center transition-transform duration-300 [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]"
        loading="lazy"
        width="200"
        height="200"
      />
    </div>
    <div class="flex-grow text-center md:text-left">
      <h2 class="mb-4 text-3xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">{{ title }}</h2>
      <p class="text-lg leading-relaxed text-slate-400">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>
 