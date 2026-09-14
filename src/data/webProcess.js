import { ClipboardList, Code2, LayoutTemplate, RefreshCw, Rocket, TestTube2 } from 'lucide-react';

/** "Website Development & Maintenance" — the profile's engagement sequence. */
export const WEB_PROCESS_STEPS = [
  {
    id: 'understand-requirements',
    step: '01',
    title: 'Understand Requirements',
    icon: ClipboardList,
    description:
      'We analyze your audience, goals, and page structure to define exactly what your site must deliver.',
  },
  {
    id: 'plan-structure',
    step: '02',
    title: 'Plan / Structure',
    icon: LayoutTemplate,
    description:
      'We map page structure and functionality upfront, agreeing on scope before any build work begins.',
  },
  {
    id: 'development',
    step: '03',
    title: 'Development',
    icon: Code2,
    description:
      'Our engineers build with PHP, Java, and JavaScript for robust backend logic and interactive front-end behavior.',
  },
  {
    id: 'testing',
    step: '04',
    title: 'Testing',
    icon: TestTube2,
    description:
      'We test every page to confirm structure, links, forms, and functionality work as intended before launch.',
  },
  {
    id: 'deployment',
    step: '05',
    title: 'Deployment',
    icon: Rocket,
    description:
      'After testing, you deploy your build to the live server and make it accessible to visitors.',
  },
  {
    id: 'maintenance',
    step: '06',
    title: 'Maintenance',
    icon: RefreshCw,
    description:
      'You receive six months of complimentary content updates; extra pages or modules are priced by complexity.',
  },
];

export const WEB_PROCESS_NOTE =
  'Because accurate output depends on accurate input, company profiles, product imagery, brochures, and specific requirements are needed upfront, letting build work proceed without repeated clarification cycles.';
