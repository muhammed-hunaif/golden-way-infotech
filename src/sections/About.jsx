import { ArrowRight, Building2, GraduationCap, Layers, Users } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import NetworkGraphic from '@/components/common/NetworkGraphic';

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
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Brand visual */}
        <div className="relative order-2 lg:order-1" data-reveal>
          <div className="relative overflow-hidden rounded-sm border border-black/[0.07] bg-night-gradient p-10 shadow-card sm:p-14">
            <div className="relative mx-auto aspect-square w-full max-w-[24rem]">
              <NetworkGraphic showRings />
              <div
                className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center"
                aria-hidden="true"
              >
                <p className="text-gradient-gold font-display text-3xl font-semibold sm:text-4xl">
                  2012
                </p>
                <p className="mt-2 text-[0.5625rem] font-semibold uppercase tracking-[0.26em] text-white/45">
                  Established in Dubai
                </p>
              </div>
            </div>
          </div>

          {/* Offset accent card */}
          <div className="absolute -bottom-8 left-6 hidden rounded-sm border border-gold-500/25 bg-white px-7 py-5 shadow-lift sm:block lg:-right-8 lg:left-auto">
            <p className="text-gradient-gold font-display text-3xl font-semibold">14+</p>
            <p className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Years of Excellence
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
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

          <ul className="mt-10 space-y-6">
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
      </div>
    </Section>
  );
}
