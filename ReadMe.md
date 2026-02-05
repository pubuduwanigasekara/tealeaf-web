# Tealeaf Consulting Website

The official website for **Tealeaf Consulting**, a firm providing strategic financial leadership for founders to help them scale. This modern, high-performance web application features rich animations, smooth scrolling, and a premium aesthetic to reflect the brand's potential.

<div align="center" style="background-color: white; padding: 40px; border-radius: 12px; margin-bottom: 24px;">
  <img src="https://tealeafconsult.com/static/logo.png" alt="Tealeaf Logo" width="400" />
</div>

## 🚀 Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP 3.14](https://gsap.com/) (GreenSock Animation Platform)
  - `ScrollTrigger` & `ScrollSmoother` & `MorphSVGPlugin`
  - `@gsap/react`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Tooling**: TypeScript, ESLint, Prettier, Husky

## ✨ Key Features

- **Next.js App Router**: Leveraging the latest Next.js features for performance and SEO.
- **Premium Animations**: Complex scroll-linked animations using GSAP ScrollTrigger.
- **Smooth Scrolling**: Custom-tuned smooth scroll experience via GSAP ScrollSmoother.
- **Responsive Design**: Mobile-first approach ensuring a great experience on all devices.
- **SEO Optimized**: Fully configured metadata, JSON-LD structured data, and semantic HTML.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/tealeaf-web.git
    cd tealeaf-web
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    npm install --legacy-peer-deps
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤖 Agent Configuration (Optional)

If you are using an AI coding agent (like Antigravity or Cursor), you should configure the **Next DevTools MCP** to allow the agent to inspect the running application and troubleshoot errors automatically.

Add the following to your agent's MCP configuration:

```json
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

## 📜 Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server (requires build).
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format`: Formats code using Prettier.
- `npm run prepare`: Sets up Husky git hooks.

## 📂 Project Structure

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

## 🎨 Styling & Theming

This project uses **Tailwind CSS v4** for styling.

- **Colors**: Custom brand colors (`brand-cream`, `brand-primary`, `brand-accent`) are defined in standard CSS variables and referenced in Tailwind.
- **Typography**: Uses modern serif/sans-serif pairings for a premium feel.

## ⚡ Performance

- **Optimized Images**: Uses Next.js `<Image />` component.
- **Dynamic Imports**: Heavy components are optimized where possible.
- **GSAP Context**: Proper cleanup of animations using `@gsap/react` to prevent memory leaks.

## 📄 License

© Tealeaf Consulting. All rights reserved.
