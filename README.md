# NP Portfolio

Niñalene Paguio's personal portfolio site — built with React 19, Next.js 16 and Tailwind CSS. Showcases projects, background/experience, and a working contact form.

**Live pages:** Home · Projects · Project detail · About · Contact

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | react v19 next.js v16
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI primitives | [shadcn/ui](https://ui.shadcn.com/) (`Button`, `Card`, `Skeleton`) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) (light/dark, system-aware) |
| Fonts | `next/font/google` — Fraunces (display), Inter (body), JetBrains Mono (mono) |
| Icons | `react-icons` |
| Forms | React `useActionState` + Next.js Server Actions |

---

## Project Structure

```
app/
├── layout.tsx            # Root layout
├── page.tsx               # Home page (hero)
├── error.tsx               # Root error boundary
├── not-found.tsx            # 404 page
├── globals.css             # Tailwind import + design tokens (light/dark)
├── about/
│   ├── page.tsx           
│   └── loading.tsx
├── projects/
│   ├── page.tsx          
│   ├── loading.tsx
│   └── [slug]/
│       └── page.tsx        # Individual project detail
└── contact/
    ├── page.tsx            
    └── actions.ts           # Server Action
components/
├── NavBar.tsx
├── Footer.tsx
├── ProjectCard.tsx          # Interactive tilt-on-hover project card
├── ThemeToggle.tsx
├── ThemeProvider.tsx
├── SubmitButton.tsx
└── ui/                      # shadcn/ui primitives

lib/
└── constantsData.ts          # Static content that can be large amount
```

---

## Getting Started

### Prerequisites

- Node.js 22 
- A [Resend](https://resend.com/) account and API key (for the contact form)

### Installation

```bash
git clone <repo-url>
cd np-portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=noreply@yourdomain.com
```

> **Never commit `.env.local`.** In production (e.g. Vercel), set these in your host's environment variable dashboard instead.

### Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Build & start

```bash
npm run build
npm run start
```

---
## License

Copyright © 2026 Niñalene Paguio. All rights reserved.
