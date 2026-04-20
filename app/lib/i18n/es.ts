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
    p2: "Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, contribuyendo al código abierto o aprendiendo algo nuevo.",
  },
  projects: {
    title: "Proyectos",
    viewCode: "Código",
    viewDemo: "Demo",
    items: [
      {
        title: "Proyecto Uno",
        description:
          "Una aplicación web moderna construida con Next.js y TypeScript. Incluye sincronización de datos en tiempo real y diseño responsive.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        github: "#",
        demo: "#",
      },
      {
        title: "Proyecto Dos",
        description:
          "Servicio API RESTful con autenticación, limitación de peticiones y documentación completa. Construido para escalar.",
        tags: ["Node.js", "PostgreSQL", "Docker"],
        github: "#",
        demo: "#",
      },
      {
        title: "Proyecto Tres",
        description:
          "Aplicación móvil multiplataforma con arquitectura offline-first y animaciones fluidas.",
        tags: ["React Native", "SQLite", "Expo"],
        github: "#",
        demo: "#",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas y otros",
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
