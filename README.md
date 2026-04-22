# Portfolio

Personal portfolio built with Next.js 16, React 19, and Tailwind CSS v4. Features internationalization (EN/ES), dark/light theme, and smooth animations.

## Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **Icons** — Lucide React, React Icons
- **Fonts** — Inter, JetBrains Mono

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `bun dev`    | Start development server |
| `bun build`  | Build for production     |
| `bun start`  | Start production server  |
| `bun lint`   | Run ESLint               |
| `bun format` | Format with Prettier     |

## Structure

```
app/
├── [lang]/         # i18n routes (en, es)
│   ├── layout.tsx
│   └── page.tsx
├── components/     # UI components
├── lib/i18n/       # Dictionaries (en, es)
├── globals.css
└── layout.tsx
```
