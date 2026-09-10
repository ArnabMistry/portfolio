# Portfolio Design System & Visual Contract

> **Design Source of Truth**  
> Reverse-engineered directly from the active codebase (`c:\builds\portfolio`).  
> Primary codebase evidence: [app/globals.css](file:///c:/builds/portfolio/app/globals.css), [app/layout.tsx](file:///c:/builds/portfolio/app/layout.tsx), [app/page.tsx](file:///c:/builds/portfolio/app/page.tsx), [components/section/](file:///c:/builds/portfolio/components/section/), and [components/](file:///c:/builds/portfolio/components/).

---

## AI Implementation Rules (The AI Design Contract)

Every AI agent working on this codebase **must** adhere strictly to the following contract before generating or modifying UI:

1. **Check `design.md` first**: Always verify design tokens, font assignments, and motion patterns against this document before writing UI code.
2. **Prefer consistency over novelty**: Never invent new design styles, color palettes, or layout concepts when an established project pattern exists.
3. **Reuse existing components and primitives**: Before creating a new component, check `components/section/`, `components/ui/`, and `components/`. Extend or reuse existing patterns rather than creating parallel implementations.
4. **Reuse established typography classes**: Do not assign fonts haphazardly. Only use the defined typography pairing rules (`font-chunk` for brutalist display headers, `font-alexbrush` for cursive accents, `font-soria` for editorial quotes/row headers, `font-brolimo` for uppercase tracked labels/titles, `font-sans` for body/metadata).
5. **Never introduce arbitrary colors**: The accent color is burnt orange (`#EC4E02` / `orange-700`). Do not introduce blues, purples, greens, or alternative shades unless explicitly instructed.
6. **Reuse existing motion primitives**: Use Framer Motion springs and Lenis smooth scrolling. Never import or introduce competing animation engines. Reuse the spring curves established in [components/FooterRow.tsx](file:///c:/builds/portfolio/components/FooterRow.tsx) and [components/MultiCursor.tsx](file:///c:/builds/portfolio/components/MultiCursor.tsx).
7. **Preserve responsive behavior and mobile viewport safeguards**: Never use fixed viewport heights (`h-screen`) without overflow handling or fixed pixel widths (`w-225`) that break mobile layouts.
8. **Do not silently fix known inconsistencies**: Preserve documented project quirks (such as inline headers or specific section orders) unless the task explicitly asks to resolve them.
9. **Update `design.md` only on intentional architectural changes**: Only update this document when the user explicitly requests an expansion or revision of the design system.

---

## 1. Design Philosophy

The portfolio embodies an **Industrial Brutalist meets High-End Editorial** visual identity:
- **Pitch-Black Atmosphere**: Deep black canvases (`#000000`) paired with subtle grain/dither shaders, creating an immersive, theatre-like dark room.
- **Extreme Typographic Contrast**: High-friction pairings between monumental, ultra-heavy display typography (`font-chunk`), refined classic serif lettering (`font-soria`), humanistic cursive script (`font-alexbrush`), and structured mechanical uppercase labels (`font-brolimo`).
- **Tactile Micro-Interactions**: Mechanical spring-physics animations, fluid cursor tracking, and bold hover reveals that convey engineering precision.
- **Selective Electric Accent**: A signature burnt orange accent cutting through monochrome backgrounds, used sparingly for maximum focal impact.

---

## 2. Design Principles

1. **Precision & Discipline**: Layouts are deliberate, structured with stark dividers (`border-white/10`, `border-white/20`) and clear section index numbers (`01 // About Me`, `04 // Initiate Contact`).
2. **Dramatic Scale & Tension**: Headlines reach massive viewport proportions (`text-[10vw]`, `text-[12vw]`), offset by tiny, tracked uppercase labels (`text-xs tracking-widest`).
3. **Difference & Layering**: Extensive use of `mix-blend-difference` allows white and orange typography to dynamically invert and cut through underlying canvas shaders.
4. **Physicality in Motion**: UI elements respond with inertia, spring stiffness, and velocity rather than linear or generic easing curves.

---

## 3. Color System

The project is permanently dark-themed by design (background hardcoded to pure black on `body`).

| Color Role | Value / Utility | Code Representation | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | Pure Black (`#000000`) | `bg-black`, `bg-[#000000]` | Global body and scene backdrop |
| **Primary Text** | Pure White (`#ffffff`) | `text-white`, `text-zinc-100` | High-emphasis headers, active items |
| **Signature Accent** | Burnt Orange (`#EC4E02` / `orange-700`) | `#EC4E02`, `text-orange-700`, `bg-orange-700` | Accent text, hover overlays, cursor ring, shader |
| **Secondary Accent** | Medium Orange | `border-orange-500` | Secondary follower ring in `MultiCursor` |
| **Deep Accent** | Deep Burnt Orange | `border-orange-800` | Tertiary follower ring in `MultiCursor` |
| **Muted Text / Labels** | Neutral Gray 400 | `text-gray-400`, `text-zinc-400`, `text-white/55` | Section numbers, metadata labels, quotes author |
| **Inactive / Subtle Text** | Neutral Gray 500 | `text-gray-500`, `text-zinc-500` | Inactive tech stack items, inactive project list |
| **Hover Surface Tint** | Orange 600 @ 14% | `hover:bg-orange-600/14` | Tech category row hover in `ArsenalSection` |
| **Structural Borders** | White @ 10% – 20% | `border-white/10`, `border-white/20` | Section dividers, row borders, header underline |
| **Modal Backdrop** | Black @ 70% + Blur | `bg-black/70 backdrop-blur-lg` | Project detail modal overlay |

> [!NOTE]
> `globals.css` declares full shadcn OKLCH color variables (`--background`, `--foreground`, etc.), but components predominantly use Tailwind utilities (`text-white`, `text-orange-700`, `border-white/20`) and hardcoded values.

---

## 4. Typography System

The project loads **4 local font files** in [app/layout.tsx](file:///c:/builds/portfolio/app/layout.tsx) and 2 Google fonts via `next/font/google`.

### Font Registry

| Font Name | CSS Class | Variable | Source | Semantic Role |
| :--- | :--- | :--- | :--- | :--- |
| **Chunk** | `.font-chunk` | `--font-chunk` | `fonts/chunk-font.ttf` | Ultra-bold brutalist display headers (`PRECISION`, `DEDICATION`) |
| **Brolimo** | `.font-brolimo` | `--font-brolimo` | `fonts/BrolimoRegular.ttf` | Section headings, technical categories, tracking-wide labels, author tags |
| **Soria** | `.font-soria` | `--font-soria` | `fonts/soria-font.ttf` | High-contrast editorial display quotes, footer interactive row titles |
| **Alex Brush** | `.font-alexbrush`| `--font-alexbrush`| `fonts/alexbrush-font.ttf` | Flowing script accent words, cursive reveal highlights, tech row titles |
| **Geist Sans** | `.font-sans` | `--font-geist-sans`| Google Fonts | Descriptive body copy, subtitle sentences, button text, project descriptions |
| **Geist Mono** | `.font-mono` | `--font-geist-mono`| Google Fonts | Code and monospace tokens (available via Tailwind theme) |

### Typographic Hierarchy & Conventions

- **Hero Monumental Words**: `font-chunk text-7xl md:text-[10vw] leading-none tracking-wide text-white uppercase`
- **Hero Script Interlude**: `font-alexbrush text-7xl md:text-[12vw] text-orange-700 lowercase`
- **Section Big Titles**: `font-brolimo text-[12vw] md:text-[8vw] uppercase leading-none tracking-tighter`
- **Editorial Large Quotes**: `font-soria text-[10vw] md:text-[6vw] lg:text-[4.5vw] uppercase text-center leading-tight`
- **Interactive Row Titles**: `font-soria font-black text-4xl sm:text-6xl md:text-[6vw] leading-none uppercase pt-2`
- **Section Number Labels**: `text-xs md:text-sm font-semibold tracking-widest font-brolimo uppercase text-white/55` (Pattern: `01 // About Me`, `04 // Initiate Contact`)
- **Body & Subtitles**: `font-sans text-sm md:text-base text-gray-400 uppercase tracking-widest max-w-xs`
- **Word Reveal Units**: `text-[8vw] sm:text-[6vw] md:text-[4.5vw] leading-[1.1] tracking-tight` (switching between `font-brolimo uppercase` and `font-alexbrush`)

---

## 5. Spacing & Sizing Rhythm

- **Horizontal Page Gutter**:
  - Small screens: `px-4` to `px-6`
  - Medium screens: `md:px-12` to `md:px-16`
  - Large screens: `lg:px-24`
- **Vertical Section Spacing**:
  - Minimum height: `min-h-screen` or `min-h-[150vh]` for scroll-bound interactions.
  - Section vertical padding: `py-12`, `py-20`, `py-32`.
- **Gap Rhythm**:
  - Micro gaps: `gap-2` (8px), `gap-4` (16px) for inline text and icon links.
  - Grid & item gaps: `gap-6` (24px) to `gap-10` (40px).
  - Word reveal flow: `gap-x-[1.5vw] gap-y-[1vw]`.

---

## 6. Layout & Grid Principles

- **Global Viewport Layering**:
  - `z-0`: Fixed full-screen shader background ([components/ui/shaderbg.tsx](file:///c:/builds/portfolio/components/ui/shaderbg.tsx)) with `pointer-events-none`.
  - `z-10`: Main content container with `relative z-10`.
  - `z-20` / `z-50`: Floating overlays, interactive lists, and modal overlays.
  - `z-9997` – `z-9999`: Custom interactive cursor followers.
- **Section Structural Divide**:
  - Sections are visually separated by full-width thin borders: `border-b border-white/10` or `border-t border-white/20`.
- **Editorial Asymmetry**:
  - Content uses 12-column grid setups (`grid grid-cols-1 md:grid-cols-12 gap-10`), reserving 4 columns for sticky/static category labels and 8 columns for narrative content.
  - Heavy elements are positioned diagonally (e.g., hero top-left to bottom-right flow; projects quote centered with list pinned bottom-right and preview pinned top-left).

---

## 7. Component Specifications

### A. Header / Top Navigation
- **Current Pattern**: Inline header inside [components/section/hero.tsx](file:///c:/builds/portfolio/components/section/hero.tsx).
- **Styling**: `px-20 pt-11 flex items-center justify-between`.
- **Elements**: Left author brand (`ARNAB MISTRY`), Right text (`SUIII`). Both styled with `font-brolimo text-sm font-semibold tracking-widest text-white`.
- **Rule**: Keep navigation minimal, edge-to-edge, and non-intrusive.

### B. Hero Section
- **Composition**: Three-tier staggered display headline:
  1. Top: Left-aligned word in `font-chunk`.
  2. Middle: Center-aligned connector word in `font-alexbrush text-orange-700`.
  3. Bottom: Right-aligned word in `font-chunk`.
  4. Indicator: Bottom-right callout with horizontal rule (`w-12 h-px bg-white`) and label `SCROLL TO EXPLORE`.

### C. Scroll Word-Reveal Section (About)
- **Component**: [components/section/aboutreveal.tsx](file:///c:/builds/portfolio/components/section/aboutreveal.tsx)
- **Mechanism**: Framer Motion `useScroll` target with offset `["start 80%", "end 80%"]`.
- **Effect**: Words progress from `opacity: 0.15` to `opacity: 1` as scroll progresses (`[threshold, threshold + 0.06]`).
- **Blends**: Enclosed in `mix-blend-difference` to maintain contrast with the animated background shader.

### D. Tech Arsenal Rows
- **Component**: [components/section/ArsenalSection.tsx](file:///c:/builds/portfolio/components/section/ArsenalSection.tsx)
- **Layout**: Row-based list with `border-b border-white/10 py-10 lg:py-16`.
- **Hover State**: `hover:bg-orange-600/14` background flash with `transition-colors duration-300`.
- **Title Behavior**: Category title in `font-alexbrush` translates horizontally `group-hover:translate-x-3` and turns `group-hover:text-orange-700`.
- **Items**: Horizontal flex-wrap tags in `font-brolimo text-gray-500 group-hover:text-white transition-colors duration-300`.

### E. Project Showcase & Modal
- **Component**: [components/section/projects.tsx](file:///c:/builds/portfolio/components/section/projects.tsx)
- **Showcase View**:
  - Background: Centered watermark quote in `font-soria`.
  - Floating Image: Top-left thumbnail `w-105 h-65 rounded-3xl overflow-hidden shadow-2xl` with `layoutId="project-image"`.
  - Project List: Bottom-right list; hovered project updates preview image and expands an orange indicator bar (`group-hover:w-10 bg-orange-700 h-1 md:h-1.5 rounded-full`).
- **Modal View**:
  - Backdrop: `fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center`.
  - Smooth Transition: Shared `layoutId="project-image"` expands image to `w-225 h-112.5 rounded-3xl`.
  - Action Buttons: Pill buttons with hover invert effects (`hover:bg-white hover:text-black hover:scale-105 active:scale-95`).

### F. Interactive Footer Contact Rows
- **Components**: [components/FooterContact.tsx](file:///c:/builds/portfolio/components/FooterContact.tsx) & [components/FooterRow.tsx](file:///c:/builds/portfolio/components/FooterRow.tsx)
- **Headline**: Multi-colored banner `HAVE AN` (`text-white`) `IDEA?` (`text-orange-700`) in `font-brolimo text-[13vw] md:text-[9vw]`.
- **Row Interaction**:
  - Default: Bordered row with `font-soria` title and diagonal `-rotate-45` arrow.
  - Hover: An orange curtain (`bg-orange-700`) slides upward (`y: 101%` to `y: 0%`) revealing an infinite marquee ticker (`animate-marquee`) repeating the title and icon.
  - Arrow Animation: Diagonal exit-and-reentry using Framer Motion springs.

---

## 8. Borders, Radius & Shadows

- **Border Width**: Standard `1px` borders (`border-b`, `border-t`).
- **Border Colors**: Translucent white (`border-white/10`, `border-white/20`).
- **Border Radius**:
  - Project preview cards & modal images: `rounded-3xl` (24px).
  - Interactive pill buttons: `rounded-full` (9999px).
  - Hover bars: `rounded-full`.
  - Cursor followers: `rounded-full`.
  - CSS variable base token: `--radius: 0.625rem` (10px) in `globals.css`.
- **Shadows**:
  - Cards and modal assets: `shadow-2xl`.
  - Most layout elements rely on crisp flat borders and blends rather than soft drop shadows.

---

## 9. Motion & Animation Philosophy

1. **Lenis Smooth Scroll**:
   - Provider: [components/SmoothScrollProvider.tsx](file:///c:/builds/portfolio/components/SmoothScrollProvider.tsx)
   - Parameters: `lerp: 0.075`, `smoothWheel: true`.
   - Normalizes browser wheel scrolling for cinematic momentum.
2. **Spring Physics**:
   - Arrows & Fast transitions: `{ type: "spring", stiffness: 700, damping: 46, mass: 0.45 }`.
   - Overlays & Curtains: `{ type: "spring", stiffness: 520, damping: 40, mass: 0.6 }`.
   - Cursors: Multi-tiered damping from fast (`stiffness: 600, damping: 35`) to slow (`stiffness: 130, damping: 20`).
3. **Marquee Tickers**:
   - CSS animation `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`.
   - Timing: `18s linear infinite`.
4. **Shader Motion**:
   - Real-time WebGL Dithering shader running at `speed={0.2}` in a background WebGL canvas.

---

## 10. Imagery & Assets

- **Project Images**:
  - Rendered via Next.js `<Image fill className="object-cover" />`.
  - Stored under `/public/placeholder/` or `/public/`.
  - Default opacity in preview state: `opacity-80` to sit comfortably in dark ambiance.
- **Icons**:
  - `lucide-react` icons exclusively (`MailIcon`, `GithubIcon`, `TwitterIcon`, `LinkedinIcon`, `ArrowRight`).
  - Sized at `w-10 h-10 md:w-16 md:h-16 text-white` in footer rows and `w-6 h-6 md:w-10 md:h-10` in action containers.

---

## 11. Responsive Design & Breakpoints

- **Tailwind Breakpoints Used**: `sm` (640px), `md` (768px), `lg` (1024px).
- **Fluid Typography**: Extensive reliance on `vw` units to scale fluidly between mobile (`7xl`, `8vw`, `12vw`) and desktop (`4.5vw`, `6vw`, `10vw`).
- **Layout Collapsing**:
  - Grid columns collapse from `md:grid-cols-12` to single-column `grid-cols-1` on mobile.
  - Tech categories collapse from row (`lg:flex-row`) to vertical stack (`flex-col`).
  - Section headers shift from `flex-col` to `md:flex-row md:items-end justify-between`.

---

## 12. Accessibility Conventions & Expectations

### Current Implementation
- [components/FooterRow.tsx](file:///c:/builds/portfolio/components/FooterRow.tsx) implements keyboard accessibility:
  - `role={onClick ? "button" : undefined}`
  - `tabIndex={onClick ? 0 : undefined}`
  - `onKeyDown` supporting `Enter` and `Space`.
  - Synchronized `onFocus` and `onBlur` states.

### Expectations for Future UI Work
- All interactive list items and cards must have valid ARIA roles and keyboard activation handlers.
- Modals must implement `aria-modal="true"`, focus trapping, `Escape` key close handling, and explicit `aria-label` on close triggers.
- Screen-reader labels (`sr-only`) must accompany icon-only controls.
- Maintain contrast ratio awareness when using low-opacity text (`text-white/55`, `text-zinc-500`).

---

## 13. Do / Don't Rules for Future UI Work

### DO:
- **DO** use the defined font classes (`font-chunk`, `font-brolimo`, `font-soria`, `font-alexbrush`, `font-sans`).
- **DO** use the signature burnt orange (`#EC4E02` / `text-orange-700` / `bg-orange-700`) as the exclusive accent color.
- **DO** use `mix-blend-difference` on text layers that sit above or interact with background canvas shaders.
- **DO** use Framer Motion springs and layout IDs for micro-interactions.
- **DO** maintain uppercase tracking on technical labels (`uppercase tracking-widest text-xs`).

### DON'T:
- **DON'T** introduce standard Tailwind colors (e.g. `bg-blue-600`, `text-emerald-500`, `bg-purple-700`).
- **DON'T** add generic white cards with rounded-lg borders and grey dropshadows.
- **DON'T** introduce standard UI library components (like unstyled Bootstrap/Chakra modals) that clash with the brutalist aesthetic.
- **DON'T** use fixed pixel heights or widths (`w-225`) without responsive modifiers.
- **DON'T** insert multiple `<h1>` elements inside a single section.

---

## 14. Existing Patterns to Reuse

1. **Section Indexing & Label Pattern**:
   ```tsx
   <p className="text-white/55 uppercase text-sm font-semibold tracking-widest font-brolimo">
     01 // Section Name
   </p>
   ```
2. **Pill Action Button**:
   ```tsx
   <a className="cursor-target group flex items-center justify-center gap-2 px-8 py-4 bg-orange-700 text-white rounded-full font-sans uppercase text-sm tracking-wider font-bold transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white hover:text-black">
     LABEL
   </a>
   ```
3. **Interactive Sliding Row**:
   - Reuse [components/FooterRow.tsx](file:///c:/builds/portfolio/components/FooterRow.tsx) or its spring transition values for list items, navigation links, or accordion elements.
4. **Scroll Word Reveal**:
   - Reuse the `RevealWord` pattern from [components/section/aboutreveal.tsx](file:///c:/builds/portfolio/components/section/aboutreveal.tsx) for long-form narrative sections.

---

## 15. Known Inconsistencies (Documented, Do Not Silently Change)

The following inconsistencies exist in the current implementation. Future agents **must not** automatically refactor or "fix" these unless explicitly instructed:

1. **Header / Navbar Placement**:
   - The navigation header is currently hardcoded inside [components/section/hero.tsx](file:///c:/builds/portfolio/components/section/hero.tsx) lines 7–14 instead of being a global component in `layout.tsx` or `app/page.tsx`.
   - The right navigation item is placeholder text (`SUIII`).
2. **Semantic Heading Hierarchy**:
   - Multiple `<h1>` tags are used across individual components (e.g., 5 `<h1>` tags in Hero, 2 in FooterContact, 1 in Projects).
3. **Accent Color Variation**:
   - The background shader front color is `#EC4E02`.
   - UI buttons and hover overlays use Tailwind `orange-700` (`#c2410c`).
   - The cursor followers use `border-orange-500` and `border-orange-800`.
   - Tech row hover uses `hover:bg-orange-600/14`.
   - There is currently no single CSS variable binding them together.
4. **Unused / Dormant Modules**:
   - [components/ui/bg.tsx](file:///c:/builds/portfolio/components/ui/bg.tsx): Dormant shader background (commented out in `layout.tsx`).
   - [components/ui/text-reveal.tsx](file:///c:/builds/portfolio/components/ui/text-reveal.tsx): Unused alternative word-reveal component.
   - [components/ascii-effect.tsx](file:///c:/builds/portfolio/components/ascii-effect.tsx) & [components/effect-scene.tsx](file:///c:/builds/portfolio/components/effect-scene.tsx): Full 3D Ferrari ASCII shader scene that is not mounted on any page.
5. **Dark Mode Classes vs Hardcoded Dark**:
   - `globals.css` specifies light and dark CSS variable palettes via `.dark`, but the application hardcodes `bg-black` and dark classes directly on HTML elements without toggling `.dark`.

---

## 16. Source References

- **Global Shell & Layout**: [app/layout.tsx](file:///c:/builds/portfolio/app/layout.tsx)
- **Theme & Tokens**: [app/globals.css](file:///c:/builds/portfolio/app/globals.css)
- **Hero & Inline Header**: [components/section/hero.tsx](file:///c:/builds/portfolio/components/section/hero.tsx)
- **Scroll Word Reveal**: [components/section/aboutreveal.tsx](file:///c:/builds/portfolio/components/section/aboutreveal.tsx)
- **Arsenal Tech Grid**: [components/section/ArsenalSection.tsx](file:///c:/builds/portfolio/components/section/ArsenalSection.tsx)
- **Project Showcase & Modal**: [components/section/projects.tsx](file:///c:/builds/portfolio/components/section/projects.tsx)
- **Footer Contact & Animated Rows**: [components/FooterContact.tsx](file:///c:/builds/portfolio/components/FooterContact.tsx), [components/FooterRow.tsx](file:///c:/builds/portfolio/components/FooterRow.tsx)
- **Multi-Cursor**: [components/MultiCursor.tsx](file:///c:/builds/portfolio/components/MultiCursor.tsx)
- **Smooth Scroll Provider**: [components/SmoothScrollProvider.tsx](file:///c:/builds/portfolio/components/SmoothScrollProvider.tsx)
- **Background Shader**: [components/ui/shaderbg.tsx](file:///c:/builds/portfolio/components/ui/shaderbg.tsx)
