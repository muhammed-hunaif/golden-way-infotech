# Assets

## Logo

| File                      | Role                                                          |
| ------------------------- | ------------------------------------------------------------- |
| `logo-golden-way.jpeg`    | The original artwork as supplied. Kept for reference; unused.  |
| `logo-golden-way.png`     | **Shipped file.** Same artwork, white background removed.      |
| `logo-golden-way-knockout.png` | Navbar version for dark sections: strapline in white. |

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

### The knockout version for dark surfaces

The lockup's strapline — "Mobility Solutions For Your Business" — is **dark
ink**, so on a black ground it disappears. The footer body is off-white, so it
uses the standard PNG.

The navbar is see-through, and over dark sections it uses
`logo-golden-way-knockout.png` via `<Logo tone="dark" />`. That file is derived
from the PNG:

- the dark, near-neutral strapline pixels (rows 74-85, below all of the gold)
  are recoloured to white, keeping their alpha;
- near-black drop-shadow leftovers in the gold (luminance < 55) are made
  transparent, since they read as grime on a dark photo;
- dark gold shading (luminance < 165) is scaled up to luminance 165, hue kept.

The light-ground PNG is untouched.

If the brand owner supplies an official reversed version, drop it in under the
same name and it replaces this one with no code change.

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
