# Golden Way Infotech LLC — Corporate Website

Frontend for the Golden Way Infotech LLC corporate site: a single-page React
application built with Vite, Tailwind CSS, GSAP (with ScrollTrigger), and Lucide
icons.

**Frontend only.** There is no backend, database, API layer, or authentication.
The enquiry form validates in the browser and shows a local confirmation state —
nothing is transmitted anywhere.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script                 | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the Vite dev server                     |
| `npm run build`        | Production build into `dist/`                 |
| `npm run preview`      | Serve the production build locally            |
| `npm run lint`         | Lint `src/` with oxlint                       |
| `npm run format`       | Format `src/` with Prettier                   |
| `npm run format:check` | Verify formatting without writing             |

Requires Node 20.19+ (Vite 8).

> **After editing `tailwind.config.js`, restart the dev server.** Tailwind's
> PostCSS plugin resolves the theme once at startup, so a running server will
> keep using the old config — a newly added token then fails with
> `The \`font-x\` class does not exist`. `npm run build` is unaffected.

---

## Project structure

```
.
├── public/                     Static files served as-is
│   ├── favicon.svg             Brand mark for the browser tab
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/                 Local images and the logo drop-in (see its README)
│   │
│   ├── components/
│   │   ├── common/             Reusable primitives, used by any section
│   │   │   ├── Button.jsx          Button/link primitive with variants
│   │   │   ├── EnquiryForm.jsx     Frontend-only contact form
│   │   │   ├── Logo.jsx            Brand lockup (inline SVG)
│   │   │   ├── NetworkGraphic.jsx  Abstract gold network figure
│   │   │   ├── PresenceMap.jsx     Map-inspired hub graphic
│   │   │   ├── Section.jsx         Section shell: rhythm + scroll reveal
│   │   │   ├── SectionTitle.jsx    Overline / heading / lead block
│   │   │   └── ServiceModal.jsx    Accessible service detail dialog
│   │   │
│   │   ├── cards/              Content-bearing card components
│   │   │   ├── LocationCard.jsx
│   │   │   ├── ReasonItem.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── StatCard.jsx
│   │   │
│   │   └── layout/             Page chrome
│   │       ├── Footer.jsx
│   │       ├── MobileMenu.jsx
│   │       ├── Navbar.jsx
│   │       └── ScrollToTop.jsx
│   │
│   ├── sections/               One file per page section, composed by App.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── EmergingTechnologies.jsx
│   │   ├── TechnologyStack.jsx
│   │   ├── Approach.jsx
│   │   ├── VisionMission.jsx
│   │   ├── GlobalPresence.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Training.jsx
│   │   ├── WebDevelopment.jsx
│   │   ├── Contact.jsx
│   │   └── CTA.jsx
│   │
│   ├── data/                   Content as data — sections render from these
│   │   ├── approach.js
│   │   ├── emergingTech.js
│   │   ├── locations.js
│   │   ├── reasons.js
│   │   ├── services.js
│   │   ├── stats.js
│   │   ├── technologies.js
│   │   ├── training.js
│   │   └── webProcess.js
│   │
│   ├── config/                 Company facts and navigation structure
│   │   ├── navigation.js
│   │   └── site.js
│   │
│   ├── hooks/                  Reusable behaviour
│   │   ├── useActiveSection.js     Highlights the section in view
│   │   ├── useCountUp.js           Number counter on scroll
│   │   ├── useGsapReveal.js        Section-scoped scroll reveal
│   │   ├── useLockBodyScroll.js    Scroll lock for overlays
│   │   └── useScrollPosition.js    rAF-throttled scroll threshold
│   │
│   ├── lib/                    Framework-agnostic helpers
│   │   ├── cn.js               className joiner
│   │   ├── gsap.js             Single GSAP/ScrollTrigger registration point
│   │   ├── scroll.js           Offset-aware smooth scrolling
│   │   └── validation.js       Enquiry form validation rules
│   │
│   ├── styles/
│   │   └── index.css           Tailwind layers, base styles, component classes
│   │
│   ├── App.jsx                 Section composition
│   └── main.jsx                Entry point
│
├── index.html                  Document shell, meta tags, font preconnect
├── tailwind.config.js          Design tokens (colour, type, shadow, motion)
├── vite.config.js              Build config and the `@/` alias
└── jsconfig.json               Editor path resolution for `@/`
```

### Conventions

- **`@/` resolves to `src/`.** Configured in both `vite.config.js` and
  `jsconfig.json`, so imports never contain `../../..`.
- **Content lives in `src/data/` and `src/config/`,** never inline in a
  component. Adding a service or a location means editing one array.
- **`src/sections/` are page-specific; `src/components/` are reusable.** If a
  piece would be used in two sections, it belongs in `components/`.
- **One GSAP registration point.** Everything imports `gsap` and `ScrollTrigger`
  from `@/lib/gsap`, so plugins register exactly once.

---

## Design system

Tokens are defined in `tailwind.config.js` — use the token, not the hex value.

| Token                  | Value     | Use                          |
| ---------------------- | --------- | ---------------------------- |
| `gold-400`             | `#D4AF37` | Highlight gold               |
| `gold-500` / `gold`    | `#B8862D` | Primary gold accent          |
| `gold-700`             | `#8A641C` | Dark gold, secondary accent  |
| `night`                | `#111111` | Black, premium sections      |
| `charcoal`             | `#1A1A1A` | Dark charcoal surfaces       |
| `cream`                | `#F8F7F3` | Off-white sections           |
| `ink`                  | `#222222` | Body text                    |

### Typography

Three families, each with one job, chosen to sit with the logo:

| Token          | Family             | Used for                                                     |
| -------------- | ------------------ | ------------------------------------------------------------ |
| `font-display` | Cormorant Garamond | Headings; its italic carries the Vision and Mission quotes    |
| `font-caps`    | Cinzel             | Every tracked uppercase label — section eyebrows, categories  |
| `font-sans`    | Inter              | Body copy, navigation, buttons, form fields                   |

Cinzel mirrors the Roman small caps of the logo strapline, and Cormorant's
italic echoes its chancery wordmark, so the page and the mark share a voice.
Inter stays on everything functional, where legibility beats character.

Gold is used as an accent — rules, icons, numbers, single emphasised phrases —
never as a large fill.

Reusable classes live in the `@layer components` block of
`src/styles/index.css`: `.section-padding`, `.overline`, `.hairline`,
`.card-surface`, `.rule-gold`, `.text-gradient-gold`, `.link-underline`.

---

## Animation

GSAP with ScrollTrigger, kept deliberately restrained: fades, short lifts,
a growing rule, a number counter, one slow marquee.

- `<Section>` applies a staggered reveal to any descendant marked `data-reveal`.
- Bespoke timelines (hero, approach timeline, emerging-technology network) live
  in their own section file, inside a `gsap.context()` scoped to a ref so every
  tween and trigger is reverted on unmount.
- **Reduced motion is honoured throughout.** Every animated section checks
  `prefersReducedMotion()` and renders the final state instead, and
  `src/styles/index.css` neutralises CSS animation under the same media query.

---

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`, `address`)
  and a single `h1` with a consistent heading order beneath it.
- A skip link to `#main` as the first focusable element.
- A visible gold focus ring on every interactive element, with the offset colour
  adjusted for dark sections.
- The mobile menu and the service dialog trap focus, close on Escape, restore
  focus to their trigger, and are `inert` while closed.
- All form fields are labelled, with `aria-invalid` and `aria-describedby`
  wired to inline error messages.
- Decorative SVGs are `aria-hidden`; the animating stat counters expose their
  final value to screen readers.

---

## Content policy

Every figure, address, service description, vision, mission, and reason on this
site is taken from the Golden Way Infotech LLC company profile. Nothing is
invented — no clients, testimonials, awards, certifications, pricing, course
details, or email addresses. Where the profile provides no email address, its
own `[Official Email Address]` placeholder is preserved verbatim.

When updating content, edit `src/config/site.js` or the relevant file in
`src/data/` — those are the single source of truth.

---

## Branding

The official lockup is `src/assets/logo-golden-way.png` — the supplied artwork
with its white JPEG background removed, marks untouched. It appears in the
navbar, the mobile menu, and the footer. `src/components/common/Logo.jsx` is the
only file that imports it.

**The lockup's strapline is dark ink, so it needs a light ground.** The site is
built around that: the navbar is a light bar at every scroll position, the mobile
menu is a light panel, and the footer body is off-white with only its legal bar
in black. There is no plate behind the logo and no blend-mode trick anywhere.

`public/favicon.svg` is a separate compact gold monogram, since the full lockup
is a 4:1 horizontal wordmark and would be illegible at 16 × 16.

See `src/assets/README.md` for how the transparent PNG was derived, and what to
do if a reversed version for dark backgrounds is ever supplied.
