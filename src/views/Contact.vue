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
                Passionné par les technologies web, je suis toujours ouvert à discuter de nouveaux projets innovants. N'hésitez pas à me contacter pour échanger sur vos idées ou pour des opportunités professionnelles.
              </p>

              <!-- Location with animation -->
              <div class="mt-6 sm:mt-8 inline-flex items-center space-x-2 bg-slate-800/50 px-3 sm:px-4 py-2 rounded-full border border-slate-700/50">
                <div class="relative">
                  <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-indigo-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                </div>
                <span class="text-slate-400 text-sm sm:text-base">Actuellement à Toulouse, France</span>
              </div>
            </div>

            <div class="space-y-4 sm:space-y-6">
              <!-- Email -->
              <div class="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-700/50 transition duration-300 hover:border-indigo-500/30 hover:transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:scale-110 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors">Email</h3>
                  <a href="mailto:matheo.guilloux@gmail.com" class="text-indigo-400 hover:text-indigo-300 transition-colors text-base sm:text-lg break-all">
                    matheo.guilloux@gmail.com
                  </a>
                </div>
              </div>

              <!-- Social Links -->
              <div class="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-700/50 transition duration-300 hover:border-indigo-500/30 hover:transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:scale-110 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div class="flex-grow min-w-0">
                  <h3 class="text-white font-medium mb-2 sm:mb-3 group-hover:text-indigo-300 transition-colors">Réseaux sociaux</h3>
                  <div class="flex flex-col xs:flex-row gap-2 sm:gap-3">
                    <a href="https://github.com/captainigl00" target="_blank" 
                      class="inline-flex items-center px-3 sm:px-4 py-2 bg-slate-700/50 text-white rounded-lg text-sm sm:text-base hover:bg-slate-600/50 transition duration-300 hover:transform hover:scale-105">
                      <svg class="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/mathéo-guilloux" target="_blank" 
                      class="inline-flex items-center px-3 sm:px-4 py-2 bg-slate-700/50 text-white rounded-lg text-sm sm:text-base hover:bg-slate-600/50 transition duration-300 hover:transform hover:scale-105">
                      <svg class="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom decorative bar -->
        <div class="mt-6 sm:mt-8 flex justify-center">
          <div class="h-1 w-24 sm:w-32 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No JavaScript needed for this component
</script> 