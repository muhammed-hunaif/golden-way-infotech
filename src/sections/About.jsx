import { Building2, GraduationCap, Layers, Users } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { ROUTES } from '@/config/navigation';
import aboutImage from '@/assets/contact/contact-banner.jpg';

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

/**
 * About Golden Way Infotech, after the reference theme's brand band: a dark
 * ground with a circular photograph on the left, clipped by an angled gold
 * block, and the statement, highlights and action on the right.
 *
 * `tone` is `night` by default; the About page passes a light tone because it
 * sits directly under that page's dark photo banner.
 *
 * `cta` is on only where the section is a summary of a page elsewhere — the
 * home page. On the About page itself the section is the destination, so the
 * button would point at the page it already sits on.
 */
export default function About({ cta = false, tone = 'night' }) {
  const isDark = tone === 'night';

  return (
    <Section id="about" tone={tone} ariaLabel="About Golden Way Infotech">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Decorative photograph: the copy beside it carries the meaning. */}
        <div
          className="relative mx-auto w-full max-w-[26rem] lg:max-w-none"
          aria-hidden="true"
          data-reveal
        >
          <div className="aspect-square overflow-hidden rounded-full">
            <img
              src={aboutImage}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[62%_40%]"
            />
          </div>

          {/* Angled gold block overlapping the lower edge of the circle. */}
          <span
            className="absolute -bottom-6 right-[8%] h-[38%] w-[26%] bg-gold-gradient"
            style={{ clipPath: 'polygon(0 0, 100% 28%, 100% 100%, 0 72%)' }}
          />
        </div>

        <div>
          <SectionTitle
            tone={isDark ? 'dark' : 'light'}
            overline="About Golden Way Infotech"
            title={
              <>
                Fourteen years of technology
                <span className="text-gradient-gold"> delivery and training.</span>
              </>
            }
            description="Golden Way Infotech LLC is a Dubai-headquartered technology and training company founded in 2012. The organization has grown from an earlier focus on website development, Windows-based applications, and database-integrated systems into a broader technology portfolio shaped by changing client and learner needs."
          />

          <ul className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item.id} className="flex gap-4" data-reveal>
                <span
                  className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/40 ${isDark ? 'text-gold-400' : 'bg-white text-gold-600'}`}
                >
                  <item.icon
                    className="h-[1.125rem] w-[1.125rem]"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3
                    className={`font-display text-[1.0625rem] font-semibold ${isDark ? 'text-white' : 'text-night'}`}
                  >
                    {item.title}
                  </h3>
                  <p className={`mt-1.5 ${isDark ? 'text-white/60' : 'text-ink-soft'}`}>
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {cta && (
            <div className="mt-10" data-reveal>
              <Button to={ROUTES.about} variant={isDark ? 'outline' : 'outlineDark'} size="lg">
                More About Golden Way
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
