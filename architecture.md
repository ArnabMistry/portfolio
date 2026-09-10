# Technical Architecture & System Reference

> **Technical Source of Truth**  
> Companion to [design.md](file:///c:/builds/portfolio/design.md) (visual design source of truth).  
> Primary purpose: Provide lightweight, high-value architectural context so future AI agents don't waste tokens rediscovering structure and data flow.

---

## 1. Application Structure & Component Tree

The portfolio is structured as a Next.js App Router single-page application:

```text
app/
├── layout.tsx              # Root Layout: Fonts, SmoothScrollProvider, Shader, Cursor
├── page.tsx                # Single-page compositor
└── globals.css             # Tailwind v4 import, theme inline, lenis/marquee CSS
components/
├── SmoothScrollProvider.tsx# Global Lenis smooth-scroll provider
├── MultiCursor.tsx         # Global 3-ring spring mouse follower
├── FooterContact.tsx       # Contact section container
├── FooterRow.tsx           # Reusable interactive marquee/spring footer row
├── section/
│   ├── hero.tsx            # Inline header ("ARNAB MISTRY") + Hero typography
│   ├── aboutreveal.tsx     # Scroll-linked word-by-word opacity reveal
│   ├── ArsenalSection.tsx  # Categorized tech stack rows with hover animations
│   └── projects.tsx        # Project showcase list + full modal view
├── ui/
│   ├── shaderbg.tsx        # Active background: Dithering warp shader
│   ├── bg.tsx              # [DORMANT] Alternate Swirl/Chromatic shader
│   └── text-reveal.tsx     # [DORMANT] Alternate useInView text reveal
├── ascii-effect.tsx        # [EXPERIMENTAL] GLSL postprocessing ASCII shader
└── effect-scene.tsx        # [EXPERIMENTAL] Three.js / R3F 3D Ferrari ASCII scene
lib/
└── utils.ts                # cn() helper (clsx + tailwind-merge)
```

---

## 2. Client vs. Server Boundaries

- **Layout (`app/layout.tsx`)**: Server Component shell rendering `<html>` and `<body>`, but directly mounting interactive client providers (`SmoothScrollProvider`, `MultiCursor`, `BackgroundShader`).
- **Page (`app/page.tsx`)**: Marked `"use client"`. All child sections are client components due to dependence on:
  - Framer Motion animation hooks (`useScroll`, `useTransform`, `useSpring`, `useMotionValue`).
  - Browser window listeners (`mousemove`, `resize`, `requestAnimationFrame`).
  - WebGL `<canvas>` elements and dynamic shaders.

---

## 3. Data Flow & State Management

State is lightweight and kept local to each section:

1. **Projects Data** ([components/section/projects.tsx](file:///c:/builds/portfolio/components/section/projects.tsx)):
   - Array `projects` with objects `{ title, image, desc, github, live }`.
   - Local state: `hoveredProject` (controls the floating preview image) and `activeProject` (controls modal display).
   - Shared layout animation via Framer Motion `layoutId="project-image"`.
2. **Tech Arsenal Data** ([components/section/ArsenalSection.tsx](file:///c:/builds/portfolio/components/section/ArsenalSection.tsx)):
   - Array `techStack` typed as `TechCategory[]` (`title`, `items: string[]`).
   - Purely presentational; no global state.
3. **Contact Links** ([components/FooterContact.tsx](file:///c:/builds/portfolio/components/FooterContact.tsx)):
   - Individual contact items rendered as `<FooterRow />` instances with explicit `onClick` handlers (`mailto:` and `window.open`).

---

## 4. Animation Architecture

1. **Smooth Scroll Engine**:
   - [components/SmoothScrollProvider.tsx](file:///c:/builds/portfolio/components/SmoothScrollProvider.tsx) instantiates `@studio-freight/lenis`.
   - Config: `{ lerp: 0.075, smoothWheel: true }`.
   - Cleaned up on unmount (`lenis.destroy()`).
2. **Framer Motion Spring Profiles**:
   - High-stiffness snappy transitions (arrows): `{ stiffness: 700, damping: 46, mass: 0.45 }`.
   - Smooth curtain slides (footer overlay): `{ stiffness: 520, damping: 40, mass: 0.6 }`.
   - Cursor multi-followers: Tier 1 (`stiffness: 600`), Tier 2 (`stiffness: 300`), Tier 3 (`stiffness: 130`).
3. **CSS Keyframe Marquee**:
   - Infinite horizontal ticker `@keyframes marquee` in `globals.css` used inside `FooterRow` for high-performance GPU scrolling.

---

## 5. WebGL & Shader Pipeline

1. **Active Background** ([components/ui/shaderbg.tsx](file:///c:/builds/portfolio/components/ui/shaderbg.tsx)):
   - Lazy-loads `Dithering` from `@paper-design/shaders-react` inside a React `<Suspense>` fallback.
   - Mounted fixed full-screen at `z-0` with `pointer-events-none`.
   - Render parameters: `colorBack="#00000000"`, `colorFront="#EC4E02"`, `shape="warp"`, `type="4x4"`, `speed={0.2}`.
2. **Experimental 3D Module** ([components/effect-scene.tsx](file:///c:/builds/portfolio/components/effect-scene.tsx)):
   - Built with `@react-three/fiber`, `@react-three/drei`, and `postprocessing`.
   - Loads an external Ferrari GLTF model (`https://threejs.org/examples/models/gltf/ferrari.glb`).
   - Postprocessed through custom GLSL ASCII shader [components/ascii-effect.tsx](file:///c:/builds/portfolio/components/ascii-effect.tsx) with vaporwave color mapping.
   - **Status**: Currently unmounted. Do NOT delete or modify unless specifically instructed to integrate it.

---

## 6. Major Dependencies & Bundle Notes

- **Three.js & Shaders**: `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, `postprocessing`, `@paper-design/shaders-react`.
  - *Agent Caution*: Dynamic client-only imports must be preserved to prevent SSR crashes.
- **Styling**: `tailwindcss` v4, `@tailwindcss/postcss`, `tw-animate-css`.
- **Icons**: `lucide-react`.

---

## 7. Rules for Future Engineering Tasks

- **Adding a Project**: Append to the `projects` array in [components/section/projects.tsx](file:///c:/builds/portfolio/components/section/projects.tsx). Maintain the schema `{ title, image, desc, github, live }`.
- **Adding Tech Skills**: Append to `techStack` in [components/section/ArsenalSection.tsx](file:///c:/builds/portfolio/components/section/ArsenalSection.tsx).
- **Adding External Links**: Ensure links use `noopener,noreferrer` and valid accessibility labels.
- **Preserving Unmounted Files**: Do not refactor or remove `effect-scene.tsx`, `ascii-effect.tsx`, or `bg.tsx` during routine maintenance.
