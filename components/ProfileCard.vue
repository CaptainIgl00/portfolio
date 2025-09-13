<template>
  <div class="flex flex-col md:flex-row gap-8 items-center bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-2xl p-8 shadow-lg transition-all duration-300">
    <div class="flex-shrink-0 w-[200px] h-[200px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden border border-white/10 transition-all duration-300 hover:scale-105 hover:border-primary-300/50 hover:shadow-[0_0_20px_rgba(165,180,252,0.2)] bg-white/5">
      <img
        src="../assets/profil.jpg"
        alt="Matheo Champagne"
        class="w-full h-full object-cover object-center transition-transform duration-300 [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]"
        loading="lazy"
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

<style scoped>
.profile {
  display: flex;
  gap: 2rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.profile-image {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
}

.profile-image:hover {
  transform: scale(1.05);
  border-color: rgba(165, 180, 252, 0.5);
  box-shadow: 0 0 20px rgba(165, 180, 252, 0.2);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.placeholder-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #6b7280;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.placeholder-image:hover {
  transform: scale(1.05);
  border-color: rgba(165, 180, 252, 0.5);
  box-shadow: 0 0 20px rgba(165, 180, 252, 0.2);
}

.profile-info {
  flex-grow: 1;
}

.gradient-text {
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 700;
}

.profile-intro {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .profile {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .profile-intro {
    font-size: 1rem;
  }
}
</style> 