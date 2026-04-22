import type { Dictionary } from "./en";

export const es: Dictionary = {
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Carlos",
    title: "Desarrollador Full Stack",
    description:
      "Construyo experiencias web modernas con código limpio y diseño cuidado.",
    cta: "Ver mi trabajo",
  },
  about: {
    title: "Sobre mí",
    p1: "Soy un desarrollador apasionado que disfruta creando soluciones elegantes para problemas complejos. Con un enfoque en tecnologías web modernas, creo aplicaciones eficientes y accesibles.",
    p2: "También disfruto construyendo herramientas y automatizando flujos de trabajo — desde aplicaciones nativas de Windows hasta scripts que resuelven tareas repetitivas que van surgiendo en el día a día.",
  },
  projects: {
    title: "Proyectos",
    viewCode: "Código",
    viewDemo: "Demo",
    items: [
      {
        title: "Adobe Leftovers Remover",
        description:
          "Utilidad de escritorio que detecta y elimina archivos, carpetas y entradas de registro que los desinstaladores de Adobe dejan atrás, manteniendo el sistema limpio.",
        tags: ["C++", "Qt"],
        github: "https://github.com/ExoticGamerrrYT/adobe-leftovers-remover",
      },
      {
        title: "YimMenu v2 Launchpad",
        description:
          "Lanzador WPF para YimMenu v2 con una interfaz limpia para gestionar e inyectar el mod menu en GTA V de forma sencilla.",
        tags: ["C#", "WPF"],
        github: "https://github.com/ExoticGamerrrYT/yimmenuv2-launchpad",
      },
      {
        title: "Plus Ultra Shop v3",
        description:
          "Tercera iteración de una tienda online con interfaz moderna, experiencia de compra fluida y tipado estricto en toda la aplicación.",
        tags: ["SvelteKit", "TypeScript"],
        github: "https://github.com/ExoticGamerrrYT/plus-ultra-shop-v3",
      },
      {
        title: "Spotify Update Blocker",
        description:
          "Herramienta ligera que impide que Spotify se actualice automáticamente, permitiéndote quedarte en tu versión preferida sin intervención manual.",
        tags: ["C#"],
        github: "https://github.com/ExoticGamerrrYT/SpotifyUpdateBlocker",
      },
      {
        title: "Paper Server Manager",
        description:
          "Aplicación de escritorio para gestionar servidores de Minecraft Paper con controles para iniciar, detener y monitorizar instancias desde una sola ventana.",
        tags: ["Python", "Qt"],
        github: "https://github.com/ExoticGamerrrYT/paper-server-manager",
      },
      {
        title: "Fortnite Resolution Changer",
        description:
          "Herramienta nativa para cambiar al instante la resolución de Fortnite sin tener que entrar al menú de configuración del juego, ahorrando tiempo entre sesiones.",
        tags: ["C++"],
        github:
          "https://github.com/ExoticGamerrrYT/Fortnite-Resolution-Changer",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas y otros",
      automation: "Automatización y Windows",
    },
  },
  contact: {
    title: "Contacto",
    description:
      "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. ¡No dudes en contactarme!",
    email: "Envíame un email",
  },
  footer: {
    rights: "Todos los derechos reservados.",
  },
};
