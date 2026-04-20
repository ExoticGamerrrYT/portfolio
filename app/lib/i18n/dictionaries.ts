export type { Dictionary } from "./en";
import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";

export const locales: Lang[] = ["en", "es"];

const dictionaries = { en, es } as const;

export function getDictionary(lang: Lang) {
  return dictionaries[lang] ?? dictionaries.en;
}
