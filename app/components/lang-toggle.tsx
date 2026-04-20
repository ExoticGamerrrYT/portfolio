"use client";

import { usePathname, useRouter } from "next/navigation";

export function LangToggle({ lang }: { lang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLang = () => {
    const newLang = lang === "en" ? "es" : "en";
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLang}
      className="cursor-pointer rounded-full px-3 py-2 font-mono text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
      aria-label="Toggle language"
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}
