# Kim Semin — Portfolio

> AI DevOps / Backend Developer | Turning ideas into production-ready systems

Live: [kimsemin.dev](https://kimsemin.dev) (or Vercel deployment URL)

## About

Solo-built portfolio showcasing **AlgoSu** — an AI-powered algorithm study platform with 12 AI agents, 6 microservices, and zero-cost infrastructure.

## Tech Stack

| Layer | Stack |
|-------|-------|
| **Frontend** | Next.js 16, React 19, Tailwind CSS v4, Framer Motion |
| **Architecture** | Custom SVG diagrams (7 interactive system designs) |
| **Interactions** | Scroll-driven sticky animations, RAF smooth scroll, scroll brake system |
| **Deploy** | Vercel (auto-deploy on push) |

## Highlights

- **Scroll-driven UI** — Hero focus-pull blur/scale, architecture tier transitions, horizontal tech cards, code showcase — all powered by scroll position
- **7 Architecture Diagrams** — Agent Orchestration, Overall, API Gateway, AI Pipeline, Saga Pattern, Monitoring, CI/CD — each with hover tooltips
- **Monochrome Design** — Apple-inspired black/white aesthetic with intentional typography and spatial composition
- **Zero Dependencies** — Replaced ReactFlow (~200KB) with custom 150-line SVG renderer
- **Mobile Responsive** — Adaptive layouts, compressed spacing, overflow handling

## Project Structure

```
src/
├── app/                    # Next.js app router
├── components/
│   ├── diagrams/           # SVGDiagram + diagram data (7 architectures)
│   ├── layout/             # Footer
│   ├── sections/           # Hero, About, Project, Contact
│   └── ui/                 # ScrollProgressBar, SectionDots, SectionBreak
├── hooks/                  # useSmoothScroll, useScrollBrake, useElementProgress
├── lib/                    # Constants, utilities
└── types/                  # TypeScript interfaces
```

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
