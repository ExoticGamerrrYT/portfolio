import { LangSetter } from "@/components/lang-setter";
import type { Lang } from "@/lib/i18n/dictionaries";
import { locales } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Lang)) {
    notFound();
  }

  return (
    <>
      <LangSetter lang={lang} />
      {children}
    </>
  );
}
