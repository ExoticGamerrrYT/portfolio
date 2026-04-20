"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FadeIn } from "./fade-in";
import { Section } from "./section";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
};

type ProjectsProps = {
  dict: {
    title: string;
    viewCode: string;
    viewDemo: string;
    items: Project[];
  };
};

export function Projects({ dict }: ProjectsProps) {
  return (
    <Section id="projects">
      <FadeIn>
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dict.items.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.1}>
            <article className="group hover:border-accent-300 hover:shadow-accent-500/5 dark:hover:border-accent-700 dark:hover:shadow-accent-500/10 flex h-full flex-col rounded-2xl border border-zinc-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800">
              <h3 className="mb-3 text-lg font-semibold">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <FaGithub size={14} />
                  {dict.viewCode}
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    <ExternalLink size={14} />
                    {dict.viewDemo}
                  </a>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
