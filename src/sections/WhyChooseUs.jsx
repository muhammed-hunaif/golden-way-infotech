import { useState } from 'react';
import { REASONS } from '@/data/reasons';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import ReasonItem from '@/components/cards/ReasonItem';

/** The profile lists ten reasons; the section shows the first six so the
    accordion stays a short read. The rest remain in the data file. */
const SHOWN_REASONS = REASONS.slice(0, 6);

/**
 * Why Choose Golden Way Infotech.
 *
 * Six reasons as an accordion: one open at a time, the first open on arrival so
 * the section never presents as a bare list of headings. Opening a row closes
 * the one before it — ten expanded paragraphs is the wall of copy the
 * accordion exists to avoid. Clicking the open row closes it, so a reader can
 * collapse everything and scan the titles alone.
 */
export default function WhyChooseUs() {
  const [openId, setOpenId] = useState(SHOWN_REASONS[0].id);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <Section id="why-us" tone="white" ariaLabel="Why choose Golden Way Infotech" stagger={0.05}>
      <SectionTitle
        align="center"
        overline="Why Choose Golden Way Infotech"
        title={
          <>
            Six reasons organizations and professionals
            <span className="text-gradient-gold"> choose to work with us.</span>
          </>
        }
      />

      {/* A single ruled column, capped in width and centred under the title.
          Two columns would put two accordions side by side and leave the
          reader unsure which one is responding to a click. */}
      <ol className="mx-auto mt-14 max-w-4xl border-t border-black/[0.08]">
        {SHOWN_REASONS.map((reason) => (
          <ReasonItem
            key={reason.id}
            reason={reason}
            isOpen={openId === reason.id}
            onToggle={() => toggle(reason.id)}
          />
        ))}
      </ol>
    </Section>
  );
}
