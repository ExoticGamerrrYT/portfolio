import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Carlos | Portfolio",
  description: "Full Stack Developer — Building modern web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-white text-zinc-900 antialiased transition-colors dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
