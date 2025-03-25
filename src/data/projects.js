export const projects = [
  {
    title: "Brasserie Chez Ju",
    description: "Développement et déploiement d'un site web pour un restaurant traditionnel français. Stack technique : Nuxt 3, FastAPI, Directus CMS, PostgreSQL, Docker, Traefik.",
    tags: ["Web", "DevOps", "Backend", "Frontend"],
    demoLink: "https://brasseriechezju.com",
    codeLink: "https://github.com/captainigl00/brasserie-chez-ju",
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
    slug: "poleos"
  },
  {
    title: "FreeHopper - Airbus Defense & Space",
    description: "Développement d'un ensemble de services Docker pour la gestion d'appareils de mesures et d'automatisation de tests.",
    tags: ["DevOps", "Web", "IoT", "Backend", "Web"],
    demoLink: "https://connectivity.esa.int/projects/hts-free-hopper",
    codeLink: null,
    image: "https://connectivity.esa.int/sites/default/files/inline-images/HTSFreeHopper_logo.png",
    markdownFile: "freehopper.md",
    slug: "freehopper"
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