export const en = {
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Carlos",
    title: "Full Stack Developer",
    description:
      "I build modern web experiences with clean code and thoughtful design.",
    cta: "View my work",
  },
  about: {
    title: "About me",
    p1: "I'm a passionate developer who loves building elegant solutions to complex problems. With a focus on modern web technologies, I create performant and accessible applications.",
    p2: "When I'm not coding, you can find me exploring new technologies, contributing to open source, or learning something new.",
  },
  projects: {
    title: "Projects",
    viewCode: "Code",
    viewDemo: "Demo",
    items: [
      {
        title: "Project One",
        description:
          "A modern web application built with Next.js and TypeScript. Features real-time data synchronization and a responsive design.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        github: "#",
        demo: "#",
      },
      {
        title: "Project Two",
        description:
          "RESTful API service with authentication, rate limiting, and comprehensive documentation. Built for scalability.",
        tags: ["Node.js", "PostgreSQL", "Docker"],
        github: "#",
        demo: "#",
      },
      {
        title: "Project Three",
        description:
          "Cross-platform mobile application with offline-first architecture and smooth animations.",
        tags: ["React Native", "SQLite", "Expo"],
        github: "#",
        demo: "#",
      },
    ],
  },
  skills: {
    title: "Skills",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Others",
    },
  },
  contact: {
    title: "Get in touch",
    description:
      "I'm always open to new opportunities and interesting projects. Feel free to reach out!",
    email: "Email me",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;
