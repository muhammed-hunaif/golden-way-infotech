/**
 * Primary navigation. `href` values map to section ids on the single-page site.
 *
 * Top-level items are kept few; everything else hangs off them in a dropdown, so
 * the bar stays quiet while the whole page is still one click away. Home is the
 * logo and Contact is the "Let's Talk" button, so neither needs a link here.
 */
export const NAV_LINKS = [
  {
    id: 'about',
    label: 'About',
    href: '#about',
    children: [
      { id: 'about', label: 'About Us', href: '#about', hint: 'Who we are' },
      {
        id: 'vision-mission',
        label: 'Vision & Mission',
        href: '#vision-mission',
        hint: 'What we are building toward',
      },
      { id: 'why-us', label: 'Why Choose Us', href: '#why-us', hint: 'Ten reasons' },
      {
        id: 'global-presence',
        label: 'Global Presence',
        href: '#global-presence',
        hint: 'Four hubs, 30+ countries',
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    href: '#services',
    children: [
      { id: 'services', label: 'All Services', href: '#services', hint: '17 capability areas' },
      {
        id: 'emerging-technologies',
        label: 'Emerging Technologies',
        href: '#emerging-technologies',
        hint: 'AI, ML, data science, analytics',
      },
      {
        id: 'web-development',
        label: 'Website Development',
        href: '#web-development',
        hint: 'Build and maintenance',
      },
    ],
  },
  {
    id: 'technology',
    label: 'Technology',
    href: '#technology',
    children: [
      {
        id: 'technology',
        label: 'Core Technology Stack',
        href: '#technology',
        hint: 'The working stack',
      },
      { id: 'approach', label: 'Our Approach', href: '#approach', hint: 'How engagements run' },
    ],
  },
  { id: 'training', label: 'Training', href: '#training' },
];

/** Every section id the navigation can highlight, parents and children alike. */
export const NAV_SECTION_IDS = [
  ...new Set(NAV_LINKS.flatMap((link) => [link.id, ...(link.children ?? []).map((c) => c.id)])),
];

/** True when a top-level item, or anything inside its dropdown, is in view. */
export function isNavItemActive(link, activeId) {
  if (link.id === activeId) return true;
  return (link.children ?? []).some((child) => child.id === activeId);
}

export const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Vision & Mission', href: '#vision-mission' },
      { label: 'Our Approach', href: '#approach' },
      { label: 'Why Choose Us', href: '#why-us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Software & Web', href: '#services' },
      { label: 'Database Technologies', href: '#services' },
      { label: 'Cloud & Security', href: '#services' },
      { label: 'Design & Creative', href: '#services' },
      { label: 'Marketing & Growth', href: '#services' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'Core Technology Stack', href: '#technology' },
      { label: 'Emerging Technologies', href: '#emerging-technologies' },
      { label: 'Website Development', href: '#web-development' },
      { label: 'Mobility & Web Approach', href: '#approach' },
    ],
  },
  {
    title: 'Training',
    links: [
      { label: 'Learn Through Real Projects', href: '#training' },
      { label: 'Talent Development Hub', href: '#global-presence' },
      { label: 'Training Enquiries', href: '#contact' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'Dubai, UAE', href: '#global-presence' },
      { label: 'Chennai, India', href: '#global-presence' },
      { label: 'Bangalore, India', href: '#global-presence' },
      { label: 'Kochi, India', href: '#global-presence' },
    ],
  },
];
