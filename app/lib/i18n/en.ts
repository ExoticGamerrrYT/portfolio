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
    p2: "I also enjoy building tools and automating workflows — from native Windows apps to scripts that handle repetitive tasks that come up day to day.",
  },
  projects: {
    title: "Projects",
    viewCode: "Code",
    viewDemo: "Demo",
    items: [
      {
        title: "Adobe Leftovers Remover",
        description:
          "Desktop utility that scans and removes leftover files, folders, and registry entries left behind by Adobe product uninstallers, keeping your system clean.",
        tags: ["C++", "Qt"],
        github: "https://github.com/ExoticGamerrrYT/adobe-leftovers-remover",
      },
      {
        title: "YimMenu v2 Launchpad",
        description:
          "Clean WPF launcher for YimMenu v2 that provides a streamlined interface to manage and inject the mod menu into GTA V.",
        tags: ["C#", "WPF"],
        github: "https://github.com/ExoticGamerrrYT/yimmenuv2-launchpad",
      },
      {
        title: "Plus Ultra Shop v3",
        description:
          "Third iteration of an e-commerce storefront featuring a modern UI, smooth shopping experience, and type-safe data handling throughout.",
        tags: ["SvelteKit", "TypeScript"],
        github: "https://github.com/ExoticGamerrrYT/plus-ultra-shop-v3",
      },
      {
        title: "Spotify Update Blocker",
        description:
          "Lightweight tool that prevents Spotify from updating automatically, letting you stay on your preferred version without manual intervention.",
        tags: ["C#"],
        github: "https://github.com/ExoticGamerrrYT/SpotifyUpdateBlocker",
      },
      {
        title: "Paper Server Manager",
        description:
          "GUI application for managing Paper Minecraft servers with controls for starting, stopping, and monitoring server instances from a single window.",
        tags: ["Python", "Qt"],
        github: "https://github.com/ExoticGamerrrYT/paper-server-manager",
      },
      {
        title: "Fortnite Resolution Changer",
        description:
          "Native tool that lets you instantly switch Fortnite's resolution without navigating the in-game settings menu, saving time between sessions.",
        tags: ["C++"],
        github:
          "https://github.com/ExoticGamerrrYT/Fortnite-Resolution-Changer",
      },
    ],
  },
  skills: {
    title: "Skills",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Others",
      automation: "Automation & Windows",
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
