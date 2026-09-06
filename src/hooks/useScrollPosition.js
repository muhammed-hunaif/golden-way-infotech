import { useEffect, useState } from 'react';

/**
 * Reports whether the page has scrolled past `threshold`.
 * Reads are throttled through requestAnimationFrame and state only changes when
 * the boolean flips, so the navbar re-renders at most twice per scroll pass.
 */
export function useScrollPosition(threshold = 24) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > threshold);
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return isScrolled;
}
