import { FadeIn } from "./fade-in";
import { Section } from "./section";

type AboutProps = {
  dict: {
    title: string;
    p1: string;
    p2: string;
  };
};

export function About({ dict }: AboutProps) {
  return (
    <Section id="about">
      <FadeIn>
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
      </FadeIn>
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {dict.p1}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {dict.p2}
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
