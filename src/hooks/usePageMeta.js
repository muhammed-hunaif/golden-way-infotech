import { useEffect } from 'react';

const SUFFIX = 'Golden Way Infotech LLC';

/**
 * Sets the document title and meta description for a route.
 *
 * On a single-page app nothing updates these on its own, so without this every
 * page would share the title the server sent — which is what a browser tab, a
 * bookmark, a shared link and a search result all read.
 *
 * Nothing is restored on unmount: the next route sets its own, and the only way
 * to leave without one is to leave the app entirely.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : SUFFIX;

    if (!description) return;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
