<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-1/2 -right-1/2 w-[500px] sm:w-[750px] lg:w-[1000px] h-[500px] sm:h-[750px] lg:h-[1000px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-1/2 -left-1/2 w-[500px] sm:w-[750px] lg:w-[1000px] h-[500px] sm:h-[750px] lg:h-[1000px] bg-slate-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto relative">
      <div class="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
          Contact
        </h1>
        <p class="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
          Intéressé par une collaboration ? N'hésitez pas à me contacter !
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto px-2 sm:px-4">
        <!-- Contact Info Section -->
        <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-8 lg:p-12 transition duration-300 hover:border-indigo-500/20 shadow-xl">
          <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent mb-4 sm:mb-6">
                Parlons de votre projet
              </h2>
              
              <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
                Passionné par la culture DevOps et l'automatisation, je suis toujours ouvert à discuter de nouveaux projets innovants. N'hésitez pas à me contacter pour échanger sur vos idées ou pour des opportunités professionnelles.
              </p>
            </div>
            
            <div class="space-y-4 sm:space-y-6">
              <!-- Email -->
              <div class="flex items-center space-x-3 sm:space-x-4">
                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-slate-300 font-medium text-sm sm:text-base">Email</p>
                  <a href="mailto:contact@champagnedevops.fr" class="text-indigo-400 hover:text-indigo-300 transition-colors text-sm sm:text-base">
                    contact@champagnedevops.fr
                  </a>
                </div>
              </div>
              
              <!-- LinkedIn -->
              <div class="flex items-center space-x-3 sm:space-x-4">
                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-slate-300 font-medium text-sm sm:text-base">LinkedIn</p>
                  <a href="https://linkedin.com/in/matheo-champagne" target="_blank" class="text-indigo-400 hover:text-indigo-300 transition-colors text-sm sm:text-base">
                    /in/matheo-champagne
                  </a>
                </div>
              </div>
              
              <!-- GitHub -->
              <div class="flex items-center space-x-3 sm:space-x-4">
                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-slate-300 font-medium text-sm sm:text-base">GitHub</p>
                  <a href="https://github.com/CaptainIgl00" target="_blank" class="text-indigo-400 hover:text-indigo-300 transition-colors text-sm sm:text-base">
                    /CaptainIgl00
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Meta pour le SEO
useHead({
  title: 'Contact - Matheo Champagne',
  meta: [
    { name: 'description', content: 'Contactez Matheo Champagne pour discuter de vos projets DevOps et de développement' }
  ]
})
</script>
