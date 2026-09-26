import { ROUTES } from '@/config/navigation';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';
import { usePageMeta } from '@/hooks/usePageMeta';

/** Anything outside the six routes. Kept to a single statement and a way back. */
export default function NotFound() {
  usePageMeta('Page Not Found');

  return (
    <Section
      id="not-found"
      tone="night"
      ariaLabel="Page not found"
      className="pt-28"
      fullHeight={false}
    >
      <div className="mx-auto max-w-xl py-16 text-center md:py-24">
        <p className="eyebrow text-gold-400">Error 404</p>

        <h1 className="mt-6 text-display-md text-white">
          That page
          <span className="text-gradient-gold"> is not here.</span>
        </h1>

        <p className="mt-6 text-[0.9375rem] leading-[1.9] text-white/60">
          The address may have changed, or it may never have existed. Everything on the site is one
          click from the home page.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to={ROUTES.home} variant="primary" size="md">
            Back to Home
          </Button>
          <Button to={ROUTES.contact} variant="outline" size="md">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
