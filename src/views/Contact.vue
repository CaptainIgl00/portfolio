<template>
  <div class="contact">
    <div class="container">
      <h1 class="gradient-title">Contact</h1>
      
      <div class="contact-container">
        <div class="contact-info">
          <h2 class="section-title">Parlons de votre projet</h2>
          <p class="contact-intro">
            Passionné par les technologies web, je suis toujours ouvert à discuter de nouveaux projets innovants. N'hésitez pas à me contacter pour échanger sur vos idées ou pour des opportunités professionnelles.
          </p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div class="contact-detail">
                <h3>Email</h3>
                <p><a href="mailto:matheo.guilloux@gmail.com">matheo.guilloux@gmail.com</a></p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
              <div class="contact-detail">
                <h3>Réseaux sociaux</h3>
                <div class="social-links">
                  <a href="https://github.com/captainigl00" target="_blank" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/mathéo-guilloux" target="_blank" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div class="contact-detail">
                <h3>Localisation</h3>
                <p>Toulouse, France</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container">
          <h2 class="section-title">Envoyez-moi un message</h2>
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nom</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                required
                placeholder="Votre nom"
              />
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                required
                placeholder="Votre email"
              />
            </div>
            
            <div class="form-group">
              <label for="subject">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                required
                placeholder="Sujet de votre message"
              />
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                required
                placeholder="Votre message..."
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
            
            <p v-if="formStatus" class="form-status" :class="{ 'success': formStatus.type === 'success' }">
              {{ formStatus.message }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formStatus = ref(null);

const submitForm = async () => {
  isSubmitting.value = true;
  
  try {
    // Simulation d'envoi de formulaire
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    formStatus.value = {
      type: 'success',
      message: 'Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.'
    };
    
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
    };
  } finally {
    isSubmitting.value = false;
    
    setTimeout(() => {
      formStatus.value = null;
    }, 5000);
  }
};

onMounted(() => {
  // Animation du titre
  gsap.from('.gradient-title', {
    scrollTrigger: {
      trigger: '.gradient-title',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Animation des méthodes de contact
  gsap.from('.contact-method', {
    scrollTrigger: {
      trigger: '.contact-methods',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  });

  // Animation des langues
  gsap.from('.language-item', {
    scrollTrigger: {
      trigger: '.languages-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  });
});
</script>

<style scoped>
.contact {
  padding: 4rem 0;
  color: white;
  min-height: 100vh;
  background: #0f172a;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.gradient-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info, .contact-form-container {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 1rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.contact-info:hover, .contact-form-container:hover {
  border-color: rgba(165, 180, 252, 0.2);
  transform: translateY(-5px);
}

.section-title {
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 1.75rem;
  font-weight: 700;
}

.contact-intro {
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #94a3b8;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.contact-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(165, 180, 252, 0.1);
  border-radius: 0.75rem;
  color: #a5b4fc;
  transition: all 0.3s ease;
}

.contact-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

.contact-method:hover .contact-icon {
  background: rgba(165, 180, 252, 0.2);
  transform: scale(1.1);
}

.contact-detail h3 {
  margin-bottom: 0.25rem;
  color: #fff;
  font-size: 1.1rem;
}

.contact-detail p {
  color: #94a3b8;
}

.contact-detail a {
  color: #a5b4fc;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-detail a:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(165, 180, 252, 0.5);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a5b4fc;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: rgba(165, 180, 252, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(165, 180, 252, 0.2);
  transform: translateY(-2px);
}

.social-link svg {
  width: 1.25rem;
  height: 1.25rem;
}

.languages-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.language-item {
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.language-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.language-item h3 {
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 1.1rem;
}

.language-item p {
  color: #94a3b8;
  font-size: 0.9rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #fff;
  font-weight: 500;
}

.form-group input, .form-group textarea {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: #a5b4fc;
  box-shadow: 0 0 0 3px rgba(165, 180, 252, 0.1);
}

.form-group input::placeholder, .form-group textarea::placeholder {
  color: #64748b;
}

.submit-btn {
  background: rgba(165, 180, 252, 0.1);
  color: #fff;
  border: 1px solid rgba(165, 180, 252, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: rgba(165, 180, 252, 0.2);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
  cursor: not-allowed;
}

.form-status {
  padding: 0.75rem;
  border-radius: 0.5rem;
  text-align: center;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.form-status.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.2);
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .gradient-title {
    font-size: 2rem;
  }
  
  .languages-grid {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    flex-direction: column;
  }
  
  .social-link {
    width: 100%;
    justify-content: center;
  }
}
</style> 