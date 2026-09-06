# Assets

## Logo

`logo-golden-way.jpeg` is the official Golden Way Infotech LLC lockup — the gold
feather emblem, the wordmark, and the strapline "Mobility Solutions For Your
Business" (395 × 100). It is imported by
`src/components/common/Logo.jsx`, which is the only file that references it, so
Vite fingerprints and cache-busts it on build.

### Why there are two surface treatments

The supplied file is a **JPEG**, which cannot carry transparency — it has an
opaque white background baked in. `Logo.jsx` handles that with two variants:

| Variant           | Used on                                    | Treatment                                                     |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------- |
| `variant="dark"`  | Light surfaces (scrolled navbar)           | `mix-blend-multiply` — the white ground drops into the page    |
| `variant="light"` | Dark surfaces (hero navbar, menu, footer)  | White brand plate with a thin gold rule                        |

### Upgrading to a transparent logo

If a **transparent PNG or SVG** version of the lockup becomes available, the
site gets simpler and looks better on dark sections:

1. Drop the file here as `logo-golden-way.svg` (or `.png`).
2. Update the import at the top of `src/components/common/Logo.jsx`.
3. In that same file, delete the `onDark` branch that wraps the image in the
   white plate, and remove `mix-blend-multiply` — both exist only to work
   around the opaque JPEG background.

Nothing else in the codebase needs to change.

### Favicon

`public/favicon.svg` is a separate compact gold monogram on black, because the
full lockup is a 4:1 horizontal wordmark and would be illegible at 16 × 16. If a
square version of the emblem becomes available, replace that file.

## Images

The site ships without photography. Any image added here should be exported at
2x, served as WebP or AVIF where possible, and rendered with
`loading="lazy" decoding="async"` plus explicit `width`/`height` so the layout
does not shift while it loads.
