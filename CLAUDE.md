# QuietByte Website — Design System Rules

## Overview
Static landing page for QuietByte indie iOS app studio. Hosted on Netlify, auto-deploys from GitHub.

## Project Structure
```
quietbyte_webpage/
├── index.html          ← Main page
├── privacy.html        ← Privacy policy
├── styles.css          ← All styles (CSS variables + components)
├── script.js           ← Interactions (feedback form)
├── images/             ← Logo, app icons, assets
│   ├── logo.svg        ← Light mode logo (bunny + wordmark)
│   ├── logo-dark.svg   ← Dark mode logo
│   ├── favicon.svg     ← Browser favicon
│   └── *.png           ← App icons
└── data/               ← App data (if any)
```

## Figma MCP Integration Rules

When implementing designs from Figma:

1. Run `get_design_context` for the exact node(s)
2. Run `get_screenshot` for visual reference
3. Translate output into vanilla HTML/CSS (NO frameworks)
4. Map Figma tokens to CSS variables in `:root`
5. Validate against Figma screenshot for 1:1 parity

IMPORTANT: This project uses vanilla HTML + CSS. No React, no Tailwind, no build tools. Translate any Figma MCP output (React + Tailwind) into plain HTML + CSS.

## Design System

### Brand Colors (CSS Variables)
```css
--color-bg: #FAF8F2;           /* Warm white — NEVER pure white */
--color-text: #141415;          /* Warm black — NEVER pure black */
--color-primary: #2AA6A0;       /* Teal accent */
--color-primary-dark: #1E8A85;  /* Teal dark */
--color-primary-light: rgba(42, 166, 160, 0.08);
--color-primary-glow: rgba(42, 166, 160, 0.2);
--color-text-secondary: #636366;
--color-text-muted: #aeaeb2;
--color-surface-glass: rgba(255, 255, 255, 0.7);
```

IMPORTANT: Never use `#FFFFFF` (pure white) or `#000000` (pure black). Always use warm white `#FAF8F2` and warm black `#141415`.

### Typography
- Font: `'SF Pro Rounded', 'Quicksand', 'Nunito', system-ui, sans-serif`
- Hero: 3rem bold
- Section titles: 2rem bold
- Body: 1rem regular
- Captions: 0.8rem
- Letter-spacing on headings: -0.02em

### Spacing
- Section gap: 80-120px vertical padding
- Card padding: 24-32px
- Inner gap: 20px
- Item gap: 12px
- Page horizontal padding: 20px (mobile) / 40px (desktop)

### Corner Radii
```css
--radius: 16px;      /* Default cards */
--radius-lg: 24px;   /* Large cards */
--radius-xl: 32px;   /* Hero elements */
--radius-pill: 50px; /* Buttons, badges */
```

### Shadows
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 20px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.08);
```

### Glass Morphism
Cards use frosted glass effect:
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.4);
border-radius: var(--radius-lg);
```

## Logo
- **Nav**: `images/logo.svg` (small, ~36px height)
- **Hero**: Same SVG, larger (~240px width)
- **Favicon**: `images/favicon.svg`
- SVGs are transparent background (no white rect)
- Logo features a sleeping bunny cursor in warm teal #2AA6A0

## Content Sections
1. **Nav** — Logo + Apps / About / Privacy links
2. **Hero** — Large logo + tagline + "Women-Owned" badge + CTA
3. **Apps Grid** — Cards for each app (icon, name, tagline, description, features, download link)
4. **Values** — Privacy, Lightweight, Crafted, Offline
5. **Roadmap** — Timeline: Live → Up Next → Later
6. **Feedback** — Contact form
7. **Footer** — Logo + Privacy Policy + © 2026

## Apps in Portfolio
- FreshNest (Live, Free)
- Notebook Games (Live, Free)
- Sudoku Garden (Live, Free)
- DataPace (Coming Soon, Free + $3.99 Pro)
- SeattleNest (Coming Soon, Free)
- ChoreQuest (Coming Soon, Free + $2.99 Pro)

IMPORTANT: Don't show pricing/monetization details on the public website (CLAUDE.md rule).

## Asset Handling
- IMPORTANT: If Figma MCP returns localhost source for an image, use directly
- IMPORTANT: DO NOT add icon packages — all assets come from Figma payload or images/ folder
- Store downloaded assets in `images/`
- App icons should be PNG, ~120x120px for display

## Anti-Patterns
- No decorative gradients or mesh backgrounds
- No stock photos or illustrations
- No pure white or pure black anywhere
- No heavy drop shadows
- No more than 2 accent colors beyond the palette
- No JavaScript frameworks — vanilla only

## Build & Deploy
No build step. Push to GitHub → Netlify auto-deploys.
```bash
git add . && git commit -m "update" && git push
```
