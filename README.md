# Portfolio

Personal portfolio built with [Nuxt 4](https://nuxt.com) — fully static, no backend.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for hosting

```bash
npm run generate   # outputs static files to .output/public
```

Upload `.output/public` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Editing content

All text, projects, testimonials and links live in `app/data/site.ts`.
Put your photo, CV and screenshots in `public/` and reference them there.
