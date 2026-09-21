# Javad (JJ) Aman — Portfolio

A minimal, dark-themed personal portfolio built with Vite + React + TypeScript, styled after
[react-portfolio-template](https://yujisatojr.github.io/react-portfolio-template/).

## Folder structure

```
front_page/
├─ public/
│  └─ favicon.svg          # tab icon; drop resume.pdf here too (see below)
├─ src/
│  ├─ components/          # one folder per UI section, each with its own *.module.css
│  │  ├─ Layout/           # Header (nav + theme toggle) and Footer
│  │  ├─ ThemeToggle/
│  │  ├─ Hero/
│  │  ├─ Experience/
│  │  ├─ Education/
│  │  ├─ Skills/
│  │  ├─ Projects/         # Projects.tsx (filter state) + ProjectCard.tsx
│  │  └─ Publications/
│  ├─ context/
│  │  └─ ThemeContext.tsx  # dark/light state, persisted to localStorage
│  ├─ data/                # <-- EDIT YOUR CONTENT HERE, not the components
│  │  ├─ types.ts
│  │  ├─ profile.ts        # name, title, bio, links
│  │  ├─ experience.ts
│  │  ├─ education.ts
│  │  ├─ skills.ts
│  │  ├─ projects.ts
│  │  └─ publications.ts
│  ├─ styles/
│  │  └─ index.css         # CSS variables (theme tokens), resets, shared layout classes
│  ├─ App.tsx               # composes the page from the section components
│  └─ main.tsx               # React entry point
├─ index.html                # sets data-theme before React mounts (no flash of wrong theme)
├─ vite.config.ts            # base path for GitHub Pages
└─ package.json
```

**To update your info**, only touch files in `src/data/` — the components just render whatever
is in there. `profile.ts` currently has placeholder URLs for GitHub, LinkedIn, and Google
Scholar; replace those, and drop your résumé PDF at `public/resume.pdf` (the Hero button
already links to `/resume.pdf`).

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build     # type-checks and outputs to dist/
npm run preview   # serve the production build locally
```

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In `vite.config.ts`, confirm `base` matches your repo name exactly, e.g. for
   `github.com/you/front_page` it should be `base: '/front_page/'`. (If you deploy to a
   `<username>.github.io` user/org site instead of a project repo, set `base: '/'`.)
3. Deploy:

   ```bash
   npm run deploy
   ```

   This runs `npm run build` (via `predeploy`) and pushes the `dist/` output to a `gh-pages`
   branch using the `gh-pages` package.
4. In your GitHub repo, go to **Settings → Pages**, and under **Build and deployment** set
   **Source** to **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**. Save.
5. Your site will be live at `https://<username>.github.io/front_page/` after a minute or two.

Re-run `npm run deploy` any time you want to publish new changes.

## Theme

Dark mode is the default. `ThemeContext` toggles a `data-theme` attribute on `<html>` between
`"dark"` and `"light"`, persists the choice to `localStorage`, and `index.html` reads that
value inline before React mounts to avoid a flash of the wrong theme. All colors are CSS
variables defined in `src/styles/index.css` — change them there to restyle the whole site.
