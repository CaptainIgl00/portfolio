export const projects = [
  {
    title: "Brasserie Chez Ju",
    description: "Développement et déploiement d'un site web pour un restaurant traditionnel français. Stack technique : Nuxt 3, FastAPI, Directus CMS, PostgreSQL, Docker, Traefik.",
    tags: ["Web", "DevOps", "Backend", "Frontend"],
    demoLink: "https://brasseriechezju.com",
    codeLink: "https://github.com/CaptainIgl00/BrasserieChezJu",
    image: "https://brasseriechezju.com/_ipx/f_webp&q_90/images/menu/planche_charcuterie.jpg",
    markdownFile: "brasserie-chez-ju.md",
    slug: "brasserie-chez-ju",
    highlights: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" /></svg>',
        title: 'Architecture',
        description: 'Stack moderne avec Nuxt 3, FastAPI et Directus CMS'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>',
        title: 'Performance',
        description: 'Optimisation SSR et cache avec Nuxt 3'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>',
        title: 'Sécurité',
        description: 'HTTPS, Watchtower et validation des données'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" /></svg>',
        title: 'CI/CD',
        description: 'Déploiement automatisé avec GitHub Actions'
      }
    ]
  },
  {
    title: "POLEOS - Airbus Defense & Space",
    description: "Mission DevSecOps sur un segment sol. Déploiement d'infrastructures via Ansible, développement d'outils internes en Python.",
    tags: ["DevOps", "Python", "Ansible", "LLM"],
    demoLink: "https://www.airbus.com/en/newsroom/press-releases/2023-01-airbus-to-provide-poland-with-a-very-high-resolution-optical",
    codeLink: null,
    image: "https://www.airbus.com/sites/g/files/jlcbta136/files/styles/airbus_1440x1440/public/2023-01/pleiades_neo_artistview.webp?itok=Kz_RZj7j",
    markdownFile: "poleos.md",
    slug: "poleos",
    highlights: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" /></svg>',
        title: 'DevOps',
        description: 'Infrastructure as Code et CI/CD'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>',
        title: 'IA',
        description: 'LLMs et automatisation intelligente'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        title: 'Performance',
        description: 'Déploiements 5x plus rapides'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" /></svg>',
        title: 'Cloud Native',
        description: 'Docker, K8s et microservices'
      }
    ]
  },
  {
    title: "FreeHopper - Airbus Defense & Space",
    description: "Développement d'un ensemble de services Docker pour la gestion d'appareils de mesures et d'automatisation de tests.",
    tags: ["DevOps", "Web", "IoT", "Backend", "RF"],
    demoLink: "https://connectivity.esa.int/projects/hts-free-hopper",
    codeLink: null,
    image: "https://connectivity.esa.int/sites/default/files/inline-images/HTSFreeHopper_logo.png",
    markdownFile: "freehopper.md",
    slug: "freehopper",
    highlights: [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" /></svg>',
        title: 'Microservices',
        description: 'Architecture moderne et conteneurisée'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>',
        title: 'Cursor IDE',
        description: 'Développement 10x plus rapide avec l\'IA'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" /></svg>',
        title: 'Automatisation',
        description: 'Tests 24/7 sans intervention humaine'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>',
        title: 'Monitoring',
        description: 'Dashboards Grafana en temps réel'
      }
    ]
  },
  {
    title: "Astrocast - Airbus Defense & Space",
    description: "Développement et intégration d'un OS embarqué pour les satellites Astrocast. Stack technique : Petalinux, C++, Docker, Python.",
    tags: ["Linux", "IoT", "C++", "DevOps"],
    demoLink: "https://www.astrocast.com/",
    codeLink: null,
    image: "https://electroniques-biz.b-cdn.net/app/uploads/sites/5/2023/03/astronod.jpg",
    markdownFile: "astrocast.md",
    slug: "astrocast"
  },
  {
    title: "Madiran - Airbus Defense & Space",
    description: "Développement et déploiement de solutions en Python, C++ dans le cadre du partenariat entre Airbus DS et l'ONERA sur TELEO. Interfaçage avec IDL et Labview, utilisation de Grafana et InfluxDB pour le monitoring.",
    tags: ["DevOps", "Python", "Backend", "Monitoring"],
    demoLink: "https://www.airbus.com/en/newsroom/news/2024-12-airbus-and-partners-demonstrate-very-high-speed-optical-link-between-earth",
    codeLink: null,
    image: "https://www.airbus.com/sites/g/files/jlcbta136/files/styles/airbus_1440x1440/public/2024-12/Airbus-built-Badr-8-satellite-for-Arabsat-with-TELEO-Copyright-Airbus.webp?itok=euwhwkd7",
    markdownFile: "madiran.md",
    slug: "madiran"
  },
  {
    title: "Bancs de test Ultra Wide Band - Continental",
    description: "Développement de plusieurs bancs de tests de tracé de diagramme de rayonnement.",
    tags: ["RF", "Hardware", "IoT", "Frontend", "Backend"],
    demoLink: null,
    codeLink: null,
    image: "/portfolio/projects/diag.png",
    markdownFile: "uwb.md",
    slug: "uwb"
  },
  {
    title: "Home Lab",
    description: "Déploiement d'un home lab avec Home Assistant, création de composants personnalisés et diverses solutions de monitoring.",
    tags: ["IoT", "Hardware", "DevOps", "Frontend", "Backend", "IA"],
    demoLink: "https://demo.home-assistant.io/#/lovelace/home",
    codeLink: null,
    image: "https://design.home-assistant.io/images/brand/logo.png",
    markdownFile: "home-lab.md",
    slug: "home-lab"
  }
]; 