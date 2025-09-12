<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <router-link to="/" class="navbar-logo">
        <span class="logo-text">MG</span>
        <span class="logo-full">Matheo Champagne</span>
      </router-link>
      
      <button class="mobile-menu-button" @click="isMenuOpen = !isMenuOpen">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      
      <div class="navbar-links" :class="{ 'active': isMenuOpen }">
        <router-link 
          v-for="link in links" 
          :key="link.path" 
          :to="link.path"
          class="navbar-link"
          @click="isMenuOpen = false"
        >
          <span class="link-icon">{{ link.icon }}</span>
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const links = [
  { name: 'Accueil', path: '/', icon: '🏠' },
  { name: 'À propos', path: '/about', icon: '👤' },
  { name: 'Projets', path: '/projects', icon: '🚀' },
  { name: 'Contact', path: '/contact', icon: '📧' }
];

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: transparent;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar-scrolled {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #a5b4fc;
  text-decoration: none;
  transition: all 0.3s ease;
}

.navbar-logo:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(165, 180, 252, 0.5);
}

.logo-text {
  background: linear-gradient(135deg, #a5b4fc, #6366f1);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: transform 0.3s ease;
}

.navbar-logo:hover .logo-text {
  transform: scale(1.05);
}

.logo-full {
  display: none;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media (min-width: 768px) {
  .logo-full {
    display: inline;
  }
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.link-icon {
  font-size: 1.1rem;
}

.navbar-link:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(165, 180, 252, 0.3);
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #a5b4fc, #6366f1);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.navbar-link:hover::after {
  width: 100%;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.bar {
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px auto;
  background: #a5b4fc;
  transition: all 0.3s ease;
  border-radius: 1px;
}

@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }
  
  .navbar-links {
    position: fixed;
    left: -100%;
    top: 60px;
    flex-direction: column;
    gap: 0;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 0;
  }
  
  .navbar-links.active {
    left: 0;
  }
  
  .navbar-link {
    justify-content: center;
    padding: 1rem 0;
  }
  
  .navbar-link::after {
    display: none;
  }
  
  .mobile-menu-button.active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-button.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .mobile-menu-button.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style> 