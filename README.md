# Rohit Patil — Portfolio

A premium personal portfolio for Rohit Patil, Full-Stack Developer | React Native Developer | AI/ML Enthusiast.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + Vite 8 |
| Language | TypeScript |
| Styling | Tailwind CSS 3 + Vanilla CSS |
| Animation | Framer Motion 14 |
| Icons | Lucide React + Custom SVG icons |
| Fonts | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |

---

## Local Setup

### Prerequisites
- Node.js v18+
- npm

### Install and Run

```powershell
# Install dependencies
npm install

# Start development server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # RP monogram favicon
│   └── resume.pdf           # ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky nav with mobile menu
│   │   ├── Hero.tsx          # Hero section
│   │   ├── HeroCanvas.tsx    # Interactive node canvas
│   │   ├── EngineeringSnapshot.tsx  # About + skills overview
│   │   ├── Projects.tsx      # Project cards + SVG mockups
│   │   ├── ProjectDetail.tsx # Slide-in detail panel
│   │   ├── Skills.tsx        # Technical toolkit matrix
│   │   ├── Experience.tsx    # Work + education + certs
│   │   ├── Contact.tsx       # Contact links
│   │   ├── Footer.tsx        # Footer
│   │   ├── UIChrome.tsx      # Progress bar + custom cursor
│   │   └── Icons.tsx         # Custom SVG icons (GitHub, LinkedIn)
│   ├── data/
│   │   ├── projects.ts       # Project data + architecture
│   │   ├── skills.ts         # Skill categories
│   │   └── experience.ts     # Work, education, certifications
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   └── useScrollY.ts
│   ├── styles/
│   │   └── index.css         # Global styles + Tailwind
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

---

## Adding Your Resume

1. Save your resume as a PDF named **`resume.pdf`**
2. Place it in the **`public/`** folder:
   ```
   public/resume.pdf
   ```
3. The "Download Resume" button in the navbar automatically checks for this file and enables itself when present.

---

## Updating Project Screenshots / Mockups

The project cards currently display SVG-based conceptual interface diagrams. To replace them with real screenshots:

1. Add your image files to `public/` (e.g., `public/vechvaluator-screenshot.png`)
2. In `src/components/Projects.tsx`, replace the `VechValuatorMockup` or `ServiceSyncMockup` component with an `<img>` element:
   ```tsx
   <img 
     src="/vechvaluator-screenshot.png" 
     alt="VechValuator application screenshot"
     className="w-full h-full object-cover"
   />
   ```

---

## Updating Project URLs

All project data is in `src/data/projects.ts`.

To update a repository URL or add a live demo:
```ts
{
  repoUrl: 'https://github.com/your-username/your-repo',
  demoUrl: 'https://your-live-demo.vercel.app',  // add when available
}
```

The "Live Demo" button only appears when `demoUrl` is defined.

---

## Deployment

### GitHub Pages

1. Install the deploy tool:
   ```powershell
   npm install -D gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Add `base` to `vite.config.ts`:
   ```ts
   base: '/your-repo-name/',
   ```
4. Deploy:
   ```powershell
   npm run deploy
   ```

### Vercel (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Vite — no configuration needed
4. Set the build command to `npm run build` and output directory to `dist`
5. Click Deploy

After deployment, update the canonical URL in `index.html`:
```html
<link rel="canonical" href="https://your-domain.vercel.app" />
```

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#0B0D0C` |
| Surface | `#111412`, `#161918` |
| Primary text | `#F3F3EE` |
| Secondary text | `#929792` |
| Muted text | `#5A5F5B` |
| Accent (lime) | `#C7F36B` |
| Border | `#1E2420` |

---

## License

Personal portfolio — all rights reserved by Rohit Patil.
