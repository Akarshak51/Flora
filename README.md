# FloraVision — Frontend Developer Internship Test

A pixel-matched, fully responsive plant e-commerce landing page built from a Figma design as part of a frontend developer internship assessment

## Tech Stack

- React 18 (JavaScript only, no TypeScript)
- Tailwind CSS
- Vite (build tool)
- No UI kits, no backend, no extra dependencies

## Features

- Navbar with mobile hamburger drawer (overlay on hero photo, exact Figma layering)
- Hero section: headline, CTA, hero testimonial glass card, floating product card
- Trending Plants: two large featured banner cards
- Top Selling Plants: 6-card responsive grid
- Customer Reviews: 3-card testimonial grid with star ratings
- O2 Plants informational banner with carousel-style controls
- Footer with newsletter signup UI and text-based social links
- Glassmorphism card styling (`backdrop-blur` + 5% white fill) matching Figma exactly
- Fully keyboard-accessible, semantic HTML throughout
- Mobile-first responsive layout

## Folder Structure

```
src/
 ├─ assets/
 │   └─ images/
 │       ├─ products/      → placeholder SVGs, replace with real Figma exports
 │       └─ avatars/        → placeholder SVGs, replace with real Figma exports
 ├─ components/
 │   ├─ common/             → Button, SectionTitle
 │   ├─ layout/             → Navbar, Footer
 │   └─ ui/                 → HeroBanner, FeaturedPlantBanner, PlantCard, TestimonialCard
 ├─ sections/
 │   ├─ Hero.jsx
 │   ├─ TrendingPlants.jsx
 │   ├─ TopSellingPlants.jsx
 │   ├─ CustomerReviews.jsx
 │   └─ O2Plants.jsx
 ├─ data/
 │   ├─ navLinks.js
 │   ├─ footerLinks.js
 │   ├─ products.js
 │   └─ reviews.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
cd floravision
npm install
```

### Run (development)

```bash
npm run dev
```

App runs at `http://localhost:5173` by default.

### Build (production)

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview production build locally

```bash
npm run preview
```

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Go to vercel.com and log in.
3. Click **Add New → Project** and import the GitHub repo.
4. Framework preset: **Vite**.
5. Build command: `npm run build`. Output directory: `dist`.
6. Click **Deploy**.
7. Verify the live URL renders correctly on mobile and desktop.

