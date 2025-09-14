<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">MG</router-link>
          <span class="footer-divider">|</span>
          <p class="footer-tagline">{{ $t('hero.subtitle') }}</p>
        </div>
        
        <div class="footer-links">
          <router-link to="/" class="footer-link">{{ $t('nav.home') }}</router-link>
          <router-link to="/about" class="footer-link">{{ $t('nav.about') }}</router-link>
          <router-link to="/projects" class="footer-link">{{ $t('nav.projects') }}</router-link>
          <router-link to="/contact" class="footer-link">{{ $t('nav.contact') }}</router-link>
        </div>

        <div class="footer-social">
          <a href="https://github.com/captainigl00" target="_blank" class="social-link" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/mathéo-champagne" target="_blank" class="social-link" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">© {{ currentYear }} Matheo Champagne. {{ $t('footer.rights') }}.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: #94a3b8;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-logo {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #a5b4fc, #6366f1);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-logo:hover {
  transform: translateY(-2px);
}

.footer-divider {
  color: rgba(255, 255, 255, 0.1);
}

.footer-tagline {
  color: #94a3b8;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.footer-link {
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(165, 180, 252, 0.3);
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.footer-bottom {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.copyright {
  color: #94a3b8;
  font-size: 0.85rem;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-brand {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .footer-divider {
    display: none;
  }
  
  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 2rem;
  }
  
  .footer-social {
    justify-content: center;
  }
}
</style> 