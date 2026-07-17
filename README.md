# InfraPulse Technologies — Corporate Website

Production-ready software company website for **InfraPulse Technologies Private Limited**.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Ant Design v5
- SCSS Modules
- Framer Motion

## Getting Started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Atomic design components
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── providers/
├── constants/        # Theme & brand constants
├── data/             # Static data (Module 7)
├── hooks/            # Custom React hooks
├── lib/              # Utilities & config
├── styles/           # Global SCSS & tokens
└── utils/            # Helper functions
```

## Brand Colors

| Token | Hex |
|-------|-----|
| Primary | `#1F4A75` |
| Secondary | `#355F89` |
| Accent | `#EC523F` |
| Background | `#F8FAFC` |
| Text | `#1E293B` |

## Development

See `docs/AI_DEVELOPMENT_RULES.md` for module-by-module development workflow.
