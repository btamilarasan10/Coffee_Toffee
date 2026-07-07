
# ☕ Coffee Toffee — React Portfolio Project

A single-page coffee shop demo built with **React + Vite**, converted from an
original vanilla HTML/CSS/JS site. Features product filtering, live search,
wishlist toggling, a login form, and a fully responsive layout — built to
showcase full-stack + frontend skills in a portfolio.

## ✨ Features

- Animated preloader
- Sticky navbar with scroll effect + mobile hamburger menu
- Product catalog with category filters (Espresso / Single Origin / Blends)
- Live search across product name and description
- Wishlist toggle (heart icon) per product
- Add-to-cart action
- Login form with validation
- Fully responsive (mobile, tablet, desktop)

## 🗂️ Project Structure

```
coffee-toffee/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Root component
    ├── CoffeeToffee.jsx  # Main app (all UI, logic, and styles)
    └── assets/
        └── img/
            ├── icon.png         # navbar logo (add your own)
            ├── prime_logo.png   # hero image (add your own)
            └── items/           # product photos (add your own)
                ├── cappuccino.jpg
                ├── latte.png
                ├── Espresso.jpg
                └── ...
```

## 🖼️ Adding Your Images

The `src/assets/img/` folder is currently empty except for a `.gitkeep`
placeholder. Drop in your own images using these exact filenames (case and
spacing matter — they must match the imports in `CoffeeToffee.jsx`):

| File | Used for |
|---|---|
| `icon.png` | Navbar logo |
| `prime_logo.png` | Hero section image |
| `items/cappuccino.jpg` | Cappuccino product card |
| `items/latte.png` | Latte product card |
| `items/Espresso.jpg` | Espresso product card |
| `items/Mocha.png` | Mocha product card |
| `items/Cafe Americano.jpg` | Cafe Americano product card |
| `items/Cafe Macchiato.jpg` | Cafe Macchiato product card |
| `items/Cafe Crema.jpg` | Cafe Crema product card |
| `items/Vienna.png` | Vienna product card |
| `items/Irish Coffee.png` | Irish Coffee product card |
| `items/Long Black.jpg` | Long Black product card |
| `items/Melange.jpg` | Melange product card |
| `items/Affogato.png` | Affogato product card |
| `items/Con Panna.jpg` | Con Panna product card |
| `items/Egg Coffee.jpg` | Egg Coffee product card |
| `items/Frappe.png` | Frappé product card |
| `items/Filter Coffee.jpg` | Filter Coffee product card |
| `items/Ethiopian Yirgacheffe.png` | Ethiopian Yirgacheffe product card |
| `items/Viennese.webp` | Viennese product card |
| `items/Pour Over.jpg` | Pour Over product card |
| `items/ristretto.jpg` | Ristretto product card |

If a filename doesn't match, Vite will throw a build error naming the exact
missing file — just rename or fix the import in `CoffeeToffee.jsx`.

## 🚀 Run Locally

Requires [Node.js](https://nodejs.org) (v18 or later recommended).

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy anywhere static.

Preview the production build locally:

```bash
npm run preview
```

## ☁️ Deploy

### Vercel (recommended)
1. Push this repo to GitHub (see below).
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import your repo.
3. Vercel auto-detects Vite. Click **Deploy**.
4. Live in under a minute — auto-redeploys on every `git push`.

### Netlify
1. [netlify.com](https://netlify.com) → **Add new site → Import from Git**.
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run deploy
```
This builds the app and pushes `dist/` to a `gh-pages` branch using the
`gh-pages` package (already in `devDependencies`). Before running it:
- Edit `vite.config.js` and set `base: "/coffee-toffee/"` (replace with your
  actual repo name).
- Enable GitHub Pages in your repo settings, pointing to the `gh-pages` branch.

## 🔧 Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Coffee Toffee React app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/coffee-toffee.git
git push -u origin main
```

## 🛠️ Tech Stack

- React 18
- Vite 5
- Font Awesome (icons, loaded via CDN at runtime)
- Google Fonts — Playfair Display & Poppins (loaded via CDN at runtime)

## 📄 License




