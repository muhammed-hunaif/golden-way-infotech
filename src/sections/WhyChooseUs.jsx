import { REASONS } from '@/data/reasons';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import ReasonItem from '@/components/cards/ReasonItem';

export default function WhyChooseUs() {
  return (
    <Section id="why-us" tone="white" ariaLabel="Why choose Golden Way Infotech" stagger={0.05}>
      <SectionTitle
        align="center"
        overline="Why Choose Golden Way Infotech"
        title={
          <>
            Ten reasons organizations and professionals
            <span className="text-gradient-gold"> choose to work with us.</span>
          </>
        }
      />

      {/* No cells, no rules, no frame — the whitespace does the separating. Two
          columns with a wide gutter keeps ten entries to five rows while leaving
          each one a comfortable measure; `gap-y` is deliberately much larger than
          `gap-x` so the eye reads down a column rather than across the pair. */}
      <ol className="mt-16 grid gap-x-14 gap-y-12 sm:grid-cols-2 lg:gap-x-20">
        {REASONS.map((reason) => (
          <ReasonItem key={reason.id} reason={reason} />
        ))}
      </ol>
    </Section>
  );
}
