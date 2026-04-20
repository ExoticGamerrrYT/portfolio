"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";

type HeaderProps = {
  lang: string;
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
};

export function Header({ lang, nav }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: nav.about },
    { href: "#projects", label: nav.projects },
    { href: "#skills", label: nav.skills },
    { href: "#contact", label: nav.contact },
  ];

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMenuOpen(false);
    },
    [],
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-zinc-200 bg-white/80 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/80"
          : "border-transparent bg-white/0 dark:bg-zinc-950/0"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href={`/${lang}`} className="text-lg font-semibold tracking-tight">
          Carlos
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-full px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LangToggle lang={lang} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-lg md:hidden dark:border-zinc-800 dark:bg-zinc-950/95">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-4 py-3 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
