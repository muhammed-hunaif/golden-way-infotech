import { Compass, Eye } from 'lucide-react';
import { VISION_MISSION } from '@/config/site';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import visionImage from '@/assets/vision/vision.png';
import missionImage from '@/assets/vision/mission.png';

const STATEMENTS = [
  {
    id: 'vision',
    label: 'Vision',
    icon: Eye,
    text: VISION_MISSION.vision,
    image: visionImage,
    imageSide: 'left',
  },
  {
    id: 'mission',
    label: 'Mission',
    icon: Compass,
    text: VISION_MISSION.mission,
    image: missionImage,
    imageSide: 'right',
  },
];

/**
 * One statement: a photograph beside its text, the pair filling the row.
 *
 * The picture alternates sides so the two rows read as a spread rather than a
 * repeated block. The swap is done with grid column placement, not by
 * reordering the markup, so the label and quote always come after the picture
 * in the DOM and screen readers hear them in the same order for both rows.
 */
function Statement({ statement }) {
  const { label, icon: Icon, text, image, imageSide } = statement;
  const imageRight = imageSide === 'right';

  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16" data-reveal>
      {/* Both files are the same 16:9 export; `aspect-[4/3]` crops them a
          little taller so the picture holds its own beside three or four lines
          of display copy instead of sitting as a thin strip. Shown clean — no
          tint, no overlay — the same rule the Approach photograph follows. */}
      <div className={`overflow-hidden rounded-[1.25rem] ${imageRight ? 'lg:col-start-2' : ''}`}>
        <img
          src={image}
          alt=""
          width={1376}
          height={768}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>

      <div className={imageRight ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-gold-500/25 bg-gold-50 text-gold-600">
          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </span>

        <h3 className="mt-7 font-caps text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
          {label}
        </h3>

        <blockquote className="mt-5">
          <p className="display-accent max-w-[26ch] text-[1.5rem] leading-[1.5] text-night md:text-[1.875rem]">
            &ldquo;{text}&rdquo;
          </p>
        </blockquote>
      </div>
    </article>
  );
}

/**
 * Vision & Mission.
 *
 * Two editorial rows rather than two cards. A card puts a frame around its
 * picture and its copy and asks them to share the space; here each statement
 * is given the full width, with the photograph on one side and the quote on
 * the other, and the rows are separated by a hairline rather than boxed.
 */
export default function VisionMission() {
  return (
    <Section id="vision-mission" tone="cream" ariaLabel="Vision and mission">
      <SectionTitle
        align="center"
        overline="Vision & Mission"
        title={
          <>
            Where technology and human capability
            <span className="text-gradient-gold"> advance in step.</span>
          </>
        }
      />

      <div className="mt-16 divide-y divide-black/[0.07]">
        {STATEMENTS.map((statement) => (
          <div key={statement.id} className="py-12 first:pt-0 last:pb-0 md:py-16">
            <Statement statement={statement} />
          </div>
        ))}
      </div>
    </Section>
  );
}
