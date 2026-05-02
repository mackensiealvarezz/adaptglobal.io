# Adapt Homepage — Next.js (App Router)

A modern redesign of [adaptglobal.io](https://adaptglobal.io/), built with Next.js 15 (App Router) + React 18.

## Quick start

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm start        # run the production build
```

## Why Next.js gives you bigger SEO wins than Vite

- **Server-rendered HTML** — Google sees fully-rendered markup on first request (no Babel-in-browser, no client-side hydration delay).
- **Built-in `metadata` API** — title, description, Open Graph, Twitter cards, canonical URLs all live in `src/app/layout.jsx`.
- **`sitemap.xml` + `robots.txt`** — auto-generated from `src/app/sitemap.js` and `src/app/robots.js`.
- **Image optimization** — replace `<img>` with `next/image` and Next will generate WebP/AVIF, lazy-load, and serve correctly-sized variants.
- **Edge / static rendering** — deploy to Vercel and the homepage is served from CDN edge nodes globally.

## Project structure

```
next-app/
├── package.json
├── next.config.mjs
├── jsconfig.json
└── src/
    ├── app/
    │   ├── layout.jsx       ← <html>, fonts, metadata, JSON-LD
    │   ├── page.jsx         ← homepage composes all sections
    │   ├── globals.css      ← design tokens
    │   ├── sitemap.js       ← auto-generated sitemap.xml
    │   └── robots.js        ← auto-generated robots.txt
    ├── components/          ← all sections (client components)
    └── tweaks-panel.jsx     ← optional Tweaks UI
```

## Deploy

**Vercel (recommended):**
```bash
npx vercel
```
Or push to GitHub and import the repo on vercel.com — zero configuration.

**Other hosts:** Next.js can also export a static site (`next build` then `next export`) if your host doesn't support Node — but you'll lose ISR and on-demand revalidation.

## Customizing

- **Audio CDN URLs**: edit `TRACK_FILES` at the top of `src/components/audio-demo.jsx`
- **Brand colors**: edit `ACCENT_PRESETS` in `src/app/page.jsx` or the `:root` block in `src/app/globals.css`
- **SEO metadata**: edit the `metadata` export in `src/app/layout.jsx`
- **Sitemap URLs**: edit `src/app/sitemap.js`
- **Copy/content**: each section is its own file under `src/components/`

## Next steps for production

1. Replace `<img>` tags with `next/image` for automatic optimization (the `next.config.mjs` already whitelists your CDN domains)
2. Add a real `favicon.ico`, `apple-touch-icon.png`, and OG image to `src/app/`
3. Wire `joinus@adaptglobal.io` and `info@adaptglobal.io` to a real form using a Server Action
4. Set up Google Analytics / Vercel Analytics
5. Add the remaining sub-pages (`/platform`, `/about`, etc.) as new files in `src/app/`

## Tech

- Next.js 15 (App Router)
- React 18.3
- No CSS framework — design tokens via CSS custom properties
