# Tealeaf Consulting Website

## Project Overview

This is the official website for **Tealeaf Consulting**, a firm providing strategic financial leadership for founders to help them scale. The website is a modern, high-performance web application featuring rich animations, smooth scrolling, and a premium aesthetic to reflect the brand's potential.

## Technology Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP 3.14](https://gsap.com/) (GreenSock Animation Platform)
  - Plugins: ScrollTrigger, ScrollSmoother (via context/custom provider)
  - `@gsap/react` for React integration
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: ESLint, Prettier, Husky, Lint-staged

## Project Structure

```
tealeaf-web/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx          # Root layout with global providers and SEO
│   ├── page.tsx            # Home page composition
│   ├── globals.css         # Global Tailwind styles
│   ├── error.tsx           # Error boundary for the app
│   ├── global-error.tsx    # Root error boundary
│   └── not-found.tsx       # 404 Page
├── components/             # React components
│   ├── ui/                 # Reusable UI elements (Button, etc.)
│   ├── about/              # About section specific components
│   ├── call-to-action/     # Call to Action section
│   ├── founder-pain/       # Founder Pain points section
│   ├── services/           # Services section
│   ├── Hero.tsx            # Main hero section
│   ├── MouseFollower.tsx   # Custom cursor effect
│   ├── Navbar.tsx          # Navigation bar
│   ├── SmoothScrollProvider.tsx # Client-side GSAP ScrollSmoother wrapper
│   ├── SplashScreen.tsx    # Initial loading animation
│   └── Testimonials.tsx    # Client testimonials carousel
├── lib/                    # Utilities and configurations
│   ├── hooks/              # Custom React hooks
│   ├── data.ts             # Constants and data
│   └── gsap.ts             # GSAP registry and configuration
├── public/                 # Static assets (images, videos, fonts)
├── .next/                  # Next.js build output
└── NEXTJS_MIGRATION.md     # Details on the recent migration from Vite
```

## Key Features & Architecture

### 1. **Next.js App Router**

The project uses the modern Next.js App Router.

- **Server Components**: By default, pages are server components (e.g., `page.tsx`).
- **Client Components**: Interactive components (using hooks or animations) must have the `'use client'` directive at the top.

### 2. **GSAP Animations & Smooth Scrolling**

- **SmoothScrollProvider**: Wraps the application to provide a smooth scrolling experience using GSAP's `ScrollSmoother`.
- **`useGSAP` Hook**: We use the official `@gsap/react` hook for safe animation cleanup.
- **ScrollTrigger**: Used extensively for scroll-based animations (fade-ins, parallax, pinning).
- **Video Backgrounds**: The Hero section utilizes video backgrounds for visual impact.

### 3. **Styling**

- **Tailwind CSS v4**: All styling is done via Tailwind utility classes.
- **Responsive Design**: Mobile-first approach with custom breakpoints references (e.g., `2xl:`).
- **Theming**: Custom colors (`brand-cream`, `brand-primary`, `brand-accent`) defined in CSS variables/Tailwind config.

## Development Workflow

### Prerequisites

- Node.js (v20+ recommended)
- NPM

### Commands

- **Development**: `npm run dev` (Runs on http://localhost:3000)
- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Linting**: `npm run lint`
- **Formatting**: `npm run format`

## Coding Guidelines for Agents & Contributors

1.  **"Use Client" Directive**:
    - Next.js 16 requires explicit `'use client'` for components using `useState`, `useEffect`, `useGSAP`, or event listeners.
    - When modifying components like `Navbar`, `Hero`, or `Services`, check if they are Client Components.

2.  **Animation Best Practices**:
    - **Always** use `useGSAP(() => { ... }, { scope: containerRef })` instead of `useEffect` for GSAP animations.
    - This ensures animations are properly cleaned up and play nice with React Strict Mode.
    - Use `gsap.context` only if `useGSAP` is somehow not applicable (rare).

3.  **Navigation**:
    - Use `next/link` for internal links.
    - Use `useRouter` and `usePathname` from `next/navigation` (NOT `next/router` or `react-router-dom`).

4.  **Images & Media**:
    - Use the Next.js `<Image />` component where possible for optimization.
    - Videos should be optimized and lazy-loaded if below the fold.

5.  **SEO**:
    - Edit metadata in `app/layout.tsx` or `app/page.tsx`.
    - Structured data (JSON-LD) is injected via `next/script`.

## Recent Changes (Migration Context)

This project was recently migrated from a **Vite/React** SPA to **Next.js**.

- If you see remnants of `react-router-dom` or `vite.config.ts`, they are effectively deprecated.
- The source of truth is now the Next.js structure.
