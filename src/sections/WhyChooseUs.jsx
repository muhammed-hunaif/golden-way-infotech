import { REASONS } from '@/data/reasons';
import { ROUTES } from '@/config/navigation';
import { cn } from '@/lib/cn';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import ReasonItem from '@/components/cards/ReasonItem';
import whyImage from '@/assets/services/services-banner.jpg';

/** Spelt out because the count is read as a word in the heading, not a figure. */
const NUMBER_WORDS = {
  4: 'Four',
  5: 'Five',
  6: 'Six',
  10: 'Ten',
};

/**
 * Why Choose Golden Way Infotech, after the reference theme's layout: the
 * heading on the left with a photograph beside it on a dotted ground, then
 * every reason as a numbered point in an open grid.
 *
 * The grid runs three across when the count divides by three (the home
 * page's six) and two across otherwise (the About page's ten), so the last
 * row is never left with a single stranded item.
 *
 * `limit` trims the list where the section is a summary. The home page shows
 * six and hands off to the About page, which carries all ten.
 */
export default function WhyChooseUs({ limit = REASONS.length }) {
  const reasons = REASONS.slice(0, limit);
  const isPartial = reasons.length < REASONS.length;
  const columns = reasons.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

  return (
    <Section id="why-us" tone="white" ariaLabel="Why choose Golden Way Infotech" stagger={0.05}>
      <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <SectionTitle
            overline="Why Choose Golden Way Infotech"
            title={
              <>
                {NUMBER_WORDS[reasons.length] ?? reasons.length} reasons organizations and
                professionals
                <span className="text-gradient-gold"> choose to work with us.</span>
              </>
            }
          />

          {isPartial && (
            <div className="mt-8" data-reveal>
              <Button to={`${ROUTES.about}#why-us`} variant="outlineDark" size="md">
                All {REASONS.length} Reasons
              </Button>
            </div>
          )}
        </div>

        {/* Decorative photograph on a dotted ground. */}
        <div className="relative hidden lg:block" aria-hidden="true" data-reveal>
          <span
            className="absolute -left-8 -top-8 h-32 w-32"
            style={{
              backgroundImage: 'radial-gradient(rgba(17,17,17,0.22) 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
            }}
          />
          <img
            src={whyImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>

      <ol
        className={cn(
          'mt-16 grid gap-x-12 gap-y-12 border-t border-black/[0.08] pt-12 sm:grid-cols-2',
          columns,
        )}
      >
        {reasons.map((reason) => (
          <ReasonItem key={reason.id} reason={reason} />
        ))}
      </ol>
    </Section>
  );
}
