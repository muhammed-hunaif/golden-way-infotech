import { SITE } from '@/config/site';
import Section from '@/components/common/Section';
import SectionTitle from '@/components/common/SectionTitle';
import EnquiryForm from '@/components/common/EnquiryForm';

/** Small label over a small value, for the secondary details. */
function Detail({ label, children }) {
  return (
    <div>
      <dt className="font-caps text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </dt>
      <dd className="mt-1.5 text-[0.875rem] text-ink-soft">{children}</dd>
    </div>
  );
}

export default function Contact() {
  return (
    <Section id="contact" tone="cream" ariaLabel="Contact">
      <SectionTitle
        overline="Contact Us"
        title={
          <>
            Let&apos;s Build
            <span className="text-gradient-gold"> What&apos;s Next.</span>
          </>
        }
        description="Golden Way Infotech welcomes enquiries from businesses exploring new technology capability, organizations considering digital initiatives, students and professionals interested in structured training, and potential partners looking to collaborate."
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-24">
        {/* Details as type, not as a panel. The city and the phone number are set
            at heading size because they are what someone scanning this section is
            actually looking for — everything else is supporting detail and stays
            at supporting size. */}
        <div>
          <div data-reveal>
            <p className="overline">Dubai Head Office</p>

            <p className="mt-5 font-display text-[2.25rem] font-normal leading-none text-night md:text-[2.75rem]">
              Dubai
            </p>

            <a
              href={SITE.headOffice.tel.href}
              className="mt-4 inline-block font-display text-[1.5rem] font-normal leading-none text-night transition-colors duration-400 ease-premium hover:text-gold-700 md:text-[1.75rem]"
            >
              {SITE.headOffice.tel.label}
            </a>

            <address className="mt-6 text-[0.875rem] not-italic leading-[1.9] text-ink-soft">
              {/* `slice(1)` drops the legal name, which the logo above already
                  states and the footer repeats. */}
              {SITE.headOffice.lines.slice(1).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <dl
            className="mt-10 grid gap-6 border-t border-black/[0.08] pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            data-reveal
          >
            <Detail label="Fax">{SITE.headOffice.fax.label}</Detail>

            <Detail label="Website">
              <a
                href={SITE.website.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium text-night transition-colors duration-400 hover:text-gold-700"
              >
                {SITE.website.label}
              </a>
            </Detail>

            <Detail label="Email">{SITE.emailPlaceholder}</Detail>
          </dl>

          <div className="mt-10 border-t border-black/[0.08] pt-8" data-reveal>
            <p className="overline">India Presence</p>
            <ul className="mt-5 space-y-2">
              {SITE.indiaPresence.map((location) => (
                <li
                  key={location}
                  className="font-display text-[1.125rem] font-normal leading-snug text-night"
                >
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal>
          <EnquiryForm />
        </div>
      </div>
    </Section>
  );
}
