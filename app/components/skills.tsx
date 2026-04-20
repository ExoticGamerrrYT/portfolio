import { FadeIn } from "./fade-in";
import { Section } from "./section";

const skillData = {
  frontend: [
    "React",
    "Next.js",
    "Svelte",
    "SvelteKit",
    "TypeScript",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  backend: ["Python", "PostgreSQL", "REST APIs"],
  tools: ["Git", "Docker", "Linux", "CI/CD", "Figma"],
  automation: ["Python scripting", "C#", "WPF", ".NET / WinForms", "CLI Tools"],
};

type SkillsProps = {
  dict: {
    title: string;
    categories: {
      frontend: string;
      backend: string;
      tools: string;
      automation: string;
    };
  };
};

export function Skills({ dict }: SkillsProps) {
  const categories = [
    {
      key: "frontend",
      label: dict.categories.frontend,
      items: skillData.frontend,
    },
    {
      key: "backend",
      label: dict.categories.backend,
      items: skillData.backend,
    },
    { key: "tools", label: dict.categories.tools, items: skillData.tools },
    {
      key: "automation",
      label: dict.categories.automation,
      items: skillData.automation,
    },
  ];

  return (
    <Section id="skills">
      <FadeIn>
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
      </FadeIn>

      <div className="grid gap-10 md:grid-cols-3">
        {categories.map((cat, i) => (
          <FadeIn key={cat.key} delay={i * 0.1}>
            <div>
              <h3 className="text-accent-500 mb-4 font-mono text-sm font-medium">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="hover:border-accent-300 hover:bg-accent-50 dark:hover:border-accent-700 dark:hover:bg-accent-950 rounded-full border border-zinc-200 px-4 py-2 text-sm transition-colors dark:border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
