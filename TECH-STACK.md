# TECH-STACK.md — Rohit Patil Portfolio

## Runtime Technology Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| Build Tool | Vite | ^8.3.5 | Dev server, HMR, bundling |
| UI Framework | React | ^19.3.1 | Component model |
| Language | TypeScript | ~7.0.2 | Type safety |
| Styling | Tailwind CSS | ^3.x | Utility-first CSS |
| Animation | Framer Motion | ^14.7.1 | Entrance animations, slide panels, layout transitions |
| Icons | Lucide React | ^1.62.0 | UI icons (note: Github/Linkedin not in this version — see Icons.tsx) |
| Custom Icons | Inline SVG (Icons.tsx) | — | GitHub, LinkedIn brand icons |
| Fonts | Google Fonts | — | Space Grotesk (display), Inter (body), JetBrains Mono (code) |

## Dev Dependencies

| Package | Purpose |
|---------|---------|
| tailwindcss@3 | Tailwind CSS engine |
| postcss | CSS transformation pipeline |
| autoprefixer | Vendor prefix automation |
| @vitejs/plugin-react | React Fast Refresh in Vite |
| @types/react | TypeScript types for React |
| @types/react-dom | TypeScript types for React DOM |
| @types/node | TypeScript types for Node |

## Architecture Decisions

### Single-Page Application
No router is used — all sections are on a single scrollable page. Smooth-scroll navigation handles section jumping. This avoids unnecessary bundle weight and keeps deployment simple.

### No Backend
The portfolio is entirely client-side. No contact form backend, database, or authentication is present. The contact section uses mailto links.

### Canvas Animation
The hero uses a raw `<canvas>` element with RequestAnimationFrame for the node network. This is intentionally lightweight compared to a 3D library like Three.js. The animation is disabled on mobile and when `prefers-reduced-motion` is set.

### Custom Cursor
Implemented in `UIChrome.tsx` using RAF-based lerp interpolation. Only active on fine-pointer (mouse) devices. Does not override OS cursor behaviour on touchscreens.

### Data Layer
All content is stored in typed TypeScript data objects under `src/data/`. No CMS or external API is required. To update content, edit the data files directly.

### SVG Mockups
Project cards use hand-crafted SVG diagrams rather than stock photos. This avoids copyright issues and keeps the site deployable without real screenshots. Each mockup is clearly labelled as a conceptual interface diagram.

### Tailwind + Custom Properties
Design tokens are defined in both `tailwind.config.js` and as CSS custom properties (`--bg-primary`, `--accent`, etc.) in `index.css`. This allows tokens to be used in both Tailwind classes and raw CSS.

## Browser Support

Targets modern evergreen browsers (Chrome, Firefox, Edge, Safari). Uses standard CSS features with autoprefixer. No IE11 support.

## Performance Considerations

- Google Fonts loaded with `preconnect` and `display=swap`
- Canvas animation disabled on mobile (performance)
- Framer Motion `whileInView` used for lazy entrance animations
- `transform` and `opacity` used exclusively for animations (composited layers)
- No heavy 3D libraries included
- Images lazy-loaded where applicable
