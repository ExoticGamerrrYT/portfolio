"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
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
    <>
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
              onClick={() => {
                if (!menuOpen) setHasOpened(true);
                setMenuOpen(!menuOpen);
              }}
              className="relative cursor-pointer rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
              aria-label="Toggle menu"
            >
              <span
                className="flex h-4.5 w-4.5 flex-col items-center justify-center"
                style={{ gap: "5px" }}
              >
                <span
                  className="block h-0.5 w-3 rounded-full bg-current transition-all duration-300 ease-out"
                  style={{
                    transform: menuOpen
                      ? "translateY(7px) rotate(45deg)"
                      : "translateY(0) rotate(0deg)",
                  }}
                />
                <span
                  className="block h-0.5 w-3 rounded-full bg-current transition-all duration-300 ease-out"
                  style={{
                    opacity: menuOpen ? 0 : 1,
                    transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
                  }}
                />
                <span
                  className="block h-0.5 w-3 rounded-full bg-current transition-all duration-300 ease-out"
                  style={{
                    transform: menuOpen
                      ? "translateY(-7px) rotate(-45deg)"
                      : "translateY(0) rotate(0deg)",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile floating menu */}
      <nav
        className={`fixed top-20 right-4 z-50 w-56 origin-top-right rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-xl shadow-zinc-900/10 backdrop-blur-xl md:hidden dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/30 ${
          menuOpen
            ? "animate-menu-in"
            : hasOpened
              ? "animate-menu-out pointer-events-none"
              : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-0.5">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              style={{
                animation: menuOpen
                  ? `menu-item-in 0.3s ${i * 50}ms ease-out both`
                  : undefined,
                opacity: menuOpen ? undefined : 0,
                transform: menuOpen ? undefined : "translateX(12px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
