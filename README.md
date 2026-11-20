# Digital Portfolio — Work Immersion (React + Tailwind CSS)

## 1. Run it on your computer
Install Node.js (LTS) from https://nodejs.org, then in this folder:

```bash
npm install
npm run dev
```
Open the link shown (usually http://localhost:5173).

## 2. Put in YOUR information
Everything you see is in **one file: `src/data/portfolio.js`**.
All text there is SAMPLE content — replace every item with your own.

- **Photo:** save your professional photo as `public/profile.jpg` (portrait, at least 600 px wide).
- **Projects:** add a `link` (Google Drive / Canva share link) so teachers can open your work.
- **HTE evaluation:** change the companies, scores (1–5) and weights (must total 100%).
  Weighted scores, the table highlights and the "Top choice" are calculated automatically.
- **Reflection:** rewrite it in your own words. The word counter on the page shows your total (target 250–300).
- **Sources:** list where you got images and company information.

## 3. Publish it online (free)
```bash
npm run build
```
Upload the `dist` folder to **Netlify Drop** (https://app.netlify.com/drop) — drag and drop, and you get a link.
Vercel or GitHub Pages also work.

## 4. Submit as a PDF (if your teacher requires a listed platform)
Click **Save as PDF** on the page (or Ctrl+P) → Destination: *Save as PDF* → enable *Background graphics*.
This gives you a PDF Interactive Portfolio with working links.

## Single-file version
`npm run build:single` creates `dist-single/index.html` — one file you can email or open offline.
