import type { Lang } from "@/lib/i18n/dictionaries";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Projects dict={dict.projects} />
        <Skills dict={dict.skills} />
        <Contact dict={dict.contact} />
      </main>
      <Footer rights={dict.footer.rights} />
    </>
  );
}
