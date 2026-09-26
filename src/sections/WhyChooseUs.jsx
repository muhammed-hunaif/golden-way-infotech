import { useState } from 'react';
import { REASONS } from '@/data/reasons';
import { ROUTES } from '@/config/navigation';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import ReasonItem from '@/components/cards/ReasonItem';

/** Spelt out because the count is read as a word in the heading, not a figure. */
const NUMBER_WORDS = {
  4: 'Four',
  5: 'Five',
  6: 'Six',
  10: 'Ten',
};

/**
 * Why Choose Golden Way Infotech.
 *
 * An accordion: one open at a time, the first open on arrival so the section
 * never presents as a bare list of headings. Opening a row closes the one before
 * it — ten expanded paragraphs is the wall of copy the accordion exists to
 * avoid. Clicking the open row closes it, so a reader can collapse everything
 * and scan the titles alone.
 *
 * `limit` trims the list where the section is a summary. The home page shows
 * six and hands off to the About page, which carries all ten.
 */
export default function WhyChooseUs({ limit = REASONS.length }) {
  const reasons = REASONS.slice(0, limit);
  const [openId, setOpenId] = useState(reasons[0].id);
  const isPartial = reasons.length < REASONS.length;

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <Section id="why-us" tone="white" ariaLabel="Why choose Golden Way Infotech" stagger={0.05}>
      <SectionTitle
        align="center"
        overline="Why Choose Golden Way Infotech"
        title={
          <>
            {NUMBER_WORDS[reasons.length] ?? reasons.length} reasons organizations and professionals
            <span className="text-gradient-gold"> choose to work with us.</span>
          </>
        }
      />

      {/* A single ruled column, capped in width and centred under the title.
          Two columns would put two accordions side by side and leave the
          reader unsure which one is responding to a click. */}
      <ol className="mx-auto mt-14 max-w-4xl border-t border-black/[0.08]">
        {reasons.map((reason) => (
          <ReasonItem
            key={reason.id}
            reason={reason}
            isOpen={openId === reason.id}
            onToggle={() => toggle(reason.id)}
          />
        ))}
      </ol>

      {isPartial && (
        <div className="mt-12 text-center" data-reveal>
          <Button to={`${ROUTES.about}#why-us`} variant="outlineDark" size="md">
            All {REASONS.length} Reasons
          </Button>
        </div>
      )}
    </Section>
  );
}
