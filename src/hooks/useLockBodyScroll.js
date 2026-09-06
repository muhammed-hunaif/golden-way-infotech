import { useEffect } from 'react';

/**
 * Locks page scrolling while an overlay (the mobile menu, a modal) is open,
 * compensating for the scrollbar width so the layout does not shift.
 */
export function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return undefined;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [isLocked]);
}
