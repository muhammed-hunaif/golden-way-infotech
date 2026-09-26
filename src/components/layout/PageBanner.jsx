import { ChevronRight } from 'lucide-react';
import AppLink from '@/components/common/AppLink';
import { ROUTES } from '@/config/navigation';

/**
 * The banner every inner page opens on.
 *
 * Follows the reference theme's inner-page header: an oversized outline word
 * behind the copy, an eyebrow above a display heading, and a breadcrumb beneath.
 * Set on the night ground by default. Pass `image` to put a photograph behind
 * the copy instead: it is dimmed hardest where the text sits (left on desktop,
 * evenly on small screens), and the outline watermark is dropped because the
 * photo already gives the banner its texture. `overlay="strong"` dims a bright
 * or busy photo further so the copy keeps its contrast. `imagePosition` (a CSS
 * object-position) picks which part of the photo survives the wide crop.
 *
 * `pt` clears the fixed 80px navbar that overlays it. That is clearance, not
 * spacing, so it does not scale away on a small screen.
 */
const OVERLAYS = {
  soft: {
    mobile: 'bg-night/75',
    desktop:
      'linear-gradient(90deg, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.76) 40%, rgba(17,17,17,0.42) 62%, rgba(17,17,17,0.12) 100%)',
  },
  strong: {
    mobile: 'bg-night/80',
    desktop:
      'linear-gradient(90deg, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.88) 44%, rgba(17,17,17,0.6) 64%, rgba(17,17,17,0.28) 100%)',
  },
};

export default function PageBanner({
  eyebrow,
  title,
  description,
  watermark,
  image,
  overlay = 'soft',
  imagePosition = 'center',
}) {
  const shade = OVERLAYS[overlay] ?? OVERLAYS.soft;

  return (
    <section
      data-nav-tone="dark"
      className="relative isolate overflow-hidden bg-night-gradient pb-14 pt-36 md:pb-20 md:pt-44"
      aria-label={typeof title === 'string' ? title : undefined}
    >
      {/* Decorative photograph: the heading beside it says what the page is,
          so it carries an empty alt. */}
      {image && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          {/* Small screens: the copy spans the full width, so dim evenly. */}
          <div className={`absolute inset-0 lg:hidden ${shade.mobile}`} />

          {/* Large screens: dark behind the copy on the left, easing off so the
              right of the photo stays visible. */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: shade.desktop }}
          />
        </div>
      )}

      {/* Outline word, straight from the theme's banner. Sized in viewport
          units so it always runs past both edges of the frame, and clipped by
          the section — it reads as texture rather than a word to be read, which
          is why it is hidden from assistive technology entirely. */}
      {watermark && !image && (
        <span
          className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[19vw] font-extrabold leading-none text-transparent opacity-[0.07]"
          style={{ WebkitTextStroke: '1px #D4AF37' }}
          aria-hidden="true"
        >
          {watermark}
        </span>
      )}

      {/* One soft gold wash, offset right, matching the closing section. */}
      <div
        className="pointer-events-none absolute -right-48 top-0 h-[32rem] w-[32rem] rounded-full opacity-70 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(184,134,45,0.16) 0%, rgba(17,17,17,0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        <p className="eyebrow text-gold-400">{eyebrow}</p>

        <h1 className="mt-6 max-w-3xl text-display-lg font-bold text-white">{title}</h1>

        {description && (
          <p className="mt-7 max-w-2xl text-[0.9375rem] leading-[1.9] text-white/65 md:text-base">
            {description}
          </p>
        )}

        <nav className="mt-10" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 font-caps text-[0.6875rem] uppercase tracking-[0.16em] text-white/45">
            <li>
              <AppLink
                to={ROUTES.home}
                className="transition-colors duration-400 ease-premium hover:text-gold-300"
              >
                Home
              </AppLink>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3 text-gold-500/60" />
            </li>
            <li className="text-gold-300" aria-current="page">
              {eyebrow}
            </li>
          </ol>
        </nav>
      </div>

      <div className="hairline absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  );
}
