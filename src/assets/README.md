# Assets

## Logo

| File                      | Role                                                          |
| ------------------------- | ------------------------------------------------------------- |
| `logo-golden-way.jpeg`    | The original artwork as supplied. Kept for reference; unused.  |
| `logo-golden-way.png`     | **Shipped file.** Same artwork, white background removed.      |

`src/components/common/Logo.jsx` is the only file that imports the PNG, so Vite
fingerprints and cache-busts it on build.

### How the transparent version was produced

The supplied file is a JPEG, which cannot carry transparency. The PNG was
derived from it mechanically — **the marks themselves are unaltered**:

1. **Background removal by flood fill** from the image border, rather than a
   global brightness threshold. A threshold would have punched holes through the
   light sheen inside the gold letterforms; a flood fill only removes white that
   is actually connected to the outside.
2. **Soft edges un-premultiplied from white.** Anti-aliased edge pixels get
   fractional alpha and their original colour recovered via
   `C = (C_jpeg − 255(1 − a)) / a`, so the result is pixel-exact when composited
   back onto white.
3. **Drop-shadow suppression.** The artwork carries a soft grey drop shadow —
   invisible on white, but a conspicuous halo anywhere else. Shadow pixels are
   separable by chroma (neutral grey, chroma < 25, luminance > 120) from the gold
   marks and the dark strapline, and are faded out.

### Why every surface the logo sits on is light

The lockup's strapline — "Mobility Solutions For Your Business" — is **dark
ink**. On a black ground it disappears, and no amount of background removal
changes that: the logo was drawn for light surfaces.

So the site is built around it. The navbar is a light bar at every scroll
position, the mobile menu is a light panel, and the footer body is off-white with
only its legal bar in black. There is no white plate behind the logo and no
`mix-blend-mode` trick anywhere — the logo simply sits on grounds it suits.

If a **reversed (knockout) version** for dark backgrounds is ever supplied, those
surfaces can go dark again; that is a design decision for the brand owner, not
something to synthesise from this file.

### Regenerating or replacing

The PNG is a committed build artefact — there is no script in `package.json`
that regenerates it, because it is a one-time derivation. To replace the logo
outright, drop the new file here and update the single import at the top of
`src/components/common/Logo.jsx`.

`public/favicon.svg` is a separate compact gold monogram, since the full lockup
is a 4:1 horizontal wordmark and would be illegible at 16 × 16. If a square
version of the feather emblem becomes available, replace that file.

## Images

The site ships without photography. Any image added here should be exported at
2x, served as WebP or AVIF where possible, and rendered with
`loading="lazy" decoding="async"` plus explicit `width`/`height` so the layout
does not shift while it loads.
