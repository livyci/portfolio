# Marlene Kuhn — portfolio

A personal portfolio site. Professional, but hand-drawn and a little whimsical — it borrows the
hand-painted, pastel look of my [Starlit](https://starlit-two.vercel.app) habit tracker.

**Stack:** React 19 + Vite + TypeScript, frontend-only. CSS Modules + design tokens. No backend —
the content is static, so a server would just be dead weight.

## Structure

```
src/
  content/      # single source of truth — profile, projects, awards (typed data)
  art/          # hand-drawn SVG art: the star + per-project icons
  components/   # Nav, Hero, About, Projects, Awards, Footer, Sparkles, Reveal
  styles/       # tokens.css (palette / wobble radii / shadows) + global.css
```

To change what the site says, edit the files in `src/content/` — everything is typed.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # type-checks, then outputs a static bundle to dist/
npm run preview    # serve the built bundle
```

## Deploy

Static bundle — deploys anywhere. On Vercel it auto-detects Vite; or:

```bash
npm run build && npx vercel --prod
```
