import { Boxes, Compass, Hammer, Wrench } from 'lucide-react';

/**
 * Training positioning, drawn only from what the company profile states:
 * exposure to real project environments, current tools, and industry-relevant
 * methods rather than theoretical instruction alone.
 */
export const TRAINING_PILLARS = [
  {
    id: 'real-project-environments',
    title: 'Real Project Environments',
    icon: Boxes,
    description:
      'Training runs alongside genuine, ongoing project work rather than isolated classroom exercises.',
  },
  {
    id: 'current-tools',
    title: 'Current Tools',
    icon: Wrench,
    description:
      'Learners work with the tools used on live client engagements across the organization.',
  },
  {
    id: 'industry-relevant-methods',
    title: 'Industry-Relevant Methods',
    icon: Compass,
    description:
      'Methods taught reflect how technology work is actually planned, structured, and delivered.',
  },
  {
    id: 'practical-skills',
    title: 'Practical Skills',
    icon: Hammer,
    description:
      'Trainers and developers bring active industry backgrounds, keeping instruction tied to applied practice.',
  },
];

export const TRAINING_INTRO =
  'Running parallel to client project delivery, structured training programs give students and working professionals exposure to real project environments, current tools, and industry-relevant methods rather than theoretical instruction alone.';

export const TRAINING_AUDIENCE = ['Students', 'Working Professionals', 'Client-Facing Teams'];
