"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { FadeIn } from "./fade-in";
import { Section } from "./section";

type ContactProps = {
  dict: {
    title: string;
    description: string;
    email: string;
  };
};

export function Contact({ dict }: ContactProps) {
  return (
    <Section id="contact">
      <div className="text-center">
        <FadeIn>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mb-10 max-w-md text-zinc-500 dark:text-zinc-400">
            {dict.description}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <Mail size={18} />
            {dict.email}
            <ArrowUpRight size={16} />
          </a>
        </FadeIn>
      </div>
    </Section>
  );
}
