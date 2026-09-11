import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/lib/gsap';

/**
 * The hero's background film.
 *
 * Fills its positioned parent — the parent owns the size, this owns the picture.
 *
 * The file lives in `public/` rather than `src/assets/` on purpose: at ~7 MB it
 * has no business passing through the bundler, and as a plain static file the
 * browser can range-request and stream it. `HeroVideo` holds the only reference
 * to the path, so replacing `public/media/hero.mp4` is the whole job.
 */
const SRC = '/media/hero.mp4';

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    // Autoplay is a motion effect like any other. A visitor who has asked for
    // reduced motion gets the first frame held as a still — `autoPlay` stays on
    // the element so a frame paints at all, then is paused the moment there is
    // something to show.
    if (!prefersReducedMotion()) return undefined;

    const hold = () => video.pause();
    hold();
    video.addEventListener('loadeddata', hold);
    return () => video.removeEventListener('loadeddata', hold);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-night" aria-hidden="true">
      <video
        ref={videoRef}
        src={SRC}
        tabIndex={-1}
        autoPlay
        muted
        loop
        playsInline
        /* `muted` + `playsInline` are what actually permit autoplay on iOS and
           under Chrome's autoplay policy; without both the element silently
           never starts. `preload="metadata"` keeps the 7 MB out of the initial
           page weight — the browser fetches the rest once playback begins. */
        preload="metadata"
        className="h-full w-full object-cover"
      />

      {/* Three passes, and all three are doing work:
          1. a heavy scrim, weighted to the left, so the headline sits on near-
             solid ground while the right of the frame stays legible film;
          2. a warm gold wash that pulls the footage into the brand palette
             instead of leaving it a foreign blue-grey;
          3. a hard fade to `night` at the bottom edge, so the section hands off
             to the dark band below it with no visible seam. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(17,17,17,0.94) 0%, rgba(17,17,17,0.82) 38%, rgba(17,17,17,0.55) 100%)',
        }}
      />
      <div
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          background:
            'radial-gradient(90% 70% at 75% 30%, rgba(212,175,55,0.32) 0%, rgba(17,17,17,0) 70%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-night" />
    </div>
  );
}
