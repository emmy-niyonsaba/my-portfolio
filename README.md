# Emmanuel Niyonsaba — Portfolio

React + Vite + Tailwind CSS single-page portfolio with a fixed sidebar,
scroll-tracked navigation, and a fully data-driven content layer.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
  data/            ← all editable content lives here, as plain JS objects/arrays
    navigation.js  ← sidebar links (add a section here + a file in sections/)
    about.js
    skills.js
    projects.js
    experience.js
    services.js
    testimonials.js
    contact.js
  components/
    layout/Sidebar.jsx     ← fixed sidebar, reads from data/navigation.js
    ui/SectionHeader.jsx   ← shared heading used at the top of every section
    ui/Tag.jsx             ← shared pill/tag used on project cards
  sections/        ← one file per page section, in the order they appear
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Services.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
  App.jsx          ← wires the sidebar + sections together, tracks scroll position
  main.jsx
  index.css        ← Roboto font import, color-scheme base styles
  App.css          ← smooth-scroll behavior
```

## How to add things

**Add a project** — open `src/data/projects.js` and add an object to the array:

```js
{
  title: "New Project",
  description: "What it does and why it matters.",
  tags: ["React", "Node.js"],
  github: "https://github.com/you/repo",   // optional
  demo: "https://your-demo-url.com",       // optional
}
```

**Add a testimonial** — same pattern in `src/data/testimonials.js`:

```js
{
  quote: "What they said.",
  name: "Their Name",
  role: "Their Title, Company",
}
```

**Add a whole new section** (e.g. "Certifications"):
1. Create `src/data/certifications.js` with your content.
2. Create `src/sections/Certifications.jsx` that maps over it (copy `Services.jsx`
   as a starting template — it's the simplest one).
3. Add `{ id: "certifications", label: "Certifications", index: "09" }` to
   `src/data/navigation.js`.
4. Import and render `<Certifications />` in `App.jsx`.

The sidebar and scroll-tracking update automatically — nothing else to touch.

## Brand colors

Defined once in `tailwind.config.js` as Tailwind tokens, so you can restyle the
whole site by changing four values:

| Token      | Hex       | Used for                          |
|------------|-----------|------------------------------------|
| `accent`   | `#E96E00` | Highlights, active states, buttons |
| `ink`      | `#181818` | Page background                    |
| `charcoal` | `#3D3D3D` | Card surfaces, borders             |
| `paper`    | `#FFFFFF` | Primary text on dark backgrounds   |

Font is Roboto, loaded via Google Fonts in `src/index.css`.

## Notes

- Motion is intentionally minimal: only color and underline transitions, no
  hover-scale or translate effects, and `prefers-reduced-motion` is respected.
- The active sidebar link is shown with an underline rather than a side bar.
- Add your real photos to `public/images/` (referenced as `/images/filename.png`).
