import { ClipboardList, Code2, LayoutTemplate, RefreshCw, Rocket, TestTube2 } from 'lucide-react';

/** "Website Development & Maintenance" — the profile's engagement sequence. */
export const WEB_PROCESS_STEPS = [
  {
    id: 'understand-requirements',
    step: '01',
    title: 'Understand Requirements',
    icon: ClipboardList,
    description:
      'Every engagement starts with understanding what a business is trying to achieve online: its audience, message, page structure, and the functionality visitors will actually need.',
  },
  {
    id: 'plan-structure',
    step: '02',
    title: 'Plan / Structure',
    icon: LayoutTemplate,
    description:
      'Page structure and functionality are mapped out before build work begins, so the scope of the site is agreed rather than assumed.',
  },
  {
    id: 'development',
    step: '03',
    title: 'Development',
    icon: Code2,
    description:
      'Engineering draws on PHP and Java for application logic and backend processing, with JavaScript shaping front-end behaviour, so the finished build stays functional and able to grow alongside the business.',
  },
  {
    id: 'testing',
    step: '04',
    title: 'Testing',
    icon: TestTube2,
    description:
      'Pages move through testing before going live, confirming that structure and functionality behave as intended.',
  },
  {
    id: 'deployment',
    step: '05',
    title: 'Deployment',
    icon: Rocket,
    description: 'The tested build is deployed and taken live.',
  },
  {
    id: 'maintenance',
    step: '06',
    title: 'Maintenance',
    icon: RefreshCw,
    description:
      'Deployment is followed by six months of complimentary content updates. New modules, added pages, or functionality beyond the original scope are handled separately, priced by mutual agreement based on complexity.',
  },
];

export const WEB_PROCESS_NOTE =
  'Because accurate output depends on accurate input, company profiles, product imagery, brochures, and specific requirements are needed upfront, letting build work proceed without repeated clarification cycles.';
