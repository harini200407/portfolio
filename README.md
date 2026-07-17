# Harini B — Portfolio (React + Vite)

## Setup

```bash
npm install
npm run dev
```

Open the URL shown in your terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder — deploy that folder to Netlify, Vercel, or GitHub Pages.

## Structure

```
src/
  assets/          → SVG illustrations used in Hero and About sections
  components/      → One component per section (Navbar, Hero, About, Skills,
                     WhyWorkWithMe, Languages, Certifications, Projects, Contact, Footer)
  App.jsx          → Composes all sections
  index.css        → All design tokens and styles
  main.jsx         → React entry point
public/
  resume.pdf       → PLACEHOLDER — replace with your actual resume PDF,
                     the Download Resume button links to this file
```

## To customize

- **Resume**: drop your real resume PDF into `public/resume.pdf` (same filename), replacing the placeholder.
- **Photo**: to use a real photo instead of the illustration, add your image to `src/assets/`
  (e.g. `src/assets/profile.jpg`), then in `src/components/Hero.jsx` swap:
  ```jsx
  import heroIllustration from '../assets/hero-illustration.svg'
  ```
  for:
  ```jsx
  import profilePhoto from '../assets/profile.jpg'
  ```
  and use `<img src={profilePhoto} ... />` styled as a circle instead.
- **Skill percentages / project links**: edit the arrays at the top of
  `src/components/Skills.jsx` and `src/components/Projects.jsx`.
- **Contact form**: currently opens the visitor's email client via `mailto:`.
  To collect submissions properly, wire it to a service like Formspree or EmailJS
  inside `src/components/Contact.jsx`.

## Deploy free

1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder in — you get a live link instantly.
