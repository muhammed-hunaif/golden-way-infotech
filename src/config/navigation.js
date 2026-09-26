/**
 * Route map and primary navigation.
 *
 * The site is six routes. Anything that lives inside a route is reached by a
 * `/path#section` target: the dropdown and footer link straight to a section on
 * another page, and <AppLink> decides whether that is a page change or a scroll.
 *
 * Home is the logo, so it needs no top-level entry here.
 */
export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  technology: '/technology',
  training: '/training',
  contact: '/contact',
};

export const NAV_LINKS = [
  {
    id: 'company',
    label: 'Company',
    to: ROUTES.about,
    intro:
      'A Dubai-headquartered technology and training company, delivering since 2012 across four hubs and 30+ countries.',
    children: [
      { label: 'About Us', to: ROUTES.about, hint: 'Who we are' },
      {
        label: 'Vision & Mission',
        to: `${ROUTES.about}#vision-mission`,
        hint: 'What we are building toward',
      },
      { label: 'Why Choose Us', to: `${ROUTES.about}#why-us`, hint: 'Ten reasons' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    to: ROUTES.services,
    intro:
      'Software, cloud, cybersecurity, AI and design solutions, each shaped around the business it serves.',
    children: [
      { label: 'All Services', to: ROUTES.services, hint: '17 capability areas' },
      {
        label: 'Emerging Technologies',
        to: `${ROUTES.services}#emerging-technologies`,
        hint: 'AI, ML, data science, analytics',
      },
      {
        label: 'Website Development',
        to: `${ROUTES.services}#web-development`,
        hint: 'Build and maintenance',
      },
    ],
  },
  {
    id: 'technology',
    label: 'Technology',
    to: ROUTES.technology,
    intro:
      'The working stack behind every engagement, and the approach that takes a project from brief to launch.',
    children: [
      {
        label: 'Core Technology Stack',
        to: `${ROUTES.technology}#technology`,
        hint: 'The working stack',
      },
      { label: 'Our Approach', to: `${ROUTES.technology}#approach`, hint: 'How engagements run' },
    ],
  },
  { id: 'training', label: 'Training', to: ROUTES.training },
  { id: 'contact', label: 'Contact', to: ROUTES.contact },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: ROUTES.about },
      { label: 'Vision & Mission', to: `${ROUTES.about}#vision-mission` },
      { label: 'Why Choose Us', to: `${ROUTES.about}#why-us` },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', to: ROUTES.services },
      { label: 'Emerging Technologies', to: `${ROUTES.services}#emerging-technologies` },
      { label: 'Website Development', to: `${ROUTES.services}#web-development` },
      { label: 'Design & Creative', to: ROUTES.services },
      { label: 'Marketing & Growth', to: ROUTES.services },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'Core Technology Stack', to: `${ROUTES.technology}#technology` },
      { label: 'Our Approach', to: `${ROUTES.technology}#approach` },
    ],
  },
  {
    title: 'Training',
    links: [
      { label: 'Learn Through Real Projects', to: ROUTES.training },
      { label: 'Talent Development Hub', to: ROUTES.training },
      { label: 'Training Enquiries', to: ROUTES.contact },
    ],
  },
];
