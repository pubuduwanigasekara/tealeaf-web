#Next.js Migration Progress

## ✅ Completed Steps

### 1. Git Branch Created

- Created `nextjs-migration` branch to safely migrate without affecting main codebase

### 2. Dependencies Updated

- ✅ Installed Next.js 15.1.6
- ✅ Removed Vite and related dependencies (@vitejs/plugin-react, @tailwindcss/vite)
- ✅ Removed react-router-dom (will use Next.js built-in routing)
- ✅ Updated scripts in package.json:
  - `dev`: now runs `next dev`
  - `build`: now runs `next build`
  - `start`: now runs `next start`
  - `lint`: now runs `next lint`

### 3. Configuration Files Created

- ✅ `next.config.ts` - Next.js configuration with GSAP transpilation support
- ✅ `tsconfig.json` - Updated for Next.js compatibility
- ✅ `app/` directory structure created

### 4. Core App Structure Migrated

- ✅ `app/layout.tsx` - Root layout with all SEO metadata from index.html
- ✅ `app/globals.css` - Global styles (copy of index.css)
- ✅ `app/page.tsx` - Home page
- ✅ `app/not-found.tsx` - 404 page
- ✅ `components/SmoothScrollProvider.tsx` - Client-side GSAP initialization

### 5. SEO Preserved

- ✅ All meta tags (Open Graph, Twitter Cards)
- ✅ JSON-LD structured data
- ✅ Favicons and manifest
- ✅ Font preloading
- ✅ Image preloading

### 6. Dev Server Status

- ✅ Next.js dev server running successfully on http://localhost:3000

---

## ⚠️ Remaining Tasks

### 1. Add 'use client' Directive to Components

The following components need the `'use client'` directive at the top since they use:

- Client-side hooks (useState, useEffect, useRef)
- GSAP animations
- Event handlers (onClick, etc.)

**Components to update:**

- ✅ `components/Hero.tsx` - Done
- ⏳ `components/About.tsx`
- ⏳ `components/CallToAction.tsx`
- ⏳ `components/Footer.tsx`
- ⏳ `components/Navbar.tsx` - **Needs special attention** (uses react-router)
- ⏳ `components/Services.tsx`
- ⏳ `components/SplashScreen.tsx`
- ⏳ `components/Testimonials.tsx`
- ⏳ `components/WhyTealeaf.tsx`
- ⏳ `components/FounderPain.tsx`
- ⏳ `components/ui/Button.tsx` (if it uses client features)

### 2. Fix Navbar Component

The `Navbar.tsx` component currently imports from `react-router-dom`:

```tsx
import { useNavigate, useLocation, Link } from "react-router-dom";
```

**Needs to be replaced with Next.js equivalents:**

```tsx
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
```

**Changes required:**

- Replace `useNavigate()` with `useRouter()`
- Replace `useLocation()` with `usePathname()`
- Replace `react-router-dom` Link with Next.js `Link`
- Update navigation logic to work with Next.js App Router

### 3. Test and Fix Issues

Once all components are updated:

- [ ] Test home page loads correctly
- [ ] Test GSAP scroll animations work
- [ ] Test splash screen animation
- [ ] Test navigation (navbar links, mobile menu)
- [ ] Test responsive design
- [ ] Test all sections render correctly
- [ ] Test Footer
- [ ] Test 404 page

### 4. Clean Up Old Files (Optional)

After migration is complete and tested, you can optionally remove:

- `index.html`
- `index.tsx`
- `App.tsx`
- `vite.config.ts`
- `vite-env.d.ts`
- `pages/` directory (old routing)

**Note:** Don't delete these until Next.js version is fully working!

### 5. Update Next.js Config (Minor)

- [ ] Fix turbo/turbopack config warning:
  ```ts
  // Change from:
  experimental: {
    turbo: {
    }
  }
  // To:
  turbopack: {
  }
  ```

---

## 📝 Next Steps

**Immediate priority:**

1. Add `'use client'` to all components that need it
2. Fix `Navbar.tsx` to use Next.js navigation
3. Test the app in the browser
4. Fix any runtime errors

**After that:**

1. Test all functionality works
2. Commit the working migration to the `nextjs-migration` branch
3. Consider creating a PR to merge into main

---

## 🚀 Running the App

### Development:

```bash
npm run dev
```

- Runs on http://localhost:3000

### Build (Production):

```bash
npm run build
npm start
```

### Old Vite Version (Main Branch):

```bash
git checkout main
npm run dev  # Will use Vite
```

---

## Notes

- The migration preserves all your existing component logic and GSAP animations
- S EO metadata is maintained in the Next.js layout
- Your existing CSS and Tailwind setup works with Next.js
- The splash screen and scroll animations are handled client-side through `SmoothScrollProvider`
