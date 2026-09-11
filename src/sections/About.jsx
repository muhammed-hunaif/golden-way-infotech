import { ArrowRight, Building2, GraduationCap, Layers, Users } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';

const HIGHLIGHTS = [
  {
    id: 'headquarters',
    icon: Building2,
    title: 'Dubai Headquarters',
    detail: 'Founded in 2012 and headquartered in Dubai, United Arab Emirates.',
  },
  {
    id: 'people',
    icon: Users,
    title: '2,500+ Professionals',
    detail: 'Operating across the UAE and India, supporting engagements in over 30 countries.',
  },
  {
    id: 'capability',
    icon: Layers,
    title: 'Broad Capability',
    detail:
      'Software and web development, cloud infrastructure, cybersecurity, AI, data science, analytics, UI/UX, graphic design, animation and digital marketing.',
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Technology + Training',
    detail:
      'Structured training programs run parallel to client project delivery, giving learners real project exposure.',
  },
];

export default function About() {
  return (
    <Section id="about" tone="cream" ariaLabel="About Golden Way Infotech">
      {/* Single column. With the visual gone there is no second column to
          balance, so the copy runs the full measure rather than being left
          stranded in half a grid. */}
      <div>
        <SectionTitle
          overline="About Golden Way Infotech"
          title={
            <>
              Fourteen years of technology
              <span className="text-gradient-gold"> delivery and training.</span>
            </>
          }
          description="Golden Way Infotech LLC is a Dubai-headquartered technology and training company founded in 2012. The organization has grown from an earlier focus on website development, Windows-based applications, and database-integrated systems into a broader technology portfolio shaped by changing client and learner needs."
        />

        {/* Two columns from `md`: at full width a single stack of four would
              run the highlights to an unreadable measure and leave the right of
              the section empty — the same emptiness the visual was filling. */}
        <ul className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <li key={item.id} className="flex gap-5" data-reveal>
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold-500/25 bg-white text-gold-600">
                <item.icon
                  className="h-[1.125rem] w-[1.125rem]"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>
              <div>
                <h3 className="font-sans text-[0.9375rem] font-semibold text-night">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-prose text-[0.875rem] leading-[1.8] text-ink-soft">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10" data-reveal>
          <Button href="#why-us" variant="outlineDark" size="md" icon={ArrowRight}>
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
}
