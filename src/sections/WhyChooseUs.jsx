import { REASONS } from '@/data/reasons';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import ReasonItem from '@/components/cards/ReasonItem';

export default function WhyChooseUs() {
  return (
    <Section id="why-us" tone="white" ariaLabel="Why choose Golden Way Infotech" stagger={0.05}>
      <SectionTitle
        overline="Why Choose Golden Way Infotech"
        title={
          <>
            Ten reasons organizations and professionals
            <span className="text-gradient-gold"> choose to work with us.</span>
          </>
        }
      />

      <ol className="mt-14 border-b border-black/[0.08]">
        {REASONS.map((reason) => (
          <ReasonItem key={reason.id} reason={reason} />
        ))}
      </ol>
    </Section>
  );
}
